import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import { loadTsModule } from '../scripts/load-ts-module.mjs';
const { areaProfileSlug } = loadTsModule('src/lib/areaRoutes.ts');
const { getAreaProfiles } = loadTsModule('src/lib/realtyflow.ts');
const { allArticles, articleSilo } = loadTsModule('src/lib/magazine.ts');
const source = fs.readFileSync('next.config.ts', 'utf8').replaceAll('import.meta.dirname', 'process.cwd()');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { default: config } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const redirects = await config.redirects();

test('every guide legacy URL redirects directly to its canonical route', () => {
  for (const article of allArticles.filter(a => articleSilo(a) === 'guide')) {
    const destination = article.slug === 'kjopsprosess-bolig-i-spania' ? '/guide/kjope-bolig-i-spania' : `/guide/${article.slug}`;
    for (const prefix of ['/magasin/', '/kjopsprosess/']) {
      const redirect = redirects.find(r => r.source === prefix + article.slug);
      assert.equal(redirect?.destination, destination, prefix + article.slug);
      assert.equal(redirect?.permanent, true);
      assert.equal(redirects.some(r => !r.has && r.source === destination), false, 'no redirect chain');
    }
  }
});

test('CRM spelling variants map to stable area URLs', () => {
  for (const [slug, expected] of [['ciudad-quesasa','ciudad-quesada'],['muxtamel','mutxamel'],['san-pienetar','san-pedro-del-pinatar'],['javea-xabia','javea']]) {
    assert.equal(areaProfileSlug({name:'Area',slug}), expected);
  }
});

test('area enrichment does not duplicate known canonical towns; offline routes survive', async () => {
  const original = globalThis.fetch;
  try {
    globalThis.fetch = async () => ({ok:true,json:async () => ({profiles:[{name:'Ciudad Quesada',slug:'ciudad-quesasa',region:'Costa Blanca sør',description:'Live description',published:true}]})});
    let profiles = await getAreaProfiles();
    const matches = profiles.filter(p => areaProfileSlug(p) === 'ciudad-quesada');
    assert.equal(matches.length,1);
    assert.equal(matches[0].description,'Live description');
    globalThis.fetch = async () => ({ok:true,json:async () => ({profiles:[{name:'Altea',slug:'altea',published:false}]})});
    assert.equal((await getAreaProfiles()).some(p=>areaProfileSlug(p)==='altea'),false, 'an explicitly hidden profile must stay hidden');
    globalThis.fetch = async () => { throw new Error('offline'); };
    profiles = await getAreaProfiles();
    for (const name of ['altea','albir','calpe','finestrat','polop','torrevieja','guardamar']) assert.ok(profiles.some(p=>areaProfileSlug(p)===name),name);
  } finally { globalThis.fetch = original; }
});
