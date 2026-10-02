const fs = require('fs');
const path = require('path');
const vm = require('vm');

const content = fs.readFileSync(path.join(__dirname, '../src/data/vedicArticlesData.js'), 'utf8');

function extractObject(slug) {
  const marker = '"' + slug + '":';
  const idx = content.indexOf(marker);
  if (idx === -1) return null;
  const startBrace = content.indexOf('{', idx);
  let depth = 0;
  let endBrace = -1;
  let inString = false;
  let stringChar = null;
  let escape = false;
  for (let i = startBrace; i < content.length; i++) {
    const ch = content[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (ch === '\\') {
      escape = true;
      continue;
    }
    if (!inString && (ch === '"' || ch === "'" || ch === '`')) {
      inString = true;
      stringChar = ch;
      continue;
    }
    if (inString && ch === stringChar) {
      inString = false;
      stringChar = null;
      continue;
    }
    if (!inString) {
      if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) {
          endBrace = i;
          break;
        }
      }
    }
  }
  if (endBrace !== -1) {
    const jsStr = content.substring(startBrace, endBrace + 1);
    try {
      return vm.runInNewContext('(' + jsStr + ')');
    } catch (e) {
      console.error('JS parse error for', slug, e.message);
      return null;
    }
  }
  return null;
}

const yajurvedaSlugs = [
  "shatapatha-brahmana", "taittiriya-brahmana", "taittiriya-aranyaka",
  "taittiriya-samhita", "isha-upanishad", "brihadaranyaka-upanishad",
  "katha-upanishad", "taittiriya-upanishad", "shvetashvatara-upanishad",
  "shiva-sankalpa-sukta", "baudhayana-sulbasutra", "rudrabhisheka"
];

const samavedaSlugs = [
  "tandya-mahabrahmana", "chandogya-upanishad", "kena-upanishad"
];

const atharvavedaSlugs = [
  "gopatha-brahmana", "mundaka-upanishad", "mandukya-upanishad",
  "prashna-upanishad", "prithvi-sukta", "kaushika-sutra", "vaitana-shrautasutra"
];

const yajurvedaData = {};
yajurvedaSlugs.forEach(slug => {
  const obj = extractObject(slug);
  if (obj) {
    yajurvedaData[slug] = obj;
    console.log(`✅ Extracted Yajurveda: ${slug}`);
  } else {
    console.log(`❌ Failed Yajurveda: ${slug}`);
  }
});

const samavedaData = {};
samavedaSlugs.forEach(slug => {
  const obj = extractObject(slug);
  if (obj) {
    samavedaData[slug] = obj;
    console.log(`✅ Extracted Samaveda: ${slug}`);
  } else {
    console.log(`❌ Failed Samaveda: ${slug}`);
  }
});

const atharvavedaData = {};
atharvavedaSlugs.forEach(slug => {
  const obj = extractObject(slug);
  if (obj) {
    atharvavedaData[slug] = obj;
    console.log(`✅ Extracted Atharvaveda: ${slug}`);
  } else {
    console.log(`❌ Failed Atharvaveda: ${slug}`);
  }
});

fs.writeFileSync(path.join(__dirname, 'data/yajurveda.cjs'), 'module.exports = ' + JSON.stringify(yajurvedaData, null, 2) + ';\n', 'utf8');
fs.writeFileSync(path.join(__dirname, 'data/samaveda.cjs'), 'module.exports = ' + JSON.stringify(samavedaData, null, 2) + ';\n', 'utf8');
fs.writeFileSync(path.join(__dirname, 'data/atharvaveda.cjs'), 'module.exports = ' + JSON.stringify(atharvavedaData, null, 2) + ';\n', 'utf8');

console.log('🎉 Extracted all non-Rigveda modules cleanly!');
