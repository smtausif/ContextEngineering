"""Independent offline verification of report exports and preserved evidence."""
import csv
import hashlib
import json
from collections import defaultdict
from decimal import Decimal
from datetime import datetime
from html.parser import HTMLParser
from pathlib import Path

root = Path(__file__).resolve().parent.parent
base = root / 'reports/final-comparison-evidence'
summary = json.loads((base / 'summary.json').read_text())
rows = list(csv.DictReader((root / 'reports/final-comparison-results.csv').open(newline='')))
assert len(rows) == 1600
assert len({(r['group'], r['variant'], r['questionId']) for r in rows}) == 1600
groups = defaultdict(list)
for row in rows:
    groups[row['group'] + '/' + row['variant']].append(row)
assert len(groups) == 8
for group in summary['groups']:
    rr = groups[group['key']]
    assert len(rr) == 200
    assert [r['questionId'] for r in rr] == summary['questionIds']
    for k in ['exactMatch', 'tokenF1', 'citationPrecision', 'citationRecall', 'citationF1']:
        assert abs(sum(float(r[k]) for r in rr) / 200 - group[k]) < 1e-12
    for k in ['requests', 'inputTokens', 'outputTokens', 'totalTokens', 'costUSD', 'cachedTokens', 'cacheWriteTokens']:
        assert abs(sum(float(r[k]) for r in rr) - group[k]) < 1e-8
    assert abs(sum(float(r['latencyMs']) for r in rr) / 200 - group['latencyMs']) < 1e-8
    assert sum(int(r['cacheHitRequests']) for r in rr) == group['cacheHitRequests']
    assert len({r['questionId'] for r in rr}) == 200
requests = []
for row in rows:
    request_paths = json.loads(row['rawResponsePaths'])
    requests += request_paths
    assert len(request_paths) == int(row['requests'])
    assert (root / row['resultPath']).exists()
    record = json.loads((root / row['resultPath']).read_text())
    assert record['latencyMs'] >= sum(c['latencyMs'] for c in record['modelCalls']) - 1e-6
    times = []
    for response_path, intent_path in zip(request_paths, json.loads(row['requestIntentPaths'])):
        receipt = json.loads((root / response_path).read_text())
        intent = json.loads((root / intent_path).read_text())
        start = datetime.fromisoformat(intent['startedAt'].replace('Z', '+00:00'))
        end = datetime.fromisoformat(receipt['receivedAt'].replace('Z', '+00:00'))
        assert end >= start
        if times: assert start >= times[-1][1]
        times.append((start, end))
    record_start = datetime.fromisoformat(record['startedAt'].replace('Z', '+00:00'))
    assert times[0][0] >= record_start
    assert record['latencyMs'] >= (times[-1][1] - record_start).total_seconds() * 1000 - 1

    assert all((root / p).exists() for p in json.loads(row['requestIntentPaths']))
assert len(requests) == len(set(requests)) == 2800
cost = Decimal(0)
input_tokens = output_tokens = total_tokens = 0
for p in requests:
    receipt = json.loads((root / p).read_text(), parse_float=Decimal)
    raw = json.loads(receipt['body'], parse_float=Decimal)
    assert raw['usage'] == receipt['usage']
    cost += raw['usage']['cost']
    input_tokens += raw['usage']['prompt_tokens']
    output_tokens += raw['usage']['completion_tokens']
    total_tokens += raw['usage']['total_tokens']
assert input_tokens == summary['totals']['inputTokens'] == 3047850
assert output_tokens == summary['totals']['outputTokens'] == 754921
assert total_tokens == input_tokens + output_tokens == 3802771
assert abs(cost - Decimal(str(summary['totals']['costUSD']))) < Decimal('0.00000000001')
for f in json.loads((base / 'source-inventory.json').read_text())['files']:
    p = root / f['path']
    assert p.stat().st_size == f['bytes'], f['path']
    assert hashlib.sha256(p.read_bytes()).hexdigest() == f['sha256'], f['path']

class HTMLAudit(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.anchors = []
        self.resources = []
        self.svgs = 0
        self.tables = 0
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            assert attrs['id'] not in self.ids, attrs['id']
            self.ids.add(attrs['id'])
        if tag == 'a':
            self.anchors.append(attrs.get('href', ''))
        if tag in ['script', 'iframe', 'img', 'link', 'object', 'video', 'audio']:
            self.resources.append((tag, attrs))
        if tag == 'svg': self.svgs += 1
        if tag == 'table': self.tables += 1

html = (root / 'reports/final-comparison-report.html').read_text()
audit = HTMLAudit()
audit.feed(html)
assert not audit.resources, audit.resources
assert audit.svgs == 3
assert audit.tables == 6
assert 'url(' not in html.lower()
assert '@import' not in html.lower()
assert 'width=device-width' in html
assert '@media(max-width:700px)' in html
for href in audit.anchors:
    if href.startswith('#'):
        assert href[1:] in audit.ids
    else:
        assert not href.startswith(('http:', 'https:', '//', 'javascript:'))
        assert (root / 'reports' / href).exists(), href

# Validate exact two-sided binomial/McNemar calculation independently.
from math import comb
pairs = json.loads((base / 'paired-comparisons.json').read_text())
assert len(pairs) == 13
for p in pairs:
    n = p['wins'] + p['losses']
    expected = min(1.0, 2 * sum(comb(n, i) for i in range(min(p['wins'], p['losses']) + 1)) / (2**n)) if n else 1
    assert abs(expected - p['mcnemarExactP']) < 1e-12
    left = {r['questionId']: r for r in groups[p['left']]}
    right = {r['questionId']: r for r in groups[p['right']]}
    assert len(left) == len(right) == p['n'] == 200
    for source, field in [('exactMatch', 'accuracyDelta'), ('tokenF1', 'answerF1Delta'), ('citationF1', 'citationF1Delta'), ('latencyMs', 'latencyMsDelta'), ('costUSD', 'costUSDDelta')]:
        delta = sum(float(right[q][source]) - float(left[q][source]) for q in left) / 200
        assert abs(delta - p[field]) < 1e-10
result = {
    'status': 'PASS', 'csvRows': 1600, 'uniqueResponses': 2800,
    'sameOrderedIDsAcrossEightCells': True, 'summaryMetricsRecomputed': True,
    'pairedComparisonsVerified': 13, 'latencyTraceConsistency': 'PASS', 'exactProviderReportedCostUSD': str(cost),
    'sourceInventoryVerified': True, 'htmlExternalResources': 0,
    'htmlInlineCharts': audit.svgs, 'htmlTables': audit.tables,
    'htmlLinksAndUniqueIDs': 'PASS', 'responsiveStylesPresent': True,
    'browserScreenshot': 'Unavailable: local headless Chrome exited 134. Structural/offline-resource checks passed; visual screenshot inspection not performed.'
}
print(json.dumps(result, indent=2))
if __name__ == '__main__':
    (base / 'report-checks.json').write_text(json.dumps(result, indent=2) + '\n')
