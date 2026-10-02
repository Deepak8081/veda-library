const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, '../src/data/vedicArticlesData.js');
let content = fs.readFileSync(targetFilePath, 'utf8');

const completeGopatha = `  "gopatha-brahmana": {
    id: "gopatha-brahmana",
    slug: "gopatha-brahmana",
    categorySlug: "veda",
    subjectSlug: "atharvaveda",
    title: "Gopatha Brahmana",
    hindiTitle: "गोपथ ब्राह्मण (पूर्व व उत्तर गोपथ)",
    contentType: "ATHARVAVEDIC BRAHMANA GRANTHA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Atharvaveda", "Brahmana", "Gopatha", "Brahma Priest", "Atharvan"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "Library Approved", type: "approved" }
    ],
    intro: "गोपथ ब्राह्मण अथर्ववेद का एकमात्र उपलब्ध एवं अत्यंत विशिष्ट ब्राह्मण ग्रंथ है। इसके प्रणेता महर्षि गोपथ हैं। यह दो भागों में विभक्त है: 'पूर्व गोपथ' (५ प्रपाठक) और 'उत्तर गोपथ' (६ प्रपाठक), कुल ११ प्रपाठक। यह ग्रंथ यज्ञ के सर्वोच्च अधीक्षक 'ब्रह्मा' (Brahma Priest) के सर्वोपरि महत्व, प्रणव (ॐकार) और गायत्री की उत्पत्ति, सृष्टि-विज्ञान, तथा अथर्ववेदीय शांति-पौष्टिक एवं अभिचारिक अनुष्ठानों का दार्शनिक आधार प्रस्तुत करता है।",
    etymology: [
      { term: "गोपथ", meaning: "महर्षि गोपथ द्वारा संकलित एवं प्रवर्तित ज्ञान-मार्ग।" },
      { term: "ब्रह्मत्व", meaning: "यज्ञ के चारों ऋत्विजों में सर्वोच्च 'ब्रह्मा' का दायित्व, जो मन से यज्ञ की रक्षा करता है।" }
    ],
    shastricBase: "अथर्ववेद शौनक एवं पैप्पलाद संहिता, वैतान श्रौतसूत्र, कौशिक गृह्यसूत्र।",
    sourceMeta: {
      grantha: "अथर्ववेद (Atharvaveda)",
      shakha: "शौनक एवं पैप्पलाद शाखा",
      kanda: "११ प्रपाठक (पूर्व गोपथ: ५, उत्तर गोपथ: ६)",
      rishi: "महर्षि गोपथ, अथर्वा, अंगिरा",
      devata: "परब्रह्म, ॐकार, प्रजापति, ब्रह्मा"
    },
    primaryMantra: {
      sanskrit: "ॐकाराग्रे॑ समु॒त्पन्नः॑ सर्व॒वेदानां॒ मस्तकम्।\\nब्र॒ह्मा य॒ज्ञस्य॑ रक्षिता॒ मन॑सा य॒ज्ञम॑न्वेति॥",
      ref: "गोपथ ब्राह्मण पूर्व भाग १.१",
      translation: "समस्त वेदों के मस्तक स्वरूप ॐकार का साक्षात्कार कर, यज्ञ के परम रक्षक ब्रह्मा मन की एकाग्र चेतना द्वारा यज्ञ के समस्त दोषों का परिहार करते हैं।"
    },
    deitiesSymbols: "परब्रह्म (ब्रह्मा ऋत्विक का अधिष्ठाता), ॐकार (प्रणव नाद), कामधेनु।",
    traditionPlaces: "अथर्ववेदीय गुरुकुल परंपरा, अंगिरस एवं भृगु कुल की तपोभूमियाँ।",
    vidhiUsage: "यज्ञ में प्रायश्चित्त आहुति, ॐकार जप, शांति-होम, और राष्ट्र-गोप्य अनुष्ठान।",
    traditionsDifferences: "अन्य तीनों वेदों के ब्राह्मण जहाँ केवल होता, अध्वर्यु और उद्गाता के बाह्य कर्मों पर केंद्रित हैं, वहीं गोपथ ब्राह्मण यज्ञ के संपूर्ण निरीक्षक 'ब्रह्मा' की महिमा स्थापित कर अथर्ववेद को वेदों का मुकुटमणि सिद्ध करता है।",
    historyResearch: "राजेंद्रलाल मित्र (Rajendralal Mitra) और डी. गास्त्रा (D. Gaastra, 1919) ने इसका आलोचनात्मक संपादन किया। यह चतुर्वेद व्यवस्था के इतिहास के अध्ययन का अनिवार्य स्रोत है।",
    relatedArticles: [
      { title: "Mundaka Upanishad", tag: "Upanishad • Atharvaveda", slug: "mundaka-upanishad" },
      { title: "Mandukya Upanishad", tag: "Upanishad • Atharvaveda", slug: "mandukya-upanishad" },
      { title: "Prithvi Sukta", tag: "Sukta • Atharvaveda", slug: "prithvi-sukta" }
    ],
    relatedGrantha: { name: "Atharvaveda Gopatha Brahmana", desc: "11 Prapathakas Brahma Priest Guide" },
    relatedTopics: ["Gopatha", "Atharvaveda", "Brahma", "Brahmana", "Omkara", "Yajna"]
  },`;

// Replace from `"gopatha-brahmana": {` up to `// ==========================================\n  // ऋग्वेद मण्डल ४`
const regex = /"gopatha-brahmana":\s*\{[\s\S]*?(?=\/\/ ==========================================\s*\n\s*\/\/ ऋग्वेद मण्डल ४)/;
if (regex.test(content)) {
  content = content.replace(regex, completeGopatha + '\n\n');
  fs.writeFileSync(targetFilePath, content, 'utf8');
  console.log('✅ Gopatha Brahmana fixed successfully!');
} else {
  console.log('❌ Could not match Gopatha regex');
}
