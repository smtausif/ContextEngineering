import assert from 'node:assert/strict';
import { test } from 'node:test';
import { summarization } from './summarization.ts';
import type { AIRequest, AIResponse } from './aiClient.ts';
import type { StrategyInput } from './strategy.ts';

const input: StrategyInput = {
  question: {
    id: 'summary-test',
    question: 'Which magazine started first?',
    context: {
      title: ["Arthur's Magazine", 'First for Women'],
      sentences: [
        ["Arthur's Magazine started in 1844."],
        ['First for Women started in 1989.'],
      ],
    },
  },
  configuration: { model: 'google/gemini-2.5-flash-lite' },
};

function response(answer: string): AIResponse {
  return {
    answer,
    requestedModelId: input.configuration.model,
    modelId: input.configuration.model,
    requestId: 'offline',
    provider: 'mock',
    finishReason: 'stop',
    responseTimeSeconds: 0.01,
    promptTokens: 100,
    completionTokens: 30,
    totalTokens: 130,
    cachedTokens: 0,
    cacheWriteTokens: null,
    cacheHit: false,
    costUsd: 0.001,
    costSource: 'reported',
    missingMetrics: ['cacheWriteTokens'],
  };
}

test('summarizes sources then answers using only the summary', async () => {
  const calls: AIRequest[] = [];
  const summary =
    "Arthur's Magazine: began 1844. First for Women: began 1989.";

  const result = await summarization(input, {
    async complete(request) {
      calls.push(request);
      return response(calls.length === 1 ? summary :
        `Final Answer: Arthur's Magazine
Explanation: 1844 is earlier than 1989.
Citations: ["Arthur's Magazine", "First for Women"]`);
    },
  });

  assert.equal(calls.length, 2);
  assert.ok(!JSON.stringify(calls[0]).includes(input.question.question));
  assert.ok(JSON.stringify(calls[1].userPrompt).includes(summary));
  assert.ok(!JSON.stringify(calls[1].userPrompt)
    .includes("Arthur's Magazine started in 1844."));

  for (const request of calls) {
    assert.equal(request.model, input.configuration.model);
    assert.equal(request.temperature, 0);
    assert.equal(request.maxOutputTokens, 512);
  }

  assert.equal(result.status, 'completed');
  if (result.status !== 'completed') return;
  assert.equal(result.strategy, 'summarization');
  assert.equal(result.answer, "Arthur's Magazine");
  assert.equal(result.outputFormatValid, true);
  assert.deepEqual(result.unknownCitationTitles, []);
  assert.equal(result.cacheMode, 'none_requested');
  assert.ok('preparationResponses' in result);
});

test('rejects truncated summaries before making an answer call', async () => {
  let calls = 0;
  await assert.rejects(
    summarization(input, {
      async complete() {
        calls++;
        return { ...response('Incomplete notes'), finishReason: 'length' };
      },
    }),
    /Summary reached the output limit/,
  );
  assert.equal(calls, 1);
});

test('API failures stop immediately without retry', async () => {
  let calls = 0;
  await assert.rejects(
    summarization(input, {
      async complete() {
        calls++;
        throw new Error('Offline simulated failure');
      },
    }),
    /Offline simulated failure/,
  );
  assert.equal(calls, 1);
});