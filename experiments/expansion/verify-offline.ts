/** Reproducible, network-denied integration test fixture. Never runs experiments. */
import { mkdtempSync, cpSync, mkdirSync, writeFileSync, symlinkSync, readdirSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';

const root=resolve(import.meta.dirname,'../..');
const isolated=mkdtempSync(join(tmpdir(),'context-expansion-offline-'));
for(const directory of ['src','tests','experiments/context-noise','experiments/expansion'])cpSync(join(root,directory),join(isolated,directory),{recursive:true});
for(const file of ['package.json','package-lock.json','tsconfig.json'])cpSync(join(root,file),join(isolated,file));
symlinkSync(join(root,'node_modules'),join(isolated,'node_modules'));
mkdirSync(join(isolated,'data'));
for(const file of ['distractor-validation.parquet','validation-00000-of-00001.parquet'])symlinkSync(join(root,'data/distractor-validation.parquet'),join(isolated,'data',file));
const manifest=JSON.parse(readFileSync(join(root,'experiments/expansion/prepared/manifest.json'),'utf8'));
const bootstrap=join(isolated,'offline-test-environment.mjs');
writeFileSync(bootstrap,`import cp from 'node:child_process';
import {syncBuiltinESMExports} from 'node:module';
delete process.env.OPENROUTER_API_KEY;
globalThis.fetch=async()=>{throw new Error('Offline test fixture forbids network');};
const original=cp.execFileSync;
cp.execFileSync=function(file,args,options){
  if(file==='git'&&JSON.stringify(args)===JSON.stringify(['branch','--show-current']))return 'clean-vs-noisy-context\\n';
  if(file==='git'&&JSON.stringify(args)===JSON.stringify(['rev-parse','HEAD']))return ${JSON.stringify(manifest.source.head+'\n')};
  if(file==='git'&&JSON.stringify(args)===JSON.stringify(['rev-parse','origin/rag-hybrid']))return ${JSON.stringify(manifest.source.commit+'\n')};
  return original.call(this,file,args,options);
};
syncBuiltinESMExports();
`);
const tests=readdirSync(join(isolated,'tests')).filter(f=>f.endsWith('.test.ts')).map(f=>'tests/'+f);
tests.push('experiments/context-noise/pilot.test.ts','experiments/expansion/expansion.test.ts');
let output='',passed=false;
try{output=execFileSync(process.execPath,['--import',bootstrap,'--test',...tests],{cwd:isolated,encoding:'utf8',maxBuffer:20*1024*1024});passed=true;}
catch(cause){const e=cause as {stdout?:string;stderr?:string};output=String(e.stdout??'')+'\n'+String(e.stderr??'');}
const destination=join(root,'experiments/expansion/prepared/validation');mkdirSync(destination,{recursive:true});writeFileSync(join(destination,'isolated-all.tap'),output);
writeFileSync(join(destination,'isolated-environment.json'),JSON.stringify({isolated,passed,network:'global fetch denied before test imports; tests use saved-response/SDK mocks',dataset:'Verified distractor data aliased to historical expected filename only inside isolated fixture',git:'Read-only Git queries stubbed to supply the branch expected by the original pilot and the actual recorded source hashes; no repository branches changed',sources:'Copied without edits; original strategies, scorer, pilot and results untouched'},null,2)+'\n');
console.log(output.slice(-2400));console.log(JSON.stringify({isolated,passed,log:'experiments/expansion/prepared/validation/isolated-all.tap'}));
if(!passed)process.exitCode=1;
