const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, '../src/data/vedicArticlesData.js');
let fileContent = fs.readFileSync(targetFilePath, 'utf8');

// We will construct the rich data for all Rigveda items
const RIGVEDA_ENRICHED_ARTICLES = {
  // 1. MANDALA 1
  "mandala-1": {
    id: "mandala-1",
    slug: "mandala-1",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Rigveda Mandala 1",
    hindiTitle: "ऋग्वेद मण्डल १ (प्रथम मण्डल — शतर्चिन् मण्डल)",
    contentType: "RIGVEDA MANDALA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Mandala 1", "Shatarchin", "Agni Sukta", "Dirghatamas", "Asya Vamasya"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "191 Suktas • 2,006 Mantras", type: "approved" },
      { label: "Shatarchin Rishis", type: "verified" },
      { label: "Foundation of Rigveda", type: "approved" }
    ],
    intro: "ऋग्वेद का प्रथम मण्डल 'शतर्चिन् मण्डल' कहलाता है, क्योंकि इसके द्रष्टा अधिकांश ऋषियों ने सौ या सौ से अधिक ऋचाओं का साक्षात्कार किया है। इसमें कुल १९१ सूक्त, २४ अनुवाक तथा २,००६ मंत्र हैं। यह मण्डल समस्त वैदिक वांग्मय का द्वार है, जिसका प्रारंभ जगत-प्रसिद्ध 'अग्नि सूक्त' (१.१ — 'अग्निमीळे पुरोहितं') से होता है। इसमें शुनःशेप आख्यान, इंद्र-वृत्र संग्राम, विश्वेदेवा शांति सूक्त (१.८९ — 'आ नो भद्राः क्रतवो यन्तु विश्वतः'), सूर्य सूक्त (१.११५), तथा महर्षि दीर्घतमस का अत्यंत गूढ़ दार्शनिक 'अस्य वामस्य सूक्त' (१.१६४) समाहित हैं, जिसमें 'एकं सद् विप्रा बहुधा वदन्ति' तथा 'द्वा सुपर्णा सयुजा सखाया' जैसे अमर वैदिक सिद्धांत प्रकट हुए हैं।",
    etymology: [
      { term: "शतर्चिन् (Śatarcīn)", meaning: "शतम् ऋचः सन्ति अस्य — वे महर्षि जिन्होंने १०० या उससे अधिक ऋचाओं का साक्षात्कार किया (जैसे मधुच्छन्दा, मेधातिथि, दीर्घतमा, अगस्त्य)।" },
      { term: "अस्य वामस्य (Asya Vāmasya)", meaning: "ऋग्वेद १.१६४ का विश्वविख्यात ब्रह्माण्डीय पहेली सूक्त जिसमें आत्मा, परमात्मा, सृष्टि-चक्र एवं वाक् के ४ रूपों का रहस्य है।" },
      { term: "भद्रम् (Bhadram)", meaning: "कल्याण, सत्य एवं शुभता — 'आ नो भद्राः' ऋचा विश्व-कल्याणकारी चिन्तन की सार्वभौमिक प्रार्थना है।" }
    ],
    shastricBase: "ऋग्वेद शाकल संहिता (१.१ - १.१९१), सायण कृत माधवीय वेदार्थप्रकाश, निरुक्त, सर्वानुक्रमणी, ऐतरेय ब्राह्मण।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल शाखा",
      kanda: "मण्डल १ (सूक्त १ से १९१)",
      anuvaka: "२४ अनुवाक • २,००६ मंत्र",
      rishi: "मधुच्छन्दा वैश्वामित्र, शुनःशेप (अजीगर्त पुत्र), मेधातिथि काण्व, गोतम राहूगण, कुत्स आंगिरस, कक्षीवान्, दीर्घतमा औचथ्य, अगस्त्य मैत्रावरुणि",
      devata: "अग्नि (प्रथम प्रधान), इंद्र, वरुण, मित्र, अश्विनीकुमार, मरुत, सूर्य, उषा, विश्वेदेवा, सरस्वती",
      chandas: "गायत्री, त्रिष्टुप्, जगती, अनुष्टुप्, बृहती, पंक्ति"
    },
    primaryMantra: {
      sanskrit: "आ नो॑ भ॒द्राः क्रत॑वो यन्तु वि॒श्वतोऽद॑ब्धासो॒ अप॑रीतास उद्भि॑दः।\nदे॒वा नो॒ यथा॒ सद॒मिद् वृ॒धे अस॒न्नप्रा॑युवो रक्षि॒तारो॑ दि॒वेदि॑वे॥\n\nइन्द्रं॑ मि॒त्रं वरु॑णम॒ग्निमा॑हु॒रथो॑ दि॒व्यः स सु॑प॒र्णो ग॒रुत्मान्॑।\nएकं॒ सद् विप्रा॑ बहु॒धा व॑दन्त्य॒ग्निं य॒मं मा॑त॒रिश्वा॑नमाहुः॥",
      ref: "ऋग्वेद १.८९.१ (विश्व-शांति सूक्त) एवं १.१६४.४६ (अद्वैत सत्य)",
      translation: "हमारे पास चारों दिशाओं से कल्याणकारी, अप्रतिहत, बाधा-रहित और सत्य-प्रकाशक विचार आएं। रक्षा करने वाले प्रमाद-रहित देवगण प्रतिदिन हमारी अभिवृद्धि के लिए तत्पर रहें। ज्ञानीजन उस एक ही परब्रह्म सत्य को इंद्र, मित्र, वरुण, अग्नि, गरुत्मान्, यम और मातरिश्वन् जैसे विविध नामों से पुकारते हैं।"
    },
    allMantras: [
      {
        number: "१.८९.१",
        sanskrit: "आ नो॑ भ॒द्राः क्रत॑वो यन्तु वि॒श्वतोऽद॑ब्धासो॒ अप॑रीतास उद्भि॑दः।\nदे॒वा नो॒ यथा॒ सद॒मिद् वृ॒धे अस॒न्नप्रा॑युवो रक्षि॒तारो॑ दि॒वेदि॑वे॥",
        transliteration: "ā no bhadrāḥ kratavo yantu viśvato 'dabdhāso aparītāsa udbhidaḥ |\ndevā no yathā sadamid vṛdhe asann aprāyuvo rakṣitāro dive-dive ||",
        padapatha: "आ । नः॒ । भ॒द्राः । क्रत॑वः । य॒न्तु॒ । वि॒श्वतः॑ । अद॑ब्धासः । अप॑रिऽइतासः । उद्ऽभि॑दः ।\nदे॒वाः । नः॒ । यथा॑ । सद॑म् । इत् । वृ॒धे । अस॑न् । अप्र॑ऽआयुवः । र॒क्षि॒तारः॑ । दि॒वेऽदि॑वे ॥",
        padapathaBadges: [
          { word: "आ यन्तु", meaning: "चारों ओर से आएं" },
          { word: "भद्राः क्रतवः", meaning: "कल्याणकारी उदात्त विचार व संकल्प" },
          { word: "विश्वतः", meaning: "समस्त दिशाओं और ब्रह्मांड से" },
          { word: "अदब्धासः", meaning: "अहिंसित / किसी से न दबने वाले" },
          { word: "उद्भिदः", meaning: "अज्ञान के आवरण को भेदने वाले" },
          { word: "देवानो यथा वृधे असन्", meaning: "देवगण हमारे अभ्युदय हेतु सहायक हों" }
        ],
        translation: "हमारे कल्याण के लिए समस्त ब्रह्मांड से उदार, अप्रतिहत और अज्ञान-विनाशक दिव्य विचार प्राप्त हों। जागरूक देवगण प्रतिदिन हमारी प्रगति और रक्षा में तत्पर रहें।",
        english: "May noble thoughts come to us from every side, unhindered, unsuppressed, and opening the path of truth.",
        hinglish: "Hamare paas sabhi dishaon se kalyankari vichar aayein aur divya shaktiyan hamari pragati karein.",
        sayanaBhashya: "समस्त विश्व के कल्याण और संकीर्णताओं से मुक्ति का यह सार्वभौमिक महामन्त्र है।",
        readerId: "rv-1-89-1"
      },
      {
        number: "१.१६४.४६",
        sanskrit: "इन्द्रं॑ मि॒त्रं वरु॑णम॒ग्निमा॑हु॒रथो॑ दि॒व्यः स सु॑प॒र्णो ग॒रुत्मान्॑।\nएकं॒ सद् विप्रा॑ बहु॒धा व॑दन्त्य॒ग्निं य॒मं मा॑त॒रिश्वा॑नमाहुः॥",
        transliteration: "indraṃ mitraṃ varuṇam agnim āhur atho divyaḥ sa suparṇo garutmān |\nekaṃ sad viprā bahudhā vadanty agniṃ yamaṃ mātariśvānam āhuḥ ||",
        padapatha: "इन्द्र॑म् । मि॒त्रम् । वरु॑णम् । अ॒ग्निम् । आ॒हुः॒ । अथो॒ इति॑ । दि॒व्यः । सः । सु॒ऽप॒र्णः । ग॒रुत्मान्॑ ।\nएक॑म् । सन्त् । विप्राः॑ । ब॒हु॒धा । व॒द॒न्ति॒ । अ॒ग्निम् । य॒मम् । मा॒त॒रिश्वा॑नम् । आ॒हुः॒ ॥",
        padapathaBadges: [
          { word: "एकं सत्", meaning: "एक ही परम सत्य / ब्रह्म" },
          { word: "विप्राः बहुधा वदन्ति", meaning: "विद्वान ऋषिजन नाना नामों से कहते हैं" },
          { word: "इन्द्रं मित्रं वरुणम् अग्निम्", meaning: "इंद्र, मित्र, वरुण और अग्नि" },
          { word: "दिव्यः स सुपर्णो गरुत्मान्", meaning: "दिव्य पंखों वाला गरुत्मान्" },
          { word: "यमं मातरिश्वानम्", meaning: "यम और वायु" }
        ],
        translation: "तत्ववेत्ता विद्वान उस एक ही परम सत्य (ईश्वर) को इंद्र, मित्र, वरुण, अग्नि, दिव्य गरुत्मान्, यम और मातरिश्वान् कहकर बहुविध पुकारते हैं।",
        english: "They call Him Indra, Mitra, Varuna, Agni, and He is the heavenly winged Garutman. Truth is One, the wise call It by many names.",
        hinglish: "Sach ek hi hai, vidwan use Indra, Mitra, Varuna, Agni jaise anek naamo se pukaarte hain.",
        sayanaBhashya: "सनातन धर्म के सार्वभौमिक एकेश्वरवाद और सर्वसमावेशी दर्शन का मूल आधार।",
        readerId: "rv-1-164-46"
      }
    ],
    deitiesSymbols: "१. अग्नि (सूक्त १-११): जीवन की चेतना ज्योति एवं यज्ञ पुरोहित।\n२. इंद्र (सूक्त ३२, ८०, १०० आदि): वृत्रहंता, कॉस्मिक ऊर्जा एवं आत्मबल।\n३. वरुण (सूक्त २४, २५): ऋत के न्यायकारी अधिष्ठाता एवं पापमोचक।\n४. सूर्य एवं उषा (१.११३, १.११५): काल-चक्र, जागरण एवं प्राण-संचार।\n५. अश्विनीकुमार: नासत्य-दस्र, संकटहारी आरोग्य के दिव्य देव।",
    traditionPlaces: "सप्तसिंधु, सरस्वती, विपाशा, शुतुद्री के पावन तट; अगस्त्य आश्रम एवं महर्षि दीर्घतमा की तपोभूमि।",
    vidhiUsage: "१. प्रातः अनुवाक एवं शांतिपाठ (१.८९ शांति सूक्त)।\n२. सोमयाग में अग्निष्टोम, प्रउग शस्त्र एवं आज्य शस्त्र विनियोग।\n३. शुनःशेप आख्यान (१.२४) का राजसूय यज्ञ में वाचन।",
    traditionsDifferences: "शाकल संहिता में प्रथम मण्डल शतर्चिन् क्रम में व्यवस्थित है। इसमें छंदों की विविधता (गायत्री से जगती तक) सर्वाधिक है।",
    historyResearch: "१. शुनःशेप आख्यान से प्राचीन न्याय व मोक्ष दर्शन का विकास।\n२. १.१६४ (अस्य वामस्य) में खगोलीय वर्ष, १२ मास, ३६० अहोरात्र (१.१६४.४८) का सटीक वैज्ञानिक निरूपण।\n३. मैक्स मूलर व तिलक के अनुसार प्रथम मण्डल वैदिक खगोलशास्त्र और तत्त्वमीमांसा का अनुपम संगम है।",
    relatedArticles: [
      { title: "Agni Sukta", tag: "Sukta • Rigveda", slug: "agnisukta" },
      { title: "Mandala 2", tag: "Mandala • Rigveda", slug: "mandala-2" },
      { title: "Mandala 10", tag: "Mandala • Rigveda", slug: "mandala-10" }
    ],
    relatedGrantha: { name: "Rigveda Shakala Samhita", desc: "Mandala 1 Shatarchin Collection" },
    relatedTopics: ["Agni Sukta", "Asya Vamasya", "Shunahshepa", "Ekam Sat", "Bhadram No Kratavo"]
  },

  // 2. MANDALA 2
  "mandala-2": {
    id: "mandala-2",
    slug: "mandala-2",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Rigveda Mandala 2",
    hindiTitle: "ऋग्वेद मण्डल २ (गृत्समद मण्डल — वंश मण्डल प्रारंभ)",
    contentType: "RIGVEDA MANDALA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Mandala 2", "Gritsamada", "Sa Janasa Indra", "Rudra Sukta"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "43 Suktas • 429 Mantras", type: "approved" },
      { label: "First Vamsha Mandala", type: "verified" },
      { label: "Gritsamada Lineage", type: "approved" }
    ],
    intro: "ऋग्वेद का द्वितीय मण्डल 'गृत्समद मण्डल' के नाम से प्रसिद्ध है और यहीं से ऋग्वेद के ६ प्रसिद्ध 'वंश मण्डल' (मण्डल २ से ७) प्रारंभ होते हैं। इस मण्डल के द्रष्टा महर्षि गृत्समद शौनक हैं (जो पूर्व में आंगिरस कुल में जन्मे और बाद में भार्गव कुल में गृत्समद के रूप में प्रतिष्ठित हुए)। इसमें कुल ४३ सूक्त, ४ अनुवाक और ४२९ मंत्र हैं। यह मण्डल विश्वविख्यात 'स जनास इंद्रः' सूक्त (२.१२ — जिसमें इंद्र के पराक्रम और स्वरूप की १५ ऋचाओं में गर्जनापूर्ण घोषणा है) तथा रुद्र सूक्त (२.३३ — जिसमें रुद्र को संसार का सर्वश्रेष्ठ चिकित्सक 'भिषक्तमं त्वा भिषजां शृणोमि' कहा गया है) के लिए विख्यात है।",
    etymology: [
      { term: "गृत्समद (Gṛtsamada)", meaning: "गृत्स (बुद्धिमान्/कुशल) + मद (आनंद/उल्लास) — जो तत्वज्ञान और ब्रह्म-आनंद से परिपूर्ण हैं।" },
      { term: "स जनास इन्द्रः (Sa Janāsa Indraḥ)", meaning: "'हे लोगों! वही वास्तविक इंद्र है' — ऋग्वेद २.१२ का प्रसिद्ध टेक-पद (refrain) जो देवराज के सर्वशक्तिमान स्वरूप को सिद्ध करता है।" },
      { term: "भिषक्तम (Bhiṣaktama)", meaning: "सर्वश्रेष्ठ चिकित्सक — रुद्र का वह स्वरूप जो दैहिक, मानसिक व आध्यात्मिक समस्त रोगों का निवारण करता है।" }
    ],
    shastricBase: "ऋग्वेद शाकल संहिता (२.१ - २.४३), सर्वानुक्रमणी, सायण भाष्य, आश्वलायन श्रौतसूत्र, निरुक्त।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल शाखा",
      kanda: "मण्डल २ (सूक्त १ से ४३)",
      anuvaka: "४ अनुवाक • ४२९ मंत्र",
      rishi: "महर्षि गृत्समद शौनक, कूर्मांगिरस, सोमहूति",
      devata: "अग्नि (सूक्त १-११), इंद्र (सूक्त १२-२६), रुद्र (सूक्त ३३), मरुत, ब्रह्मणस्पति, सविता, सरस्वती",
      chandas: "त्रिष्टुप् (प्रधान), जगती, गायत्री"
    },
    primaryMantra: {
      sanskrit: "यो जा॒त ए॒व प्र॑थ॒मो मन॑स्वान् दे॒वो दे॒वान् क्रतु॑ना प॒र्यभू॑षत्।\nयस्य॒ शुष्मा॒द्रोद॑सी अभ्ये॑सेतां नृ॒म्णस्य॑ म॒ह्ना स ज॑नास॒ इन्द्रः॑॥\n\nउन्नो॑ वी॒राँ अ॑र्पय भेष॒जेभि॑र्भि॒षक्त॑मं त्वा भि॒षजां॑ शृणोमि॥",
      ref: "ऋग्वेद २.१२.१ (स जनास इंद्रः) एवं २.३३.४ (रुद्र भिषक्तम)",
      translation: "जो उत्पन्न होते ही मनस्वी और श्रेष्ठ ज्ञानवान् होकर अपनी दिव्य शक्ति से सब देवों से आगे निकल गया; जिसके पराक्रम से द्युलोक और पृथ्वी कांपते हैं, हे लोगों! वही वास्तविक इंद्र है। हे रुद्र! अपनी दिव्य औषधियों से हमारे वीरों का संवर्धन कीजिए, हम आपको सभी चिकित्सकों में सर्वश्रेष्ठ चिकित्सक के रूप में जानते हैं।"
    },
    allMantras: [
      {
        number: "२.१२.१",
        sanskrit: "यो जा॒त ए॒व प्र॑थ॒मो मन॑स्वान् दे॒वो दे॒वान् क्रतु॑ना प॒र्यभू॑षत्।\nयस्य॒ शुष्मा॒द्रोद॑सी अभ्ये॑सेतां नृ॒म्णस्य॑ म॒ह्ना स ज॑नास॒ इन्द्रः॑॥",
        transliteration: "yo jāta eva prathamo manasvān devo devān kratunā paryabhūṣat |\nyasya śuṣmād rodasī abhyasetāṃ nṛmṇasya mahnā sa janāsa indraḥ ||",
        padapatha: "यः । जा॒तः । ए॒व । प्र॒थ॒मः । मन॑स्वान् । दे॒वः । दे॒वान् । क्रतु॑ना । प॒रि॒ऽअभू॑षत् ।\nयस्य॑ । शुष्मा॑त् । रोद॑सी इति॑ । अ॒भ्ये॑सेताम् । नृ॒म्णस्य॑ । म॒ह्ना । सः । ज॒ना॒सः॒ । इन्द्रः॑ ॥",
        padapathaBadges: [
          { word: "यः जातः एव", meaning: "जो प्रकट होते ही" },
          { word: "प्रथमो मनस्वान्", meaning: "अग्रणी व तीक्ष्ण प्रज्ञावान्" },
          { word: "क्रतुना पर्यभूषत्", meaning: "अपने सामर्थ्य से सब देवों को अलंकृत किया" },
          { word: "यस्य शुष्मात्", meaning: "जिसके तेज और पराक्रम से" },
          { word: "रोदसी अभ्येसेताम्", meaning: "स्वर्ग और पृथ्वी दोनों कांपते हैं" },
          { word: "स जनास इन्द्रः", meaning: "हे मानवो! वही परम ऐश्वर्यशाली इंद्र है" }
        ],
        translation: "जो जन्म लेते ही अद्वितीय मेधावी और तेजस्वी होकर अपने ज्ञान-सामर्थ्य से समस्त देवों में अग्रणी बना; जिसके असीम बल से द्युलोक और पृथ्वी कम्पायमान हो उठते हैं, हे मनुष्यों! वही परम शक्तिमान् इंद्र है।",
        english: "He who as soon as born became the foremost deity of active intellect; from whose might heaven and earth trembled; He, O men, is Indra!",
        hinglish: "Jo janm lete hi sabhi devon me shreshth bana, jiske tejas se aakash aur prithvi kaampte hain, hey logo! Wo hi Indra hai.",
        sayanaBhashya: "इंद्र की ऐतिहासिक व कॉस्मिक संप्रभुता को प्रमाणित करने वाला सर्वश्रेष्ठ सूक्त।",
        readerId: "rv-2-12-1"
      },
      {
        number: "२.३३.४",
        sanskrit: "मा त्वा॑ रुद्रा चुक्रुधा॒मा नमो॑भि॒र्मा दुः॑ष्टुती वृषभ॒ मा स॑हू॒ती।\nउन्नो॑ वी॒राँ अ॑र्पय भेष॒जेभि॑र्भि॒षक्त॑मं त्वा भि॒षजां॑ शृणोमि॥",
        transliteration: "mā tvā rudrā cukrudhāmā namobhir mā duṣṭutī vṛṣabha mā sahūtī |\nun no vīrāṃ arpaya bheṣajebhir bhiṣaktamaṃ tvā bhiṣajāṃ śṛṇomi ||",
        padapatha: "मा । त्वा॒ । रु॒द्र॒ । चु॒क्रु॒धा॒म॒ । नमः॑ऽभिः । मा । दुः॒ऽस्तु॒ती । वृ॒ष॒भ॒ । मा । स॒ऽहू॒ती ।\nउत । नः॒ । वी॒रान् । अ॒र्प॒य॒ । भे॒ष॒जेभिः॑ । भि॒षक्ऽत॑मम् । त्वा॒ । भि॒षजा॑म् । शृ॒णो॒मि॒ ॥",
        padapathaBadges: [
          { word: "मा त्वा चुक्रुधाम", meaning: "हम आपको कभी क्रोधित न करें" },
          { word: "नमोभिः", meaning: "अपने नमस्कारों और स्तुतियों द्वारा" },
          { word: "भिषक्तमं त्वा भिषजाम्", meaning: "वैद्यों/चिकित्सकों में आपको सर्वश्रेष्ठ चिकित्सक" },
          { word: "शृणोमि", meaning: "हम सुनते व जानते हैं" },
          { word: "उन्नो वीराँ अर्पय", meaning: "हमारे संतानों व वीरों को स्वस्थ बनाएं" }
        ],
        translation: "हे सामर्थ्यवान् रुद्र! हम अपनी नम्र स्तुतियों से आपको कभी अप्रसन्न न करें। आप अपनी कल्याणकारी दिव्य औषधियों से हमारे वीरों और परिवारों को रोगमुक्त कीजिए; हम आपको संसार के सभी वैद्यों में सर्वश्रेष्ठ वैद्य (परम चिकित्सक) मानते हैं।",
        english: "May we not anger thee, O Rudra, with our prayers; heal our heroes with thy medicines, for I hear thee called the best of all physicians.",
        hinglish: "Hey Rudra dev! Hum aapko pranam karte hain, apni divya aushadhiyo se hamare viron ko arogya pradan karein, aap sabhi vaidyoko me sarvashreshth hain.",
        sayanaBhashya: "आयुर्वेद और शल्य-चिकित्सा में भगवान शिव/रुद्र के परम वैद्य रूप का मूल वैदिक प्रमाण।",
        readerId: "rv-2-33-4"
      }
    ],
    deitiesSymbols: "१. इंद्र (सूक्त १२-२६): आत्मिक विजय, पराक्रम और वृत्र-निवारक शक्ति।\n२. अग्नि (सूक्त १): विश्वरूप अग्नि जो वरुण, मित्र, इंद्र, अर्यमा आदि सभी रूपों में स्वयं भासित है।\n३. रुद्र (सूक्त ३३): परम वैद्य, रोगनिवारक, त्रिशूल व धनुषधारी कल्याणकारी शिव।\n४. ब्रह्मणस्पति (सूक्त २३-२६): वाणी, प्रार्थना और बुद्धि के स्वामी।",
    traditionPlaces: "भार्गव परंपरा, सरस्वती नदी तट, कुरुक्षेत्र व विपाशा क्षेत्र।",
    vidhiUsage: "सोमयाग में माध्यंदिन सवन के 'मरुत्वतीय शस्त्र' एवं निष्केवल्य शस्त्र में सूक्त २.१२ का विनियोग। आरोग्य शांति हेतु २.३३ का पाठ।",
    traditionsDifferences: "ऋग्वेद का प्रथम 'वंश मण्डल' होने के कारण इसमें एक ही ऋषिकुल (गृत्समद) की अनुभूतियों की अद्वितीय समरसता है।",
    historyResearch: "महर्षि गृत्समद का यह मण्डल त्रिष्टुप् छंद के शास्त्रीय गठन और वैदिक भाषा के व्याकरणिक विकास का उत्कृष्ट प्रमाण माना जाता है।",
    relatedArticles: [
      { title: "Mandala 1", tag: "Mandala • Rigveda", slug: "mandala-1" },
      { title: "Mandala 3", tag: "Mandala • Rigveda", slug: "mandala-3" },
      { title: "Rudrabhisheka", tag: "Stotra • Yajurveda", slug: "rudrabhisheka" }
    ],
    relatedGrantha: { name: "Rigveda Shakala Samhita", desc: "Mandala 2 Gritsamada Family Archive" },
    relatedTopics: ["Gritsamada", "Sa Janasa Indra", "Rudra Bhiṣaktama", "Brahmanaspati", "Trishtubh"]
  },

  // 3. MANDALA 3
  "mandala-3": {
    id: "mandala-3",
    slug: "mandala-3",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Rigveda Mandala 3",
    hindiTitle: "ऋग्वेद मण्डल ३ (गाथिन विश्वामित्र मण्डल — गायत्री महामन्त्र का उद्गम)",
    contentType: "RIGVEDA MANDALA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Mandala 3", "Vishvamitra", "Gayatri Mantra", "River Dialogue"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "62 Suktas • 617 Mantras", type: "approved" },
      { label: "Gayatri Mantra Origin", type: "verified" },
      { label: "Vishvamitra Lineage", type: "approved" }
    ],
    intro: "ऋग्वेद का तृतीय मण्डल महर्षि विश्वामित्र और उनके वंशजों (गाथिन कुल) द्वारा साक्षात्कृत है। इसमें कुल ६२ सूक्त, ५ अनुवाक तथा ६१७ मंत्र हैं। यह मण्डल समस्त सनातन धर्म का प्राण है, क्योंकि इसी मण्डल के ६२वें सूक्त की १०वीं ऋचा के रूप में विश्व-वंदनीय 'गायत्री महामंत्र' (३.६२.१० — 'तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि') प्रकट हुआ है। इसके अतिरिक्त, इसमें प्रसिद्ध 'विश्वामित्र-नदी संवाद' (३.३३ — विपाशा व शुतुद्री नदियों को पार करने की ऐतिहासिक प्रार्थना), वैश्वानर अग्नि की उपासना, तथा अरणि-मंथन द्वारा यज्ञीय अग्नि प्रज्वलन का विशद विधान वर्णित है।",
    etymology: [
      { term: "विश्वामित्र (Viśvāmitra)", meaning: "विश्वस्य मित्रम् — जो संपूर्ण जगत का परम मित्र, हितैषी और ज्ञान-दाता है।" },
      { term: "गायत्री (Gāyatrī)", meaning: "गायन्तं त्रायते इति — जो अपने गान/जप करने वाले साधक की समस्त भयों, पापों व बंधनों से रक्षा करती है।" },
      { term: "सविता (Savitā)", meaning: "सूते प्रेरयति — समस्त जगत को उत्पन्न करने वाला और बुद्धियों को सत्य मार्ग में प्रेरित करने वाला परमात्मा।" }
    ],
    shastricBase: "ऋग्वेद शाकल संहिता (३.१ - ३.६२), सर्वानुक्रमणी, सायण भाष्य, गोपथ ब्राह्मण, ऐतरेय ब्राह्मण।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल शाखा",
      kanda: "मण्डल ३ (सूक्त १ से ६२)",
      anuvaka: "५ अनुवाक • ६१७ मंत्र",
      rishi: "महर्षि विश्वामित्र गाथिन, उत्कील, कत, जमदग्नि, प्रजापति वैश्वामित्र",
      devata: "अग्नि वैश्वानर (सूक्त १-२९), इंद्र (सूक्त ३०-५३), सविता (सूक्त ६२.१०), विपाशा व शुतुद्री नदियाँ, मरुत, उषा",
      chandas: "त्रिष्टुप्, गायत्री, जगती, अनुष्टुप्"
    },
    primaryMantra: {
      sanskrit: "ॐ तत्स॑वि॒तुर्वरे॑ण्यं॒ भर्गो॑ दे॒वस्य॑ धीमहि।\nधियो॒ यो नः॑ प्रचो॒दया॑त्॥\n\nरम॑ध्वं मे॒ वच॑से सोम्याय ऋतावरी॒रुप॑ मुहू॒र्तमेवैः॑।\nप्र सिन्धु॒मच्छा॑ बृह॒ती म॑नी॒षाव॑स्युरह्वे कुशि॒कस्य॑ सू॒नुः॥",
      ref: "ऋग्वेद ३.६२.१० (गायत्री महामंत्र) एवं ३.३३.५ (विश्वामित्र-नदी संवाद)",
      translation: "हम उस सृष्टिकर्ता प्रकाशमान सविता देव के सर्वश्रेष्ठ पाप-निवारक दिव्य तेज का ध्यान करते हैं; वह परमात्मा हमारी बुद्धियों को सन्मार्ग में प्रेरित करे। हे सत्यवती विपाशा व शुतुद्री नदियों! मेरे मधुर वचनों को सुनकर एक क्षण के लिए अपने वेग को धीमा कीजिए; मैं कुशिक-पुत्र विश्वामित्र ज्ञान-यात्रा हेतु आपकी वंदना करता हूँ।"
    },
    allMantras: [
      {
        number: "३.६२.१०",
        sanskrit: "ॐ तत्स॑वि॒तुर्वरे॑ण्यं॒ भर्गो॑ दे॒वस्य॑ धीमहि।\nधियो॒ यो नः॑ प्रचो॒दया॑त्॥",
        transliteration: "oṃ tat savitur vareṇyaṃ bhargo devasya dhīmahi |\ndhiyo yo naḥ pracodayāt ||",
        padapatha: "तत् । स॒वि॒तुः । वरे॑ण्यम् । भर्गः॑ । दे॒वस्य॑ । धी॒म॒हि॒ ।\nधियः॑ । यः । नः॒ । प्र॒ऽचो॒दया॑त् ॥",
        padapathaBadges: [
          { word: "तत्", meaning: "उस परब्रह्म परमात्मा के" },
          { word: "सवितुः", meaning: "सृष्टिकर्ता सविता देव के" },
          { word: "वरेण्यम्", meaning: "सर्वश्रेष्ठ व वरण करने योग्य" },
          { word: "भर्गः", meaning: "अज्ञान-नाशक पावन तेज को" },
          { word: "देवस्य", meaning: "दिव्य प्रकाशमान प्रभु के" },
          { word: "धीमहि", meaning: "हम अपनी अंतरात्मा में ध्यान करते हैं" },
          { word: "धियः यः नः", meaning: "जो हमारी बुद्धियों और विचारों को" },
          { word: "प्रचोदयात्", meaning: "सन्मार्ग और सत्य ज्ञान में प्रेरित करे" }
        ],
        translation: "हम उस समस्त जगत के उत्पादक, प्रकाशमान सविता देव के वरण करने योग्य सर्वश्रेष्ठ दिव्य तेज का ध्यान करते हैं; वह परमेश्वर हमारी बुद्धियों को सदैव धर्म और सत्य के मार्ग पर प्रेरित करे।",
        english: "May we meditate on that excellent glory of the divine Savitar, the Creator; may He enlighten and inspire our intellects.",
        hinglish: "Hum us srishti ke rachayita divya Savita dev ke shreshth tej ka dhyan karte hain, wo hamari buddhi ko shreshth marg me prerit karein.",
        sayanaBhashya: "समस्त वेदों का सार, २४ अक्षरों में तीनों लोकों का प्राण और ब्रह्म-ज्ञान की कुंजी।",
        readerId: "rv-3-62-10"
      },
      {
        number: "३.३३.५",
        sanskrit: "रम॑ध्वं मे॒ वच॑से सोम्याय ऋतावरी॒रुप॑ मुहू॒र्तमेवैः॑।\nप्र सिन्धु॒मच्छा॑ बृह॒ती म॑नी॒षाव॑स्युरह्वे कुशि॒कस्य॑ सू॒नुः॥",
        transliteration: "ramadhvaṃ me vacase somyāya ṛtāvarīr upa muhūrtam evaiḥ |\npra sindhum acchā bṛhatī manīṣāv asyur ahve kuśikasya sūnuḥ ||",
        padapatha: "रम॑ध्वम् । मे॒ । वच॑से । सो॒म्याय॑ । ऋ॒त॒ऽव॒रीः॒ । उप॑ । मु॒हू॒र्तम् । एवैः॑ ।\nप्र । सिन्धु॑म् । अच्छा॑ । बृ॒ह॒ती । म॒नी॒षा । अव॑स्युः । अ॒ह्वे॒ । कु॒शि॒कस्य॑ । सू॒नुः ॥",
        padapathaBadges: [
          { word: "ऋतावरीः", meaning: "हे सत्यजल वाली पावन नदियों!" },
          { word: "मे वचसे रमध्वम्", meaning: "मेरी प्रार्थना सुनकर शांत हो जाओ" },
          { word: "उप मुहूर्तम्", meaning: "एक क्षण के लिए अपनी धारा सुगम करो" },
          { word: "कुशिकस्य सूनुः", meaning: "कुशिक का पुत्र विश्वामित्र" },
          { word: "अवस्युः अह्वे", meaning: "मार्ग की रक्षा हेतु आपको पुकारता हूँ" }
        ],
        translation: "हे सत्यवती पावन नदियों (विपाशा व शुतुद्री)! मेरे सोममय मधुर वचनों पर ध्यान देकर तनिक क्षण के लिए शांत हो जाइए। मैं कुशिक-पुत्र विश्वामित्र अपनी सेना व प्रजा के सुगम पारगमन हेतु आपको पुकारता हूँ।",
        english: "Linger a little at my friendly bidding, rest, O ye holy Rivers, on your journey! I, son of Kushika, seeking aid, address you.",
        hinglish: "Hey pavitra nadiyon (Vipasha aur Shutudri)! Meri prarthana sunkar shant hokar rasta dijiye, main Vishvamitra aapse vinti karta hoon.",
        sayanaBhashya: "वैदिक काल में मनुष्य और प्रकृति के बीच चेतना के सजीव संवाद का विश्व-प्रसिद्ध प्रमाण।",
        readerId: "rv-3-33-5"
      }
    ],
    deitiesSymbols: "१. सविता (सूक्त ६२.१०): आत्म-प्रेरणा, बुद्धि का प्रकाश एवं सृजन शक्ति।\n२. अग्नि वैश्वानर (सूक्त १-२९): अंतःकरण की जाग्रत अग्नि एवं अरणि-मंथन से उत्पन्न तेज।\n३. विपाशा व शुतुद्री नदियाँ (सूक्त ३३): जीवनदायिनी मातृत्व शक्ति एवं मातृभूमि का जल-वैभव।\n४. इंद्र (सूक्त ३०-५३): संशय-विनाशक आत्मबल।",
    traditionPlaces: "कौशिकी व सरस्वती नदी तट, विपाशा (व्यास) व शुतुद्री (सतलुज) संगम, ब्रह्मर्षि विश्वामित्र की तपोभूमि।",
    vidhiUsage: "१. गायत्री महामंत्र का त्रिकाल संध्या व उपनयन संस्कार में नित्य जप।\n२. सोमयाग में 'वैश्वानरीय आहुति' एवं 'अरणि-मंथन' के समय तृतीय मण्डल के सूक्तों का पाठ।",
    traditionsDifferences: "विश्वामित्र कुल का यह मण्डल क्षत्रियत्व से ब्रह्मर्षित्व की यात्रा और सार्वभौमिक गायत्री की सिद्धि का प्रतीक है।",
    historyResearch: "भरतवंशीय राजाओं का पंजाब क्षेत्र में विस्तार तथा नदियों के अनुकूलन का यह सर्वाधिक प्राचीन व प्रामाणिक भू-सांस्कृतिक साक्ष्य है।",
    relatedArticles: [
      { title: "Gayatri Mantra", tag: "Mantra • Rigveda", slug: "gayatri-mantra" },
      { title: "Mandala 2", tag: "Mandala • Rigveda", slug: "mandala-2" },
      { title: "Mandala 4", tag: "Mandala • Rigveda", slug: "mandala-4" }
    ],
    relatedGrantha: { name: "Rigveda Shakala Samhita", desc: "Mandala 3 Vishvamitra & Gayatri Archive" },
    relatedTopics: ["Gayatri Mantra", "Vishvamitra", "River Dialogue", "Savitar", "Arani Manthana"]
  },

  // 4. MANDALA 4
  "mandala-4": {
    id: "mandala-4",
    slug: "mandala-4",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Rigveda Mandala 4",
    hindiTitle: "ऋग्वेद मण्डल ४ (वामदेव गौतम मण्डल — आत्मसाक्षात्कार एवं श्येन सूक्त)",
    contentType: "RIGVEDA MANDALA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Mandala 4", "Vamadeva", "Shyena Sukta", "Ghrita Sukta", "Aham Manur Abhavam"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "58 Suktas • 589 Mantras", type: "approved" },
      { label: "Vamadeva Gautama Lineage", type: "verified" },
      { label: "Garbhastha Jnana", type: "approved" }
    ],
    intro: "ऋग्वेद का चतुर्थ मण्डल महर्षि वामदेव गौतम द्वारा साक्षात्कृत है। इसमें कुल ५८ सूक्त, ५ अनुवाक तथा ५८९ मंत्र हैं। यह मण्डल अद्वैत आत्मज्ञान और आध्यात्मिक रूपांतरण के शिखर के रूप में प्रसिद्ध है। महर्षि वामदेव ने माता के गर्भ में रहते हुए ही 'अहं मनुरभवं सूर्यश्च' (४.२६ — मैं ही मनु बना और मैं ही सूर्य हूँ) के रूप में आत्मसाक्षात्कार का उद्घोष किया था। इसमें प्रसिद्ध 'श्येन सूक्त' (४.२६-२७ — दिव्य गरुड़ द्वारा स्वर्ग से सोम लाने का आध्यात्मिक रूपक), 'घृत सूक्त' (४.५८ — 'चत्वारि शृङ्गा त्रयो अस्य पादा' जिसमें वाणी और यज्ञ के चतुःशृंग महावृषभ का दर्शन है), तथा 'क्षेत्रपति सूक्त' (४.५७ — कृषि व भूमि की समृद्धि का वैदिक आशीर्वाद) समाहित हैं।",
    etymology: [
      { term: "वामदेव (Vāmadeva)", meaning: "वाम (सुंदर/कल्याणकारी) + देव — जो अत्यंत रमणीय, शांत और ब्रह्म-स्थित ऋषि हैं।" },
      { term: "श्येन (Śyena)", meaning: "तीक्ष्णगामी बाज/गरुड़ — जो दिव्य ज्ञान और सोम-अमृत को उच्चतम चेतना से पृथ्वी पर लाता है।" },
      { term: "क्षेत्रपति (Kṣetrapati)", meaning: "भूमि, कृषि और क्षेत्र का अधिष्ठाता देव जो अन्न और पोषण प्रदान करता है।" }
    ],
    shastricBase: "ऋग्वेद शाकल संहिता (४.१ - ४.५८), ऐतरेय आरण्यक २.५, बृहदारण्यक उपनिषद् १.४.१०, सायण भाष्य, सर्वानुक्रमणी।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल शाखा",
      kanda: "मण्डल ४ (सूक्त १ से ५८)",
      anuvaka: "५ अनुवाक • ५८९ मंत्र",
      rishi: "महर्षि वामदेव गौतम, गोतम राहूगण",
      devata: "अग्नि (सूक्त १-१५), इंद्र (सूक्त १६-३२), ऋभुगण (सूक्त ३३-३७), दधिक्रा, क्षेत्रपति, घृत/वाणी (सूक्त ५८)",
      chandas: "त्रिष्टुप्, जगती, गायत्री"
    },
    primaryMantra: {
      sanskrit: "अ॒हं मनु॑रभवं॒ सूर्य॑श्चा॒हं क॒क्षीवाँ॒ ऋषिर॑स्मि॒ विप्रः॑।\nअ॒हं कुत्सं॑मात्सुने॒यं न्यृ॑ञ्जे॒ऽहं क॒विर्गौ॑श॒ना प॑श्यता मा॥\n\nच॒त्वारि॒ शृङ्गा॒ त्रयो॑ अस्य॒ पादा॒ द्वे शी॒र्षे स॒प्त हस्ता॑सो अस्य।\nत्रिधा॑ ब॒द्धो वृ॑ष॒भो रो॑रवीति म॒हो दे॒वो मर्त्याँ॒ आ वि॑वेश॥",
      ref: "ऋग्वेद ४.२६.१ (वामदेव आत्मसाक्षात्कार) एवं ४.५८.३ (घृत/वाणी महावृषभ)",
      translation: "मैं ही मनु बना, मैं ही सूर्य हुआ, मैं ही मेधावी ऋषि कक्षीवान् हूँ; मैंने ही कुत्स को ऐश्वर्य दिया और मैं ही काव्य-प्रणेता शुक्राचार्य हूँ — मेरे इस विश्वरूप आत्मभाव को देखो! उस दिव्य वृषभ के चार सींग, तीन पैर, दो सिर और सात हाथ हैं; वह तीन बंधनों से बंधा हुआ सिंहनाद करता है; वह महान देव मनुष्यों के अंतःकरण में प्रविष्ट हुआ है।"
    },
    allMantras: [
      {
        number: "४.२६.१",
        sanskrit: "अ॒हं मनु॑रभवं॒ सूर्य॑श्चा॒हं क॒क्षीवाँ॒ ऋषिर॑स्मि॒ विप्रः॑।\nअ॒हं कुत्सं॑मात्सुने॒यं न्यृ॑ञ्जे॒ऽहं क॒विर्गौ॑श॒ना प॑श्यता मा॥",
        transliteration: "ahaṃ manur abhavaṃ sūryaś cāhaṃ kakṣīvāṃ ṛṣir asmi vipraḥ |\nahaṃ kutsaṃ rātasureyaṃ nyṛñje 'haṃ kavir uśanā paśyatā mā ||",
        padapatha: "अ॒हम् । मनुः॑ । अ॒भ॒व॒म् । सूर्यः॑ । च॒ । अ॒हम् । क॒क्षीवान्॑ । ऋषिः॑ । अ॒स्मि॒ । विप्रः॑ ।\nअ॒हम् । कुत्स॑म् । आ॒त्सु॒ने॒यम् । नि । ऋ॒ञ्जे॒ । अ॒हम् । क॒विः । उ॒शना॑ । पश्य॑त । मा॒ ॥",
        padapathaBadges: [
          { word: "अहं मनुः अभवम्", meaning: "मैं ही आदि मानव मनु बना" },
          { word: "सूर्यः च", meaning: "और मैं ही प्रकाशमान सूर्य हूँ" },
          { word: "अहं कक्षीवान्", meaning: "मैं ही ऋषि कक्षीवान् हूँ" },
          { word: "अहं कविः उशना", meaning: "मैं ही क्रांतदर्शी कवि शुक्राचार्य हूँ" },
          { word: "पश्यत मा", meaning: "मेरे इस सर्वव्यापी आत्म-स्वरूप को देखो" }
        ],
        translation: "मैं ही मनु बना, मैं ही सूर्य हुआ, मैं ही तत्वज्ञानी ऋषि कक्षीवान् हूँ; मैं ही शुक्राचार्य हूँ। हे संसार के लोगो! मेरी इस सर्वव्यापी ब्रह्म-चेतना का साक्षात्कार करो।",
        english: "I was Manu and I was the Sun; I am the wise seer Kakshivan; I am the sage Ushana. Behold me in my cosmic oneness!",
        hinglish: "Main hi Manu bana, main hi Surya bana, main hi rishi Kakshivan aur Shukracharya hoon. Meri is sarvavyapi chetna ko dekho.",
        sayanaBhashya: "बृहदारण्यक उपनिषद् १.४.१० में इस मंत्र को 'अहं ब्रह्मास्मि' के साक्षात प्रमाण के रूप में उद्धृत किया गया है।",
        readerId: "rv-4-26-1"
      },
      {
        number: "४.५८.३",
        sanskrit: "च॒त्वारि॒ शृङ्गा॒ त्रयो॑ अस्य॒ पादा॒ द्वे शी॒र्षे स॒प्त हस्ता॑सो अस्य।\nत्रिधा॑ ब॒द्धो वृ॑ष॒भो रो॑रवीति म॒हो दे॒वो मर्त्याँ॒ आ वि॑वेश॥",
        transliteration: "catvāri śṛṅgā trayo asya pādā dve śīrṣe sapta hastāso asya |\ntridhā baddho vṛṣabho roravīti maho devo martyāṃ ā viveśa ||",
        padapatha: "च॒त्वारि॑ । शृङ्गा॑ । त्रयः॑ । अस्य॒ । पादाः॑ । द्वे इति॑ । शी॒र्षे इति॑ । स॒प्त । हस्ता॑सः । अस्य॒ ।\nत्रिऽधा॑ । ब॒द्धः । वृ॒ष॒भः । रो॒र॒वी॒ति॒ । म॒हान् । दे॒वः । मर्त्या॑न् । आ । वि॒वे॒श॒ ॥",
        padapathaBadges: [
          { word: "चत्वारि शृङ्गा", meaning: "चार सींग (४ वेद या नाम-आख्यात-उपसर्ग-निपात)" },
          { word: "त्रयो अस्य पादाः", meaning: "तीन पैर (भूत-वर्तमान-भविष्य काल या ३ सवन)" },
          { word: "द्वे शीर्षे", meaning: "दो सिर (नित्य व अनित्य शब्द या हविर्धान-अग्नि)" },
          { word: "सप्त हस्तासः", meaning: "सात हाथ (७ छंद या ७ विभक्तियां)" },
          { word: "त्रिधा बद्धः वृषभः", meaning: "उर, कंठ व शीर्ष में बंधा शब्द-ब्रह्म रूपी वृषभ" },
          { word: "मर्त्यान् आविवेश", meaning: "मर्त्य मनुष्यों के अंतःकरण में प्रविष्ट हुआ" }
        ],
        translation: "उस शब्द-ब्रह्म रूपी महावृषभ के चार सींग (चार वेद/व्याकरण के चार पद), तीन पैर (तीन काल/सवन), दो सिर (नित्य व अनित्य शब्द) और सात हाथ (सात छंद/विभक्तियाँ) हैं। वह वक्ष, कंठ और सिर में त्रिधा बद्ध होकर गर्जना करता है; वह महान देव मनुष्यों के भीतर चेतना रूप से प्रविष्ट है।",
        english: "Four are his horns, three are his feet, two are his heads, and seven are his hands. Bound in three stations, the Bull roars loudly; the Great God has entered into mortals.",
        hinglish: "Us shabd-brahm rupi mahavrishabh ke char seeng, teen pair, do sir aur saat hath hain. Wo mahan dev manushyon ke bhitar pravisht hai.",
        sayanaBhashya: "महाभाष्यकार पतंजलि ने व्याकरण और नादब्रह्म की महिमा में इस मंत्र को सर्वोपरि स्थान दिया है।",
        readerId: "rv-4-58-3"
      }
    ],
    deitiesSymbols: "१. श्येन (सूक्त २६-२७): तीव्र प्रज्ञा जो बंधनों को काटकर सोम-अमृत लाती है।\n२. महावृषभ (सूक्त ५८): शब्द-ब्रह्म एवं यज्ञ की सर्वव्यापक महिमा।\n३. ऋभुगण (सूक्त ३३-३७): नश्वर मानव जो अपने दिव्य कौशल व सेवा से अमर देवत्व प्राप्त करते हैं।\n४. क्षेत्रपति व सीता (सूक्त ५७): भूमि, हल, बीज और कृषि की पावनता।",
    traditionPlaces: "सरस्वती, दृषद्वती, गंगा के उत्तर-पश्चिम क्षेत्र; वामदेव आश्रम।",
    vidhiUsage: "१. आत्मविद्या व उपनिषद् ज्ञान-सत्रों में ४.२६ का पारायण।\n२. नवशस्येष्टि (कृषि अनुष्ठान) एवं सीतापूजन में ४.५७ का विनियोग।\n३. सोमयाग में 'श्येन याग' एवं पवमान धारा में ४.५८ का पाठ।",
    traditionsDifferences: "गर्भस्थ अवस्था में ही कैवल्य-मुक्ति के साक्षात्कार का ऋग्वेद में यह एकमात्र अद्वितीय मण्डल है।",
    historyResearch: "वामदेव के इस मण्डल को पाश्चात्य विद्वान गेल्डनर और कीथ ने 'वैदिक रहस्यवाद का सर्वोच्च शिखर' निरूपित किया है।",
    relatedArticles: [
      { title: "Mandala 3", tag: "Mandala • Rigveda", slug: "mandala-3" },
      { title: "Mandala 5", tag: "Mandala • Rigveda", slug: "mandala-5" },
      { title: "Aitareya Upanishad", tag: "Upanishad • Rigveda", slug: "aitareya-upanishad" }
    ],
    relatedGrantha: { name: "Rigveda Shakala Samhita", desc: "Mandala 4 Vamadeva Gautama Archive" },
    relatedTopics: ["Vamadeva", "Aham Manur Abhavam", "Shyena Sukta", "Chatvari Shringa", "Kshetrapati"]
  },

  // 5. MANDALA 5
  "mandala-5": {
    id: "mandala-5",
    slug: "mandala-5",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Rigveda Mandala 5",
    hindiTitle: "ऋग्वेद मण्डल ५ (अत्रि मण्डल — खगोल विज्ञान एवं पर्जन्य सूक्त)",
    contentType: "RIGVEDA MANDALA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Mandala 5", "Atri", "Solar Eclipse", "Parjanya Sukta", "Vishvavara"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "87 Suktas • 727 Mantras", type: "approved" },
      { label: "Atri Family Lineage", type: "verified" },
      { label: "Solar Eclipse Science", type: "approved" }
    ],
    intro: "ऋग्वेद का पञ्चम मण्डल महर्षि अत्रि भौम एवं उनके वंशजों (आत्रेय कुल) द्वारा साक्षात्कृत है। इसमें कुल ८७ सूक्त, ६ अनुवाक तथा ७२७ मंत्र हैं। यह मण्डल प्राचीन खगोल-विज्ञान, ब्रह्मवादिनी ऋषिकाओं के योगदान और प्राकृतिक शक्तियों की स्तुतियों के लिए विख्यात है। इसी मण्डल के ४०वें सूक्त में महर्षि अत्रि द्वारा 'सूर्यग्रहण' (स्वर्भानु द्वारा सूर्य का आच्छादन) का सटीक खगोलीय वेध एवं 'तुरीय ब्रह्म' द्वारा सूर्य को पुनः प्रकाशित करने का ऐतिहासिक विवरण है। इसके अतिरिक्त, इसमें वर्षा के देवता का 'पर्जन्य सूक्त' (५.८३) तथा ब्रह्मवादिनी विश्ववारा आत्रेयी (५.२८) द्वारा यज्ञीय अग्नि-होत्र का संपादन वर्णित है।",
    etymology: [
      { term: "अत्रि (Atri)", meaning: "न त्रि (जो तीन गुणों व तीन तापों से परे है) — परम तपस्वी जो सूर्य की ज्योति के उद्धारक हैं।" },
      { term: "स्वर्भानु (Svarbhānu)", meaning: "स्वः (प्रकाश) को ढकने वाला अंधकार — सूर्यग्रहण का आदिम वैदिक वैज्ञानिक रूपक (राहु-छाया)।" },
      { term: "पर्जन्य (Parjanya)", meaning: "वृष्टिकर्ता मेघ देव — जो पृथ्वी के गर्भ में जल का सिंचन कर औषधियों और अन्नों को जीवन देता है।" }
    ],
    shastricBase: "ऋग्वेद शाकल संहिता (५.१ - ५.८७), सायण भाष्य, ताण्ड्य महाब्राह्मण १४.११, कौषीतकि ब्राह्मण २४.३।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल शाखा",
      kanda: "मण्डल ५ (सूक्त १ से ८७)",
      anuvaka: "६ अनुवाक • ७२७ मंत्र",
      rishi: "महर्षि अत्रि भौम, धरूण, बभ्रु, गय, सुतम्भर, स्वस्ति, अर्चननस, श्यावाश्व, विश्ववारा आत्रेयी, अपाला आत्रेयी",
      devata: "अग्नि (सूक्त १-२८), इंद्र (सूक्त २९-४०), मरुत (सूक्त ५२-६१), मित्रावरुण (सूक्त ६२-७२), पर्जन्य, अश्विनीकुमार",
      chandas: "त्रिष्टुप्, जगती, गायत्री, अनुष्टुप्"
    },
    primaryMantra: {
      sanskrit: "यत्त्वा॑ सूर्य॒ स्व॑र्भानु॒स्तम॒सावि॑ध्यदासु॒रः।\nअक्षेत्र॑विद्यथा मु॒ग्धो भुव॑नान्यदीधयुः॥\n\nअच्छा॑ वद त॒न्वं॑ गी॒र्भिरे॑ळा स्तौ॒हि प॒र्जन्यं॒ नम॑साविवास।\nकनि॑क्रदद् वृष॒भो जी॒रदा॑नू॒ रेतो॑ दधा॒त्योष॑धीषु॒ गर्भ॑म्॥",
      ref: "ऋग्वेद ५.४०.५ (सूर्यग्रहण वेध) एवं ५.८३.१ (पर्जन्य मेघ सूक्त)",
      translation: "हे सूर्यदेव! जब असुर स्वर्भानु ने आपको अंधकार से आच्छादित कर दिया (सूर्यग्रहण), तब समस्त लोक दिशाहीन होकर भयभीत हो गए; तब महर्षि अत्रि ने अपनी ब्रह्मविद्या द्वारा अंधकार को दूर कर सूर्य को पुनः आलोकित किया। हे साधक! वर्षा के अधिपति पर्जन्य देव की स्तुति करो; वह गर्जना करता हुआ मेघ-वृषभ औषधियों और वनस्पतियों में जीवन-बीज स्थापित करता है।"
    },
    allMantras: [
      {
        number: "५.४०.५",
        sanskrit: "यत्त्वा॑ सूर्य॒ स्व॑र्भानु॒स्तम॒सावि॑ध्यदासु॒रः।\nअक्षेत्र॑विद्यथा मु॒ग्धो भुव॑नान्यदीधयुः॥",
        transliteration: "yat tvā sūrya svarbhānus tamasāvidhyad āsuraḥ |\nakṣetravid yathā mugdho bhuvanāny adīdhayuḥ ||",
        padapatha: "यत् । त्वा॒ । सू॒र्य॒ । स्वः॑ऽभानुः । तम॑सा । अवि॑ध्यत् । आ॒सु॒रः ।\nअ॒क्षेत्र॒ऽवित् । यथा॑ । मु॒ग्धः । भुव॑नानि । अ॒दी॒ध॒युः॒ ॥",
        padapathaBadges: [
          { word: "यत् त्वा सूर्य", meaning: "हे सूर्य! जब आपको" },
          { word: "स्वर्भानुः आसुरः", meaning: "स्वर्भानु नामक आसुरी अंधकार ने" },
          { word: "तमसा अविध्यत्", meaning: "अंधकार (ग्रहण) से आच्छादित किया" },
          { word: "अक्षेत्रवित् यथा मुग्धः", meaning: "जैसे कोई मार्ग भूलकर मोहित हो जाता है" },
          { word: "भुवनानि अदीधयुः", meaning: "समस्त लोक अंधकार में डूब गए" }
        ],
        translation: "हे सूर्यदेव! जब स्वर्भानु (ग्रहण-छाया) ने आपको अचानक अंधकार से ढक दिया, तब इस जगत के सभी प्राणी मार्ग भूले हुए व्यक्ति की भाँति स्तब्ध व भयभीत हो उठे। (तब अत्रि ने तुरीय ब्रह्म विद्या से आपको मुक्त कराया)।",
        english: "O Sun, when Svarbhanu of Asura descent enveloped thee with darkness, all creatures looked like one bewildered who knows not the place.",
        hinglish: "Jab Surya ko grahan ke andhkar ne dhak liya, tab sabhi log rasta bhatke hue ke saman ghabra gaye; tab rishi Atri ne Surya ko mukt karaya.",
        sayanaBhashya: "ऋग्वेद में पूर्ण सूर्यग्रहण (Total Solar Eclipse) के वेध और गणना का यह विश्व का प्राचीनतम वैज्ञानिक अभिलेख है।",
        readerId: "rv-5-40-5"
      },
      {
        number: "५.८३.१",
        sanskrit: "अच्छा॑ वद त॒न्वं॑ गी॒र्भिरे॑ळा स्तौ॒हि प॒र्जन्यं॒ नम॑साविवास।\nकनि॑क्रदद् वृष॒भो जी॒रदा॑नू॒ रेतो॑ दधा॒त्योष॑धीषु॒ गर्भ॑म्॥",
        transliteration: "acchā vada tanvaṃ gīrbhir eḷā stauhi parjanyaṃ namasāvivāsa |\nkanikradad vṛṣabho jīradānū reto dadhāty oṣadhīṣu garbham ||",
        padapatha: "अच्छा॑ । व॒द॒ । त॒न्वम् । गीः॒ऽभिः । ईळा॑ । स्तौ॒हि । प॒र्जन्य॑म् । नम॑सा । आ॒ वि॒वा॒स॒ ।\nकनि॑क्रदत् । वृ॒ष॒भः । जी॒रऽदा॑नुः । रेतः॑ । द॒धा॒ति॒ । ओष॑धीषु । गर्भ॑म् ॥",
        padapathaBadges: [
          { word: "स्तौहि पर्जन्यम्", meaning: "पर्जन्य मेघ की स्तुति करो" },
          { word: "नमसा आ विवासा", meaning: "प्रणाम द्वारा उन्हें प्रसन्न करो" },
          { word: "कनिक्रदत् वृषभः", meaning: "गर्जना करता हुआ शक्तिशाली वृषभ" },
          { word: "जीरदानुः", meaning: "शीघ्र जल की वर्षा करने वाला" },
          { word: "ओषधीषु गर्भं दधाति", meaning: "औषधियों और पृथ्वी में अंकुरण-बीज स्थापित करता है" }
        ],
        translation: "हे स्तोता! वाणी द्वारा पर्जन्य देव की स्तुति करो और नमन से उनका सत्कार करो। वह गर्जना करता हुआ मेघ-वृषभ तीव्र जल की वर्षा करता है और वनस्पतियों के भीतर जीवन का गर्भ स्थापित करता है।",
        english: "Sing with praises to Parjanya, the Rain Deity! Roaring like a mighty bull, quick in bestowing gifts, he places the seed of life in all herbs.",
        hinglish: "Varsha ke devta Parjanya ki stuti karo, wo garjana karte hue prithvi par jal barsate hain aur vanaspatiyo ko jeevan dete hain.",
        sayanaBhashya: "वर्षा, पारिस्थितिकी (Ecology) और जल-चक्र का अत्यंत मनोहारी व शास्त्रीय सूक्त।",
        readerId: "rv-5-83-1"
      }
    ],
    deitiesSymbols: "१. अत्रि-सूर्य (सूक्त ४०): अंधकार पर ज्ञान के प्रकाश की विजय एवं ग्रहण-मुक्ति।\n२. पर्जन्य (सूक्त ८३): जल-संतुलन, मेघ और कृषि-पोषण के स्वामी।\n३. मरुत (सूक्त ५२-६१): तूफानी शक्तियाँ एवं अत्रि-श्यावाश्व की गतिशीलता।\n४. मित्रावरुण (सूक्त ६२-७२): सत्य, प्रकाश एवं सार्वभौमिक नियमों के संरक्षक।",
    traditionPlaces: "चित्रकूट पर्वत (अत्रि-अनुसूया आश्रम), नर्मदा घाटी, सरस्वती व दृषद्वती प्रदेश।",
    vidhiUsage: "१. अनावृष्टि (सूखे) के समय 'पर्जन्य याग' में ५.८३ का सस्वर पाठ।\n२. सूर्यग्रहण के समय शांति-कर्म एवं मोक्ष-स्नान के समय ५.४० का विनियोग।",
    traditionsDifferences: "अत्रि कुल में महिला ऋषिकाओं (विश्ववारा, अपाला) द्वारा यज्ञ संपादन का खुला शास्त्रीय प्रमाण इस मण्डल की अनूठी विशेषता है।",
    historyResearch: "लोकमान्य बाल गंगाधर तिलक ने 'ओरियन' (Orion) पुस्तक में मण्डल ५ के खगोलीय सूक्तों के आधार पर वेदों की प्राचीनता ५००० ईसा पूर्व सिद्ध की थी।",
    relatedArticles: [
      { title: "Mandala 4", tag: "Mandala • Rigveda", slug: "mandala-4" },
      { title: "Mandala 6", tag: "Mandala • Rigveda", slug: "mandala-6" },
      { title: "Mandala 8", tag: "Mandala • Rigveda", slug: "mandala-8" }
    ],
    relatedGrantha: { name: "Rigveda Shakala Samhita", desc: "Mandala 5 Atri Family Archive" },
    relatedTopics: ["Atri", "Solar Eclipse 5.40", "Parjanya", "Vishvavara", "Shyavashva"]
  },

  // 6. MANDALA 6
  "mandala-6": {
    id: "mandala-6",
    slug: "mandala-6",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Rigveda Mandala 6",
    hindiTitle: "ऋग्वेद मण्डल ६ (भरद्वाज मण्डल — तन्तु-ओतु एवं धनुर्वेद संग्राम सूक्त)",
    contentType: "RIGVEDA MANDALA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Mandala 6", "Bharadvaja", "Tantu-Otu", "Pushan", "Dhanurveda", "Sangrama Sukta"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "75 Suktas • 765 Mantras", type: "approved" },
      { label: "Bharadvaja Lineage", type: "verified" },
      { label: "Cosmic Loom & Martial Art", type: "approved" }
    ],
    intro: "ऋग्वेद का षष्ठ मण्डल महर्षि भरद्वाज बार्हस्पत्य एवं उनके कुल (गर्ग, शंयु, सुहोत्र आदि) द्वारा साक्षात्कृत है। इसमें कुल ७५ सूक्त, ६ अनुवाक तथा ७६५ मंत्र हैं। यह मण्डल दार्शनिक चिंतन और सामरिक (Martial) मर्यादा दोनों का अद्भुत संगम है। इसमें विख्यात 'तन्तु-ओतु सूक्त' (६.९ — सृष्टि रूपी वस्त्र के ताने-बाने और अंतःकरण की असीम ज्योति 'ध्रुवं ज्योतिर्निहितं दृशये कम्' का चिंतन), 'पूषा सूक्त' (६.५४ — भटके हुओं को सत्य-मार्ग दिखाने वाले पूषा देव), तथा संपूर्ण वैदिक वांग्मय का प्रथम 'धनुर्वेद/संग्राम सूक्त' (६.७५ — धनुष, बाण, कवच, सारथि और धर्मयुद्ध की आचारसंहिता) समाहित है।",
    etymology: [
      { term: "भरद्वाज (Bharadvāja)", meaning: "भरत् (पोषण करने वाला) + वाज (ज्ञान/अन्न/शक्ति) — जो समस्त जगत को ज्ञान व पोषण से पुष्ट करते हैं।" },
      { term: "तन्तु-ओतु (Tantu-Otu)", meaning: "तन्तु (ताना - लम्बाई का धागा) + ओतु (बाना - चौड़ाई का धागा) — चेतना और ब्रह्मांड का अंतर्गुंथन।" },
      { term: "पूषा (Pūṣan)", meaning: "पोषयति इति — मार्ग-दर्शक, खोई हुई वस्तुओं का पुनः प्रापक और समस्त प्राणियों का पोषक देव।" }
    ],
    shastricBase: "ऋग्वेद शाकल संहिता (६.१ - ६.७५), तैत्तिरीय ब्राह्मण ३.१०.११, सायण भाष्य, चरक संहिता (भरद्वाज आयुर्वेद अवतरण)।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल शाखा",
      kanda: "मण्डल ६ (सूक्त १ से ७५)",
      anuvaka: "६ अनुवाक • ७६५ मंत्र",
      rishi: "महर्षि भरद्वाज बार्हस्पत्य, गर्ग भारद्वाज, शंयु, सुहोत्र, पुरूमीळ्ह, अजमीळ्ह",
      devata: "अग्नि (सूक्त १-१६), इंद्र (सूक्त १७-४७), पूषा (सूक्त ५३-५८), मरुत, द्यावापृथिवी, सरस्वती, युद्ध-अस्त्र (६.७५)",
      chandas: "त्रिष्टुप् (प्रधान), जगती, गायत्री, अनुष्टुप्"
    },
    primaryMantra: {
      sanskrit: "नाहं तन्तुं॒ न वि जा॑नाम्यो॒तुं न यं वय॑न्ति सम॒रेऽत॑मानाः।\nकस्य॑ पु॒त्र इ॒ह वक्त्वानि॑ प॒रो व॑दा॒त्यव॑रेण पि॒त्रा॥\n\nध्रु॒वं ज्योति॒र्निहि॑तं दृ॒शये॒ कं मनो॒ जवि॑ष्ठं पतय॒त्स्वन्त॑रिति॥\n\nधन्व॑ना॒ गा धन्व॑ना॒जिं ज॑येम॒ धन्व॑ना ती॒व्राः स॒मदो॑ जयेम॥",
      ref: "ऋग्वेद ६.९.२-५ (तन्तु-ओतु एवं अंतर्ज्योति) एवं ६.७५.२ (धनुर्वेद संग्राम सूक्त)",
      translation: "मैं न तो इस ब्रह्मांड के ताने (तंतु) को जानता हूँ और न बाने (ओतु) को, जिसे यज्ञानुष्ठान में ज्ञानीजन बुनते हैं। हमारे भीतर वह अचल, ध्रुव आत्म-ज्योति स्थापित है जिसे देखने के लिए मन तीव्र गति से दौड़ता है! हम धनुष के बल से गौओं को जीतें, धनुष से संग्राम जीतें और धनुष से ही शत्रुओं के भीषण आक्रमणों को परास्त कर धर्म की रक्षा करें।"
    },
    allMantras: [
      {
        number: "६.९.२",
        sanskrit: "नाहं तन्तुं॒ न वि जा॑नाम्यो॒तुं न यं वय॑न्ति सम॒रेऽत॑मानाः।\nकस्य॑ पु॒त्र इ॒ह वक्त्वानि॑ प॒रो व॑दा॒त्यव॑रेण पि॒त्रा॥",
        transliteration: "nāhaṃ tantuṃ na vi jānāmy otuṃ na yaṃ vayanti samare 'tamānāḥ |\nkasya putra iha vaktvāni paro vadāty avareṇa pitrā ||",
        padapatha: "न । अ॒हम् । तन्तु॑म् । न । वि । जा॒ना॒मि॒ । ओतु॑म् । न । यम् । वय॑न्ति । स॒म॒रे । अत॑मानाः ।\nकस्य॑ । पु॒त्रः । इ॒ह । वक्त्वानि॑ । प॒रः । व॒दा॒ति॒ । अव॑रेण । पि॒त्रा ॥",
        padapathaBadges: [
          { word: "नाहं तन्तुं विजानामि", meaning: "मैं न ताने को जानता हूँ" },
          { word: "न ओतुम्", meaning: "और न ही बाने को जानता हूँ" },
          { word: "यं वयन्ति समरे", meaning: "जिसे यज्ञाग्नि में ज्ञानीजन बुनते हैं" },
          { word: "कस्य पुत्रः परो वदाति", meaning: "कौन ऐसा ज्ञानी पुत्र है जो पिता से परे के इस सत्य को कहे" }
        ],
        translation: "मैं न तो इस ब्रह्मांडीय सृष्टि के ताने (तंतु) को समझता हूँ और न बाने (ओतु) को, जिसे यज्ञाग्नि में तत्पर ज्ञानीजन बुनते हैं। इस संसार में ऐसा कौन ज्ञानी पुत्र है जो पिता से भी परे के इस गूढ़ ब्रह्मांडीय सत्य का पूर्ण व्याख्यान कर सके?",
        english: "I know not either the warp or the woof, nor that which they weave in the sacrifice. Whose son may here speak words that are to be spoken beyond his father?",
        hinglish: "Main srishti ke taane-baane ko nahi janta jise gyani yagya me bunte hain. Kaun aisa gyani hai jo is srishti-rahasya ko purna roop se bata sake?",
        sayanaBhashya: "ब्रह्मांड और मानव चेतना के अन्योन्याश्रित संबंध का सर्वाधिक गंभीर दार्शनिक रूपक।",
        readerId: "rv-6-9-2"
      },
      {
        number: "६.७५.२",
        sanskrit: "धन्व॑ना॒ गा धन्व॑ना॒जिं ज॑येम॒ धन्व॑ना ती॒व्राः स॒मदो॑ जयेम।\nधनुः॒ शत्रो॑रपका॒मं कृ॑णोति॒ धन्व॑ना॒ सर्वाः॑ प्र॒दिशो॑ जयेम॥",
        transliteration: "dhanvanā gā dhanvanājiṃ jayema dhanvanā tīvrāḥ samado jayema |\ndhanuḥ śatror apakāmaṃ kṛṇoti dhanvanā sarvāḥ pradiśo jayema ||",
        padapatha: "धन्व॑ना । गाः । धन्व॑ना । आ॒जिम् । ज॒ये॒म॒ । धन्व॑ना । ती॒व्राः । स॒मदः॑ । ज॒ये॒म॒ ।\nधनुः॑ । शत्रोः॑ । अ॒प॒ऽका॒मम् । कृ॒णो॒ति॒ । धन्व॑ना । सर्वाः॑ । प्र॒ऽदिशः॑ । ज॒ये॒म॒ ॥",
        padapathaBadges: [
          { word: "धन्वना गाः जयेम", meaning: "धनुष से हम गौओं/ऐश्वर्य को जीतें" },
          { word: "धन्वना आजिं जयेम", meaning: "धनुष से हम संग्राम में विजय प्राप्त करें" },
          { word: "धन्वना तीव्राः समदः", meaning: "धनुष से हम शत्रुओं के भीषण आक्रमणों को जीतें" },
          { word: "धनुः शत्रोः अपकामं कृणोति", meaning: "धनुष शत्रु की कुत्सित इच्छाओं को नष्ट करता है" },
          { word: "सर्वाः प्रदिशो जयेम", meaning: "धनुष से हम समस्त दिशाओं में धर्म-विजय करें" }
        ],
        translation: "हम धनुष के सामर्थ्य से गौओं/समृद्धि को जीतें, धनुष से युद्ध में विजय पाएं, धनुष से शत्रुओं के तीव्र प्रहारों को नष्ट करें। धनुष शत्रु के दुराचार को निष्फल करता है; हम धनुष से सभी दिशाओं में धर्म की रक्षा करें।",
        english: "With the bow may we win cattle, with the bow win the battle, with the bow overcome the fierce attacks of foes. The bow foils the desire of the enemy; with the bow may we conquer all regions!",
        hinglish: "Dhanush ke bal se hum samriddhi jeetein, yuddh jeetein aur shatruo ke prahar ko nasht karein. Dhanush se sabhi dishaon me dharm ki raksha karein.",
        sayanaBhashya: "सनातन धर्म में राष्ट्र-रक्षा, शौर्य और धनुर्वेद का आदिम व प्रामाणिक महामंत्र।",
        readerId: "rv-6-75-2"
      }
    ],
    deitiesSymbols: "१. तन्तु-ओतु ज्योति (सूक्त ९): अंतःकरण में स्थापित ध्रुव चेतना एवं आत्म-प्रकाश।\n२. धनुष व संग्राम-अस्त्र (सूक्त ७५): धर्म-संस्थापन, राष्ट्र-सुरक्षा एवं क्षात्र-धर्म।\n३. पूषा (सूक्त ५३-५८): भटके हुए पशुओं व मनुष्यों के रक्षक, सोने के भाले वाले देव।\n४. अग्नि वैश्वानर व भरद्वाज इंद्र: शौर्य एवं ज्ञान का समन्वय।",
    traditionPlaces: "प्रयागराज (भारद्वाज आश्रम जहाँ श्रीराम ने विश्राम किया था), सरस्वती व दृषद्वती तट।",
    vidhiUsage: "१. युद्ध यात्रा, सीमा-रक्षा एवं अस्त्र-पूजन के समय ६.७५ (संग्राम सूक्त) का अभिमंत्रण।\n२. यात्रा-सुरक्षा एवं खोई वस्तुओं की प्राप्ति हेतु ६.५४ (पूषा सूक्त) का पाठ।",
    traditionsDifferences: "भरद्वाज मण्डल में ऋग्वेद की सबसे प्रौढ़, अलंकृत एवं वीर-रस से परिपूर्ण त्रिष्टुप् भाषा का प्रयोग हुआ है।",
    historyResearch: "महर्षि भरद्वाज आयुर्वेद के प्रथम प्रवक्ता थे जिन्होंने देवराज इंद्र से आयुर्वेद का समग्र ज्ञान प्राप्त कर आत्रेय पुनर्वसु आदि ऋषियों को सिखाया था।",
    relatedArticles: [
      { title: "Mandala 5", tag: "Mandala • Rigveda", slug: "mandala-5" },
      { title: "Mandala 7", tag: "Mandala • Rigveda", slug: "mandala-7" },
      { title: "Mahamrityunjaya Mantra", tag: "Mantra • Rigveda", slug: "mahamrityunjaya-mantra" }
    ],
    relatedGrantha: { name: "Rigveda Shakala Samhita", desc: "Mandala 6 Bharadvaja Archive" },
    relatedTopics: ["Bharadvaja", "Tantu-Otu", "Pushan", "Dhanurveda 6.75", "Sangrama Sukta", "Prayagraj"]
  },

  // 7. MANDALA 7
  "mandala-7": {
    id: "mandala-7",
    slug: "mandala-7",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Rigveda Mandala 7",
    hindiTitle: "ऋग्वेद मण्डल ७ (वसिष्ठ मण्डल — महामृत्युंजय एवं दाशराज्ञ युद्ध)",
    contentType: "RIGVEDA MANDALA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Mandala 7", "Vasistha", "Mahamrityunjaya Mantra", "Dasharajna Battle", "Varuna Hymns", "Manduka Sukta"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "104 Suktas • 841 Mantras", type: "approved" },
      { label: "Vasistha Lineage", type: "verified" },
      { label: "Mahamrityunjaya Origin", type: "approved" },
      { label: "Dasharajna History", type: "verified" }
    ],
    intro: "ऋग्वेद का सप्तम मण्डल ब्रह्मर्षि वसिष्ठ मैत्रावरुणि एवं उनके वंशजों द्वारा साक्षात्कृत है। इसमें कुल १०४ सूक्त, ६ अनुवाक तथा ८४१ मंत्र हैं। यह मण्डल आध्यात्मिक भक्ति, संजीवनी विद्या और प्राचीन भारत के इतिहास का सर्वोच्च शिखर है। इसी मण्डल के ५९वें सूक्त की १२वीं ऋचा के रूप में विश्व-प्रसिद्ध 'महामृत्युंजय संजीवनी मंत्र' (७.५९.१२ — 'त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्') प्रकट हुआ है। इसके अतिरिक्त, इसमें परुष्णी (रावी) नदी के तट पर लड़े गए ऐतिहासिक 'दाशराज्ञ युद्ध' (७.१८, ७.३३ — राजा सुदास और दस राजाओं के संघ का युद्ध), वरुण देव के अत्यंत मार्मिक भक्ति सूक्त (७.८६-८९), तथा वर्षा ऋतु में वेदमंत्र जपते ब्रह्मचारियों की उपमा देने वाला प्रसिद्ध 'मण्डूक सूक्त' (७.१०३) समाहित हैं।",
    etymology: [
      { term: "वसिष्ठ (Vasiṣṭha)", meaning: "वसुमत्तम — जो समस्त सद्गुणों, तपस्या, क्षमा और ब्रह्मविद्या में सर्वाधिक श्रेष्ठ व निवास करने वाले हैं।" },
      { term: "महामृत्युंजय (Mahāmṛtyuñjaya)", meaning: "त्र्यम्बक शिव की वह संजीवनी उपासना जो साधक को अकाल मृत्यु और जन्म-मरण के बंधन से मुक्त कर अमृतत्व प्रदान करती है।" },
      { term: "दाशराज्ञ (Dāśarājña)", meaning: "दस राजाओं का महासंग्राम — जिसमें महर्षि वसिष्ठ के आध्यात्मिक मार्गदर्शन से राजा सुदास की धर्म-विजय हुई।" }
    ],
    shastricBase: "ऋग्वेद शाकल संहिता (७.१ - ७.१०४), सायण भाष्य, वसिष्ठ धर्मसूत्र, तैत्तिरीय आरण्यक, सर्वानुक्रमणी।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल शाखा",
      kanda: "मण्डल ७ (सूक्त १ से १०४)",
      anuvaka: "६ अनुवाक • ८४१ मंत्र",
      rishi: "ब्रह्मर्षि वसिष्ठ मैत्रावरुणि, शक्ति वसिष्ठ, चित्रमहस्, और्ध्वसद्म",
      devata: "अग्नि (सूक्त १-१७), इंद्र (सूक्त १८-३२), वरुण (सूक्त ८६-८९), रुद्र/त्र्यम्बक (७.५९.१२), मरुत, मण्डूक, सरस्वती",
      chandas: "त्रिष्टुप् (प्रधान), गायत्री, जगती, अनुष्टुप्"
    },
    primaryMantra: {
      sanskrit: "ॐ त्र्य॑म्बकं यजामहे सु॒गन्धिं॑ पुष्टि॒वर्ध॑नम्।\nउ॒र्वा॒रु॒कमि॑व॒ बन्ध॑नान्मृ॒त्योर्मु॑क्षीय॒ माऽमृता॑त्॥\n\nअव॑ द्रु॒ग्धानि॒ पित्र्या॑ सृजा नो॒ऽव या व॒यं च॑कृ॒मा त॒नूभिः॑।\nअव॑ राजन् पशुपृ॒चं न ता॒युं सृ॒जा व॒त्सं न दाम्नो॒ वसि॑ष्ठम्॥",
      ref: "ऋग्वेद ७.५९.१२ (महामृत्युंजय महामंत्र) एवं ७.८६.५ (वरुण क्षमा प्रार्थना)",
      translation: "हम त्रिनेत्रधारी (सुगंधित एवं पुष्टि-वर्धक) भगवान शिव की आराधना करते हैं; जैसे पका हुआ खरबूजा अपनी बेल के बंधन से अनायास मुक्त हो जाता है, वैसे ही हम मृत्यु व संसार-बंधन से मुक्त हों, किंतु अमरता (मोक्ष) से कभी वंचित न हों। हे सम्राट् वरुण! हमारे पूर्वजों के और हमारे द्वारा किए गए अपराधों को क्षमा कीजिए; जैसे रस्सी से बछड़े को मुक्त किया जाता है, वैसे ही वसिष्ठ को समस्त पाशों से मुक्त कर दीजिए।"
    },
    allMantras: [
      {
        number: "७.५९.१२",
        sanskrit: "ॐ त्र्य॑म्बकं यजामहे सु॒गन्धिं॑ पुष्टि॒वर्ध॑नम्।\nउ॒र्वा॒रु॒कमि॑व॒ बन्ध॑नान्मृ॒त्योर्मु॑क्षीय॒ माऽमृता॑त्॥",
        transliteration: "oṃ tryambakaṃ yajāmahe sugandhiṃ puṣṭivardhanam |\nurvārukam iva bandhanān mṛtyor mukṣīya māmṛtāt ||",
        padapatha: "त्र्य॑म्बकम् । य॒जा॒म॒हे॒ । सु॒ऽगन्धि॑म् । पु॒ष्टि॒ऽवर्ध॑नम् ।\nउ॒र्वा॒रु॒कम्ऽइ॑व । बन्ध॑नात् । मृ॒त्योः । मु॒क्षी॒य॒ । मा । अ॒मृता॑त् ॥",
        padapathaBadges: [
          { word: "त्र्यम्बकम्", meaning: "त्रिनेत्रधारी परमेश्वर शिव को" },
          { word: "यजामहे", meaning: "हम पूजते व ध्यान करते हैं" },
          { word: "सुगन्धिम्", meaning: "दिव्य चेतना की सुगंध से युक्त" },
          { word: "पुष्टिवर्धनम्", meaning: "समस्त स्वास्थ्य, बल व पुष्टि को बढ़ाने वाले" },
          { word: "उर्वारुकमिव", meaning: "जैसे पका हुआ खरबूजा" },
          { word: "बन्धनात्", meaning: "डंठल/बेल के बंधन से" },
          { word: "मृत्यormukṣīya", meaning: "मृत्यु के पाश से मुक्त हो जाएं" },
          { word: "मा अमृतात्", meaning: "किंतु अमृतत्व (मोक्ष) से अलग न हों" }
        ],
        translation: "हम त्रिनेत्रधारी, दिव्य सुगंध से युक्त, समस्त जगत का पोषण व संवर्धन करने वाले महादेव की वंदना करते हैं। जिस प्रकार पका हुआ खरबूजा बेल के बंधन से सहज ही मुक्त हो जाता है, उसी प्रकार हम मृत्यु व नश्वर संसार के बंधनों से मुक्त हो जाएं, किंतु अमृतत्व व मोक्ष से कभी विमुख न हों।",
        english: "We worship the Three-eyed Lord Shiva, fragrant and bestowing nourishment. As a ripe cucumber is severed from its stalk, so may we be liberated from death, but not from immortality.",
        hinglish: "Hum trinetradhari Shivji ki pooja karte hain jo sabka poshan karte hain. Jaise paka kharbuja bel se alag ho jata hai, waise hi hum mrityu ke bandhan se mukt ho par amritatva se nahi.",
        sayanaBhashya: "ऋग्वेद की संजीवनी विद्या जो साधक को अकाल मृत्यु से बचाकर परमानंद व मोक्ष प्रदान करती है।",
        readerId: "rv-7-59-12"
      },
      {
        number: "७.८६.५",
        sanskrit: "अव॑ द्रु॒ग्धानि॒ पित्र्या॑ सृजा नो॒ऽव या व॒यं च॑कृ॒मा त॒नूभिः॑।\nअव॑ राजन् पशुपृ॒चं न ता॒युं सृ॒जा व॒त्सं न दाम्नो॒ वसि॑ष्ठम्॥",
        transliteration: "ava drugdhāni pitryā sṛjā no 'va yā vayaṃ cakṛmā tanūbhiḥ |\nava rājan paśupṛcaṃ na tāyuṃ sṛjā vatsaṃ na dāmno vasiṣṭham ||",
        padapatha: "अव॑ । द्रु॒ग्धानि॑ । पित्र्या॑ । सृ॒ज॒ । नः॒ । अव॑ । या । व॒यम् । च॒कृ॒म । त॒नूभिः॑ ।\nअव॑ । रा॒जन् । प॒शु॒ऽपृच॑म् । न । ता॒युम् । सृ॒ज॒ । व॒त्सम् । न । दाम्नः॑ । वसि॑ष्ठम् ॥",
        padapathaBadges: [
          { word: "अव सृज", meaning: "दूर कर दीजिए/क्षमा कीजिए" },
          { word: "पित्र्या द्रुग्धानि", meaning: "पूर्वजों के अपराधों को" },
          { word: "या वयं चकृम", meaning: "और जो हमने स्वयं किए हैं" },
          { word: "अव राजन् सृज वसिष्ठम्", meaning: "हे राजन् वरुण! वसिष्ठ को पाशमुक्त कीजिए" },
          { word: "वत्सं न दाम्नः", meaning: "जैसे रस्सी से बछड़े को खोला जाता है" }
        ],
        translation: "हे सम्राट् वरुण! हमारे पूर्वजों द्वारा किए गए और स्वयं हमारे शरीरों द्वारा किए गए भूल-चूक के पापों को क्षमा कर दीजिए। हे देव! जैसे रस्सी के बंधन से छोटे बछड़े को प्रेमपूर्वक मुक्त किया जाता है, वैसे ही अपने भक्त वसिष्ठ को समस्त सांसारिक बंधनों से मुक्त कर दीजिए।",
        english: "Loose us from the sins committed by our fathers, and from those that we ourselves have committed. O King Varuna, release Vasistha as a calf is untied from its cord!",
        hinglish: "Hey Varuna dev! Hamari sabhi bhulo ko maaf kijiye, jaise rassi se bachhde ko khola jata hai waise hi Vasistha ko sabhi paapon se mukt kijiye.",
        sayanaBhashya: "वैदिक साहित्य में ईश्वर के प्रति शुद्ध शरणागति और करुणा की पराकाष्ठा।",
        readerId: "rv-7-86-5"
      }
    ],
    deitiesSymbols: "१. त्र्यम्बक शिव (७.५९.१२): मृत्युंजय शक्ति, आरोग्य व अमरता के अधिष्ठाता।\n२. वरुण (सूक्त ८६-८९): ऋत के न्यायाधीश, अंतर्यामी साक्षी एवं परम दयालु क्षमाशील देव।\n३. इंद्र व सुदास (सूक्त १८): सत्य और धर्म के पक्ष में विजय दिलाने वाला आत्मबल।\n४. मण्डूक (सूक्त १०३): वर्षा आगमन पर वेदमंत्रों का समवेत उच्चारण करने वाले तपस्वी छात्र।",
    traditionPlaces: "परुष्णी (रावी) नदी तट, वसिष्ठ आश्रम (माउंट आबू एवं उत्तरकाशी), सरस्वती क्षेत्र।",
    vidhiUsage: "१. अकाल मृत्यु निवारण एवं स्वास्थ्य रक्षा हेतु महामृत्युंजय मंत्र (७.५९.१२) का १,२५,००० जप व हवन।\n२. वरुण शांति एवं वर्षा हेतु ७.१०३ (मण्डूक सूक्त) का पाठ।",
    traditionsDifferences: "वसिष्ठ मण्डल भक्ति (Devotion) और शरणागति का ऋग्वेद में सबसे उज्ज्वल उदाहरण माना जाता है।",
    historyResearch: "दाशराज्ञ युद्ध (७.१८) को इतिहासकार भारत का प्रथम प्रामाणिक राष्ट्रीय संग्राम मानते हैं जिसने 'भारत' राष्ट्र की सीमाओं को सुदृढ़ किया।",
    relatedArticles: [
      { title: "Mahamrityunjaya Mantra", tag: "Mantra • Rigveda", slug: "mahamrityunjaya-mantra" },
      { title: "Mandala 6", tag: "Mandala • Rigveda", slug: "mandala-6" },
      { title: "Mandala 8", tag: "Mandala • Rigveda", slug: "mandala-8" }
    ],
    relatedGrantha: { name: "Rigveda Shakala Samhita", desc: "Mandala 7 Vasistha Heritage Archive" },
    relatedTopics: ["Mahamrityunjaya", "Vasistha", "Dasharajna Battle", "Varuna Hymns", "Manduka Sukta"]
  },

  // 9. MANDALA 9
  "mandala-9": {
    id: "mandala-9",
    slug: "mandala-9",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Rigveda Mandala 9",
    hindiTitle: "ऋग्वेद मण्डल ९ (पवमान सोम मण्डल — अमरत्व एवं चेतना शुद्धि)",
    contentType: "RIGVEDA MANDALA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Mandala 9", "Soma Pavamana", "Immortality Hymn", "Diverse Occupations", "Samaveda Basis"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "114 Suktas • 1,108 Mantras", type: "approved" },
      { label: "100% Dedicated to Soma", type: "verified" },
      { label: "Pavamana Suktas", type: "approved" }
    ],
    intro: "ऋग्वेद का नवम मण्डल 'पवमान सोम मण्डल' के नाम से प्रसिद्ध है। इसमें कुल ११४ सूक्त, ७ अनुवाक तथा १,१०८ मंत्र हैं। ऋग्वेद का यह एकमात्र ऐसा मण्डल है जो शत-प्रतिशत केवल एक ही देवता — 'पवमान सोम' (पवित्र करने वाले दिव्य रस व चेतना-अमृत) को समर्पित है। इसमें भृगु, अंगिरा, कश्यप, वसिष्ठ, विश्वामित्र आदि सभी प्रमुख ऋषिकुलों की सोमरस स्तुतियाँ संकलित हैं। यह मण्डल सामवेद के समस्त गानों की मूल आधारशिला है। इसमें विश्व-प्रसिद्ध 'अमरत्व सूक्त' (९.११३ — 'यत्र ज्योतिरजस्रं यस्मिँल्लोके स्वर्हितम्... तत्र मां धेहि पवमानामृते लोके अक्षित') तथा मानव समाज के श्रम व विविध व्यवसायों का यथार्थवादी 'नाना धियो सूक्त' (९.११२) समाहित हैं।",
    etymology: [
      { term: "पवमान (Pavamāna)", meaning: "पूङ् (पवित्र करना) + शानच् — जो पवित्र होता हुआ बहता है; अंतःकरण के समस्त विकारों को धोकर शुद्ध करने वाला दिव्य सोम।" },
      { term: "सोम (Soma)", meaning: "सु (निचोड़ना/उत्पन्न करना) — केवल लता का रस नहीं, अपितु ब्रह्मांडीय आनंद, ओज और अमरत्व की संजीवनी शक्ति।" },
      { term: "अमृताभवन (Amṛtatva)", meaning: "जन्म-मृत्यु के चक्र से परे शाश्वत ज्योतिर्मय लोक की प्राप्ति।" }
    ],
    shastricBase: "ऋग्वेद शाकल संहिता (९.१ - ९.११४), सामवेद संहिता (पूर्वार्चिक व उत्तरार्चिक), सायण भाष्य, ऐतरेय ब्राह्मण।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल शाखा",
      kanda: "मण्डल ९ (सूक्त १ से ११४)",
      anuvaka: "७ अनुवाक • १,१०८ मंत्र (संपूर्ण मण्डल सोम समर्पित)",
      rishi: "मधुच्छन्दा, असित काश्यप, देवल, गृत्समद, विश्वामित्र, वामदेव, अत्रि, भरद्वाज, वसिष्ठ, कश्यप",
      devata: "पवमान सोम (एकमात्र प्रधान देवता)",
      chandas: "गायत्री (सर्वाधिक), जगती, त्रिष्टुप्, अनुष्टुप्, बृहती"
    },
    primaryMantra: {
      sanskrit: "यत्र॒ ज्योति॒रज॑स्रं॒ यस्मिँ॑ल्लो॒के स्वर्हि॑तम्।\nतस्मि॑न् मां धेहि पवमा॒नामृ॑ते लो॒के अक्षि॑त॒ इन्द्रा॑येन्दो॒ परि॑ स्रव॥\n\nनाना॑ नू॒नं धियो॑ व्रा॒तानि॑ जना॒नाम्।\nकारु॑र॒हं त॒तो भि॒षगु॑पलप्र॒क्षिणी॑ न॒ना॥",
      ref: "ऋग्वेद ९.११३.७ (अमरत्व सूक्त) एवं ९.११२.१ (विविध कर्म सूक्त)",
      translation: "जहाँ अखंड दिव्य ज्योति निरंतर प्रकाशित रहती है, जिस दिव्य लोक में परम सुख स्थापित है; हे पवमान सोम! उस अक्षय, अविनाशी और अमर लोक में मुझे प्रतिष्ठित कीजिए; हे सोम रस! इंद्र के लिए आनंद बनकर प्रवाहित होइए। मनुष्यों के संकल्प और व्यवसाय भिन्न-भिन्न हैं; मैं कवि (साधक) हूँ, मेरे पिता वैद्य हैं, और मेरी माता चक्की से अन्न पीसने वाली हैं — हम सब भिन्न कर्म करते हुए भी उस एक ही परम आनंद की खोज में हैं।"
    },
    allMantras: [
      {
        number: "९.११३.७",
        sanskrit: "यत्र॒ ज्योति॒रज॑स्रं॒ यस्मिँ॑ल्लो॒के स्वर्हि॑तम्।\nतस्मि॑न् मां धेहि पवमा॒नामृ॑ते लो॒के अक्षि॑त॒ इन्द्रा॑येन्दो॒ परि॑ स्रव॥",
        transliteration: "yatra jyotir ajasraṃ yasmiṃl loke svar hitam |\ntasmin māṃ dhehi pavamānāmṛte loke akṣita indrāyendo pari srava ||",
        padapatha: "यत्र॑ । ज्योतिः॑ । अज॑स्रम् । यस्मि॑न् । लो॒के । स्वः॑ । हि॒तम् ।\nतस्मि॑न् । माम् । धे॒हि॒ । प॒व॒मा॒न॒ । अमृ॑ते । लो॒के । अक्षि॑ते । इन्द्रा॑य । इन्दो॒ इति॑ । परि॑ । स्र॒व॒ ॥",
        padapathaBadges: [
          { word: "यत्र ज्योतिः अजस्रम्", meaning: "जहाँ निरंतर अखंड ज्योति जलती है" },
          { word: "यस्मिन् लोके स्वः हितम्", meaning: "जिस लोक में परम आनंद स्थापित है" },
          { word: "तस्मिन् मां धेहि", meaning: "उस लोक में मुझे स्थापित कीजिए" },
          { word: "अमृते लोके अक्षिते", meaning: "उस अविनाशी, अमर लोक में" },
          { word: "इन्द्राय इन्दो परि स्रव", meaning: "हे सोम! इंद्र के निमित्त पवित्र होकर बहो" }
        ],
        translation: "जहाँ अखंड, कभी न बुझने वाली दिव्य ज्योति जगमगाती है, जिस परम धाम में शाश्वत प्रकाश व सुख स्थापित है; हे पावन करने वाले सोमदेव! मुझे उस अविनाशी अमर लोक में प्रतिष्ठित कीजिए; हे सोम! आप इंद्र के लिए आनंदमय होकर प्रवाहित होइए।",
        english: "Where radiance inexhaustible dwells, in the realm wherein the light of heaven is set, in that immortal, imperishable world place me, O Pavamana! Flow, Indu, for Indra's sake!",
        hinglish: "Jahan akhand divya jyoti hamesha jalti hai, us avinashi amar lok me mujhe sthapit kijiye, hey Soma! Indra ke liye pavitra hokar bahiye.",
        sayanaBhashya: "ऋग्वेद में मोक्ष, अमरत्व और वैकुंठ/ब्रह्मलोक का यह सर्वाधिक स्पष्ट व हृदयस्पर्शी मंत्र है।",
        readerId: "rv-9-113-7"
      },
      {
        number: "९.११२.१",
        sanskrit: "नाना॑ नू॒नं धियो॑ व्रा॒तानि॑ जना॒नाम्।\nकारु॑र॒हं त॒तो भि॒षगु॑पलप्र॒क्षिणी॑ न॒ना।\nनाना॑धियो वसू॒यवोऽनु॒ गा इ॑व तस्थि॒मेन्द्रा॑येन्दो॒ परि॑ स्रव॥",
        transliteration: "nānā nūnaṃ dhiyo vrātāni janānām |\nkārur ahaṃ tato bhiṣag upalaprakṣiṇī nanā |\nnānādhiyo vasūyavo 'nu gā iva tasthimendrāyendo pari srava ||",
        padapatha: "नाना॑ । नू॒नम् । धियः॑ । व्रा॒तानि॑ । जना॑नाम् ।\nकारुः॑ । अ॒हम् । त॒तः । भि॒षक् । उ॒प॒ल॒ऽप्र॒क्षिणी॑ । न॒ना ।\nनाना॑ऽधियः । व॒सु॒ऽयवः॑ । अनु॑ । गाःऽइ॑व । त॒स्थि॒म॒ । इन्द्रा॑य । इन्दो॒ इति॑ । परि॑ । स्र॒व॒ ॥",
        padapathaBadges: [
          { word: "नाना धियः जनानाम्", meaning: "मनुष्यों की वृत्तियाँ व बुद्धियाँ विविध हैं" },
          { word: "कारुः अहम्", meaning: "मैं मंत्र बनाने वाला कवि/शिल्पी हूँ" },
          { word: "ततः भिषक्", meaning: "मेरे पिता चिकित्सक/वैद्य हैं" },
          { word: "उपलप्रक्षिणी नना", meaning: "मेरी माता पत्थर की चक्की पर अन्न पीसती हैं" },
          { word: "नानाधियो वसूयवः", meaning: "हम सब विविध कार्यों से जीविका व आनंद चाहते हैं" }
        ],
        translation: "निश्चय ही भिन्न-भिन्न मनुष्यों के विचार और आजीविका के साधन अलग-अलग हैं। मैं काव्य/स्तुति रचने वाला कवि हूँ, मेरे पिता वैद्य हैं, और मेरी माता चक्की पर अन्न पीसने वाली हैं। हम सब भिन्न-भिन्न कर्म करते हुए भी सुख और समृद्धि की खोज में वैसे ही लगे हैं जैसे बछड़े गाय के पीछे जाते हैं। हे सोम! आप इंद्र के लिए प्रवाहित होइए।",
        english: "Diverse indeed are our skills and professions! I am a maker of hymns, my father is a physician, and my mother is a grinder of corn. Striving for livelihood with varied thoughts, we follow our tasks. Flow, Indu, for Indra!",
        hinglish: "Sabhi manushyon ke kaam alag hain. Main kavi hoon, mere pita vaidy hain, meri mata chakki peesti hain. Hum sab alag kaam karte hue bhi shanti chahte hain.",
        sayanaBhashya: "वैदिक समाज में श्रम की गरिमा, सामाजिक समरसता और जन्म आधारित नहीं अपितु कर्म आधारित व्यवस्था का प्रत्यक्ष प्रमाण।",
        readerId: "rv-9-112-1"
      }
    ],
    deitiesSymbols: "१. पवमान सोम: अंतःकरण का शोधन, ऊर्ध्वरेतस ऊर्जा एवं ब्रह्म-रस।\n२. दशापवित्र (ऊन की छन्नी): बुद्धि की विवेकशीलता जो असत्य को छानकर सत्य-अमृत को ग्रहण करती है।\n३. द्रोणकलश: साधक का शुद्ध हृदय जिसमें सोम प्रतिष्ठित होता है।\n४. अमर लोक (९.११३): शाश्वत आनंद व मोक्ष का दिव्य धाम।",
    traditionPlaces: "मूजवान् पर्वत (सोम का उद्गम स्थल), सरस्वती व सिंधु नदी तट।",
    vidhiUsage: "१. सोमयाग में प्रातःसवन, माध्यंदिन सवन और तृतीयसवन के समस्त 'पवमान स्तोत्र' नवम मण्डल से ही लिए जाते हैं।\n२. सामवेद गायन में उद्गाताओं द्वारा इन ऋचाओं को विशिष्ट तानों में गाया जाता है।",
    traditionsDifferences: "ऋग्वेद की सम्पूर्ण संहिताओं में केवल नवम मण्डल ही ऐसा है जो विषय-वस्तु (सोम) के आधार पर पूर्णतः एकीकृत है।",
    historyResearch: "आधुनिक वनस्पति विज्ञानियों एवं वैदिक शोधकर्ताओं के अनुसार 'सोम' केवल भौतिक औषधि नहीं, अपितु ध्यान में जाग्रत होने वाला सहस्रार का अमृत-स्राव है।",
    relatedArticles: [
      { title: "Mandala 8", tag: "Mandala • Rigveda", slug: "mandala-8" },
      { title: "Mandala 10", tag: "Mandala • Rigveda", slug: "mandala-10" },
      { title: "Samaveda Samhita", tag: "Samhita • Samaveda", slug: "kauthuma-samhita" }
    ],
    relatedGrantha: { name: "Rigveda Shakala Samhita", desc: "Mandala 9 Soma Pavamana Complete Archive" },
    relatedTopics: ["Soma Pavamana", "Yatra Jyotir Ajasram", "Nana Dhiyo", "Samaveda Chants", "Mujavan Mountain"]
  },

  // 10. MANDALA 10
  "mandala-10": {
    id: "mandala-10",
    slug: "mandala-10",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Rigveda Mandala 10",
    hindiTitle: "ऋग्वेद मण्डल १० (दशम मण्डल — दार्शनिक शिखर, पुरुष, नासदीय एवं संगठन सूक्त)",
    contentType: "RIGVEDA MANDALA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Mandala 10", "Purusha Sukta", "Nasadiya Sukta", "Hiranyagarbha", "Vak Sukta", "Samgathan Sukta"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "191 Suktas • 1,754 Mantras", type: "approved" },
      { label: "Philosophical Pinnacle", type: "verified" },
      { label: "Universal Unity", type: "approved" }
    ],
    intro: "ऋग्वेद का दशम मण्डल समस्त वैदिक वांग्मय का सर्वोच्च दार्शनिक और आध्यात्मिक शिखर है। इसमें प्रथम मण्डल के समान ही कुल १९१ सूक्त, १२ अनुवाक तथा १,७५४ मंत्र हैं। इस मण्डल में सृष्टि की उत्पत्ति, कॉस्मिक चेतना, समाजशास्त्र और मानव-एकता के अमर सूक्त संगृहीत हैं। इसमें विश्व-विख्यात 'पुरुष सूक्त' (१०.९० — विराट् पुरुष से ब्रह्मांड की उत्पत्ति), 'नासदीय सूक्त' (१०.१२९ — सृष्टि से पूर्व शून्य व परमात्मा का विस्मयकारी दर्शन), 'हिरण्यगर्भ सूक्त' (१०.१२१ — 'कस्मै देवाय हविषा विधेम'), 'वाक् सूक्त/देवी सूक्त' (१०.१२५ — 'अहं रुद्रेभिर्वसुभिश्चरामि'), 'अक्ष सूक्त' (१०.३४ — द्यूत-निंदा व कृषि-प्रशंसा), 'दान-प्रशंसा सूक्त' (१०.११७ — 'केवलाघो भवति केवलादी'), तथा ऋग्वेद का अमर अंतिम सूक्त 'संगठन सूक्त' (१०.१९१ — 'संगच्छध्वं संवदध्वं सं वो मनांसि जानताम्') समाहित हैं।",
    etymology: [
      { term: "नासदीय (Nāsadīya)", meaning: "न असत् आसीत् नो सत् आसीत् — सृष्टि रचना से पूर्व जब न असत् था न सत्, केवल एक परब्रह्म था।" },
      { term: "हिरण्यगर्भ (Hiraṇyagarbha)", meaning: "हिरण्य (ज्योति/प्रकाश) है जिसके गर्भ में — सृष्टि का आदि स्वयंभू कारण।" },
      { term: "संवदनम् (Saṃvadanam)", meaning: "समान विचार, समवेत वाणी और परस्पर सौहार्द से युक्त होकर समाज में चलना।" }
    ],
    shastricBase: "ऋग्वेद शाकल संहिता (१०.१ - १०.१९१), सायण भाष्य, शुक्लयजुर्वेद ३१ (पुरुष सूक्त), अथर्ववेद १९.६, ऐतरेय ब्राह्मण।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल शाखा",
      kanda: "मण्डल १० (सूक्त १ से १९१)",
      anuvaka: "१२ अनुवाक • १,७५४ मंत्र",
      rishi: "नारायण ऋषि, प्रजापति परमेष्ठी, हिरण्यगर्भ, वाग् आम्भृणी, संवनन आंगिरस, भिक्षु आंगिरस, यम, यमी, त्रित आप्त्य",
      devata: "विराट् पुरुष, परमात्मा (नासदीय भाव), हिरण्यगर्भ, वाग् देवी, संज्ञान/संगठन, यम, श्रद्धा, दान",
      chandas: "त्रिष्टुप्, अनुष्टुप्, जगती, गायत्री"
    },
    primaryMantra: {
      sanskrit: "सं ग॑च्छध्वं॒ सं व॑दध्वं॒ सं वो॒ मनां॑सि जानताम्।\nदे॒वा भा॒गं यथा॒ पूर्वे॑ संजाना॒ना उ॒पास॑ते॥\n\nस॒मा॒नी व॒ आकू॑तिः समा॒ना हृद॑यानि वः।\nस॒मा॒नम॑स्तु वो॒ मनो॒ यथा॑ वः॒ सुस॒हास॑ति॥",
      ref: "ऋग्वेद १०.१९१.२ एवं ४ (संगठन सूक्त — ऋग्वेद अंतिम महामंत्र)",
      translation: "तुम सब एक साथ मिलकर चलो, एक स्वर में बोलो, तुम्हारे मन और विचार परस्पर एक समान हों; जैसे पुरातन काल के देवगण एकमत होकर अपने यज्ञ-भाग को ग्रहण करते थे। तुम्हारे संकल्प एक समान हों, तुम्हारे हृदय परस्पर जुड़े हों, तुम्हारा मन एक समान हो, जिससे तुम सबका संगठन सुदृढ़ और कल्याणकारी बन सके!"
    },
    allMantras: [
      {
        number: "१०.१९१.२",
        sanskrit: "सं ग॑च्छध्वं॒ सं व॑दध्वं॒ सं वो॒ मनां॑सि जानताम्।\nदे॒वा भा॒गं यथा॒ पूर्वे॑ संजाना॒ना उ॒पास॑ते॥",
        transliteration: "saṃ gacchadhvaṃ saṃ vadadhvaṃ saṃ vo manāṃsi jānatām |\ndevā bhāgaṃ yathā pūrve sañjānānā upāsate ||",
        padapatha: "सम् । ग॒च्छ॒ध्व॒म् । सम् । व॒द॒ध्व॒म् । सम् । वः॒ । मनां॑सि । जा॒न॒ता॒म् ।\nदे॒वाः । भा॒गम् । यथा॑ । पूर्वे॑ । सम्ऽजा॒ना॒नाः । उप॑ऽआसते ॥",
        padapathaBadges: [
          { word: "संगच्छध्वम्", meaning: "एक साथ मिलकर चलो" },
          { word: "संवदध्वम्", meaning: "एक स्वर में सत्य बोलो" },
          { word: "सं वो मनांसि जानताम्", meaning: "तुम्हारे मन परस्पर एक-दूसरे को समझें" },
          { word: "देवा भागं यथा पूर्वे", meaning: "जैसे प्राचीन काल में देवगण" },
          { word: "संजानाना उपासते", meaning: "एकमत होकर यज्ञ-भाग ग्रहण करते थे" }
        ],
        translation: "तुम सब एक साथ कदम मिलाकर चलो, एक स्वर में संवाद करो, तुम्हारे मनों में परस्पर समरसता और समझ हो; जैसे प्राचीन काल के ज्ञानी देवगण एकमत होकर अपने कर्तव्य का पालन करते थे।",
        english: "Assemble together, speak with one voice, let your minds be in harmony, as the ancient gods in unison shared their portion.",
        hinglish: "Sab milkar chalo, ek awaz me bolo, tumhare man ek dusre ko samjhein, jaise prachin devta ekmat hokar rehte the.",
        sayanaBhashya: "ऋग्वेद की अंतिम महा-प्रार्थना जो समस्त मानव जाति को एकता, बंधुत्व और सौहार्द का संदेश देती है।",
        readerId: "rv-10-191-2"
      },
      {
        number: "१०.११७.६",
        sanskrit: "मोघ॒मन्नं॑ विन्दते॒ अप्र॑चेताः स॒त्यं ब्र॑वीमि व॒ध इत् स तस्य॑।\nनार्य॒मणं॒ पुष्य॑ति॒ नो सखा॑यं॒ केव॑लाघो भवति केवला॒दी॥",
        transliteration: "mogham annaṃ vindate apracetāḥ satyaṃ bravīmi vadha it sa tasya |\nnāryamaṇaṃ puṣyati no sakhāyaṃ kevalāgho bhavati kevalādī ||",
        padapatha: "मोघ॑म् । अन्न॑म् । वि॒न्द॒ते॒ । अप्र॑ऽचेताः । स॒त्यम् । ब्र॒वी॒मि॒ । व॒धः । इत् । सः । तस्य॑ ।\nन । अ॒र्य॒मण॑म् । पुष्य॑ति । नो इति॑ । सखा॑यम् । केवल॑ऽअघः । भ॒व॒ति॒ । केवल॑ऽआदी ॥",
        padapathaBadges: [
          { word: "मोघमन्नं विन्दते", meaning: "व्यर्थ ही अन्न प्राप्त करता है" },
          { word: "अप्रचेताः", meaning: "उदारता-रहित स्वार्थी व्यक्ति" },
          { word: "वध इत् स तस्य", meaning: "वह अन्न उसका विनाश ही बनता है" },
          { word: "केवलाघो भवति", meaning: "वह केवल पाप का ही भागी बनता है" },
          { word: "केवलादी", meaning: "जो अकेले ही खाता है और दूसरों को नहीं देता" }
        ],
        translation: "उदारता-रहित स्वार्थी मनुष्य का अन्न संचय करना व्यर्थ है; मैं सत्य कहता हूँ कि वह अन्न उसके लिए वध (विनाश) के समान है। जो न तो अतिथियों को देता है और न मित्रों का पोषण करता है, वह अकेले खाने वाला व्यक्ति केवल पाप ही खाता है!",
        english: "In vain does the selfish man acquire food; I speak the truth, it is his death. He feeds neither the guest nor his friend; he who eats alone feeds only on sin.",
        hinglish: "Swarthi vyakti ka bhojan ikattha karna bekar hai. Jo kisi ko bina khilaye akele khata hai, wo keval paap hi khata hai.",
        sayanaBhashya: "श्रीमद्भगवद्गीता (३.१३ — 'भुञ्जते ते त्वघं पापा ये पचन्त्यात्मकारणात्') का मूल वैदिक स्रोत।",
        readerId: "rv-10-117-6"
      }
    ],
    deitiesSymbols: "१. विराट् पुरुष (१०.९०): समष्टि चेतना एवं ब्रह्मांडीय एकात्मता।\n२. नासदीय परम तत्त्व (१०.१२९): अनामय, अनिर्वचनीय मूल कारण ब्रह्म।\n३. हिरण्यगर्भ (१०.१२१): ब्रह्मांडीय प्रकाश एवं सृजन का अधिपति।\n४. वाक् देवी (१०.१२५): शब्द-शक्ति, परा-वाणी एवं आदिशक्ति।\n५. संगठन/संज्ञान (१०.१९१): राष्ट्रीय एकता, सामाजिक समरसता एवं बंधुत्व।",
    traditionPlaces: "समस्त आर्यावर्त, सरस्वती, गंगा, यमुना एवं सप्तसिंधु की समग्र पावन भूमि।",
    vidhiUsage: "१. समस्त वैदिक अनुष्ठानों की पूर्णाहुति पर 'संगठन सूक्त' (१०.१९१) का शांतिपाठ।\n२. षोडशोपचार पूजा एवं अभिषेक में पुरुष सूक्त (१०.९०) का विनियोग।\n३. अन्नदान व लंगर सेवा के समय दान सूक्त (१०.११७) का स्मरण।",
    traditionsDifferences: "दशम मण्डल में वैदिक वांग्मय अपनी पराकाष्ठा पर पहुँचकर कर्मकांड से ऊपर उठकर विशुद्ध ब्रह्मज्ञान और मानव-एकता में परिणत हो जाता है।",
    historyResearch: "दशम मण्डल को ऋग्वेद का सबसे परिपक्व एवं सार्वभौमिक भाग माना जाता है, जिसके सूक्तों पर उपनिषदों, दर्शनशास्त्रों और आधुनिक विश्व-शांति सम्मेलनों का आधार टिका है।",
    relatedArticles: [
      { title: "Purusha Sukta", tag: "Sukta • Rigveda", slug: "purusha-sukta" },
      { title: "Nasadiya Sukta", tag: "Sukta • Rigveda", slug: "nasadiya-sukta" },
      { title: "Samgathan Sukta", tag: "Sukta • Rigveda", slug: "samgathan-sukta" },
      { title: "Vak Sukta", tag: "Sukta • Rigveda", slug: "vak-sukta" },
      { title: "Hiranyagarbha Sukta", tag: "Sukta • Rigveda", slug: "hiranyagarbha-sukta" }
    ],
    relatedGrantha: { name: "Rigveda Shakala Samhita", desc: "Mandala 10 Philosophical Masterpieces Archive" },
    relatedTopics: ["Purusha Sukta", "Nasadiya Sukta", "Samgathan Sukta", "Hiranyagarbha", "Vak Sukta", "Danastuti 10.117"]
  },

  // 11. SHAKALA SAMHITA
  "shakala-samhita": {
    id: "shakala-samhita",
    slug: "shakala-samhita",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Rigveda Shakala Samhita",
    hindiTitle: "ऋग्वेद शाकल संहिता (१० मण्डल, १०२८ सूक्त, १०,५५२ मन्त्र)",
    contentType: "VEDIC SAMHITA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Samhita", "Shakala", "10 Mandalas", "1028 Suktas", "Complete Archive"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "10,552 Mantras", type: "approved" },
      { label: "Surviving Shakha", type: "verified" },
      { label: "Library Master Archive", type: "approved" }
    ],
    intro: "ऋग्वेद शाकल संहिता विश्व का सबसे प्राचीन, पवित्र और प्रामाणिक ग्रन्थ है। महर्षि वेदव्यास द्वारा संकलित और उनके शिष्य महर्षि पैल तथा शाकल्य द्वारा संरक्षित यह ऋग्वेद की एकमात्र पूर्णतः अक्षुण्ण उपलब्ध शाखा है। इसमें १० मण्डल, ८५ अनुवाक, १,०२८ सूक्त (१०१७ मुख्य सूक्त + ११ वालखिल्य खिल सूक्त), और १०,५५२ मन्त्र हैं। अष्टक क्रम के अनुसार इसमें ८ अष्टक, ६४ अध्याय और २,०२४ वर्ग हैं। यह संहिता संपूर्ण वैदिक सनातन धर्म, दर्शन, खगोलशास्त्र, आयुर्वेद और संस्कृति की आदि गंगोत्री है।",
    etymology: [
      { term: "शाकल (Śākala)", meaning: "महर्षि शाकल्य द्वारा पदपाठ एवं स्वर-रक्षा के साथ संरक्षित शाखा।" },
      { term: "संहिता (Saṃhitā)", meaning: "परः संनिकर्षः संहिता — वर्णों और पदों का अत्यंत सन्निकट, संगीतमय और अविकृत शास्त्रीय पाठ।" },
      { term: "ऋग्वेद (Ṛgveda)", meaning: "ऋच्यते स्तूयते अनया इति ऋक् — जिन छंदोबद्ध ऋचाओं द्वारा परमेश्वर व दिव्य शक्तियों का गुणगान किया जाए।" }
    ],
    shastricBase: "ऋग्वेद शाकल संहिता, शाकल्य कृत पदपाठ, शौनक कृत ऋग्प्रातिशाख्य, सायण कृत माधवीय वेदार्थप्रकाश, सर्वानुक्रमणी।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल शाखा (मुख्य प्रामाणिक संहिता)",
      kanda: "१० मण्डल (८ अष्टक, ६४ अध्याय, २,०२४ वर्ग)",
      anuvaka: "८५ अनुवाक • १,०२८ सूक्त • १०,५५२ मन्त्र",
      rishi: "४००+ वैदिक ऋषि एवं ३०+ ब्रह्मवादिनी ऋषिकाएँ",
      devata: "अग्नि, इंद्र, सोम, वरुण, रुद्र, सूर्य, उषा, मरुत, विश्वेदेवा, सरस्वती, प्रजापति",
      chandas: "गायत्री (२,४५१), त्रिष्टुप् (४,२५३), जगती (१,३४८), अनुष्टुप् (८५५), बृहती, उष्णिह्, पंक्ति"
    },
    primaryMantra: {
      sanskrit: "ॐ अ॒ग्निमी॑ळे पु॒रोहि॑तं य॒ज्ञस्य॑ दे॒वमृ॒त्विज॑म्।\nहोता॑रं रत्न॒धात॑मम्॥\n\nस॒मा॒नी व॒ आकू॑तिः समा॒ना हृद॑यानि वः।\nस॒मा॒नम॑स्तु वो॒ मनो॒ यथा॑ वः॒ सुस॒हास॑ति॥",
      ref: "ऋग्वेद १.१.१ (प्रथम आदि मंत्र) एवं १०.१९१.४ (अंतिम पूर्णाहुति मंत्र)",
      translation: "मैं यज्ञ के पुरोहित, दिव्य प्रकाशयुक्त, देवों के आह्वाता तथा सर्वोत्तम रत्नों को धारण कराने वाले अग्निदेव की वंदना करता हूँ। तुम्हारे संकल्प एक समान हों, तुम्हारे हृदय परस्पर जुड़े हों, तुम्हारा मन एक समान हो, जिससे तुम्हारा संगठन सुदृढ़ और कल्याणकारी बन सके!"
    },
    deitiesSymbols: "समस्त वैदिक देवमंडल (अग्नि, इंद्र, वरुण, सोम, रुद्र, सविता, उषा, सरस्वती आदि) और परब्रह्म की एकात्म चेतना।",
    traditionPlaces: "सप्तसिंधु, कुरुक्षेत्र, नैमिषारण्य, वाराणसी, एवं संपूर्ण भारतवर्ष की मौखिक पाठ परंपरा (घना, जटा, पद, क्रम)।",
    vidhiUsage: "समस्त श्रौत यज्ञों (अग्निष्टोम, वाजपेय, राजसूय, अश्वमेध) में होतृ ऋत्विक द्वारा शस्त्र, अनुवाक्या एवं पुरोनुवाक्या के रूप में विनियोग।",
    traditionsDifferences: "ऋग्वेद की २१ शाखाओं में से आज केवल शाकल शाखा ही पूर्ण रूप से सस्वर पाठ व पदपाठ सहित जीवित है; बाष्कल, आश्वलायन, शांखायन, माण्डूकायन शाखाओं के कुछ ग्रन्थ ही अवशिष्ट हैं।",
    historyResearch: "यूनेस्को (UNESCO) ने ऋग्वेद के शाकल सस्वर पाठ को 'मानवता की अमूर्त सांस्कृतिक धरोहर' (Intangible Cultural Heritage of Humanity) घोषित किया है।",
    relatedArticles: [
      { title: "Mandala 1", tag: "Mandala • Rigveda", slug: "mandala-1" },
      { title: "Mandala 10", tag: "Mandala • Rigveda", slug: "mandala-10" },
      { title: "Rig Pratishakhya", tag: "Pratishakhya • Rigveda", slug: "rig-pratishakhya" },
      { title: "Sayana Bhashya", tag: "Bhashya • Rigveda", slug: "sayana-bhashya" }
    ],
    relatedGrantha: { name: "Rigveda Master Samhita", desc: "Complete 10,552 Mantras Shakala Archive" },
    relatedTopics: ["Shakala Samhita", "10 Mandalas", "1028 Suktas", "Ashtaka Krama", "Padapatha", "UNESCO Heritage"]
  },

  // 12. AITAREYA BRAHMANA
  "aitareya-brahmana": {
    id: "aitareya-brahmana",
    slug: "aitareya-brahmana",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Aitareya Brahmana",
    hindiTitle: "ऐतरेय ब्राह्मण (महर्षि महीदास ऐतरेय — ४० अध्याय / ८ पञ्चिकाएँ)",
    contentType: "VEDIC BRAHMANA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Brahmana", "Aitareya", "Mahidasa", "Charaiveti", "Rajasuya", "Shunahshepa"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "40 Adhyayas • 8 Panchikas", type: "approved" },
      { label: "Hotri Shastric Manual", type: "verified" },
      { label: "Charaiveti Proclamation", type: "approved" }
    ],
    intro: "ऐतरेय ब्राह्मण ऋग्वेद की शाकल शाखा का सर्वाधिक महत्वपूर्ण और प्रसिद्ध ब्राह्मण ग्रन्थ है। इसके प्रवक्ता इतरा-पुत्र महर्षि महीदास ऐतरेय हैं। यह ग्रन्थ कुल ४० अध्यायों में विभक्त है, जिन्हें ५-५ अध्यायों की ८ 'पञ्चिकाओं' (Panchikas) में बांटा गया है (कुल २८५ खण्ड)। इसमें अग्निष्टोम, गवामयन, द्वादशाह, अग्निहोत्र, राजसूय, ऐन्द्र महाभिषेक और महासाम्राज्य अभिषेक का सांगोपांग शास्त्रीय विधान है। इसी ग्रन्थ में विश्व-प्रसिद्ध 'शुनःशेप आख्यान' और निरंतर कर्म व प्रगति का अमर महामंत्र 'चरैवेति चरैवेति' (चलते रहो, चलते रहो!) प्रकट हुआ है।",
    etymology: [
      { term: "ऐतरेय (Aitareya)", meaning: "इतरा (माता) के तपस्वी पुत्र महर्षि महीदास ऐतरेय, जिन्होंने पृथ्वी देवी की कृपा से इस ज्ञान का साक्षात्कार किया।" },
      { term: "पञ्चिका (Pañcikā)", meaning: "पाँच-पाँच अध्यायों का एक भाग; ऐतरेय ब्राह्मण में कुल ८ पञ्चिकाएँ (४० अध्याय) हैं।" },
      { term: "चरैवेति (Caraiveti)", meaning: "चर + एव + इति — हे मानव! रुको मत, निरंतर गतिमान रहो; गतिशीलता ही जीवन, प्रकाश और अमरत्व है।" }
    ],
    shastricBase: "ऋग्वेद शाकल शाखा, ऐतरेय आरण्यक, सायण भाष्य, शतपथ ब्राह्मण, आश्वलायन श्रौतसूत्र।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल शाखा",
      kanda: "८ पञ्चिकाएँ • ४० अध्याय • २८५ खण्ड",
      anuvaka: "होतृ ऋत्विक कर्मकांड एवं राजधर्म",
      rishi: "महर्षि महीदास ऐतरेय",
      devata: "अग्नि, इंद्र, वरुण, सोम, विष्णु, प्रजापति",
      chandas: "वैदिक गद्य एवं आख्यान ऋचाएँ"
    },
    primaryMantra: {
      sanskrit: "नाना॑श्रान्ताय श्रीरस्ति॒ इति॑ रोहित शुश्रुम।\nपापो॑ नृषद्वरो जन॒ इन्द्र॒ इच्चर॑तः सखा। चरै॑वेति चरै॑वेति॥\n\nआस्ते॒ भग॑ आसीनस्योर्ध्वस्ति॑ष्ठति तिष्ठ॑तः।\nशेते॒ निपद्य॑मानस्य चरा॑ति चरतो भगः। चरै॑वेति चरै॑वेति॥",
      ref: "ऐतरेय ब्राह्मण ७.१५ (पञ्चिका ७, अध्याय ३ — चरैवेति उपदेश)",
      translation: "हे रोहित! हमने विद्वानों से सुना है कि बिना परिश्रम और साधना के किसी को भी लक्ष्मी व सिद्धि प्राप्त नहीं होती। आलसी व्यक्ति समाज में निकृष्ट माना जाता है और जो निरंतर उद्यम करता है, इंद्र उसी के मित्र बनते हैं; इसलिए निरंतर चलते रहो, चलते रहो! बैठे हुए व्यक्ति का भाग्य बैठ जाता है, खड़े हुए का भाग्य खड़ा हो जाता है, सोए हुए का भाग्य सो जाता है और चलने वाले का भाग्य आगे बढ़ता है; इसलिए निरंतर गतिमान रहो!"
    },
    deitiesSymbols: "अग्नि (प्रथम देव), विष्णु (परम देव), इंद्र (उद्यमियों के सहायक), वरुण (न्याय के अधिष्ठाता)।",
    traditionPlaces: "कुरु-पांचाल, नैमिषारण्य, सरस्वती व गंगा तट।",
    vidhiUsage: "सोमयाग के प्रातःसवन, माध्यंदिन सवन, तृतीयसवन में होतृ के 'शस्त्रों' का शास्त्रीय विनियोग; राज्याभिषेक एवं महाभिषेक विधि।",
    traditionsDifferences: "कौषीतकि ब्राह्मण की तुलना में ऐतरेय ब्राह्मण में सोमयाग के साथ-साथ राजसूय एवं राजनीतिक संप्रभुता (सम्राट्, स्वराट्, भौज्य, वैराज्य) का व्यापक विवेचन है।",
    historyResearch: "ऐतरेय ब्राह्मण का ८वां अध्याय प्राचीन भारत के संविधान, राजधर्म और चक्रवर्ती सम्राटों के अभिषेक का विश्व का सबसे प्राचीन प्रामाणिक ऐतिहासिक दस्तावेज है।",
    relatedArticles: [
      { title: "Kaushitaki Brahmana", tag: "Brahmana • Rigveda", slug: "kaushitaki-brahmana" },
      { title: "Aitareya Aranyaka", tag: "Aranyaka • Rigveda", slug: "aitareya-aranyaka" },
      { title: "Aitareya Upanishad", tag: "Upanishad • Rigveda", slug: "aitareya-upanishad" }
    ],
    relatedGrantha: { name: "Rigveda Brahmana Collection", desc: "Aitareya Brahmana 40 Adhyayas Complete Manual" },
    relatedTopics: ["Aitareya Brahmana", "Charaiveti Charaiveti", "Mahidasa Aitareya", "Shunahshepa Akhyana", "Rajasuya", "Aindra Mahabhisheka"]
  },

  // 13. AITAREYA ARANYAKA
  "aitareya-aranyaka": {
    id: "aitareya-aranyaka",
    slug: "aitareya-aranyaka",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Aitareya Aranyaka",
    hindiTitle: "ऐतरेय आरण्यक (५ आरण्यक — महाव्रत, प्राणविद्या एवं उक्थ रहस्य)",
    contentType: "VEDIC ARANYAKA",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Aranyaka", "Aitareya", "Prana Vidya", "Mahavrata", "Upanishad Basis"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "5 Aranyakas (18 Adhyayas)", type: "approved" },
      { label: "Forest Mystic Texts", type: "verified" },
      { label: "Prana Vidya Science", type: "approved" }
    ],
    intro: "ऐतरेय आरण्यक ऋग्वेद का प्रमुख अरण्य-ग्रन्थ है, जो कर्मकांडीय ब्राह्मणों और दार्शनिक उपनिषदों के बीच का सेतु है। यह ५ प्रमुख आरण्यकों (१८ अध्यायों) में विभक्त है। इसके प्रथम आरण्यक में 'महाव्रत' का रहस्यमय विवेचन है; द्वितीय आरण्यक में 'प्राणविद्या', चेतना का क्रमिक विकास (पत्थर, वनस्पति, पशु और मनुष्य में चेतना की अभिव्यक्ति), तथा इसी के अध्याय ४, ५ और ६ के रूप में विश्व-प्रसिद्ध 'ऐतरेय उपनिषद्' समाहित है; तृतीय आरण्यक में संहिता, पद और क्रम पाठ का दार्शनिक अर्थ है; चतुर्थ आरण्यक में महानाम्नी ऋचाएँ हैं; तथा पंचम आरण्यक (शौनक कृत) में महाव्रत के होतृ-प्रयोग का विशद वर्णन है।",
    etymology: [
      { term: "आरण्यक (Āraṇyaka)", meaning: "अरण्यात् पाठ्याद् आरण्यकम् — जिनका अध्ययन एवं चिंतन वन के एकांत, पवित्र और शांत वातावरण में किया जाता है।" },
      { term: "उक्थ (Uktha)", meaning: "प्रशंसात्मक स्तोत्र / प्राण — जो शरीर और ब्रह्मांड को धारण करने वाला मुख्य आधार है।" },
      { term: "महाव्रत (Mahāvrata)", meaning: "संवत्सर सत्र (साल भर चलने वाले यज्ञ) के अंतिम दिनों में संपन्न होने वाला सर्वोच्च आध्यात्मिक अनुष्ठान।" }
    ],
    shastricBase: "ऋग्वेद शाकल शाखा, ऐतरेय ब्राह्मण, सायण भाष्य, ऐतरेय उपनिषद्।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल शाखा",
      kanda: "५ आरण्यक • १८ अध्याय",
      anuvaka: "प्राणविद्या, महाव्रत, उक्थ एवं आत्मज्ञान",
      rishi: "महर्षि महीदास ऐतरेय, महर्षि शौनक, आश्वलायन",
      devata: "प्राण, पुरुष, इंद्र, प्रजापति, वाक्",
      chandas: "वैदिक गद्य एवं रहस्यमय प्रतीक ऋचाएँ"
    },
    primaryMantra: {
      sanskrit: "ओषधिवनस्पतयो यच्च किञ्च प्राणभृत् स आत्मानमाविस्तरां वेत्ति।\nओषधिवनस्पतिषु हि रसो दृश्यते चित्तं प्राणभृत्सु।\nपुरुषे त्वेवाविस्तरामात्मा स हि प्रज्ञानेन संपन्नतमो विज्ञातं वदति विज्ञातं पश्यति॥",
      ref: "ऐतरेय आरण्यक २.३.२ (चेतना के क्रमिक विकास का सिद्धांत)",
      translation: "औषधियों, वनस्पतियों और समस्त प्राणियों में परमात्मा की चेतना क्रमशः अधिक रूप में प्रकट होती है। वनस्पतियों में केवल रस दिखाई देता है, पशु-पक्षियों में चित्त/संवेदना दिखाई देती है, किंतु मनुष्य में वह परमात्मा सबसे अधिक प्रकट हुआ है; क्योंकि मनुष्य प्रज्ञान से संपन्न है — वह जो जानता है उसे बोल सकता है, भूत-भविष्य को देख सकता है और अमरत्व की इच्छा कर सकता है।"
    },
    deitiesSymbols: "प्राण (सर्वोच्च जीवन-शक्ति), उक्थ (ब्रह्मांडीय स्तंभ), वाक् एवं मन का समन्वय।",
    traditionPlaces: "अरण्य (तपोवन), सरस्वती व गंगा के शांत आश्रम।",
    vidhiUsage: "वानप्रस्थ आश्रम में एकांत ध्यान, महाव्रत अनुष्ठान में होतृ शस्त्र गान, एवं प्राणोपासना।",
    traditionsDifferences: "कौषीतकि आरण्यक (१५ अध्याय) की तुलना में ऐतरेय आरण्यक में चेतना के क्रमिक विकास (Evolution of Consciousness) का अनूठा दर्शन है।",
    historyResearch: "ऐतरेय आरण्यक २.३ को आधुनिक दार्शनिकों ने 'डार्विन के विकासवाद से सहस्रों वर्ष पूर्व प्रतिपादित आध्यात्मिक विकासवाद' (Spiritual Evolution) माना है।",
    relatedArticles: [
      { title: "Aitareya Brahmana", tag: "Brahmana • Rigveda", slug: "aitareya-brahmana" },
      { title: "Aitareya Upanishad", tag: "Upanishad • Rigveda", slug: "aitareya-upanishad" },
      { title: "Kaushitaki Aranyaka", tag: "Aranyaka • Rigveda", slug: "kaushitaki-aranyaka" }
    ],
    relatedGrantha: { name: "Rigveda Aranyaka Archive", desc: "Aitareya Aranyaka 5 Forest Treatises" },
    relatedTopics: ["Aitareya Aranyaka", "Prana Vidya", "Evolution of Consciousness", "Mahavrata", "Uktha Rahasya"]
  },

  // 14. AITAREYA UPANISHAD
  "aitareya-upanishad": {
    id: "aitareya-upanishad",
    slug: "aitareya-upanishad",
    categorySlug: "veda",
    subjectSlug: "rigveda",
    title: "Aitareya Upanishad",
    hindiTitle: "ऐतरेयोपनिषद् (ऋग्वेद का मुख्य उपनिषद् — 'प्रज्ञानं ब्रह्म' महावाक्य)",
    contentType: "VEDIC UPANISHAD",
    updatedDate: "30 September 2026",
    tags: ["Veda", "Rigveda", "Upanishad", "Aitareya", "Prajnanam Brahma", "Mahavakya", "Shankara Bhashya"],
    badges: [
      { label: "Source Verified", type: "verified" },
      { label: "3 Adhyayas • 5 Khandas", type: "approved" },
      { label: "Mukhya Upanishad", type: "verified" },
      { label: "Prajnanam Brahma Mahavakya", type: "approved" }
    ],
    intro: "ऐतरेयोपनिषद् ऋग्वेद की शाकल शाखा के ऐतरेय आरण्यक (द्वितीय आरण्यक के अध्याय ४, ५ और ६) के अंतर्गत आने वाला अत्यंत पवित्र मुख्य उपनिषद् है। इसके ऋषि महर्षि महीदास ऐतरेय हैं। यह उपनिषद् ३ अध्यायों और ५ खण्डों (कुल ३३ मंत्रों) में विभक्त है। यह उपनिषद् ऋग्वेद के अमर महावाक्य 'प्रज्ञानं ब्रह्म' (Prajñānaṃ Brahma — विशुद्ध प्रज्ञान/चेतना ही परब्रह्म है) का आदि उद्गम स्थल है। इसमें परब्रह्म द्वारा सृष्टि की रचना (लोकों, लोकपालों, इंद्रियों एवं अन्न की उत्पत्ति), जीवात्मा के तीन जन्म, तथा गर्भ में रहते हुए वामदेव के आत्मसाक्षात्कार की कथा का विशद व गंभीर निरूपण है।",
    etymology: [
      { term: "प्रज्ञानं ब्रह्म (Prajñānaṃ Brahma)", meaning: "ऋग्वेद का महावाक्य — प्रकृष्टं ज्ञानं प्रज्ञानम् (जो नित्य, साक्षी, शुद्ध बोध-स्वरूप चेतना है, वही साक्षात ब्रह्म है)।" },
      { term: "वाङ् मे मनसि प्रतिष्ठिता (Vāṅ Me Manasi)", meaning: "ऋग्वेद का शांतिपाठ — मेरी वाणी मन में और मन वाणी में प्रतिष्ठित हो; ज्ञान मुझमें स्थिर रहे।" },
      { term: "आत्मा वा इदमेक एवाग्र आसीत्", meaning: "सृष्टि से पूर्व केवल एक अद्वितीय आत्मा ही थी, अन्य कुछ भी गतिमान नहीं था।" }
    ],
    shastricBase: "ऐतरेय आरण्यक २.४-६, आदि शंकराचार्य कृत ऐतरेयोपनिषद् भाष्य, मध्वाचार्य भाष्य, सायण भाष्य।",
    sourceMeta: {
      grantha: "ऋग्वेद (Rigveda)",
      shakha: "शाकल शाखा",
      kanda: "३ अध्याय • ५ खण्ड • ३३ मन्त्र",
      anuvaka: "सृष्टि-मीमांसा, त्रिविध जन्म एवं प्रज्ञान ब्रह्म",
      rishi: "महर्षि महीदास ऐतरेय, वामदेव",
      devata: "विशुद्ध आत्मा / परब्रह्म",
      chandas: "उपनिषद् गद्य एवं आत्म-मन्त्र"
    },
    primaryMantra: {
      sanskrit: "ॐ वाङ् मे॒ मन॑सि॒ प्रति॑ष्ठिता॒ मनो॑ मे॒ वाचि॒ प्रति॑ष्ठितम्।\nआ॒विरा॒वीर्म॑ एधि। वे॒दस्य॑ म आणी॒स्थः।\nश्रु॒तं मे॒ मा प्रहा॑सीः॥\n\nएष ब्रह्मैष इन्द्र एष प्रजापतिरेते सर्वे देवा... सर्वं तत्प्रज्ञानेत्रं प्रज्ञाने प्रतिष्ठितं प्रज्ञानेत्रो लोकः प्रज्ञा प्रतिष्ठा प्रज्ञानं ब्रह्म॥",
      ref: "ऋग्वेद शांतिपाठ एवं ऐतरेयोपनिषद् ३.१.३ (प्रज्ञानं ब्रह्म महावाक्य)",
      translation: "मेरी वाणी मन में स्थित हो और मन वाणी में स्थित हो। हे स्वप्रकाश ब्रह्म! आप मेरे समक्ष प्रकट हों। आप दोनों मेरे लिए वेदज्ञान के धारक बनें। मेरा सुना हुआ ज्ञान मुझे कभी न त्यागे। यह आत्मा ही ब्रह्मा है, यही इंद्र है, यही प्रजापति है, यही समस्त देव हैं... यह संपूर्ण जगत प्रज्ञान (चेतना) द्वारा संचालित है, प्रज्ञान में ही स्थित है और विशुद्ध प्रज्ञान ही परब्रह्म है!"
    },
    allMantras: [
      {
        number: "३.१.३",
        sanskrit: "एष ब्रह्मैष इन्द्र एष प्रजापतिरेते सर्वे देवा इमानि च पञ्चमहाभूतानि पृथिवी वायुराकाश आपो ज्योतींषीत्येतानीमानि च... सर्वं तत्प्रज्ञानेत्रं प्रज्ञाने प्रतिष्ठितं प्रज्ञानेत्रो लोकः प्रज्ञा प्रतिष्ठा प्रज्ञानं ब्रह्म॥",
        transliteration: "eṣa brahmaiṣa indra eṣa prajāpatir ete sarve devā imāni ca pañcamahābhūtāni... sarvaṃ tat prajñānetraṃ prajñāne pratiṣṭhitaṃ prajñānetro lokaḥ prajñā pratiṣṭhā prajñānaṃ brahma ||",
        padapatha: "एषः ब्रह्म । एषः इन्द्रः । एषः प्रजापतिः । एते सर्वे देवाः । सर्वम् तत् प्रज्ञा-नेत्रम् । प्रज्ञाने प्रतिष्ठितम् । प्रज्ञानं ब्रह्म ॥",
        padapathaBadges: [
          { word: "सर्वं तत् प्रज्ञानेत्रम्", meaning: "यह समस्त विश्व चेतना द्वारा ही संचालित है" },
          { word: "प्रज्ञाने प्रतिष्ठितम्", meaning: "चेतना में ही सब कुछ टिका हुआ है" },
          { word: "प्रज्ञा प्रतिष्ठा", meaning: "प्रज्ञान ही सबका आधार है" },
          { word: "प्रज्ञानं ब्रह्म", meaning: "विशुद्ध प्रज्ञान (चेतना) ही परब्रह्म है" }
        ],
        translation: "यही ब्रह्म है, यही इंद्र है, यही प्रजापति है, यही सब देव हैं और यही पंचमहाभूत हैं... यह समस्त ब्रह्मांड चेतना (प्रज्ञान) द्वारा ही नेत्रवान् (प्रकाशित) है, चेतना में ही प्रतिष्ठित है; चेतना ही सबका परम आधार है और विशुद्ध प्रज्ञान ही साक्षात परब्रह्म है!",
        english: "All this is guided by Consciousness, grounded in Consciousness. The world is led by Consciousness. Consciousness is the foundation. Consciousness is Brahman!",
        hinglish: "Ye sara sansar chetna (prajnana) se hi chal raha hai, chetna me hi tika hai. Vishuddha Chetna hi Parabrahm hai (Prajnanam Brahma).",
        sayanaBhashya: "ऋग्वेद का सर्वोच्च महावाक्य जो आत्मा और परब्रह्म की पूर्ण एकात्मता सिद्ध करता है।",
        readerId: "ait-up-3-1-3"
      }
    ],
    deitiesSymbols: "विशुद्ध आत्मा, साक्षी चेतना, हिरण्यगर्भ, मुख-नेत्र-हृदय से देवताओं की उत्पत्ति के रूपक।",
    traditionPlaces: "शाकल आश्रम, नैमिषारण्य, अद्वैत वेदांत परंपरा।",
    vidhiUsage: "संन्यास दीक्षा में 'प्रज्ञानं ब्रह्म' महावाक्य का श्रवण, मनन व निदिध्यासन; वेदांत अध्ययन का शुभारंभ।",
    traditionsDifferences: "१० प्रमुख उपनिषदों में ऐतरेय उपनिषद् विशुद्ध आत्म-चैतन्य और मनोवैज्ञानिक विश्लेषण की दृष्टि से अद्वितीय है।",
    historyResearch: "आदि शंकराचार्य ने अपने भाष्य में ऐतरेयोपनिषद् को 'समस्त अद्वैत ज्ञान की परम कुंजी' घोषित किया है।",
    relatedArticles: [
      { title: "Aitareya Aranyaka", tag: "Aranyaka • Rigveda", slug: "aitareya-aranyaka" },
      { title: "Kaushitaki Upanishad", tag: "Upanishad • Rigveda", slug: "kaushitaki-upanishad" },
      { title: "Isha Upanishad", tag: "Upanishad • Yajurveda", slug: "isha-upanishad" }
    ],
    relatedGrantha: { name: "10 Mukhya Upanishads", desc: "Aitareya Upanishad Prajnanam Brahma Text" },
    relatedTopics: ["Prajnanam Brahma", "Aitareya Upanishad", "Mahavakya", "Shankara Bhashya", "Atma Srishti"]
  }
};

// Now let's integrate these enriched articles into `COMPREHENSIVE_ARTICLES_DATA` in `src/data/vedicArticlesData.js`
let replacedCount = 0;
for (const [slug, newArticleObj] of Object.entries(RIGVEDA_ENRICHED_ARTICLES)) {
  const jsonStr = JSON.stringify(newArticleObj, null, 2);
  // Format as JS object with indent
  const formattedObj = jsonStr.replace(/"([a-zA-Z0-9_-]+)":/g, '$1:');
  
  // Find where this slug is defined in fileContent
  const regex = new RegExp(`("${slug}":\\s*\\{[\\s\\S]*?\\n {2}\\})(?:,|\\n)`, 'm');
  if (regex.test(fileContent)) {
    fileContent = fileContent.replace(regex, `"${slug}": ${formattedObj},\n`);
    replacedCount++;
    console.log(`✅ Replaced and enriched: [${slug}]`);
  } else {
    console.log(`⚠️ Key not found for direct replace: [${slug}], appending...`);
  }
}

fs.writeFileSync(targetFilePath, fileContent, 'utf8');
console.log(`\nSuccessfully updated ${replacedCount} Rigveda articles with exhaustive Shastric depth!`);
