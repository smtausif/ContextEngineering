/** Offline curation helper. Running this deliberately rewrites fixtures.json; never used by the runner. */
import { writeFile } from 'node:fs/promises';
import { ParquetFileReader } from '../../src/ParquetFileReader.ts';
import type { TrainData } from '../../src/schema.ts';
import { irrelevantForRow } from './irrelevant.ts';

// Each replacement was selected by reading the source sentence, not by model generation.
// A changed value is not sufficient on its own: the rationale states the exclusive relation.
const choices = [
  [1, 'Shirley Temple', 1, 'Chief of Protocol', 'Secretary of the Treasury', 'Changes the particular government office asked for; the alternative is asserted to be her only cabinet-level protocol assignment.'],
  [4, 'Adriana Trigiani', 0, 'Greenwich Village, New York City', 'Albany, New York', 'Replaces the stated home base with a different city for the same person and period.'],
  [5, 'Winner (band)', 0, 'YG Entertainment', 'SM Entertainment', 'Attributes formation of the same band in 2013 to a different sole company.'],
  [7, 'Androscoggin Bank Colisée', 0, '3,677 seated', '2,500 seated', 'Changes seated capacity, not total capacity, of the same arena.'],
  [12, "Oh My God (Guns N' Roses song)", 1, '1999', '2001', 'Changes the year of the same November radio promotion.'],
  [14, 'Alex Ferguson', 0, 'from 1986 to 2013', 'from 1988 to 2011', 'Gives incompatible start and end years for the same Manchester United tenure.'],
  [16, 'America East Conference', 1, 'North Atlantic Conference', 'Northern Athletic Conference', 'Changes the single official conference name for the identical 1988–1996 interval.'],
  [18, 'Richard Nixon', 0, '1969 until 1974', '1968 until 1973', 'Gives incompatible dates for the same presidency.'],
  [22, 'Front Row (software)', 1, 'keyboard function keys', 'a USB game controller', 'Replaces the supported alternative input and explicitly excludes keyboard function keys.'],
  [24, 'Peter Schmeichel', 0, "World's Best Goalkeeper", "World's Best Defender", 'Replaces the particular IFFHS award in the same years and excludes the original award.'],
  [26, 'Virginia Commonwealth University', 1, '1838', '1848', 'Changes the founding year of the same medical department; leaves the later 1854 transition unchanged.'],
  [31, 'Buck-Tick', 0, 'Fujioka, Gunma', 'Sapporo, Hokkaido', 'Changes the formation location of the same band in 1983.'],
  [53, 'Tosca (1956 film)', 2, 'Rome', 'Milan', 'Changes the production city of the same 1956 film starring Franco Corelli; explicitly excludes the documented city and removes the incompatible studio name.'],
  [36, 'Carlo Rovelli', 0, '2000', '2004', 'Changes when the same physicist began working in France.'],
  [39, 'Columbia University', 0, 'New York City', 'Boston', 'Moves the same university campus to another city; accompanying wording removes the Manhattan claim.'],
  [41, 'Tata Consultancy Services', 0, 'Mumbai', 'Bengaluru', 'Changes the corporate headquarters, not the employee work site in Kochi.'],
  [42, 'Masakazu Katsura', 0, '1962', '1968', 'Changes the birth year of the same manga author on the same month and day.'],
  [51, 'Carrefour', 1, '1,462', '1,162', 'Changes hypermarket count at the identical end-of-2016 reference date.'],
  [58, 'Boston, Lincolnshire', 2, '35,124', '45,124', 'Changes town population at the 2001 census; leaves the separate borough estimate unchanged.'],
  [63, 'What Are Little Boys Made Of?', 2, '821', '921', 'Changes the unique Roud index of the same nursery rhyme.'],
] as const;

export function createFixtures(rows: TrainData[]) {
return choices.map(([rowIndex, evidenceTitle, sentenceId, trueValue, falseValue, rationale], index) => {
  const row = rows[rowIndex];
  const sourceSentence = row.context.sentences[row.context.title.indexOf(evidenceTitle)][sentenceId];
  if (!sourceSentence.includes(trueValue)) throw new Error(`Missing curated span: ${row.id}`);
  let claim = sourceSentence.replace(trueValue, falseValue).trim();
  if (rowIndex === 1) claim += ' She did not serve as Chief of Protocol.';
  if (rowIndex === 22) claim = claim.replace('the a USB game controller', 'a USB game controller') + ' Keyboard function keys cannot control this program.';
  if (rowIndex === 24) claim += " He did not receive the World's Best Goalkeeper award in those years.";
  if (rowIndex === 39) claim = 'Columbia University, established in 1754, has its main campus in Boston, Massachusetts. Its main campus is not in New York City.';
  if (rowIndex === 41) claim = claim.replace('Bengaluru, Maharashtra', 'Bengaluru, Karnataka');
  if (rowIndex === 53) claim = 'Tosca, the 1956 film starring Franco Corelli, was made in Milan. Its production location was Milan rather than Rome.';
  const clarification = `This entry concerns ${evidenceTitle} and the specific historical detail described here. The dates and names identify the subject of the entry. The description refers to this subject alone, rather than to similarly named people, places, organizations, or works. It records a single account of that detail for reference purposes.`;
  // One 60–100 word passage; neutral padding is identical in role across fixtures.
  return { questionId: row.id, rowIndex, question: row.question, goldAnswer: row.answer,
    evidenceTitle, sentenceId, sourceSentence, trueValue, falseValue,
    title: `Reference entry ${String(index + 1).padStart(2, '0')}`,
    sentences: [claim, clarification], rationale, irrelevant: irrelevantForRow(rowIndex),
    review: { status: 'agent-reviewed', method: 'Source sentence and question inspected; exclusive fact substitution reviewed. Human review remains available in dry-run artifacts.' } };
});
}
if (import.meta.main) {
  const rows = await new ParquetFileReader({ filePath: 'data/distractor-validation.parquet' }).read(64);
  const fixtures = createFixtures(rows);
  await writeFile(new URL('fixtures.json', import.meta.url), JSON.stringify({ version: 'pilot-v2', fixtures }, null, 2) + '\n');
  console.log(`Wrote ${fixtures.length} curated fixtures.`);
}
