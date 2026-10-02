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

const agnisukta = extractObject('agnisukta');
const purushaSukta = extractObject('purusha-sukta');
const nasadiyaSukta = extractObject('nasadiya-sukta');

console.log('agnisukta:', agnisukta ? 'OK' : 'FAIL');
console.log('purusha-sukta:', purushaSukta ? 'OK' : 'FAIL');
console.log('nasadiya-sukta:', nasadiyaSukta ? 'OK' : 'FAIL');

if (agnisukta && purushaSukta && nasadiyaSukta) {
  const rigvedaPath = path.join(__dirname, 'data/rigveda.cjs');
  const rigveda = require(rigvedaPath);
  rigveda['agnisukta'] = agnisukta;
  rigveda['purusha-sukta'] = purushaSukta;
  rigveda['nasadiya-sukta'] = nasadiyaSukta;

  fs.writeFileSync(rigvedaPath, 'module.exports = ' + JSON.stringify(rigveda, null, 2) + ';\n', 'utf8');
  console.log(`🎉 Successfully loaded all 33 articles into data/rigveda.cjs! Total count: ${Object.keys(rigveda).length}`);
}
