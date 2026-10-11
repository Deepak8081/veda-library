// Comprehensive Authentic Category & Subject Datasets for Purana, Itihasa, Upanishad, and Darshana
// Built for Veda Library architecture matching the exact Veda standard:
// Categorized with quickInfo, structureCards, availableTexts, rishis, devatas, relatedGranthas, articles, and navTabs

export const PURANA_CATEGORY_DATA = {
  id: "purana",
  slug: "purana",
  name: "पुराण",
  enName: "The Puranas",
  eyebrow: "VEDA LIBRARY • PURANA KOSHA",
  description: "१८ महापुराण, १८ उपपुराण एवं पंच लक्षण—सनातन धर्म के इतिहास, दर्शन, भक्ति, सृष्टिविज्ञान और लोकसंस्कृति का अमर विश्वकोश।",
  detailedDescription: "ऋषि वेदव्यास द्वारा प्रणीत ४००,००० श्लोकों में संकलित १८ महापुराणों को त्रिगुण (सात्विक, राजस, तामस) एवं पंच-लक्षण (सर्ग, प्रतिसर्ग, वंश, मन्वन्तर, वंशानुचरित) के शास्त्रीय आधार पर व्यवस्थित किया गया है।",
  quickStats: "१८ महापुराण • १८ उपपुराण • ४,००,००० श्लोक",
  exploreBy: "Guna (Sattva/Rajas/Tamas) · Devata · Khanda · Pancha Lakshana · Upapurana",
  primaryCta: "Explore 18 Mahapuranas →",
  secondaryCta: "Read Pancha Lakshana →",
  introHeading: "पुराण — सनातन ज्ञान का विश्वकोश",
  introText: "पुरा नवं भवतीति पुराणम् — जो प्राचीन होकर भी नित्य नवीन रहे, वही पुराण है। वेद के गूढ़ दार्शनिक सत्यों को जन-साधारण के सुगम बोध हेतु कथाओं, रूपकों, इतिहास और भक्ति के माध्यम से प्रस्तुत करने वाले ग्रंथ पुराण कहलाते हैं।",
  structureHierarchy: [
    { level: "महापुराण / उपपुराण", en: "Purana Class", desc: "१८ महापुराण एवं १८ उपपुराण" },
    { level: "गुण विभाजन", en: "Guna Classification", desc: "सात्विक (विष्णु), राजस (ब्रह्मा/सूर्य), तामस (शिव)" },
    { level: "संहिता / खण्ड / अंश", en: "Division / Khanda", desc: "मुख्य संरचनात्मक खंड (उदा. १२ स्कंध, ६ अंश)" },
    { level: "अध्याय", en: "Adhyaya", desc: "विषयवार सर्ग व आख्यान" },
    { level: "श्लोक / स्तोत्र", en: "Shloka / Stotra", desc: "मूल अनुष्टुप श्लोक, स्तुति व संवाद" },
    { level: "पंच लक्षण", en: "Pancha Lakshana", desc: "सर्ग, प्रतिसर्ग, वंश, मन्वन्तर, वंशानुचरित" }
  ],
  subCategories: [
    {
      id: "brahma-purana",
      slug: "brahma-purana",
      name: "ब्रह्म पुराण",
      enName: "Brahma Purana",
      desc: "समस्त १८ महापुराणों में प्रथम (आदि पुराण)। सृष्टि उत्पत्ति, सूर्य उपासना, गौतमी (गोदावरी) तीर्थ महात्म्य।",
      stats: "२४५ अध्याय • १०,००० श्लोक",
      guna: "राजस",
      imageKey: "deity-brahma.jpg"
    },
    {
      id: "padma-purana",
      slug: "padma-purana",
      name: "पद्म पुराण",
      enName: "Padma Purana",
      desc: "द्वितीय विशालतम महापुराण। ६ विशाल खंड, पुष्कर तीर्थ, श्रीमद्भागवत महात्म्य, एकादशी व्रत व रामकथा।",
      stats: "६ खंड • ६५२ अध्याय • ५५,००० श्लोक",
      guna: "सात्विक",
      imageKey: "card-purana.jpg"
    },
    {
      id: "vishnu-purana",
      slug: "vishnu-purana",
      name: "विष्णु पुराण",
      enName: "Vishnu Purana",
      desc: "पराशर ऋषि द्वारा मैत्रेय को उपदिष्ट। पंचलक्षणों से पूर्ण, शुद्धाद्वैत व वैकुण्ठ तत्त्व का निरूपण।",
      stats: "६ अंश • १२६ अध्याय • २३,००० श्लोक",
      guna: "सात्विक",
      imageKey: "deity-vishnu.jpg"
    },
    {
      id: "shiva-purana",
      slug: "shiva-purana",
      name: "शिव पुराण",
      enName: "Shiva Purana",
      desc: "भगवान शिव के परब्रह्म स्वरूप, द्वादश ज्योतिर्लिंग, लिंगोद्भव एवं भस्म-रुद्राक्ष महिमा।",
      stats: "७ संहिताएँ • २४,००० श्लोक",
      guna: "तामस (शैवागम)",
      imageKey: "deity-shiva.jpg"
    },
    {
      id: "shrimad-bhagavata",
      slug: "shrimad-bhagavata",
      name: "श्रीमद्भागवत महापुराण",
      enName: "Srimad Bhagavata Purana",
      desc: "पुराणों का तिलक। शुकदेव-परीक्षित संवाद, १२ स्कंध, श्रीकृष्ण लीलामृत एवं रासपंचाध्यायी।",
      stats: "१२ स्कंध • ३३५ अध्याय • १८,००० श्लोक",
      guna: "सात्विक",
      imageKey: "card-sukta-purusha.jpg"
    },
    {
      id: "narada-purana",
      slug: "narada-purana",
      name: "नारद पुराण",
      enName: "Narada Purana",
      desc: "देवर्षि नारद द्वारा सनत्कुमारों को उपदिष्ट। १८ पुराणों की विषय अनुक्रमणिका, षडंग वेद एवं वैष्णव व्रत।",
      stats: "२ भाग • २०७ अध्याय • २५,००० श्लोक",
      guna: "सात्विक",
      imageKey: "card-samhita.jpg"
    },
    {
      id: "markandeya-purana",
      slug: "markandeya-purana",
      name: "मार्कण्डेय पुराण",
      enName: "Markandeya Purana",
      desc: "महर्षि मार्कण्डेय प्रणीत। विश्वप्रसिद्ध श्री दुर्गा सप्तशती (देवी महात्म्य - ७०० श्लोक) का मूल स्रोत।",
      stats: "१३७ अध्याय • ९,००० श्लोक",
      guna: "राजस",
      imageKey: "deity-durga.jpg"
    },
    {
      id: "agni-purana",
      slug: "agni-purana",
      name: "अग्नि पुराण",
      enName: "Agni Purana",
      desc: "भारतीय विद्याओं का महा-विश्वकोश। धनुर्वेद, आयुर्वेद, वास्तुशास्त्र, व्याकरण, छंद, अलंकार व राजनीति।",
      stats: "३८३ अध्याय • १५,४०० श्लोक",
      guna: "राजस",
      imageKey: "card-yagya-fire.jpg"
    },
    {
      id: "bhavishya-purana",
      slug: "bhavishya-purana",
      name: "भविष्य पुराण",
      enName: "Bhavishya Purana",
      desc: "भगवान सूर्यदेव की महिमा, भविष्य के ऐतिहासिक राजवंश, शाकद्वीपीय परंपरा एवं प्रतिसर्ग पर्व।",
      stats: "४ पर्व • ५०० अध्याय • १४,५०० श्लोक",
      guna: "राजस",
      imageKey: "card-astrology.jpg"
    },
    {
      id: "brahmavaivarta-purana",
      slug: "brahmavaivarta-purana",
      name: "ब्रह्मवैवर्त पुराण",
      enName: "Brahmavaivarta Purana",
      desc: "गोलोक धाम, श्रीकृष्ण-राधा नित्य रासलीला, पंचप्रकृति स्वरूप एवं श्रीगणेश प्राकट्य आख्यान।",
      stats: "४ खंड • २७६ अध्याय • १८,००० श्लोक",
      guna: "राजस",
      imageKey: "deity-lakshmi.jpg"
    },
    {
      id: "linga-purana",
      slug: "linga-purana",
      name: "लिंग पुराण",
      enName: "Linga Purana",
      desc: "भगवान शिव का लिंगोद्भव (अग्नि स्तंभ), २८ योगेश्वर अवतार, पंचाक्षर मंत्र (ॐ नमः शिवाय) साधना व पाशुपत योग।",
      stats: "२ भाग • १६३ अध्याय • ११,००० श्लोक",
      guna: "तामस",
      imageKey: "deity-shiva.jpg"
    },
    {
      id: "varaha-purana",
      slug: "varaha-purana",
      name: "वराह पुराण",
      enName: "Varaha Purana",
      desc: "भगवान वराह और पृथ्वी देवी संवाद। रसातल से धरा उद्धार, मथुरा तीर्थ महात्म्य एवं द्वादशी व्रत विधान।",
      stats: "२१८ अध्याय • २४,००० श्लोक",
      guna: "सात्विक",
      imageKey: "deity-dashavatara.jpg"
    },
    {
      id: "skanda-purana",
      slug: "skanda-purana",
      name: "स्कन्द पुराण",
      enName: "Skanda Purana",
      desc: "विशालतम महापुराण। काशी खंड, केदार खंड, प्रभास, रेवा एवं सत्यनारायण कथा का भंडार।",
      stats: "७ खंड • ८१,१०० श्लोक",
      guna: "तामस",
      imageKey: "card-grantha-shatapatha.jpg"
    },
    {
      id: "vamana-purana",
      slug: "vamana-purana",
      name: "वामन पुराण",
      enName: "Vamana Purana",
      desc: "भगवान वामन त्रिविक्रम अवतार, राजा बलि संवाद, कुरुक्षेत्र महात्म्य तथा शिव-विष्णु एकात्मता।",
      stats: "९५ अध्याय • १०,००० श्लोक",
      guna: "राजस",
      imageKey: "card-samhita.jpg"
    },
    {
      id: "kurma-purana",
      slug: "kurma-purana",
      name: "कूर्म पुराण",
      enName: "Kurma Purana",
      desc: "भगवान कूर्म अवतार, समुद्र मंथन, ईश्वर गीता (शिव तत्व), व्यास गीता एवं पाशुपत योग का समन्वय।",
      stats: "२ विभाग • ९९ अध्याय • १७,००० श्लोक",
      guna: "तामस",
      imageKey: "card-purana.jpg"
    },
    {
      id: "matsya-purana",
      slug: "matsya-purana",
      name: "मत्स्य पुराण",
      enName: "Matsya Purana",
      desc: "जलप्रलय में मनु-रक्षा, पुराणों के ५ लक्षण (मत्स्य ५३.६५), वास्तुशास्त्र, शिल्पकला एवं नर्मदा महात्म्य।",
      stats: "२९१ अध्याय • १४,००० श्लोक",
      guna: "तामस",
      imageKey: "card-vastu.jpg"
    },
    {
      id: "garuda-purana",
      slug: "garuda-purana",
      name: "गरुड़ पुराण",
      enName: "Garuda Purana",
      desc: "गरुड़-विष्णु संवाद। प्रेतकल्प, कर्म-विपाक, यमलोक मार्ग तथा आत्ममुक्ति का विवेचन।",
      stats: "पूर्व व उत्तर खंड • १९,००० श्लोक",
      guna: "सात्विक",
      imageKey: "card-samhita.jpg"
    },
    {
      id: "brahmanda-purana",
      slug: "brahmanda-purana",
      name: "ब्रह्माण्ड पुराण",
      enName: "Brahmanda Purana",
      desc: "हिरण्यगर्भ से ब्रह्मांड की उत्पत्ति, विश्वप्रसिद्ध श्री ललिता सहस्रनाम स्तोत्र, अध्यात्म रामायण व परशुराम चरित्र।",
      stats: "४ पाद • १५६ अध्याय • १२,००० श्लोक",
      guna: "राजस",
      imageKey: "card-purana.jpg"
    }
  ],
  topics: ["सर्ग", "प्रतिसर्ग", "मन्वन्तर", "अवतार", "द्वादश ज्योतिर्लिंग", "दुर्गा सप्तशती", "रासपंचाध्यायी", "कर्मविपाक", "भक्ति"],
  featuredKnowledge: [
    {
      id: "durga-saptashati",
      title: "श्री दुर्गा सप्तशती (देवी महात्म्य)",
      enTitle: "Durga Saptashati",
      type: "Stotra • Markandeya Purana",
      desc: "महिषासुरमर्दिनी एवं शुम्भ-निशुम्भ वध की ७०० दिव्य ऋचाओं का शाक्त महामंत्र कोष।",
      subjectSlug: "markandeya-purana",
      articleSlug: "durga-saptashati"
    },
    {
      id: "bhagavata-rasa",
      title: "श्रीमद्भागवत रासपंचाध्यायी",
      enTitle: "Rasa Panchadhyayi",
      type: "Kavya • Bhagavata 10th Skandha",
      desc: "जीवात्मा और परमात्मा के परम मिलन की पराकाष्ठा का गूढ़ दार्शनिक निरूपण।",
      subjectSlug: "shrimad-bhagavata",
      articleSlug: "rasa-panchadhyayi"
    }
  ],
  faqs: [
    {
      q: "महापुराण कितने हैं और उनका श्लोक परिमाण क्या है?",
      a: "पारंपरिक मान्यता के अनुसार १८ महापुराण हैं, जिनका सम्मिलित श्लोक परिमाण लगभग ४,००,००० (चार लाख) है। इनमें सबसे विशाल स्कन्द पुराण (८१,१०० श्लोक) है।"
    },
    {
      q: "पुराणों के पंच लक्षण कौन से हैं?",
      a: "सर्ग (सृष्टि उत्पत्ति), प्रतिसर्ग (प्रलय व पुनरुत्पत्ति), वंश (ऋषि-देव वंशावली), मन्वन्तर (मनुओं का कालचक्र), और वंशानुचरित (सूर्य व चन्द्रवंशी राजाओं का इतिहास)।"
    }
  ]
};

export const ITIHASA_CATEGORY_DATA = {
  id: "itihasa",
  slug: "itihasa",
  name: "इतिहास",
  enName: "The Itihasa",
  eyebrow: "VEDA LIBRARY • ITIHASA KOSHA",
  description: "वाल्मीकि रामायण, महाभारत एवं श्रीमद्भगवद्गीता—'इति ह आस' (निश्चय ही ऐसा घटित हुआ) सनातन धर्म के अमर महाकाव्य।",
  detailedDescription: "भगवान श्रीराम के मर्यादा पुरुषोत्तम स्वरूप और श्रीकृष्ण के धर्मसंस्थापन संदेश को समर्पित २४,००० श्लोकों की रामायण एवं १,००,००० श्लोकों का महाभारत (पंचम वेद)।",
  quickStats: "२ प्रमुख महाकाव्य • १,२४,००० श्लोक • श्रीमद्भगवद्गीता (७०० श्लोक)",
  exploreBy: "Kanda · Parva · Shloka · Maryada · Dharma · Geeta · Characters",
  primaryCta: "Explore Valmiki Ramayana →",
  secondaryCta: "Explore Mahabharata & Gita →",
  introHeading: "इतिहास — प्रत्यक्षार्थं प्रमाणम्",
  introText: "धर्मार्थकाममोक्षाणामुपदेशसमन्वितम्। पूर्ववृत्तकथायुक्तमितिहासं प्रचक्षते॥ इतिहास वह पावन ग्रंथ है जो धर्म, अर्थ, काम और मोक्ष—चारों पुरुषार्थों का आचरण-युक्त मार्गदर्शन प्रदान करता है।",
  structureHierarchy: [
    { level: "महाकाव्य", en: "Epic Corpus", desc: "वाल्मीकि रामायण (आदिकाव्य) एवं महाभारत (पंचम वेद)" },
    { level: "काण्ड / पर्व", en: "Kanda / Parva", desc: "रामायण के ७ काण्ड, महाभारत के १८ पर्व + हरिवंश" },
    { level: "सर्ग / अध्याय", en: "Sarga / Adhyaya", desc: "रामायण के ५०० सर्ग, महाभारत के २०००+ अध्याय" },
    { level: "श्लोक", en: "Shloka", desc: "अनुष्टुप छंद श्लोक एवं दिव्य संवाद" },
    { level: "रत्न ग्रंथ", en: "Philosophical Jewels", desc: "भगवद्गीता, विष्णु सहस्रनाम, विदुर नीति, यक्ष प्रश्न, आदित्य हृदय" }
  ],
  subCategories: [
    {
      id: "valmiki-ramayana",
      slug: "valmiki-ramayana",
      name: "वाल्मीकि रामायण",
      enName: "Valmiki Ramayana",
      desc: "आदिकवि महर्षि वाल्मीकि प्रणीत आदिकाव्य। श्रीराम का धर्ममय जीवन व मर्यादा पुरुषोत्तम आदर्श।",
      stats: "७ काण्ड • ५०० सर्ग • २४,००० श्लोक",
      imageKey: "card-ramayana.jpg"
    },
    {
      id: "mahabharata",
      slug: "mahabharata",
      name: "महाभारत",
      enName: "Mahabharata",
      desc: "महर्षि वेदव्यास प्रणीत शतसाहस्री संहिता (पंचम वेद)। यतो धर्मस्ततो जयः।",
      stats: "१८ पर्व • हरिवंश • १,००,००० श्लोक",
      imageKey: "card-mahabharata.jpg"
    },
    {
      id: "bhagavad-gita",
      slug: "bhagavad-gita",
      name: "श्रीमद्भगवद्गीता",
      enName: "Srimad Bhagavad Gita",
      desc: "महाभारत भीष्मपर्व (२५-४२)। कुरुक्षेत्र में श्रीकृष्ण द्वारा अर्जुन को दिया गया निष्काम कर्मयोग व मोक्ष उपदेश।",
      stats: "१८ अध्याय • ७०० श्लोक",
      imageKey: "card-gita.jpg"
    }
  ],
  topics: ["मर्यादा पुरुषोत्तम", "कर्मयोग", "भक्तियोग", "ज्ञानयोग", "यतो धर्मस्ततो जयः", "विदुर नीति", "यक्ष प्रश्न", "आदित्य हृदय स्तोत्र"],
  featuredKnowledge: [
    {
      id: "bhagavad-gita-karmayoga",
      title: "श्रीमद्भगवद्गीता — निष्काम कर्मयोग",
      enTitle: "Gita - Nishkama Karma Yoga",
      type: "Upadesha • Mahabharata Bhishma Parva",
      desc: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन — कर्तव्यनिष्ठा एवं अनासक्ति का वैश्विक दर्शन।",
      subjectSlug: "bhagavad-gita",
      articleSlug: "karmayoga"
    },
    {
      id: "aditya-hridaya",
      title: "आदित्य हृदय स्तोत्र",
      enTitle: "Aditya Hridaya Stotram",
      type: "Stotra • Ramayana Yuddha Kanda",
      desc: "अगस्त्य ऋषि द्वारा श्रीराम को रावण वध हेतु प्रदत्त महाप्रतापी सूर्य स्तोत्र।",
      subjectSlug: "valmiki-ramayana",
      articleSlug: "aditya-hridaya"
    }
  ],
  faqs: [
    {
      q: "वाल्मीकि रामायण में गायत्री मंत्र का क्या संबंध है?",
      a: "वाल्मीकि रामायण के प्रत्येक १,००० श्लोक के प्रारंभ में गायत्री मंत्र का एक-एक अक्षर आता है। इस प्रकार २४,००० श्लोकों में संपूर्ण २४ अक्षरों का गायत्री बीज समाहित है।"
    },
    {
      q: "महाभारत के प्रमुख दार्शनिक अंग कौन से हैं?",
      a: "श्रीमद्भगवद्गीता (भीष्म पर्व), श्री विष्णु सहस्रनाम (अनुशासन पर्व), सनत्सुजातीय व विदुर नीति (उद्योग पर्व), और यक्ष प्रश्न (वन पर्व)।"
    }
  ]
};

export const UPANISHAD_EXPANDED_CATEGORY_DATA = {
  id: "upanishad",
  slug: "upanishad",
  name: "उपनिषद",
  enName: "The Upanishads",
  eyebrow: "VEDA LIBRARY • VEDANTA JNANA KANDA",
  description: "ईश, केन, कठ, प्रश्न, मुण्डक, माण्डूक्य, तैत्तिरीय, ऐतरेय, छान्दोग्य, बृहदारण्यक—वेदों का सर्वोच्च ज्ञानकांड एवं प्रस्थानत्रयी का मूल।",
  detailedDescription: "उप-नि-षद् अर्थात् गुरु के सन्निकट बैठकर अविद्या के नाश एवं ब्रह्मविद्या की प्राप्ति का मार्ग। आदि शंकराचार्य भाष्य सम्मत १० मुख्य उपनिषद एवं मुक्तिका १०८ उपनिषद परंपरा।",
  quickStats: "१०८ उपनिषद • १० प्रधान उपनिषद • ४ महावाक्य",
  exploreBy: "Upanishad · Veda Shakha · Shanti Mantra · Mahavakya · Bhashya",
  primaryCta: "Explore Principal Upanishads →",
  secondaryCta: "Contemplate 4 Mahavakyas →",
  introHeading: "उपनिषद — वेदों का मुकुटमणि",
  introText: "उपनिषद वेदों के ज्ञानकांड का प्रतिपादन करते हैं। यह कर्मकांड से परे आत्मा, ब्रह्म, मोक्ष और परमार्थ सत्य के साक्षात्कार की विशुद्ध पराविद्या है।",
  structureHierarchy: [
    { level: "वेद एवं शाखा", en: "Veda & Recension", desc: "ऋक्, यजुष् (शुक्ल/कृष्ण), साम, अथर्व शाखा संबद्धता" },
    { level: "उपनिषद", en: "Upanishad", desc: "दशोपनिषद एवं मुक्तिका परंपरा के १०८ उपनिषद" },
    { level: "शांति मंत्र", en: "Shanti Mantra", desc: "प्रारंभिक एवं समापन मंगलाचरण (पूर्णमदः, सह नाववतु)" },
    { level: "अध्याय / प्रपाठक / वल्ली", en: "Chapter / Valli", desc: "प्रमुख विभाजन" },
    { level: "खंड / मंत्र", en: "Section / Mantra", desc: "संवादात्मक दार्शनिक ऋचाएँ" },
    { level: "महावाक्य", en: "Mahavakya", desc: "प्रज्ञानं ब्रह्म, अहं ब्रह्मास्मि, तत्त्वमसि, अयमात्मा ब्रह्म" }
  ],
  subCategories: [
    {
      id: "isha-upanishad",
      slug: "isha-upanishad",
      name: "ईशावास्योपनिषद्",
      enName: "Isha Upanishad",
      desc: "शुक्ल यजुर्वेद वाजसनेयि संहिता ४०वाँ अध्याय। 'ईशावास्यमिदं सर्वं' — त्यागपूर्वक भोग का अमृत संदेश।",
      stats: "१८ मंत्र • शुक्ल यजुर्वेद",
      imageKey: "card-grantha-isha.jpg"
    },
    {
      id: "kena-upanishad",
      slug: "kena-upanishad",
      name: "केनोपनिषद्",
      enName: "Kena Upanishad",
      desc: "सामवेद तलवकार शाखा। ४ खंड, ३४ मंत्र — 'केनेषितं पतति प्रेषितं मनः' तथा देवताओं का दर्प भंजक यक्षोपाख्यान।",
      stats: "४ खंड • ३४ मंत्र • सामवेद",
      imageKey: "card-grantha-chandogya.jpg"
    },
    {
      id: "katha-upanishad",
      slug: "katha-upanishad",
      name: "कठोपनिषद्",
      enName: "Katha Upanishad",
      desc: "कृष्ण यजुर्वेद काठक शाखा। यम-नचिकेता संवाद, रथ रूपक तथा श्रेयस्-प्रेयस् का विवेचन।",
      stats: "२ अध्याय • ६ वल्ली • ११९ मंत्र",
      imageKey: "card-grantha-katha.jpg"
    },
    {
      id: "prashna-upanishad",
      slug: "prashna-upanishad",
      name: "प्रश्नोपनिषद्",
      enName: "Prashna Upanishad",
      desc: "अथर्ववेद पिप्पलाद शाखा। ६ मुनियों के ६ गहन आध्यात्मिक प्रश्न, रयि-प्राण व षोडशकल पुरुष।",
      stats: "६ प्रश्न • ६७ मंत्र • अथर्ववेद",
      imageKey: "card-grantha-mandukya.jpg"
    },
    {
      id: "mundaka-upanishad",
      slug: "mundaka-upanishad",
      name: "मुण्डकोपनिषद्",
      enName: "Mundaka Upanishad",
      desc: "अथर्ववेद शौनक शाखा। परा व अपरा विद्या, दो पक्षियों का रूपक, 'सत्यमेव जयते नानृतम्'।",
      stats: "३ मुण्डक • ६ खंड • ६४ मंत्र",
      imageKey: "card-grantha-mundaka.jpg"
    },
    {
      id: "mandukya-upanishad",
      slug: "mandukya-upanishad",
      name: "माण्डूक्योपनिषद्",
      enName: "Mandukya Upanishad",
      desc: "अथर्ववेद। ॐकार की ४ मात्राएँ (अ, उ, म, अमात्र) और चेतना की ४ अवस्थाएँ (जाग्रत, स्वप्न, सुषुप्ति, तुरीय)।",
      stats: "१२ मंत्र • 'अयमात्मा ब्रह्म'",
      imageKey: "card-grantha-mandukya.jpg"
    },
    {
      id: "taittiriya-upanishad",
      slug: "taittiriya-upanishad",
      name: "तैत्तिरीयोपनिषद्",
      enName: "Taittiriya Upanishad",
      desc: "कृष्ण यजुर्वेद। ३ वल्लियाँ (शीक्षा, ब्रह्मानन्द, भृगु), 'सत्यं वद धर्मं चर', पंचकोश विवेक व आनंद मीमांसा।",
      stats: "३ वल्लियाँ • ३१ अनुवाक • यजुर्वेद",
      imageKey: "card-grantha-katha.jpg"
    },
    {
      id: "aitareya-upanishad",
      slug: "aitareya-upanishad",
      name: "ऐतरेयोपनिषद्",
      enName: "Aitareya Upanishad",
      desc: "ऋग्वेद ऐतरेय आरण्यक। सृष्टि उत्पत्ति, जीव के तीन जन्म, तथा महावाक्य 'प्रज्ञानं ब्रह्म'।",
      stats: "३ अध्याय • ५ खंड • ३३ मंत्र",
      imageKey: "card-grantha-aitareya.jpg"
    },
    {
      id: "chandogya-upanishad",
      slug: "chandogya-upanishad",
      name: "छान्दोग्योपनिषद्",
      enName: "Chandogya Upanishad",
      desc: "सामवेद कौथुम शाखा। उद्दालक-श्वेतकेतु संवाद, 'तत्त्वमसि' महावाक्य, शांडिल्य विद्या, दहर विद्या।",
      stats: "८ प्रपाठक • सामवेद",
      imageKey: "card-grantha-chandogya.jpg"
    },
    {
      id: "brihadaranyaka-upanishad",
      slug: "brihadaranyaka-upanishad",
      name: "बृहदारण्यकोपनिषद्",
      enName: "Brihadaranyaka Upanishad",
      desc: "शुक्ल यजुर्वेद शतपथ ब्राह्मण। महर्षि याज्ञवल्क्य-मैत्रेयी संवाद, गार्गी संवाद, 'अहं ब्रह्मास्मि', नेति-नेति।",
      stats: "६ अध्याय • ४७ ब्राह्मण",
      imageKey: "card-grantha-brihadaranyaka.jpg"
    },
    {
      id: "shvetashvatara-upanishad",
      slug: "shvetashvatara-upanishad",
      name: "श्वेताश्वतरोपनिषद्",
      enName: "Shvetashvatara Upanishad",
      desc: "कृष्ण यजुर्वेद। सांख्य, योग, अद्वैत एवं देवाधिदेव रुद्र की पराभक्ति ('यस्य देवे परा भक्तिः')।",
      stats: "६ अध्याय • ११३ मंत्र • यजुर्वेद",
      imageKey: "deity-shiva.jpg"
    }
  ],
  topics: ["ब्रह्मविद्या", "आत्मन्", "महावाक्य", "तुरीय अवस्था", "रथ रूपक", "सत्यमेव जयते", "नेति नेति", "पञ्चकोश", "श्रेयस्-प्रेयस्"],
  featuredKnowledge: [
    {
      id: "tat-tvam-asi",
      title: "तत्त्वमसि (Thou Art That)",
      enTitle: "Tat Tvam Asi",
      type: "Mahavakya • Chandogya Upanishad",
      desc: "सामवेद छान्दोग्य ६.८.७ — जीव और परब्रह्म की तात्विक एकात्मता का अमर उद्घोष।",
      subjectSlug: "chandogya-upanishad",
      articleSlug: "tat-tvam-asi"
    },
    {
      id: "chariot-allegory",
      title: "कठोपनिषद् — रथ रूपक",
      enTitle: "Katha Upanishad - Chariot Metaphor",
      type: "Allegory • Katha Upanishad 1.3",
      desc: "आत्मानं रथिनं विद्धि शरीरं रथमेव तु — बुद्धि सारथी, मन लगाम और इंद्रियाँ घोड़े हैं।",
      subjectSlug: "katha-upanishad",
      articleSlug: "chariot-allegory"
    }
  ],
  faqs: [
    {
      q: "चार वेदों के चार महावाक्य कौन से हैं?",
      a: "१. प्रज्ञानं ब्रह्म (ऋग्वेद / ऐतरेय), २. अहं ब्रह्मास्मि (यजुर्वेद / बृहदारण्यक), ३. तत्त्वमसि (सामवेद / छान्दोग्य), ४. अयमात्मा ब्रह्म (अथर्ववेद / माण्डूक्य)।"
    },
    {
      q: "दशोपनिषद कौन से हैं?",
      a: "ईश, केन, कठ, प्रश्न, मुण्डक, माण्डूक्य, तैत्तिरीय, ऐतरेय, छान्दोग्य और बृहदारण्यक (साथ ही श्वेताश्वतर को एकादश माना जाता है)।"
    }
  ]
};

