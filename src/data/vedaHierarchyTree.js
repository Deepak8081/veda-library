// Master Veda Hierarchical Tree Data Model
// Full Vedic Taxonomy:
// Root (4 Vedas) -> Branches / Recensions (Shakhas) -> Texts (Samhitas, Brahmanas, Aranyakas, Upanishads, Sutras) -> Chapters / Suktas -> Mantras

export const VEDA_HIERARCHY_TREE = {
  id: "root",
  name: "वेद",
  enName: "Veda",
  children: [
    // ========================================================
    // 1. RIGVEDA (ऋग्वेद)
    // ========================================================
    {
      id: "rigveda",
      slug: "rigveda",
      name: "ऋग्वेद",
      enName: "Rigveda",
      desc: "ऋचाओं और सूक्तों का प्राचीनतम वैदिक संग्रह। स्तुति, ज्ञान, विज्ञान और आध्यात्मिक चेतना का मूल स्रोत।",
      stats: "१० मण्डल • १०२८ सूक्त • १०,५५२ मंत्र",
      priest: "होतृ (Hotri)",
      badge: "प्रधान श्रुति",
      imageKey: "card-rigveda.jpg",
      children: [
        {
          id: "shakala-shakha",
          name: "शाकल शाखा (Shakala Shakha)",
          enName: "Shakala Shakha",
          desc: "ऋग्वेद की वर्तमान में उपलब्ध मुख्य एवं प्रामाणिक शाखा।",
          stats: "१० मण्डल • १०२८ सूक्त",
          priest: "होतृ (Hotri)",
          badge: "शाखा",
          imageKey: "card-shakala-shakha.jpg",
          children: [
            {
              id: "rigveda-samhita",
              name: "क. ऋग्वेद संहिता (मूल मंत्र भाग)",
              enName: "Rigveda Samhita",
              desc: "१० मण्डल, १०२८ सूक्त, १०,५५२ ऋचाएँ — अग्नि सूक्त, पुरुष सूक्त, नासदीय सूक्त, गायत्री मंत्र।",
              stats: "१० मण्डल • १०२८ सूक्त • १०५५२ ऋचाएँ",
              badge: "संहिता ग्रंथ",
              imageKey: "card-samhita.jpg",
              children: [
                {
                  id: "rv-sukta-1",
                  name: "१. अग्नि सूक्त (मण्डल १, सूक्त १)",
                  enName: "Agni Sukta (Mandala 1, Sukta 1)",
                  desc: "ऋग्वेद का प्रथम सूक्त — ऋषि मधुच्छन्दा वैश्वामित्र कृत ९ ऋचाओं में अग्निदेव की महत्ता।",
                  stats: "९ मंत्र • गायत्री छंद",
                  badge: "सूक्त",
                  imageKey: "card-sukta-agni.jpg",
                  children: [
                    {
                      id: "rv-1-1-1",
                      name: "मंत्र १.१.१: ॐ अग्निमीळे पुरोहितं...",
                      enName: "Mantra 1.1.1 (Agnimile Purohitam)",
                      desc: "यज्ञ के पुरोहित, प्रकाशमान देव, ऋत्विक और रत्नों के धारक अग्निदेव की स्तुति।",
                      stats: "ऋषि: मधुच्छन्दा • छंद: गायत्री",
                      badge: "वेदमंत्र",
                      mantraId: "rv-1-1-1",
                      imageKey: "card-sukta-agni.jpg"
                    },
                    {
                      id: "rv-1-1-2",
                      name: "मंत्र १.१.२: अग्निः पूर्वेभिरृषिभिः...",
                      enName: "Mantra 1.1.2 (Agnih Purvebhir)",
                      desc: "पुरातन और नवीन दोनों ऋषियों द्वारा पूजित अग्निदेव का आह्वान।",
                      stats: "ऋषि: मधुच्छन्दा • छंद: गायत्री",
                      badge: "वेदमंत्र",
                      mantraId: "rv-1-1-2",
                      imageKey: "card-sukta-agni.jpg"
                    },
                    {
                      id: "rv-1-1-3",
                      name: "मंत्र १.१.३: अग्निना रयिमश्नवत्...",
                      enName: "Mantra 1.1.3 (Agnina Rayim)",
                      desc: "अग्नि के माध्यम से प्रतिदिन अक्षय यश और वीर संतान की प्राप्ति।",
                      stats: "ऋषि: मधुच्छन्दा • छंद: गायत्री",
                      badge: "वेदमंत्र",
                      mantraId: "rv-1-1-3",
                      imageKey: "card-sukta-agni.jpg"
                    }
                  ]
                },
                {
                  id: "rv-sukta-gayatri",
                  name: "२. गायत्री महामंत्र (मण्डल ३, सूक्त ६२)",
                  enName: "Gayatri Mantra (Mandala 3, Sukta 62)",
                  desc: "वेदमाता गायत्री — सविता देव के परम तेज का ध्यान एवं सद्बुद्धि की प्रार्थना।",
                  stats: "मंत्र १० • २४ अक्षर",
                  badge: "महामंत्र",
                  mantraId: "rv-3-62-10",
                  imageKey: "card-sukta-gayatri.jpg"
                },
                {
                  id: "rv-sukta-purusha",
                  name: "३. पुरुष सूक्त (मण्डल १०, सूक्त ९०)",
                  enName: "Purusha Sukta (Mandala 10, Sukta 90)",
                  desc: "ब्रह्माण्ड के विराट् पुरुष का स्वरूप और सृष्टि उत्पत्ति का वैदिक विज्ञान।",
                  stats: "१६ ऋचाएँ • अनुष्टुप् छंद",
                  badge: "सूक्त",
                  mantraId: "rv-10-90-1",
                  imageKey: "card-sukta-purusha.jpg"
                },
                {
                  id: "rv-sukta-nasadiya",
                  name: "४. नासदीय सूक्त (मण्डल १०, सूक्त १२९)",
                  enName: "Nasadiya Sukta (Creation Hymn)",
                  desc: "सृष्टि के पूर्व क्या था? विश्व का सर्वाधिक प्राचीन एवं गूढ़ दार्शनिक सूक्त।",
                  stats: "७ ऋचाएँ • त्रिष्टुप् छंद",
                  badge: "दार्शनिक सूक्त",
                  mantraId: "rv-10-129-1",
                  imageKey: "card-sukta-nasadiya.jpg"
                },
                {
                  id: "rv-sukta-sangathan",
                  name: "५. संगठन सूक्त (मण्डल १०, सूक्त १९१)",
                  enName: "Sangathan Sukta (Unity Hymn)",
                  desc: "'सं गच्छध्वं सं वदध्वं' — सामूहिक एकता, सद्भाव और विश्व बंधुत्व का संदेश।",
                  stats: "४ ऋचाएँ • अनुष्टुप् छंद",
                  badge: "सूक्त",
                  mantraId: "rv-10-191-2",
                  imageKey: "card-sukta-samgathan.jpg"
                }
              ]
            },
            {
              id: "rigveda-brahmana",
              name: "ख. ब्राह्मण ग्रंथ (ऐतरेय, कौषीतकि/शांखायन)",
              enName: "Rigveda Brahmana Texts",
              desc: "यज्ञ-विधान, कर्मकाण्ड एवं वैदिक आख्यानों का विस्तृत निरूपण।",
              stats: "२ ब्राह्मण ग्रंथ",
              badge: "ब्राह्मण ग्रंथ",
              imageKey: "card-brahmana.jpg",
              children: [
                {
                  id: "aitareya-brahmana",
                  name: "i. ऐतरेय ब्राह्मण",
                  enName: "Aitareya Brahmana",
                  desc: "महीदास ऐतरेय कृत — ४० अध्याय (८ पंचिका), सोमयाग व राज्याभिषेक विधान।",
                  stats: "४० अध्याय (८ पंचिका)",
                  badge: "ब्राह्मण",
                  imageKey: "card-grantha-aitareya.jpg"
                },
                {
                  id: "kaushitaki-brahmana",
                  name: "ii. कौषीतकि (शांखायन) ब्राह्मण",
                  enName: "Kaushitaki (Shankhayana) Brahmana",
                  desc: "३० अध्याय — हविर्यज्ञ, सोमयाग एवं ऋत्विजों के आचार-नियम।",
                  stats: "३० अध्याय",
                  badge: "ब्राह्मण",
                  imageKey: "card-brahmana.jpg"
                }
              ]
            },
            {
              id: "rigveda-aranyaka",
              name: "ग. आरण्यक ग्रंथ (ऐतरेय, कौषीतकि)",
              enName: "Rigveda Aranyaka Texts",
              desc: "अरण्य (वन) में चिंतन योग्य दार्शनिक एवं प्राण-विद्या परक ग्रंथ।",
              stats: "२ आरण्यक ग्रंथ",
              badge: "आरण्यक",
              imageKey: "card-aranyaka.jpg",
              children: [
                {
                  id: "aitareya-aranyaka",
                  name: "i. ऐतरेय आरण्यक",
                  enName: "Aitareya Aranyaka",
                  desc: "५ आरण्यक — महाव्रत, उक्थ एवं प्राण विद्या का तात्विक चिंतन।",
                  stats: "५ आरण्यक",
                  badge: "आरण्यक",
                  imageKey: "card-grantha-aitareya.jpg"
                },
                {
                  id: "kaushitaki-aranyaka",
                  name: "ii. कौषीतकि आरण्यक",
                  enName: "Kaushitaki Aranyaka",
                  desc: "१५ अध्याय — प्राणोपासना एवं अंतरग्निहोत्र का विधान।",
                  stats: "१५ अध्याय",
                  badge: "आरण्यक",
                  imageKey: "card-aranyaka.jpg"
                }
              ]
            },
            {
              id: "rigveda-upanishad",
              name: "घ. उपनिषद ग्रंथ (ऐतरेय, कौषीतकि)",
              enName: "Rigveda Upanishad Texts",
              desc: "परम आत्मतत्व एवं ब्रह्मविद्या का अमृतमय उपदेश।",
              stats: "२ मुख्य उपनिषद",
              badge: "उपनिषद",
              imageKey: "card-upanishad.jpg",
              children: [
                {
                  id: "aitareya-upanishad",
                  name: "i. ऐतरेय उपनिषद",
                  enName: "Aitareya Upanishad",
                  desc: "ऋग्वेद का प्रधान उपनिषद — महावाक्य 'प्रज्ञानं ब्रह्म' (चेतना ही ब्रह्म है)।",
                  stats: "३ अध्याय • 'प्रज्ञानं ब्रह्म'",
                  badge: "मुख्य उपनिषद",
                  imageKey: "card-grantha-aitareya.jpg"
                },
                {
                  id: "kaushitaki-upanishad",
                  name: "ii. कौषीतकि उपनिषद",
                  enName: "Kaushitaki Upanishad",
                  desc: "४ अध्याय — देवयान व पितृयान मार्ग, प्राणो ब्रह्म एवं प्रतर्दन विद्या।",
                  stats: "४ अध्याय",
                  badge: "उपनिषद",
                  imageKey: "card-upanishad.jpg"
                }
              ]
            },
            {
              id: "rigveda-kalpa-sutra",
              name: "ङ. ऋग्वेद के कल्प, सूत्र व प्रातिशाख्य ग्रंथ",
              enName: "Rigveda Kalpa, Sutras & Pratishakhya",
              desc: "श्रौत, गृह्य सूत्र एवं वर्णोच्चारण नियम।",
              stats: "सूत्र एवं प्रातिशाख्य",
              badge: "सूत्र ग्रंथ",
              imageKey: "card-kalpa.jpg",
              children: [
                {
                  id: "ashvalayana-shrauta",
                  name: "i. आश्वलायन व शांखायन श्रौतसूत्र",
                  enName: "Ashvalayana & Shankhayana Shrautasutra",
                  desc: "होतृ ऋत्विक द्वारा संपन्न किए जाने वाले श्रौत यागों का विधान।",
                  stats: "श्रौतसूत्र",
                  badge: "कल्पसूत्र",
                  imageKey: "card-shrautasutra.jpg"
                },
                {
                  id: "ashvalayana-grihya",
                  name: "ii. आश्वलायन व पारस्कर गृह्यसूत्र",
                  enName: "Ashvalayana & Paraskara Grihyasutra",
                  desc: "दैनिक पंचमहायज्ञ एवं १६ गृह्य संस्कारों का शास्त्रीय क्रम।",
                  stats: "गृह्यसूत्र",
                  badge: "कल्पसूत्र",
                  imageKey: "card-grihyasutra.jpg"
                },
                {
                  id: "rigveda-pratishakhya",
                  name: "iii. ऋग्वेद प्रातिशाख्य (उच्चारण नियम)",
                  enName: "Rigveda Pratishakhya",
                  desc: "महर्षि शौनक कृत — शुद्ध वर्णोच्चारण, स्वर प्रक्रिया एवं संधि नियम।",
                  stats: "उच्चारण शास्त्र",
                  badge: "प्रातिशाख्य",
                  imageKey: "card-pratishakhya.jpg"
                }
              ]
            }
          ]
        }
      ]
    },

    // ========================================================
    // 2. YAJURVEDA (यजुर्वेद)
    // ========================================================
    {
      id: "yajurveda",
      slug: "yajurveda",
      name: "यजुर्वेद",
      enName: "Yajurveda",
      desc: "यज्ञ, कर्म एवं अनुष्ठानिक क्रियाओं का वेद। शुक्ल और कृष्ण शाखा परंपरा में विभक्त।",
      stats: "४० अध्याय • १९७५ मंत्र",
      priest: "अध्वर्यु (Adhvaryu)",
      badge: "कर्मकाण्ड एवं ज्ञान",
      imageKey: "card-yajurveda.jpg",
      children: [
        // ----------------------------------------------------
        // A. SHUKLA YAJURVEDA
        // ----------------------------------------------------
        {
          id: "shukla-yajurveda",
          name: "A. शुक्ल यजुर्वेद (Shukla Yajurveda)",
          enName: "Shukla Yajurveda",
          desc: "वाजसनेयि परंपरा — याज्ञवल्क्य ऋषि द्वारा संकलित विशुद्ध मंत्र भाग।",
          stats: "माध्यन्दिना, काण्व व सूत्र",
          priest: "अध्वर्यु (Adhvaryu)",
          badge: "मुख्य परंपरा",
          imageKey: "card-yajurveda.jpg",
          children: [
            {
              id: "madhyandina-shakha",
              name: "1. माध्यन्दिना शाखा (Madhyandina)",
              enName: "Madhyandina Shakha",
              desc: "उत्तर व मध्य भारत में सर्वाधिक प्रचलित वाजसनेयि शाखा।",
              stats: "४० अध्याय • १९७५ मंत्र",
              badge: "शाखा",
              imageKey: "card-madhyandina-shakha.jpg",
              children: [
                {
                  id: "madhyandina-samhita",
                  name: "क. माध्यन्दिना संहिता (वाजसनेयि संहिता)",
                  enName: "Madhyandina Samhita (Vajasaneyi)",
                  desc: "४० अध्याय, १९७५ मंत्र — रुद्राध्याय (अध्याय १६), शिवसंकल्प (अध्याय ३४), ईशावास्य (अध्याय ४०)।",
                  stats: "४० अध्याय • १९७५ मंत्र",
                  badge: "संहिता",
                  imageKey: "card-samhita.jpg",
                  children: [
                    {
                      id: "vs-adhyaya-1",
                      name: "१. अध्याय १: दर्शपूर्णमास याग (इषे त्वोर्जे त्वा...)",
                      enName: "Adhyaya 1: Darshapurnamasa Yagya",
                      desc: "यजुर्वेद का प्रथम अध्याय — पवित्र पलाश शाखा छेदन एवं हवि निर्माण।",
                      stats: "३१ मंत्र",
                      badge: "अध्याय",
                      mantraId: "vs-1-1",
                      imageKey: "card-samhita.jpg"
                    },
                    {
                      id: "vs-adhyaya-16",
                      name: "२. अध्याय १६: रुद्राध्याय / शतरुद्रिय (नमस्ते रुद्र मन्यव...)",
                      enName: "Adhyaya 16: Sri Rudram / Shatarudriya",
                      desc: "भगवान रुद्र के १००+ पावन नामों एवं विश्वरूप की स्तुति (रुद्राभिषेक का मूल आधार)।",
                      stats: "६६ मंत्र • नमकम-चमकम",
                      badge: "रुद्राध्याय",
                      mantraId: "vs-16-1",
                      imageKey: "card-sukta-rudra.jpg"
                    },
                    {
                      id: "vs-adhyaya-34",
                      name: "३. अध्याय ३४: शिवसंकल्प सूक्त (तन्मे मनः शिवसंकल्पमस्तु)",
                      enName: "Adhyaya 34: Shiva Sankalpa Sukta",
                      desc: "मन की पवित्रता, उदात्त संकल्प एवं मानसिक एकाग्रता का महासूक्त।",
                      stats: "६ मंत्र",
                      badge: "सूक्त",
                      mantraId: "vs-34-1",
                      imageKey: "card-sukta-mrityunjaya.jpg"
                    },
                    {
                      id: "vs-adhyaya-40",
                      name: "४. अध्याय ४०: ईशावास्योपनिषद (ईशा वास्यमिदं सर्वं...)",
                      enName: "Adhyaya 40: Isha Upanishad",
                      desc: "यजुर्वेद का अंतिम अध्याय — कर्मयोग, त्याग और आत्मज्ञान का मूल आधार।",
                      stats: "१८ मंत्र",
                      badge: "उपनिषद",
                      mantraId: "vs-40-1",
                      imageKey: "card-grantha-isha.jpg"
                    }
                  ]
                },
                {
                  id: "madhyandina-shatapatha",
                  name: "ख. शतपथ ब्राह्मण (माध्यन्दिना पाठ)",
                  enName: "Shatapatha Brahmana (Madhyandina)",
                  desc: "१४ काण्ड, १०० प्रपाठक, ४३८ ब्राह्मण — वैदिक वांग्मय का सबसे विशाल ब्राह्मण ग्रंथ।",
                  stats: "१४ काण्ड • १०० प्रपाठक",
                  badge: "ब्राह्मण",
                  imageKey: "card-grantha-shatapatha.jpg"
                },
                {
                  id: "madhyandina-upanishad",
                  name: "ग. उपनिषद (ईशावास्योपनिषद और बृहदारण्यकोपनिषद)",
                  enName: "Upanishads (Isha & Brihadaranyaka)",
                  desc: "ईशावास्योपनिषद् और बृहदारण्यकोपनिषद् ('अहं ब्रह्मास्मि')।",
                  stats: "ईश व बृहदारण्यक",
                  badge: "उपनिषद",
                  imageKey: "card-grantha-brihadaranyaka.jpg"
                }
              ]
            },
            {
              id: "kanva-shakha",
              name: "2. काण्व शाखा (Kanva)",
              enName: "Kanva Shakha",
              desc: "दक्षिण व पूर्व भारत में प्रचलित वाजसनेयि शाखा।",
              stats: "४० अध्याय • २०८६ मंत्र",
              badge: "शाखा",
              imageKey: "card-kanva-shakha.jpg",
              children: [
                {
                  id: "kanva-samhita",
                  name: "क. काण्व संहिता",
                  enName: "Kanva Samhita",
                  desc: "४० अध्याय, ३२८ अनुवाक, २०८६ मंत्र — काण्व पाठ परंपरा।",
                  stats: "४० अध्याय • २०८६ मंत्र",
                  badge: "संहिता",
                  imageKey: "card-samhita.jpg"
                },
                {
                  id: "kanva-shatapatha",
                  name: "ख. शतपथ ब्राह्मण (काण्व पाठ)",
                  enName: "Shatapatha Brahmana (Kanva)",
                  desc: "१७ काण्ड, १०४ प्रपाठक — काण्व पाठ का शतपथ ब्राह्मण।",
                  stats: "१७ काण्ड • १०४ प्रपाठक",
                  badge: "ब्राह्मण",
                  imageKey: "card-grantha-shatapatha.jpg"
                },
                {
                  id: "kanva-upanishad",
                  name: "ग. उपनिषद (काण्व मत का ईश और बृहदारण्यक)",
                  enName: "Upanishad Texts (Kanva Tradition)",
                  desc: "काण्व ईशावास्योपनिषद् एवं काण्व बृहदारण्यकोपनिषद्।",
                  stats: "काण्व उपनिषद",
                  badge: "उपनिषद",
                  imageKey: "card-grantha-brihadaranyaka.jpg"
                }
              ]
            },
            {
              id: "shukla-kalpa-sutras",
              name: "3. शुक्ल यजुर्वेद के कल्प व सूत्र ग्रंथ (पारस्कर गृह्यसूत्र, कात्यायन श्रौतसूत्र आदि)",
              enName: "Shukla Yajurveda Kalpa & Sutras",
              desc: "पारस्कर गृह्यसूत्र, कात्यायन श्रौतसूत्र, कात्यायन शुल्बसूत्र एवं शुक्ल यजुः प्रातिशाख्य।",
              stats: "पारस्कर, कात्यायन आदि सूत्र",
              badge: "सूत्र ग्रंथ",
              imageKey: "card-shrautasutra.jpg"
            }
          ]
        },

        // ----------------------------------------------------
        // B. KRISHNA YAJURVEDA
        // ----------------------------------------------------
        {
          id: "krishna-yajurveda",
          name: "B. कृष्ण यजुर्वेद (Krishna Yajurveda)",
          enName: "Krishna Yajurveda",
          desc: "चरक परंपरा — मंत्र और ब्राह्मण भाग का संयुक्त संकलन। तैत्तिरीय, मैत्रायणी, कठ एवं कपिष्ठल शाखाएँ।",
          stats: "४ मुख्य शाखाएँ",
          priest: "अध्वर्यु (Adhvaryu)",
          badge: "मुख्य परंपरा",
          imageKey: "card-yajurveda.jpg",
          children: [
            {
              id: "taittiriya-shakha",
              name: "1. तैत्तिरीय शाखा (Taittiriya)",
              enName: "Taittiriya Shakha",
              desc: "दक्षिण भारत में सर्वाधिक अध्ययन की जाने वाली कृष्ण यजुर्वेद की शाखा।",
              stats: "७ काण्ड • ४४ प्रपाठक",
              badge: "शाखा",
              imageKey: "card-taittiriya-shakha.jpg",
              children: [
                {
                  id: "taittiriya-samhita",
                  name: "क. तैत्तिरीय संहिता",
                  enName: "Taittiriya Samhita",
                  desc: "७ काण्ड, ४४ प्रपाठक, ६५१ अनुवाक, २१९८ कंडिकाएँ — दर्शपूर्णमास, सोमयाग, अग्निचयन।",
                  stats: "७ काण्ड • ४४ प्रपाठक",
                  badge: "संहिता",
                  imageKey: "card-samhita.jpg",
                  children: [
                    {
                      id: "ts-kanda-1",
                      name: "१. काण्ड १: दर्शपूर्णमास व सोमयाग (इषे त्वोर्जे त्वा...)",
                      enName: "Kanda 1: Darshapurnamasa & Soma Yagya",
                      desc: "पवित्र काष्ठ छेदन, हवि निर्माण एवं सोमयाग के यजुर्मंत्र।",
                      stats: "८ प्रपाठक",
                      badge: "काण्ड",
                      mantraId: "ts-1-1-1",
                      imageKey: "card-samhita.jpg"
                    },
                    {
                      id: "ts-kanda-4",
                      name: "२. काण्ड ४: अग्निचयन एवं श्रीरुद्रम्",
                      enName: "Kanda 4: Agnichayana & Sri Rudram",
                      desc: "वेदिका निर्माण, श्येनचिति एवं तैत्तिरीय पाठ का चमकम-नमकम।",
                      stats: "७ प्रपाठक",
                      badge: "काण्ड",
                      imageKey: "card-sukta-rudra.jpg"
                    }
                  ]
                },
                {
                  id: "taittiriya-brahmana",
                  name: "ख. तैत्तिरीय ब्राह्मण",
                  enName: "Taittiriya Brahmana",
                  desc: "३ काण्ड — नक्षत्रेष्टि, सौत्रामणी, पुरुषमेध एवं अश्वमेध यागों का विशद वर्णन।",
                  stats: "३ काण्ड • २८ प्रपाठक",
                  badge: "ब्राह्मण",
                  imageKey: "card-brahmana.jpg"
                },
                {
                  id: "taittiriya-aranyaka",
                  name: "ग. तैत्तिरीय आरण्यक",
                  enName: "Taittiriya Aranyaka",
                  desc: "१० प्रपाठक — आरुणेतुक चयन, ब्रह्मयज्ञ एवं पितृमेध। ७-९वाँ प्रपाठक तैत्तिरीय उपनिषद है।",
                  stats: "१० प्रपाठक",
                  badge: "आरण्यक",
                  imageKey: "card-aranyaka.jpg"
                },
                {
                  id: "taittiriya-upanishad-group",
                  name: "घ. उपनिषद (तैत्तिरीय, महानारायण, श्वेताश्वतर)",
                  enName: "Taittiriya Upanishad Texts",
                  desc: "शिक्षावल्ली, ब्रह्मानन्दवल्ली, भृगुवल्ली ('सत्यं वद धर्मं चर') एवं महानारायणोपनिषद।",
                  stats: "३ प्रमुख उपनिषद",
                  badge: "उपनिषद",
                  imageKey: "card-upanishad.jpg"
                }
              ]
            },
            {
              id: "maitrayani-shakha",
              name: "2. मैत्रायणी शाखा (Maitrayani Samhita)",
              enName: "Maitrayani Shakha",
              desc: "४ काण्ड, ५४ प्रपाठक — गुजरात व महाराष्ट्र में सुरक्षित प्राचीन शाखा।",
              stats: "४ काण्ड • ५४ प्रपाठक",
              badge: "शाखा",
              imageKey: "card-samhita.jpg"
            },
            {
              id: "katha-shakha",
              name: "3. कठ / काठक शाखा (Kathaka Samhita & कठोपनिषद)",
              enName: "Katha (Kathaka) Shakha",
              desc: "काठक संहिता (५ खंड, ४० स्थानक) एवं विश्वप्रसिद्ध कठोपनिषद (यम-नचिकेता संवाद)।",
              stats: "काठक संहिता व कठोपनिषद",
              badge: "शाखा",
              imageKey: "card-grantha-katha.jpg"
            },
            {
              id: "kapisthala-shakha",
              name: "4. कपिष्ठल शाखा (Kapisthala Samhita)",
              enName: "Kapisthala Shakha",
              desc: "८ अष्टक — कपिष्ठल कठ संहिता (खंडित उपलब्ध अंश)।",
              stats: "८ अष्टक (अपूर्ण)",
              badge: "शाखा",
              imageKey: "card-samhita.jpg"
            },
            {
              id: "krishna-kalpa-sutras",
              name: "5. कृष्ण यजुर्वेद के सूत्र ग्रंथ (आपस्तम्ब, बौधायन, मानव कल्पसूत्र)",
              enName: "Krishna Yajurveda Sutra Texts",
              desc: "बौधायन, आपस्तम्ब, सत्याषाढ़ (हिरण्यकेशी), वैखानस, भारद्वाज, मानव, वाराह कल्पसूत्र।",
              stats: "श्रौत, गृह्य, धर्म व शुल्बसूत्र",
              badge: "सूत्र ग्रंथ",
              imageKey: "card-kalpa.jpg"
            }
          ]
        }
      ]
    },

    // ========================================================
    // 3. SAMAVEDA (सामवेद)
    // ========================================================
    {
      id: "samaveda",
      slug: "samaveda",
      name: "सामवेद",
      enName: "Samaveda",
      desc: "गायकी, संगीतमय ऋचाओं एवं सामगान का दिव्य वेद। भगवान श्रीकृष्ण ने गीता में कहा: 'वेदानां सामवेदोऽस्मि'।",
      stats: "१८७५ मंत्र • कौथुम, राणायनीय, जैमिनीय",
      priest: "उद्गातृ (Udgatri)",
      badge: "संगीत एवं उपासना",
      imageKey: "card-samaveda.jpg",
      children: [
        {
          id: "kauthuma-shakha",
          name: "A. कौथुम शाखा (Kauthuma)",
          enName: "Kauthuma Shakha",
          desc: "गुजरात, उत्तर भारत एवं बंगाल में सर्वाधिक प्रचलित सामवेद की शाखा।",
          stats: "पूर्वार्चिक व उत्तरार्चिक",
          badge: "शाखा",
          imageKey: "card-kauthuma-shakha.jpg",
          children: [
            {
              id: "kauthuma-samhita",
              name: "क. कौथुम सामवेद संहिता",
              enName: "Kauthuma Samaveda Samhita",
              desc: "पूर्वार्चिक (६ प्रपाठक, ६५० ऋचाएँ) और उत्तरार्चिक (९ प्रपाठक, १२२५ ऋचाएँ)।",
              stats: "१८७५ मंत्र",
              badge: "संहिता",
              imageKey: "card-samhita.jpg",
              children: [
                {
                  id: "sv-purvarchika-1",
                  name: "१. पूर्वार्चिक: आग्नेय पर्व (अग्न आ याहि वीतये...)",
                  enName: "Purvarchika: Agneya Parva",
                  desc: "सामवेद का प्रथम मंगलाचरण मंत्र — उद्गाता द्वारा अग्निदेव का संगीतमय आवाहन।",
                  stats: "प्रपाठक १ • मंत्र १.१",
                  badge: "पर्व",
                  mantraId: "sv-1-1-1",
                  imageKey: "card-sukta-agni.jpg"
                },
                {
                  id: "sv-purvarchika-2",
                  name: "२. पूर्वार्चिक: ऐन्द्र पर्व (त्वमग्ने यज्ञानां...)",
                  enName: "Purvarchika: Aindra Parva",
                  desc: "इन्द्र व अग्नि स्तुति सामगान — दिव्य तेज एवं सामर्थ्य का सामगान।",
                  stats: "प्रपाठक १ • मंत्र १.२",
                  badge: "पर्व",
                  mantraId: "sv-1-1-2",
                  imageKey: "card-sukta-agni.jpg"
                },
                {
                  id: "sv-uttararchika-1",
                  name: "३. उत्तरार्चिक: पवमान काण्ड (उच्चा ते जातमन्धसो...)",
                  enName: "Uttararchika: Pavamana Kanda",
                  desc: "पवमान सोम का दिव्य सामगान — आत्मिक आनंद एवं अमृतत्व का गान।",
                  stats: "प्रपाठक २ • मंत्र २.१",
                  badge: "पर्व",
                  mantraId: "sv-2-1-1",
                  imageKey: "card-sukta-soma.jpg"
                }
              ]
            },
            {
              id: "kauthuma-brahmanas",
              name: "ख. कौथुम ब्राह्मण ग्रंथ (ताण्ड्य, षड्विंश, सामविधान आदि ८ ब्राह्मण)",
              enName: "Kauthuma Brahmana Texts (8 Brahmanas)",
              desc: "ताण्ड्य (पंचविंश/महाब्राह्मण), षड्विंश, सामविधान, आर्षेय, देवताध्याय, उपनिषद्, संहितोपनिषद्, वंश ब्राह्मण।",
              stats: "८ ब्राह्मण ग्रंथ",
              badge: "ब्राह्मण",
              imageKey: "card-brahmana.jpg"
            },
            {
              id: "kauthuma-upanishad",
              name: "ग. उपनिषद (छान्दोग्य उपनिषद)",
              enName: "Chandogya Upanishad",
              desc: "सामवेद का सबसे विशाल उपनिषद — महावाक्य 'तत्त्वमसि' (वह तुम ही हो), उद्गीथ उपासना एवं शांडिल्य विद्या।",
              stats: "८ प्रपाठक • 'तत्त्वमसि'",
              badge: "मुख्य उपनिषद",
              imageKey: "card-grantha-chandogya.jpg"
            }
          ]
        },
        {
          id: "ranayaniya-shakha",
          name: "B. राणायनीय शाखा (Ranayaniya)",
          enName: "Ranayaniya Shakha",
          desc: "महाराष्ट्र, कर्नाटक एवं उड़ीसा में प्रचलित सामवेद की शाखा।",
          stats: "द्राConnection व गान परंपरा",
          badge: "शाखा",
          imageKey: "card-samaveda.jpg"
        },
        {
          id: "jaiminiya-shakha",
          name: "C. जैमिनीय / तवलकार शाखा (Jaiminiya)",
          enName: "Jaiminiya Shakha",
          desc: "तमिलनाडु व केरल में सुरक्षित शाखा — जैमिनीय संहिता, ब्राह्मण, आरण्यक एवं केनोपनिषद।",
          stats: "संहिता, ब्राह्मण, आरण्यक, केनोपनिषद",
          badge: "शाखा",
          imageKey: "card-jaiminiya-shakha.jpg",
          children: [
            {
              id: "kena-upanishad",
              name: "i. केनोपनिषद (तवलकार उपनिषद)",
              enName: "Kena Upanishad",
              desc: "'केनेषितं पतति प्रेषितं मनः' — यक्ष उपाख्यान, मन और प्राण का प्रेरक परम ब्रह्म।",
              stats: "४ खंड",
              badge: "उपनिषद",
              imageKey: "card-upanishad.jpg"
            }
          ]
        },
        {
          id: "samaveda-sutras",
          name: "D. सामवेद के सूत्र व गान ग्रंथ (ग्रामगेय गान, अरण्यगेय गान, गोभिल गृह्यसूत्र)",
          enName: "Samaveda Sutras & Gana Texts",
          desc: "लाट्यायन, द्राह्यायण श्रौतसूत्र, गोभिल, खादिर गृह्यसूत्र, पुष्पसूत्र एवं साम प्रातिशाख्य।",
          stats: "गान व सूत्र ग्रंथ",
          badge: "सूत्र व गान",
          imageKey: "card-chhanda.jpg"
        }
      ]
    },

    // ========================================================
    // 4. ATHARVAVEDA (अथर्ववेद)
    // ========================================================
    {
      id: "atharvaveda",
      slug: "atharvaveda",
      name: "अथर्ववेद",
      enName: "Atharvaveda",
      desc: "ब्रह्मवेद — आयुर्वेद, भैषज्य, शांति-पौष्टिक कर्म, राष्ट्र-रक्षा, गणित, वास्तु एवं गूढ़ अध्यात्म का संग्रह।",
      stats: "२० काण्ड • ७३० सूक्त • ५,९७७ मंत्र",
      priest: "ब्रह्मा (Brahma)",
      badge: "ब्रह्मवेद एवं विज्ञान",
      imageKey: "card-atharvaveda.jpg",
      children: [
        {
          id: "shaunaka-shakha",
          name: "A. शौनक शाखा (Shaunaka)",
          enName: "Shaunaka Shakha",
          desc: "अथर्ववेद की वर्तमान में पूर्णतः उपलब्ध एवं सर्वाधिक प्रचलित शाखा।",
          stats: "२० काण्ड • ७३० सूक्त • ५९७७ मंत्र",
          badge: "शाखा",
          imageKey: "card-shaunaka-shakha.jpg",
          children: [
            {
              id: "shaunaka-samhita",
              name: "क. शौनक अथर्ववेद संहिता",
              enName: "Shaunaka Atharvaveda Samhita",
              desc: "२० काण्ड, ७३० सूक्त, ५९७७ मंत्र — पृथ्वी सूक्त (काण्ड १२), काल सूक्त (काण्ड १९), स्कम्भ सूक्त (काण्ड १०)।",
              stats: "२० काण्ड • ७३० सूक्त",
              badge: "संहिता",
              imageKey: "card-samhita.jpg",
              children: [
                {
                  id: "av-kanda-1",
                  name: "१. काण्ड १: मेधाजनन / त्रिसप्त सूक्त (ये त्रिषप्ताः परियन्ति...)",
                  enName: "Kanda 1: Medhajanana / Trisapta Sukta",
                  desc: "अथर्ववेद का प्रथम सूक्त — वाणी के स्वामी से बुद्धि, बल और मेधा की प्रार्थना।",
                  stats: "४ मंत्र",
                  badge: "सूक्त",
                  mantraId: "av-1-1-1",
                  imageKey: "card-sukta-vak.jpg"
                },
                {
                  id: "av-prithvi-sukta",
                  name: "२. काण्ड १२: भूमि सूक्त / पृथ्वी सूक्त (माता भूमिः पुत्रोऽहं पृथिव्याः)",
                  enName: "Kanda 12: Bhumi Sukta (Earth Anthem)",
                  desc: "विश्व का प्रथम पर्यावरण एवं राष्ट्रगीत — 'धरती मेरी माता है और मैं इसका पुत्र हूँ'।",
                  stats: "६३ ऋचाएँ",
                  badge: "सूक्त",
                  mantraId: "av-12-1-12",
                  imageKey: "card-sukta-prithvi.jpg"
                },
                {
                  id: "av-shanti-sukta",
                  name: "३. काण्ड १९: विश्व शांति सूक्त (द्यौः शान्तिरन्तरिक्षं शान्तिः...)",
                  enName: "Kanda 19: Vishva Shanti Sukta",
                  desc: "समस्त ब्रह्माण्ड, प्रकृति और मानव जाति में वैश्विक शांति की प्रार्थना।",
                  stats: "१४ मंत्र",
                  badge: "सूक्त",
                  mantraId: "av-19-9-14",
                  imageKey: "card-sukta-shanti.jpg"
                }
              ]
            },
            {
              id: "shaunaka-sutras",
              name: "ख. प्रातिशाख्य व कल्पसूत्र (वैतान श्रौतसूत्र, कौशिक गृह्यसूत्र)",
              enName: "Shaunaka Sutras & Pratishakhya",
              desc: "वैतान श्रौतसूत्र (ब्रह्मा ऋत्विक के कार्य), कौशिक गृह्यसूत्र (भैषज्य, शांति, पौष्टिक विधान) एवं अथर्व प्रातिशाख्य।",
              stats: "वैतान व कौशिक सूत्र",
              badge: "सूत्र ग्रंथ",
              imageKey: "card-shrautasutra.jpg"
            }
          ]
        },
        {
          id: "paippalada-shakha",
          name: "B. पिप्पलाद शाखा (Paippalada)",
          enName: "Paippalada Shakha",
          desc: "उड़ीसा, झारखंड एवं कश्मीर में सुरक्षित दुर्लभ शाखा (२० काण्ड)।",
          stats: "२० काण्ड • पिप्पलाद संहिता",
          badge: "शाखा",
          imageKey: "card-paippalada-shakha.jpg"
        },
        {
          id: "atharvaveda-general-literature",
          name: "C. अथर्ववेद वांग्मय का सामान्य वर्गीकरण",
          enName: "Atharvaveda General Literature",
          desc: "गोपथ ब्राह्मण, मुण्डक, माण्डूक्य, प्रश्नोपनिषद एवं कल्पसूत्र।",
          stats: "ब्राह्मण, उपनिषद एवं सूत्र",
          badge: "वांग्मय",
          imageKey: "card-atharvaveda.jpg",
          children: [
            {
              id: "gopatha-brahmana",
              name: "ख. ब्राह्मण ग्रंथ (केवल एक: गोपथ ब्राह्मण / Gopatha Brahmana)",
              enName: "Gopatha Brahmana",
              desc: "पूर्व गोपथ (५ प्रपाठक) एवं उत्तर गोपथ (६ प्रपाठक) — ब्रह्मा ऋत्विक के कर्त्तव्य एवं ओंकार महिमा।",
              stats: "११ प्रपाठक (पूर्व व उत्तर)",
              badge: "ब्राह्मण",
              imageKey: "card-brahmana.jpg"
            },
            {
              id: "atharvaveda-aranyaka-note",
              name: "ग. आरण्यक ग्रंथ (अथर्ववेद का कोई स्वतंत्र आरण्यक उपलब्ध नहीं है)",
              enName: "Atharvaveda Aranyaka Note",
              desc: "प्रामाणिक वैदिक परंपरा के अनुसार अथर्ववेद का कोई स्वतंत्र आरण्यक नहीं है; इसका दार्शनिक भाग सीधे उपनिषदों में निहित है।",
              stats: "उपनिषदों में समाहित",
              badge: "विशेष संदर्भ",
              imageKey: "card-aranyaka.jpg"
            },
            {
              id: "atharvaveda-upanishads",
              name: "घ. उपनिषद ग्रंथ (मुण्डकोपनिषद, माण्डूक्य उपनिषद, प्रश्नोपनिषद)",
              enName: "Atharvaveda Major Upanishads",
              desc: "मुण्डकोपनिषद ('सत्यमेव जयते'), माण्डूक्य उपनिषद ('अयमात्मा ब्रह्म') एवं प्रश्नोपनिषद (६ आध्यात्मिक प्रश्न)।",
              stats: "३ प्रधान उपनिषद",
              badge: "मुख्य उपनिषद",
              imageKey: "card-upanishad.jpg",
              children: [
                {
                  id: "mundaka-upanishad",
                  name: "i. मुण्डकोपनिषद",
                  enName: "Mundaka Upanishad",
                  desc: "'सत्यमेव जयते नानृतम्' — परा व अपरा विद्या, जीवात्मा-परमात्मा का दो पक्षी रूपक।",
                  stats: "३ मुण्डक • ६४ मंत्र",
                  badge: "उपनिषद",
                  imageKey: "card-grantha-mundaka.jpg"
                },
                {
                  id: "mandukya-upanishad",
                  name: "ii. माण्डूक्य उपनिषद",
                  enName: "Mandukya Upanishad",
                  desc: "'अयमात्मा ब्रह्म' — ॐकार एवं चेतना की चार अवस्थाएँ (जाग्रत, स्वप्न, सुषुप्ति, तुरीय)।",
                  stats: "१२ मंत्र • चेतना की ४ अवस्थाएँ",
                  badge: "उपनिषद",
                  imageKey: "card-grantha-mandukya.jpg"
                },
                {
                  id: "prashna-upanishad",
                  name: "iii. प्रश्नोपनिषद",
                  enName: "Prashna Upanishad",
                  desc: "महर्षि पिप्पलाद और ६ ऋषियों के ६ गूढ़ आध्यात्मिक प्रश्न व समाधान।",
                  stats: "६ प्रश्न व उत्तर",
                  badge: "उपनिषद",
                  imageKey: "card-upanishad.jpg"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Helper function to resolve tree path
export function getNodeByPath(pathIds = []) {
  if (!pathIds || pathIds.length === 0) return VEDA_HIERARCHY_TREE;
  let current = VEDA_HIERARCHY_TREE;
  for (const id of pathIds) {
    if (!current.children) return null;
    const found = current.children.find((c) => c.id === id || c.slug === id);
    if (!found) return null;
    current = found;
  }
  return current;
}

// Helper function to recursively find any node by ID or slug with ancestors
export function findNodeById(id, current = VEDA_HIERARCHY_TREE, ancestors = []) {
  if (!id) return null;
  if (current.id === id || current.slug === id || current.mantraId === id) {
    return { node: current, ancestors };
  }
  if (current.children) {
    for (const child of current.children) {
      const res = findNodeById(id, child, [...ancestors, current]);
      if (res) return res;
    }
  }
  return null;
}
