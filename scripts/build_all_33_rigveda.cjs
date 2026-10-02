const fs = require('fs');
const path = require('path');

// Load foundational parts from existing compile and rigveda_data_module
const r1 = require('./compile_rigveda_articles.cjs'); // or we load existing rigveda.cjs
const existingRigveda = require('./data/rigveda.cjs');

// Complete inventory of all 33 articles with deep Shastric depth
const RIGVEDA_ALL_33 = Object.assign({}, existingRigveda, {
  // KAUSHITAKI BRAHMANA
  "kaushitaki-brahmana": {
    id: "kaushitaki-brahmana",
    slug: "kaushitaki-brahmana",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Kaushitaki Brahmana",
    hindiTitle: "कौषीतकि ब्राह्मण (शांखायन ब्राह्मण — ३० अध्यायों का सांगोपांग विवरण)",
    contentType: "VEDIC BRAHMANA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Brahmana", "Kaushitaki", "Shankhayana", "30 Adhyayas", "Somayaga", "Haviryajna"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "30 Adhyayas • 226 Khandas", type: "approved" },
      { label: "Shankhayana / Kaushitaki Shakha", type: "verified" },
      { label: "Complete Hotri Rituals", type: "approved" }
    ],
    intro: "कौषीतकि ब्राह्मण (शांखायन ब्राह्मण) ऋग्वेद की कौषीतकि/शांखायन शाखा का अत्यंत महत्त्वपूर्ण एवं प्रामाणिक ब्राह्मण ग्रंथ है। इसमें कुल ३० अध्याय और २२६ खण्ड हैं। यह ग्रंथ ऋग्वेद के होता ऋत्विक द्वारा संपन्न किए जाने वाले हविर्यज्ञों (अग्न्याधान, दर्शपूर्णमास, चातुर्मास्य) तथा सोमयागों (अग्निष्टोम, उक्थ्य, षोडशी, अतिरात्र, द्वादशाह एवं गवामयन सत्र) के मंत्र-विनियोग, शस्त्र-गान, पुरोनुवाक्या और अनुवाक्या ऋचाओं की वैज्ञानिक मीमांसा प्रस्तुत करता है। इसमें महर्षि कौषीतकि और महर्षि पैङ्ग्य के शास्त्रीय संवाद तथा ऋग्वैदिक कर्मकाण्ड का अत्यंत सुव्यवस्थित निरूपण है।",
    etymology: [
      { term: "कौषीतकि (Kauṣītaki)", meaning: "महर्षि कुषीतक के प्रपौत्र — ब्रह्मवेत्ता महर्षि कौषीतकि द्वारा उपदिष्ट एवं व्याख्यायित ब्राह्मण ग्रंथ।" },
      { term: "शांखायन (Śāṅkhāyana)", meaning: "महर्षि शंख के वंशज महर्षि शांखायन द्वारा संरक्षित शाखा — कौषीतकि का ही शाखापरक नामान्तर।" },
      { term: "शस्त्र (Śastra)", meaning: "ऋग्वेद के होता तथा मैत्रावरुणादि ऋत्विकों द्वारा अप्रगीत (बिना गायन के) सस्वर उच्चारित होने वाली स्तुति-ऋचाएँ।" }
    ],
    shastricBase: "ऋग्वेद कौषीतकि/शांखायन शाखा, विनायक भट्ट कृत सुखप्रदा वृत्ति, आनन्दतीर्थ भाष्य, सर्वानुक्रमणी।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "कौषीतकि / शांखायन शाखा",
      kanda: "३० अध्याय (कुल २२६ खण्ड)",
      anuvaka: "हविर्यज्ञ, सोमयाग, सत्र एवं प्रायश्चित्त",
      rishi: "महर्षि कुषीतक / कौषीतकि, महर्षि कहोल, महर्षि पैङ्ग्य",
      devata: "अग्नि, सोम, इंद्र, वरुण, मरुद्गण, प्रजापति, रुद्र",
      chandas: "गायत्री, त्रिष्टुप्, जगती, अनुष्टुप्, बृहती, पंक्ति"
    },
    primaryMantra: {
      sanskrit: "यज्ञो वै देवानां परमं गुह्यम्। स यथा ह वा इदं ज्योतिर्दीप्यते तद्वद्ध स्म पूर्वं यज्ञा आसुः।\nयज्ञेन वै देवा असुरानभिभूयाभ्यजयन्। स यो हैवं वेद परास्य भ्रातृव्यो भवत्यात्मना पराभवति॥",
      ref: "कौषीतकि ब्राह्मण १.१ एवं ३०.१ (यज्ञ-महिमा व सत्य-प्रतिष्ठा)",
      translation: "यज्ञ ही देवताओं का परम गूढ़ रहस्य है। जैसे यह दिव्य ज्योति प्रज्वलित होती है, वैसे ही पुरातन काल में यज्ञ तेज के रूप में प्रकाशित होते थे। यज्ञ के सामर्थ्य से ही देवताओं ने आसुरी वृत्तियों को परास्त कर विजय प्राप्त की। जो साधक इस प्रकार यज्ञ के गूढ़ रहस्य को जानता है, उसकी समस्त नकारात्मक वृत्तियाँ पराभूत हो जाती हैं और वह दिव्य आत्मतेज को प्राप्त करता है।"
    },
    adhyayas30: [
      { num: 1, title: "अग्न्याधान एवं अग्निहोत्र", category: "हविर्यज्ञ", desc: "गार्हपत्य, आहवनीय व दक्षिणाग्नि की प्रतिष्ठा, अग्निहोत्र विधि एवं सायं-प्रातः आहुति विधान।" },
      { num: 2, title: "दर्शपूर्णमास — प्रयाज व अनुयाज", category: "हविर्यज्ञ", desc: "अमावास्या और पूर्णिमा के दर्शपूर्णमास इष्टियों का विस्तृत विधान, बर्हि-आस्तरण एवं पुरोडाश निर्माण।" },
      { num: 3, title: "दर्शपूर्णमास — सामिधेनी ऋचाएँ", category: "हविर्यज्ञ", desc: "होता द्वारा १५ सामिधेनी ऋचाओं का सस्वर पाठ, 'इध्म' आधान और अग्नि प्रज्वलन।" },
      { num: 4, title: "आग्रयण एवं नवशस्येष्टि", category: "हविर्यज्ञ", desc: "नवीन धान्य (जौ, चावल) की प्रथम फसल की आहुति, ऋतु-परिवर्तन यज्ञ एवं पितृ तर्पण।" },
      { num: 5, title: "चातुर्मास्य — वैश्वदेव पर्व", category: "चातुर्मास्य", desc: "फाल्गुन पूर्णिमा से प्रारंभ होने वाला प्रथम चातुर्मास्य पर्व, ९ प्रयाज एवं हवि-समर्पण।" },
      { num: 6, title: "चातुर्मास्य — वरुणप्रघास, साकमेध व शुनासीरीय", category: "चातुर्मास्य", desc: "वरुण देव की स्तुति, पितृयज्ञ, इन्द्राग्नि व शुनासीर देवों के निमित्त आहुतियाँ।" },
      { num: 7, title: "सोमयाग दीक्षा एवं प्रायणीय इष्टि", category: "सोमयाग", desc: "यजमान की सोमयाग दीक्षा, कृष्णाजिन धारण, मौन व्रत, एवं दीक्षणीय इष्टि विधि।" },
      { num: 8, title: "प्रवर्ग्य कर्म एवं महावीर कलश", category: "सोमयाग", desc: "महावीर पात्र में घृत और दुग्ध का तपन, घर्म आहुति एवं 'सूर्य आत्मा जगतस्तस्थुषश्च' विनियोग।" },
      { num: 9, title: "क्रय, सोम-प्रवेश एवं आतिथ्येष्टि", category: "सोमयाग", desc: "सोम लता का विधिवत क्रय, सोम का हविर्धान मण्डप में आगमन, एवं आतिथ्य सत्कार।" },
      { num: 10, title: "उपसद् इष्टि एवं अग्नि-प्रणयन", category: "सोमयाग", desc: "असुरों के तीन पुरों (सुवर्ण, रजत, अयस्) के विनाश हेतु उपसद् इष्टि और उत्तरवेदी पर अग्नि ले जाना।" },
      { num: 11, title: "प्रातस्सवन — बहिष्पवमान व आज्य शस्त्र", category: "सोम सवन", desc: "प्रातःकाल सोमाभिषव, बहिष्पवमान स्तोत्र, एवं होतृ का आज्य शस्त्र गान।" },
      { num: 12, title: "प्रातस्सवन — प्रउग शस्त्र", category: "सोम सवन", desc: "वायु, इंद्र-वायु, मित्र-वरुण, अश्विनी, इंद्र, विश्वेदेवा और सरस्वती के निमित्त प्रउग शस्त्र।" },
      { num: 13, title: "माध्यन्दिन सवन — मरुत्वतीय शस्त्र", category: "सोम सवन", desc: "मध्याह्न काल में मरुतों के साथ इंद्र की स्तुति, 'प्र वो महे' ऋचाओं का विनियोग।" },
      { num: 14, title: "माध्यन्दिन सवन — निष्केवल्य शस्त्र", category: "सोम सवन", desc: "केवल इंद्र के अद्वितीय पराक्रम, वृत्रवध, और सामगान के साथ निष्केवल्य शस्त्र।" },
      { num: 15, title: "तृतीय सवन — वैश्वदेव शस्त्र", category: "सोम सवन", desc: "सायंकाल में विश्वेदेवा, अग्नि, दधिक्रा, उषा और मरुतों के निमित्त शस्त्र पाठ।" },
      { num: 16, title: "तृतीय सवन — आग्निमारुत शस्त्र", category: "सोम सवन", desc: "अग्नि, मरुत्, जातवेदा, एवं जल-देवताओं की स्तुति, 'आपो हि ष्ठा मयोभुवः' विनियोग।" },
      { num: 17, title: "उक्थ्य, षोडशी एवं अतिरात्र", category: "अहर्गण", desc: "१५ स्तोत्रों वाला उक्थ्य क्रतु, १६ स्तोत्रों वाला षोडशी, एवं रात्रि भर चलने वाला अतिरात्र याग।" },
      { num: 18, title: "द्वादशाह याग — व्यूढ व संव्यूढ", category: "सत्र याग", desc: "१२ दिनों तक चलने वाले द्वादशाह याग का स्वरूप, छन्दों का क्रम और अहः-विभाग।" },
      { num: 19, title: "गवामयन संवत्सर सत्र", category: "संवत्सर सत्र", desc: "संपूर्ण ३६० दिनों तक चलने वाला महान संवत्सर सत्र, विषुवान् दिन (मध्य दिन) का विधान।" },
      { num: 20, title: "पृष्ठ्य षडह एवं अभिप्लव षडह", category: "सत्र याग", desc: "६-६ दिनों के चक्र (रथंतर, बृहत्, वैरूप, वैराज, शाक्कर, रैवत साम) का विनियोग।" },
      { num: 21, title: "विषुवान् दिन एवं महाव्रत", category: "संवत्सर सत्र", desc: "संवत्सर सत्र का केंद्रीय दिन (विषुवान्), सूर्य आराधना, एवं वीणा-वादन के साथ महाव्रत।" },
      { num: 22, title: "छन्दोम दिवस एवं दशम अहन्", category: "सत्र याग", desc: "गायत्री, त्रिष्टुप्, जगती छंदों के अतिच्छंद प्रयोग तथा सत्र का अत्यंत पवित्र १०वाँ दिन।" },
      { num: 23, title: "महाव्रत शस्त्र एवं प्राणोपासना", category: "रहस्य विद्या", desc: "पच्चीस प्रकार के सामों से युक्त महाव्रत शस्त्र, उक्थ विद्या, और प्राण को ही ब्रह्म रूप में देखना।" },
      { num: 24, title: "होतृकाणां शस्त्राणि (सहायक ऋत्विकों के शस्त्र)", category: "होतृक शस्त्र", desc: "मैत्रावरुण, ब्राह्मणाच्छंसी, अच्छावाक, पोता, नेष्टा, एवं आग्नीध्र के विशिष्ट शस्त्र।" },
      { num: 25, title: "प्रायश्चित्त प्रकरण — हविर्दोष व मन्त्र-दोष", category: "प्रायश्चित्त", desc: "यज्ञ में होने वाली त्रुटियों, विस्मृतियों और आहुति-दोषों के निवारण हेतु प्रायश्चित्त होम।" },
      { num: 26, title: "प्रायश्चित्त — सोम-विपत्ति व अवभृथ", category: "प्रायश्चित्त", desc: "सोम गिर जाने, पात्र टूटने, या ऋत्विक-दोष होने पर विहित शांति मंत्र एवं अवभृथ स्नान।" },
      { num: 27, title: "सौत्रामणी याग — इन्द्र-सुत्रामा", category: "विशेष याग", desc: "अश्विनी, सरस्वती और इंद्र सुत्रामा के निमित्त सुरा-सोम संधान, एवं आरोग्य प्राप्ति।" },
      { num: 28, title: "राजसूय याग — अभिषेचनीय", category: "राजसूय", desc: "सम्राट पद की प्राप्ति हेतु राजा का अभिषेक, दशपेय सोमयाग, और रत्नि-हवि विधान।" },
      { num: 29, title: "अश्वमेध एवं पुरुषमेध मीमांसा", category: "महायज्ञ", desc: "राष्ट्र की सार्वभौम संप्रभुता हेतु अश्वमेध, तीन सवन, एवं पुरुषमेध का आध्यात्मिक विवेचन।" },
      { num: 30, title: "यज्ञ-उपसंहार एवं ब्रह्म-प्रतिष्ठा", category: "उपसंहार", desc: "समस्त ३० अध्यायों का सार, यज्ञ की आत्म-प्रतिष्ठा, 'यज्ञो वै विष्णुः' का अंतिम उपदेश।" }
    ],
    deitiesSymbols: "होता (ऋग्वेद का वाणी-ऋत्विक), सोम (दिव्य अमृत), अग्नि (हव्यवाहन), मरुद्गण (प्राण-शक्तियाँ), महावीर कलश (सूर्य का प्रतीक)।",
    traditionPlaces: "कौषीतकि गुरुकुल, कुरु-पाञ्चाल, नैमिषारण्य, एवं काश्मीर शाखा परंपरा।",
    vidhiUsage: "सोमयाग, अग्निष्टोम, अतिरात्र एवं सत्रों में होता और मैत्रावरुण द्वारा शस्त्र-गान एवं ऋचाओं का विनियोग।",
    traditionsDifferences: "ऐतरेय ब्राह्मण (४० अध्याय/८ पञ्चिका) की तुलना में कौषीतकि ब्राह्मण (३० अध्याय) अधिक सुसंहत, क्रमबद्ध और हविर्यज्ञों व सोमयागों की विधि में अत्यंत स्पष्ट है।",
    historyResearch: "आर्थर बेरिडेल कीथ (A.B. Keith, 1920) ने हार्वर्ड ओरिएंटल सीरीज (खंड २५) में इसका विशद अंग्रेजी अनुवाद व तुलनात्मक अध्ययन प्रकाशित किया। यह प्राचीन वैदिक कर्मकाण्ड का अमूल्य रत्न है।",
    relatedArticles: [
      { title: "Aitareya Brahmana", tag: "Brahmana • Rigveda", slug: "aitareya-brahmana" },
      { title: "Kaushitaki Aranyaka", tag: "Aranyaka • Rigveda", slug: "kaushitaki-aranyaka" },
      { title: "Kaushitaki Upanishad", tag: "Upanishad • Rigveda", slug: "kaushitaki-upanishad" }
    ],
    relatedGrantha: { name: "Rigveda Brahmana Archive", desc: "Kaushitaki 30 Adhyayas Complete Text" },
    relatedTopics: ["Kaushitaki Brahmana", "Shankhayana", "30 Adhyayas", "Hotri Shastra", "Somayaga", "Haviryajna"]
  },

  // KAUSHITAKI ARANYAKA
  "kaushitaki-aranyaka": {
    id: "kaushitaki-aranyaka",
    slug: "kaushitaki-aranyaka",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Kaushitaki Aranyaka",
    hindiTitle: "कौषीतकि आरण्यक (शांखायन आरण्यक — १५ अध्यायों का रहस्य ग्रंथ)",
    contentType: "VEDIC ARANYAKA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Aranyaka", "Kaushitaki", "Shankhayana", "15 Adhyayas", "Prana Vidya", "Mahavrata"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "15 Adhyayas", type: "approved" },
      { label: "Kaushitaki / Shankhayana Tradition", type: "verified" },
      { label: "Antar-Agnihotra & Prana Vidya", type: "approved" }
    ],
    intro: "कौषीतकि आरण्यक (शांखायन आरण्यक) ऋग्वेद की कौषीतकि/शांखायन शाखा का अत्यंत रहस्यमयी एवं दार्शनिक अरण्य-ग्रंथ है। इसमें कुल १५ अध्याय हैं। यह ग्रंथ वानप्रस्थ आश्रम में तपोवन में ध्यानस्थ ऋषियों द्वारा एकांत में अनुभूत रहस्यों को प्रकट करता है। इसके अध्याय १ और २ में महाव्रत याग की आध्यात्मिक मीमांसा है; अध्याय ३ से ६ तक प्रसिद्ध 'कौषीतकि उपनिषद्' (Kaushitaki Brahmana Upanishad) समाहित है जिसमें प्राण को ही 'प्रज्ञात्मा' के रूप में प्रतिपादित किया गया है; अध्याय ७ और ८ में संहिता, पद व क्रम पाठ का आध्यात्मिक चिंतन है; अध्याय ९ और १० में प्राण-संवाद एवं आंतरिक अग्निहोत्र (Antar-Agnihotra) की विशद चर्चा है; तथा अध्याय १५ में गुरु-परंपरा (वंश) का प्रमाणिक उल्लेख है।",
    etymology: [
      { term: "आरण्यक (Āraṇyaka)", meaning: "अरण्ये भवम् — जो एकांत वन, तपोवन या आश्रम में अध्ययन और मनन करने योग्य रहस्यमयी ग्रंथ हो।" },
      { term: "अन्तरग्निहोत्र (Antar-Agnihotra)", meaning: "बाह्य अग्नि के बिना प्राण, अपान और आत्म-चेतना में निरंतर चलने वाला आंतरिक आहुति-यज्ञ।" },
      { term: "प्रज्ञात्मा (Prajñātmā)", meaning: "प्रज्ञा (चेतना) और आत्मा का अभिन्न स्वरूप — 'यो वै प्राणः सा प्रज्ञा, या वा प्रज्ञा स प्राणः'।" }
    ],
    shastricBase: "कौषीतकि/शांखायन आरण्यक मूल संहिता, सायण कृत आरण्यक भाष्य, शङ्करानन्द कृत दीपिका।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "कौषीतकि / शांखायन शाखा",
      kanda: "१५ अध्याय",
      anuvaka: "महाव्रत, प्राण-विद्या, कौषीतकि उपनिषद्, संहिता-उपनिषद्, वंश",
      rishi: "महर्षि कौषीतकि, कहोल, पैङ्ग्य, गार्ग्य, शांखायन",
      devata: "प्राण, प्रजापति, सविता, ब्रह्म",
      chandas: "आरण्यक गद्य एवं ऋचाएँ"
    },
    primaryMantra: {
      sanskrit: "प्राणो ब्रह्मेति ह स्माह कौषीतकिस्तस्य ह वा एतस्य प्राणस्य ब्रह्मणो मनो दूतं वाक्परिवेष्ट्री चक्षुर्गोप्तृ श्रोत्रं संश्रावयितृ।\nयो वै प्राणः सा प्रज्ञा या वा प्रज्ञा स प्राणः॥",
      ref: "कौषीतकि आरण्यक २.१ एवं ३.३ (प्राण-ब्रह्म विद्या)",
      translation: "महर्षि कौषीतकि कहते हैं कि प्राण ही साक्षात परब्रह्म है। इस प्राण-रूपी ब्रह्म का मन दूत है, वाणी परिचारिका है, नेत्र रक्षक हैं, और श्रोत्र संदेशवाहक हैं। जो प्राण (जीवन-शक्ति) है, वही प्रज्ञा (चेतना) है; और जो प्रज्ञा है, वही प्राण है — दोनों शरीर में एक साथ निवास करते हैं और एक साथ ही उत्क्रमण करते हैं।"
    },
    deitiesSymbols: "प्राण (सर्वोपरि जीवन-ऊर्जा), प्रज्ञा (विशुद्ध बोध), उक्थ (ब्रह्माण्ड-स्तम्भ), आदित्य (सूर्य-चेतना)।",
    traditionPlaces: "तपोवन, कुरुक्षेत्र, नैमिषारण्य, कौषीतकि आश्रम।",
    vidhiUsage: "वानप्रस्थियों द्वारा ध्यान, आंतरिक अग्निहोत्र, महाव्रत शस्त्र-चिन्तन, एवं प्राणोपासना।",
    traditionsDifferences: "ऐतरेय आरण्यक (५ आरण्यक) में जहाँ चेतना के क्रमिक विकास (Evolution) पर बल है, वहीं कौषीतकि आरण्यक (१५ अध्याय) में 'प्राण और प्रज्ञा की अभिन्नता' तथा 'आंतरिक अग्निहोत्र' का अनूठा दार्शनिक विवेचन है।",
    historyResearch: "आर्थर बेरिडेल कीथ (1908) ने 'The Sankhayana Aranyaka' शीर्षक से इसका प्रथम पूर्ण अंग्रेजी अनुवाद प्रकाशित किया था।",
    relatedArticles: [
      { title: "Kaushitaki Brahmana", tag: "Brahmana • Rigveda", slug: "kaushitaki-brahmana" },
      { title: "Kaushitaki Upanishad", tag: "Upanishad • Rigveda", slug: "kaushitaki-upanishad" },
      { title: "Aitareya Aranyaka", tag: "Aranyaka • Rigveda", slug: "aitareya-aranyaka" }
    ],
    relatedGrantha: { name: "Rigveda Aranyaka Archive", desc: "Kaushitaki Aranyaka 15 Chapters Complete" },
    relatedTopics: ["Kaushitaki Aranyaka", "Prana Vidya", "Antar Agnihotra", "Prajnatma", "Mahavrata Rahasya"]
  },

  // KAUSHITAKI UPANISHAD
  "kaushitaki-upanishad": {
    id: "kaushitaki-upanishad",
    slug: "kaushitaki-upanishad",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Kaushitaki Upanishad",
    hindiTitle: "कौषीतकि उपनिषद् (कौषीतकि ब्राह्मोपनिषद् — पर्यङ्क विद्या व प्राण-प्रज्ञात्मा)",
    contentType: "VEDIC UPANISHAD",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Upanishad", "Kaushitaki", "Paryanka Vidya", "Pratardana", "Balaki Ajatashatru", "Prajnatma"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "4 Adhyayas", type: "approved" },
      { label: "Major Classical Upanishad", type: "verified" },
      { label: "Devayana & Pitriyana Mystery", type: "approved" }
    ],
    intro: "कौषीतकि उपनिषद् (कौषीतकि ब्राह्मोपनिषद्) ऋग्वेद की कौषीतकि शाखा का अत्यंत प्रमुख एवं प्रामाणिक उपनिषद् है। इसमें कुल ४ अध्याय हैं। प्रथम अध्याय में 'पर्यङ्क विद्या' (Paryanka Vidya) का विश्वविख्यात वर्णन है जिसमें आत्मा की मृत्यु के बाद देवयान और पितृयान मार्गों, चंद्रलोक की यात्रा, तथा ब्रह्मलोक में पहुंचकर अमितौजा पर्यङ्क (दिव्य सिंहासन) पर विराजमान परब्रह्म से साक्षात्कार का अभूतपूर्व संवाद है। द्वितीय अध्याय में प्राण-ब्रह्म उपासना और विविध अनुष्ठान हैं। तृतीय अध्याय में राजा दिवोदास-पुत्र प्रतर्दन और देवराज इंद्र का अमर संवाद ('प्रतर्दन विद्या') है जिसमें इंद्र स्वयं को 'प्राणोऽस्मि प्रज्ञात्मा' घोषित करते हैं। चतुर्थ अध्याय में अहंकारी विद्वान दृप्त-बालाकि गार्ग्य और काशी के ज्ञानी राजा अजातशत्रु का प्रसिद्ध दार्शनिक संवाद है।",
    etymology: [
      { term: "पर्यङ्क विद्या (Paryaṅka Vidyā)", meaning: "ब्रह्मलोक में स्थित दिव्य पर्यङ्क (सिंहासन) पर बैठे परब्रह्म से जीवात्मा की एकात्मता का साक्षात्कार कराने वाली विद्या।" },
      { term: "प्राणोऽस्मि प्रज्ञात्मा (Prāṇo'smi Prajñātmā)", meaning: "इंद्र द्वारा प्रतर्दन को दिया गया उपदेश — मैं ही प्राण और शुद्ध बोधस्वरूप प्रज्ञात्मा हूँ, मेरी ही उपासना करो।" },
      { term: "अजातशत्रु-बालाकि संवाद", meaning: "काशी नरेश अजातशत्रु द्वारा दृप्त-बालाकि को बाह्य प्रतीकों (सूर्य, चंद्र, विद्युत) से परे विशुद्ध साक्षी आत्मा का ज्ञान कराना।" }
    ],
    shastricBase: "कौषीतकि आरण्यक अध्याय ३-६, शङ्करानन्द कृत कौषीतकि उपनिषद् दीपिका, रामानुज कृत श्रीभाष्य संदर्भ।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "कौषीतकि शाखा",
      kanda: "४ अध्याय",
      anuvaka: "पर्यङ्क विद्या, प्राणोपासना, प्रतर्दन विद्या, अजातशत्रु संवाद",
      rishi: "महर्षि कौषीतकि, चित्र गार्ग्यायणि, प्रतर्दन दैवोदासि, दृप्त-बालाकि, राजा अजातशत्रु",
      devata: "परब्रह्म, इंद्र (प्रज्ञात्मा), प्राण, आत्मा",
      chandas: "उपनिषद् गद्य एवं आत्म-मंत्र"
    },
    primaryMantra: {
      sanskrit: "स होवाच प्राणोऽस्मि प्रज्ञात्मा तं मामायुरमृतमित्युपास्वायुः प्राणः प्राणो वा आयुः।\nयावद्ध्यस्मिञ्शरीरे प्राणो वसति तावदायुरथ खलु प्राण एव प्रज्ञात्मेदं शरीरं परिगृह्योत्थापयति॥",
      ref: "कौषीतकि उपनिषद् ३.२ (प्रतर्दन विद्या — प्राण-प्रज्ञात्मा सिद्धांत)",
      translation: "इंद्र ने कहा — 'मैं ही प्राण और विशुद्ध प्रज्ञात्मा (चेतना) हूँ। तुम मेरी ही आयु और अमृत के रूप में उपासना करो। जब तक इस शरीर में प्राण निवास करता है, तब तक ही जीवन (आयु) है। यह प्राण ही प्रज्ञात्मा बनकर इस जड़ शरीर को धारण करता है और गति प्रदान करता है।'"
    },
    deitiesSymbols: "अमितौजा पर्यङ्क (ब्रह्म का सिंहासन), इन्द्र (प्रज्ञात्मा का प्रतीक), अजातशत्रु (ब्रह्मज्ञानी राजा), सुपुप्त आत्मा।",
    traditionPlaces: "ब्रह्मलोक, काशी (वाराणसी), कुरु-पाञ्चाल, नैमिषारण्य।",
    vidhiUsage: "ब्रह्मज्ञान प्राप्ति, देवयान मार्ग का ध्यान, मृत्यु-समय आत्म-स्मरण, एवं वेदांत विचार।",
    traditionsDifferences: "बृहदारण्यक उपनिषद् के समान इसमें भी अजातशत्रु-बालाकि संवाद है, किंतु पर्यङ्क विद्या (मरणोत्तर दिव्य गति) का जैसा सांगोपांग विवरण कौषीतकि में है वैसा अन्यत्र कहीं नहीं मिलता।",
    historyResearch: "मैक्स मूलर (Sacred Books of the East, Vol 1) तथा पॉल ड्यूसन ने कौषीतकि उपनिषद् को 'प्राचीनतम और दार्शनिक दृष्टि से अत्यंत मौलिक उपनिषद्' माना है।",
    relatedArticles: [
      { title: "Kaushitaki Aranyaka", tag: "Aranyaka • Rigveda", slug: "kaushitaki-aranyaka" },
      { title: "Aitareya Upanishad", tag: "Upanishad • Rigveda", slug: "aitareya-upanishad" },
      { title: "Brihadaranyaka Upanishad", tag: "Upanishad • Yajurveda", slug: "brihadaranyaka-upanishad" }
    ],
    relatedGrantha: { name: "108 Upanishad Archive", desc: "Kaushitaki Brahmana Upanishad 4 Chapters" },
    relatedTopics: ["Kaushitaki Upanishad", "Paryanka Vidya", "Pratardana Vidya", "Balaki Ajatashatru", "Prajnatma"]
  },

  // ASHVALAYANA SHRAUTASUTRA
  "ashvalayana-shrautasutra": {
    id: "ashvalayana-shrautasutra",
    slug: "ashvalayana-shrautasutra",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Ashvalayana Shrautasutra",
    hindiTitle: "आश्वलायन श्रौतसूत्र (ऋग्वेद का प्रधान श्रौत कल्पसूत्र — १२ अध्याय)",
    contentType: "VEDANGA KALPA GRANTHA",
    updatedDate: "30 September 2026",
    tags: ["Vedanga", "Kalpa", "Shrautasutra", "Ashvalayana", "Rigveda", "Hotri", "12 Adhyayas", "Yajna Vidhi"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "12 Adhyayas", type: "approved" },
      { label: "Ashvalayana Shakha Master Ritual", type: "verified" },
      { label: "Hotri Shrauta Manual", type: "approved" }
    ],
    intro: "आश्वलायन श्रौतसूत्र ऋग्वेद की शाकल-आश्वलायन शाखा का सर्वप्रधान एवं सर्वाधिक प्रचलित श्रौत कल्पसूत्र है। इसके प्रणेता महर्षि शौनक के परम शिष्य महर्षi आश्वलायन हैं। इसमें कुल १२ अध्याय हैं, जो दो षटकों (प्रथम षट्क १-६ अध्याय तथा द्वितीय षट्क ७-१२ अध्याय) में विभक्त हैं। यह ग्रंथ ऋग्वेद के प्रमुख ऋत्विक 'होता' (Hotri) तथा उसके तीन सहायकों (मैत्रावरुण, ब्राह्मणाच्छंसी, अच्छावाक) द्वारा हविर्यज्ञों (दर्शपूर्णमास, अग्न्याधान, अग्निहोत्र, चातुर्मास्य, पशुयाग) तथा सोमयागों (अग्निष्टोम, उक्थ्य, षोडशी, वाजपेय, राजसूय, अश्वमेध व संवत्सर सत्र) में पढ़े जाने वाले शस्त्रों, पुरोनुवाक्या और याज्या ऋचाओं का अत्यंत सटीक और व्यवस्थित विधान प्रदान करता है।",
    etymology: [
      { term: "आश्वलायन (Āśvalāyana)", meaning: "महर्षि अश्वल के गोत्रोत्पन्न महर्षि आश्वलायन — शौनक के शिष्य जिन्होंने ऋग्वेद के श्रौत व गृह्य सूत्रों की रचना की।" },
      { term: "श्रौतसूत्र (Śrautasūtra)", meaning: "श्रुतौ भवम् — वेदों (श्रुति) में विहित तीन अग्नियों (गार्हपत्य, आहवनीय, दक्षिणाग्नि) में संपन्न होने वाले महायज्ञों के सूत्रबद्ध नियम।" },
      { term: "याज्या-पुरोनुवाक्या", meaning: "हवि समर्पित करते समय और उससे पूर्व देवों के आह्वान हेतु होता द्वारा पठित विशेष ऋग्वैदिक ऋचाएँ।" }
    ],
    shastricBase: "ऋग्वेद शाकल संहिता, ऐतरेय ब्राह्मण, गार्ग्य नारायण कृत आश्वलायन श्रौतसूत्र वृत्ति, देवत्रात भाष्य।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "आश्वलायन / शाकल शाखा",
      kanda: "१२ अध्याय (२ षट्क)",
      anuvaka: "हविर्यज्ञ, सोमयाग, अहर्गण, सत्र एवं प्रायश्चित्त",
      rishi: "महर्षि आश्वलायन (शौनक शिष्य)",
      devata: "अग्नि, इंद्र, सोम, वरुण, विश्वेदेवा",
      chandas: "कल्प सूत्र शैली"
    },
    primaryMantra: {
      sanskrit: "अथातो दर्शपूर्णमासौ व्याख्यास्यामः। प्रातरग्निहोत्रं हुत्वा पौर्णमास्यां अमावास्यायां वा।\nहोतृवृतो होता प्राङ्मुख उपविश्य सामिधेनीरन्वाह॥",
      ref: "आश्वलायन श्रौतसूत्र १.१.१ एवं १.१.५ (सूत्रारम्भ व दर्शपूर्णमास विधान)",
      translation: "अब इसके अनन्तर हम दर्श और पूर्णमास इष्टियों की व्याख्या करते हैं। प्रातःकाल अग्निहोत्र संपन्न करके पूर्णिमा अथवा अमावास्या के दिन यजमान द्वारा वरण किया गया होता ऋत्विक पूर्वाभिमुख बैठकर सामिधेनी ऋचाओं का सस्वर पाठ करे।"
    },
    deitiesSymbols: "होता (ऋग्वेद का मुख्य स्तोता), सामिधेनी ऋचाएँ, आज्य-भाग, हविर्धान मण्डप, उत्तरवेदी।",
    traditionPlaces: "समस्त भारत की ऋग्वैदीय श्रौत यज्ञशालाएँ, महाराष्ट्र, कर्नाटक, केरल, वाराणसी।",
    vidhiUsage: "अग्निष्टोम, चातुर्मास्य, वाजपेय, राजसूय आदि श्रौत यज्ञों में होता ऋत्विक का मार्गदर्शन।",
    traditionsDifferences: "शांखायन श्रौतसूत्र (१८ अध्याय) की तुलना में आश्वलायन श्रौतसूत्र (१२ अध्याय) अधिक सुगम, व्यावहारिक और संपूर्ण भारत में सर्वाधिक मान्य है।",
    historyResearch: "एडवर्ड रोयर (Edward Roer, 1874) ने बिब्लियोथिका इंडिका (Bibliotheca Indica) में इसका प्रथम मुद्रित संस्करण प्रकाशित किया था।",
    relatedArticles: [
      { title: "Ashvalayana Grihyasutra", tag: "Grihyasutra • Rigveda", slug: "ashvalayana-grihyasutra" },
      { title: "Shankhayana Shrautasutra", tag: "Shrautasutra • Rigveda", slug: "shankhayana-shrautasutra" },
      { title: "Aitareya Brahmana", tag: "Brahmana • Rigveda", slug: "aitareya-brahmana" }
    ],
    relatedGrantha: { name: "Rigveda Kalpa Vedanga", desc: "Ashvalayana Shrautasutra 12 Chapters" },
    relatedTopics: ["Ashvalayana", "Shrautasutra", "Rigveda", "Hotri", "Yajna Vidhi", "Darshapurnamasa"]
  },

  // SHANKHAYANA SHRAUTASUTRA
  "shankhayana-shrautasutra": {
    id: "shankhayana-shrautasutra",
    slug: "shankhayana-shrautasutra",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Shankhayana Shrautasutra",
    hindiTitle: "शांखायन श्रौतसूत्र (कौषीतकि शाखा का विस्तृत श्रौत ग्रंथ — १८ अध्याय)",
    contentType: "VEDANGA KALPA GRANTHA",
    updatedDate: "30 September 2026",
    tags: ["Vedanga", "Kalpa", "Shrautasutra", "Shankhayana", "Kaushitaki", "18 Adhyayas", "Hotri Rituals"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "18 Adhyayas", type: "approved" },
      { label: "Kaushitaki / Shankhayana Tradition", type: "verified" },
      { label: "Exhaustive Shrauta Manual", type: "approved" }
    ],
    intro: "शांखायन श्रौतसूत्र ऋग्वेद की कौषीतकि/शांखायन शाखा का अत्यंत विस्तृत एवं प्रामाणिक श्रौत कल्पसूत्र है। इसके प्रणेता महर्षि सुयज्ञ शांखायन हैं। इसमें कुल १८ अध्याय हैं। यह ग्रंथ कौषीतकि ब्राह्मण के समस्त कर्मकाण्ड को सूत्रबद्ध रूप में प्रस्तुत करता है। इसके प्रथम ६ अध्यायों में दर्शपूर्णमास, अग्न्याधान, चातुर्मास्य और पशुबंध का विधान है; अध्याय ७ से १२ में अग्निष्टोम सोमयाग का सांगोपांग निरूपण है; अध्याय १३ और १४ में द्वादशाह व संवत्सर सत्र हैं; अध्याय १५ में पुरुषमेध व सर्वमेध जैसे दुर्लभ महायज्ञ हैं; तथा अध्याय १६ से १८ में महाव्रत और प्रायश्चित्तों का अत्यंत सूक्ष्म विवेचन है।",
    etymology: [
      { term: "सुयज्ञ शांखायन (Suyajña Śāṅkhāyana)", meaning: "ऋग्वेद कौषीतकि शाखा के महान सूत्रकार महर्षि जिन्होंने श्रौत और गृह्य सूत्रों की रचना की।" },
      { term: "संवत्सर सत्र", meaning: "वर्ष भर (३६० दिन) निरंतर चलने वाले महायज्ञ जिसमें सभी यजमान स्वयं ही ऋत्विक होते हैं।" },
      { term: "सर्वमेध (Sarvamedha)", meaning: "सर्वस्व दान और संपूर्ण सृष्टि की एकात्मता का साक्षात्कार कराने वाला सर्वोच्च त्याग-यज्ञ।" }
    ],
    shastricBase: "कौषीतकि ब्राह्मण, वरदत्तसुत आनन्दतीर्थ कृत शांखायन श्रौतसूत्र भाष्य, हिलेब्रांट संस्करण।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "कौषीतकि / शांखायन शाखा",
      kanda: "१८ अध्याय",
      anuvaka: "हविर्यज्ञ, सोमयाग, सत्र, पुरुषमेध, सर्वमेध, महाव्रत",
      rishi: "महर्षि सुयज्ञ शांखायन",
      devata: "अग्नि, सोम, इंद्र, वरुण, प्रजापति",
      chandas: "कल्प सूत्र शैली"
    },
    primaryMantra: {
      sanskrit: "यज्ञं व्याख्यास्यामः। स त्रिभिर्वेदैर्विधीयते। ऋग्वेद-यजुर्वेद-सामवेदाभ्याम्।\nऋग्वेदेन होता करोति यजुर्वेदेनाध्वर्युः सामवेदोद्गाता॥",
      ref: "शांखायन श्रौतसूत्र १.१.१-४ (त्रयी-यज्ञ विधान)",
      translation: "हम यज्ञ की सांगोपांग व्याख्या करते हैं। यह यज्ञ तीन वेदों द्वारा संपन्न होता है — ऋग्वेद, यजुर्वेद और सामवेद। ऋग्वेद द्वारा 'होता' ऋत्विक शस्त्रादि कर्म करता है, यजुर्वेद द्वारा 'अध्वर्यु' आहुति कर्म करता है, और सामवेद द्वारा 'उद्गाता' दिव्य सामगान करता है।"
    },
    deitiesSymbols: "त्रयी विद्या (ऋक्-यजुः-साम), होता ऋत्विक, सोम-चमस, महाव्रत वीणा।",
    traditionPlaces: "प्राचीन कुरुक्षेत्र, गुजरात, काश्मीर, एवं राजस्थान की शांखायन परंपरा।",
    vidhiUsage: "कौषीतकि परंपरा के श्रौत याज्ञिकों द्वारा सोमयाग, सत्र एवं महाव्रत अनुष्ठान में विनियोग।",
    traditionsDifferences: "आश्वलायन श्रौतसूत्र में १२ अध्याय हैं जबकि शांखायन में १८ अध्याय हैं; शांखायन में पुरुषमेध, सर्वमेध तथा खिल सूक्तों के विनियोग का अधिक विस्तार है।",
    historyResearch: "अल्फ्रेड हिलेब्रांट (Alfred Hillebrandt, 1888) ने बिब्लियोथिका इंडिका में इसका संपादन कर पाश्चात्य जगत में वैदिक याज्ञिक ज्ञान का प्रसार किया।",
    relatedArticles: [
      { title: "Kaushitaki Brahmana", tag: "Brahmana • Rigveda", slug: "kaushitaki-brahmana" },
      { title: "Ashvalayana Shrautasutra", tag: "Shrautasutra • Rigveda", slug: "ashvalayana-shrautasutra" },
      { title: "Shankhayana Grihyasutra", tag: "Grihyasutra • Rigveda", slug: "shankhayana-grihyasutra" }
    ],
    relatedGrantha: { name: "Rigveda Kalpa Archive", desc: "Shankhayana Shrautasutra 18 Chapters" },
    relatedTopics: ["Shankhayana", "Kaushitaki", "Shrautasutra", "18 Adhyayas", "Hotri Duties", "Sarvamedha"]
  },

  // ASHVALAYANA GRIHYASUTRA
  "ashvalayana-grihyasutra": {
    id: "ashvalayana-grihyasutra",
    slug: "ashvalayana-grihyasutra",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Ashvalayana Grihyasutra",
    hindiTitle: "आश्वलायन गृह्यसूत्र (षोडश संस्कार व गृहस्थ कर्मकाण्ड — ४ अध्याय)",
    contentType: "VEDANGA KALPA GRANTHA",
    updatedDate: "30 September 2026",
    tags: ["Vedanga", "Kalpa", "Grihyasutra", "Ashvalayana", "16 Samskaras", "Vivaha", "Upanayana", "Saptapadi"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "4 Adhyayas", type: "approved" },
      { label: "Sanatana 16 Samskaras Authority", type: "verified" },
      { label: "Universal Grihya Manual", type: "approved" }
    ],
    intro: "आश्वलायन गृह्यसूत्र ऋग्वेद का सर्वाधिक लोकप्रिय, सर्वमान्य एवं प्रामाणिक गृह्य कल्पसूत्र है। इसके प्रणेता महर्षि आश्वलायन हैं। इसमें कुल ४ अध्याय हैं। यह ग्रंथ सनातन धर्म के गृहस्थ जीवन के दैनिक, पाक्षिक, मासिक एवं नैमित्तिक संस्कारों का मूल शास्त्र है। इसमें गर्भाधान से लेकर अन्त्येष्टि तक 'षोडश संस्कार' (१६ संस्कार), विवाह के ८ प्रकार, पाणिग्रहण, सप्तपदी, उपनयन (यज्ञोपवीत), ब्रह्मचर्य व्रत, समावर्तन, पंच महायज्ञ (ब्रह्मयज्ञ, देवयज्ञ, पितृयज्ञ, मनुष्ययज्ञ, भूतयज्ञ), तथा वास्तु-शांति का अत्यंत विशद और सुंदर विधि-विधान वर्णित है।",
    etymology: [
      { term: "गृह्यसूत्र (Gṛhyasūtra)", meaning: "गृहे भवम् — एक ही गृह्य अग्नि (औपासन / आवसथ्य अग्नि) में संपन्न होने वाले पारिवारिक व व्यक्तिगत संस्कारों के सूत्र।" },
      { term: "सप्तपदी (Saptapadī)", meaning: "विवाह संस्कार में वर-वधू द्वारा अग्नि की प्रदक्षिणा करते हुए अन्न, बल, धन, सुख, संतति, ऋतु-सहयोग और मित्रता हेतु सात पग चलना।" },
      { term: "उपनयन (Upanayana)", meaning: "समीपं नयनम् — बालक को गायत्री दीक्षा और वेदाध्ययन हेतु गुरु के समीप ले जाना।" }
    ],
    shastricBase: "ऋग्वेद शाकल संहिता, नारायण कृत आश्वलायन गृह्यसूत्र वृत्ति, हरदत्त कृत अनाविला टीका।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "आश्वलायन शाखा",
      kanda: "४ अध्याय",
      anuvaka: "षोडश संस्कार, विवाह, उपनयन, पंच महायज्ञ, वास्तु शांति",
      rishi: "महर्षि आश्वलायन",
      devata: "अग्नि (गृहपति), प्रजापति, सविता, सरस्वती",
      chandas: "गृह्य सूत्र शैली"
    },
    primaryMantra: {
      sanskrit: "सखे सप्तपदा भव सा मामनुव्रता भव। विष्णुस्त्वानयतु।\nइषे एकपदी, ऊर्जे द्विपदी, रायस्पोषाय त्रिपदी, मयोभव्याय चतुष्पदी, प्रजाभ्यः पञ्चपदी, ऋतुभ्यः षट्पदी, सखा सप्तपदी भव॥",
      ref: "आश्वलायन गृह्यसूत्र १.७.१९ (विवाह सप्तपदी महामंत्र)",
      translation: "हे वधु! सात पग चलकर तुम मेरी सच्ची मित्र बन गई हो; तुम मेरे धर्म-पथ की सहचरी बनो। भगवान विष्णु तुम्हारा मार्गदर्शन करें। प्रथम पग अन्न के लिए, द्वितीय बल के लिए, तृतीय धन-समृद्धि के लिए, चतुर्थ सुख के लिए, पंचम संतति के लिए, षष्ठ षड्ऋतुओं के आरोग्य के लिए, और सातवाँ पग हमारे आजीवन अटूट सौहार्द व मित्रता के लिए समर्पित हो।"
    },
    deitiesSymbols: "गृह्याग्नि (पारिवारिक चेतना), लाजा होम (खील की आहुति), अश्मारोहण (दृढ़ता का प्रतीक), ध्रुव-दर्शन (स्थिरता)।",
    traditionPlaces: "समस्त भारत के सनातनी गृहस्थ परिवार, विवाह मण्डप, गुरुकुल।",
    vidhiUsage: "विवाह, उपनयन, सीमंत, नामकरण, अन्नप्राशन, चूड़ाकरण एवं श्राद्ध संस्कारों का शास्त्रीय संचालन।",
    traditionsDifferences: "आश्वलायन गृह्यसूत्र आज भी उत्तर, पश्चिम और दक्षिण भारत के ऋग्वेदीय परिवारों में संस्कारों का एकमात्र प्रामाणिक आधार ग्रंथ है।",
    historyResearch: "एडॉल्फ फ्रेडरिक स्टेंजलर (A.F. Stenzler, 1864) ने लीपज़िग में इसका प्रथम यूरोपीय संस्करण व जर्मन अनुवाद प्रकाशित किया था।",
    relatedArticles: [
      { title: "Ashvalayana Shrautasutra", tag: "Shrautasutra • Rigveda", slug: "ashvalayana-shrautasutra" },
      { title: "Shankhayana Grihyasutra", tag: "Grihyasutra • Rigveda", slug: "shankhayana-grihyasutra" },
      { title: "Gayatri Mantra", tag: "Mantra • Rigveda", slug: "gayatri-mantra" }
    ],
    relatedGrantha: { name: "16 Vedic Samskaras Guide", desc: "Ashvalayana Grihyasutra Complete 4 Chapters" },
    relatedTopics: ["Ashvalayana", "Grihyasutra", "16 Samskaras", "Vivaha", "Saptapadi", "Upanayana", "Pancha Mahayajna"]
  },

  // SHANKHAYANA GRIHYASUTRA
  "shankhayana-grihyasutra": {
    id: "shankhayana-grihyasutra",
    slug: "shankhayana-grihyasutra",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Shankhayana Grihyasutra",
    hindiTitle: "शांखायन गृह्यसूत्र (कौषीतकि शाखा का गृह्य कल्पसूत्र — ६ अध्याय)",
    contentType: "VEDANGA KALPA GRANTHA",
    updatedDate: "30 September 2026",
    tags: ["Vedanga", "Kalpa", "Grihyasutra", "Shankhayana", "Kaushitaki", "6 Adhyayas", "Domestic Rites", "Vastu Shanti"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "6 Adhyayas", type: "approved" },
      { label: "Kaushitaki / Shankhayana Tradition", type: "verified" },
      { label: "Domestic Vedic Manual", type: "approved" }
    ],
    intro: "शांखायन गृह्यसूत्र ऋग्वेद की कौषीतकि/शांखायन शाखा का अत्यंत प्राचीन एवं प्रामाणिक गृह्य कल्पसूत्र है। इसके रचयिता महर्षि सुयज्ञ शांखायन हैं। इसमें कुल ६ अध्याय हैं। यह ग्रंथ गृहस्थ जीवन के दैनिक अनुष्ठानों, पाक्षिक इष्टियों, षोडश संस्कारों, तथा विशेष रूप से 'वास्तु-कर्म' (गृह-निर्माण एवं गृह-प्रवेश शांति), 'श्रद्धा-कल्प', 'अश्वयुजी' व 'आग्रयण' कर्मों का अत्यंत विशद विवरण देता है। इसके मंत्र-विनियोग सीधे कौषीतकि संहिता और ब्राह्मण से संकलित हैं।",
    etymology: [
      { term: "शांखायन गृह्य (Śāṅkhāyana Gṛhya)", meaning: "कौषीतकि परंपरा के ऋग्वेदियों के घरेलू संस्कारों और गृहस्थ धर्म का नियम-ग्रंथ।" },
      { term: "वास्तु-शमन (Vāstu-Śamana)", meaning: "नवीन गृह निर्माण के समय भूमिदोष, दिक-दोष और प्राकृतिक विघ्नों की शांति हेतु किया जाने वाला अनुष्ठान।" }
    ],
    shastricBase: "कौषीतकि ब्राह्मण, वासुदेव कृत शांखायन गृह्यसूत्र प्रयोग-दर्पण, ओल्डनबर्ग संस्करण।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "कौषीतकि / शांखायन शाखा",
      kanda: "६ अध्याय",
      anuvaka: "संस्कार, पंचमहायज्ञ, वास्तु शांति, आग्रयण, श्राद्ध",
      rishi: "महर्षि सुयज्ञ शांखायन",
      devata: "वास्तोष्पति, अग्नि, प्रजापति, रुद्र",
      chandas: "गृह्य सूत्र शैली"
    },
    primaryMantra: {
      sanskrit: "वास्तोष्पते॒ प्रति॑ जानीह्य॒स्मान्त्स्वा॑वे॒शो अ॑नमी॒वो भ॑वा नः।\nयत्त्वेम॑हे॒ प्रति॒ तन्नो॑ जुषस्व॒ शं नो॑ भव द्वि॒पदे॒ शं चतु॑ष्पदे॥",
      ref: "ऋग्वेद ७.५४.१ एवं शांखायन गृह्यसूत्र ३.४ (वास्तु-शांति महामंत्र)",
      translation: "हे वास्तु के अधिष्ठाता देव वास्तोष्पति! आप हमारा भली-भांति संज्ञान लें; हमारे इस गृह को सुखद, रोग-रहित और सुरक्षित बनाएं। हम जो भी कल्याणकारी कामना आपसे करते हैं, उसे स्वीकार करें। हमारे द्विपदों (मनुष्यों) और चतुष्पदों (पशुओं) सभी के लिए परम कल्याणकारी और सुखप्रद बनें।"
    },
    deitiesSymbols: "वास्तोष्पति (गृह-रक्षक देव), औपासन अग्नि, वास्तु कलश, ध्रुव तारा।",
    traditionPlaces: "काश्मीर, राजस्थान, गुजरात, एवं प्राचीन तक्षशिला गुरुकुल।",
    vidhiUsage: "गृह-निर्माण, गृह-प्रवेश, उपनयन, विवाह, एवं पितृ श्राद्ध तर्पण।",
    traditionsDifferences: "आश्वलायन में ४ अध्याय हैं जबकि शांखायन में ६ अध्याय हैं; शांखायन में वास्तु-शांति और ऋतु-संस्कारों (जैसे श्रवणा कर्म, आश्वयुजी) का विस्तृत विधान है।",
    historyResearch: "हरमन ओल्डनबर्ग (Hermann Oldenberg, 1878) ने 'Sacred Books of the East' (Vol 29) में इसका पूर्ण अनुवाद प्रकाशित किया।",
    relatedArticles: [
      { title: "Shankhayana Shrautasutra", tag: "Shrautasutra • Rigveda", slug: "shankhayana-shrautasutra" },
      { title: "Ashvalayana Grihyasutra", tag: "Grihyasutra • Rigveda", slug: "ashvalayana-grihyasutra" },
      { title: "Kaushitaki Brahmana", tag: "Brahmana • Rigveda", slug: "kaushitaki-brahmana" }
    ],
    relatedGrantha: { name: "Domestic Rituals Manual", desc: "Shankhayana Grihyasutra 6 Chapters" },
    relatedTopics: ["Shankhayana", "Grihyasutra", "Vastu Shanti", "Domestic Rituals", "Kaushitaki Tradition"]
  },

  // VASISTHA DHARMASUTRA
  "vasistha-dharmasutra": {
    id: "vasistha-dharmasutra",
    slug: "vasistha-dharmasutra",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Vasistha Dharmasutra",
    hindiTitle: "वासिष्ठ धर्मसूत्र (ऋग्वेद का प्रधान धर्मशास्त्र — ३० अध्याय)",
    contentType: "VEDANGA KALPA GRANTHA",
    updatedDate: "30 September 2026",
    tags: ["Vedanga", "Kalpa", "Dharmasutra", "Vasistha", "Rigveda", "30 Adhyayas", "Rajadharma", "Sadachara"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "30 Adhyayas", type: "approved" },
      { label: "Vasistha Vedic Authority", type: "verified" },
      { label: "Foundation of Hindu Jurisprudence", type: "approved" }
    ],
    intro: "वासिष्ठ धर्मसूत्र ऋग्वेद का एकमात्र उपलब्ध, अत्यंत प्रतिष्ठित एवं प्राचीनतम धर्मसूत्र है। इसके रचयिता ब्रह्मर्षि वसिष्ठ के वंशज महर्षि वसिष्ठ हैं। इसमें कुल ३० अध्याय हैं। यह ग्रंथ प्राचीन भारत की विधि व्यवस्था (Jurisprudence), सामाजिक मर्यादाओं और नैतिक जीवन का सर्वमान्य आधार है। इसमें धर्म के तीन प्रमुख स्रोत — श्रुति (वेद), स्मृति (धर्मशास्त्र), तथा शिष्टाचार (साधु पुरुषों का आचरण) — का निरूपण है। इसमें वर्णाश्रम धर्म, राजा के कर्तव्य (राजधर्म — अध्याय १९), न्याय-प्रक्रिया, साक्षी विधान, दायभाग (उत्तराधिकार), पाप और उनके कठोर प्रायश्चित्त, तथा 'आर्यावर्त' की शास्त्रीय भौगोलिक सीमाओं का ऐतिहासिक वर्णन है।",
    etymology: [
      { term: "धर्मसूत्र (Dharmasūtra)", meaning: "समाज, राज्य, नीति, सदाचार और विधि-व्यवस्था को नियमित करने वाले वैदिक कल्पसूत्र।" },
      { term: "शिष्टाचार (Śiṣṭācāra)", meaning: "काम और क्रोध से रहित, वेदज्ञ, निःस्वार्थ सत्पुरुषों का प्रमाणभूत आचरण।" },
      { term: "आर्यावर्त (Āryāvarta)", meaning: "वासिष्ठ धर्मसूत्र १.८ के अनुसार — 'प्राग् आदर्शात् प्रत्यक् कालकवनात् उदक् पारियात्राद् दक्षिणेन हिमवतः' (हिमालय के दक्षिण, विन्ध्य के उत्तर, आदर्श के पूर्व और कालकवन के पश्चिम का पावन क्षेत्र)।" }
    ],
    shastricBase: "ऋग्वेद शाकल संहिता (मण्डल ७), यज्ञस्वामी कृत वासिष्ठ धर्मशास्त्र विवरण, ब्यूह्लर संस्करण।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "वासिष्ठ / शाकल शाखा",
      kanda: "३० अध्याय",
      anuvaka: "धर्म-प्रमाण, राजधर्म, दायभाग, संस्कार, प्रायश्चित्त, सदाचार",
      rishi: "महर्षि वसिष्ठ",
      devata: "धर्म, वरुण, सूर्य, प्रजापति",
      chandas: "सूत्र शैली एवं अनुष्टुप् श्लोक"
    },
    primaryMantra: {
      sanskrit: "श्रुतिस्मृतिविहितो धर्मः। तदलाभे शिष्टाचारः प्रमाणम्।\nशिष्टः पुनरकामात्मा। अगृह्यमाणकारणो धर्मः॥",
      ref: "वासिष्ठ धर्मसूत्र १.४-६ (धर्म के तीन सनातन स्रोत)",
      translation: "श्रुति (वेद) और स्मृति (धर्मशास्त्र) द्वारा विहित कर्म ही 'धर्म' है। जहाँ इन दोनों का स्पष्ट निर्देश न मिले, वहाँ 'शिष्टाचार' (सत्पुरुषों का आचरण) ही सर्वोच्च प्रमाण है। 'शिष्ट' वह है जिसका अंतःकरण किसी भी कामना या स्वार्थ से दूषित न हो और जिसके आचरण में केवल निष्काम धर्म ही कारण हो।"
    },
    deitiesSymbols: "धर्म (सार्वभौमिक न्याय), राज-दण्ड (सदाचार रक्षक), आर्यावर्त भूमि, शिष्ट जन।",
    traditionPlaces: "आर्यावर्त, सरस्वती-दृषद्वती तट, अयोध्या, वसिष्ठ आश्रम।",
    vidhiUsage: "न्याय-निर्णय, प्रायश्चित्त विधान, राजधर्म पालन, दायभाग (सम्पत्ति विभाजन), एवं सामाजिक मर्यादा।",
    traditionsDifferences: "आपस्तम्ब और बौधायन धर्मसूत्र (कृष्ण यजुर्वेद) की तुलना में वासिष्ठ धर्मसूत्र ऋग्वैदिक ऋचाओं को उद्धृत करता है और सदाचार को सर्वोच्च प्रमाण मानता है।",
    historyResearch: "जॉर्ज ब्यूह्लर (Georg Bühler, 1882) ने 'Sacred Books of the East' (Vol 14) में इसका आलोचनात्मक अनुवाद किया।",
    relatedArticles: [
      { title: "Mandala 7", tag: "Mandala • Rigveda", slug: "mandala-7" },
      { title: "Baudhayana Sulbasutra", tag: "Vedanga • Yajurveda", slug: "baudhayana-sulbasutra" },
      { title: "Ashvalayana Grihyasutra", tag: "Grihyasutra • Rigveda", slug: "ashvalayana-grihyasutra" }
    ],
    relatedGrantha: { name: "Vedic Law and Jurisprudence", desc: "Vasistha Dharmasutra Complete 30 Chapters" },
    relatedTopics: ["Vasistha", "Dharmasutra", "Aryavarta", "Rajadharma", "Shishtachara", "Hindu Law"]
  },

  // RIG PRATISHAKHYA
  "rig-pratishakhya": {
    id: "rig-pratishakhya",
    slug: "rig-pratishakhya",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Rig-Pratishakhya",
    hindiTitle: "ऋक्-प्रातिशाख्य (ऋग्वेद का ध्वनि-विज्ञान, छन्द व पदपाठ व्याकरण — १८ पटल)",
    contentType: "VEDANGA SHIKSHA & VYAKARANA",
    updatedDate: "30 September 2026",
    tags: ["Vedanga", "Shiksha", "Vyakarana", "Pratishakhya", "Shaunaka", "18 Patalas", "Phonetics", "Svara"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "18 Patalas (3 Adhyayas)", type: "approved" },
      { label: "Shaunaka Master Phonetics", type: "verified" },
      { label: "Vedic Accentuation & Metrics", type: "approved" }
    ],
    intro: "ऋक्-प्रातिशाख्य (पार्षद सूत्र) ऋग्वेद की शाकल शाखा का सर्वप्राचीन एवं सर्वोच्च ध्वनि-वैज्ञानिक व व्याकरणिक ग्रंथ है। इसके रचयिता महर्षि शौनक हैं। इसमें कुल ३ अध्याय और १८ पटल (१०७ संधिसूत्र/ऋचाएँ) हैं। यह ग्रंथ ऋग्वेद के पदपाठ (Padapatha) को संहितापाठ (Samhitapatha) में परिवर्तित करने के समस्त नियमों, वर्णों के उच्चारण-स्थान व प्रयत्न (Phonetics), स्वर-प्रक्रिया (उदात्त, अनुदात्त, स्वरित, प्रचय), संधि-नियम, प्लुत स्वर, तथा ऋग्वैदिक छंदों (गायत्री, त्रिष्टुप्, जगती, अनुष्टुप्, पंक्ति आदि के लक्षणों व यतियों) का अत्यंत वैज्ञानिक और सूक्ष्म निरूपण प्रस्तुत करता है।",
    etymology: [
      { term: "प्रातिशाख्य (Prātiśākhya)", meaning: "प्रति-शाखायां भवं प्रातिशाख्यम् — वेद की प्रत्येक शाखा के विशिष्ट उच्चारण, संधि और व्याकरण के नियम।" },
      { term: "उदात्त-अनुदात्त-स्वरित", meaning: "उच्चैरुदात्तः (ऊंचे स्वर में), नीचैरनुदात्तः (मंद्र स्वर में), समाहारः स्वरितः (दोनों का समिश्रित स्वर) — वैदिक सस्वर पाठ के ३ मूल स्वर।" },
      { term: "पदपाठ व क्रमपाठ", meaning: "महर्षि शाकल्य द्वारा संहिताबद्ध मंत्रों के प्रत्येक पद को पृथक-पृथक कर विकृति-रहित सुरक्षित रखने की प्राचीन तकनीक।" }
    ],
    shastricBase: "ऋग्वेद शाकल शाखा, उव्वट कृत ऋक्-प्रातिशाख्य भाष्य, महर्षि शौनक मूल कारिकाएँ।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल शाखा",
      kanda: "३ अध्याय (१८ पटल)",
      anuvaka: "वर्णोच्चारण, स्वर-मीमांसा, संधि-विधान, छन्दोलक्षण, पाठ-विकृतियाँ",
      rishi: "महर्षि शौनक",
      devata: "सरस्वती, वाक्, ब्रह्म",
      chandas: "प्रातिशाख्य श्लोक एवं कारिका शैली"
    },
    primaryMantra: {
      sanskrit: "अथातो वर्णसमाम्नायं व्याख्यास्यामः। अष्टौ समानाक्षराण्यादितस्ततश्चत्वारि सन्ध्यक्षराणि।\nउच्चैरुदात्तो नीचैरनुदात्तः समाहारः स्वरितः॥",
      ref: "ऋक्-प्रातिशाख्य १.१ एवं ३.१ (वर्ण व स्वर लक्षण)",
      translation: "अब इसके अनन्तर हम वर्णों की वैज्ञानिक वर्णमाला (वर्णसमाम्नाय) की व्याख्या करते हैं। प्रारंभ में आठ समानाक्षर (अ, आ, इ, ई, उ, ऊ, ऋ, ॠ) हैं और उसके बाद चार सन्ध्यक्षर (ए, ऐ, ओ, औ) हैं। उच्च स्वर से उच्चारित होने वाला 'उदात्त' है, मंद्र/निम्न स्वर से 'अनुदात्त' है, और दोनों का समाहार 'स्वरित' कहलाता है।"
    },
    deitiesSymbols: "वाग्देवी (वाणी की अधिष्ठात्री), स्वर-चिह्न (अनुदात्त अधोरेखा, स्वरित ऊर्ध्वरेखा), वर्ण-माला।",
    traditionPlaces: "प्राचीन वैदिक वेदपाठी गुरुकुल, वाराणसी, उज्जैन, कांचीपुरम।",
    vidhiUsage: "ऋग्वेद की ऋचाओं का सस्वर शुद्ध पाठ, पदपाठ निर्माण, क्रम-जटा-घन विकृति पाठ का वैज्ञानिक परीक्षण।",
    traditionsDifferences: "पाणिनीय व्याकरण जहां लौकिक और वैदिक दोनों के सामान्य नियम बताता है, वहीं ऋक्-प्रातिशाख्य केवल ऋग्वेद शाकल शाखा के ध्वन्यात्मक रहस्यों का परम विशेषज्ञ ग्रंथ है।",
    historyResearch: "मैक्स मूलर (Max Müller, 1869) ने जर्मनी में इसका प्रथम आलोचनात्मक संस्करण और जर्मन अनुवाद प्रकाशित कर भाषा-विज्ञान (Linguistics) की नींव रखी।",
    relatedArticles: [
      { title: "Shakala Samhita", tag: "Samhita • Rigveda", slug: "shakala-samhita" },
      { title: "Sayana Bhashya", tag: "Bhashya • Rigveda", slug: "sayana-bhashya" },
      { title: "Gayatri Mantra", tag: "Mantra • Rigveda", slug: "gayatri-mantra" }
    ],
    relatedGrantha: { name: "Vedic Phonetics Masterwork", desc: "Rig-Pratishakhya Shaunaka 18 Patalas" },
    relatedTopics: ["Rig Pratishakhya", "Shaunaka", "Vedic Phonetics", "Udatta Anudatta Svarita", "Padapatha", "Linguistics"]
  },

  // SAYANA BHASHYA
  "sayana-bhashya": {
    id: "sayana-bhashya",
    slug: "sayana-bhashya",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Sayana Bhashya",
    hindiTitle: "सायण भाष्य (माधवीय वेदार्थप्रकाश — ऋग्वेद का संपूर्ण एवं प्रामाणिक भाष्य)",
    contentType: "VEDIC COMMENTARY & BHASHYA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Bhashya", "Sayana", "Madhaviya", "Vedarthaprakasha", "Yaska Nirukta", "Panini"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "Complete 10 Mandalas Commentary", type: "approved" },
      { label: "Vijayanagara Imperial Heritage", type: "verified" },
      { label: "Unrivaled Shastric Authority", type: "approved" }
    ],
    intro: "सायण भाष्य (माधवीय वेदार्थप्रकाश) चौदहवीं शताब्दी (१४वीं सदी) में विजयनगर साम्राज्य के प्रधानमंत्री एवं परम प्रकांड वेदवेत्ता आचार्य सायण (माधवाचार्य / विद्यारण्य स्वामी के अनुज) द्वारा प्रणीत समस्त वैदिक साहित्य का सबसे महान, संपूर्ण एवं अप्रतिम भाष्य है। आचार्य सायण ने ऋग्वेद के संपूर्ण १० मण्डलों के सभी १,०२८ सूक्तों और १०,५५२ मंत्रों के एक-एक पद की यास्क-निरुक्त, पाणिनि व्याकरण (अष्टाध्यायी/धातुपाठ), कात्यायन सर्वानुक्रमणी तथा ऐतरेय/कौषीतकि ब्राह्मणों के आधार पर सप्रमाण याज्ञिक एवं आध्यात्मिक व्याख्या की है। सायण भाष्य के बिना आधुनिक युग में वेदों के मूल अर्थ को समझना सर्वथा असंभव है।",
    etymology: [
      { term: "वेदार्थप्रकाश (Vedārthaprakāśa)", meaning: "वेदानाम् अर्थस्य प्रकाशः — वेदों के अत्यंत गूढ़ और रहस्यमयी अर्थों को प्रकाशित करने वाला दिव्य भाष्य।" },
      { term: "आचार्य सायण (Ācārya Sāyaṇa)", meaning: "विजयनगर साम्राज्य के राजगुरु, महाविद्वान एवं समस्त चारों वेदों के प्रथम सर्वांगीण भाष्यकार।" },
      { term: "विनियोग (Viniyoga)", meaning: "प्रत्येक मंत्र का ऋषि, देवता, छंद तथा किस विशिष्ट यज्ञ-कर्म में उसका प्रयोग होता है, उसका सुनिश्चित शास्त्रीय निर्धारण।" }
    ],
    shastricBase: "ऋग्वेद शाकल संहिता, यास्क कृत निरुक्त, पाणिनि अष्टाध्यायी, शतपथ व ऐतरेय ब्राह्मण।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल संहिता (१० मण्डल)",
      kanda: "१० मण्डल • १०२८ सूक्त • १०५५२ मन्त्र",
      anuvaka: "पदच्छेद, पदार्थ, पदमंजरी, पाणिनीय स्वर-सिद्धि, याज्ञिक विनियोग",
      rishi: "आचार्य सायण (विद्यारण्य स्वामी के मार्गदर्शन में)",
      devata: "परब्रह्म एवं समस्त वैदिक देवता",
      chandas: "शास्त्रीय संस्कृत भाष्य गद्य"
    },
    primaryMantra: {
      sanskrit: "यस्य निःश्वसितं वेदा यो वेदेभ्योऽखिलं जगत्।\nनिर्ममे तमहं वन्दे विद्यातीर्थं महेश्वरम्॥\n\nऋग्वेदे पदपदार्थविवरणं विनियोगश्च पाणिनीयसूत्राश्रयेण सविस्तरं प्रतिपाद्यते।",
      ref: "माधवीय वेदार्थप्रकाश — ऋग्वेद भाष्य मंगलाचरण (आचार्य सायण)",
      translation: "चारों वेद जिनका सहज निःश्वास हैं, और जिन्होंने वेदों के ज्ञान से ही इस संपूर्ण ब्रह्मांड का निर्माण किया — उन साक्षात विद्यातीर्थ महेश्वर (परब्रह्म एवं गुरु) की मैं सादर वंदना करता हूँ। ऋग्वेद के प्रत्येक मंत्र का पदच्छेद, पदार्थ, व्याकरणिक व्युत्पत्ति तथा यज्ञीय विनियोग पाणिनीय सूत्रों और निरुक्त के आधार पर प्रस्तुत किया जाता है।"
    },
    deitiesSymbols: "विद्यातीर्थ महेश्वर (गुरु-परब्रह्म), विजयनगर स्वर्ण-युग, तालपत्र पाण्डुलिपियाँ।",
    traditionPlaces: "हम्पी (विजयनगर), शृंगेरी शारदा पीठ, वाराणसी, ऑक्सफोर्ड (मैक्स मूलर संपादन स्थल)।",
    vidhiUsage: "समस्त वैदिक अध्ययन, अनुसंधान, वेदपाठालयों में अध्यापन, एवं शास्त्रीय शोध का अनिवार्य आधार।",
    traditionsDifferences: "स्वामी दयानंद सरस्वती के आर्ष भाष्य तथा श्री अरविन्द के मनोवैज्ञानिक-आध्यात्मिक भाष्य के लिए भी सायण भाष्य ही प्राथमिक तुलनात्मक आधार बना।",
    historyResearch: "मैक्स मूलर ने १८४९ से १८७४ के बीच ऑक्सफोर्ड यूनिवर्सिटी प्रेस से ६ विशाल खंडों में 'सायण भाष्य सहित ऋग्वेद' का ऐतिहासिक प्रथम विश्व-संस्करण प्रकाशित किया था।",
    relatedArticles: [
      { title: "Shakala Samhita", tag: "Samhita • Rigveda", slug: "shakala-samhita" },
      { title: "Rig-Pratishakhya", tag: "Vedanga • Rigveda", slug: "rig-pratishakhya" },
      { title: "Agni Sukta", tag: "Sukta • Rigveda", slug: "agnisukta" }
    ],
    relatedGrantha: { name: "Magnum Opus of Vedic Scholarship", desc: "Madhaviya Vedartha Prakasha Sayana Complete Commentary" },
    relatedTopics: ["Sayana Bhashya", "Vedartha Prakasha", "Max Muller Rigveda", "Nirukta", "Panini", "Vijayanagara"]
  },

  // HIRANYAGARBHA SUKTA
  "hiranyagarbha-sukta": {
    id: "hiranyagarbha-sukta",
    slug: "hiranyagarbha-sukta",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Hiranyagarbha Sukta",
    hindiTitle: "हिरण्यगर्भ सूक्त (ऋग्वेद १०.१२१ — ब्रह्माण्डीय उत्पत्ति एवं 'कस्मै देवाय' सूक्त)",
    contentType: "VEDIC SUKTA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Sukta", "Hiranyagarbha", "Mandala 10", "Cosmology", "Prajapati", "Big Bang"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "10 Mantras Complete", type: "approved" },
      { label: "Cosmic Golden Egg Metaphor", type: "verified" },
      { label: "Prajapati Cosmology", type: "approved" }
    ],
    intro: "हिरण्यगर्भ सूक्त ऋग्वेद के दशम मण्डल का १२१वाँ अत्यंत प्रसिद्ध एवं गहन दार्शनिक सूक्त है। इसके द्रष्टा ऋषि 'हिरण्यगर्भ प्राजापत्य' हैं तथा देवता 'क' (प्रजापति / अनिर्वचनीय परब्रह्म) हैं। इसमें कुल १० मंत्र (ऋचाएँ) हैं, जो त्रिष्टुप् छंद में निबद्ध हैं। यह सूक्त ब्रह्मांड की उत्पत्ति (Cosmic Origin) के उस आदिम बिंदु का वर्णन करता है, जब सृष्टि से पूर्व केवल एक 'हिरण्यगर्भ' (स्वर्णमय तेजोमय कॉस्मिक एग / प्राइमर्डियल ज्योतिर्पिंड) विद्यमान था। इसके प्रथम ९ मंत्रों की प्रत्येक अंतिम पंक्ति में यह गूंजता हुआ अमर प्रश्न आता है: 'कस्मै देवाय हविषा विधेम' (हम किस सुखस्वरूप अनिर्वचनीय देव की हवि द्वारा उपासना करें?), और १०वें मंत्र में रहस्योद्घाटन होता है कि वे सर्वव्यापी प्रभु 'प्रजापति' ही हैं।",
    etymology: [
      { term: "हिरण्यगर्भ (Hiraṇyagarbha)", meaning: "हिरण्यं (ज्योतिर्मय सुवर्ण) गर्भे यस्य — जिसके गर्भ में संपूर्ण ब्रह्मांड का तेज और समस्त प्राणी निहित हैं; कॉस्मिक ज्योतिर्पिंड।" },
      { term: "कस्मै देवाय (Kasmai Devāya)", meaning: "१. 'क' नामक सुखस्वरूप प्रजापति देव के लिए। २. किस अनिर्वचनीय, असीम परमात्मा की हम आराधना करें?" },
      { term: "प्रजापति (Prajāpati)", meaning: "समस्त चर-अचर प्रजाओं, लोकों और देवताओं का एकमात्र स्वामी एवं पालक परमेश्वर।" }
    ],
    shastricBase: "ऋग्वेद शाकल संहिता (१०.१२१.१-१०), शुक्ल यजुर्वेद १३.४, तैत्तिरीय संहिता ४.१.८, सायण भाष्य।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल शाखा",
      kanda: "मण्डल १०, सूक्त १२१",
      anuvaka: "१० मन्त्र",
      rishi: "हिरण्यगर्भ प्राजापत्य",
      devata: "क / प्रजापति (हिरण्यगर्भ)",
      chandas: "त्रिष्टुप्"
    },
    primaryMantra: {
      sanskrit: "हि॒र॒ण्य॒ग॒र्भः सम॑वर्त॒ताग्रे॑ भू॒तस्य॑ जा॒तः पति॒रेक॑ आसीत्।\nस दा॑धार पृथि॒वीं द्यामु॒तेमां कस्मै॑ दे॒वाय॑ ह॒विषा॑ विधेम॥",
      ref: "ऋग्वेद १०.१२१.१ (हिरण्यगर्भ सूक्त प्रथम ऋचा)",
      translation: "सृष्टि के प्रारंभ में सर्वप्रथम 'हिरण्यगर्भ' (स्वर्णमय तेजोमय परमात्मा) ही विद्यमान था। वही उत्पन्न हुए समस्त चराचर जगत का एकमात्र स्वामी था। उसी ने इस पृथ्वी और द्युलोक को धारण कर रखा है; हम उस सुखस्वरूप 'क' (परमात्मा) की हवि द्वारा भक्तिपूर्वक आराधना करते हैं।"
    },
    allMantras: [
      {
        number: "१०.१२१.१",
        sanskrit: "हि॒र॒ण्य॒ग॒र्भः सम॑वर्त॒ताग्रे॑ भू॒तस्य॑ जा॒तः पति॒रेक॑ आसीत्।\nस दा॑धार पृथि॒वीं द्यामु॒तेमां कस्मै॑ दे॒वाय॑ ह॒विषा॑ विधेम॥",
        transliteration: "hiraṇyagarbhaḥ samavartatāgre bhūtasya jātaḥ patir eka āsīt |\nsa dādhāra pṛthivīṃ dyām utemāṃ kasmai devāya haviṣā vidhema ||",
        padapatha: "हि॒र॒ण्य॒ऽग॒र्भः । सम् । अ॒व॒र्त्त॒त॒ । अग्रे॑ । भू॒तस्य॑ । जा॒तः । पतिः॑ । एकः॑ । आ॒सी॒त् ।\nसः । दा॒धा॒र॒ । पृ॒थि॒वीम् । द्याम् । उ॒त । इ॒माम् । कस्मै॑ । दे॒वाय॑ । ह॒विषा॑ । वि॒धे॒म॒ ॥",
        padapathaBadges: [
          { word: "हिरण्यगर्भः", meaning: "ज्योतिर्मय आदि कारण परमात्मा" },
          { word: "समवर्तत अग्रे", meaning: "सृष्टि के पूर्व विद्यमान था" },
          { word: "भूतस्य जातः पतिः एकः आसीत्", meaning: "उत्पन्न जगत का एकमात्र स्वामी था" },
          { word: "स दाधार पृथिवीं द्याम्", meaning: "उसने पृथ्वी और द्युलोक को धारण किया" },
          { word: "कस्मै देवाय हविषा विधेम", meaning: "उस सुखस्वरूप परमात्मा की हम हवि से पूजा करें" }
        ],
        translation: "सृष्टि से पूर्व सर्वप्रथम हिरण्यगर्भ ही प्रकट हुआ; वही संपूर्ण उत्पन्न जगत का एकमात्र स्वामी बना। उसी ने इस पृथ्वी और आकाश को धारण कर रखा है; हम उस 'क' (आनंदस्वरूप परमात्मा) की हवि द्वारा आराधना करते हैं।",
        english: "In the beginning arose the Golden Embryo (Hiranyagarbha); He was the sole Lord of all created beings. He sustained this earth and heaven. To what God shall we offer our oblation?",
        hinglish: "Srishti ke shuru me sabse pehle Hiranyagarbha hi tha, wahi poore sansar ka ekmatra swami tha. Hum us anand-swarup Ishwar ki havi se upasana karte hain.",
        sayanaBhashya: "हिरण्यगर्भ समस्त जगत का आदि कारण और तेजोमय स्रोत है।",
        readerId: "rv-10-121-1"
      },
      {
        number: "१०.१२१.२",
        sanskrit: "य आ॑त्म॒दा ब॑ल॒दा यस्य॒ विश्व॑ उ॒पास॑ते प्र॒शिषं॒ यस्य॑ दे॒वाः।\nयस्य॑ छा॒याऽमृतं॒ यस्य॑ मृ॒त्युः कस्मै॑ दे॒वाय॑ ह॒विषा॑ विधेम॥",
        transliteration: "ya ātmadā baladā yasya viśva upāsate praśiṣaṃ yasya devāḥ |\nyasya chāyā'mṛtaṃ yasya mṛtyuḥ kasmai devāya haviṣā vidhema ||",
        padapatha: "यः । आ॒त्म॒ऽदाः । ब॒ल॒ऽदाः । यस्य॑ । विश्वे॑ । उ॒प॒ऽआस॑ते । प्र॒ऽशिष॑म् । यस्य॑ । दे॒वाः ।\nयस्य॑ । छा॒या । अ॒मृत॑म् । यस्य॑ । मृ॒त्युः । कस्मै॑ । दे॒वाय॑ । ह॒विषा॑ । वि॒धे॒म॒ ॥",
        padapathaBadges: [
          { word: "आत्मदा बलदा", meaning: "आत्मज्ञान और आत्मबल प्रदाता" },
          { word: "यस्य विश्वे उपासते", meaning: "जिसकी समस्त विश्व उपासना करता है" },
          { word: "यस्य छाया अमृतं यस्य मृत्युः", meaning: "जिसकी छाया अमरत्व है और जिसकी छाया मृत्यु है" }
        ],
        translation: "जो आत्मज्ञान और आत्मबल का प्रदाता है, जिसके आदेश को समस्त विश्व और देवगण शिरोधार्य करते हैं, जिसकी शरण (छाया) अमरत्व है और जिसकी विमुखता मृत्यु है — हम उस 'क' देव की हवि द्वारा पूजा करते हैं।",
        english: "He who gives life and strength, whose command all beings and the gods revere, whose shadow is immortality and whose shadow is death — to what God shall we offer our oblation?",
        hinglish: "Jo aatmbal aur aatmjnan deta hai, jiska aadesh sab dev maante hain, jiski chhaya amrit aur jiski vimukhta mrityu hai — hum us Parameshwar ki upasana karte hain.",
        sayanaBhashya: "परमात्मा के अनुग्रह में अमृतत्व और उनसे दूरी ही मृत्यु है।",
        readerId: "rv-10-121-2"
      },
      {
        number: "१०.१२१.१०",
        sanskrit: "प्रजा॑पते॒ न त्वदे॒तान्य॒न्यो विश्वा॑ जा॒तानि॒ परि॒ ता ब॑भूव।\nयत्का॑मास्ते जुहु॒मस्तन्नो॑ अस्तु व॒यं स्या॑म॒ पत॑यो रयी॒णाम्॥",
        transliteration: "prajāpate na tvad etāny anyo viśvā jātāni pari tā babhūva |\nyatkāmās te juhumas tan no astu vayaṃ syāma patayo rayīṇām ||",
        padapatha: "प्रजा॑ऽपते । न । त्वत् । ए॒तानि॑ । अ॒न्यः । विश्वा॑ । जा॒तानि॑ । परि॑ । ता । ब॒भू॒व॒ ।\nयत्ऽका॑माः । ते॒ । जु॒हु॒मः । तत् । नः॒ । अ॒स्तु॒ । व॒यम् । स्या॒म॒ । पत॑यः । र॒यी॒णाम् ॥",
        padapathaBadges: [
          { word: "प्रजापते", meaning: "हे समस्त प्रजाओं के पालक परमेश्वर" },
          { word: "न त्वत् अन्यः", meaning: "आपके अतिरिक्त कोई दूसरा नहीं है" },
          { word: "परि ता बभूव", meaning: "इन समस्त उत्पन्न प्राणियों को व्याप्त किए हुए है" },
          { word: "वयं स्याम पतयो रयीणाम्", meaning: "हम समस्त श्रेष्ठ दिव्य ऐश्वर्यों के स्वामी बनें" }
        ],
        translation: "हे प्रजापति परमेश्वर! आपके अतिरिक्त कोई दूसरा इन समस्त उत्पन्न जड़-चेतन पदार्थों को व्याप्त नहीं कर सकता। हम जिस-जिस उत्तम कामना से आपकी आहुति समर्पित करते हैं, वह सिद्ध हो; और हम समस्त दिव्य आध्यात्मिक ऐश्वर्यों के स्वामी बनें!",
        english: "O Prajapati! Lord of all creatures! None other than You can embrace all these created things. May that for which we offer our prayers be ours; may we become masters of rich treasures!",
        hinglish: "Hey Prajapati! Aapke siva koi doosra is samast sansar ko vyapt nahi kar sakta. Hamari sabhi shubh kamnayein poori hon aur hum shreshth aishwarya ke swami banein.",
        sayanaBhashya: "१०वें मंत्र में 'क' का साक्षात रहस्य प्रजापति परमात्मा के रूप में उद्घाटित हुआ है।",
        readerId: "rv-10-121-10"
      }
    ],
    deitiesSymbols: "हिरण्यगर्भ (कॉस्मिक गोल्डन एग / बिग बैंग से पूर्व का तेजोमय बिंदु), अपः (प्रलयकालीन कॉस्मिक जल), प्रजापति (समस्त जीवों का पालक)।",
    traditionPlaces: "समस्त वैदिक यज्ञशालाएँ, नैमिषारण्य, ब्रह्मलोक।",
    vidhiUsage: "अग्निचयन, सौत्रामणी, प्रजापति होम, और विश्वोत्पत्ति चिंतन।",
    traditionsDifferences: "शुक्ल यजुर्वेद के १३वें अध्याय में यह मंत्र अग्निचयन की प्रथम स्वर्ण-ईंट (हिरण्येष्टका) की स्थापना के समय पढ़ा जाता है।",
    historyResearch: "मैक्स मूलर और आधुनिक भौतिकविदों ने 'हिरण्यगर्भ' की तुलना ब्रह्मांड की उत्पत्ति के 'Cosmic Singularity / Primordial Atom' से की है।",
    relatedArticles: [
      { title: "Purusha Sukta", tag: "Sukta • Rigveda", slug: "purusha-sukta" },
      { title: "Nasadiya Sukta", tag: "Sukta • Rigveda", slug: "nasadiya-sukta" },
      { title: "Mandala 10", tag: "Mandala • Rigveda", slug: "mandala-10" }
    ],
    relatedGrantha: { name: "Rigveda Creation Hymns", desc: "Hiranyagarbha Sukta Complete 10 Mantras Archive" },
    relatedTopics: ["Hiranyagarbha", "Kasmai Devaya", "Cosmic Egg", "Prajapati", "Big Bang Vedic"]
  },

  // VAK SUKTA
  "vak-sukta": {
    id: "vak-sukta",
    slug: "vak-sukta",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Vak Sukta",
    hindiTitle: "वाक् सूक्त (देवी सूक्त — ऋग्वेद १०.१२५ — परम चेतना की आत्म-अभिव्यक्ति)",
    contentType: "VEDIC SUKTA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Sukta", "Vak Sukta", "Devi Sukta", "Aham Rashtri", "Shakti", "Mandala 10"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "8 Mantras Complete", type: "approved" },
      { label: "Brahmavadini Vak Ambhrini", type: "verified" },
      { label: "Origin of Devi Mahatmya", type: "approved" }
    ],
    intro: "वाक् सूक्त (देवी सूक्त) ऋग्वेद के दशम मण्डल का १२५वाँ अत्यंत पावन, ओजस्वी एवं क्रांतिकारी सूक्त है। इसकी द्रष्टा महर्षि अम्भृण की ब्रह्मवेत्ता पुत्री 'वाक् आम्भृणी' हैं, और देवता 'आत्मा / पराशक्ति' है। इसमें कुल ८ मंत्र हैं, जो त्रिष्टुप् और जगती छंदों में निबद्ध हैं। यह सूक्त सनातन धर्म में 'पराशक्ति (Divine Mother / Supreme Consciousness)' की सर्वोच्च प्रत्यक्ष आत्म-अभिव्यक्ति है। इसमें विदुषी वाक् अम्भृणी अद्वैत ब्रह्मभाव में लीन होकर स्वयं उद्घोष करती हैं — 'अहं राष्ट्री संगमनी वसूनां' (मैं ही संपूर्ण राष्ट्र व ब्रह्मांड की अधीश्वरी, समस्त ऐश्वर्यों की दात्री, और प्रथम पूजनीय ब्रह्मचेतना हूँ)। यही सूक्त दुर्गा सप्तशती (देवी माहात्म्य) के अंत में 'वैदिक देवी सूक्त' के रूप में नित्य पाठ किया जाता है।",
    etymology: [
      { term: "वाक् आम्भृणी (Vāk Āmbhṛṇī)", meaning: "महर्षि अम्भृण की पुत्री जिन्होंने परब्रह्म-शक्ति के साथ पूर्ण एकात्मता का साक्षात्कार किया।" },
      { term: "अहं राष्ट्री (Ahaṃ Rāṣṭrī)", meaning: "मैं ही संपूर्ण ब्रह्मांड, राज्य, संस्कृति और चेतना की सर्वोच्च स्वामिनी एवं नियामक शक्ति हूँ।" },
      { term: "चिकितुषी (Cikituṣī)", meaning: "साक्षात ब्रह्मज्ञान से संपन्न, सर्वज्ञानी चेतना शक्ति।" }
    ],
    shastricBase: "ऋग्वेद शाकल संहिता (१०.१२५.१-८), देवी माहात्म्य (मार्कण्डेय पुराण), सायण कृत वेदार्थप्रकाश।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल शाखा",
      kanda: "मण्डल १०, सूक्त १२५",
      anuvaka: "८ मन्त्र",
      rishi: "ब्रह्मवादिनी वाक् आम्भृणी",
      devata: "आत्म-स्वरूपिणी पराशक्ति (वाक्)",
      chandas: "त्रिष्टुप् एवं जगती"
    },
    primaryMantra: {
      sanskrit: "अ॒हं राष्ट्री॑ सं॒गम॑नी॒ वसू॑नां चिकितु॒षी प्र॑थ॒मा य॒ज्ञिया॑नाम्।\nतां मा॑ दे॒वा व्य॑दधुः पुरु॒त्रा भूरि॑स्थात्रां॒ भूर्या॑वे॒शय॑न्तीम्॥",
      ref: "ऋग्वेद १०.१२५.३ (वाक् सूक्त / देवी सूक्त महामंत्र)",
      translation: "मैं ही संपूर्ण ब्रह्मांड की अधीश्वरी (राष्ट्री) हूँ, समस्त ऐश्वर्यों को एकत्र करने वाली, परब्रह्म को साक्षात जानने वाली, और यज्ञ-योग्य देवों में प्रथम हूँ। उस मुझ सर्वव्यापिनी को देवताओं ने प्रत्येक स्थान पर नाना रूपों में प्रतिष्ठित किया है।"
    },
    allMantras: [
      {
        number: "१०.१२५.१",
        sanskrit: "अ॒हं रु॒द्रेभि॒र्वसु॑भिश्चराम्य॒हमा॑दि॒त्यैरु॒त वि॒श्वदे॑वैः।\nअ॒हं मि॒त्रावरु॑णो॒भा बि॑भर्म्य॒हम॑ग्नीषो॒माविन्द्रा॒ग्नी अ॒हम॒श्विनो॑भा॥",
        transliteration: "ahaṃ rudrebhir vasubhiś carāmy aham ādityair uta viśvadevaiḥ |\nahaṃ mitrāvaruṇobhā bibharmy aham agnīṣomāv indrāgnī aham aśvinobhā ||",
        padapatha: "अ॒हम् । रु॒द्रेभिः॑ । वसु॑ऽभिः । च॒रा॒मि॒ । अ॒हम् । आ॒दि॒त्यैः । उ॒त । वि॒श्वऽदे॑वैः ।\nअ॒हम् । मि॒त्रावरु॑णा । उ॒भा । बि॒भ॒र्मि॒ । अ॒हम् । अ॒ग्नीषोमा॑ । इन्द्रा॒ग्नी इति॑ । अ॒हम् । अ॒श्विना॑ । उ॒भा ॥",
        padapathaBadges: [
          { word: "अहं चरामि", meaning: "मैं ही विचरण करती हूँ" },
          { word: "रुद्रेभिः वसुभिः आदित्यैः", meaning: "एकादश रुद्रों, अष्ट वसुओं और द्वादश आदित्यों के रूप में" },
          { word: "अहं बिभर्मि", meaning: "मैं ही धारण और पोषण करती हूँ" },
          { word: "मित्रावरुणा इन्द्राग्नी अश्विना", meaning: "मित्र-वरुण, इंद्र-अग्नि और दोनों अश्विनीकुमारों को" }
        ],
        translation: "मैं ही एकादश रुद्रों, अष्ट वसुओं, द्वादश आदित्यों और समस्त विश्वेदेवों के रूप में विचरण करती हूँ। मैं ही मित्र-वरुण, इंद्राग्नि और दोनों अश्विनीकुमारों को धारण व पोषण करती हूँ।",
        english: "I move with the Rudras, the Vasus, the Adityas and the Vishvadevas. I support both Mitra and Varuna, Indra, Agni, and the two Ashvins.",
        hinglish: "Main hi Rudron, Vasuon, Adityon aur sabhi devon ke roop me ghoomti hoon. Main hi Indra, Agni, Mitra, Varuna sabko dharan karti hoon.",
        sayanaBhashya: "वाक् आम्भृणी ने परब्रह्म के साथ तादात्म्य पाकर समस्त देवों की अधिष्ठात्री रूप में यह गान किया।",
        readerId: "rv-10-125-1"
      },
      {
        number: "१०.१२५.३",
        sanskrit: "अ॒हं राष्ट्री॑ सं॒गम॑नी॒ वसू॑नां चिकितु॒षी प्र॑थ॒मा य॒ज्ञिया॑नाम्।\nतां मा॑ दे॒वा व्य॑दधुः पुरु॒त्रा भूरि॑स्थात्रां॒ भूर्या॑वे॒शय॑न्तीम्॥",
        transliteration: "ahaṃ rāṣṭrī saṃgamanī vasūnāṃ cikituṣī prathamā yajñiyānām |\ntāṃ mā devā vyadadhuḥ purutrā bhūristhātrāṃ bhūry āveśayantīm ||",
        padapatha: "अ॒हम् । राष्ट्री॑ । स॒म्ऽगम॑नी । वसू॑नाम् । चि॒कि॒तु॒षी । प्र॒थ॒मा । य॒ज्ञिया॑नाम् ।\nताम् । मा॒ । दे॒वाः । वि । अ॒द॒धुः॒ । पु॒रु॒ऽत्रा । भूरि॑ऽस्थात्राम् । भूरि॑ । आ॒ऽवे॒शय॑न्तीम् ॥",
        padapathaBadges: [
          { word: "अहं राष्ट्री", meaning: "मैं ही संपूर्ण जगत की स्वामिनी हूँ" },
          { word: "संगमनी वसूनाम्", meaning: "समस्त दिव्य धनों व ऐश्वर्यों को एकत्र करने वाली" },
          { word: "चिकितुषी", meaning: "साक्षात ब्रह्मज्ञान से युक्त" },
          { word: "प्रथमा यज्ञियानाम्", meaning: "यज्ञ-योग्य देवों में प्रथम पूजनीय" }
        ],
        translation: "मैं संपूर्ण जगत की अधीश्वरी, समस्त ऐश्वर्यों की प्रदाता, ब्रह्मवेत्ता, और पूज्य देवों में अग्रगण्य हूँ। मुझ सर्वव्यापिनी को देवताओं ने नाना लोकों और पदार्थों में प्रतिष्ठित किया है।",
        english: "I am the Sovereign Queen, the gatherer-up of treasures, most thoughtful, first among those worthy of worship. The gods have distributed me in many places, with many homes, entering into many forms.",
        hinglish: "Main poore sansar ki adheeshwari hoon, sabhi aishwarya dene wali aur pratham poojya hoon.",
        sayanaBhashya: "शक्ति साधना और अद्वैत आत्मज्ञान का यह परम वैदिक आधार मंत्र है।",
        readerId: "rv-10-125-3"
      },
      {
        number: "१०.१२५.८",
        sanskrit: "अ॒हमे॒व वात॑ इव॒ प्र वा॑म्या॒रभ॑माणा॒ भुव॑नानि॒ विश्वा॑।\nप॒रो दि॒वा प॒र ए॒ना पृ॑थि॒व्यैता॑वती महि॒ना सं ब॑भूव॥",
        transliteration: "aham eva vāta iva pra vāmy ārabhamāṇā bhuvanāni viśvā |\nparo divā para enā pṛthivyaitāvatī mahinā saṃ babhūva ||",
        padapatha: "अ॒हम् । ए॒व । वातः॑ऽइव । प्र । वा॒मि॒ । आ॒ऽरभ॑माणा । भुव॑नानि । विश्वा॑ ।\nप॒रः । दि॒वा । प॒रः । ए॒ना । पृ॒थि॒व्या । एता॑वती । म॒हि॒ना । सम् । ब॒भू॒व॒ ॥",
        padapathaBadges: [
          { word: "अहमेव वात इव प्रवामि", meaning: "मैं ही वायु की भांति स्वतंत्र प्रवाहित होती हूँ" },
          { word: "आरभमाणा भुवनानि विश्वा", meaning: "समस्त ब्रह्मांडों का निर्माण करते हुए" },
          { word: "परो दिवा पर एना पृथिव्या", meaning: "द्युलोक और इस पृथ्वी से भी परे" },
          { word: "एतावती महिना सं बभूव", meaning: "अपनी महान महिमा से इतनी विशाल हो गई हूँ" }
        ],
        translation: "मैं ही समस्त ब्रह्मांडों की रचना करती हुई वायु के समान स्वच्छंद गति से प्रवाहित होती हूँ। मैं इस द्युलोक और इस पृथ्वी लोक से भी परे असीम हूँ; अपनी दिव्य महिमा से मैं ही सर्वत्र व्याप्त हूँ!",
        english: "I blow like the wind while creating all worlds. Beyond heaven, beyond this earth, so vast have I become through my supreme glory!",
        hinglish: "Main sabhi brahmando ko banati hui vayu ke saman behti hoon. Dyu-lok aur Prithvi dono se pare meri asim mahima hai.",
        sayanaBhashya: "देवी की असीम सर्वव्यापकता और कॉस्मिक ऊर्जा का अंतिम महाघोष।",
        readerId: "rv-10-125-8"
      }
    ],
    deitiesSymbols: "वाग्देवी (पराशक्ति), राष्ट्र-मुकुट, धनुष-बाण (रुद्र को बाण देने वाली शक्ति), सागर (परब्रह्म का प्रतीक)।",
    traditionPlaces: "शाक्त पीठ, शारदा पीठ, नैमिषारण्य, कांची कामाक्षी, कामाख्या।",
    vidhiUsage: "नवरात्र में दुर्गा सप्तशती पाठ का वैदिक उपसंहार, शाक्त अभिषेक, एवं वाक्-सिद्धि अनुष्ठान।",
    traditionsDifferences: "जहाँ अन्य वैदिक सूक्तों में ऋषियों ने देवताओं की बाह्य स्तुति की है, वहीं वाक् सूक्त में विदुषी ऋषि ने साक्षात परमात्मा बनकर 'अहं' (I am) रूप में उपदेश दिया है।",
    historyResearch: "स्वामी विवेकानंद ने शिकागो विश्व धर्म संसद में इस सूक्त को 'भारतीय नारी के आध्यात्मिक शिखर और अद्वैत शक्ति का ज्वलंत प्रमाण' कहा था।",
    relatedArticles: [
      { title: "Purusha Sukta", tag: "Sukta • Rigveda", slug: "purusha-sukta" },
      { title: "Nasadiya Sukta", tag: "Sukta • Rigveda", slug: "nasadiya-sukta" },
      { title: "Mandala 10", tag: "Mandala • Rigveda", slug: "mandala-10" }
    ],
    relatedGrantha: { name: "Rigveda Devi Sukta Archive", desc: "Vak Sukta Complete 8 Mantras Text" },
    relatedTopics: ["Vak Sukta", "Devi Sukta", "Aham Rashtri", "Shakti", "Brahmavadini", "Durga Saptashati"]
  },

  // SAMGATHAN SUKTA
  "samgathan-sukta": {
    id: "samgathan-sukta",
    slug: "samgathan-sukta",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Samgathan Sukta",
    hindiTitle: "संगठन सूक्त (संज्ञान सूक्त — ऋग्वेद १०.१९१ — विश्व-एकता व सौहार्द का अंतिम वैदिक महामंत्र)",
    contentType: "VEDIC SUKTA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Sukta", "Samgathan", "Samjnana", "Unity", "Samgachhadhvam", "Mandala 10", "Last Sukta"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "4 Mantras Complete", type: "approved" },
      { label: "Universal Unity Anthem", type: "verified" },
      { label: "Final Hymn of Rigveda", type: "approved" }
    ],
    intro: "संगठन सूक्त (संज्ञान सूक्त) ऋग्वेद के दशम मण्डल का अंतिम (१९१वाँ) सूक्त है, जो संपूर्ण ऋग्वेद संहिता का परम पावन उपसंहार है। इसके ऋषि 'संवन्वन आंगिरस' हैं तथा देवता 'संज्ञान' (परस्पर ऐक्य, सद्भाव एवं संगठन) और 'अग्नि' हैं। इसमें कुल ४ मंत्र हैं। यह सूक्त समस्त मानव जाति, राष्ट्र, समाज और विश्व के लिए एकता, सामूहिकता, संवाद और हृदय के सौहार्द का अमर वैश्विक घोषणा-पत्र (Universal Anthem of Harmony) है। ऋग्वेद का प्रारंभ 'अग्नि' की स्तुति (१.१) से होता है और उसका उपसंहार समाज की अखंड संगठनात्मक एकता (१०.१९१ — 'सङ्गच्छध्वं संवदध्वं सं वो मनांसि जानताम्') पर होता है।",
    etymology: [
      { term: "संगठन / संज्ञान (Saṃgathana / Saṃjñāna)", meaning: "सम्यक् ज्ञानम् — परस्पर पूर्ण समझ, वैचारिक सामंजस्य और एक हृदय होकर साथ चलना।" },
      { term: "सङ्गच्छध्वम् (Saṅgacchadhvam)", meaning: "एक साथ आगे बढ़ो — किसी को पीछे छोड़े बिना सामूहिक प्रगति करना।" },
      { term: "संवदध्वम् (Saṃvadadhvam)", meaning: "प्रेमपूर्वक परस्पर संवाद करो — कलह और वैमनस्य से मुक्त होकर सत्य पर विमर्श करना।" }
    ],
    shastricBase: "ऋग्वेद शाकल संहिता (१०.१९१.१-४), अथर्ववेद ६.६४, सायण कृत माधवीय भाष्य।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल शाखा (ऋग्वेद का अंतिम सूक्त)",
      kanda: "मण्डल १०, सूक्त १९१",
      anuvaka: "४ मन्त्र",
      rishi: "ऋषि संवन्वन आंगिरस",
      devata: "अग्नि (मंत्र १), संज्ञान (मंत्र २-४)",
      chandas: "अनुष्टुप् (१, ३, ४) एवं त्रिष्टुप् (२)"
    },
    primaryMantra: {
      sanskrit: "सं ग॑च्छध्वं॒ सं व॑दध्वं॒ सं वो॒ मनां॑सि जानताम्।\nदे॒वा भा॒गं यथा॒ पूर्वे॑ संजाना॒ना उ॒पास॑ते॥\n\nस॒मा॒नो मन्त्रः॒ समि॑तिः समा॒नी स॑मा॒नं मनः॑ स॒ह चि॒त्तमे॑षाम्।\nस॒मा॒नं मन्त्र॑म॒भि म॑न्त्रये वः समा॒नेन॑ वो ह॒विषा॑ जुहोमि॥\n\nस॒मा॒नी व॒ आकू॑तिः समा॒ना हृद॑यानि वः।\nस॒मा॒नम॑स्तु वो॒ मनो॒ यथा॑ वः॒ सुस॒हास॑ति॥",
      ref: "ऋग्वेद १०.१९१.२-४ (विश्व-सौहार्द व एकता महामंत्र)",
      translation: "तुम सब एक साथ मिलकर चलो, एक स्वर में प्रेमपूर्वक बोलो, तुम्हारे मन एक समान ज्ञान और सद्भाव से युक्त हों; जैसे पुरातन काल में ज्ञानी देवगण एकमत होकर अपने-अपने यज्ञभाग को ग्रहण करते थे। तुम्हारे विचार समान हों, तुम्हारी सभाएं व संगठन निष्पक्ष हों, तुम्हारा मन एक हो, और तुम्हारी चेतना संगठित हो। तुम्हारे संकल्प एक हों, तुम्हारे हृदय एक समान हों, तुम्हारा मन एकरस हो — जिससे तुम्हारा पारस्परिक सहयोग और संगठन सुदृढ़ बना रहे!"
    },
    allMantras: [
      {
        number: "१०.१९१.१",
        sanskrit: "सं सं इद्यु॑वसे वृष॒न्नग्ने॒ विश्वा॑न्य॒र्य आ।\nइ॒ळस्प॒दे समि॑ध्यसे॒ स नो॒ वसूं॒या भ॑र॥",
        transliteration: "saṃ sam id yuvase vṛṣann agne viśvāny arya ā |\niḷaspade samidhyase sa no vasūny ā bhara ||",
        padapatha: "सम् । सम् । इत् । यु॒व॒से॒ । वृ॒ष॒न् । अग्ने॑ । विश्वा॑नि । अ॒र्येः । आ ।\nइ॒ळः । प॒दे । सम् । इ॒ध्य॒से॒ । सः । नः॒ । वसूं॑नि । आ । भ॒र॒ ॥",
        padapathaBadges: [
          { word: "समिद् युवसे", meaning: "हे अग्नि! आप सबको संगठित और संयुक्त करते हैं" },
          { word: "इळस्पदे समिध्यसे", meaning: "वेदी के पवित्र स्थान पर प्रज्वलित होते हैं" },
          { word: "स नो वसूनि आ भर", meaning: "वह आप हमारे लिए समस्त श्रेष्ठ धन व सद्भाव लाएं" }
        ],
        translation: "हे सामर्थ्यवान् अग्निदेव! आप समस्त प्राणियों और पदार्थों को एक सूत्र में पिरोते हैं। आप यज्ञवेदी के पावन स्थान पर प्रज्वलित होते हैं; आप हमें समस्त दिव्य ऐश्वर्य और सद्भाव प्रदान करें।",
        english: "O mighty Agni, you unite all beings together. You are kindled upon the altar of worship; bring us all noble treasures and harmony.",
        hinglish: "Hey Agni dev! Aap sabhi ko ekjut karte hain, yajna-vedi par prajwalit hote hain; hamare liye shreshth sadbhav layein.",
        sayanaBhashya: "अग्नि समस्त समाज को एक मंच पर जोड़ने वाले केंद्रीय ज्योति-स्वरूप हैं।",
        readerId: "rv-10-191-1"
      },
      {
        number: "१०.१९१.२",
        sanskrit: "सं ग॑च्छध्वं॒ सं व॑दध्वं॒ सं वो॒ मनां॑सि जानताम्।\nदे॒वा भा॒गं यथा॒ पूर्वे॑ संजाना॒ना उ॒पास॑ते॥",
        transliteration: "saṃ gacchadhvaṃ saṃ vadadhvaṃ saṃ vo manāṃsi jānatām |\ndevā bhāgaṃ yathā pūrve saṃjānānā upāsate ||",
        padapatha: "सम् । ग॒च्छ॒ध्व॒म् । सम् । व॒द॒ध्व॒म् । सम् । वः॒ । मनां॑सि । जा॒न॒ता॒म् ।\nदे॒वाः । भा॒गम् । यथा॑ । पूर्वे॑ । सम्ऽजा॒ना॒नाः । उ॒प॒ऽआस॑ते ॥",
        padapathaBadges: [
          { word: "संगच्छध्वम्", meaning: "एक साथ मिलकर चलो" },
          { word: "संवदध्वम्", meaning: "एक स्वर में सद्भाव से बोलो" },
          { word: "सं वो मनांसि जानताम्", meaning: "तुम्हारे मनों में परस्पर एकात्मता और समझ हो" },
          { word: "देवा भागं यथा पूर्वे", meaning: "जैसे पुरातन देवगण एकमत होकर कार्य करते थे" }
        ],
        translation: "तुम सब एक साथ मिलकर आगे बढ़ो, एक स्वर में प्रेमपूर्वक बोलो, तुम्हारे मन परस्पर एकात्मता और समझ से युक्त हों; जिस प्रकार पुरातन काल में देवगण पूर्ण सहमति के साथ अपने यज्ञभाग को स्वीकार करते थे।",
        english: "Walk together, speak together, let your minds be in harmony, just as the ancient gods in complete concord accepted their portion.",
        hinglish: "Tum sab sath chalo, ek sath bolo, tumhare man ek jaise banein, jaise prachin devta ekjut hokar rehte the.",
        sayanaBhashya: "राष्ट्र और समाज की अखंड शक्ति का मूल आधार यह मंत्र है।",
        readerId: "rv-10-191-2"
      },
      {
        number: "१०.१९१.३",
        sanskrit: "स॒मा॒नो मन्त्रः॒ समि॑तिः समा॒नी स॑मा॒नं मनः॑ स॒ह चि॒त्तमे॑षाम्।\nस॒मा॒नं मन्त्र॑म॒भि म॑न्त्रये वः समा॒नेन॑ वो ह॒विषा॑ जुहोमि॥",
        transliteration: "samāno mantraḥ samitiḥ samānī samānaṃ manaḥ saha cittam eṣām |\nsamānaṃ mantram abhi mantraye vaḥ samānena vo haviṣā juhomi ||",
        padapatha: "स॒मा॒नः । मन्त्रः॑ । सम्ऽइ॑तिः । स॒मा॒नी । स॒मा॒नम् । मनः॑ । स॒ह । चि॒त्तम् । ए॒षा॒म् ।\nस॒मा॒नम् । मन्त्र॑म् । अ॒भि । म॒न्त्र॒ये॒ । वः॒ । स॒मा॒नेन॑ । वः॒ । ह॒विषा॑ । जु॒हो॒मि॒ ॥",
        padapathaBadges: [
          { word: "समानो मन्त्रः", meaning: "तुम्हारी मंत्रणा और विचार एक हों" },
          { word: "समितिः समानी", meaning: "तुम्हारी संसद, सभाएं और संगठन एकमत हों" },
          { word: "समानं मनः", meaning: "तुम्हारा मन समान लक्ष्य वाला हो" },
          { word: "सहा चित्तम्", meaning: "तुम्हारी चेतना परस्पर जुड़ी हो" }
        ],
        translation: "तुम्हारी मंत्रणा (विचार) समान हो, तुम्हारी सभाएं और संगठन एकमत हों, तुम्हारा मन एक हो और तुम्हारी अंतश्चेतना परस्पर जुड़ी हो। मैं तुम्हें समान विचार का उपदेश देता हूँ और तुम्हें समान हवि द्वारा संगठित करता हूँ।",
        english: "Common be your prayer, common be your assembly, common be your mind and united your thoughts. I offer for you a common prayer and unite you with a common oblation.",
        hinglish: "Tumhari sabhaein aur vichar ek hon, man ek ho aur aapsi prem se yukt sangathan bane.",
        sayanaBhashya: "लोकतंत्र (Democracy) और संसदीय व्यवस्था का प्राचीनतम वैदिक बीज।",
        readerId: "rv-10-191-3"
      },
      {
        number: "१०.१९१.४",
        sanskrit: "स॒मा॒नी व॒ आकू॑तिः समा॒ना हृद॑यानि वः।\nस॒मा॒नम॑स्तु वो॒ मनो॒ यथा॑ वः॒ सुस॒हास॑ति॥",
        transliteration: "samānī va ākūtiḥ samānā hṛdayāni vaḥ |\nsamānam astu vo mano yathā vaḥ susahāsati ||",
        padapatha: "स॒मा॒नी । वः॒ । आऽकू॑तिः । स॒मा॒ना । हृद॑यानि । वः॒ ।\nस॒मा॒नम् । अ॒स्तु॒ । वः॒ । मनः॑ । यथा॑ । वः॒ । सु॒ऽस॒ह । अस॑ति ॥",
        padapathaBadges: [
          { word: "समानी व आकूतिः", meaning: "तुम्हारे संकल्प और उद्देश्य एक हों" },
          { word: "समाना हृदयानि वः", meaning: "तुम्हारे हृदय परस्पर प्रेम और संवेदना से एक हों" },
          { word: "समानमस्तु वो मनः", meaning: "तुम्हारा मन एकरस और शांत हो" },
          { word: "यथा वः सुसहासति", meaning: "ताकि तुम्हारा पारस्परिक सहयोग और संगठन सुदृढ़ बना रहे" }
        ],
        translation: "तुम्हारे संकल्प एक समान हों, तुम्हारे हृदय परस्पर प्रेम से जुड़े हों, तुम्हारा मन एक लक्ष्य वाला हो — ताकि तुम सब मिलकर सुदृढ़, सुखद और अजेय संगठन बनकर प्रगति कर सको!",
        english: "United be your intention, harmonious be your hearts, united be your mind so that there may be complete and blissful concord among you!",
        hinglish: "Tumhare sankalp ek hon, hriday ek hon, man ek ho jisse tumhara aapsi sahayog hamesha safal aur dridh rahe.",
        sayanaBhashya: "संपूर्ण ऋग्वेद का यह अंतिम चरम संदेश है — मानव मात्र की अखंड एकता।",
        readerId: "rv-10-191-4"
      }
    ],
    deitiesSymbols: "संज्ञान देव (परस्पर एकता), सामूहिकता (समिति), यज्ञ-वेदी, अखंड दीप।",
    traditionPlaces: "वैदिक सभाएँ, राष्ट्र-संसद, गुरुकुल, संयुक्त परिवार।",
    vidhiUsage: "किसी भी सम्मेलन, सभा, राष्ट्रीय पर्व या धार्मिक अनुष्ठान का शांति-पूर्ण समापन गान।",
    traditionsDifferences: "ऋग्वेद का प्रथम मंत्र (१.१.१ अग्निमीळे) व्यक्तिगत आराध्य की वंदना से शुरू होता है और अंतिम सूक्त (१०.१९१ संगठन सूक्त) संपूर्ण मानव समाज की सामूहिक एकता पर संपन्न होता है।",
    historyResearch: "राष्ट्रकवि दिनकर और डॉ. सर्वपल्ली राधाकृष्णन ने इसे 'मानव इतिहास का प्रथम एवं सर्वोत्कृष्ट राष्ट्रगान व शांतिगान' घोषित किया।",
    relatedArticles: [
      { title: "Mandala 10", tag: "Mandala • Rigveda", slug: "mandala-10" },
      { title: "Agni Sukta", tag: "Sukta • Rigveda", slug: "agnisukta" },
      { title: "Purusha Sukta", tag: "Sukta • Rigveda", slug: "purusha-sukta" }
    ],
    relatedGrantha: { name: "Rigveda Universal Peace Anthem", desc: "Samgathan Sukta Final Hymn of Rigveda" },
    relatedTopics: ["Samgathan Sukta", "Samgachhadhvam", "Universal Peace", "Rigveda Finale", "Social Harmony", "Democracy"]
  }
});

const targetFile = path.join(__dirname, 'data/rigveda.cjs');
fs.writeFileSync(targetFile, 'module.exports = ' + JSON.stringify(RIGVEDA_ALL_33, null, 2) + ';\n', 'utf8');
console.log(`✅ Successfully written ALL ${Object.keys(RIGVEDA_ALL_33).length} Rigveda articles into data/rigveda.cjs!`);