export const DARSHANA_EXPANDED_CATEGORY_DATA = {
  id: "darshana",
  slug: "darshana",
  name: "दर्शन शास्त्र",
  enName: "Shad Darshana (The Six Systems)",
  eyebrow: "VEDA LIBRARY • SHAD DARSHANA KOSHA",
  description: "सांख्य, योग, न्याय, वैशेषिक, मीमांसा और वेदांत—भारतीय ज्ञानमीमांसा एवं आस्तिक दर्शन की छह युगल शाखाएँ।",
  detailedDescription: "महर्षि कपिल, पतंजलि, गौतम, कणाद, जैमिनि और बादरायण व्यास प्रणीत सूत्र ग्रंथ एवं उनके अमर भाष्यकार (शंकराचार्य, रामानुज, वाचस्पति मिश्र, व्यासदेव)।",
  quickStats: "६ आस्तिक दर्शन • ३ दार्शनिक युगल • प्रस्थानत्रयी",
  exploreBy: "Darshana · Rishi Founder · Sutra · Pramana · Tattva · Moksha",
  primaryCta: "Explore Six Astika Systems →",
  secondaryCta: "Read Patanjali Yoga Sutras →",
  introHeading: "षड्दर्शन — सत्य साक्षात्कार की दृष्टियाँ",
  introText: "दृश्यते यथार्थतत्त्वम् अनेन इति दर्शनम् — जिसके द्वारा यथार्थ सत्य का अपरोक्ष साक्षात्कार किया जा सके, उसे दर्शन कहते हैं। वेद के प्रामाण्य को स्वीकार करने वाले छह आस्तिक दर्शन परस्पर पूरक पद्धतियाँ हैं।",
  structureHierarchy: [
    { level: "दर्शन धारा", en: "System Pair", desc: "न्याय-वैशेषिक, सांख्य-योग, मीमांसा-वेदांत" },
    { level: "मूल सूत्र / कारिका", en: "Root Sutra / Text", desc: "योगसूत्र, सांख्यकारिका, न्यायसूत्र, ब्रह्मसूत्र" },
    { level: "पाद / अध्याय", en: "Pada / Chapter", desc: "४ पाद, ५ अध्याय, १६ पदार्थ" },
    { level: "प्रमाण विचार", en: "Epistemology", desc: "प्रत्यक्ष, अनुमान, उपमान, शब्द, अर्थापत्ति, अनुपलब्धि" },
    { level: "तत्व मीमांसा", en: "Metaphysics", desc: "प्रकृति-पुरुष (२५ तत्व), परमाणुवाद, विवर्तवाद" }
  ],
  subCategories: [
    {
      id: "yoga",
      slug: "yoga",
      name: "योग दर्शन",
      enName: "Yoga Darshana",
      desc: "महर्षि पतंजलि प्रणीत योगसूत्र। 'योगश्चित्तवृत्तिनिरोधः' — अष्टांग योग, क्रिया योग व कैवल्य।",
      stats: "४ पाद • १९६ सूत्र",
      imageKey: "card-aranyaka.jpg"
    },
    {
      id: "samkhya",
      slug: "samkhya",
      name: "सांख्य दर्शन",
      enName: "Samkhya Darshana",
      desc: "महर्षि कपिल प्रणीत सांख्यकारिका (ईश्वरकृष्ण)। २५ तत्व, त्रिगुण सिद्धांत एवं सत्कार्यवाद।",
      stats: "२५ तत्व • ७२ कारिकाएँ",
      imageKey: "card-samhita.jpg"
    },
    {
      id: "nyaya",
      slug: "nyaya",
      name: "न्याय दर्शन",
      enName: "Nyaya Darshana",
      desc: "महर्षि अक्षपाद गौतम प्रणीत न्यायसूत्र। १६ पदार्थ, ४ प्रमाण, पञ्चावयव अनुमान एवं तर्कविद्या।",
      stats: "५ अध्याय • १६ पदार्थ",
      imageKey: "card-vyakarana.jpg"
    },
    {
      id: "vaisheshika",
      slug: "vaisheshika",
      name: "वैशेषिक दर्शन",
      enName: "Vaisheshika Darshana",
      desc: "महर्षि कणाद प्रणीत वैशेषिक सूत्र। परमाणुवाद (पदार्थ विज्ञान) एवं ७ पदार्थ (द्रव्य, गुण, कर्म आदि)।",
      stats: "१० अध्याय • ७ पदार्थ",
      imageKey: "card-shiksha.jpg"
    },
    {
      id: "mimamsa",
      slug: "mimamsa",
      name: "मीमांसा दर्शन (पूर्व मीमांसा)",
      enName: "Mimamsa Darshana",
      desc: "महर्षि जैमिनि प्रणीत मीमांसा सूत्र। धर्म-जिज्ञासा, वैदिक कर्मकांड एवं वाक्य-अर्थ व्याख्या।",
      stats: "१२ अध्याय • अपूर्व सिद्धांत",
      imageKey: "card-kalpa.jpg"
    },
    {
      id: "vedanta",
      slug: "vedanta",
      name: "वेदांत दर्शन (उत्तर मीमांसा)",
      enName: "Vedanta Darshana",
      desc: "महर्षि बादरायण व्यास प्रणीत ब्रह्मसूत्र। अद्वैत, विशिष्टाद्वैत, द्वैत व प्रस्थानत्रयी।",
      stats: "४ अध्याय • ५५५ सूत्र",
      imageKey: "card-upanishad.jpg"
    }
  ],
  topics: ["चित्तवृत्ति निरोध", "अष्टांग योग", "२५ तत्व", "त्रिगुण", "पञ्चावयव अनुमान", "परमाणुवाद", "अपूर्व", "ब्रह्मसूत्र", "मायावाद"],
  featuredKnowledge: [
    {
      id: "ashtanga-yoga",
      title: "महर्षि पतंजलि का अष्टांग योग",
      enTitle: "Ashtanga Yoga System",
      type: "Sadhana • Yoga Sutras 2.29",
      desc: "यम, नियम, आसन, प्राणायाम, प्रत्याहार, धारणा, ध्यान, समाधि — आत्मसाक्षात्कार के ८ अंग।",
      subjectSlug: "yoga",
      articleSlug: "ashtanga-yoga"
    },
    {
      id: "brahma-satyam",
      title: "अद्वैत वेदांत — 'ब्रह्म सत्यं जगन्मिथ्या'",
      enTitle: "Advaita Vedanta Philosophy",
      type: "Tattva • Adi Shankaracharya",
      desc: "ब्रह्म सत्यं जगन्मिथ्या जीवो ब्रह्मैव नापरः — एकत्व एवं आत्म-साक्षात्कार का परम सिद्धांत।",
      subjectSlug: "vedanta",
      articleSlug: "advaita-vedanta"
    }
  ],
  faqs: [
    {
      q: "षड्दर्शनों के तीन युगल कौन से हैं?",
      a: "१. न्याय और वैशेषिक (तर्क व पदार्थशास्त्र), २. सांख्य और योग (तत्वज्ञान व व्यावहारिक साधना), ३. पूर्व मीमांसा और उत्तर मीमांसा/वेदांत (कर्मकांड व ब्रह्मज्ञान)।"
    },
    {
      q: "प्रस्थानत्रयी किसे कहते हैं?",
      a: "वेदांत दर्शन के तीन आधारभूत प्रस्थान: १. उपनिषद (श्रुति प्रस्थान), २. श्रीमद्भगवद्गीता (स्मृति प्रस्थान), ३. ब्रह्मसूत्र (न्याय प्रस्थान)।"
    }
  ]
};

