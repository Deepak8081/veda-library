const fs = require('fs');
const path = require('path');

const rigveda = require('./data/rigveda.cjs');
const keys = Object.keys(rigveda);

console.log(`=== RIGVEDA COMPLETE 33 ARTICLES AUDIT (${keys.length} ARTICLES) ===`);

const requiredFields = [
  'id', 'slug', 'categorySlug', 'subjectSlug', 'title', 'hindiTitle',
  'contentType', 'tags', 'badges', 'intro', 'etymology', 'shastricBase',
  'sourceMeta', 'primaryMantra', 'deitiesSymbols', 'traditionPlaces',
  'vidhiUsage', 'traditionsDifferences', 'historyResearch', 'relatedArticles',
  'relatedGrantha', 'relatedTopics'
];

let issues = 0;

keys.forEach((key, idx) => {
  const art = rigveda[key];
  const missing = requiredFields.filter(f => !art[f]);
  const hasMantras = Array.isArray(art.allMantras) && art.allMantras.length > 0;
  const mantraCount = hasMantras ? art.allMantras.length : (art.primaryMantra ? 1 : 0);
  const introLen = (art.intro || '').length;
  const histLen = (art.historyResearch || '').length;
  const badgesCount = (art.badges || []).length;
  const etymCount = (art.etymology || []).length;

  let flag = '✅';
  if (missing.length > 0 || introLen < 50 || histLen < 50) {
    flag = '⚠️';
    issues++;
  }

  console.log(`${flag} ${(idx+1).toString().padStart(2)}. [${key.padEnd(25)}] : ${art.hindiTitle.slice(0, 35).padEnd(35)} | Mantras: ${mantraCount.toString().padStart(2)} | Intro: ${introLen.toString().padStart(3)} | Hist: ${histLen.toString().padStart(3)} | Badges: ${badgesCount} | Etym: ${etymCount}`);

  if (missing.length > 0) {
    console.log(`   ❌ Missing fields: ${missing.join(', ')}`);
  }
});

console.log(`\nAudit Complete: ${keys.length} articles audited, ${issues} issues found.`);
