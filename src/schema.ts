import { z } from 'zod';
import { zodFunction, zodResponseFormat } from 'openai/helpers/zod';

export type SupportingFact = {
    title: Array<string>,
    sent_id: Array<number>,
}

export type Context = {
    title: Array<string>,
    sentences: Array<Array<string>>,
}

export type TrainData = {
    id: string,
    question: string,
    answer: string,
    type: string,
    level: string,
    supporting_facts: SupportingFact,
    context: Context
}

export type QuestionInput = Pick<TrainData, 'question' | 'context'>;

export const SentenceReferenceSchema = z.strictObject({
    title: z.string(),
    sentence_id: z.number().int().nonnegative(),
});

export const ModelAnswerSchema = z.strictObject({
    answer: z.string(),
    supporting_facts: z.array(SentenceReferenceSchema),
});

export type ModelAnswer = z.infer<typeof ModelAnswerSchema>;

export const ModelAnswerFormat = zodResponseFormat(ModelAnswerSchema, 'hotpotqa_answer');

export const ContextSummarySchema = z.strictObject({
    notes: z.array(SentenceReferenceSchema.extend({
        title: z.string().min(1),
        text: z.string().min(1),
    })),
});

export type ContextSummary = z.infer<typeof ContextSummarySchema>;

// The model returns local source IDs; the strategy restores exact dataset titles.
export const SummaryDraftSchema = z.strictObject({
    notes: z.array(z.strictObject({
        source_id: z.number().int().nonnegative(),
        sentence_id: SentenceReferenceSchema.shape.sentence_id,
        text: z.string().min(1),
    })),
});

export type SummaryDraft = z.infer<typeof SummaryDraftSchema>;
export const SummaryDraftFormat = zodResponseFormat(SummaryDraftSchema, 'context_summary');

export const SearchQuerySchema = z.strictObject({
    query: z.string().min(1),
});

export const SearchContextTool = zodFunction({
    name: 'search_context',
    description: 'Search the available source passages using a short keyword query. Returns passages with exact titles and original sentence indices.',
    parameters: SearchQuerySchema,
});

// Saved metrics use null for unavailable measurements; reported zeros remain valid.
export const MeasurementSchema = z.number().nonnegative();
export const TokenCountSchema = z.int().nonnegative();
const OptionalCount = TokenCountSchema.nullish().catch(null);

export const UsageSchema = z.object({
    prompt_tokens: OptionalCount,
    completion_tokens: OptionalCount,
    total_tokens: OptionalCount,
    cost: MeasurementSchema.nullish().catch(null),
    prompt_tokens_details: z.object({
        cached_tokens: OptionalCount,
        cache_write_tokens: OptionalCount,
    }).nullish().catch(null),
    completion_tokens_details: z.object({
        reasoning_tokens: OptionalCount,
    }).nullish().catch(null),
});

export type Usage = z.infer<typeof UsageSchema>;

const Score = z.number().min(0).max(1);
export const ScoresSchema = z.object({
    answerCorrectness: z.enum(['Y', 'N']),
    exactMatch: z.union([z.literal(0), z.literal(1)]),
    tokenF1: Score,
    citationPrecision: Score,
    citationRecall: Score,
    citationF1: Score,
});

export type Scores = z.infer<typeof ScoresSchema>;
export const ResultStatusSchema = z.enum(['completed', 'failed', 'unsupported']);
export type ResultStatus = z.infer<typeof ResultStatusSchema>;
export const CacheModeSchema = z.enum(['explicit', 'implicit']);
export type CacheMode = z.infer<typeof CacheModeSchema>;

const NonblankText = z.string().refine(value => value.trim().length > 0);
const SavedCallSchema = z.looseObject({
    usage: z.unknown().optional(),
    rawResponse: z.unknown().optional(),
});

/** Validate record metadata here; individual scores and measurements are checked when read. */
export const SavedResultSchema = SavedCallSchema.extend({
    strategy: NonblankText,
    questionId: NonblankText,
    runId: z.string().nullish(),
    model: z.string().nullish(),
    provider: z.string().nullish(),
    dataset: z.string().nullish(),
    cacheMode: z.string().nullish(),
    status: ResultStatusSchema.nullish(),
    error: z.string().nullish(),
    output: z.unknown().optional(),
    scores: z.unknown().optional(),
    latencyMs: z.unknown().optional(),
    endToEndLatencyMs: z.unknown().optional(),
    modelCalls: z.array(SavedCallSchema).optional(),
});

export type SavedResult = z.infer<typeof SavedResultSchema>;