// ========================================================
// DEEP SUBJECTS DATA MATCHING EXACT VEDA STRUCTURE
// ========================================================
export const GRANTHA_SUBJECTS_DATA = {
  // ----------------------------------------------------
  // PURANA SUBJECTS
  // ----------------------------------------------------
  "purana/vishnu-purana": {
    categorySlug: "purana",
    subjectSlug: "vishnu-purana",
    name: "विष्णु पुराण",
    enName: "Vishnu Purana",
    eyebrow: "पुराण • सात्विक महापुराण",
    intro: "विष्णु पुराण महर्षि पराशर द्वारा अपने शिष्य मैत्रेय को उपदिष्ट सर्वाधिक प्रामाणिक एवं व्यवस्थित महापुराण है। यह पंचलक्षणों से परिपूर्ण तथा वैष्णव दर्शन का आधार स्तंभ है।",
    quickInfo: {
      type: "महापुराण (सात्विक)",
      language: "संस्कृत (अनुष्टुप)",
      author: "महर्षि पराशर",
      shlokaCount: "२३,००० श्लोक",
      division: "६ अंश (१२६ अध्याय)",
      presidingDeity: "भगवान श्रीमन नारायण / विष्णु",
      chiefCharacters: "ध्रुव, प्रह्लाद, भरत, श्रीकृष्ण"
    },
    navTabs: ["Overview", "Structure", "Texts", "Rishi & Devata", "Articles", "Related Granthas"],
    overviewText: "विष्णु पुराण को पुराण साहित्य का 'माणिक्य' कहा जाता है। इसमें छह अंशों में संपूर्ण ब्रह्मांड की उत्पत्ति (सर्ग), लय (प्रतिसर्ग), ध्रुव व प्रह्लाद की अनन्य भक्ति गाथा, जड़भरत का आत्मज्ञान उपदेश, मन्वन्तर, सूर्य-चन्द्र वंश और भगवान श्रीकृष्ण के दिव्य चरित्र का विशद वर्णन है।",
    structureCards: [
      { num: "६", title: "अंश", desc: "६ प्रमुख विभाग (प्रथम से षष्ठ अंश)" },
      { num: "१२६", title: "अध्याय", desc: "सर्ग, भक्ति, वंश व योग पर केंद्रित" },
      { num: "२३,०००", title: "श्लोक", desc: "शुद्ध दार्शनिक अनुष्टुप श्लोक" }
    ],
    availableTexts: [
      { title: "प्रथम अंश — सृष्टि उत्पत्ति व ध्रुव चरित्र", desc: "२२ अध्याय • ब्रह्मांडीय सृष्टि, वराह अवतार, ध्रुव की तपस्या व स्तुति", slug: "amsha-1" },
      { title: "द्वितीय अंश — भुवनकोश व भरत चरित्र", desc: "१६ अध्याय • सात द्वीप, पाताल, नरक, सूर्य गति व जड़भरत आख्यान", slug: "amsha-2" },
      { title: "तृतीय अंश — मन्वन्तर व वर्णाश्रम धर्म", desc: "१८ अध्याय • १४ मन्वन्तर, वेद व्यास विभाजन, सदाचार व श्राद्ध विधि", slug: "amsha-3" },
      { title: "चतुर्थ अंश — सूर्य व चन्द्र वंश", desc: "२४ अध्याय • इक्ष्वाकु वंश, पुरूरवा, यदु वंश व भावी कलियुग राजा", slug: "amsha-4" },
      { title: "पंचम अंश — श्रीकृष्ण चरित्र (लीलामृत)", desc: "३८ अध्याय • गोकुल-वृंदावन लीला, कंस वध, द्वारका व महाभारत प्रसंग", slug: "amsha-5" },
      { title: "षष्ठ अंश — कलिधर्म, प्रलय व योग", desc: "८ अध्याय • कलियुग लक्षण, त्रिविध दुःख, नैमित्तिक-प्राकृत प्रलय व योग", slug: "amsha-6" }
    ],
    rishis: ["महर्षि पराशर (प्रवक्ता)", "ऋषि मैत्रेय (श्रोता)", "महर्षि वसिष्ठ", "जड़भरत", "ऋभु व निदाघ"],
    devatas: ["श्रीमन नारायण", "महाविष्णु", "श्रीकृष्ण", "महालक्ष्मी"],
    articles: [
      { id: "prahlada-bhakti", title: "विष्णु पुराण में प्रह्लाद की अनन्य भक्ति", desc: "नारद उपदेश, नृसिंह प्राकट्य और अद्वैत शरणागति का स्वरूप।", slug: "prahlada-bhakti" },
      { id: "jadabharata-tattva", title: "जड़भरत का सौवीर नरेश को आत्मज्ञान", desc: "देह और आत्मा के भेद का दार्शनिक संवाद।", slug: "jadabharata-tattva" }
    ],
    relatedGranthas: [
      { name: "श्रीमद्भागवत महापुराण", type: "महापुराण", author: "महर्षि वेदव्यास", slug: "shrimad-bhagavata" },
      { name: "पद्म पुराण", type: "महापुराण", author: "महर्षि वेदव्यास", slug: "padma-purana" }
    ],
    relatedSubjects: [
      { name: "श्रीमद्भागवत महापुराण", slug: "shrimad-bhagavata", desc: "१२ स्कंध, श्रीकृष्ण लीलामृत" },
      { name: "शिव पुराण", slug: "shiva-purana", desc: "७ संहिताएँ, द्वादश ज्योतिर्लिंग" }
    ]
  },

  "purana/shrimad-bhagavata": {
    categorySlug: "purana",
    subjectSlug: "shrimad-bhagavata",
    name: "श्रीमद्भागवत महापुराण",
    enName: "Srimad Bhagavata Purana",
    eyebrow: "पुराण • अमलमहापुराण",
    intro: "श्रीमद्भागवत महापुराण समस्त वैदिक वाङ्मय का परिपक्व फल (निगमकल्पतरोर्गलितं फलम्) माना जाता है। शुकदेव जी द्वारा राजा परीक्षित को गंगा तट पर सुनाया गया यह ग्रंथ प्रेमाभक्ति और परमहंस संहिता है।",
    quickInfo: {
      type: "महापुराण (सात्विक मुकुटमणि)",
      language: "संस्कृत",
      author: "महर्षि वेदव्यास / शुकदेव जी",
      shlokaCount: "१८,००० श्लोक",
      division: "१२ स्कंध (३३५ अध्याय)",
      presidingDeity: "भगवान श्रीकृष्ण (परब्रह्म)",
      chiefListeners: "राजा परीक्षित, शौनक आदि ८८,००० ऋषि"
    },
    navTabs: ["Overview", "Structure", "12 Skandhas", "Rishi & Devata", "Articles", "Related Granthas"],
    overviewText: "भागवत में १२ स्कंधों के रूप में भगवान के दिव्य अंगों का दर्शन कराया गया है। प्रथम दो स्कंध भगवान के चरण, तृतीय-चतुर्थ जंघाएँ, पंचम नाभि, षष्ठ वक्षःस्थल, सप्तम-अष्टम बाहु, नवम ग्रीवा, दशम मुखकमल (रासपंचाध्यायी), एकादश ललाट (उद्धव गीता), और द्वादश मुकुट हैं।",
    structureCards: [
      { num: "१२", title: "स्कंध", desc: "भगवान के १२ श्रीविग्रह अंग रूप स्कंध" },
      { num: "३३५", title: "अध्याय", desc: "दशविध लक्षणों (सर्ग, विसर्ग, स्थान आदि) से युक्त" },
      { num: "१८,०००", title: "श्लोक", desc: "रसराज श्रीकृष्ण की दिव्य लीला व उपदेश" }
    ],
    availableTexts: [
      { title: "प्रथम स्कंध — अधिकार लीला", desc: "१९ अध्याय • व्यास-नारद संवाद, भीष्म स्तुति, कुंती स्तुति, परीक्षित जन्म व शाप", slug: "skandha-1" },
      { title: "द्वितीय स्कंध — ज्ञान लीला", desc: "१० अध्याय • विराट पुरुष ध्यान, चतुःश्लोकी भागवत, भागवत के १० लक्षण", slug: "skandha-2" },
      { title: "तृतीय स्कंध — सर्ग लीला", desc: "३३ अध्याय • विदुर-मैत्रेय संवाद, वराह अवतार, कर्दम-देवहूति व सांख्य उपदेश", slug: "skandha-3" },
      { title: "चतुर्थ स्कंध — विसर्ग लीला", desc: "३१ अध्याय • सती चरित्र, ध्रुव चरित्र, पृथु चरित्र, पुरंजन आख्यान", slug: "skandha-4" },
      { title: "पंचम स्कंध — स्थान लीला", desc: "२६ अध्याय • ऋषभदेव चरित्र, भरत चरित्र, भुवनकोश, नरक वर्णन", slug: "skandha-5" },
      { title: "षष्ठ स्कंध — पोषण लीला", desc: "१९ अध्याय • अजामिल मोक्ष, नारायण कवच, वृत्रासुर वध", slug: "skandha-6" },
      { title: "सप्तम स्कंध — ऊति लीला", desc: "१५ अध्याय • प्रह्लाद चरित्र, नृसिंह अवतार, वर्णाश्रम सदाचार", slug: "skandha-7" },
      { title: "अष्टम स्कंध — मन्वन्तर लीला", desc: "२४ अध्याय • गजेन्द्र मोक्ष, समुद्र मंथन, कूर्म, मोहिनी, वामन अवतार", slug: "skandha-8" },
      { title: "नवम स्कंध — ईशानुकथा लीला", desc: "२४ अध्याय • सूर्यवंश, अम्बरीष-दुर्वासा, श्रीराम चरित्र, चन्द्रवंश", slug: "skandha-9" },
      { title: "दशम स्कंध — निरोध लीला (कृष्ण लीलामृत)", desc: "९० अध्याय • श्रीकृष्ण प्राकट्य, बाललीला, गोवर्धन धारण, रासपंचाध्यायी, द्वारका लीला", slug: "skandha-10" },
      { title: "एकादश स्कंध — मुक्ति लीला (उद्धव गीता)", desc: "३१ अध्याय • नवयोगेश्वर संवाद, अवधूत के २४ गुरु, उद्धव गीता, यदुवंश संहार", slug: "skandha-11" },
      { title: "द्वादश स्कंध — आश्रय लीला", desc: "१३ अध्याय • कलिधर्म, परीक्षित मोक्ष, तक्षक दंश, वेद शाखा विस्तार, भागवत महात्म्य", slug: "skandha-12" }
    ],
    rishis: ["शुकदेव गोस्वामी", "महर्षि वेदव्यास", "देवर्षि नारद", "सूत जी (उग्रश्रवा)", "शौनक जी"],
    devatas: ["भगवान श्रीकृष्ण", "राधारानी", "नारायण", "नृसिंह", "वामन"],
    articles: [
      { id: "chatu-shloki-bhagavata", title: "चतुःश्लोकी भागवत (द्वितीय स्कंध)", desc: "अहमेवासमेवाग्रे — भागवत के मूल चार श्लोक जिनमें संपूर्ण ब्रह्मांडीय सत्य समाहित है।", slug: "chatu-shloki" },
      { id: "uddhav-gita", title: "उद्धव गीता का दार्शनिक संदेश", desc: "एकादश स्कंध में श्रीकृष्ण द्वारा उद्धव जी को दिया गया परम ज्ञान।", slug: "uddhav-gita" }
    ],
    relatedGranthas: [
      { name: "विष्णु पुराण", type: "महापुराण", author: "महर्षि पराशर", slug: "vishnu-purana" },
      { name: "श्रीमद्भगवद्गीता", type: "इतिहास", author: "महर्षि वेदव्यास", slug: "bhagavad-gita" }
    ],
    relatedSubjects: [
      { name: "विष्णु पुराण", slug: "vishnu-purana", desc: "६ अंश, पराशर-मैत्रेय संवाद" },
      { name: "श्रीमद्भगवद्गीता", slug: "bhagavad-gita", desc: "१८ अध्याय, निष्काम कर्मयोग" }
    ]
  },

  "purana/shiva-purana": {
    categorySlug: "purana",
    subjectSlug: "shiva-purana",
    name: "शिव पुराण",
    enName: "Shiva Purana",
    eyebrow: "पुराण • शैव महापुराण",
    intro: "शिव पुराण भगवान सदाशिव के परब्रह्म निष्कल एवं सकल स्वरूप, द्वादश ज्योतिर्लिंगों, शिव-पार्वती विवाह, कार्तिकेय-गणेश जन्म तथा भस्म-रुद्राक्ष धारण के महात्म्य का अनुपम ग्रंथ है।",
    quickInfo: {
      type: "महापुराण (शैव आगम)",
      language: "संस्कृत",
      author: "महर्षि वेदव्यास / सूत जी",
      shlokaCount: "२४,००० श्लोक",
      division: "७ संहिताएँ",
      presidingDeity: "भगवान सदाशिव / महादेव / उमा",
      chiefSymbols: "द्वादश ज्योतिर्लिंग, भस्म, रुद्राक्ष, बिल्वपत्र"
    },
    navTabs: ["Overview", "Structure", "7 Samhitas", "Jyotirlingas", "Articles", "Related Granthas"],
    overviewText: "शिव पुराण में सात प्रमुख संहिताएँ हैं: विद्येश्वर, रुद्र, शतरुद्र, कोटिरुद्र, उमा, कैलास और वायु संहिता। यह शिव तत्व के निर्गुण-सगुण स्वरूप की व्याख्या करते हुए निष्काम भक्ति और पाशुपत योग का मार्ग प्रशस्त करता है।",
    structureCards: [
      { num: "७", title: "संहिताएँ", desc: "विद्येश्वर से वायु संहिता तक ७ भाग" },
      { num: "१२", title: "ज्योतिर्लिंग", desc: "सोमनाथ, मल्लिकार्जुन, महाकाल आदि द्वादश लिंग" },
      { num: "२४,०००", title: "श्लोक", desc: "महादेव की लीला व तात्विक रहस्य" }
    ],
    availableTexts: [
      { title: "विद्येश्वर संहिता", desc: "२५ अध्याय • शिव लिंग स्वरूप, ॐकार महिमा, भस्म व रुद्राक्ष विधान", slug: "vidyeshvara-samhita" },
      { title: "रुद्र संहिता (सृष्टि, सती, पार्वती, कुमार, युद्ध खंड)", desc: "शिव-सती लीला, पार्वती तपस्या, शिव विवाह, गणेश-कार्तिकेय व तारकासुर वध", slug: "rudra-samhita" },
      { title: "शतरुद्र संहिता", desc: "४२ अध्याय • भगवान शिव के १०० प्रमुख अवतार (हनुमान, ऋषभ, दूर्वासा आदि)", slug: "shatarudra-samhita" },
      { title: "कोटिरुद्र संहिता", desc: "४३ अध्याय • द्वादश ज्योतिर्लिंगों का प्रादुर्भाव व महात्म्य, शिवरात्रि व्रत", slug: "kotirudra-samhita" },
      { title: "उमा संहिता", desc: "५१ अध्याय • देवी उमा का स्वरूप, तपस्या, नरक व पुण्यलोकों का वर्णन", slug: "uma-samhita" },
      { title: "कैलास संहिता", desc: "२३ अध्याय • संन्यास धर्म, प्रणव (ॐ) विचार, शिव योग", slug: "kailasa-samhita" },
      { title: "वायवीय संहिता (पूर्व व उत्तर भाग)", desc: "पाशुपत दर्शन, शिव तत्व विचार, सृष्टि प्रलय", slug: "vayaviya-samhita" }
    ],
    rishis: ["महर्षि वेदव्यास", "रोमहर्षण सूत", "सनत्कुमार", "दधीचि", "उपमन्यु"],
    devatas: ["भगवान शिव (सदाशिव)", "माता पार्वती (उमा)", "कार्तिकेय", "गणेश", "नंदी"],
    articles: [
      { id: "dvadasha-jyotirlinga", title: "द्वादश ज्योतिर्लिंगों का तात्विक रहस्य", desc: "सौराष्ट्रे सोमनाथं च — १२ ज्योतिर्लिंगों की भौगोलिक व आध्यात्मिक स्थिति।", slug: "jyotirlinga" },
      { id: "bhasma-rudraksha", title: "भस्म एवं रुद्राक्ष की शास्त्रीय महिमा", desc: "विद्येश्वर संहिता के अनुसार भस्म धारण व रुद्राक्ष मुखों का फल।", slug: "bhasma-rudraksha" }
    ],
    relatedGranthas: [
      { name: "लिंग पुराण", type: "महापुराण", author: "महर्षि वेदव्यास", slug: "linga-purana" },
      { name: "स्कन्द पुराण", type: "महापुराण", author: "महर्षि वेदव्यास", slug: "skanda-purana" }
    ],
    relatedSubjects: [
      { name: "स्कन्द पुराण", slug: "skanda-purana", desc: "काशी खंड, केदार खंड" },
      { name: "मार्कण्डेय पुराण", slug: "markandeya-purana", desc: "श्री दुर्गा सप्तशती" }
    ]
  },

  "purana/markandeya-purana": {
    categorySlug: "purana",
    subjectSlug: "markandeya-purana",
    name: "मार्कण्डेय पुराण",
    enName: "Markandeya Purana",
    eyebrow: "पुराण • राजस महापुराण",
    intro: "मार्कण्डेय पुराण महामुनि मार्कण्डेय द्वारा पक्षिश्रेष्ठ द्रोण-पुत्रों को दिए गए उपदेश पर आधारित है। इसका सर्वाधिक प्रसिद्ध भाग श्री दुर्गा सप्तशती (देवी महात्म्य) है।",
    quickInfo: {
      type: "महापुराण (राजस)",
      language: "संस्कृत",
      author: "महर्षि मार्कण्डेय",
      shlokaCount: "९,००० श्लोक",
      division: "१३७ अध्याय",
      presidingDeity: "भगवती दुर्गा / जगदम्बा / सूर्यदेव",
      centralJewel: "श्री दुर्गा सप्तशती (अध्याय ८१-९३)"
    },
    navTabs: ["Overview", "Structure", "Durga Saptashati", "Rishi & Devata", "Articles", "Related Granthas"],
    overviewText: "मार्कण्डेय पुराण प्रकृति, कर्मफल, योग तथा शाक्त दर्शन का अद्वितीय समन्वय है। इसके १३७ अध्यायों में से अध्याय ८१ से ९३ तक के १३ अध्याय 'देवी महात्म्य' या 'दुर्गा सप्तशती' कहलाते हैं, जो समस्त शाक्त उपासना का मूल मंत्रमय ग्रंथ है।",
    structureCards: [
      { num: "१३७", title: "अध्याय", desc: "दार्शनिक आख्यान व देवी चरित्र" },
      { num: "१३", title: "सप्तशती अध्याय", desc: "देवी महात्म्य के ३ चरित्र (प्रथम, मध्यम, उत्तम)" },
      { num: "७००", title: "सप्तशती श्लोक", desc: "महिषासुर व शुम्भ-निशुम्भ संहार मंत्र" }
    ],
    availableTexts: [
      { title: "पूर्व भाग — विन्ध्य पर्वत पर पक्षियों से संवाद", desc: "जैमिनि-विहंगम संवाद • महाभारत के अनुत्तरित प्रश्नों का समाधान", slug: "purva-bhaga" },
      { title: "मध्य भाग — श्री दुर्गा सप्तशती (८१-९३ अध्याय)", desc: "मधु-कैटभ वध, महिषासुरमर्दिनी एवं शुम्भ-निशुम्भ संहार", slug: "durga-saptashati-text" },
      { title: "उत्तर भाग — सूर्य वंश व मन्वन्तर आख्यान", desc: "मनु उत्पत्ति, राजा हरिश्चन्द्र कथा, योग साधना", slug: "uttara-bhaga" }
    ],
    rishis: ["महर्षि मार्कण्डेय", "जैमिनि", "सुधर्मा आदि चार ज्ञानी पक्षी", "मेधा ऋषि"],
    devatas: ["भगवती महाकाली", "महालक्ष्मी", "महासरस्वती", "सूर्यदेव"],
    articles: [
      { id: "durga-saptashati-rahasya", title: "श्री दुर्गा सप्तशती के तीन चरित्रों का तात्विक रहस्य", desc: "तामस, राजस और सात्विक प्रवृत्तियों के दमन का आध्यात्मिक रूपक।", slug: "saptashati-rahasya" }
    ],
    relatedGranthas: [
      { name: "देवी भागवत पुराण", type: "महापुराण / उपपुराण", author: "महर्षि वेदव्यास", slug: "devi-bhagavata" },
      { name: "कालिका पुराण", type: "उपपुराण", author: "शाक्त परंपरा", slug: "kalika-purana" }
    ],
    relatedSubjects: [
      { name: "शिव पुराण", slug: "shiva-purana", desc: "उमा संहिता, पार्वती तपस्या" },
      { name: "विष्णु पुराण", slug: "vishnu-purana", desc: "६ अंश, पराशर उपदेश" }
    ]
  },

  "purana/skanda-purana": {
    categorySlug: "purana",
    subjectSlug: "skanda-purana",
    name: "स्कन्द पुराण",
    enName: "Skanda Purana",
    eyebrow: "पुराण • विशालतम महापुराण",
    intro: "स्कन्द पुराण समस्त १८ महापुराणों में श्लोक संख्या की दृष्टि से विशालतम (८१,१०० श्लोक) ग्रंथ है। यह भारतवर्ष के पावन तीर्थों, नदियों, ज्योतिर्लिंगों और संस्कृति का विराट भौगोलिक एवं आध्यात्मिक मानचित्र है।",
    quickInfo: {
      type: "महापुराण (विशालतम)",
      language: "संस्कृत",
      author: "महर्षि वेदव्यास / भगवान स्कन्द (कार्तिकेय)",
      shlokaCount: "८१,१०० श्लोक",
      division: "७ खंड",
      presidingDeity: "भगवान स्कन्द (कार्तिकेय) व सदाशिव",
      famousSections: "काशी खंड, केदार खंड, रेवा खंड (सत्यनारायण कथा)"
    },
    navTabs: ["Overview", "Structure", "7 Khandas", "Tirthas", "Articles", "Related Granthas"],
    overviewText: "स्कन्द पुराण के सात विशाल खंड हैं: माहेश्वर, वैष्णव, ब्राह्म, काशी, अवन्ती, नागर और प्रभास खंड। काशी खंड में मोक्षदायिनी काशी नगरी और मणिकर्णिका का विशद वर्णन है। रेवा खंड में लोकप्रसिद्ध श्री सत्यनारायण व्रत कथा निहित है।",
    structureCards: [
      { num: "७", title: "विशाल खंड", desc: "माहेश्वर, काशी, अवन्ती, प्रभास आदि खंड" },
      { num: "८१,१००", title: "श्लोक", desc: "समस्त महापुराणों में विशालतम श्लोक राशि" },
      { num: "५००+", title: "पावन तीर्थ", desc: "भारत के तीर्थों का प्रामाणिक महात्म्य" }
    ],
    availableTexts: [
      { title: "माहेश्वर खंड", desc: "केदार महात्म्य, कुमारिका खंड, सती चरित्र व दक्ष यज्ञ विध्वंस", slug: "maheshvara-khanda" },
      { title: "वैष्णव खंड", desc: "बदरिकाश्रम महात्म्य, अयोध्या महात्म्य, जगन्नाथ पुरी (उत्कल) महात्म्य", slug: "vaishnava-khanda" },
      { title: "ब्राह्म खंड", desc: "सेतु महात्म्य (रामेश्वरम्), धर्मारण्य महात्म्य", slug: "brahma-khanda" },
      { title: "काशी खंड", desc: "१०० अध्याय • काशी का आध्यात्मिक स्वरूप, मणिकर्णिका, विश्वनाथ प्राकट्य", slug: "kashi-khanda" },
      { title: "अवन्ती खंड", desc: "उज्जयिनी महाकाल महात्म्य, रेवा (नर्मदा) खंड • सत्यनारायण कथा", slug: "avanti-khanda" },
      { title: "नागर खंड", desc: "हाटकेश्वर क्षेत्र महात्म्य, तीर्थों की विशद महिमा", slug: "nagara-khanda" },
      { title: "प्रभास खंड", desc: "सोमनाथ ज्योतिर्लिंग प्राकट्य, द्वारका महात्म्य", slug: "prabhasa-khanda" }
    ],
    rishis: ["अगस्त्य", "लोपामुद्रा", "वशिष्ठ", "व्यास", "सनत्कुमार"],
    devatas: ["भगवान स्कन्द (मुरुगन)", "काशी विश्वनाथ", "महाकालेश्वर", "जगन्नाथ"],
    articles: [
      { id: "satyanarayana-katha", title: "श्री सत्यनारायण व्रत कथा का उद्गम", desc: "स्कन्द पुराण के रेवा खंड से लोकप्रसिद्ध सत्यनारायण पूजा विधान।", slug: "satyanarayana-katha" }
    ],
    relatedGranthas: [
      { name: "शिव पुराण", type: "महापुराण", author: "महर्षि वेदव्यास", slug: "shiva-purana" }
    ],
    relatedSubjects: [
      { name: "शिव पुराण", slug: "shiva-purana", desc: "द्वादश ज्योतिर्लिंग" },
      { name: "विष्णु पुराण", slug: "vishnu-purana", desc: "६ अंश" }
    ]
  },

  "purana/garuda-purana": {
    categorySlug: "purana",
    subjectSlug: "garuda-purana",
    name: "गरुड़ पुराण",
    enName: "Garuda Purana",
    eyebrow: "पुराण • सात्विक महापुराण",
    intro: "गरुड़ पुराण भगवान विष्णु और उनके वाहन पक्षीराज गरुड़ के मध्य हुआ संवाद है। इसमें जन्म-मरण, यमलोक मार्ग, कर्मफल, श्राद्ध संस्कार एवं आत्म-मुक्ति का दार्शनिक निरूपण है।",
    quickInfo: {
      type: "महापुराण (सात्विक)",
      language: "संस्कृत",
      author: "महर्षि वेदव्यास",
      shlokaCount: "१९,००० श्लोक",
      division: "पूर्व खंड एवं उत्तर खंड (प्रेतकल्प)",
      presidingDeity: "भगवान श्रीमन नारायण",
      specialty: "कर्मविपाक, प्रेतकल्प, आयुर्वेद व ज्योतिष"
    },
    navTabs: ["Overview", "Structure", "Khandas", "Philosophy", "Articles", "Related Granthas"],
    overviewText: "गरुड़ पुराण केवल मरणोपरांत संस्कारों का ग्रंथ नहीं है, बल्कि पूर्व खंड में आयुर्वेद, व्याकरण, ज्योतिष, रत्न परीक्षा, नीतिसार और राजधर्म का अद्भुत विश्वकोश है। उत्तर खंड (प्रेतकल्प) जीवात्मा की गति, कर्मफल और मोक्ष का मार्गदर्शन करता है।",
    structureCards: [
      { num: "२", title: "मुख्य खंड", desc: "पूर्व खंड (ज्ञान-विज्ञान) व उत्तर खंड (प्रेतकल्प)" },
      { num: "२७१", title: "कुल अध्याय", desc: "आयुर्वेद, रत्नशास्त्र, नीति एवं श्राद्ध विधि" },
      { num: "१९,०००", title: "श्लोक", desc: "गरुड़-विष्णु दिव्य संवाद" }
    ],
    availableTexts: [
      { title: "पूर्व खंड (आचार काण्ड)", desc: "२२९ अध्याय • सृष्टि उत्पत्ति, विष्णु पूजा, आयुर्वेद, ज्योतिष, नीतिसार, रत्न परीक्षा", slug: "purva-khanda" },
      { title: "उत्तर खंड (प्रेत कल्प / धर्म काण्ड)", desc: "४२ अध्याय • जीवात्मा का प्रयाण, यमलोक मार्ग, वैतरणी, श्राद्ध विधान व मोक्ष प्राप्ति", slug: "uttara-khanda" }
    ],
    rishis: ["पक्षीराज गरुड़ (जिज्ञासु)", "भगवान विष्णु (वक्ता)", "महर्षि कश्यप", "व्यास"],
    devatas: ["श्रीमन नारायण", "यमराज", "चित्रगुप्त"],
    articles: [
      { id: "garuda-nitisara", title: "गरुड़ पुराण का नीतिसार एवं जीवन दर्शन", desc: "कर्म की प्रधानता और सदाचार के स्वर्णिम नियम।", slug: "nitisara" }
    ],
    relatedGranthas: [
      { name: "विष्णु पुराण", type: "महापुराण", author: "महर्षि पराशर", slug: "vishnu-purana" }
    ],
    relatedSubjects: [
      { name: "विष्णु पुराण", slug: "vishnu-purana", desc: "६ अंश" },
      { name: "श्रीमद्भागवत महापुराण", slug: "shrimad-bhagavata", desc: "१२ स्कंध" }
    ]
  },

"purana/brahma-purana": {
    categorySlug: "purana",
    subjectSlug: "brahma-purana",
    id: "brahma-purana",
    slug: "brahma-purana",
    name: "ब्रह्म पुराण",
    enName: "Brahma Purana",
    eyebrow: "पुराण • आदि महापुराण (राजस)",
    intro: "समस्त १८ महापुराणों में सर्वप्रथम होने के कारण इसे 'आदि पुराण' कहा जाता है। ब्रह्मा जी द्वारा महर्षि मरीचि एवं दक्ष प्रजापति को उपदिष्ट इस पुराण में सृष्टि उत्पत्ति, सूर्य उपासना और पावन तीर्थों का विस्तृत वर्णन है।",
    overviewText: "ब्रह्म पुराण में पूर्व और उत्तर दो भाग हैं जिनमें २४५ अध्याय हैं। इसका प्रमुख आकर्षण गौतमी महात्म्य (गोदावरी नदी के तटवर्ती १०६ पावन तीर्थों का वर्णन), सूर्य क्षेत्र (ओडिशा के कोणार्क सूर्य मंदिर का महात्म्य), तथा उत्कल (जगन्नाथ पुरी) क्षेत्र का आध्यात्मिक निरूपण है।",
    stats: "२४५ अध्याय • १०,००० श्लोक • राजस",
    priest: "ब्रह्मा / अध्वर्यु",
    badge: "आदि पुराण",
    imageKey: "deity-brahma.jpg",
    quickInfo: {
      type: "महापुराण (आदि पुराण / राजस)",
      language: "संस्कृत (अनुष्टुप)",
      author: "महर्षि वेदव्यास / ब्रह्मा जी",
      shlokaCount: "१०,००० श्लोक",
      division: "२ भाग (२४५ अध्याय)",
      presidingDeity: "ब्रह्मा एवं भगवान सूर्यदेव",
      chiefTirthas: "गौतमी (गोदावरी), कोणार्क, पुरुषोत्तम क्षेत्र"
    },
    navTabs: ["Overview", "Structure", "Texts", "Rishi & Devata", "Articles", "Related Granthas"],
    structureCards: [
      { id: "bp-st-1", num: "२", stats: "२ भाग", title: "मुख्य भाग", name: "पूर्व एवं उत्तर भाग", enName: "Purva & Uttara Bhaga", desc: "सृष्टि उत्पत्ति, तीर्थ महात्म्य, राजधर्म व योग", badge: "भाग" },
      { id: "bp-st-2", num: "२४५", stats: "२४५ अध्याय", title: "कुल अध्याय", name: "अध्याय विस्तार", enName: "245 Chapters", desc: "१०६ अध्याय केवल गौतमी महात्म्य पर केंद्रित", badge: "अध्याय" },
      { id: "bp-st-3", num: "१०,०००", stats: "१०,००० श्लोक", title: "श्लोक परिमाण", name: "श्लोक परिमाण", enName: "10,000 Shlokas", desc: "सूर्य स्तुति एवं पावन तीर्थ महिमा", badge: "श्लोक" }
    ],
    availableTexts: [
      { title: "पूर्व भाग — सृष्टि व सूर्य क्षेत्र महात्म्य", desc: "दक्ष सृष्टि, कोणार्क सूर्य तेज, एकाग्र उपासना", slug: "purva-bhaga" },
      { title: "गौतमी महात्म्य (१०६ अध्याय)", desc: "गोदावरी नदी के तटवर्ती दिव्य तीर्थों का प्रामाणिक विवरण", slug: "gautami-mahatmya" },
      { title: "उत्तर भाग — ब्रह्म ज्ञान व योग", desc: "वर्णाश्रम, श्राद्ध, यमलोक व आत्मज्ञान", slug: "uttara-bhaga" }
    ],
    rishis: [
      { name: "ब्रह्मा जी", role: "मूल प्रवक्ता" },
      { name: "महर्षि मरीचि", role: "श्रोता" },
      { name: "दक्ष प्रजापति", role: "जिज्ञासु" }
    ],
    deities: [
      { name: "भगवान ब्रह्मा", title: "सृष्टिकर्ता" },
      { name: "सूर्यदेव", title: "आरोग्य व तेज प्रदाता" }
    ],
    devatas: [
      { name: "भगवान ब्रह्मा", title: "सृष्टिकर्ता" },
      { name: "सूर्यदेव", title: "आरोग्य व तेज प्रदाता" }
    ],
    articles: [
      { id: "gautami-mahatmya", title: "गौतमी महात्म्य — गोदावरी तट के पावन तीर्थ", desc: "ब्रह्म पुराण के १०६ अध्यायों में वर्णित गोदावरी तीर्थों का आध्यात्मिक महात्म्य।", slug: "gautami-mahatmya" },
      { id: "konark-surya-upasana", title: "कोणार्क सूर्य उपासना एवं ब्रह्म पुराण", desc: "प्रत्यक्ष सूर्यदेव की आराधना और आरोग्य प्राप्ति का विधान।", slug: "surya-upasana" }
    ],
    relatedGranthas: [
      { name: "पद्म पुराण", enName: "Padma Purana", desc: "सृष्टि व तीर्थ महात्म्य", slug: "padma-purana", category: "purana", badge: "महापुराण" },
      { name: "विष्णु पुराण", enName: "Vishnu Purana", desc: "पराशर मैत्रेय संवाद", slug: "vishnu-purana", category: "purana", badge: "सात्विक" }
    ],
    relatedSubjects: [
      { name: "पद्म पुराण", slug: "padma-purana", desc: "५५,००० श्लोक, ६ खंड" },
      { name: "भविष्य पुराण", slug: "bhavishya-purana", desc: "सूर्य उपासना" }
    ]
  },

  "purana/padma-purana": {
    categorySlug: "purana",
    subjectSlug: "padma-purana",
    id: "padma-purana",
    slug: "padma-purana",
    name: "पद्म पुराण",
    enName: "Padma Purana",
    eyebrow: "पुराण • द्वितीय विशालतम महापुराण (सात्विक)",
    intro: "स्कन्द पुराण के बाद दूसरा सबसे विशाल महापुराण (५५,००० श्लोक)। भगवान विष्णु के नाभि-कमल (पद्म) से सृष्टि विस्तार का रहस्य निरूपित करने के कारण इसे 'पद्म पुराण' कहा जाता है।",
    overviewText: "पद्म पुराण छह विशाल खंडों में व्यवस्थित है: सृष्टि खण्ड (पुष्कर तीर्थ व ब्रह्मा यज्ञ), भूमि खण्ड (माता-पिता सेवा की महिमा), स्वर्ग खण्ड (पुण्यलोकों का वर्णन), ब्रह्म खण्ड, पाताल खण्ड (रामकथा व रावण वध), और उत्तर खण्ड (श्रीमद्भागवत महात्म्य एवं एकादशी व्रत कथा)।",
    stats: "६ खंड • ६५२ अध्याय • ५५,००० श्लोक",
    priest: "होता / उद्गाता",
    badge: "महापद्म पुराण",
    imageKey: "card-purana.jpg",
    quickInfo: {
      type: "महापुराण (सात्विक)",
      language: "संस्कृत (अनुष्टुप)",
      author: "महर्षि वेदव्यास / सूत जी",
      shlokaCount: "५५,००० श्लोक",
      division: "६ खंड (६५२ अध्याय)",
      presidingDeity: "भगवान श्रीमन नारायण / विष्णु",
      famousSections: "भागवत महात्म्य, पुष्कर तीर्थ, एकादशी व्रत"
    },
    navTabs: ["Overview", "Structure", "Texts", "Rishi & Devata", "Articles", "Related Granthas"],
    structureCards: [
      { id: "pp-st-1", num: "६", stats: "६ खंड", title: "विशाल खंड", name: "६ प्रमुख खंड", enName: "6 Major Khandas", desc: "सृष्टि, भूमि, स्वर्ग, ब्रह्म, पाताल एवं उत्तर खंड", badge: "खंड" },
      { id: "pp-st-2", num: "६५२", stats: "६५२ अध्याय", title: "कुल अध्याय", name: "अध्याय विस्तार", enName: "652 Chapters", desc: "भक्ति, सदाचार, तीर्थ व इतिहास का विपुल भंडार", badge: "अध्याय" },
      { id: "pp-st-3", num: "५५,०००", stats: "५५,००० श्लोक", title: "श्लोक परिमाण", name: "श्लोक संख्या", enName: "55,000 Shlokas", desc: "महापुराणों में द्वितीय विशालतम ग्रंथ", badge: "श्लोक" }
    ],
    availableTexts: [
      { title: "सृष्टि खण्ड (पुष्कर तीर्थ)", desc: "पुष्कर तीर्थ का प्राकट्य, ब्रह्मा जी का यज्ञ, सावित्री-गायत्री प्रसंग", slug: "srishti-khanda" },
      { title: "भूमि खण्ड (माता-पिता सेवा)", desc: "माता-पिता एवं गुरु सेवा, सुकर्मा चरित्र, शिव शर्मा उपाख्यान", slug: "bhumi-khanda" },
      { title: "पाताल खण्ड (श्रीराम चरित्र)", desc: "भगवान श्रीराम का अश्वमेध यज्ञ, लव-कुश चरित्र, रावण वंश", slug: "patala-khanda" },
      { title: "उत्तर खण्ड (भागवत महात्म्य)", desc: "श्रीमद्भागवत महात्म्य, भक्ति-ज्ञान-वैराग्य संवाद, एकादशी व्रत महिमा", slug: "uttara-khanda" }
    ],
    rishis: [
      { name: "महर्षि वेदव्यास", role: "रचयिता" },
      { name: "रोमहर्षण सूत", role: "प्रवक्ता" },
      { name: "शौनक जी", role: "श्रोता" }
    ],
    deities: [
      { name: "भगवान विष्णु", title: "परम आराध्य" },
      { name: "माता तुलसी", title: "हरिप्रिया" },
      { name: "शालिग्राम", title: "विष्णु स्वरूप" }
    ],
    devatas: [
      { name: "भगवान विष्णु", title: "परम आराध्य" },
      { name: "माता तुलसी", title: "हरिप्रिया" },
      { name: "शालिग्राम", title: "विष्णु स्वरूप" }
    ],
    articles: [
      { id: "bhagavata-mahatmya-padma", title: "श्रीमद्भागवत महात्म्य — पद्म पुराण उत्तर खण्ड", desc: "देवर्षि नारद और भक्ति-ज्ञान-वैराग्य के कष्ट निवारण की अमर कथा।", slug: "bhagavata-mahatmya" },
      { id: "pushkar-tirtha-rahasya", title: "पुष्कर तीर्थ का प्राकट्य एवं ब्रह्मा जी का महायज्ञ", desc: "सृष्टि खण्ड में वर्णित एकमात्र ब्रह्मा मंदिर पुष्कर का आध्यात्मिक इतिहास।", slug: "pushkar-tirtha" }
    ],
    relatedGranthas: [
      { name: "श्रीमद्भागवत महापुराण", enName: "Srimad Bhagavata", desc: "रसराज भागवत", slug: "shrimad-bhagavata", category: "purana", badge: "सात्विक" },
      { name: "विष्णु पुराण", enName: "Vishnu Purana", desc: "वैष्णव दर्शन", slug: "vishnu-purana", category: "purana", badge: "सात्विक" }
    ],
    relatedSubjects: [
      { name: "श्रीमद्भागवत", slug: "shrimad-bhagavata", desc: "१८,००० श्लोक" },
      { name: "स्कन्द पुराण", slug: "skanda-purana", desc: "८१,१०० श्लोक" }
    ]
  },

  "purana/narada-purana": {
    categorySlug: "purana",
    subjectSlug: "narada-purana",
    id: "narada-purana",
    slug: "narada-purana",
    name: "नारद पुराण",
    enName: "Narada Purana",
    eyebrow: "पुराण • बृहन्नारदीय महापुराण (सात्विक)",
    intro: "देवर्षि नारद और सनत्कुमारों के पावन संवाद से आविर्भूत २५,००० श्लोकों का महापुराण। यह समस्त १८ महापुराणों की विस्तृत विषय-सूची (अनुक्रमणिका) और षडंग वेदों का प्रामाणिक दिग्दर्शक है।",
    overviewText: "नारद पुराण दो भागों में विभक्त है: पूर्व भाग (१२५ अध्याय) और उत्तर भाग (८२ अध्याय)। पूर्व भाग में चारों वेदों के छह अंगों (शिक्षा, कल्प, व्याकरण, निरुक्त, छंद, ज्योतिष) तथा समस्त १८ पुराणों के अध्यायों व कथाओं का सार संगृहीत है। उत्तर भाग में मोक्षधर्म, एकादशी व्रत और तीर्थ महात्म्य का विवेचन है।",
    stats: "२ भाग • २०७ अध्याय • २५,००० श्लोक",
    priest: "उद्गाता / ब्रह्मा",
    badge: "बृहन्नारदीय",
    imageKey: "card-samhita.jpg",
    quickInfo: {
      type: "महापुराण (सात्विक)",
      language: "संस्कृत",
      author: "देवर्षि नारद / सनत्कुमार",
      shlokaCount: "२५,००० श्लोक",
      division: "पूर्व व उत्तर भाग (२०७ अध्याय)",
      presidingDeity: "भगवान श्रीमन नारायण",
      specialty: "१८ पुराणों की अनुक्रमणिका व षडंग वेद"
    },
    navTabs: ["Overview", "Structure", "Texts", "Rishi & Devata", "Articles", "Related Granthas"],
    structureCards: [
      { id: "np-st-1", num: "२", stats: "२ भाग", title: "मुख्य भाग", name: "पूर्व व उत्तर भाग", enName: "Purva & Uttara Bhaga", desc: "पूर्व भाग (४ पाद) व उत्तर भाग (बृहन्नारदीय)", badge: "भाग" },
      { id: "np-st-2", num: "२०७", stats: "२०७ अध्याय", title: "कुल अध्याय", name: "अध्याय विस्तार", enName: "207 Chapters", desc: "वेदांग, पुराण अनुक्रमणिका व मोक्षधर्म", badge: "अध्याय" },
      { id: "np-st-3", num: "२५,०००", stats: "२५,००० श्लोक", title: "श्लोक परिमाण", name: "श्लोक संख्या", enName: "25,000 Shlokas", desc: "विशाल सात्विक ज्ञानकोश", badge: "श्लोक" }
    ],
    availableTexts: [
      { title: "पूर्व भाग — प्रथम पाद (सृष्टि व मोक्षधर्म)", desc: "सनत्कुमार-नारद संवाद, आत्मज्ञान व भक्ति निरूपण", slug: "pada-1" },
      { title: "पूर्व भाग — चतुर्थ पाद (१८ पुराण अनुक्रमणिका)", desc: "समस्त १८ महापुराणों के श्लोक, अध्याय व विषय सूची का प्रामाणिक विवरण", slug: "pada-4" },
      { title: "उत्तर भाग — एकादशी व्रत व तीर्थ महात्म्य", desc: "गंगा महात्म्य, गया, काशी व एकादशी व्रत की वैज्ञानिक विधि", slug: "uttara-bhaga" }
    ],
    rishis: [
      { name: "देवर्षि नारद", role: "वक्ता / द्रष्टा" },
      { name: "सनत्कुमार", role: "ज्ञानदाता" },
      { name: "सूत जी", role: "प्रवक्ता" }
    ],
    deities: [
      { name: "श्रीमन नारायण", title: "परम आराध्य" },
      { name: "गंगा मैया", title: "पापनाशिनी" }
    ],
    devatas: [
      { name: "श्रीमन नारायण", title: "परम आराध्य" },
      { name: "गंगा मैया", title: "पापनाशिनी" }
    ],
    articles: [
      { id: "ashtadasha-purana-anukramanika", title: "१८ महापुराणों की प्रामाणिक अनुक्रमणिका", desc: "नारद पुराण में दिया गया समस्त पुराणों के श्लोक व विषय का शास्त्रीय वर्गीकरण।", slug: "purana-anukramanika" },
      { id: "shadanga-veda-narada", title: "नारद पुराण में षडंग वेद का निरूपण", desc: "शिक्षा, कल्प, व्याकरण, निरुक्त, छंद और ज्योतिष का संक्षिप्त परिचय।", slug: "shadanga-veda" }
    ],
    relatedGranthas: [
      { name: "विष्णु पुराण", enName: "Vishnu Purana", desc: "वैष्णव महापुराण", slug: "vishnu-purana", category: "purana", badge: "सात्विक" },
      { name: "गरुड़ पुराण", enName: "Garuda Purana", desc: "कर्मविपाक व ज्ञान", slug: "garuda-purana", category: "purana", badge: "सात्विक" }
    ],
    relatedSubjects: [
      { name: "विष्णु पुराण", slug: "vishnu-purana", desc: "२३,००० श्लोक" },
      { name: "श्रीमद्भागवत", slug: "shrimad-bhagavata", desc: "१८,००० श्लोक" }
    ]
  },

  "purana/agni-purana": {
    categorySlug: "purana",
    subjectSlug: "agni-purana",
    id: "agni-purana",
    slug: "agni-purana",
    name: "अग्नि पुराण",
    enName: "Agni Purana",
    eyebrow: "पुराण • भारतीय ज्ञान-विज्ञान का विश्वकोश (राजस)",
    intro: "अग्निदेव द्वारा महर्षि वसिष्ठ को उपदिष्ट १५,४०० श्लोकों का यह महापुराण प्राचीन भारत का अद्भुत 'इंसाइक्लोपीडिया' (विश्वकोश) है। इसमें धर्म, दर्शन, आयुर्वेद, धनुर्वेद, ज्योतिष, वास्तु, व्याकरण और साहित्य का समाहार है।",
    overviewText: "अग्नि पुराण के ३८३ अध्यायों में दशावतार चरित्र, रामायण-महाभारत सार, आयुर्वेद चिकित्सा (निदान, औषधियां), धनुर्वेद (युद्ध कला व अस्त्र-शस्त्र), वास्तु एवं दुर्ग निर्माण, छंदशास्त्र, काव्य लक्षण, अलंकार, राजनीति (नीतिसार) तथा योग का अत्यंत व्यावहारिक निरूपण किया गया है।",
    stats: "३८३ अध्याय • १५,४०० श्लोक • राजस",
    priest: "होता / यज्ञाचार्य",
    badge: "ज्ञान विश्वकोश",
    imageKey: "card-yagya-fire.jpg",
    quickInfo: {
      type: "महापुराण (राजस / ज्ञान विश्वकोश)",
      language: "संस्कृत",
      author: "महर्षि वेदव्यास / अग्निदेव",
      shlokaCount: "१५,४०० श्लोक",
      division: "३८३ अध्याय",
      presidingDeity: "भगवान अग्निदेव एवं महाविष्णु",
      specialty: "धनुर्वेद, आयुर्वेद, वास्तु, व्याकरण व राजनीति"
    },
    navTabs: ["Overview", "Structure", "Texts", "Rishi & Devata", "Articles", "Related Granthas"],
    structureCards: [
      { id: "ap-st-1", num: "३८३", stats: "३८३ अध्याय", title: "कुल अध्याय", name: "अध्याय विस्तार", enName: "383 Chapters", desc: "समस्त लौकिक एवं पारलौकिक विद्याओं का संकलन", badge: "अध्याय" },
      { id: "ap-st-2", num: "१५,४००", stats: "१५,४०० श्लोक", title: "श्लोक परिमाण", name: "श्लोक संख्या", enName: "15,400 Shlokas", desc: "अग्नि-वसिष्ठ पावन संवाद", badge: "श्लोक" },
      { id: "ap-st-3", num: "१२+", stats: "१२+ विद्याएँ", title: "समाहित शास्त्र", name: "प्रमुख विद्याएँ", enName: "12+ Sciences", desc: "आयुर्वेद, धनुर्वेद, वास्तु, छंद, अलंकार, नीति", badge: "शास्त्र" }
    ],
    availableTexts: [
      { title: "अवतार खंड (दशावतार एवं रामायण-महाभारत सार)", desc: "मत्स्य, कूर्म, वराह से लेकर कल्कि अवतार एवं रामायण सार", slug: "avatara-khanda" },
      { title: "आयुर्वेद एवं औषध विज्ञान (अध्याय २७९-२८६)", desc: "वात-पित्त-कफ त्रिदोष, वृक्षायुर्वेद, गजारोग्य व रसायन", slug: "ayurveda-khanda" },
      { title: "धनुर्वेद एवं युद्धनीति (अध्याय २४९-२५२)", desc: "अस्त्र-शस्त्र विद्या, चक्रव्यूह, धनुष निर्माण व सेना संचालन", slug: "dhanurveda-khanda" },
      { title: "वास्तुशास्त्र, मूर्ति लक्षण एवं काव्यशास्त्र", desc: "गृह व मंदिर निर्माण, प्रतिमा लक्षण, अलंकार व छंद", slug: "vastu-kavya" }
    ],
    rishis: [
      { name: "अग्निदेव", role: "दिव्य वक्ता" },
      { name: "महर्षि वसिष्ठ", role: "श्रोता" },
      { name: "वेदव्यास", role: "संकलनकर्ता" }
    ],
    deities: [
      { name: "अग्निदेव", title: "साक्षात् पावक" },
      { name: "भगवान विष्णु", title: "यज्ञपुरुष" }
    ],
    devatas: [
      { name: "अग्निदेव", title: "साक्षात् पावक" },
      { name: "भगवान विष्णु", title: "यज्ञपुरुष" }
    ],
    articles: [
      { id: "agni-purana-ayurveda", title: "अग्नि पुराण का आयुर्वेद एवं वृक्षायुर्वेद ज्ञान", desc: "प्राचीन भारत में प्राकृतिक चिकित्सा, जड़ी-बूटी और वृक्ष संवर्धन के नियम।", slug: "ayurveda-vrikshayurveda" },
      { id: "dhanurveda-shastra", title: "अग्नि पुराण का धनुर्वेद — प्राचीन भारतीय युद्धकला", desc: "चार प्रकार के अस्त्र, धनुर्विद्या के नियम और सेना व्यूहरचना।", slug: "dhanurveda" }
    ],
    relatedGranthas: [
      { name: "मार्कण्डेय पुराण", enName: "Markandeya Purana", desc: "राजस महापुराण", slug: "markandeya-purana", category: "purana", badge: "राजस" },
      { name: "मत्स्य पुराण", enName: "Matsya Purana", desc: "वास्तु व शिल्पकला", slug: "matsya-purana", category: "purana", badge: "तामस" }
    ],
    relatedSubjects: [
      { name: "मार्कण्डेय पुराण", slug: "markandeya-purana", desc: "श्री दुर्गा सप्तशती" },
      { name: "मत्स्य पुराण", slug: "matsya-purana", desc: "वास्तुशास्त्र" }
    ]
  },

  "purana/bhavishya-purana": {
    categorySlug: "purana",
    subjectSlug: "bhavishya-purana",
    id: "bhavishya-purana",
    slug: "bhavishya-purana",
    name: "भविष्य पुराण",
    enName: "Bhavishya Purana",
    eyebrow: "पुराण • भविष्य कालज्ञान एवं सूर्य महापुराण (राजस)",
    intro: "भगवान सूर्यदेव की महिमा, भविष्य के ऐतिहासिक राजवंशों और कालचक्र का प्रामाणिक विवेचन करने वाला १४,५०० श्लोकों का महापुराण। इसमें शाकद्वीपीय सूर्य पूजा एवं सामाजिक सदाचार का विशद वर्णन है।",
    overviewText: "भविष्य पुराण चार प्रमुख पर्वों में विभक्त है: ब्राह्म पर्व (सूर्यदेव की विशद महिमा, सूर्य रथ, द्वादश आदित्य व व्रत), मध्यम पर्व (कर्मकांड व संस्कार), प्रतिसर्ग पर्व (सृष्टि के ऐतिहासिक कालचक्र एवं भविष्यवाणियाँ), और उत्तर पर्व (दान-धर्म, तीर्थ व एकादशी आदि व्रत महात्म्य)।",
    stats: "४ पर्व • ५०० अध्याय • १४,५०० श्लोक",
    priest: "सूर्य पूजक / मग",
    badge: "सूर्य महापुराण",
    imageKey: "card-astrology.jpg",
    quickInfo: {
      type: "महापुराण (राजस)",
      language: "संस्कृत",
      author: "महर्षि वेदव्यास / सुमन्तु मुनि",
      shlokaCount: "१४,५०० श्लोक",
      division: "४ पर्व (ब्राह्म, मध्यम, प्रतिसर्ग, उत्तर पर्व)",
      presidingDeity: "भगवान सूर्यदेव (द्वादशादित्य)",
      specialty: "सूर्य उपासना, भविष्य कालचक्र व राजवंश"
    },
    navTabs: ["Overview", "Structure", "Texts", "Rishi & Devata", "Articles", "Related Granthas"],
    structureCards: [
      { id: "bhp-st-1", num: "४", stats: "४ पर्व", title: "प्रमुख पर्व", name: "४ विभाग", enName: "4 Major Parvas", desc: "ब्राह्म, मध्यम, प्रतिसर्ग एवं उत्तर पर्व", badge: "पर्व" },
      { id: "bhp-st-2", num: "५००", stats: "५०० अध्याय", title: "कुल अध्याय", name: "अध्याय विस्तार", enName: "500 Chapters", desc: "सूर्य उपासना, कालचक्र व दान धर्म", badge: "अध्याय" },
      { id: "bhp-st-3", num: "१४,५००", stats: "१४,५०० श्लोक", title: "श्लोक परिमाण", name: "श्लोक संख्या", enName: "14,500 Shlokas", desc: "भविष्यवक्ता पावन महापुराण", badge: "श्लोक" }
    ],
    availableTexts: [
      { title: "ब्राह्म पर्व — सूर्य महात्म्य व पूजा विधान", desc: "२१६ अध्याय • सूर्य रथ, द्वादश आदित्य, साम्ब की तपस्या व शाकद्वीप", slug: "brahma-parva" },
      { title: "मध्यम पर्व — यज्ञ, संस्कार व नारी धर्म", desc: "पावन संस्कार, वर्णाश्रम मर्यादा व अनुष्ठान विधि", slug: "madhyama-parva" },
      { title: "प्रतिसर्ग पर्व — ऐतिहासिक कालचक्र व भावी वंश", desc: "द्वापर व कलियुग के राजवंश, ऐतिहासिक युग परिवर्तन", slug: "pratisarga-parva" },
      { title: "उत्तर पर्व — दान धर्म व महाव्रत", desc: "२०८ अध्याय • षोडश महादान, एकादशी, सूर्य सप्तमी व रोहिणी व्रत", slug: "uttara-parva" }
    ],
    rishis: [
      { name: "सुमन्तु मुनि", role: "प्रवक्ता" },
      { name: "राजा शतानीक", role: "जिज्ञासु" },
      { name: "वेदव्यास", role: "रचयिता" }
    ],
    deities: [
      { name: "भगवान सूर्यदेव", title: "जगत चक्षु" },
      { name: "द्वादश आदित्य", title: "तेज स्वरूप" }
    ],
    devatas: [
      { name: "भगवान सूर्यदेव", title: "जगत चक्षु" },
      { name: "द्वादश आदित्य", title: "तेज स्वरूप" }
    ],
    articles: [
      { id: "surya-upasana-bhavishya", title: "भविष्य पुराण में सूर्य उपासना का विधान", desc: "आरोग्य, यश और आत्मज्ञान की प्राप्ति हेतु सूर्य पूजा के शास्त्रीय नियम।", slug: "surya-upasana" },
      { id: "pratisarga-kalachakra", title: "प्रतिसर्ग पर्व का कालचक्र एवं युग परिवर्तन", desc: "भविष्य पुराण में समय की गति और ऐतिहासिक उत्थान-पतन का दार्शनिक दृष्टिकोण।", slug: "pratisarga-kalachakra" }
    ],
    relatedGranthas: [
      { name: "ब्रह्म पुराण", enName: "Brahma Purana", desc: "कोणार्क सूर्य उपासना", slug: "brahma-purana", category: "purana", badge: "आदि पुराण" },
      { name: "विष्णु पुराण", enName: "Vishnu Purana", desc: "सूर्य-चन्द्र वंश", slug: "vishnu-purana", category: "purana", badge: "सात्विक" }
    ],
    relatedSubjects: [
      { name: "ब्रह्म पुराण", slug: "brahma-purana", desc: "सूर्य क्षेत्र महात्म्य" },
      { name: "मार्कण्डेय पुराण", slug: "markandeya-purana", desc: "सूर्य चरित्र" }
    ]
  },

  "purana/brahmavaivarta-purana": {
    categorySlug: "purana",
    subjectSlug: "brahmavaivarta-purana",
    id: "brahmavaivarta-purana",
    slug: "brahmavaivarta-purana",
    name: "ब्रह्मवैवर्त पुराण",
    enName: "Brahmavaivarta Purana",
    eyebrow: "पुराण • गोलोक धाम एवं राधा-कृष्ण महापुराण (राजस)",
    intro: "गोलोक धाम में भगवान श्रीकृष्ण और श्रीराधारानी की नित्य लीला, पंचप्रकृति (दुर्गा, राधा, लक्ष्मी, सरस्वती, सावित्री) के प्रादुर्भाव, तथा श्रीगणेश जन्म का अमृतमय निरूपण करने वाला १८,००० श्लोकों का महापुराण।",
    overviewText: "ब्रह्मवैवर्त पुराण चार विशाल खंडों में विभक्त है: १. ब्रह्म खंड (सृष्टि उत्पत्ति व गोलोक वैभव), २. प्रकृति खंड (भगवती मूलप्रकृति के पाँच अंश — दुर्गा, राधा, लक्ष्मी, सरस्वती, सावित्री), ३. गणपति खंड (श्रीगणेश का प्राकट्य, परशुराम युद्ध व एकदंत रूप), और ४. श्रीकृष्णजन्म खंड (१३१ अध्याय • गोलोक से धरा अवतरण, वृंदावन रासपंचाध्यायी व द्वारका लीला)।",
    stats: "४ खंड • २७६ अध्याय • १८,००० श्लोक",
    priest: "उद्गाता / वैष्णवाचार्य",
    badge: "गोलोक महापुराण",
    imageKey: "deity-lakshmi.jpg",
    quickInfo: {
      type: "महापुराण (राजस / माधुर्य भक्ति)",
      language: "संस्कृत",
      author: "महर्षि वेदव्यास / सूत जी",
      shlokaCount: "१८,००० श्लोक",
      division: "४ खंड (२७६ अध्याय)",
      presidingDeity: "भगवान श्रीकृष्ण एवं श्रीराधारानी",
      specialty: "गोलोक धाम, पंचप्रकृति, गणेश प्राकट्य"
    },
    navTabs: ["Overview", "Structure", "Texts", "Rishi & Devata", "Articles", "Related Granthas"],
    structureCards: [
      { id: "bvp-st-1", num: "४", stats: "४ खंड", title: "प्रमुख खंड", name: "४ विभाग", enName: "4 Great Khandas", desc: "ब्रह्म, प्रकृति, गणपति एवं श्रीकृष्णजन्म खंड", badge: "खंड" },
      { id: "bvp-st-2", num: "२७६", stats: "२७६ अध्याय", title: "कुल अध्याय", name: "अध्याय विस्तार", enName: "276 Chapters", desc: "गोलोक धाम, पंचप्रकृति व कृष्ण लीलामृत", badge: "अध्याय" },
      { id: "bvp-st-3", num: "१८,०००", stats: "१८,००० श्लोक", title: "श्लोक परिमाण", name: "श्लोक संख्या", enName: "18,000 Shlokas", desc: "दिव्य माधुर्य भक्ति रस", badge: "श्लोक" }
    ],
    availableTexts: [
      { title: "१. ब्रह्म खंड (३० अध्याय)", desc: "गोलोक धाम का प्राकट्य, सृष्टि विस्तार, नारद उपदेश", slug: "brahma-khanda" },
      { title: "२. प्रकृति खंड (६७ अध्याय)", desc: "पंचप्रकृति — दुर्गा, राधा, लक्ष्मी, सरस्वती, सावित्री उपाख्यान", slug: "prakriti-khanda" },
      { title: "३. गणपति खंड (४६ अध्याय)", desc: "श्रीगणेश का दिव्य प्रादुर्भाव, शनि दृष्टि, परशुराम युद्ध", slug: "ganapati-khanda" },
      { title: "४. श्रीकृष्णजन्म खंड (१३१ अध्याय)", desc: "श्रीकृष्ण-राधा विलास, वृंदावन रास, मथुरा गमन व परम धाम गमन", slug: "krishnajanma-khanda" }
    ],
    rishis: [
      { name: "सौति सूत जी", role: "प्रवक्ता" },
      { name: "शौनक जी", role: "श्रोता" },
      { name: "देवर्षि नारद", role: "ज्ञान जिज्ञासु" }
    ],
    deities: [
      { name: "श्रीकृष्ण (गोलोक बिहारी)", title: "परब्रह्म" },
      { name: "श्रीराधारानी", title: "ह्लादिनी शक्ति" },
      { name: "श्रीगणेश", title: "विघ्नहर्ता" }
    ],
    devatas: [
      { name: "श्रीकृष्ण (गोलोक बिहारी)", title: "परब्रह्म" },
      { name: "श्रीराधारानी", title: "ह्लादिनी शक्ति" },
      { name: "श्रीगणेश", title: "विघ्नहर्ता" }
    ],
    articles: [
      { id: "pancha-prakriti-brahmavaivarta", title: "ब्रह्मवैवर्त पुराण में पंचप्रकृति का स्वरूप", desc: "दुर्गा, राधा, लक्ष्मी, सरस्वती और सावित्री का तात्विक रहस्य।", slug: "pancha-prakriti" },
      { id: "goloka-dhama-rahasya", title: "गोलोक धाम — नित्य चिन्मय जगत का दर्शन", desc: "भौतिक प्रकृति से परे परम व्योम में स्थित गोलोक की दिव्यता।", slug: "goloka-dhama" }
    ],
    relatedGranthas: [
      { name: "श्रीमद्भागवत महापुराण", enName: "Srimad Bhagavata", desc: "कृष्ण लीलामृत", slug: "shrimad-bhagavata", category: "purana", badge: "सात्विक" },
      { name: "पद्म पुराण", enName: "Padma Purana", desc: "राधा-कृष्ण महिमा", slug: "padma-purana", category: "purana", badge: "सात्विक" }
    ],
    relatedSubjects: [
      { name: "श्रीमद्भागवत", slug: "shrimad-bhagavata", desc: "दशम स्कंध रासलीला" },
      { name: "मार्कण्डेय पुराण", slug: "markandeya-purana", desc: "दुर्गा सप्तशती" }
    ]
  },

  "purana/linga-purana": {
    categorySlug: "purana",
    subjectSlug: "linga-purana",
    id: "linga-purana",
    slug: "linga-purana",
    name: "लिंग पुराण",
    enName: "Linga Purana",
    eyebrow: "पुराण • शैव महापुराण (तामस)",
    intro: "भगवान सदाशिव के लिंगोद्भव (अग्नि स्तंभ), २८ योगेश्वर अवतारों, पंचाक्षर मंत्र (ॐ नमः शिवाय) तथा पाशुपत योग का प्रामाणिक निरूपण करने वाला ११,००० श्लोकों का शैव महापुराण।",
    overviewText: "लिंग पुराण में दो भाग हैं: पूर्व भाग (१०८ अध्याय) और उत्तर भाग (५५ अध्याय)। इसका मूल प्रतिपाद्य लिंग तत्व है — 'लयनाल्लिङ्गमुच्यते' जिसमें संपूर्ण जगत लीन होता है और जिससे पुनः प्रकट होता है। इसमें ब्रह्मा और विष्णु के मध्य अग्नि स्तंभ के प्राकट्य, ज्योतिर्लिंग महिमा और मृत्युंजय साधन का वर्णन है।",
    stats: "२ भाग • १६३ अध्याय • ११,००० श्लोक",
    priest: "शैवाचार्य / अध्वर्यु",
    badge: "शैव महापुराण",
    imageKey: "deity-shiva.jpg",
    quickInfo: {
      type: "महापुराण (तामस / शैवागम)",
      language: "संस्कृत",
      author: "महर्षि वेदव्यास / भगवान ब्रह्मा",
      shlokaCount: "११,००० श्लोक",
      division: "पूर्व व उत्तर भाग (१६३ अध्याय)",
      presidingDeity: "भगवान सदाशिव / लिंगोद्भव महेश्वर",
      specialty: "लिंगोद्भव आख्यान, २८ योगेश्वर अवतार, पंचाक्षर मंत्र"
    },
    navTabs: ["Overview", "Structure", "Texts", "Rishi & Devata", "Articles", "Related Granthas"],
    structureCards: [
      { id: "lp-st-1", num: "२", stats: "२ भाग", title: "मुख्य भाग", name: "पूर्व व उत्तर भाग", enName: "Purva & Uttara Bhaga", desc: "पूर्व भाग (१०८ अध्याय) व उत्तर भाग (५५ अध्याय)", badge: "भाग" },
      { id: "lp-st-2", num: "१६३", stats: "१६३ अध्याय", title: "कुल अध्याय", name: "अध्याय विस्तार", enName: "163 Chapters", desc: "शैव तत्व, योग, लिंगार्चन व स्तोत्र", badge: "अध्याय" },
      { id: "lp-st-3", num: "११,०००", stats: "११,००० श्लोक", title: "श्लोक परिमाण", name: "श्लोक संख्या", enName: "11,000 Shlokas", desc: "महादेव की निष्कल-सकल महिमा", badge: "श्लोक" }
    ],
    availableTexts: [
      { title: "पूर्व भाग — लिंगोद्भव एवं सृष्टि (१०८ अध्याय)", desc: "अग्नि स्तंभ का प्राकट्य, शिव सहस्रनाम, पाशुपत व्रत व लिंग प्रतिष्ठा", slug: "purva-bhaga" },
      { title: "उत्तर भाग — पंचाक्षर मंत्र व योग (५५ अध्याय)", desc: "ॐ नमः शिवाय का जप विधान, २८ योगेश्वर अवतार, अघोर-ईशान स्वरूप", slug: "uttara-bhaga" }
    ],
    rishis: [
      { name: "महर्षि वेदव्यास", role: "रचयिता" },
      { name: "रोमहर्षण सूत", role: "प्रवक्ता" },
      { name: "दधीचि मुनि", role: "शैव तपस्वी" }
    ],
    deities: [
      { name: "भगवान सदाशिव", title: "लिंगोद्भव महेश्वर" },
      { name: "माता पार्वती", title: "शिवा" }
    ],
    devatas: [
      { name: "भगवान सदाशिव", title: "लिंगोद्भव महेश्वर" },
      { name: "माता पार्वती", title: "शिवा" }
    ],
    articles: [
      { id: "lingodbhava-rahasya", title: "लिंगोद्भव — अनादि अनंत अग्नि स्तंभ का प्राकट्य", desc: "ब्रह्मा और विष्णु के दर्प भंजन हेतु महादेव के ज्योतिर्लिंग स्वरूप का साक्षात्कार।", slug: "lingodbhava" },
      { id: "panchakshara-mantra-sadhana", title: "पंचाक्षर मंत्र (ॐ नमः शिवाय) की शास्त्रीय साधना", desc: "लिंग पुराण के अनुसार षडक्षर व पंचाक्षर मंत्र के न्यास एवं फल।", slug: "panchakshara-mantra" }
    ],
    relatedGranthas: [
      { name: "शिव पुराण", enName: "Shiva Purana", desc: "७ संहिताएँ, द्वादश ज्योतिर्लिंग", slug: "shiva-purana", category: "purana", badge: "शैव महापुराण" },
      { name: "स्कन्द पुराण", enName: "Skanda Purana", desc: "काशी व केदार खंड", slug: "skanda-purana", category: "purana", badge: "महापुराण" }
    ],
    relatedSubjects: [
      { name: "शिव पुराण", slug: "shiva-purana", desc: "द्वादश ज्योतिर्लिंग" },
      { name: "स्कन्द पुराण", slug: "skanda-purana", desc: "काशी खंड" }
    ]
  },

  "purana/varaha-purana": {
    categorySlug: "purana",
    subjectSlug: "varaha-purana",
    id: "varaha-purana",
    slug: "varaha-purana",
    name: "वराह पुराण",
    enName: "Varaha Purana",
    eyebrow: "पुराण • भू-उद्धार एवं वैष्णव महापुराण (सात्विक)",
    intro: "भगवान आदि वराह और पृथ्वी देवी (भूदेवी) के दिव्य संवाद पर आधारित २४,००० श्लोकों का पावन महापुराण। इसमें रसातल से धरा उद्धार, मथुरा महात्म्य एवं द्वादशी व्रत का विशद विधान है।",
    overviewText: "वराह पुराण में २१८ अध्याय हैं। जब प्रलयकाल में हिरण्याक्ष पृथ्वी को रसातल में ले गया, तब भगवान विष्णु ने श्वेत वराह रूप धारण कर पृथ्वी का उद्धार किया। कृतज्ञ भूदेवी के प्रश्नों के उत्तर में भगवान वराह ने धर्म, कर्म, मथुरा-वृंदावन तीर्थ, एकादशी-द्वादशी व्रत तथा मोक्ष का मार्ग प्रकाशित किया।",
    stats: "२१८ अध्याय • २४,००० श्लोक • सात्विक",
    priest: "वैष्णवाचार्य / अध्वर्यु",
    badge: "भू-उद्धार महापुराण",
    imageKey: "deity-dashavatara.jpg",
    quickInfo: {
      type: "महापुराण (सात्विक)",
      language: "संस्कृत",
      author: "महर्षि वेदव्यास / भगवान वराह",
      shlokaCount: "२४,००० श्लोक",
      division: "२१८ अध्याय",
      presidingDeity: "भगवान आदि वराह एवं भूदेवी",
      specialty: "भू-उद्धार आख्यान, मथुरा तीर्थ, द्वादशी व्रत"
    },
    navTabs: ["Overview", "Structure", "Texts", "Rishi & Devata", "Articles", "Related Granthas"],
    structureCards: [
      { id: "vp-st-1", num: "२१८", stats: "२१८ अध्याय", title: "कुल अध्याय", name: "अध्याय विस्तार", enName: "218 Chapters", desc: "वराह-भूदेवी संवाद, तीर्थ व व्रत विधान", badge: "अध्याय" },
      { id: "vp-st-2", num: "२४,०००", stats: "२४,००० श्लोक", title: "श्लोक परिमाण", name: "श्लोक संख्या", enName: "24,000 Shlokas", desc: "वैष्णव धर्म व मर्यादा", badge: "श्लोक" },
      { id: "vp-st-3", num: "३", stats: "३ प्रमुख विषय", title: "प्रधान विषय", name: "प्रमुख अंग", enName: "3 Main Themes", desc: "सृष्टि उद्धार, मथुरा महात्म्य व प्रायश्चित्त विधि", badge: "विषय" }
    ],
    availableTexts: [
      { title: "प्रथम भाग — वराह अवतार व पृथ्वी उद्धार", desc: "हिरण्याक्ष वध, रसातल से धरा उत्थान, भूदेवी स्तुति", slug: "bhumi-uddhara" },
      { title: "मध्यम भाग — मथुरा महात्म्य (अध्याय १३७-१६०)", desc: "विश्रांत तीर्थ, गोवर्धन, यमुना महिमा व द्वादश वन", slug: "mathura-mahatmya" },
      { title: "उत्तर भाग — द्वादशी व्रत व वैष्णव आचार", desc: "विविध द्वादशी व्रत, कर्मविपाक व मोक्ष प्राप्ति", slug: "dvadashi-vrata" }
    ],
    rishis: [
      { name: "भगवान वराह", role: "दिव्य वक्ता" },
      { name: "पृथ्वी देवी (भूदेवी)", role: "जिज्ञासु" },
      { name: "वेदव्यास", role: "संकलनकर्ता" }
    ],
    deities: [
      { name: "भगवान वराह", title: "धरा उद्धारक" },
      { name: "भूदेवी", title: "माता पृथ्वी" }
    ],
    devatas: [
      { name: "भगवान वराह", title: "धरा उद्धारक" },
      { name: "भूदेवी", title: "माता पृथ्वी" }
    ],
    articles: [
      { id: "varaha-bhumi-uddhara", title: "रसातल से पृथ्वी का उद्धार — वराह अवतार का तात्विक रहस्य", desc: "अंधकार और जलप्रलय से जीवनदायिनी धरा की रक्षा का ब्रह्मांडीय रूपक।", slug: "bhumi-uddhara" },
      { id: "mathura-mahatmya-varaha", title: "वराह पुराण में मथुरा एवं यमुना तीर्थ की महिमा", desc: "मथुरा को समस्त तीर्थों में शिरोमणि बताने वाला शास्त्रीय प्रसंग।", slug: "mathura-mahatmya" }
    ],
    relatedGranthas: [
      { name: "विष्णु पुराण", enName: "Vishnu Purana", desc: "वराह अवतार व सृष्टि", slug: "vishnu-purana", category: "purana", badge: "सात्विक" },
      { name: "श्रीमद्भागवत", enName: "Srimad Bhagavata", desc: "तृतीय स्कंध वराह लीला", slug: "shrimad-bhagavata", category: "purana", badge: "सात्विक" }
    ],
    relatedSubjects: [
      { name: "विष्णु पुराण", slug: "vishnu-purana", desc: "प्रथम अंश वराह कथा" },
      { name: "श्रीमद्भागवत", slug: "shrimad-bhagavata", desc: "तृतीय स्कंध" }
    ]
  },

  "purana/vamana-purana": {
    categorySlug: "purana",
    subjectSlug: "vamana-purana",
    id: "vamana-purana",
    slug: "vamana-purana",
    name: "वामन पुराण",
    enName: "Vamana Purana",
    eyebrow: "पुराण • त्रिविक्रम अवतार एवं शिव-विष्णु समन्वय (राजस)",
    intro: "भगवान विष्णु के वामन (त्रिविक्रम) अवतार, दानवीर राजा बलि से तीन पग भूमि याचना, तथा हरि-हर (शिव-विष्णु) की एकात्मता का सुंदर प्रतिपादन करने वाला १०,००० श्लोकों का महापुराण।",
    overviewText: "वामन पुराण में ९५ अध्याय हैं। महर्षि पुलस्त्य द्वारा देवर्षि नारद को उपदिष्ट इस पुराण में वामन अवतार द्वारा बलि का उद्धार, कुरुक्षेत्र और सरयू आदि तीर्थों की महिमा, सती का देहत्याग, पार्वती का जन्म तथा शिव-पार्वती विवाह का विशद आख्यान निहित है।",
    stats: "९५ अध्याय • १०,००० श्लोक • राजस",
    priest: "ब्रह्मा / अध्वर्यु",
    badge: "त्रिविक्रम महापुराण",
    imageKey: "card-samhita.jpg",
    quickInfo: {
      type: "महापुराण (राजस / समन्वयवादी)",
      language: "संस्कृत",
      author: "महर्षि पुलस्त्य / वेदव्यास",
      shlokaCount: "१०,००० श्लोक",
      division: "९५ अध्याय",
      presidingDeity: "भगवान वामन (त्रिविक्रम) एवं सदाशिव",
      specialty: "बलि-वामन संवाद, हरि-हर समन्वय, कुरुक्षेत्र"
    },
    navTabs: ["Overview", "Structure", "Texts", "Rishi & Devata", "Articles", "Related Granthas"],
    structureCards: [
      { id: "vmp-st-1", num: "९५", stats: "९५ अध्याय", title: "कुल अध्याय", name: "अध्याय विस्तार", enName: "95 Chapters", desc: "वामन लीला, तीर्थ, सती चरित्र व शिव-विष्णु स्तुति", badge: "अध्याय" },
      { id: "vmp-st-2", num: "१०,०००", stats: "१०,००० श्लोक", title: "श्लोक परिमाण", name: "श्लोक संख्या", enName: "10,000 Shlokas", desc: "भक्ति व समन्वय का पावन ग्रंथ", badge: "श्लोक" },
      { id: "vmp-st-3", num: "३", stats: "३ पग भूमि", title: "त्रिविक्रम लीला", name: "त्रिविक्रम रूप", enName: "3 Steps of Trivikrama", desc: "पृथ्वी, अंतरिक्ष और ब्रह्मांड का नाप", badge: "लीला" }
    ],
    availableTexts: [
      { title: "पूर्व भाग — कुरुक्षेत्र महात्म्य व सती चरित्र", desc: "ब्रह्म सरोवर, सती देहत्याग, कामदेव दहन व पार्वती जन्म", slug: "purva-bhaga" },
      { title: "मध्यम भाग — वामन अवतार व बलि संवाद (अध्याय ७५-९२)", desc: "अदिति के गर्भ से वामन प्राकट्य, यज्ञशाला गमन, त्रिविक्रम रूप", slug: "vamana-charitra" },
      { title: "उत्तर भाग — हरि-हर स्तुति व सुदर्शन चक्र उत्पत्ति", desc: "शिव और विष्णु की अभिन्नता, भक्त प्रह्लाद संवाद", slug: "hari-hara-stuti" }
    ],
    rishis: [
      { name: "महर्षि पुलस्त्य", role: "प्रवक्ता" },
      { name: "देवर्षि नारद", role: "श्रोता" },
      { name: "कश्यप व अदिति", role: "वामन माता-पिता" }
    ],
    deities: [
      { name: "भगवान वामन (त्रिविक्रम)", title: "सर्वव्यापक" },
      { name: "भगवान शिव", title: "हरि-हर स्वरूप" },
      { name: "दानवीर बलि", title: "परम भक्त" }
    ],
    devatas: [
      { name: "भगवान वामन (त्रिविक्रम)", title: "सर्वव्यापक" },
      { name: "भगवान शिव", title: "हरि-हर स्वरूप" },
      { name: "दानवीर बलि", title: "परम भक्त" }
    ],
    articles: [
      { id: "vamana-bali-samvada", title: "वामन अवतार और राजा बलि की अनन्य शरणागति", desc: "तीन पग भूमि में सब कुछ देकर स्वयं को समर्पित करने की भक्ति गाथा।", slug: "vamana-bali" },
      { id: "hari-hara-advaita", title: "हरि-हर एकात्मता — वामन पुराण का समन्वय संदेश", desc: "शिवाय विष्णुरूपाय विष्णवे शिवरूपिणे — शिव और विष्णु में भेद न करने की प्रेरणा।", slug: "hari-hara" }
    ],
    relatedGranthas: [
      { name: "श्रीमद्भागवत", enName: "Srimad Bhagavata", desc: "अष्टम स्कंध वामन लीला", slug: "shrimad-bhagavata", category: "purana", badge: "सात्विक" },
      { name: "शिव पुराण", enName: "Shiva Purana", desc: "सती-पार्वती चरित्र", slug: "shiva-purana", category: "purana", badge: "शैव महापुराण" }
    ],
    relatedSubjects: [
      { name: "श्रीमद्भागवत", slug: "shrimad-bhagavata", desc: "अष्टम स्कंध" },
      { name: "शिव पुराण", slug: "shiva-purana", desc: "रुद्र संहिता" }
    ]
  },

  "purana/kurma-purana": {
    categorySlug: "purana",
    subjectSlug: "kurma-purana",
    id: "kurma-purana",
    slug: "kurma-purana",
    name: "कूर्म पुराण",
    enName: "Kurma Purana",
    eyebrow: "पुराण • ईश्वर गीता एवं कच्छप अवतार (तामस)",
    intro: "भगवान विष्णु के कूर्म (कच्छप) अवतार, समुद्र मंथन, तथा भगवान शिव द्वारा उपदिष्ट विश्वप्रसिद्ध 'ईश्वर गीता' (११ अध्याय) का अनुपम भंडार १७,००० श्लोकों का महापुराण।",
    overviewText: "कूर्म पुराण दो विभागों में विभक्त है: पूर्व विभाग (५३ अध्याय) और उत्तर विभाग (४६ अध्याय)। समुद्र मंथन के समय मंदराचल को अपनी पीठ पर धारण करने वाले भगवान कूर्म ने राजा इंद्रद्युम्न को यह ज्ञान दिया। इसके उत्तर विभाग में ११ अध्यायों की 'ईश्वर गीता' और 'व्यास गीता' निहित है जो अद्वैत ज्ञान व पाशुपत योग का शिखर है।",
    stats: "२ विभाग • ९९ अध्याय • १७,००० श्लोक",
    priest: "शैवाचार्य / ज्ञानी",
    badge: "ईश्वर गीता पुराण",
    imageKey: "card-purana.jpg",
    quickInfo: {
      type: "महापुराण (तामस / शैव-वैष्णव समन्वय)",
      language: "संस्कृत",
      author: "भगवान कूर्म / महर्षि वेदव्यास",
      shlokaCount: "१७,००० श्लोक",
      division: "पूर्व व उत्तर विभाग (९९ अध्याय)",
      presidingDeity: "भगवान कूर्म एवं सदाशिव महेश्वर",
      specialty: "ईश्वर गीता (११ अध्याय), व्यास गीता, समुद्र मंथन"
    },
    navTabs: ["Overview", "Structure", "Texts", "Rishi & Devata", "Articles", "Related Granthas"],
    structureCards: [
      { id: "kp-st-1", num: "२", stats: "२ विभाग", title: "मुख्य विभाग", name: "पूर्व व उत्तर विभाग", enName: "Purva & Uttara Vibhaga", desc: "पूर्व विभाग (५३ अध्याय) व उत्तर विभाग (४६ अध्याय)", badge: "विभाग" },
      { id: "kp-st-2", num: "९९", stats: "९९ अध्याय", title: "कुल अध्याय", name: "अध्याय विस्तार", enName: "99 Chapters", desc: "कूर्म अवतार, ईश्वर गीता, व्यास गीता व तीर्थ", badge: "अध्याय" },
      { id: "kp-st-3", num: "१७,०००", stats: "१७,००० श्लोक", title: "श्लोक परिमाण", name: "श्लोक संख्या", enName: "17,000 Shlokas", desc: "अद्वैत तत्वज्ञान व पाशुपत साधना", badge: "श्लोक" }
    ],
    availableTexts: [
      { title: "पूर्व विभाग — कूर्म प्राकट्य व समुद्र मंथन", desc: "मंदराचल धारण, लक्ष्मी प्राकट्य, काशी व प्रयाग महात्म्य", slug: "purva-vibhaga" },
      { title: "उत्तर विभाग — ईश्वर गीता (११ अध्याय)", desc: "भगवान शिव द्वारा ऋषियों को आत्मज्ञान, माया, अद्वैत व पाशुपत योग उपदेश", slug: "ishvara-gita" },
      { title: "उत्तर विभाग — व्यास गीता व वर्णाश्रम", desc: "महर्षि वेदव्यास द्वारा सदाचार, प्रायश्चित्त व संन्यास धर्म", slug: "vyasa-gita" }
    ],
    rishis: [
      { name: "भगवान कूर्म", role: "दिव्य वक्ता" },
      { name: "राजा इंद्रद्युम्न", role: "श्रोता" },
      { name: "महर्षि वेदव्यास", role: "ज्ञान प्रणेता" }
    ],
    deities: [
      { name: "भगवान कूर्म अवतार", title: "आधार शक्ति" },
      { name: "भगवान शिव (ईश्वर गीता वक्ता)", title: "परम गुरु" }
    ],
    devatas: [
      { name: "भगवान कूर्म अवतार", title: "आधार शक्ति" },
      { name: "भगवान शिव (ईश्वर गीता वक्ता)", title: "परम गुरु" }
    ],
    articles: [
      { id: "ishvara-gita-rahasya", title: "ईश्वर गीता — कूर्म पुराण का दार्शनिक मुकुट", desc: "भगवान शिव द्वारा उपदिष्ट ११ अध्यायों का विशुद्ध अद्वैत वेदान्त और पाशुपत योग।", slug: "ishvara-gita" },
      { id: "kurma-samudra-manthana", title: "समुद्र मंथन में कच्छप अवतार का आधारभूत महत्व", desc: "संसार सागर में मथने वाले चित्त को स्थिर करने का आध्यात्मिक संदेश।", slug: "samudra-manthana" }
    ],
    relatedGranthas: [
      { name: "श्रीमद्भगवद्गीता", enName: "Bhagavad Gita", desc: "महाभारत भीष्म पर्व", slug: "bhagavad-gita", category: "itihasa", badge: "प्रस्थानत्रयी" },
      { name: "शिव पुराण", enName: "Shiva Purana", desc: "कैलास संहिता", slug: "shiva-purana", category: "purana", badge: "शैव महापुराण" }
    ],
    relatedSubjects: [
      { name: "श्रीमद्भगवद्गीता", slug: "bhagavad-gita", desc: "१८ अध्याय" },
      { name: "शिव पुराण", slug: "shiva-purana", desc: "७ संहिताएँ" }
    ]
  },

  "purana/matsya-purana": {
    categorySlug: "purana",
    subjectSlug: "matsya-purana",
    id: "matsya-purana",
    slug: "matsya-purana",
    name: "मत्स्य पुराण",
    enName: "Matsya Purana",
    eyebrow: "पुराण • जलप्रलय, पंचलक्षण एवं वास्तु महापुराण (तामस)",
    intro: "वैवस्वत मनु को जलप्रलय से बचाने वाले मत्स्य अवतार, पुराणों के शास्त्रीय ५ लक्षणों (सर्गश्च प्रतिसर्गश्च...), तथा प्राचीन भारतीय वास्तु व मूर्तिकला का अप्रतिम ग्रंथ (१४,००० श्लोक)।",
    overviewText: "मत्स्य पुराण में २९१ अध्याय हैं। प्रलयकाल में भगवान विष्णु ने सींग वाले विशाल स्वर्ण मत्स्य का रूप धारण कर मनु की नौका को हिमालय के श्रृंग (नौकाबंधन) तक पहुँचाया। इसमें पंचलक्षण, नर्मदा व प्रयाग महात्म्य, राजधर्म, तथा गृह-मंदिर निर्माण, नगर नियोजन व प्रतिमा लक्षणों का विस्तृत शास्त्रीय विधान है।",
    stats: "२९१ अध्याय • १४,००० श्लोक • तामस",
    priest: "स्थपति / होता",
    badge: "वास्तु-शिल्प महापुराण",
    imageKey: "card-vastu.jpg",
    quickInfo: {
      type: "महापुराण (तामस / वास्तु-शिल्प शास्त्र)",
      language: "संस्कृत",
      author: "भगवान मत्स्य / महर्षि वेदव्यास",
      shlokaCount: "१४,००० श्लोक",
      division: "२९१ अध्याय",
      presidingDeity: "भगवान मत्स्य अवतार एवं वैवस्वत मनु",
      specialty: "पंचलक्षण (मत्स्य ५३.६५), वास्तुशास्त्र, शिल्पकला"
    },
    navTabs: ["Overview", "Structure", "Texts", "Rishi & Devata", "Articles", "Related Granthas"],
    structureCards: [
      { id: "mp-st-1", num: "२९१", stats: "२९१ अध्याय", title: "कुल अध्याय", name: "अध्याय विस्तार", enName: "291 Chapters", desc: "प्रलय आख्यान, वास्तु, शिल्प, मन्वन्तर व राजधर्म", badge: "अध्याय" },
      { id: "mp-st-2", num: "१४,०००", stats: "१४,००० श्लोक", title: "श्लोक परिमाण", name: "श्लोक संख्या", enName: "14,000 Shlokas", desc: "पुराण लक्षण एवं संस्कृति का आधार", badge: "श्लोक" },
      { id: "mp-st-3", num: "५", stats: "५ लक्षण", title: "पुराण पंचलक्षण", name: "पंच लक्षण", enName: "Pancha Lakshanas", desc: "सर्ग, प्रतिसर्ग, वंश, मन्वन्तर, वंशानुचरित", badge: "लक्षण" }
    ],
    availableTexts: [
      { title: "प्रलय आख्यान एवं मनु संवाद (अध्याय १-१०)", desc: "छोटी मछली से विराट मत्स्य रूप, जलप्रलय, वेदों की रक्षा", slug: "pralaya-akhyana" },
      { title: "पुराण पंचलक्षण एवं महादान (अध्याय ५३)", desc: "पुराणों की शास्त्रीय परिभाषा एवं षोडश महादान", slug: "pancha-lakshana" },
      { title: "वास्तुशास्त्र एवं प्रतिमा लक्षण (अध्याय २५२-२७०)", desc: "गृह वास्तु, देवालय निर्माण, स्तम्भ माप व देवमूर्तिकला", slug: "vastu-shilpa" },
      { title: "प्रयाग व नर्मदा महात्म्य", desc: "रेवा नदी के पावन तीर्थ, बाणलिंग व पितृतर्पण", slug: "tirtha-mahatmya" }
    ],
    rishis: [
      { name: "भगवान मत्स्य", role: "दिव्य अवतार / वक्ता" },
      { name: "वैवस्वत मनु (सत्यव्रत)", role: "मानवता के जनक / श्रोता" },
      { name: "सप्तर्षि", role: "ज्ञान रक्षक" }
    ],
    deities: [
      { name: "भगवान मत्स्य अवतार", title: "वेद रक्षक" },
      { name: "माता नर्मदा (रेवा)", title: "पुण्यतोया" }
    ],
    devatas: [
      { name: "भगवान मत्स्य अवतार", title: "वेद रक्षक" },
      { name: "माता नर्मदा (रेवा)", title: "पुण्यतोया" }
    ],
    articles: [
      { id: "matsya-purana-pancha-lakshana", title: "मत्स्य पुराण ५३.६५ — पुराणों के पंच लक्षण", desc: "सर्गश्च प्रतिसर्गश्च वंशो मन्वन्तराणि च — पुराण साहित्य की शास्त्रीय कसौटी।", slug: "pancha-lakshana" },
      { id: "vastu-shastra-matsya", title: "मत्स्य पुराण का वास्तु एवं देवशिल्प विज्ञान", desc: "मंदिर निर्माण, स्तम्भ अनुपात और वास्तु मंडल के प्राचीन नियम।", slug: "vastu-shastra" }
    ],
    relatedGranthas: [
      { name: "अग्नि पुराण", enName: "Agni Purana", desc: "वास्तु व आयुर्वेद", slug: "agni-purana", category: "purana", badge: "राजस" },
      { name: "स्कन्द पुराण", enName: "Skanda Purana", desc: "रेवा खंड", slug: "skanda-purana", category: "purana", badge: "महापुराण" }
    ],
    relatedSubjects: [
      { name: "अग्नि पुराण", slug: "agni-purana", desc: "वास्तुशास्त्र" },
      { name: "स्कन्द पुराण", slug: "skanda-purana", desc: "रेवा खंड" }
    ]
  },

  "purana/brahmanda-purana": {
    categorySlug: "purana",
    subjectSlug: "brahmanda-purana",
    id: "brahmanda-purana",
    slug: "brahmanda-purana",
    name: "ब्रह्माण्ड पुराण",
    enName: "Brahmanda Purana",
    eyebrow: "पुराण • ललिता सहस्रनाम एवं ब्रह्मांड सृष्टि (राजस)",
    intro: "हिरण्यगर्भ रूपी स्वर्ण-अण्ड से ब्रह्मांड की उत्पत्ति, विश्वप्रसिद्ध 'श्री ललिता सहस्रनाम स्तोत्र', अध्यात्म रामायण तथा भगवान परशुराम के दिव्य चरित्र का भंडार १२,००० श्लोकों का महापुराण।",
    overviewText: "ब्रह्माण्ड पुराण चार पादों में विभक्त है: प्रक्रिया पाद, अनुषंग पाद, उपोद्घात पाद और उपसंहार पाद (१५६ अध्याय)। इसका सर्वाधिक पूज्य भाग 'ललितोपाख्यान' है जिसमें भगवती ललिता त्रिपुरसुंदरी का प्राकट्य, भण्डासुर वध, श्रीचक्र (श्रीयंत्र) रहस्य तथा हयग्रीव-अगस्त्य संवाद रूपी 'श्री ललिता सहस्रनाम' स्तोत्र संगृहीत है।",
    stats: "४ पाद • १५६ अध्याय • १२,००० श्लोक",
    priest: "शाक्ताचार्य / ब्रह्मा",
    badge: "ललिता महापुराण",
    imageKey: "card-purana.jpg",
    quickInfo: {
      type: "महापुराण (राजस / शाक्त-वैष्णव रत्न)",
      language: "संस्कृत",
      author: "महर्षि वेदव्यास / भगवान हयग्रीव",
      shlokaCount: "१२,००० श्लोक",
      division: "४ पाद (प्रक्रिया, अनुषंग, उपोद्घात, उपसंहार)",
      presidingDeity: "भगवती ललिता त्रिपुरसुंदरी एवं परब्रह्म",
      specialty: "श्री ललिता सहस्रनाम, श्रीचक्र, अध्यात्म रामायण"
    },
    navTabs: ["Overview", "Structure", "Texts", "Rishi & Devata", "Articles", "Related Granthas"],
    structureCards: [
      { id: "bdp-st-1", num: "४", stats: "४ पाद", title: "प्रमुख पाद", name: "४ पाद", enName: "4 Great Padas", desc: "प्रक्रिया, अनुषंग, उपोद्घात एवं उपसंहार पाद", badge: "पाद" },
      { id: "bdp-st-2", num: "१५६", stats: "१५६ अध्याय", title: "कुल अध्याय", name: "अध्याय विस्तार", enName: "156 Chapters", desc: "ब्रह्मांड उत्पत्ति, ललितोपाख्यान व परशुराम चरित्र", badge: "अध्याय" },
      { id: "bdp-st-3", num: "१२,०००", stats: "१२,००० श्लोक", title: "श्लोक परिमाण", name: "श्लोक संख्या", enName: "12,000 Shlokas", desc: "शाक्त व वैदिक उपासना का मुकुटमणि", badge: "श्लोक" }
    ],
    availableTexts: [
      { title: "प्रक्रिया व अनुषंग पाद — हिरण्यगर्भ सृष्टि", desc: "स्वर्ण अण्ड से ब्रह्मांड का प्रकटन, भूगोल, खगोल व काल गणना", slug: "prakriya-anushanga" },
      { title: "उपोद्घात पाद — परशुराम चरित्र व राजवंश", desc: "कार्तवीर्य अर्जुन वध, परशुराम तपस्या व क्षत्रिय विजय", slug: "parashurama-charitra" },
      { title: "ललितोपाख्यान — श्री ललिता सहस्रनाम स्तोत्र", desc: "हयग्रीव-अगस्त्य संवाद, भगवती राजराजेश्वरी के १००० दिव्य नाम व फलश्रुति", slug: "lalita-sahasranama" }
    ],
    rishis: [
      { name: "भगवान हयग्रीव", role: "दिव्य वक्ता" },
      { name: "महर्षि अगस्त्य", role: "जिज्ञासु ऋषि" },
      { name: "लोपामुद्रा", role: "विदुषी साध्वी" }
    ],
    deities: [
      { name: "भगवती ललिता त्रिपुरसुंदरी", title: "राजराजेश्वरी" },
      { name: "भगवान हयग्रीव", title: "ज्ञानमूर्ति" }
    ],
    devatas: [
      { name: "भगवती ललिता त्रिपुरसुंदरी", title: "राजराजेश्वरी" },
      { name: "भगवान हयग्रीव", title: "ज्ञानमूर्ति" }
    ],
    articles: [
      { id: "lalita-sahasranama-rahasya", title: "श्री ललिता सहस्रनाम स्तोत्र का तात्विक रहस्य", desc: "ब्रह्माण्ड पुराण में हयग्रीव-अगस्त्य संवाद रूपी शाक्त महामंत्र का आध्यात्मिक अर्थ।", slug: "lalita-sahasranama" },
      { id: "brahmanda-srishti-khagola", title: "हिरण्यगर्भ से ब्रह्मांड उत्पत्ति — वैदिक खगोल विज्ञान", desc: "ब्रह्माण्ड पुराण के अनुसार ब्रह्मांडीय अंडे का प्रस्फुटन और लोकों का निर्माण।", slug: "brahmanda-srishti" }
    ],
    relatedGranthas: [
      { name: "मार्कण्डेय पुराण (दुर्गा सप्तशती)", enName: "Markandeya Purana", desc: "शाक्त साधना", slug: "markandeya-purana", category: "purana", badge: "राजस" },
      { name: "अध्यात्म रामायण", enName: "Adhyatma Ramayana", desc: "ब्रह्माण्ड पुराणोक्त", slug: "adhyatma-ramayana", category: "itihasa", badge: "रामायण" }
    ],
    relatedSubjects: [
      { name: "मार्कण्डेय पुराण", slug: "markandeya-purana", desc: "देवी महात्म्य" },
      { name: "वाल्मीकि रामायण", slug: "valmiki-ramayana", desc: "आदिकाव्य" }
    ]
  },

  // ----------------------------------------------------
  // ITIHASA SUBJECTS
  // ----------------------------------------------------
  "itihasa/valmiki-ramayana": {
    categorySlug: "itihasa",
    subjectSlug: "valmiki-ramayana",
    name: "वाल्मीकि रामायण",
    enName: "Valmiki Ramayana",
    eyebrow: "इतिहास • आदिकाव्य",
    intro: "वाल्मीकि रामायण सनातन संस्कृति का आदिकाव्य है। महर्षि वाल्मीकि द्वारा क्रौंच वध के शोक से उपजे प्रथम श्लोक ('मा निषाद प्रतिष्ठां...') से आविर्भूत २४,००० श्लोकों की यह रचना श्रीराम के आदर्श चरित्र का साक्षात् विग्रह है।",
    quickInfo: {
      type: "इतिहास (आदिकाव्य)",
      language: "लौकिक संस्कृत (अनुष्टुप)",
      author: "आदिकवि महर्षि वाल्मीकि",
      shlokaCount: "२४,००० श्लोक (चतुर्विंशति साहस्त्री)",
      division: "७ काण्ड (~५०० सर्ग)",
      presidingDeity: "भगवान श्रीराम (मर्यादा पुरुषोत्तम)",
      chiefVirtues: "सत्य, धर्म, मातृ-पितृ भक्ति, एकपत्नीव्रत, प्रजावत्सलता"
    },
    navTabs: ["Overview", "Structure", "7 Kandas", "Gayatri Connection", "Rishi & Devata", "Articles", "Related Granthas"],
    overviewText: "वाल्मीकि रामायण में सात काण्ड हैं: बाल, अयोध्या, अरण्य, किष्किन्धा, सुंदर, युद्ध और उत्तर काण्ड। प्रत्येक १,००० श्लोकों के आरंभ में गायत्री महामंत्र के २४ अक्षरों का एक-एक अक्षर सुशोभित है। यह ग्रंथ मानव जीवन के समस्त संबंधों और मर्यादाओं की सर्वोच्च कसौटी है।",
    structureCards: [
      { num: "७", title: "काण्ड", desc: "बाल काण्ड से उत्तर काण्ड तक ७ सोपान" },
      { num: "५००", title: "सर्ग", desc: "क्रमबद्ध ऐतिहासिक अध्याय" },
      { num: "२४,०००", title: "श्लोक", desc: "गायत्री बीज युक्त अमृत श्लोक" }
    ],
    availableTexts: [
      { title: "१. बाल काण्ड", desc: "७७ सर्ग • श्रीराम जन्म, विश्वामित्र यज्ञ रक्षा, ताड़का वध, अहल्या उद्धार, सीता स्वयंवर", slug: "bala-kanda" },
      { title: "२. अयोध्या काण्ड", desc: "११९ सर्ग • राज्याभिषेक घोषणा, मंथरा-कैकेयी संवाद, वनगमन, दशरथ मरण, भरत मिलाप", slug: "ayodhya-kanda" },
      { title: "३. अरण्य काण्ड", desc: "७५ सर्ग • दंडकारण्य वास, शूर्पणखा प्रसंग, सुवर्ण मृग, सीता हरण, जटायु मोक्ष", slug: "aranya-kanda" },
      { title: "४. किष्किन्धा काण्ड", desc: "६७ सर्ग • सुग्रीव मैत्री, वालि वध, वर्षाकाल, सीता खोज, सम्पाति प्रसंग", slug: "kishkindha-kanda" },
      { title: "५. सुंदर काण्ड", desc: "६८ सर्ग • हनुमान जी का समुद्र लंघन, लंका प्रवेश, अशोक वाटिका, सीता दर्शन, लंका दहन", slug: "sundara-kanda" },
      { title: "६. युद्ध काण्ड (लंका काण्ड)", desc: "१२८ सर्ग • सेतु बंधन, अंगद शिष्टाई, कुम्भकर्ण-मेघनाद वध, आदित्य हृदय, रावण वध, राज्याभिषेक", slug: "yuddha-kanda" },
      { title: "७. उत्तर काण्ड", desc: "१११ सर्ग • रावण उत्पत्ति आख्यान, सीता वनवास, लव-कुश जन्म, रामायण गान, महाप्रस्थान", slug: "uttara-kanda" }
    ],
    rishis: ["महर्षि वाल्मीकि", "महर्षि विश्वामित्र", "ब्रह्मर्षि वसिष्ठ", "महर्षि अगस्त्य", "शृंगी ऋषि"],
    devatas: ["भगवान श्रीराम", "माता सीता", "लक्ष्मण", "भरत", "हनुमान जी"],
    articles: [
      { id: "aditya-hridaya-stotra", title: "आदित्य हृदय स्तोत्र — युद्ध काण्ड", desc: "ततो युद्धपरिश्रान्तं समरे चिन्तया स्थितम् — सूर्य उपासना द्वारा विजय का मार्ग।", slug: "aditya-hridaya" },
      { id: "gayatri-ramayana", title: "गायत्री रामायण का रहस्य", desc: "गायत्री महामंत्र के २४ अक्षरों का रामायण के २४,००० श्लोकों से संबंध।", slug: "gayatri-ramayana" }
    ],
    relatedGranthas: [
      { name: "अध्यात्म रामायण", type: "पुराण / आगम", author: "महर्षि वेदव्यास", slug: "adhyatma-ramayana" },
      { name: "महाभारत", type: "इतिहास", author: "महर्षि वेदव्यास", slug: "mahabharata" }
    ],
    relatedSubjects: [
      { name: "महाभारत", slug: "mahabharata", desc: "१८ पर्व, पंचम वेद" },
      { name: "श्रीमद्भगवद्गीता", slug: "bhagavad-gita", desc: "भीष्म पर्व, ७०० श्लोक" }
    ]
  },

  "itihasa/mahabharata": {
    categorySlug: "itihasa",
    subjectSlug: "mahabharata",
    name: "महाभारत",
    enName: "Mahabharata",
    eyebrow: "इतिहास • पंचम वेद",
    intro: "महाभारत महर्षि वेदव्यास द्वारा प्रणीत और भगवान श्रीगणेश द्वारा लिखित विश्व का विशालतम महाकाव्य (१,००,००० श्लोक) है। 'यदिहास्ति तदन्यत्र यन्नेहास्ति न तत् क्वचित्' — जो इसमें है वही संसार में है, जो इसमें नहीं वह कहीं नहीं।",
    quickInfo: {
      type: "इतिहास (शतसाहस्री संहिता)",
      language: "संस्कृत",
      author: "महर्षि वेदव्यास (लिपिकार: श्रीगणेश)",
      shlokaCount: "१,००,००० श्लोक",
      division: "१८ पर्व + हरिवंश (खिल पर्व)",
      presidingDeity: "भगवान श्रीकृष्ण (धर्मसंस्थापक)",
      coreMotto: "यतो धर्मस्ततो जयः (जहाँ धर्म है, वहीं विजय है)"
    },
    navTabs: ["Overview", "Structure", "18 Parvas", "Philosophical Jewels", "Rishi & Devata", "Articles", "Related Granthas"],
    overviewText: "महाभारत १८ पर्वों में विभक्त है: आदि, सभा, वन, विराट, उद्योग, भीष्म (गीता), द्रोण, कर्ण, शल्य, सौप्तिक, स्त्री, शांति (भीष्म उपदेश), अनुशासन (विष्णु सहस्रनाम), अश्वमेधिक (अनुगीता), आश्रमवासिक, मौसल, महाप्रस्थानिक और स्वर्गारोहण पर्व।",
    structureCards: [
      { num: "१८", title: "पर्व", desc: "कुरुक्षेत्र युद्ध पूर्व, युद्ध काल एवं उत्तर काल के १८ पर्व" },
      { num: "१,००,०००", title: "श्लोक", desc: "विश्व का विशालतम दार्शनिक महाकाव्य" },
      { num: "५", title: "दार्शनिक रत्न", desc: "गीता, विष्णु सहस्रनाम, विदुर नीति, यक्ष प्रश्न, सनत्सुजातीय" }
    ],
    availableTexts: [
      { title: "१. आदि पर्व", desc: "कुरुवंश उत्पत्ति, शकुन्तला आख्यान, पांडवों का जन्म, लाक्षागृह, द्रौपदी स्वयंवर", slug: "adi-parva" },
      { title: "२. सभा पर्व", desc: "इंद्रप्रस्थ निर्माण, राजसूय यज्ञ, शिशुपाल वध, द्यूत क्रीड़ा, द्रौपदी चीरहरण", slug: "sabha-parva" },
      { title: "३. वन पर्व (आरण्यक पर्व)", desc: "१२ वर्ष का वनवास, नल-दमयंती आख्यान, सावित्री-सत्यवान, यक्ष प्रश्न", slug: "vana-parva" },
      { title: "४. विराट पर्व", desc: "१ वर्ष का अज्ञातवास, कीचक वध, उत्तर गो-ग्रहण युद्ध", slug: "virata-parva" },
      { title: "५. उद्योग पर्व", desc: "युद्ध की तैयारी, संजय-शिष्टाई, श्रीकृष्ण शांति दूत, विदुर नीति, सनत्सुजातीय", slug: "udyoga-parva" },
      { title: "६. भीष्म पर्व", desc: "कुरुक्षेत्र युद्ध प्रारंभ, श्रीमद्भगवद्गीता (अध्याय २५-४२), भीष्म शरशय्या", slug: "bhishma-parva" },
      { title: "७. द्रोण पर्व", desc: "द्रोणाचार्य सेनापतित्व, चक्रव्यूह, अभिमन्यु वध, घटोत्कच वध, द्रोण वध", slug: "drona-parva" },
      { title: "८. कर्ण पर्व", desc: "कर्ण सेनापतित्व, कर्ण-अर्जुन महायुद्ध, कर्ण वध", slug: "karna-parva" },
      { title: "९. शल्य पर्व", desc: "शल्य सेनापतित्व, दुर्योधन का द्वैपायन सरोवर में छिपना, गदा युद्ध", slug: "shalya-parva" },
      { title: "१०. सौप्तिक पर्व", desc: "अश्वत्थामा द्वारा रात्रि में पाण्डव शिविर का संहार, ब्रह्मास्त्र संधान", slug: "sauptika-parva" },
      { title: "११. स्त्री पर्व", desc: "गांधारी, कुंती व रानियों का विलाप, गांधारी का श्रीकृष्ण को शाप", slug: "stri-parva" },
      { title: "१२. शांति पर्व", desc: "भीष्म पितामह द्वारा युधिष्ठिर को राजधर्म, आपद्धर्म एवं मोक्षधर्म उपदेश", slug: "shanti-parva" },
      { title: "१३. अनुशासन पर्व", desc: "दानधर्म, वर्णाश्रम, श्री विष्णु सहस्रनाम स्तोत्र, भीष्म निर्वाण", slug: "anushasana-parva" },
      { title: "१४. अश्वमेधिक पर्व", desc: "युधिष्ठिर का अश्वमेध यज्ञ, अर्जुन द्वारा अनुगीता उपदेश श्रवण", slug: "ashvamedhika-parva" },
      { title: "१५. आश्रमवासिक पर्व", desc: "धृतराष्ट्र, गांधारी व कुंती का वन गमन तथा दावानल में देहत्याग", slug: "ashramavasika-parva" },
      { title: "१६. मौसल पर्व", desc: "सांब का मूसल, यदुवंश का गृहयुद्ध में विनाश, बलराम-कृष्ण निर्वाण", slug: "mausala-parva" },
      { title: "१७. महाप्रस्थानिक पर्व", desc: "पाण्डवों व द्रौपदी का हिमालय की ओर अंतिम महाप्रस्थान", slug: "mahaprasthanika-parva" },
      { title: "१८. स्वर्गारोहण पर्व", desc: "युधिष्ठिर का स्वर्ग प्रवेश, धर्मराज परीक्षा, दिव्यता दर्शन", slug: "svargarohana-parva" },
      { title: "१९. हरिवंश पर्व (खिल पर्व)", desc: "भगवान श्रीकृष्ण की वंशावली, बाललीला व भविष्य कलियुग", slug: "harivamsa" }
    ],
    rishis: ["महर्षि वेदव्यास", "महर्षि नारद", "महर्षि मार्कण्डेय", "विदुर जी", "सनत्सुजात"],
    devatas: ["भगवान श्रीकृष्ण", "भीष्म पितामह", "अर्जुन", "युधिष्ठिर", "द्रौपदी"],
    articles: [
      { id: "vishnu-sahasranama-anushasana", title: "श्री विष्णु सहस्रनाम — अनुशासन पर्व १४९", desc: "किमेकं दैवतं लोके किम् वाप्येकं परायणम् — भीष्म पितामह द्वारा युधिष्ठिर को उपदेश।", slug: "vishnu-sahasranama" },
      { id: "yaksha-prashna", title: "यक्ष प्रश्न — वन पर्व का दार्शनिक सार", desc: "किमाश्चर्यम्? प्रतिदिन प्राणी मरते हैं फिर भी जीवित अमर रहना चाहते हैं।", slug: "yaksha-prashna" }
    ],
    relatedGranthas: [
      { name: "श्रीमद्भगवद्गीता", type: "इतिहास", author: "महर्षि वेदव्यास", slug: "bhagavad-gita" },
      { name: "वाल्मीकि रामायण", type: "इतिहास", author: "महर्षि वाल्मीकि", slug: "valmiki-ramayana" }
    ],
    relatedSubjects: [
      { name: "श्रीमद्भगवद्गीता", slug: "bhagavad-gita", desc: "१८ अध्याय, निष्काम कर्मयोग" },
      { name: "वाल्मीकि रामायण", slug: "valmiki-ramayana", desc: "७ काण्ड, आदिकाव्य" }
    ]
  },

  "itihasa/bhagavad-gita": {
    categorySlug: "itihasa",
    subjectSlug: "bhagavad-gita",
    name: "श्रीमद्भगवद्गीता",
    enName: "Srimad Bhagavad Gita",
    eyebrow: "इतिहास • प्रस्थानत्रयी (स्मृति प्रस्थान)",
    intro: "श्रीमद्भगवद्गीता महाभारत के भीष्म पर्व (अध्याय २५-४२) का अमूल्य रत्न है। कुरुक्षेत्र के धर्मक्षेत्र में मोहग्रस्त अर्जुन को योगेश्वर श्रीकृष्ण द्वारा दिया गया निष्काम कर्म, ज्ञान, भक्ति और शरणागति का शाश्वत संदेश।",
    quickInfo: {
      type: "इतिहास / स्मृति प्रस्थान",
      language: "संस्कृत",
      author: "महर्षि वेदव्यास (वक्ता: श्रीकृष्ण)",
      shlokaCount: "७०० श्लोक",
      division: "१८ अध्याय",
      presidingDeity: "योगेश्वर श्रीकृष्ण",
      chiefYogas: "कर्मयोग (१-६), भक्तियोग (७-१२), ज्ञानयोग (१३-१८)"
    },
    navTabs: ["Overview", "Structure", "18 Chapters", "Core Shlokas", "Articles", "Related Granthas"],
    overviewText: "सर्वोपनिषदो गावो दोग्धा गोपालनन्दनः। पार्थो वत्सः सुधीर्भोक्ता दुग्धं गीतामृतं महत्॥ समस्त उपनिषद गौएँ हैं, श्रीकृष्ण दुहने वाले हैं, अर्जुन बछड़ा है और गीता का अमृतमय ज्ञान वह दिव्य दुग्ध है। गीता जीवन के हर संघर्ष में निर्भयता, समत्व और कर्तव्य-निष्ठा का मार्ग प्रशस्त करती है।",
    structureCards: [
      { num: "१८", title: "अध्याय", desc: "अर्जुनविषादयोग से मोक्षसंन्यासयोग तक" },
      { num: "७००", title: "श्लोक", desc: "श्रीकृष्ण (५७४), अर्जुन (८४), संजय (४१), धृतराष्ट्र (१)" },
      { num: "३", title: "योग षटक", desc: "कर्म षटक (१-६), भक्ति षटक (७-१२), ज्ञान षटक (१३-१८)" }
    ],
    availableTexts: [
      { title: "अध्याय १: अर्जुनविषादयोग", desc: "४७ श्लोक • सेना निरीक्षण, अर्जुन का मोह और विषाद", slug: "gita-ch-1" },
      { title: "अध्याय २: सांख्ययोग", desc: "७२ श्लोक • आत्मा की अमरता, कर्मण्येवाधिकारस्ते, स्थितप्रज्ञ लक्षण", mantraId: "gita-2-47", slug: "gita-ch-2" },
      { title: "अध्याय ३: कर्मयोग", desc: "४३ श्लोक • निष्काम कर्म का महत्व, यज्ञ चक्र, लोकसंग्रह", slug: "gita-ch-3" },
      { title: "अध्याय ४: ज्ञानकर्मसंन्यासयोग", desc: "४२ श्लोक • अवतार रहस्य (यदा यदा हि धर्मस्य), ज्ञानयज्ञ", mantraId: "gita-4-7", slug: "gita-ch-4" },
      { title: "अध्याय ५: कर्मसंन्यासयोग", desc: "२९ श्लोक • संन्यास और कर्मयोग का समन्वय, ब्रह्मनिर्वाण", slug: "gita-ch-5" },
      { title: "अध्याय ६: आत्मसंयमयोग (ध्यानयोग)", desc: "४७ श्लोक • ध्यान विधि, मन का निग्रह, योगभ्रष्ट की गति", slug: "gita-ch-6" },
      { title: "अध्याय ७: ज्ञानविज्ञानयोग", desc: "३० श्लोक • परा और अपरा प्रकृति, चार प्रकार के भक्त", slug: "gita-ch-7" },
      { title: "अध्याय ८: अक्षरब्रह्मयोग", desc: "२८ श्लोक • अंतकाल में स्मरण, शुक्ल व कृष्ण गति", slug: "gita-ch-8" },
      { title: "अध्याय ९: राजविद्याराजगुह्ययोग", desc: "३४ श्लोक • परम गोपनीय ज्ञान, पत्रं पुष्पं फलं तोयं, अनन्यभक्ति", slug: "gita-ch-9" },
      { title: "अध्याय १०: विभूतियोग", desc: "४२ श्लोक • भगवान की दिव्य विभूतियाँ, 'अहमात्मा गुडाकेश'", slug: "gita-ch-10" },
      { title: "अध्याय ११: विश्वरूपदर्शनयोग", desc: "५५ श्लोक • अर्जुन को दिव्य चक्षु, कालोऽस्मि लोकक्षयकृत्प्रवृद्धः", slug: "gita-ch-11" },
      { title: "अध्याय १२: भक्तियोग", desc: "२० श्लोक • सगुण व निर्गुण उपासना, भगवान के प्रिय भक्त के लक्षण", slug: "gita-ch-12" },
      { title: "अध्याय १३: क्षेत्रक्षेत्रज्ञविभागयोग", desc: "३४ श्लोक • क्षेत्र (शरीर) और क्षेत्रज्ञ (आत्मा) का विवेक", slug: "gita-ch-13" },
      { title: "अध्याय १४: गुणत्रयविभागयोग", desc: "२७ श्लोक • सत्त्व, रजस्, तमस् का प्रभाव, गुणातीत लक्षण", slug: "gita-ch-14" },
      { title: "अध्याय १५: पुरुषोत्तमयोग", desc: "२० श्लोक • ऊर्ध्वमूल अश्वत्थ वृक्ष, क्षर, अक्षर और पुरुषोत्तम", slug: "gita-ch-15" },
      { title: "अध्याय १६: दैवासुरसंपद्विभागयोग", desc: "२४ श्लोक • दैवी और आसुरी प्रवृत्तियों का पृथक्करण", slug: "gita-ch-16" },
      { title: "अध्याय १७: श्रद्धात्रयविभागयोग", desc: "२८ श्लोक • त्रिविध श्रद्धा, भोजन, तप, दान व ॐ तत्सत्", slug: "gita-ch-17" },
      { title: "अध्याय १८: मोक्षसंन्यासयोग", desc: "७८ श्लोक • त्याग व संन्यास, सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज", mantraId: "gita-18-66", slug: "gita-ch-18" }
    ],
    rishis: ["योगेश्वर श्रीकृष्ण (जगद्गुरु)", "अर्जुन (जिज्ञासु)", "संजय (दिव्यदृष्टि)", "वेदव्यास"],
    devatas: ["श्रीकृष्ण", "विश्वरूप परमात्मा", "नारायण"],
    articles: [
      { id: "gita-sthitaprajna", title: "स्थितप्रज्ञ के लक्षण (अध्याय २)", desc: "प्रजहाति यदा कामान् — सुख-दुःख में अविचलित रहने वाले प्रबुद्ध चेतना के लक्षण।", slug: "sthitaprajna" },
      { id: "gita-sharanagati", title: "सर्वधर्मान्परित्यज्य — शरणागति का महामंत्र (१८.६६)", desc: "संपूर्ण अहं का त्याग और परमात्मा की शरण में परम शांति का रहस्य।", slug: "sharanagati" }
    ],
    relatedGranthas: [
      { name: "महाभारत", type: "इतिहास", author: "महर्षि वेदव्यास", slug: "mahabharata" },
      { name: "कठोपनिषद्", type: "उपनिषद", author: "वैदिक परंपरा", slug: "katha-upanishad" }
    ],
    relatedSubjects: [
      { name: "महाभारत", slug: "mahabharata", desc: "१८ पर्व, भीष्म पर्व" },
      { name: "वाल्मीकि रामायण", slug: "valmiki-ramayana", desc: "७ काण्ड, आदिकाव्य" }
    ]
  },

  // ----------------------------------------------------
  // UPANISHAD SUBJECTS
  // ----------------------------------------------------
  "upanishad/isha-upanishad": {
    categorySlug: "upanishad",
    subjectSlug: "isha-upanishad",
    name: "ईशावास्योपनिषद्",
    enName: "Isha Upanishad",
    eyebrow: "उपनिषद • शुक्ल यजुर्वेद संहिता",
    intro: "ईशावास्योपनिषद् शुक्ल यजुर्वेद वाजसनेयि संहिता का ४०वाँ तथा अंतिम अध्याय है। एकमात्र उपनिषद जो सीधे संहिता भाग में स्थित है। यह कर्म और ज्ञान, त्याग और भोग के अद्भुत समन्वय का उद्घोषक है।",
    quickInfo: {
      type: "प्रधान उपनिषद (दशोपनिषद)",
      veda: "शुक्ल यजुर्वेद (वाजसनेयि माध्यन्दिना / काण्व)",
      shantiMantra: "ॐ पूर्णमदः पूर्णमिदम्...",
      mantraCount: "१८ मंत्र",
      coreTheme: "ईशावास्यमिदं सर्वम् (ईश्वर की सर्वव्यापकता)",
      bhashya: "आदि शंकराचार्य, रामानुजाचार्य, मध्वाचार्य"
    },
    navTabs: ["Overview", "Structure", "18 Mantras", "Shanti Mantra", "Articles", "Related Granthas"],
    overviewText: "ईशावास्योपनिषद् का प्रथम मंत्र सनातन चिंतन का शिखर है: 'ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्। तेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम्॥' संपूर्ण ब्रह्मांड ईश्वर से व्याप्त है, अतः त्यागपूर्वक भोग करो, किसी के धन की लालसा मत करो।",
    structureCards: [
      { num: "१८", title: "मंत्र", desc: "गहन दार्शनिक ऋचाएँ" },
      { num: "४०", title: "अध्याय", desc: "वाजसनेयि संहिता का अंतिम अध्याय" },
      { num: "१", title: "शांति मंत्र", desc: "ॐ पूर्णमदः पूर्णमिदम् पूर्णात्पूर्णमुदच्यते" }
    ],
    availableTexts: [
      { title: "मंत्र १: ईशावास्यमिदं सर्वम्...", desc: "ईश्वर की सर्वव्यापकता एवं त्यागपूर्वक उपभोग", mantraId: "up-isha-1", slug: "mantra-1" },
      { title: "मंत्र २: कुर्वन्नेवेह कर्माणि...", desc: "सौ वर्ष तक निष्काम कर्म करते हुए जीने की इच्छा", slug: "mantra-2" },
      { title: "मंत्र ४-५: अनेजदेकं मनसो जवीयो...", desc: "आत्मतत्व की गतिहीन सर्वव्यापकता व गूढ़ स्वरूप", slug: "mantra-4" },
      { title: "मंत्र ६-७: यस्तु सर्वाणि भूतानि...", desc: "सर्वभूत में आत्मा और आत्मा में सर्वभूत देखने वाले को न शोक न मोह", slug: "mantra-6" },
      { title: "मंत्र ९-११: विद्यां चाविद्यां च...", desc: "विद्या (ज्ञान) और अविद्या (कर्म) का समन्वय", slug: "mantra-9" },
      { title: "मंत्र १५: हिरण्मयेन पात्रेण...", desc: "सत्य का मुख स्वर्णिम पात्र से ढका है — सत्य साक्षात्कार की प्रार्थना", mantraId: "up-isha-15", slug: "mantra-15" }
    ],
    rishis: ["महर्षि याज्ञवल्क्य", "दध्यङ् आथर्वण"],
    devatas: ["परब्रह्म", "सूर्य (पूषन्)", "अग्नि"],
    articles: [
      { id: "hiranmayena-patrena", title: "हिरण्मयेन पात्रेण सत्यस्यापिहितं मुखम्", desc: "ईशावास्य १५ — भौतिक आकर्षणों के आवरण को हटाकर सत्य के दर्शन की वैदिक प्रार्थना।", slug: "hiranmayena-patrena" }
    ],
    relatedGranthas: [
      { name: "बृहदारण्यकोपनिषद्", type: "उपनिषद", author: "शुक्ल यजुर्वेद", slug: "brihadaranyaka-upanishad" },
      { name: "कठोपनिषद्", type: "उपनिषद", author: "कृष्ण यजुर्वेद", slug: "katha-upanishad" }
    ],
    relatedSubjects: [
      { name: "बृहदारण्यकोपनिषद्", slug: "brihadaranyaka-upanishad", desc: "याज्ञवल्क्य-मैत्रेयी संवाद" },
      { name: "कठोपनिषद्", slug: "katha-upanishad", desc: "यम-नचिकेता संवाद" }
    ]
  },

  "upanishad/katha-upanishad": {
    categorySlug: "upanishad",
    subjectSlug: "katha-upanishad",
    name: "कठोपनिषद्",
    enName: "Katha Upanishad",
    eyebrow: "उपनिषद • कृष्ण यजुर्वेद काठक शाखा",
    intro: "कठोपनिषद् में बालक नचिकेता और मृत्यु के देवता यमराज का अमर संवाद वर्णित है। तीन वरों के अंतर्गत यमराज द्वारा नचिकेता को आत्मतत्व, मृत्यु के रहस्य और मोक्ष का अद्वितीय उपदेश दिया गया है।",
    quickInfo: {
      type: "प्रधान उपनिषद (दशोपनिषद)",
      veda: "कृष्ण यजुर्वेद (काठक शाखा)",
      shantiMantra: "ॐ सह नाववतु सह नौ भुनक्तु...",
      mantraCount: "११९ मंत्र",
      division: "२ अध्याय (प्रत्येक में ३ वल्ली = ६ वल्ली)",
      centralMetaphor: "रथ रूपक (आत्मानं रथिनं विद्धि...)"
    },
    navTabs: ["Overview", "Structure", "6 Vallis", "Chariot Metaphor", "Articles", "Related Granthas"],
    overviewText: "कठोपनिषद् में श्रेयस् (कल्याणकारी मार्ग) और प्रेयस् (प्रिय लगने वाले भोग मार्ग) का भेद स्पष्ट किया गया है। इसका रथ रूपक विश्वप्रसिद्ध है: आत्मा रथी है, शरीर रथ है, बुद्धि सारथी है, मन लगाम है, इंद्रियाँ घोड़े हैं और विषय मार्ग हैं।",
    structureCards: [
      { num: "२", title: "अध्याय", desc: "प्रथम व द्वितीय अध्याय" },
      { num: "६", title: "वल्ली", desc: "प्रत्येक अध्याय में ३-३ वल्लियाँ" },
      { num: "११९", title: "मंत्र", desc: "यम-नचिकेता संवाद श्लोक" }
    ],
    availableTexts: [
      { title: "प्रथमोऽध्यायः — प्रथमा वल्ली", desc: "वाजश्रवस का सर्वमेध यज्ञ, नचिकेता का यमलोक गमन, तीन वरों की प्रतिज्ञा", slug: "valli-1" },
      { title: "प्रथमोऽध्यायः — द्वितीया वल्ली", desc: "श्रेयस् और प्रेयस् का विवेक, ॐकार की महत्ता, आत्मतत्व की अगम्यता", slug: "valli-2" },
      { title: "प्रथमोऽध्यायः — तृतीया वल्ली", desc: "प्रसिद्ध रथ रूपक, इंद्रिय निग्रह, 'उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत'", mantraId: "up-katha-1-3-14", slug: "valli-3" },
      { title: "द्वितीयाऽध्यायः — प्रथमा वल्ली", desc: "पराञ्चि खानि व्यतृणत्स्वयम्भूः — बहिर्मुखी इंद्रियों को अंतर्मुखी करने का रहस्य", slug: "valli-4" },
      { title: "द्वितीयाऽध्यायः — द्वितीया वल्ली", desc: "एकादशद्वारं पुरम — पुर (शरीर) में स्थित अजन्मा आत्मा, न तत्र सूर्यो भाति", slug: "valli-5" },
      { title: "द्वितीयाऽध्यायः — तृतीया वल्ली", desc: "ऊर्ध्वमूलोऽवाक्शाख एषोऽश्वत्थः सनातनः — योग की पराकाष्ठा व ग्रंथि भेद", slug: "valli-6" }
    ],
    rishis: ["यमराज (वक्ता)", "नचिकेता (जिज्ञासु)", "महर्षि वाजश्रवस"],
    devatas: ["परब्रह्म", "यमराज"],
    articles: [
      { id: "uttishthata-jagrata", title: "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत", desc: "कठोपनिषद् १.३.१४ — जागो, उठो और श्रेष्ठ ज्ञानियों के समीप जाकर सत्य को जानो।", slug: "uttishthata-jagrata" }
    ],
    relatedGranthas: [
      { name: "श्रीमद्भगवद्गीता", type: "इतिहास", author: "महर्षि वेदव्यास", slug: "bhagavad-gita" }
    ],
    relatedSubjects: [
      { name: "ईशावास्योपनिषद्", slug: "isha-upanishad", desc: "शुक्ल यजुर्वेद, १८ मंत्र" },
      { name: "माण्डूक्योपनिषद्", slug: "mandukya-upanishad", desc: "अथर्ववेद, १२ मंत्र" }
    ]
  },

  "upanishad/mandukya-upanishad": {
    categorySlug: "upanishad",
    subjectSlug: "mandukya-upanishad",
    name: "माण्डूक्योपनिषद्",
    enName: "Mandukya Upanishad",
    eyebrow: "उपनिषद • अथर्ववेद",
    intro: "माण्डूक्योपनिषद् केवल १२ मंत्रों का लघुतम किंतु सर्वाधिक सघन उपनिषद है। 'माण्डूक्यमेकमेवालं मुमुक्षूणां विमुक्तये' — मुमुक्षुओं की मुक्ति के लिए अकेला माण्डूक्य पर्याप्त है। इसमें ॐकार की चार मात्राओं द्वारा चेतना की चार अवस्थाओं का निरूपण है।",
    quickInfo: {
      type: "प्रधान उपनिषद (दशोपनिषद)",
      veda: "अथर्ववेद",
      shantiMantra: "ॐ भद्रं कर्णेभिः शृणुयाम देवाः...",
      mantraCount: "१२ मंत्र",
      mahavakya: "अयमात्मा ब्रह्म (यह आत्मा ही ब्रह्म है)",
      karika: "आचार्य गौडपाद कृत माण्डूक्य कारिका (२१५ कारिकाएँ)"
    },
    navTabs: ["Overview", "Structure", "12 Mantras", "4 States of Consciousness", "Articles", "Related Granthas"],
    overviewText: "माण्डूक्योपनिषद् में चेतना की चार अवस्थाएँ वर्णित हैं: १. वैश्वानर (जाग्रत अवस्था - 'अ' कार), २. तैजस (स्वप्न अवस्था - 'उ' कार), ३. प्राज्ञ (सुषुप्ति अवस्था - 'म' कार), और ४. तुरीय (अमात्र, चतुर्थ, अव्यवहार्य, शांत, शिव, अद्वैत)।",
    structureCards: [
      { num: "१२", title: "मंत्र", desc: "गहनतम दार्शनिक सूत्र" },
      { num: "४", title: "पाद / अवस्थाएँ", desc: "जाग्रत, स्वप्न, सुषुप्ति और तुरीय" },
      { num: "१", title: "महावाक्य", desc: "अयमात्मा ब्रह्म (अथर्ववेद)" }
    ],
    availableTexts: [
      { title: "मंत्र १-२: ॐ इत्येतदक्षरमिदं सर्वम्...", desc: "ॐकार ही भूत, भविष्य, वर्तमान और त्रिगुणातीत है। अयमात्मा ब्रह्म।", mantraId: "up-mandukya-1", slug: "mantra-1" },
      { title: "मंत्र ३: जागरितस्थानो बहिष्प्रज्ञः...", desc: "प्रथम पाद: वैश्वानर (जाग्रत अवस्था, स्थूल भोक्ता)", slug: "mantra-3" },
      { title: "मंत्र ४: स्वप्नस्थानोऽन्तःप्रज्ञः...", desc: "द्वितीय पाद: तैजस (स्वप्नावस्था, सूक्ष्म भोक्ता)", slug: "mantra-4" },
      { title: "मंत्र ५-६: यत्र सुप्तो न कञ्चन कामं...", desc: "तृतीय पाद: प्राज्ञ (सुषुप्तावस्था, आनंदमय, सर्वेश्वर)", slug: "mantra-5" },
      { title: "मंत्र ७: नान्तःप्रज्ञं न बहिष्प्रज्ञं...", desc: "चतुर्थ पाद: तुरीय (प्रपंचोपशमं शांतं शिवमद्वैतं स आत्मा)", mantraId: "up-mandukya-7", slug: "mantra-7" },
      { title: "मंत्र ८-१२: सोऽयमात्माध्यक्षरमोङ्कारो...", desc: "ॐ की मात्राओं (अ-उ-म व अमात्र) का ध्यान एवं तुरीय साक्षात्कार", slug: "mantra-8" }
    ],
    rishis: ["महर्षि मण्डूक", "गौडपादाचार्य (कारिकाकार)", "आदि शंकराचार्य"],
    devatas: ["तुरीय परब्रह्म", "ॐकार"],
    articles: [
      { id: "turiya-avastha", title: "तुरीय अवस्था का तात्विक रहस्य (मंत्र ७)", desc: "शांतं शिवमद्वैतम् — तीनों अवस्थाओं से परे साक्षी चैतन्य का स्वरूप।", slug: "turiya" }
    ],
    relatedGranthas: [
      { name: "गौडपाद कारिका", type: "कारिका", author: "आचार्य गौडपाद", slug: "gaudapada-karika" },
      { name: "मुण्डकोपनिषद्", type: "उपनिषद", author: "अथर्ववेद", slug: "mundaka-upanishad" }
    ],
    relatedSubjects: [
      { name: "मुण्डकोपनिषद्", slug: "mundaka-upanishad", desc: "सत्यमेव जयते" },
      { name: "ईशावास्योपनिषद्", slug: "isha-upanishad", desc: "ईशावास्यमिदं सर्वम्" }
    ]
  },

  "upanishad/chandogya-upanishad": {
    categorySlug: "upanishad",
    subjectSlug: "chandogya-upanishad",
    name: "छान्दोग्योपनिषद्",
    enName: "Chandogya Upanishad",
    eyebrow: "उपनिषद • सामवेद कौथुम शाखा",
    intro: "छान्दोग्योपनिषद् सामवेद के छान्दोग्य ब्राह्मण का उपनिषद भाग है। इसमें सामगान, उद्गीथ (ॐकार) उपासना, शांडिल्य विद्या, सत्यकाम जाबाल कथा तथा उद्दालक-श्वेतकेतु का प्रसिद्ध 'तत्त्वमसि' संवाद निहित है।",
    quickInfo: {
      type: "प्रधान उपनिषद (दशोपनिषद)",
      veda: "सामवेद (कौथुम शाखा)",
      shantiMantra: "ॐ आप्यायन्तु ममाङ्गानि...",
      division: "८ प्रपाठक (विशाल उपनिषद)",
      mahavakya: "तत्त्वमसि (सामवेद)",
      famousAllegory: "नदी और समुद्र, नमक और जल रूपक"
    },
    navTabs: ["Overview", "Structure", "8 Prapathakas", "Tat Tvam Asi", "Articles", "Related Granthas"],
    overviewText: "छान्दोग्य उपनिषद के षष्ठ प्रपाठक में महर्षि उद्दालक आरुणि अपने पुत्र श्वेतकेतु को ९ बार विविध दृष्टांतों (जैसे जल में घुला नमक, वटवृक्ष का बीज) द्वारा 'ऐतदात्म्यमिदं सर्वं तत्सत्यं स आत्मा तत्त्वमसि श्वेतकेतो' का उपदेश देते हैं।",
    structureCards: [
      { num: "८", title: "प्रपाठक", desc: "विशाल ८ अध्याय" },
      { num: "९", title: "दृष्टांत", desc: "तत्त्वमसि महावाक्य के ९ व्यावहारिक प्रमाण" },
      { num: "१", title: "महावाक्य", desc: "तत्त्वमसि (Thou Art That)" }
    ],
    availableTexts: [
      { title: "प्रथम-द्वितीय प्रपाठक: उद्गीथ विद्या", desc: "सामगान, ॐकार का सामयिक महत्व, प्राण उपासना", slug: "prapathaka-1" },
      { title: "तृतीय प्रपाठक: मधु विद्या व शांडिल्य विद्या", desc: "'सर्वं खल्विदं ब्रह्म तज्जलानिति शांत उपासीत' — संपूर्ण जगत ब्रह्ममय है", slug: "prapathaka-3" },
      { title: "चतुर्थ प्रपाठक: सत्यकाम जाबाल कथा", desc: "सत्यभाषण ही ब्राह्मणत्व की पहचान, रैक्व व जानश्रुति संवाद", slug: "prapathaka-4" },
      { title: "पंचम प्रपाठक: पंचाग्नि विद्या", desc: "श्वेतकेतु-प्रवाहण संवाद, जीवात्मा का आवागमन, वैश्वानर विद्या", slug: "prapathaka-5" },
      { title: "षष्ठ प्रपाठक: उद्दालक-श्वेतकेतु संवाद", desc: "'सदेव सोम्येदमग्र आसीत्', 'तत्त्वमसि श्वेतकेतो' का ९ बार निरूपण", mantraId: "up-chandogya-6-8-7", slug: "prapathaka-6" },
      { title: "सप्तम प्रपाठक: सनत्कुमार-नारद संवाद", desc: "भूमा विद्या — 'यो वै भूमा तत्सुखं नाल्पे सुखमस्ति'", slug: "prapathaka-7" },
      { title: "अष्टम प्रपाठक: दहर विद्या व प्रजापति विद्या", desc: "हृदयस्थ आकाश (दहराकाश), इंद्र-विरोचन संवाद, आत्म-साक्षात्कार", slug: "prapathaka-8" }
    ],
    rishis: ["उद्दालक आरुणि", "श्वेतकेतु", "सत्यकाम जाबाल", "सनत्कुमार", "देवर्षि नारद"],
    devatas: ["परब्रह्म", "प्रजापति", "उद्गीथ (ॐ)"],
    articles: [
      { id: "sarvam-khalvidam-brahma", title: "सर्वं खल्विदं ब्रह्म — शांडिल्य विद्या", desc: "छान्दोग्य ३.१४ — यह संपूर्ण चराचर विश्व ब्रह्म ही है, शांत भाव से उसकी उपासना करो।", slug: "sarvam-khalvidam" }
    ],
    relatedGranthas: [
      { name: "बृहदारण्यकोपनिषद्", type: "उपनिषद", author: "शुक्ल यजुर्वेद", slug: "brihadaranyaka-upanishad" }
    ],
    relatedSubjects: [
      { name: "बृहदारण्यकोपनिषद्", slug: "brihadaranyaka-upanishad", desc: "अहं ब्रह्मास्मि" },
      { name: "माण्डूक्योपनिषद्", slug: "mandukya-upanishad", desc: "अयमात्मा ब्रह्म" }
    ]
  },

  "upanishad/brihadaranyaka-upanishad": {
    categorySlug: "upanishad",
    subjectSlug: "brihadaranyaka-upanishad",
    name: "बृहदारण्यकोपनिषद्",
    enName: "Brihadaranyaka Upanishad",
    eyebrow: "उपनिषद • शुक्ल यजुर्वेद शतपथ ब्राह्मण",
    intro: "बृहदारण्यकोपनिषद् समस्त उपनिषदों में आकार एवं दार्शनिक गंभीरता की दृष्टि से सबसे विशाल (बृहत्) है। महर्षि याज्ञवल्क्य, गार्गी, मैत्रेयी और राजा जनक के अमर तत्व-संवाद इसमें संगृहीत हैं।",
    quickInfo: {
      type: "प्रधान उपनिषद (विशालतम)",
      veda: "शुक्ल यजुर्वेद (काण्व व माध्यन्दिना)",
      shantiMantra: "ॐ पूर्णमदः पूर्णमिदम्...",
      division: "६ अध्याय (३ कांड: मधु, मुनि, खिल)",
      mahavakya: "अहम् ब्रह्मास्मि (यजुर्वेद)",
      famousMantra: "असतो मा सद्गमय तमसो मा ज्योतिर्गमय..."
    },
    navTabs: ["Overview", "Structure", "6 Adhyayas", "Yajnavalkya Dialogues", "Articles", "Related Granthas"],
    overviewText: "बृहदारण्यक में महर्षि याज्ञवल्क्य अपनी विदुषी पत्नी मैत्रेयी को उपदेश देते हैं: 'न वा अरे पत्युः कामाय पतिः प्रियो भवति, आत्मनस्तु कामाय पतिः प्रियो भवति।' पति, पत्नी, धन या संसार अपने लिए नहीं, प्रत्युत आत्मा के लिए प्रिय होते हैं। आत्मा ही द्रष्टव्य, श्रोतव्य, मंतव्य और निदिध्यासितव्य है।",
    structureCards: [
      { num: "६", title: "अध्याय", desc: "मधु कांड, मुनि कांड और खिल कांड" },
      { num: "४७", title: "ब्राह्मण", desc: "गहन दार्शनिक शास्त्रार्थ" },
      { num: "१", title: "महावाक्य", desc: "अहम् ब्रह्मास्मि (I am Brahman)" }
    ],
    availableTexts: [
      { title: "अध्याय १: अश्वमेध व सृष्टि रहस्य", desc: "विराट् सृष्टि, प्राण श्रेष्ठता, 'असतो मा सद्गमय', 'अहं ब्रह्मास्मि' (१.४.१०)", mantraId: "up-brihad-1-4-10", slug: "adhyaya-1" },
      { title: "अध्याय २: गार्ग्य-अजातशत्रु व मैत्रेयी संवाद", desc: "आत्मतत्व का निरूपण, 'आत्मनस्तु कामाय सर्वं प्रियं भवति'", slug: "adhyaya-2" },
      { title: "अध्याय ३: जनक की सभा में याज्ञवल्क्य का शास्त्रार्थ", desc: "अश्वल, आर्तभाग, भुज्यु, कहोल, गार्गी संवाद (अक्षर ब्रह्म) व शाकल्य संवाद", slug: "adhyaya-3" },
      { title: "अध्याय ४: जनक-याज्ञवल्क्य व पुनर्मैत्रेयी संवाद", desc: "जाग्रत, स्वप्न, सुषुप्ति, मृत्यु, मोक्ष, 'नेति नेति' निरूपण", slug: "adhyaya-4" },
      { title: "अध्याय ५: खिल कांड (नैतिक उपदेश)", desc: "ॐ खं ब्रह्म, देव-मनुष्य-असुरों को 'द' कार उपदेश (दाम्यत, दत्त, दयध्वम्)", slug: "adhyaya-5" },
      { title: "अध्याय ६: प्राण संवाद व वंश परंपरा", desc: "पंचाग्नि विद्या, संतान उत्पत्ति संस्कार, गुरु-शिष्य वंश परंपरा", slug: "adhyaya-6" }
    ],
    rishis: ["महर्षि याज्ञवल्क्य", "ब्रह्मवादिनी गार्गी वाचक्नवी", "मैत्रेयी", "महाराज जनक", "अजातशत्रु"],
    devatas: ["परब्रह्म", "अक्षर ब्रह्म"],
    articles: [
      { id: "asato-ma-sadgamaya", title: "असतो मा सद्गमय तमसो मा ज्योतिर्गमय", desc: "बृहदारण्यक १.३.२८ — असत्य से सत्य, अंधकार से प्रकाश और मृत्यु से अमरता की सनातन प्रार्थना।", slug: "asato-ma" },
      { id: "neti-neti", title: "नेति नेति — अनिर्वचनीय ब्रह्म का साक्षात्कार", desc: "बृहदारण्यक ४.४.२२ — समस्त नाम-रूप के निषेध द्वारा शुद्ध चैतन्य की अनुभूति।", slug: "neti-neti" }
    ],
    relatedGranthas: [
      { name: "शतपथ ब्राह्मण", type: "ब्राह्मण", author: "शुक्ल यजुर्वेद", slug: "shatapatha-brahmana" },
      { name: "ईशावास्योपनिषद्", type: "उपनिषद", author: "शुक्ल यजुर्वेद", slug: "isha-upanishad" }
    ],
    relatedSubjects: [
      { name: "ईशावास्योपनिषद्", slug: "isha-upanishad", desc: "वाजसनेयि संहिता ४०वाँ अध्याय" },
      { name: "छान्दोग्योपनिषद्", slug: "chandogya-upanishad", desc: "तत्त्वमसि" }
    ]
  },

  "upanishad/mundaka-upanishad": {
    categorySlug: "upanishad",
    subjectSlug: "mundaka-upanishad",
    name: "मुण्डकोपनिषद्",
    enName: "Mundaka Upanishad",
    eyebrow: "उपनिषद • अथर्ववेद शौनक शाखा",
    intro: "मुण्डकोपनिषद् अथर्ववेद का अत्यंत लोकप्रिय उपनिषद है। इसमें अंगिरा ऋषि द्वारा शौनक को परा (आध्यात्मिक) और अपरा (सांसारिक व कर्मकांडीय) विद्या का भेद समझाया गया है। भारत का राष्ट्रीय आदर्श वाक्य 'सत्यमेव जयते' इसी से लिया गया है।",
    quickInfo: {
      type: "प्रधान उपनिषद (दशोपनिषद)",
      veda: "अथर्ववेद (शौनक शाखा)",
      shantiMantra: "ॐ भद्रं कर्णेभिः शृणुयाम देवाः...",
      division: "३ मुण्डक (प्रत्येक में २ खंड = ६ खंड, ६४ मंत्र)",
      nationalMotto: "सत्यमेव जयते नानृतम् (३.१.६)",
      famousAllegory: "द्वा सुपर्णा सयुजा सखाया (दो पक्षियों का रूपक)"
    },
    navTabs: ["Overview", "Structure", "3 Mundakas", "Satyameva Jayate", "Articles", "Related Granthas"],
    overviewText: "मुण्डकोपनिषद् में जीवात्मा और परमात्मा का संबंध एक ही वृक्ष पर बैठे दो सुंदर पंखों वाले पक्षियों के रूपक द्वारा समझाया गया है (द्वा सुपर्णा सयुजा सखाया)। एक पक्षी कर्मफल के फल खाता है और दूसरा पक्षी साक्षी भाव से केवल देखता रहता है।",
    structureCards: [
      { num: "३", title: "मुण्डक", desc: "३ प्रमुख मुण्डक" },
      { num: "६", title: "खंड", desc: "प्रत्येक मुण्डक में २-२ खंड" },
      { num: "६४", title: "मंत्र", desc: "काव्यात्मक व दार्शनिक मंत्र" }
    ],
    availableTexts: [
      { title: "प्रथम मुण्डक — परा व अपरा विद्या", desc: "ऋक्-यजुष्-वेदांग अपरा विद्या हैं, जिससे अक्षर ब्रह्म जाना जाए वह परा विद्या है", slug: "mundaka-1" },
      { title: "द्वितीय मुण्डक — धनुष-बाण रूपक व ब्रह्म स्वरूप", desc: "प्रणवो धनुः शरो ह्यात्मा ब्रह्म तल्लक्ष्यमुच्यते — ॐकार धनुष है, आत्मा बाण है, ब्रह्म लक्ष्य है", slug: "mundaka-2" },
      { title: "तृतीय मुण्डक — सत्यमेव जयते व दो पक्षी रूपक", desc: "'सत्यमेव जयते नानृतं', 'द्वा सुपर्णा सयुजा सखाया', ज्ञानी का परब्रह्म में विलीन होना", mantraId: "up-mundaka-3-1-6", slug: "mundaka-3" }
    ],
    rishis: ["महर्षि अंगिरा", "शौनक (महाशाल)"],
    devatas: ["अक्षर ब्रह्म"],
    articles: [
      { id: "satyameva-jayate-artha", title: "सत्यमेव जयते नानृतम् — राष्ट्रीय आदर्श का मूल", desc: "मुण्डक ३.१.६ — सत्य की ही विजय होती है, असत्य की नहीं। सत्य ही देवयान मार्ग का विस्तार करता है।", slug: "satyameva-jayate" }
    ],
    relatedGranthas: [
      { name: "माण्डूक्योपनिषद्", type: "उपनिषद", author: "अथर्ववेद", slug: "mandukya-upanishad" }
    ],
    relatedSubjects: [
      { name: "माण्डूक्योपनिषद्", slug: "mandukya-upanishad", desc: "अयमात्मा ब्रह्म" },
      { name: "कठोपनिषद्", slug: "katha-upanishad", desc: "यम-नचिकेता संवाद" }
    ]
  },

"upanishad/kena-upanishad": {
    categorySlug: "upanishad",
    subjectSlug: "kena-upanishad",
    id: "kena-upanishad",
    slug: "kena-upanishad",
    name: "केनोपनिषद्",
    enName: "Kena Upanishad",
    eyebrow: "सामवेद • तलवकार / जैमिनीय ब्राह्मण • दशोपनिषद",
    intro: "सामवेदीय तलवकार ब्राह्मण का नवम प्रपाठक। 'केनेषितं पतति प्रेषितं मनः' (किसकी प्रेरणा से मन विषयों की ओर दौड़ता है?) से प्रारंभ होने के कारण इसे केनोपनिषद् कहते हैं।",
    overviewText: "केनोपनिषद् परब्रह्म के अनिर्वचनीय स्वरूप, इन्द्रियों के प्रेरक आत्मतत्त्व, तथा देवताओं के अभिमान भंजन हेतु यक्षोपाख्यान एवं भगवती उमा हैमवती के दिव्य साक्षात्कार का प्रतिपादन करता है।",
    stats: "४ खण्ड • ३४ मन्त्र • सामवेद",
    priest: "उद्गाता (सामवेदीय)",
    badge: "दशोपनिषद",
    imageKey: "card-grantha-chandogya.jpg",
    quickInfo: {
      type: "प्रधान उपनिषद (दशोपनिषद)",
      veda: "सामवेद (Samaveda)",
      shakha: "तलवकार / जैमिनीय शाखा",
      totalMantras: "३४ मन्त्र",
      mantraCount: "३४ मन्त्र",
      adhyayas: "४ खण्ड",
      division: "४ खण्ड (३४ मन्त्र)",
      shantiMantra: "ॐ आप्यायन्तु ममाङ्गानि...",
      coreTeaching: "श्रोत्रस्य श्रोत्रं मनसो मनो यद्..."
    },
    navTabs: ["Overview", "Structure", "Texts", "Sages & Devatas", "Philosophy"],
    structureCards: [
      { id: "kena-kh-1", num: "८", stats: "८ मन्त्र", title: "प्रथम खण्ड — प्रेरक ब्रह्म निरूपण", name: "प्रथम खण्ड — प्रेरक ब्रह्म निरूपण", enName: "Khanda 1: The Inner Impeller", desc: "मन, वाणी, चक्षु और प्राण का प्रेरक वह परब्रह्म है जिसे इन्द्रियाँ नहीं जान सकतीं।", badge: "खण्ड" },
      { id: "kena-kh-2", num: "५", stats: "५ मन्त्र", title: "द्वितीय खण्ड — ज्ञानाभिमान खंडन", name: "द्वितीय खण्ड — ज्ञानाभिमान खंडन", enName: "Khanda 2: The Paradox of Knowing", desc: "जो सोचता है मैं जानता हूँ वह नहीं जानता; जो मानता है वह अज्ञेय है वही सत्य को उपलब्ध होता है।", badge: "खण्ड" },
      { id: "kena-kh-3", num: "१२", stats: "१२ मन्त्र", title: "तृतीय खण्ड — यक्षोपाख्यान", name: "तृतीय खण्ड — यक्षोपाख्यान", enName: "Khanda 3: The Yaksha Allegory", desc: "अग्नि और वायु द्वारा तिनके को न जला पाना; ब्रह्म का यक्ष रूप में प्राकट्य।", badge: "आख्यान" },
      { id: "kena-kh-4", num: "९", stats: "९ मन्त्र", title: "चतुर्थ खण्ड — उमा हैमवती संवाद", name: "चतुर्थ खण्ड — उमा हैमवती संवाद", enName: "Khanda 4: Uma Haimavati Revelation", desc: "भगवती उमा द्वारा इन्द्र को ब्रह्मविद्या का उपदेश तथा तद्वन उपासना।", badge: "विद्या" }
    ],
    availableTexts: [
      { title: "केनोपनिषद् मूल संहिता (स्वर पाठ)", desc: "सामवेदीय सस्वर पाठ एवं अन्वय", type: "Original Text", language: "Sanskrit", size: "34 Mantras", slug: "mula-samhita" },
      { title: "शांकर भाष्य (पदभाष्य व वाक्यभाष्य)", desc: "आदि शंकराचार्य कृत विशद दार्शनिक भाष्य", type: "Commentary", language: "Sanskrit - Hindi", size: "Full Bhashya", slug: "shankara-bhashya" },
      { title: "प्रथम खण्ड: केनेषितं पतति प्रेषितं मनः...", desc: "इंद्रियों का प्रेरक परब्रह्म", mantraId: "up-kena-1-1", slug: "khanda-1" },
      { title: "तृतीय खण्ड: ब्रह्म ह देवेभ्यो विजिग्ये...", desc: "यक्षोपाख्यान — अग्नि, वायु और यक्ष संवाद", slug: "khanda-3" }
    ],
    rishis: [
      { name: "तलवकार ऋषि", role: "ऋषि / द्रष्टा" },
      { name: "आदि शंकराचार्य", role: "पदभाष्यकार" }
    ],
    deities: [
      { name: "निर्गुण परब्रह्म", title: "प्रतिपाद्य देव" },
      { name: "उमा हैमवती", title: "ब्रह्मविद्या स्वरूपिणी" }
    ],
    devatas: [
      { name: "निर्गुण परब्रह्म", title: "प्रतिपाद्य देव" },
      { name: "उमा हैमवती", title: "ब्रह्मविद्या स्वरूपिणी" }
    ],
    articles: [
      { id: "kena-yakshopakhyana", title: "यक्षोपाख्यान — देवताओं के दर्प दलन की कथा", desc: "अग्नि और वायु द्वारा तिनके को न जला पाना तथा ब्रह्म की सर्वशक्तिमत्ता।", slug: "yakshopakhyana" },
      { id: "uma-haimavati", title: "उमा हैमवती एवं ब्रह्मविद्या का साक्षात्कार", desc: "भगवती उमा द्वारा इन्द्र को परब्रह्म का ज्ञान प्रदान करने का तात्विक रहस्य।", slug: "uma-haimavati" }
    ],
    relatedGranthas: [
      { name: "छान्दोग्योपनिषद्", enName: "Chandogya Upanishad", desc: "सामवेद का प्रधान उपनिषद्", slug: "chandogya-upanishad", category: "upanishad", badge: "सामवेद" },
      { name: "ईशोपनिषद्", enName: "Isha Upanishad", desc: "शुक्ल यजुर्वेद संहिता उपनिषद्", slug: "isha-upanishad", category: "upanishad", badge: "दशोपनिषद" }
    ],
    relatedSubjects: [
      { name: "छान्दोग्योपनिषद्", slug: "chandogya-upanishad", desc: "सामवेद, तत्त्वमसि" },
      { name: "ईशावास्योपनिषद्", slug: "isha-upanishad", desc: "शुक्ल यजुर्वेद" }
    ]
  },

  "upanishad/prashna-upanishad": {
    categorySlug: "upanishad",
    subjectSlug: "prashna-upanishad",
    name: "प्रश्नोपनिषद्",
    enName: "Prashna Upanishad",
    eyebrow: "उपनिषद • अथर्ववेद पिप्पलाद शाखा",
    intro: "प्रश्नोपनिषद् अथर्ववेद की पिप्पलाद शाखा का प्रमुख उपनिषद है। इसमें छह ऋषि-पुत्र महर्षि पिप्पलाद के पास जाकर सृष्टि, प्राण, मन, चेतना और ॐकार से संबंधित छह गहन प्रश्न पूछते हैं।",
    quickInfo: {
      type: "प्रधान उपनिषद (दशोपनिषद)",
      veda: "अथर्ववेद (पिप्पलाद शाखा)",
      shantiMantra: "ॐ भद्रं कर्णेभिः शृणुयाम देवाः...",
      division: "६ प्रश्न (६७ मंत्र)",
      centralTheme: "प्राण व रयि, षोडशकल पुरुष"
    },
    navTabs: ["Overview", "Structure", "6 Prashnas", "Prana & Rayi", "Articles", "Related Granthas"],
    overviewText: "प्रश्नोपनिषद् में छह जिज्ञासु — कबन्धी, भार्गव, कौसल्य, सौर्यायणि, सत्यकाम और सुकेशा — महर्षि पिप्पलाद से एक-एक प्रश्न पूछते हैं। इसमें प्राण और रयि द्वारा सृष्टि की उत्पत्ति, पंच प्राणों का शरीर में कार्य, स्वप्न व सुषुप्ति अवस्था, ॐकार उपासना का फल और षोडश कलाओं वाले पुरुष का निरूपण है।",
    structureCards: [
      { num: "६", title: "प्रश्न", desc: "६ जिज्ञासुओं द्वारा पूछे गए छह प्रश्न" },
      { num: "६७", title: "मंत्र", desc: "पिप्पलाद उपदेश" },
      { num: "१६", title: "कलाएँ", desc: "षोडशकल पुरुष निरूपण" }
    ],
    availableTexts: [
      { title: "प्रथम प्रश्न: कबन्धी का प्रश्न (सृष्टि उत्पत्ति)", desc: "प्रजापति द्वारा रयि (पदार्थ) और प्राण (ऊर्जा) की उत्पत्ति", slug: "prashna-1" },
      { title: "द्वितीय प्रश्न: भार्गव वैदर्भि का प्रश्न (इंद्रियाँ व प्राण)", desc: "शरीर को धारण करने वाली शक्तियाँ और प्राण की सर्वोच्चता", slug: "prashna-2" },
      { title: "तृतीय प्रश्न: कौसल्य का प्रश्न (प्राण का उद्गम)", desc: "प्राण का आत्मा से जन्म, शरीर में प्रवेश और पंच प्राणों का विभाजन", slug: "prashna-3" },
      { title: "चतुर्थ प्रश्न: सौर्यायणि गार्ग्य का प्रश्न (स्वप्न व साक्षी)", desc: "सोते समय कौन जागता है? स्वप्न का अनुभव और शुद्ध साक्षी आत्मा", slug: "prashna-4" },
      { title: "पंचम प्रश्न: शैब्य सत्यकाम का प्रश्न (ॐकार ध्यान)", desc: "ॐ की त्रिमात्रिक उपासना और ब्रह्मलोक प्राप्ति", slug: "prashna-5" },
      { title: "षष्ठ प्रश्न: सुकेशा भारद्वाज का प्रश्न (षोडशकल पुरुष)", desc: "हृदय में स्थित सोलह कलाओं वाला पुरुष और मोक्ष", slug: "prashna-6" }
    ],
    rishis: ["महर्षि पिप्पलाद", "कबन्धी", "भार्गव", "कौसल्य", "सत्यकाम", "सुकेशा"],
    devatas: ["परब्रह्म", "प्राण"],
    articles: [
      { id: "prashna-shodashakala", title: "षोडशकल पुरुष — प्रश्नोपनिषद् का चरम उपदेश", desc: "जैसे नदियाँ समुद्र में मिलकर नाम-रूप खो देती हैं, वैसे ही सोलह कलाएँ परब्रह्म में विलीन हो जाती हैं।", slug: "shodashakala" }
    ],
    relatedGranthas: [
      { name: "मुण्डकोपनिषद्", type: "उपनिषद", author: "अथर्ववेद", slug: "mundaka-upanishad" },
      { name: "माण्डूक्योपनिषद्", type: "उपनिषद", author: "अथर्ववेद", slug: "mandukya-upanishad" }
    ],
    relatedSubjects: [
      { name: "मुण्डकोपनिषद्", slug: "mundaka-upanishad", desc: "अथर्ववेद" },
      { name: "माण्डूक्योपनिषद्", slug: "mandukya-upanishad", desc: "अथर्ववेद" }
    ]
  },

  "upanishad/taittiriya-upanishad": {
    categorySlug: "upanishad",
    subjectSlug: "taittiriya-upanishad",
    name: "तैत्तिरीयोपनिषद्",
    enName: "Taittiriya Upanishad",
    eyebrow: "उपनिषद • कृष्ण यजुर्वेद तैत्तिरीय शाखा",
    intro: "तैत्तिरीयोपनिषद् कृष्ण यजुर्वेद की तैत्तिरीय शाखा का भाग है। इसमें शिक्षावल्ली (सत्यं वद धर्मं चर), ब्रह्मानन्दवल्ली (सत्यं ज्ञानमनन्तं ब्रह्म व पञ्चकोश विवेक) और भृगुवल्ली (अन्नं ब्रह्मेति व्यजानात्) सम्मिलित हैं।",
    quickInfo: {
      type: "प्रधान उपनिषद (दशोपनिषद)",
      veda: "कृष्ण यजुर्वेद (तैत्तिरीय शाखा)",
      shantiMantra: "ॐ शं नो मित्रः शं वरुणः... / ॐ सह नाववतु...",
      division: "३ वल्लियाँ (शिक्षा, ब्रह्मानन्द, भृगु)",
      famousMantra: "सत्यं वद धर्मं चर • मातृदेवो भव पितृदेवो भव"
    },
    navTabs: ["Overview", "Structure", "3 Vallis", "Pancha Kosha", "Articles", "Related Granthas"],
    overviewText: "तैत्तिरीयोपनिषद् सनातन आचार-शास्त्र और ब्रह्मविद्या का अद्भुत संगम है। शिक्षावल्ली में प्राचीन दीक्षांत उपदेश (सत्य बोलो, धर्म का आचरण करो, स्वाध्याय में प्रमाद मत करो) है। ब्रह्मानन्दवल्ली में पञ्चकोश (अन्नमय, प्राणमय, मनोमय, विज्ञानमय, आनन्दमय) का विशद वर्णन है।",
    structureCards: [
      { num: "३", title: "वल्लियाँ", desc: "शिक्षावल्ली, ब्रह्मानन्दवल्ली, भृगुवल्ली" },
      { num: "५", title: "कोश", desc: "अन्नमय, प्राणमय, मनोमय, विज्ञानमय, आनन्दमय" },
      { num: "१", title: "महामंत्र", desc: "सत्यं ज्ञानमनन्तं ब्रह्म" }
    ],
    availableTexts: [
      { title: "शिक्षावल्ली: द्वादश अनुवाक", desc: "वर्ण, स्वर, संहिता उपासना, दीक्षांत उपदेश (सत्यं वद, धर्मं चर)", slug: "shikshavalli" },
      { title: "ब्रह्मानन्दवल्ली: नव अनुवाक", desc: "सत्यं ज्ञानमनन्तं ब्रह्म, पञ्चकोश विवेक, ब्रह्मानंद की मीमांसा", slug: "brahmanandavalli" },
      { title: "भृगुवल्ली: दश अनुवाक", desc: "वरुण-भृगु संवाद — अन्न, प्राण, मन, विज्ञान और आनंद के माध्यम से ब्रह्म साक्षात्कार", slug: "bhriguvalli" }
    ],
    rishis: ["महर्षि वरुण", "भृगु", "त्रिशंकु"],
    devatas: ["परब्रह्म", "मित्र", "वरुण"],
    articles: [
      { id: "satyam-vada-dharmam-chara", title: "सत्यं वद धर्मं चर — तैत्तिरीय दीक्षांत उपदेश", desc: "वेदानुवच्याचार्योऽन्तेवासिनमनुशास्ति — प्राचीन गुरुकुल का अमर दीक्षांत संदेश।", slug: "satyam-vada" }
    ],
    relatedGranthas: [
      { name: "कठोपनिषद्", type: "उपनिषद", author: "कृष्ण यजुर्वेद", slug: "katha-upanishad" }
    ],
    relatedSubjects: [
      { name: "कठोपनिषद्", slug: "katha-upanishad", desc: "कृष्ण यजुर्वेद" }
    ]
  },

  "upanishad/aitareya-upanishad": {
    categorySlug: "upanishad",
    subjectSlug: "aitareya-upanishad",
    name: "ऐतरेयोपनिषद्",
    enName: "Aitareya Upanishad",
    eyebrow: "उपनिषद • ऋग्वेद ऐतरेय आरण्यक",
    intro: "ऐतरेयोपनिषद् ऋग्वेद के ऐतरेय आरण्यक का भाग है। महर्षि महीदास ऐतरेय द्वारा साक्षात्कृत इस उपनिषद में सृष्टि रचना, आत्म-प्रवेश और ऋग्वेद का प्रसिद्ध महावाक्य 'प्रज्ञानं ब्रह्म' निहित है।",
    quickInfo: {
      type: "प्रधान उपनिषद (दशोपनिषद)",
      veda: "ऋग्वेद (ऐतरेय आरण्यक)",
      shantiMantra: "ॐ वाङ् मे मनसि प्रतिष्ठिता...",
      division: "३ अध्याय (५ खंड, ३३ मंत्र)",
      mahavakya: "प्रज्ञानं ब्रह्म (Consciousness is Brahman)"
    },
    navTabs: ["Overview", "Structure", "3 Adhyayas", "Prajnanam Brahma", "Articles", "Related Granthas"],
    overviewText: "ऐतरेयोपनिषद् सृष्टि के प्रारंभ में केवल आत्मा के अस्तित्व से शुरू होता है: 'आत्मा वा इदमेक एवाग्र आसीन्नान्यत्किञ्चन मिषत्।' आत्मा ने लोकों, लोकपालों और मानव शरीर की रचना की और स्वयं उसमें ब्रह्मरंध्र से प्रवेश किया। तृतीय अध्याय में 'प्रज्ञानं ब्रह्म' महावाक्य की प्रतिष्ठा है।",
    structureCards: [
      { num: "३", title: "अध्याय", desc: "सृष्टि, त्रिविध जन्म, प्रज्ञानं ब्रह्म" },
      { num: "५", title: "खंड", desc: "३३ गहन वैदिक मंत्र" },
      { num: "१", title: "महावाक्य", desc: "प्रज्ञानं ब्रह्म (ऋग्वेद)" }
    ],
    availableTexts: [
      { title: "प्रथम अध्याय: सृष्टि उत्पत्ति व आत्म-प्रवेश", desc: "आत्मा द्वारा लोकों की रचना, इंद्रियों की उत्पत्ति, ब्रह्मरंध्र से प्रवेश", slug: "adhyaya-1" },
      { title: "द्वितीय अध्याय: आत्मा का त्रिविध जन्म", desc: "रेतोरूप, बालक जन्म और मरणोपरांत नवीन देह — वामदेव ऋषि का दृष्टांत", slug: "adhyaya-2" },
      { title: "तृतीय अध्याय: प्रज्ञानं ब्रह्म महावाक्य", desc: "कोऽयमात्मेति वयमुपास्महे — प्रज्ञान ही चक्षु, श्रोत्र, मन और समस्त विश्व का आधार है", slug: "adhyaya-3" }
    ],
    rishis: ["महीदास ऐतरेय", "वामदेव ऋषि"],
    devatas: ["परब्रह्म", "प्रज्ञान"],
    articles: [
      { id: "prajnanam-brahma", title: "प्रज्ञानं ब्रह्म — ऋग्वेद महावाक्य का तात्विक अर्थ", desc: "ऐतरेय ३.१ — विशुद्ध चेतना ही परब्रह्म है, समस्त सृष्टि उसी प्रज्ञान पर आश्रित है।", slug: "prajnanam-brahma" }
    ],
    relatedGranthas: [
      { name: "ऐतरेय ब्राह्मण", type: "ब्राह्मण", author: "ऋग्वेद", slug: "aitareya-brahmana" },
      { name: "ऋग्वेद", type: "वेद", author: "श्रुति", slug: "rigveda" }
    ],
    relatedSubjects: [
      { name: "ऋग्वेद", slug: "rigveda", desc: "१० मण्डल" }
    ]
  },

  "upanishad/shvetashvatara-upanishad": {
    categorySlug: "upanishad",
    subjectSlug: "shvetashvatara-upanishad",
    name: "श्वेताश्वतरोपनिषद्",
    enName: "Shvetashvatara Upanishad",
    eyebrow: "उपनिषद • कृष्ण यजुर्वेद",
    intro: "श्वेताश्वतरोपनिषद् कृष्ण यजुर्वेद का अत्यंत महत्वपूर्ण उपनिषद है। इसमें ब्रह्म, जीव और माया (प्रकृति) के त्रिविध स्वरूप, ध्यान-योग की विधि और महेश्वर (रुद्र/शिव) के सगुण-निर्गुण रूप का अद्वितीय समन्वय है।",
    quickInfo: {
      type: "प्रधान उपनिषद (एकादश उपनिषद)",
      veda: "कृष्ण यजुर्वेद",
      shantiMantra: "ॐ सह नाववतु...",
      division: "६ अध्याय (११३ मंत्र)",
      centralTheme: "रुद्र-परब्रह्म, ध्यानयोग, भक्ति का प्रथम स्पष्ट उल्लेख"
    },
    navTabs: ["Overview", "Structure", "6 Adhyayas", "Dhyana Yoga", "Articles", "Related Granthas"],
    overviewText: "श्वेताश्वतरोपनिषद् में ऋषि श्वेताश्वतर ब्रह्मवादियों की सभा में कारण-तत्व की मीमांसा करते हैं। इसमें अद्वैत वेदांत, सांख्य और योग का सुंदर समन्वय है। 'यस्य देवे परा भक्तिर्यथा देवे तथा गुरौ' — इस उपनिषद के अंतिम मंत्र में वैदिक साहित्य में सर्वप्रथम पराभक्ति का स्पष्ट उपदेश मिलता है।",
    structureCards: [
      { num: "६", title: "अध्याय", desc: "११३ काव्यात्मक मंत्र" },
      { num: "३", title: "तत्व", desc: "भोक्ता (जीव), भोग्य (प्रकृति), प्रेरक (ईश्वर)" },
      { num: "१", title: "चरम उपदेश", desc: "यस्य देवे परा भक्तिः (भक्तियोग)" }
    ],
    availableTexts: [
      { title: "प्रथमोऽध्यायः: किम् कारणं ब्रह्म?", desc: "सृष्टि का मूल कारण क्या है? ब्रह्मचक्र और आत्म-संयम योग", slug: "adhyaya-1" },
      { title: "द्वितीयोऽध्यायः: ध्यान-योग की विधि", desc: "आसन, प्राणायाम, नाद-श्रवण और योग-सिद्धि के लक्षण", slug: "adhyaya-2" },
      { title: "तृतीयोऽध्यायः: एको हि रुद्रो न द्वितीयाय तस्थुः", desc: "विश्वतश्चक्षुः विश्वतोमुखः — रुद्र ही अद्वितीय परमात्मा हैं", slug: "adhyaya-3" },
      { title: "चतुर्थोऽध्यायः: मायां तु प्रकृतिं विद्धि मायिनं तु महेश्वरम्", desc: "प्रकृति माया है और महेश्वर मायापति हैं", slug: "adhyaya-4" },
      { title: "पंचमोऽध्यायः: विद्या और अविद्या का भेद", desc: "क्षराक्षर ब्रह्म, कपिल ऋषि का उल्लेख, सूक्ष्म आत्मतत्व", slug: "adhyaya-5" },
      { title: "षष्ठोऽध्यायः: न तस्य कार्यं करणं च विद्यते", desc: "सर्वज्ञ परमात्मा की महिमा और गुरु-भक्ति का संदेश", slug: "adhyaya-6" }
    ],
    rishis: ["महर्षि श्वेताश्वतर", "कपिल"],
    devatas: ["रुद्र (महेश्वर)", "परब्रह्म"],
    articles: [
      { id: "ekohirudro", title: "एको हि रुद्रो न द्वितीयाय तस्थुः — अद्वैत रुद्र तत्व", desc: "श्वेताश्वतर ३.२ — संपूर्ण जगत पर शासन करने वाले एकमात्र रुद्र ही सत्य हैं।", slug: "ekohirudro" }
    ],
    relatedGranthas: [
      { name: "कठोपनिषद्", type: "उपनिषद", author: "कृष्ण यजुर्वेद", slug: "katha-upanishad" },
      { name: "शिव पुराण", type: "पुराण", author: "महर्षि वेदव्यास", slug: "shiva-purana" }
    ],
    relatedSubjects: [
      { name: "कठोपनिषद्", slug: "katha-upanishad", desc: "कृष्ण यजुर्वेद" }
    ]
  },

  // ----------------------------------------------------
  // DARSHANA SUBJECTS
  // ----------------------------------------------------
  "darshana/yoga": {
    categorySlug: "darshana",
    subjectSlug: "yoga",
    name: "योग दर्शन",
    enName: "Yoga Darshana",
    eyebrow: "षड्दर्शन • महर्षि पतंजलि",
    intro: "योग दर्शन महर्षि पतंजलि द्वारा प्रणीत चित्त-वृत्ति-निरोध का व्यावहारिक विज्ञान है। यह सांख्य दर्शन के सैद्धांतिक तत्वों को आत्म-साक्षात्कार और समाधि की व्यावहारिक साधना में रूपांतरित करता है।",
    quickInfo: {
      type: "आस्तिक दर्शन (षड्दर्शन)",
      author: "महर्षि पतंजलि",
      rootText: "पातंजल योगसूत्र (१९६ सूत्र)",
      division: "४ पाद (समाधि, साधना, विभूति, कैवल्य)",
      definition: "योगश्चित्तवृत्तिनिरोधः (१.२)",
      ashtanga: "यम, नियम, आसन, प्राणायाम, प्रत्याहार, धारणा, ध्यान, समाधि"
    },
    navTabs: ["Overview", "Structure", "4 Padas", "Ashtanga Yoga", "Articles", "Related Granthas"],
    overviewText: "योग दर्शन में मन की चंचलता को शांत कर स्वरूप में स्थित होने (तदा द्रष्टुः स्वरूपेऽवस्थानम्) की वैज्ञानिक पद्धति है। इसके चार पाद हैं: समाधि पाद (योग का स्वरूप), साधना पाद (अष्टांग योग व क्रियायोग), विभूति पाद (संयम व सिद्धियाँ), और कैवल्य पाद (मुक्ति व पुरुषार्थ शून्यता)।",
    structureCards: [
      { num: "४", title: "पाद", desc: "समाधि, साधना, विभूति, कैवल्य पाद" },
      { num: "१९६", title: "योगसूत्र", desc: "सूत्र शैली में परिष्कृत मनोविज्ञान" },
      { num: "८", title: "अष्टांग योग", desc: "यम से लेकर समाधि तक ८ सोपान" }
    ],
    availableTexts: [
      { title: "१. समाधि पाद (५१ सूत्र)", desc: "योग परिभाषा, ५ चित्तवृत्तियाँ, अभ्यास व वैराग्य, ईश्वरप्रणिधान, संप्रज्ञात व असंप्रज्ञात समाधि", mantraId: "yoga-sutra-1-2", slug: "samadhi-pada" },
      { title: "२. साधना पाद (५५ सूत्र)", desc: "क्रियायोग (तपःस्वाध्यायेश्वरप्रणिधानानि), ५ क्लेश, कर्मविपाक, अष्टांग योग (यम, नियम, आसन, प्राणायाम, प्रत्याहार)", slug: "sadhana-pada" },
      { title: "३. विभूति पाद (५५ सूत्र)", desc: "अंतरंग साधन (धारणा, ध्यान, समाधि), संयम, विविध सिद्धियाँ एवं उनका वैराग्य", slug: "vibhuti-pada" },
      { title: "४. कैवल्य पाद (३४ सूत्र)", desc: "सिद्धियों के ५ हेतु, चित्त का स्वरूप, धर्ममेघ समाधि, गुणों की कृतार्थता, कैवल्य", slug: "kaivalya-pada" }
    ],
    rishis: ["महर्षि पतंजलि (सूत्रकार)", "वेदव्यास (भाष्यकार)", "वाचस्पति मिश्र (तत्ववैशारदी)"],
    devatas: ["ईश्वर (क्लेशकर्मविपाकाशयैरपरामृष्टः पुरुषविशेषः)"],
    articles: [
      { id: "chitta-vritti-nirodha", title: "योगश्चित्तवृत्तिनिरोधः — योग का वास्तविक अर्थ", desc: "प्रमाण, विपर्यय, विकल्प, निद्रा और स्मृति — पाँच वृत्तियों का शांत होना ही योग है।", slug: "chitta-vritti" },
      { id: "ashtanga-sadhana", title: "अष्टांग योग के आठ अंगों की वैज्ञानिक व्याख्या", desc: "यम-नियम से लेकर समाधि तक अंतःकरण शुद्धि की क्रमबद्ध यात्रा।", slug: "ashtanga-sadhana" }
    ],
    relatedGranthas: [
      { name: "सांख्यकारिका", type: "दर्शन", author: "ईश्वरकृष्ण", slug: "samkhya-karika" },
      { name: "व्यास भाष्य (योग)", type: "भाष्य", author: "महर्षि वेदव्यास", slug: "vyasa-bhashya" }
    ],
    relatedSubjects: [
      { name: "सांख्य दर्शन", slug: "samkhya", desc: "२५ तत्व, त्रिगुण" },
      { name: "वेदांत दर्शन", slug: "vedanta", desc: "ब्रह्मसूत्र, अद्वैत" }
    ]
  },

  "darshana/samkhya": {
    categorySlug: "darshana",
    subjectSlug: "samkhya",
    name: "सांख्य दर्शन",
    enName: "Samkhya Darshana",
    eyebrow: "षड्दर्शन • महर्षि कपिल",
    intro: "सांख्य दर्शन भारतीय दर्शन का सर्वाधिक प्राचीन दार्शनिक तंत्र है। महर्षि कपिल द्वारा प्रवर्तित इस दर्शन में २५ तत्वों, प्रकृति-पुरुष के द्वैत, त्रिगुण सिद्धांत तथा सत्कार्यवाद के माध्यम से त्रिविध दुःखों की आत्यंतिक निवृत्ति का मार्ग दिखाया गया है।",
    quickInfo: {
      type: "आस्तिक दर्शन (षड्दर्शन)",
      author: "महर्षि कपिल (मूल), ईश्वरकृष्ण (सांख्यकारिका)",
      rootText: "सांख्यसूत्र / सांख्यकारिका (७२ कारिकाएँ)",
      coreTheory: "सत्कार्यवाद (कारण में कार्य की विद्यमानता)",
      elements: "२५ तत्व (प्रकृति, महत्तत्व, अहंकार, मन, ५ ज्ञानेंद्रिय, ५ कर्मेंद्रिय, ५ तन्मात्रा, ५ महाभूत + पुरुष)",
      gunas: "सत्त्व (प्रकाश), रजस् (गति), तमस् (जड़ता)"
    },
    navTabs: ["Overview", "Structure", "25 Tattvas", "Triguna Theory", "Articles", "Related Granthas"],
    overviewText: "सांख्य के अनुसार दुःख तीन प्रकार के हैं: आध्यात्मिक, आधिभौतिक और आधिदैविक। जब पुरुष (चेतन आत्मा) स्वयं को प्रकृति (जड़ त्रिगुणात्मक जगत) से पृथक जान लेता है, तब अज्ञान का नाश होकर कैवल्य प्राप्त होता है।",
    structureCards: [
      { num: "२५", title: "तत्व", desc: "प्रकृति (१), विकृति (१६), प्रकृति-विकृति (७), न प्रकृति न विकृति = पुरुष (१)" },
      { num: "३", title: "गुण", desc: "सत्त्व, रजस्, तमस् का साम्यावस्था ही प्रकृति है" },
      { num: "३", title: "प्रमाण", desc: "प्रत्यक्ष, अनुमान और आप्तवचन (शब्द)" }
    ],
    availableTexts: [
      { title: "कारिका १-४: त्रिविध दुःख व प्रमाण विचार", desc: "दुःखत्रयाभिघाताज्जिज्ञासा — प्रत्यक्ष, अनुमान व आप्तवचन प्रमाण", slug: "karika-1-4" },
      { title: "कारिका ९: सत्कार्यवाद", desc: "असदकरणादुपादानग्रहणात् — कार्य उत्पत्ति से पूर्व कारण में सत् रूप में रहता है", slug: "karika-9" },
      { title: "कारिका ११-१६: त्रिगुण स्वरूप व प्रकृति सिद्धि", desc: "सत्त्वं लघु प्रकाशकमिष्टं — त्रिगुणों का स्वरूप व परस्पर क्रिया", slug: "karika-11-16" },
      { title: "कारिका १७-१९: पुरुष बहुत्व व स्वरूप", desc: "संघातपरार्थत्वात् — पुरुष चेतन, साक्षी, दृष्टा, अकर्ता और नित्य है", slug: "karika-17-19" },
      { title: "कारिका २२: तत्वों का विकासक्रम", desc: "प्रकृतेर्महान् ततोऽहङ्कारः — प्रकृति से महत्तत्व, अहंकार व २५ तत्वों का प्राकट्य", slug: "karika-22" },
      { title: "कारिका ५९-६८: कैवल्य सिद्धि", desc: "रंगस्य दर्शयित्वा निवर्तते नर्तकी यथा — नर्तकी की भाँति प्रकृति का निवृत्त होना व कैवल्य", slug: "karika-59-68" }
    ],
    rishis: ["महर्षि कपिल", "आसुरि", "पंचशिख", "ईश्वरकृष्ण (कारिकाकार)", "वाचस्पति मिश्र"],
    devatas: ["पुरुष (शुद्ध चैतन्य)"],
    articles: [
      { id: "satkaryavada", title: "सत्कार्यवाद — सांख्य का सृष्टि सिद्धांत", desc: "तिल में तेल की भाँति कारण में कार्य पूर्व से ही विद्यमान रहता है।", slug: "satkaryavada" }
    ],
    relatedGranthas: [
      { name: "पातंजल योगसूत्र", type: "दर्शन", author: "महर्षि पतंजलि", slug: "yoga" },
      { name: "सांख्यप्रवचन भाष्य", type: "भाष्य", author: "विज्ञानभिक्षु", slug: "samkhya-pravachana" }
    ],
    relatedSubjects: [
      { name: "योग दर्शन", slug: "yoga", desc: "अष्टांग योग" },
      { name: "न्याय दर्शन", slug: "nyaya", desc: "१६ पदार्थ" }
    ]
  },

  "darshana/nyaya": {
    categorySlug: "darshana",
    subjectSlug: "nyaya",
    name: "न्याय दर्शन",
    enName: "Nyaya Darshana",
    eyebrow: "षड्दर्शन • महर्षि अक्षपाद गौतम",
    intro: "न्याय दर्शन भारतीय तर्कशास्त्र एवं ज्ञानमीमांसा (Epistemology) का आधार ग्रंथ है। महर्षि अक्षपाद गौतम प्रणीत न्यायसूत्र में १६ पदार्थों के तत्वज्ञान द्वारा निःश्रेयस (मोक्ष) की प्राप्ति का विधान है।",
    quickInfo: {
      type: "आस्तिक दर्शन (तर्कविद्या)",
      author: "महर्षि अक्षपाद गौतम",
      rootText: "न्यायसूत्र (५ अध्याय)",
      pramanas: "४ प्रमाण (प्रत्यक्ष, अनुमान, उपमान, शब्द)",
      padarthas: "१६ पदार्थ (प्रमाण, प्रमेय, संशय, प्रयोजन, दृष्टांत, सिद्धांत, अवयव, तर्क, निर्णय, वाद, जल्प, वितंडा, हेत्वाभास, छल, जाति, निग्रहस्थान)",
      syllogism: "पञ्चावयव अनुमान (प्रतिज्ञा, हेतु, उदाहरण, उपनय, निगमन)"
    },
    navTabs: ["Overview", "Structure", "16 Padarthas", "5 Syllogisms", "Articles", "Related Granthas"],
    overviewText: "न्याय दर्शन का ५-अवयवी अनुमान वैश्विक तर्कशास्त्र की सर्वश्रेष्ठ उपलब्धि है: १. प्रतिज्ञा (पर्वत अग्निमान् है), २. हेतु (धूम होने से), ३. उदाहरण (जहाँ धूम है वहाँ अग्नि है, जैसे रसोईघर), ४. उपनय (पर्वत पर धूम है), ५. निगमन (अतः पर्वत अग्निमान् है)।",
    structureCards: [
      { num: "१६", title: "पदार्थ", desc: "प्रमाण से लेकर निग्रहस्थान तक १६ तत्व" },
      { num: "४", title: "प्रमाण", desc: "प्रत्यक्ष, अनुमान, उपमान और शब्द प्रमाण" },
      { num: "५", title: "अध्याय", desc: "प्रमाण, प्रमेय व वाद परीक्षा" }
    ],
    availableTexts: [
      { title: "अध्याय १: १६ पदार्थों का लक्षण", desc: "प्रमाणप्रमेयसंशय... — १६ पदार्थों के ज्ञान से निःश्रेयस (मोक्ष) की प्राप्ति", slug: "nyaya-ch-1" },
      { title: "अध्याय २: प्रमाण परीक्षा", desc: "संशय, प्रत्यक्ष, अनुमान, उपमान व शब्द प्रमाण की प्रामाणिकता की रक्षा", slug: "nyaya-ch-2" },
      { title: "अध्याय ३: प्रमेय परीक्षा (आत्मा, शरीर, इंद्रिय)", desc: "आत्मा का नित्यत्व, पुनर्जन्म, मन का अणुत्व", slug: "nyaya-ch-3" },
      { title: "अध्याय ४: दोष, प्रेत्यभाव व फल परीक्षा", desc: "राग-द्वेष-मोह का विनाश, अपवर्ग (मोक्ष) का स्वरूप", slug: "nyaya-ch-4" },
      { title: "अध्याय ५: जाति व निग्रहस्थान", desc: "शास्त्रार्थ में असत् उत्तर (जाति) व पराजय के २२ बिंदु (निग्रहस्थान)", slug: "nyaya-ch-5" }
    ],
    rishis: ["महर्षि अक्षपाद गौतम", "वात्स्यायन (भाष्यकार)", "उद्योतकर", "गंगेश उपाध्याय (नवद्वीप नव्य-न्याय)"],
    devatas: ["परमेश्वर (न्याय मत में जगत्कर्ता व न्यायकारी)"],
    articles: [
      { id: "pancha-avayava", title: "न्याय का पञ्चावयव अनुमान सिद्धांत", desc: "प्रतिज्ञा से निगमन तक भारतीय तर्कशास्त्र की वैज्ञानिक प्रक्रिया।", slug: "pancha-avayava" }
    ],
    relatedGranthas: [
      { name: "वैशेषिक सूत्र", type: "दर्शन", author: "महर्षि कणाद", slug: "vaisheshika" },
      { name: "न्यायभाष्य", type: "भाष्य", author: "वात्स्यायन", slug: "nyaya-bhashya" }
    ],
    relatedSubjects: [
      { name: "वैशेषिक दर्शन", slug: "vaisheshika", desc: "परमाणुवाद, ७ पदार्थ" },
      { name: "योग दर्शन", slug: "yoga", desc: "चित्तवृत्ति निरोध" }
    ]
  },

  "darshana/vedanta": {
    categorySlug: "darshana",
    subjectSlug: "vedanta",
    name: "वेदांत दर्शन (उत्तर मीमांसा)",
    enName: "Vedanta Darshana",
    eyebrow: "षड्दर्शन • महर्षि बादरायण व्यास",
    intro: "वेदांत दर्शन सनातन दर्शन का मुकुटमणि है। महर्षि बादरायण व्यास प्रणीत ब्रह्मसूत्र उपनिषदों के समस्त दार्शनिक सत्यों का तार्किक समन्वय करता है। आदि शंकराचार्य, रामानुजाचार्य, मध्वाचार्य आदि आचार्यों ने इस पर अमर भाष्य रचे हैं।",
    quickInfo: {
      type: "आस्तिक दर्शन (प्रस्थानत्रयी का न्याय प्रस्थान)",
      author: "महर्षि बादरायण वेदव्यास",
      rootText: "ब्रह्मसूत्र (४ अध्याय, ५५५ सूत्र)",
      prasthanatrayi: "उपनिषद (श्रुति), भगवद्गीता (स्मृति), ब्रह्मसूत्र (न्याय)",
      traditions: "अद्वैत (शंकराचार्य), विशिष्टाद्वैत (रामानुज), द्वैत (मध्व), शुद्धाद्वैत (वल्लभ), अचिन्त्यभेदाभेद (चैतन्य)",
      firstSutra: "अथातो ब्रह्मजिज्ञासा (१.१.१)"
    },
    navTabs: ["Overview", "Structure", "4 Adhyayas", "Vedanta Traditions", "Articles", "Related Granthas"],
    overviewText: "ब्रह्मसूत्र के चार अध्याय हैं: १. समन्वय अध्याय (समस्त उपनिषदों का समन्वय ब्रह्म में है), २. अविरोध अध्याय (अन्य दर्शनों के आक्षेपों का निराकरण), ३. साधन अध्याय (ज्ञान, उपासना व वैराग्य साधन), ४. फल अध्याय (मुक्ति, अर्चिरादि मार्ग व ब्रह्मलोक)।",
    structureCards: [
      { num: "४", title: "अध्याय", desc: "समन्वय, अविरोध, साधन, फल अध्याय" },
      { num: "५५५", title: "ब्रह्मसूत्र", desc: "गहन तार्किक सूत्र" },
      { num: "५", title: "प्रमुख संप्रदाय", desc: "अद्वैत से लेकर अचिन्त्यभेदाभेद तक" }
    ],
    availableTexts: [
      { title: "अध्याय १: समन्वय अध्याय", desc: "अथातो ब्रह्मजिज्ञासा (१.१.१), जन्माद्यस्य यतः (१.१.२), शास्त्रयोनित्वात् (१.१.३), तत्तु समन्वयात् (१.१.४) — चतुःसूत्री", mantraId: "brahma-sutra-1-1-1", slug: "samanvaya-adhyaya" },
      { title: "अध्याय २: अविरोध अध्याय", desc: "सांख्य, वैशेषिक, बौद्ध, जैन आदि मतों का खंडन और ब्रह्म-कारणता का पोषण", slug: "avirodha-adhyaya" },
      { title: "अध्याय ३: साधन अध्याय", desc: "जीव का आवागमन, पंचाग्नि विद्या, विद्या भेद, निर्गुण ब्रह्म उपासना व आत्मज्ञान साधन", slug: "sadhana-adhyaya" },
      { title: "अध्याय ४: फल अध्याय", desc: "पाप-पुण्य का क्षय, उत्क्रांति (मृत्यु काल), अर्चिरादि मार्ग, विदेहमुक्ति", slug: "phala-adhyaya" }
    ],
    rishis: ["महर्षि बादरायण व्यास", "आदि शंकराचार्य (शारीरिक भाष्य)", "रामानुजाचार्य (श्रीभाष्य)", "मध्वाचार्य", "वल्लभाचार्य"],
    devatas: ["सच्चिदानंद परब्रह्म"],
    articles: [
      { id: "brahma-jijnasa", title: "अथातो ब्रह्मजिज्ञासा — ब्रह्मसूत्र प्रथम सूत्र", desc: "सांसारिक दुःखों और कर्मों की अनित्यता को देखकर परब्रह्म को जानने की उत्कट जिज्ञासा।", slug: "brahma-jijnasa" },
      { id: "vivartavada", title: "विवर्तवाद बनाम परिणामवाद", desc: "रस्सी में सर्प की प्रतीति की भाँति निर्गुण ब्रह्म में जगत् का आभास।", slug: "vivartavada" }
    ],
    relatedGranthas: [
      { name: "उपनिषद संग्रह", type: "श्रुति", author: "ऋषि परंपरा", slug: "upanishad" },
      { name: "श्रीमद्भगवद्गीता", type: "इतिहास", author: "महर्षि वेदव्यास", slug: "bhagavad-gita" }
    ],
    relatedSubjects: [
      { name: "योग दर्शन", slug: "yoga", desc: "चित्तवृत्ति निरोध" },
      { name: "सांख्य दर्शन", slug: "samkhya", desc: "२५ तत्व" }
    ]
  },

  "darshana/vaisheshika": {
    categorySlug: "darshana",
    subjectSlug: "vaisheshika",
    name: "वैशेषिक दर्शन",
    enName: "Vaisheshika Darshana",
    eyebrow: "षड्दर्शन • महर्षि कणाद",
    intro: "वैशेषिक दर्शन महर्षि कणाद (उलूक) द्वारा प्रणीत परमाणुवादी भौतिक विज्ञान एवं तत्वमीमांसा है। इसमें ७ पदार्थों (द्रव्य, गुण, कर्म, सामान्य, विशेष, समवाय, अभाव) के द्वारा सृष्टि रचना का निरूपण है।",
    quickInfo: {
      type: "आस्तिक दर्शन (पदार्थशास्त्र)",
      author: "महर्षि कणाद (काश्यप)",
      rootText: "वैशेषिक सूत्र (१० अध्याय)",
      pramanas: "२ प्रमाण (प्रत्यक्ष, अनुमान)",
      padarthas: "७ पदार्थ (द्रव्य, गुण, कर्म, सामान्य, विशेष, समवाय, अभाव)",
      atomicTheory: "परमाणुवाद (पृथ्वी, जल, तेज, वायु के नित्य परमाणु)"
    },
    navTabs: ["Overview", "Structure", "7 Padarthas", "Atomic Theory", "Articles", "Related Granthas"],
    overviewText: "वैशेषिक दर्शन के अनुसार संपूर्ण दृश्य जगत अविभाज्य नित्य परमाणुओं से निर्मित है। दो परमाणुओं के संयोग से द्व्यणुक और तीन द्व्यणुकों से त्र्यणुक (दृश्यमान कण) बनता है। जीवों के संचित अदृष्ट (कर्म) के प्रभाव से परमाणुओं में स्पंदन होता है।",
    structureCards: [
      { num: "७", title: "पदार्थ", desc: "द्रव्य, गुण, कर्म, सामान्य, विशेष, समवाय, अभाव" },
      { num: "९", title: "द्रव्य", desc: "पृथ्वी, जल, तेज, वायु, आकाश, काल, दिक्, आत्मा, मन" },
      { num: "२४", title: "गुण", desc: "रूप, रस, गंध, स्पर्श, संख्या, परिमाण आदि" }
    ],
    availableTexts: [
      { title: "अध्याय १: पदार्थ व सामान्य-विशेष लक्षण", desc: "धर्मविशेषप्रसूताद् द्रव्यगुणकर्मसामान्यविशेषसमवायानां पदार्थानां साधर्म्यवैधर्म्याभ्यां तत्वज्ञानान्निःश्रेयसम्", slug: "ch-1" },
      { title: "अध्याय २: द्रव्य परीक्षा (वायु व काल लक्षण)", desc: "रूपरसगन्धस्पर्शवती पृथिवी — पंचभूत, काल व दिशा की सिद्धि", slug: "ch-2" },
      { title: "अध्याय ३: आत्मा व मन की सिद्धि", desc: "प्राणापाननिमेषोन्मेषजीवनमनोगतीन्द्रियान्तरविकाराः — आत्मा के नित्यत्व के लिंग", slug: "ch-3" },
      { title: "अध्याय ४: परमाणु विचार व नित्य-अनित्य भेद", desc: "सदकारणवन्नित्यम् — जो सत् है और अकारण है वह नित्य (परमाणु) है", slug: "ch-4" }
    ],
    rishis: ["महर्षि कणाद", "प्रशस्तपाद (पदार्थधर्मसंग्रह)"],
    devatas: ["परमेश्वर (अदृष्ट संचालक)"],
    articles: [
      { id: "paramanuvada", title: "कणाद का परमाणुवाद — प्राचीन भारतीय भौतिक विज्ञान", desc: "द्व्यणुक और त्र्यणुक की संरचना तथा पिलुपाक-पिठरपाक प्रक्रिया।", slug: "paramanuvada" }
    ],
    relatedGranthas: [
      { name: "न्यायसूत्र", type: "दर्शन", author: "महर्षि अक्षपाद गौतम", slug: "nyaya" }
    ],
    relatedSubjects: [
      { name: "न्याय दर्शन", slug: "nyaya", desc: "१६ पदार्थ" },
      { name: "सांख्य दर्शन", slug: "samkhya", desc: "२५ तत्व" }
    ]
  },

  "darshana/mimamsa": {
    categorySlug: "darshana",
    subjectSlug: "mimamsa",
    name: "मीमांसा दर्शन (पूर्व मीमांसा)",
    enName: "Mimamsa Darshana",
    eyebrow: "षड्दर्शन • महर्षि जैमिनि",
    intro: "पूर्व मीमांसा महर्षि जैमिनि द्वारा प्रणीत वैदिक कर्मकांड, धर्म-जिज्ञासा एवं वाक्य-व्याख्या (Hermeneutics) का परम प्रामाणिक ग्रंथ है। यह वेदों के अपौरुषेयत्व और स्वतःप्रामाण्य का उद्घोषक है।",
    quickInfo: {
      type: "आस्तिक दर्शन (धर्ममीमांसा)",
      author: "महर्षि जैमिनि",
      rootText: "मीमांसा सूत्र (१२ अध्याय, २७०० सूत्र)",
      pramanas: "६ प्रमाण (भाट्ट) / ५ प्रमाण (प्रभाकर)",
      centralConcept: "अपूर्व (कर्म और फल को जोड़ने वाली अदृष्ट शक्ति)",
      firstSutra: "अथातो धर्मजिज्ञासा (१.१.१)"
    },
    navTabs: ["Overview", "Structure", "12 Adhyayas", "Apurva Theory", "Articles", "Related Granthas"],
    overviewText: "मीमांसा के अनुसार धर्म की परिभाषा है: 'चोदनालक्षणोऽर्थो धर्मः' — वेद के विधि वाक्यों द्वारा प्रेरित कल्याणकारी कर्म ही धर्म है। वेदों की प्रत्येक ऋचा किसी न किसी विधि, मंत्र, नामधेय, निषेध अथवा अर्थवाद से जुड़ी है।",
    structureCards: [
      { num: "१२", title: "अध्याय", desc: "विशालतम सूत्र ग्रंथ" },
      { num: "६", title: "प्रमाण (भाट्ट)", desc: "प्रत्यक्ष, अनुमान, उपमान, शब्द, अर्थापत्ति, अनुपलब्धि" },
      { num: "५", title: "वेद विभाग", desc: "विधि, मंत्र, नामधेय, निषेध, अर्थवाद" }
    ],
    availableTexts: [
      { title: "अध्याय १: तर्कपाद — धर्म लक्षण व अपौरुषेयत्व", desc: "अथातो धर्मजिज्ञासा (१.१.१) — शब्द-अर्थ का नित्य संबंध व वेद स्वतःप्रामाण्य", slug: "ch-1" },
      { title: "अध्याय २: कर्म भेद निरूपण", desc: "शब्दान्तराभ्याससंख्यागुणप्रक्रियानामधेयैः — कर्मों के भेदक प्रमाण", slug: "ch-2" },
      { title: "अध्याय ३: शेष-शेषी भाव (अंग-अंगी विचार)", desc: "श्रुति, लिंग, वाक्य, प्रकरण, स्थान, समाख्या — ६ विनियोजक प्रमाण", slug: "ch-3" },
      { title: "अध्याय ४: प्रयोजक-प्रयोज्य विचार", desc: "यज्ञीय द्रव्यों का उपयोग और मुख्य-गौण कर्म विचार", slug: "ch-4" }
    ],
    rishis: ["महर्षि जैमिनि", "शबर स्वामी (भाष्यकार)", "कुमारिल भट्ट (वार्तिककार)", "प्रभाकर मिश्र"],
    devatas: ["यज्ञ पुरुष", "वैदिक देवता"],
    articles: [
      { id: "apurva-siddhanta", title: "अपूर्व सिद्धांत — कर्म और फल का अदृष्ट सेतु", desc: "नष्ट हुए कर्म और भविष्य के फल (स्वर्ग/कल्याण) के मध्य अपूर्व शक्ति का कार्य।", slug: "apurva-siddhanta" }
    ],
    relatedGranthas: [
      { name: "वेदांत दर्शन (ब्रह्मसूत्र)", type: "दर्शन", author: "महर्षि बादरायण", slug: "vedanta" }
    ],
    relatedSubjects: [
      { name: "वेदांत दर्शन", slug: "vedanta", desc: "ब्रह्मजिज्ञासा" },
      { name: "न्याय दर्शन", slug: "nyaya", desc: "तर्कविद्या" }
    ]
  }
};
