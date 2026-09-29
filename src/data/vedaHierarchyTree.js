// Master Veda Hierarchical Tree Data Model
// Exact Client-Provided & Vedic Heritage Portal (vedicheritage.gov.in) Hierarchy:
// Root (4 Vedas) -> Branches/Shakhas -> Literature/Texts -> Sub-texts/Upanishads

export const VEDA_HIERARCHY_TREE = {
  id: "root",
  name: "वेद",
  enName: "Veda",
  children: [
    {
      id: "rigveda",
      slug: "rigveda",
      name: "ऋग्वेद",
      enName: "Rigveda",
      desc: "ऋचाओं और सूक्तों का प्रमुख वैदिक संग्रह। संबंधित मंत्रों, ऋषियों, देवताओं और छंदों को explore करें।",
      stats: "१० मण्डल • १०२८ सूक्त • १०,५५२ मंत्र",
      priest: "होतृ (Hotri)",
      imageKey: "card-rigveda.jpg",
      children: [
        {
          id: "shakala-shakha",
          name: "शाकल शाखा (Shakala Shakha)",
          enName: "Shakala Shakha",
          desc: "ऋग्वेद की वर्तमान में उपलब्ध मुख्य एवं प्रामाणिक शाखा।",
          stats: "१० मण्डल • १०२८ सूक्त",
          priest: "होतृ (Hotri)",
          imageKey: "card-rigveda.jpg",
          children: [
            {
              id: "rigveda-samhita",
              name: "क. ऋग्वेद संहिता (मूल मंत्र भाग)",
              enName: "Rigveda Samhita",
              desc: "१० मण्डल, १०२८ सूक्त, १०,५५२ ऋचाएँ — अग्नि सूक्त, पुरुष सूक्त, नासदीय सूक्त, गायत्री मंत्र।",
              stats: "१० मण्डल • १०२८ सूक्त • १०५५२ ऋचाएँ",
              imageKey: "card-rigveda.jpg"
            },
            {
              id: "rigveda-brahmana",
              name: "ख. ब्राह्मण ग्रंथ (ऐतरेय, कौषीतकि/शांखायन)",
              enName: "Rigveda Brahmana Texts",
              desc: "यज्ञ-विधान, कर्मकाण्ड एवं वैदिक आख्यानों का विस्तृत निरूपण।",
              stats: "२ ब्राह्मण ग्रंथ",
              imageKey: "card-rigveda.jpg",
              children: [
                {
                  id: "aitareya-brahmana",
                  name: "i. ऐतरेय ब्राह्मण",
                  enName: "Aitareya Brahmana",
                  desc: "महीदास ऐतरेय कृत — ४० अध्याय (८ पंचिका), सोमयाग व राज्याभिषेक विधान।",
                  stats: "४० अध्याय (८ पंचिका)",
                  imageKey: "card-rigveda.jpg"
                },
                {
                  id: "kaushitaki-brahmana",
                  name: "ii. कौषीतकि (शांखायन) ब्राह्मण",
                  enName: "Kaushitaki (Shankhayana) Brahmana",
                  desc: "३० अध्याय — हविर्यज्ञ, सोमयाग एवं ऋत्विजों के आचार-नियम।",
                  stats: "३० अध्याय",
                  imageKey: "card-rigveda.jpg"
                }
              ]
            },
            {
              id: "rigveda-aranyaka",
              name: "ग. आरण्यक ग्रंथ (ऐतरेय, कौषीतकि)",
              enName: "Rigveda Aranyaka Texts",
              desc: "अरण्य (वन) में चिंतन योग्य दार्शनिक एवं प्राण-विद्या परक ग्रंथ।",
              stats: "२ आरण्यक ग्रंथ",
              imageKey: "card-rigveda.jpg",
              children: [
                {
                  id: "aitareya-aranyaka",
                  name: "i. ऐतरेय आरण्यक",
                  enName: "Aitareya Aranyaka",
                  desc: "५ आरण्यक — महाव्रत, उक्थ एवं प्राण विद्या का तात्विक चिंतन।",
                  stats: "५ आरण्यक",
                  imageKey: "card-rigveda.jpg"
                },
                {
                  id: "kaushitaki-aranyaka",
                  name: "ii. कौषीतकि आरण्यक",
                  enName: "Kaushitaki Aranyaka",
                  desc: "१५ अध्याय — प्राणोपासना एवं अंतरग्निहोत्र का विधान।",
                  stats: "१५ अध्याय",
                  imageKey: "card-rigveda.jpg"
                }
              ]
            },
            {
              id: "rigveda-upanishad",
              name: "घ. उपनिषद ग्रंथ (ऐतरेय, कौषीतकि)",
              enName: "Rigveda Upanishad Texts",
              desc: "परम आत्मतत्व एवं ब्रह्मविद्या का अमृतमय उपदेश।",
              stats: "२ मुख्य उपनिषद",
              imageKey: "card-rigveda.jpg",
              children: [
                {
                  id: "aitareya-upanishad",
                  name: "i. ऐतरेय उपनिषद",
                  enName: "Aitareya Upanishad",
                  desc: "महावाक्य 'प्रज्ञानं ब्रह्म' (चेतना ही ब्रह्म है) — ३ अध्याय, आत्मविद्या।",
                  stats: "३ अध्याय • 'प्रज्ञानं ब्रह्म'",
                  imageKey: "card-rigveda.jpg"
                },
                {
                  id: "kaushitaki-upanishad",
                  name: "ii. कौषीतकि उपनिषद",
                  enName: "Kaushitaki Upanishad",
                  desc: "४ अध्याय — देवयान व पितृयान मार्ग, प्राणो ब्रह्म एवं प्रतर्दन विद्या।",
                  stats: "४ अध्याय",
                  imageKey: "card-rigveda.jpg"
                }
              ]
            },
            {
              id: "rigveda-kalpa-sutra",
              name: "ङ. ऋग्वेद के कल्प, सूत्र व प्रातिशाख्य ग्रंथ",
              enName: "Rigveda Kalpa, Sutras & Pratishakhya",
              desc: "श्रौत, गृह्य सूत्र एवं वर्णोच्चारण नियम।",
              stats: "सूत्र एवं प्रातिशाख्य",
              imageKey: "card-rigveda.jpg",
              children: [
                {
                  id: "ashvalayana-shrauta",
                  name: "i. आश्वलायन व शांखायन श्रौतसूत्र",
                  enName: "Ashvalayana & Shankhayana Shrautasutra",
                  desc: "होतृ ऋत्विक द्वारा संपन्न किए जाने वाले श्रौत यागों का विधान।",
                  stats: "श्रौतसूत्र",
                  imageKey: "card-rigveda.jpg"
                },
                {
                  id: "ashvalayana-grihya",
                  name: "ii. आश्वलायन व पारस्कर गृह्यसूत्र",
                  enName: "Ashvalayana & Paraskara Grihyasutra",
                  desc: "दैनिक पंचमहायज्ञ एवं १६ गृह्य संस्कारों का शास्त्रीय क्रम।",
                  stats: "गृह्यसूत्र",
                  imageKey: "card-rigveda.jpg"
                },
                {
                  id: "rigveda-pratishakhya",
                  name: "iii. ऋग्वेद प्रातिशाख्य (उच्चारण नियम)",
                  enName: "Rigveda Pratishakhya",
                  desc: "महर्षि शौनक कृत — शुद्ध वर्णोच्चारण, स्वर प्रक्रिया एवं संधि नियम।",
                  stats: "उच्चारण शास्त्र",
                  imageKey: "card-rigveda.jpg"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "yajurveda",
      slug: "yajurveda",
      name: "यजुर्वेद",
      enName: "Yajurveda",
      desc: "यज्ञ एवं वैदिक कर्म से संबंधित मंत्रों और पाठ-परंपराओं का संग्रह। शुक्ल और कृष्ण शाखा परंपरा।",
      stats: "४० अध्याय • १९७५ मंत्र",
      priest: "अध्वर्यु (Adhvaryu)",
      imageKey: "card-yajurveda.jpg",
      children: [
        {
          id: "shukla-yajurveda",
          name: "A. शुक्ल यजुर्वेद (Shukla Yajurveda)",
          enName: "Shukla Yajurveda",
          desc: "वाजसनेयि परंपरा — माध्यन्दिना शाखा, काण्व शाखा, शतपथ ब्राह्मण एवं सूत्र ग्रंथ।",
          stats: "माध्यन्दिना, काण्व व सूत्र",
          priest: "अध्वर्यु (Adhvaryu)",
          imageKey: "card-yajurveda.jpg",
          children: [
            {
              id: "madhyandina-shakha",
              name: "1. माध्यन्दिना शाखा (Madhyandina)",
              enName: "Madhyandina Shakha",
              desc: "उत्तर व मध्य भारत में सर्वाधिक प्रचलित वाजसनेयि शाखा।",
              stats: "४० अध्याय • १९७५ मंत्र",
              imageKey: "card-yajurveda.jpg",
              children: [
                {
                  id: "madhyandina-samhita",
                  name: "क. माध्यन्दिना संहिता (वाजसनेयि संहिता)",
                  enName: "Madhyandina Samhita (Vajasaneyi)",
                  desc: "४० अध्याय, १९७५ मंत्र — रुद्राध्याय (अध्याय १६), शिवसंकल्प (अध्याय ३४), ईशावास्य (अध्याय ४०)।",
                  stats: "४० अध्याय • १९७५ मंत्र",
                  imageKey: "card-yajurveda.jpg"
                },
                {
                  id: "madhyandina-shatapatha",
                  name: "ख. शतपथ ब्राह्मण (माध्यन्दिना पाठ)",
                  enName: "Shatapatha Brahmana (Madhyandina)",
                  desc: "१४ काण्ड, १०० प्रपाठक, ४३८ ब्राह्मण — वैदिक वांग्मय का सबसे विशाल ब्राह्मण।",
                  stats: "१४ काण्ड • १०० प्रपाठक",
                  imageKey: "card-yajurveda.jpg"
                },
                {
                  id: "madhyandina-upanishad",
                  name: "ग. उपनिषद (ईशावास्योपनिषद और बृहदारण्यकोपनिषद)",
                  enName: "Upanishads (Isha & Brihadaranyaka)",
                  desc: "ईशावास्योपनिषद् (४०वाँ अध्याय) और बृहदारण्यकोपनिषद् ('अहं ब्रह्मास्मि')।",
                  stats: "ईश व बृहदारण्यक",
                  imageKey: "card-yajurveda.jpg"
                }
              ]
            },
            {
              id: "kanva-shakha",
              name: "2. काण्व शाखा (Kanva)",
              enName: "Kanva Shakha",
              desc: "दक्षिण व पूर्व भारत में प्रचलित वाजसनेयि शाखा।",
              stats: "४० अध्याय • २०८६ मंत्र",
              imageKey: "card-yajurveda.jpg",
              children: [
                {
                  id: "kanva-samhita",
                  name: "क. काण्व संहिता",
                  enName: "Kanva Samhita",
                  desc: "४० अध्याय, ३२८ अनुवाक, २०८६ मंत्र — काण्व पाठ परंपरा।",
                  stats: "४० अध्याय • २०८६ मंत्र",
                  imageKey: "card-yajurveda.jpg"
                },
                {
                  id: "kanva-shatapatha",
                  name: "ख. शतपथ ब्राह्मण (काण्व पाठ)",
                  enName: "Shatapatha Brahmana (Kanva)",
                  desc: "१७ काण्ड, १०४ प्रपाठक — काण्व पाठ का शतपथ ब्राह्मण।",
                  stats: "१७ काण्ड • १०४ प्रपाठक",
                  imageKey: "card-yajurveda.jpg"
                },
                {
                  id: "kanva-upanishad",
                  name: "ग. उपनिषद (काण्व मत का ईश और बृहदारण्यक)",
                  enName: "Upanishad Texts (Kanva Tradition)",
                  desc: "काण्व ईशावास्योपनिषद् एवं काण्व बृहदारण्यकोपनिषद्।",
                  stats: "काण्व उपनिषद",
                  imageKey: "card-yajurveda.jpg"
                }
              ]
            },
            {
              id: "shukla-kalpa-sutras",
              name: "3. शुक्ल यजुर्वेद के कल्प व सूत्र ग्रंथ (पारस्कर गृह्यसूत्र, कात्यायन श्रौतसूत्र आदि)",
              enName: "Shukla Yajurveda Kalpa & Sutras",
              desc: "पारस्कर गृह्यसूत्र, कात्यायन श्रौतसूत्र, कात्यायन शुल्बसूत्र एवं शुक्ल यजुः प्रातिशाख्य।",
              stats: "पारस्कर, कात्यायन आदि सूत्र",
              imageKey: "card-yajurveda.jpg"
            }
          ]
        },
        {
          id: "krishna-yajurveda",
          name: "B. कृष्ण यजुर्वेद (Krishna Yajurveda)",
          enName: "Krishna Yajurveda",
          desc: "मंत्र एवं ब्राह्मण गद्य मिश्रित परंपरा — तैत्तिरीय, मैत्रायणी, कठ, कपिष्ठल शाखा।",
          stats: "तैत्तिरीय, मैत्रायणी, कठ, कपिष्ठल",
          priest: "अध्वर्यु (Adhvaryu)",
          imageKey: "card-yajurveda.jpg",
          children: [
            {
              id: "taittiriya-shakha",
              name: "1. तैत्तिरीय शाखा (Taittiriya)",
              enName: "Taittiriya Shakha",
              desc: "दक्षिण भारत में सर्वाधिक व्यापक एवं प्रमुख शाखा।",
              stats: "७ काण्ड • श्री रुद्राध्याय",
              imageKey: "card-yajurveda.jpg",
              children: [
                {
                  id: "taittiriya-samhita",
                  name: "क. तैत्तिरीय संहिता",
                  enName: "Taittiriya Samhita",
                  desc: "७ काण्ड, ४४ प्रपाठक, ६५१ अनुवाक — श्री रुद्राध्याय (४.५) एवं चमकम् (४.७)।",
                  stats: "७ काण्ड • ४४ प्रपाठक",
                  imageKey: "card-yajurveda.jpg"
                },
                {
                  id: "taittiriya-brahmana",
                  name: "ख. तैत्तिरीय ब्राह्मण",
                  enName: "Taittiriya Brahmana",
                  desc: "३ काण्ड (अष्टक), २८ प्रपाठक — नचिकेता उपाख्यान, नक्षत्र विद्या।",
                  stats: "३ काण्ड (अष्टक)",
                  imageKey: "card-yajurveda.jpg"
                },
                {
                  id: "taittiriya-aranyaka",
                  name: "ग. तैत्तिरीय आरण्यक",
                  enName: "Taittiriya Aranyaka",
                  desc: "१० प्रपाठक — अरुण प्रपाठक (सूर्य नमस्कार), पञ्चमहायज्ञ।",
                  stats: "१० प्रपाठक",
                  imageKey: "card-yajurveda.jpg"
                },
                {
                  id: "taittiriya-upanishads",
                  name: "घ. उपनिषद (तैत्तिरीय, महानारायण, श्वेताश्वतर)",
                  enName: "Taittiriya & Associated Upanishads",
                  desc: "तैत्तिरीय उपनिषद ('सत्यं वद धर्मं चर'), महानारायण उपनिषद, श्वेताश्वतर उपनिषद।",
                  stats: "३ प्रधान उपनिषद",
                  imageKey: "card-yajurveda.jpg"
                }
              ]
            },
            {
              id: "maitrayani-shakha",
              name: "2. मैत्रायणी शाखा (Maitrayani Samhita)",
              enName: "Maitrayani Shakha",
              desc: "गुजरात व महाराष्ट्र परंपरा की प्राचीन शाखा।",
              stats: "४ काण्ड • मानव सूत्र",
              imageKey: "card-yajurveda.jpg",
              children: [
                {
                  id: "maitrayani-samhita",
                  name: "क. मैत्रायणी संहिता व मानव श्रौतसूत्र",
                  enName: "Maitrayani Samhita & Manava Shrautasutra",
                  desc: "४ काण्ड, ५४ प्रपाठक एवं मानव श्रौत व गृह्यसूत्र।",
                  stats: "४ काण्ड • मानव सूत्र",
                  imageKey: "card-yajurveda.jpg"
                }
              ]
            },
            {
              id: "kathaka-shakha",
              name: "3. कठ / काठक शाखा (Kathaka Samhita & कठोपनिषद)",
              enName: "Kathaka Shakha",
              desc: "कश्मीर व पंजाब परंपरा की शाखा — कठोपनिषद का उद्गम।",
              stats: "५ खण्ड • कठोपनिषद",
              imageKey: "card-yajurveda.jpg",
              children: [
                {
                  id: "kathaka-samhita",
                  name: "क. काठक संहिता",
                  enName: "Kathaka Samhita",
                  desc: "५ खण्ड, ४० स्थानक, ३०२८ मंत्र — काठक परंपरा।",
                  stats: "५ खण्ड • ४० स्थानक",
                  imageKey: "card-yajurveda.jpg"
                },
                {
                  id: "kathopanishad",
                  name: "ख. कठोपनिषद (यम-नचिकेता संवाद)",
                  enName: "Kathopanishad",
                  desc: "यमराज और बालक नचिकेता का संवाद — 'उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत'।",
                  stats: "२ अध्याय • ६ वल्लियाँ",
                  imageKey: "card-yajurveda.jpg"
                }
              ]
            },
            {
              id: "kapisthala-shakha",
              name: "4. कपिष्ठल शाखा (Kapisthala Samhita)",
              enName: "Kapisthala Shakha",
              desc: "कुरु-पांचाल क्षेत्र की प्राचीन व दुर्लभ शाखा।",
              stats: "खंडित संहिता पाठ",
              imageKey: "card-yajurveda.jpg",
              children: [
                {
                  id: "kapisthala-samhita",
                  name: "क. कपिष्ठल कठ संहिता (खंडित अंश)",
                  enName: "Kapisthala Katha Samhita",
                  desc: "३२ अध्याय (उपलब्ध खंडित भाग) — कुरुक्षेत्र परंपरा।",
                  stats: "३२ अध्याय (खंडित)",
                  imageKey: "card-yajurveda.jpg"
                }
              ]
            },
            {
              id: "krishna-sutras",
              name: "5. कृष्ण यजुर्वेद के सूत्र ग्रंथ (आपस्तम्ब, बौधायन, मानव कल्पसूत्र)",
              enName: "Krishna Yajurveda Sutras",
              desc: "आपस्तम्ब, बौधायन, मानव व कात्यायन कल्प/श्रौत/गृह्यसूत्र।",
              stats: "आपस्तम्ब, बौधायन आदि सूत्र",
              imageKey: "card-yajurveda.jpg",
              children: [
                {
                  id: "krishna-kalpa-shrauta-grihya",
                  name: "क. आपस्तम्ब, बौधायन, मानव कल्प/श्रौत/गृह्यसूत्र",
                  enName: "Apastamba, Baudhayana & Manava Sutras",
                  desc: "श्रौत, गृह्य, धर्म एवं शुल्ब सूत्रों की समृद्ध परंपरा — यज्ञवेदिका निर्माण व संस्कार।",
                  stats: "कल्प, श्रौत, गृह्यसूत्र",
                  imageKey: "card-yajurveda.jpg"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "samaveda",
      slug: "samaveda",
      name: "सामवेद",
      enName: "Samaveda",
      desc: "सामगान और वैदिक गायन से संबंधित मंत्र एवं पाठ-परंपरा। आध्यात्मिक माधुर्य का मूल स्रोत।",
      stats: "१८७५ छंद/साम",
      priest: "उद्गातृ (Udgatri)",
      imageKey: "card-samaveda.jpg",
      children: [
        {
          id: "kauthuma-shakha",
          name: "शाखा: कौथुम (Kauthuma)",
          enName: "Kauthuma Shakha",
          desc: "गुजरात, राजस्थान, उत्तर प्रदेश, बिहार व बंगाल में सर्वाधिक प्रचलित शाखा।",
          stats: "पूर्वार्चिक व उत्तरार्चिक",
          imageKey: "card-samaveda.jpg"
        },
        {
          id: "ranayaniya-shakha",
          name: "शाखा: राणायनीय (Ranayaniya)",
          enName: "Ranayaniya Shakha",
          desc: "महाराष्ट्र, कर्नाटक और आंध्र प्रदेश में प्रचलित साम परंपरा।",
          stats: "विशिष्ट स्वरांकन",
          imageKey: "card-samaveda.jpg"
        },
        {
          id: "jaiminiya-shakha",
          name: "शाखा: जैमिनीय (Jaiminiya)",
          enName: "Jaiminiya / Talavakara Shakha",
          desc: "केरल (नम्बूदिरी) व तमिलनाडु में संरक्षित दुर्लभ परंपरा।",
          stats: "केन उपनिषद का मूल स्रोत",
          imageKey: "card-samaveda.jpg"
        },
        {
          id: "samaveda-general",
          name: "सामवेद वांग्मय का सामान्य वर्गीकरण (सभी शाखाओं के लिए)",
          enName: "Samaveda General Literature Classification",
          desc: "संहिता, ८ ब्राह्मण, आरण्यक, उपनिषद एवं कल्प/सूत्र/गान ग्रंथ।",
          stats: "सभी शाखाओं के ग्रंथ",
          imageKey: "card-samaveda.jpg",
          children: [
            {
              id: "samaveda-samhita",
              name: "क. सामवेद संहिता (पूर्वार्चिक और उत्तरार्चिक मंत्र)",
              enName: "Samaveda Samhita",
              desc: "पूर्वार्चिक (५८५ साम) एवं उत्तरार्चिक (१२२५ साम) — कुल १८७५ मंत्र।",
              stats: "१८७५ साम / छंद",
              imageKey: "card-samaveda.jpg"
            },
            {
              id: "samaveda-brahmana",
              name: "ख. ब्राह्मण ग्रंथ (ताण्ड्य, षड्विंश, सामविधान आदि 8 ब्राह्मण)",
              enName: "Samaveda Brahmana Texts (8 Brahmanas)",
              desc: "ताण्ड्य (पञ्चविंश) महाब्राह्मण, षड्विंश, सामविधान, आर्षेय, देवताध्याय, छांदोग्य, संहितोपनिषद, वंश ब्राह्मण।",
              stats: "८ ब्राह्मण ग्रंथ",
              imageKey: "card-samaveda.jpg"
            },
            {
              id: "samaveda-aranyaka",
              name: "ग. आरण्यक ग्रंथ (जैमिनीय / तवलकार आरण्यक)",
              enName: "Samaveda Aranyaka Texts",
              desc: "जैमिनीय (तवलकार) आरण्यक व छांदोग्य आरण्यक।",
              stats: "तवलकार आरण्यक",
              imageKey: "card-samaveda.jpg"
            },
            {
              id: "samaveda-upanishad",
              name: "घ. उपनिषद ग्रंथ (छान्दोग्य उपनिषद और केनोपनिषद)",
              enName: "Samaveda Principal Upanishads",
              desc: "छान्दोग्य उपनिषद ('तत्त्वमसि') एवं केन उपनिषद ('केनेषितं पतति')।",
              stats: "२ मुख्य उपनिषद",
              imageKey: "card-samaveda.jpg",
              children: [
                {
                  id: "chandogya-upanishad",
                  name: "i. छान्दोग्य उपनिषद (सबसे विशाल व महत्वपूर्ण)",
                  enName: "Chandogya Upanishad",
                  desc: "८ प्रपाठक — ॐकार उद्गीथ, शाण्डिल्य विद्या, तत्त्वमसि महावाक्य, सनत्कुमार-नारद संवाद।",
                  stats: "८ प्रपाठक • 'तत्त्वमसि'",
                  imageKey: "card-samaveda.jpg"
                },
                {
                  id: "kena-upanishad",
                  name: "ii. केनोपनिषद (तवलकार उपनिषद)",
                  enName: "Kena Upanishad",
                  desc: "४ खण्ड — 'केनेषितं पतति प्रेषितं मनः', यक्ष उपाख्यान एवं उमा हैमवती संवाद।",
                  stats: "४ खण्ड",
                  imageKey: "card-samaveda.jpg"
                }
              ]
            },
            {
              id: "samaveda-kalpa-sutras",
              name: "ङ. सामवेद के सूत्र व गान ग्रंथ (ग्रामगेय गान, अरण्यगेय गान, गोभिल गृह्यसूत्र)",
              enName: "Samaveda Sutras & Gana Texts",
              desc: "ग्रामगेय गान, अरण्यगेय गान, ऊह गान, ऊह्य गान, लाट्यायन, द्राह्यायण श्रौतसूत्र, गोभिल गृह्यसूत्र, पुष्पसूत्र।",
              stats: "गान, सूत्र एवं पुष्पसूत्र",
              imageKey: "card-samaveda.jpg"
            }
          ]
        }
      ]
    },
    {
      id: "atharvaveda",
      slug: "atharvaveda",
      name: "अथर्ववेद",
      enName: "Atharvaveda",
      desc: "विविध वैदिक मंत्रों और जीवन से संबंधित विषयों की सामग्री का संग्रह। राष्ट्र सूक्त व भैषज्य विद्या।",
      stats: "२० काण्ड • ७३० सूक्त • ५,९७७ मंत्र",
      priest: "ब्रह्मा (Brahma)",
      imageKey: "card-atharvaveda.jpg",
      children: [
        {
          id: "shaunaka-shakha",
          name: "शाखा: शौनक शाखा (Shaunaka)",
          enName: "Shaunaka Shakha",
          desc: "वर्तमान में सर्वाधिक प्रचलित एवं पूर्ण उपलब्ध अथर्ववेद परंपरा।",
          stats: "२० काण्ड • ७३० सूक्त",
          imageKey: "card-atharvaveda.jpg",
          children: [
            {
              id: "shaunaka-samhita",
              name: "क. शौनक अथर्ववेद संहिता",
              enName: "Shaunaka Samhita",
              desc: "२० काण्ड, ७३० सूक्त, ५९७७ मंत्र — पृथ्वी सूक्त (१२.१), भैषज्य सूक्त, काल सूक्त।",
              stats: "२० काण्ड • ७३० सूक्त • ५९७७ मंत्र",
              imageKey: "card-atharvaveda.jpg"
            },
            {
              id: "shaunaka-sutras",
              name: "ख. प्रातिशाख्य व कल्पसूत्र (वैतान श्रौतसूत्र, कौशिक गृह्यसूत्र)",
              enName: "Pratishakhya & Kalpasutras",
              desc: "वैतान श्रौतसूत्र, कौशिक गृह्यसूत्र (भैषज्य, शांतिक कर्म) एवं शौनक प्रातिशाख्य।",
              stats: "वैतान, कौशिक सूत्र",
              imageKey: "card-atharvaveda.jpg"
            }
          ]
        },
        {
          id: "paippalada-shakha",
          name: "शाखा: पिप्पलाद शाखा (Paippalada)",
          enName: "Paippalada Shakha",
          desc: "महर्षि पिप्पलाद द्वारा प्रवर्तित — ओडिशा व कश्मीर परंपरा।",
          stats: "२० काण्ड",
          imageKey: "card-atharvaveda.jpg",
          children: [
            {
              id: "paippalada-samhita",
              name: "क. पिप्पलाद संहिता",
              enName: "Paippalada Samhita",
              desc: "२० काण्ड — दुर्लभ ताड़पत्रों में सुरक्षित विशिष्ट अथर्व परंपरा।",
              stats: "२० काण्ड",
              imageKey: "card-atharvaveda.jpg"
            }
          ]
        },
        {
          id: "atharvaveda-general",
          name: "अथर्ववेद वांग्मय का सामान्य वर्गीकरण",
          enName: "Atharvaveda General Literature Classification",
          desc: "संहिता, गोपथ ब्राह्मण, आरण्यक परंपरा, ३ प्रधान उपनिषद एवं सूत्र ग्रंथ।",
          stats: "ब्राह्मण, आरण्यक, उपनिषद व सूत्र",
          imageKey: "card-atharvaveda.jpg",
          children: [
            {
              id: "atharvaveda-samhita-general",
              name: "क. अथर्ववेद संहिता (शौनक और पिप्पलाद संहिताएं)",
              enName: "Atharvaveda Samhitas (Shaunaka & Paippalada)",
              desc: "शौनक संहिता (२० काण्ड, ७३० सूक्त) एवं पिप्पलाद संहिता।",
              stats: "शौनक व पिप्पलाद संहिता",
              imageKey: "card-atharvaveda.jpg"
            },
            {
              id: "gopatha-brahmana",
              name: "ख. ब्राह्मण ग्रंथ (केवल एक: गोपथ ब्राह्मण / Gopatha Brahmana)",
              enName: "Gopatha Brahmana",
              desc: "पूर्व गोपथ (५ प्रपाठक) व उत्तर गोपथ (६ प्रपाठक) — एकमात्र उपलब्ध अथर्व ब्राह्मण।",
              stats: "पूर्व व उत्तर गोपथ (११ प्रपाठक)",
              imageKey: "card-atharvaveda.jpg"
            },
            {
              id: "atharvaveda-aranyaka",
              name: "ग. आरण्यक ग्रंथ (अथर्ववेद का कोई स्वतंत्र आरण्यक उपलब्ध नहीं है)",
              enName: "Atharvaveda Aranyaka (None Independent)",
              desc: "वैदिक हेरिटेज पोर्टल (vedicheritage.gov.in) एवं परंपरा के अनुसार अथर्ववेद का कोई स्वतंत्र आरण्यक उपलब्ध नहीं है; इसके दार्शनिक तत्व उपनिषदों में समाहित हैं।",
              stats: "कोई स्वतंत्र आरण्यक नहीं",
              imageKey: "card-atharvaveda.jpg"
            },
            {
              id: "atharvaveda-upanishad",
              name: "घ. उपनिषद ग्रंथ (मुण्डकोपनिषद, माण्डूक्य उपनिषद, प्रश्नोपनिषद)",
              enName: "Atharvaveda Principal Upanishads",
              desc: "मुण्डकोपनिषद ('सत्यमेव जयते'), माण्डूक्योपनिषद ('अयमात्मा ब्रह्म') एवं प्रश्नोपनिषद।",
              stats: "३ प्रधान उपनिषद",
              imageKey: "card-atharvaveda.jpg",
              children: [
                {
                  id: "mundaka-upanishad",
                  name: "i. मुण्डकोपनिषद",
                  enName: "Mundaka Upanishad",
                  desc: "'सत्यमेव जयते नानृतम्' — परा व अपरा विद्या, जीवात्मा-परमात्मा का पक्षी रूपक।",
                  stats: "३ मुण्डक • ६४ मंत्र",
                  imageKey: "card-atharvaveda.jpg"
                },
                {
                  id: "mandukya-upanishad",
                  name: "ii. माण्डूक्य उपनिषद",
                  enName: "Mandukya Upanishad",
                  desc: "'अयमात्मा ब्रह्म' — ॐकार एवं चेतना की चार अवस्थाएँ (जाग्रत, स्वप्न, सुषुप्ति, तुरीय)।",
                  stats: "१२ मंत्र • चेतना की ४ अवस्थाएँ",
                  imageKey: "card-atharvaveda.jpg"
                },
                {
                  id: "prashna-upanishad",
                  name: "iii. प्रश्नोपनिषद",
                  enName: "Prashna Upanishad",
                  desc: "महर्षि पिप्पलाद और ६ ऋषियों के ६ गूढ़ आध्यात्मिक प्रश्न व समाधान।",
                  stats: "६ प्रश्न व उत्तर",
                  imageKey: "card-atharvaveda.jpg"
                }
              ]
            },
            {
              id: "atharvaveda-sutras",
              name: "ङ. सूत्र ग्रंथ (वैतान श्रौतसूत्र, कौशिक गृह्यसूत्र)",
              enName: "Atharvaveda Sutra Texts",
              desc: "वैतान श्रौतसूत्र (ब्रह्मा ऋत्विक के कार्य) एवं कौशिक गृह्यसूत्र (भैषज्य, शांति, पौष्टिक कर्म)।",
              stats: "वैतान व कौशिक सूत्र",
              imageKey: "card-atharvaveda.jpg"
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
  if (current.id === id || current.slug === id) {
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
