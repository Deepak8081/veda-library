// Master Grantha Hierarchical Tree Data Models
// Full Taxonomy for Puranas, Itihasa, Upanishads, and Darshana
// Parallels VEDA_HIERARCHY_TREE to provide identical interactive drill-down navigation

export const PURANA_HIERARCHY_TREE = {
  id: "purana-root",
  name: "पुराण",
  enName: "Puranas",
  children: [
    {
      id: "brahma-purana",
      slug: "brahma-purana",
      name: "ब्रह्म पुराण",
      enName: "Brahma Purana",
      desc: "आदि पुराण। २४५ अध्याय, सृष्टि उत्पत्ति, सूर्य उपासना एवं गोदावरी-उत्कल महात्म्य।",
      stats: "२४५ अध्याय • १०,००० श्लोक",
      badge: "आदि महापुराण",
      imageKey: "deity-brahma.jpg",
      children: [
        {
          id: "bp-khanda-1",
          name: "पूर्व भाग — सृष्टि उत्पत्ति व सूर्य महात्म्य",
          enName: "Purva Bhaga: Creation & Surya",
          desc: "परब्रह्म स्वरूप भगवान नारायण व ब्रह्मा जी की स्तुति, सूर्य क्षेत्र (कोणार्क)।",
          badge: "भाग",
          children: [
            {
              id: "bp-1-1-1",
              name: "अध्याय १: मंगलाचरण व आदि सृष्टि",
              enName: "Chapter 1: Mangalacharana",
              desc: "सृष्टि उत्पत्ति के कारणभूत परब्रह्म की वंदना।",
              badge: "अध्याय"
            }
          ]
        },
        {
          id: "bp-khanda-2",
          name: "उत्तर भाग — गौतमी महात्म्य (गोदावरी तीर्थ)",
          enName: "Uttara Bhaga: Gautami Mahatmya",
          desc: "१०६ अध्याय • महर्षि गौतम एवं गोदावरी नदी के पावन तीर्थों की महिमा।",
          badge: "भाग"
        }
      ]
    },
    {
      id: "padma-purana",
      slug: "padma-purana",
      name: "पद्म पुराण",
      enName: "Padma Purana",
      desc: "६ विशाल खण्ड (सृष्टि, भूमि, स्वर्ग, ब्रह्म, पाताल, उत्तर खण्ड)। पुष्कर तीर्थ, रामकथा व भागवत महात्म्य।",
      stats: "६ खण्ड • ५५,००० श्लोक",
      badge: "सात्त्विक महापुराण",
      imageKey: "card-purana.jpg",
      children: [
        {
          id: "pp-srishti",
          name: "प्रथम खण्ड — सृष्टि खण्ड (पुष्कर तीर्थ)",
          enName: "Srishti Khanda: Pushkar Tirtha",
          desc: "ब्रह्मा जी का महायज्ञ, पुष्कर तीर्थ की महिमा एवं गायत्री प्राकट्य।",
          badge: "खण्ड",
          children: [
            {
              id: "pp-srishti-1",
              name: "अध्याय १: पुष्कर तीर्थ प्राकट्य",
              enName: "Pushkar Appearance",
              desc: "तीर्थराज पुष्कर की महिमा एवं यज्ञ विधान।",
              badge: "अध्याय"
            }
          ]
        },
        {
          id: "pp-uttara",
          name: "षष्ठ खण्ड — उत्तर खण्ड (श्रीमद्भागवत महात्म्य)",
          enName: "Uttara Khanda: Bhagavata Mahatmya",
          desc: "श्रीमद्भागवत महात्म्य, भक्ति-ज्ञान-वैराग्य कथा, एकादशी व्रत एवं विष्णु सहस्रनाम।",
          badge: "खण्ड",
          children: [
            {
              id: "pp-bhagavata-mah-1",
              name: "महात्म्य १.१: सच्चिदानन्दरूपाय विश्वोत्पत्यादिहेतवे...",
              enName: "Bhagavata Mahatmya 1.1",
              desc: "सच्चिदानंद स्वरूप, विश्व की उत्पत्ति, स्थिति और लय के कारण श्रीकृष्ण को प्रणाम।",
              badge: "श्लोक",
              mantraId: "pp-bhagavata-mah-1"
            }
          ]
        }
      ]
    },
    {
      id: "vishnu-purana",
      slug: "vishnu-purana",
      name: "विष्णु पुराण",
      enName: "Vishnu Purana",
      desc: "महर्षि पराशर प्रणीत ६ अंशों में विभाजित सात्विक महापुराण।",
      stats: "६ अंश • १२६ अध्याय • २३,००० श्लोक",
      badge: "सात्विक महापुराण",
      imageKey: "card-purana.jpg",
      children: [
        {
          id: "vp-amsha-1",
          name: "प्रथम अंश — सृष्टि उत्पत्ति व ध्रुव-प्रह्लाद चरित्र",
          enName: "Amsha 1: Sarga & Bhakti",
          desc: "२२ अध्याय • ब्रह्मांडीय सृष्टि, वराह अवतार, ध्रुव तपस्या एवं प्रह्लाद की अनन्य भक्ति।",
          stats: "२२ अध्याय",
          badge: "अंश",
          children: [
            {
              id: "vp-amsha-1-ch-1",
              name: "अध्याय १: मैत्रेय-पराशर संवाद",
              enName: "Chapter 1: Maitreya & Parashara",
              desc: "सृष्टि उत्पत्ति के कारण एवं परब्रह्म विष्णु की महिमा।",
              badge: "अध्याय",
              children: [
                {
                  id: "vp-1-1-1",
                  name: "श्लोक १.१.१: ॐ नमो भगवते वासुदेवाय...",
                  enName: "Shloka 1.1.1 (Mangalacharana)",
                  desc: "सृष्टि, स्थिति और लय के कारणभूत भगवान विष्णु को साष्टांग प्रणाम।",
                  stats: "वक्ता: महर्षि पराशर",
                  badge: "श्लोक",
                  mantraId: "vp-1-1-1"
                }
              ]
            },
            {
              id: "vp-amsha-1-ch-12",
              name: "अध्याय १२: ध्रुव चरित्र व स्तुति",
              enName: "Chapter 12: Dhruva Charitra",
              desc: "बालक ध्रुव की कठोर तपस्या और भगवान विष्णु का दर्शन।",
              badge: "अध्याय",
              children: [
                {
                  id: "vp-1-12-39",
                  name: "श्लोक १.१२.३९: यन्मया चिन्तितं देव...",
                  enName: "Dhruva Stuti",
                  desc: "ध्रुव जी द्वारा भगवान नारायण के दिव्य चतुर्भुज स्वरूप की स्तुति।",
                  badge: "श्लोक",
                  mantraId: "vp-1-12-39"
                }
              ]
            }
          ]
        },
        {
          id: "vp-amsha-5",
          name: "पंचम अंश — श्रीकृष्ण चरितामृत",
          enName: "Amsha 5: Sri Krishna Leela",
          desc: "३८ अध्याय • गोकुल-वृंदावन लीला, कंस वध, द्वारका निर्माण एवं महाभारत प्रसंग।",
          stats: "३८ अध्याय",
          badge: "अंश",
          children: [
            {
              id: "vp-amsha-5-ch-1",
              name: "अध्याय १: श्रीकृष्ण प्राकट्य",
              enName: "Chapter 1: Appearance of Krishna",
              desc: "कंस कारागार में भगवान वासुदेव का चतुर्भुज रूप में प्रादुर्भाव।",
              badge: "अध्याय"
            }
          ]
        }
      ]
    },
    {
      id: "shrimad-bhagavata",
      slug: "shrimad-bhagavata",
      name: "श्रीमद्भागवत महापुराण",
      enName: "Srimad Bhagavata Purana",
      desc: "शुकदेव-परीक्षित संवाद, १२ स्कंध, श्रीकृष्ण लीलामृत एवं परमहंस संहिता।",
      stats: "१२ स्कंध • ३३५ अध्याय • १८,००० श्लोक",
      badge: "अमल महापुराण",
      imageKey: "card-sukta-purusha.jpg",
      children: [
        {
          id: "sb-skandha-1",
          name: "प्रथम स्कंध — अधिकार लीला",
          enName: "Skandha 1: Adhikara Leela",
          desc: "१९ अध्याय • व्यास-नारद संवाद, कुंती स्तुति, भीष्म स्तुति, परीक्षित जन्म व शाप।",
          stats: "१९ अध्याय",
          badge: "स्कंध",
          children: [
            {
              id: "sb-1-1-1",
              name: "श्लोक १.१.१: जन्माद्यस्य यतोऽन्वयादितरतश्चार्थेष्वभिज्ञः स्वराट्...",
              enName: "Shloka 1.1.1 (Param Satyam)",
              desc: "सत्यं परं धीमहि — समस्त सृष्टि के मूल कारण सच्चिदानंद परमात्मा का ध्यान।",
              stats: "छंद: शार्दूलविक्रीडित",
              badge: "भागवत श्लोक",
              mantraId: "sb-1-1-1"
            }
          ]
        },
        {
          id: "sb-skandha-2",
          name: "द्वितीय स्कंध — ज्ञान लीला (चतुःश्लोकी भागवत)",
          enName: "Skandha 2: Jnana Leela",
          desc: "१० अध्याय • विराट पुरुष ध्यान, चतुःश्लोकी भागवत उपदेश (अहमेवासमेवाग्रे)।",
          stats: "१० अध्याय",
          badge: "स्कंध",
          children: [
            {
              id: "sb-2-9-33",
              name: "श्लोक २.९.३३: अहमेवासमेवाग्रे नान्यद् यत् सदसत्परम्...",
              enName: "Chatu-shloki 1",
              desc: "सृष्टि से पूर्व केवल मैं ही था, सृष्टि के पश्चात भी मैं ही हूँ, और प्रलय में भी मैं ही अवशिष्ट रहूँगा।",
              badge: "चतुःश्लोकी",
              mantraId: "sb-2-9-33"
            }
          ]
        },
        {
          id: "sb-skandha-10",
          name: "दशम स्कंध — निरोध लीला (श्रीकृष्ण लीलामृत)",
          enName: "Skandha 10: Sri Krishna Leela",
          desc: "९० अध्याय • गोकुल, मथुरा एवं द्वारका लीला, रासपंचाध्यायी, गोपीगीत।",
          stats: "९० अध्याय",
          badge: "स्कंध",
          children: [
            {
              id: "sb-10-31-1",
              name: "गोपीगीत (१०.३१.१): जयति तेऽधिकं जन्मना व्रजः...",
              enName: "Gopi Gita 10.31.1",
              desc: "हे प्रियतम! आपके जन्म से ब्रजभूमि वैकुण्ठ से भी अधिक शोभायमान हो गई है।",
              badge: "गोपीगीत",
              mantraId: "sb-10-31-1"
            }
          ]
        }
      ]
    },
    {
      id: "shiva-purana",
      slug: "shiva-purana",
      name: "शिव पुराण",
      enName: "Shiva Purana",
      desc: "भगवान शिव के परब्रह्म स्वरूप, द्वादश ज्योतिर्लिंग, लिंगोद्भव एवं भस्म-रुद्राक्ष महिमा।",
      stats: "७ संहिताएँ • २४,००० श्लोक",
      badge: "शैव महापुराण",
      imageKey: "deity-shiva.jpg",
      children: [
        {
          id: "sp-vidyeshvara",
          name: "विद्येश्वर संहिता",
          enName: "Vidyeshvara Samhita",
          desc: "२५ अध्याय • शिवलिंग स्वरूप, प्रणव (ॐ) महिमा, भस्म व रुद्राक्ष महात्म्य।",
          stats: "२५ अध्याय",
          badge: "संहिता",
          children: [
            {
              id: "sp-1-1-1",
              name: "श्लोक १.१.१: ॐ नमः शिवाय शुभदाय...",
              enName: "Mangalacharana",
              desc: "कल्याणकर्ता भगवान सदाशिव को नमन।",
              badge: "श्लोक",
              mantraId: "sp-1-1-1"
            }
          ]
        },
        {
          id: "sp-kotirudra",
          name: "कोटिरुद्र संहिता (द्वादश ज्योतिर्लिंग)",
          enName: "Kotirudra Samhita: 12 Jyotirlingas",
          desc: "४३ अध्याय • सौराष्ट्र में सोमनाथ से लेकर काशी विश्वनाथ तक १२ ज्योतिर्लिंगों का प्रादुर्भाव।",
          stats: "४३ अध्याय",
          badge: "संहिता"
        }
      ]
    },
    {
      id: "narada-purana",
      slug: "narada-purana",
      name: "नारद पुराण",
      enName: "Narada Purana",
      desc: "बृहन्नारदीय पुराण। वेदों के ६ अंगों, १८ पुराणों की अनुक्रमणिका व एकादशी व्रत का निरूपण।",
      stats: "२ भाग • २५,००० श्लोक",
      badge: "सात्त्विक महापुराण",
      imageKey: "card-purana.jpg",
      children: [
        {
          id: "np-purva",
          name: "पूर्व भाग — षड्विध वेदांग व पुराण अनुक्रमणिका",
          enName: "Purva Bhaga: Vedangas & Puranas",
          desc: "शिक्षा, कल्प, व्याकरण, निरुक्त, छंद, ज्योतिष तथा १८ महापुराणों के विषय।",
          badge: "भाग",
          children: [
            {
              id: "np-1-1",
              name: "अध्याय १: सनकादि-नारद संवाद",
              enName: "Sanakadi & Narada Dialogue",
              desc: "सृष्टि तत्व एवं भगवान नारायण की अनन्य भक्ति का उपदेश।",
              badge: "अध्याय"
            }
          ]
        },
        {
          id: "np-uttara",
          name: "उत्तर भाग — तीर्थ महात्म्य व एकादशी व्रत",
          enName: "Uttara Bhaga: Tirtha & Ekadashi",
          desc: "मोक्षदायिनी एकादशी व्रत विधि, यम-नारद संवाद एवं गंगा महात्म्य।",
          badge: "भाग"
        }
      ]
    },
    {
      id: "markandeya-purana",
      slug: "markandeya-purana",
      name: "मार्कण्डेय पुराण",
      enName: "Markandeya Purana",
      desc: "महर्षि मार्कण्डेय प्रणीत। श्री दुर्गा सप्तशती (देवी महात्म्य) का मूल स्रोत।",
      stats: "१३७ अध्याय • ९,००० श्लोक",
      badge: "राजस महापुराण",
      imageKey: "deity-durga.jpg",
      children: [
        {
          id: "mp-durga-saptashati",
          name: "श्री दुर्गा सप्तशती (देवी महात्म्य — अध्याय ८१-९३)",
          enName: "Durga Saptashati (Chapters 81-93)",
          desc: "१३ अध्याय, ७०० श्लोक • प्रथम, मध्यम एवं उत्तम चरित्र (मधु-कैटभ, महिषासुर, शुम्भ-निशुम्भ वध)।",
          stats: "१३ अध्याय • ७०० श्लोक",
          badge: "देवी महात्म्य",
          children: [
            {
              id: "ds-1-1",
              name: "सप्तशती १.१: ॐ मार्कण्डेय उवाच सावर्णिः सूर्यतनयो...",
              enName: "Durga Saptashati 1.1",
              desc: "सावर्णि मनु की उत्पत्ति और मेधा ऋषि का आश्रम।",
              badge: "सप्तशती श्लोक",
              mantraId: "ds-1-1"
            }
          ]
        }
      ]
    },
    {
      id: "agni-purana",
      slug: "agni-purana",
      name: "अग्नि पुराण",
      enName: "Agni Purana",
      desc: "प्राचीन भारतीय ज्ञान-विज्ञान का विश्वकोश। आयुर्वेद, धनुर्वेद, ज्योतिष, व्याकरण व राजधर्म।",
      stats: "३८३ अध्याय • १५,४०० श्लोक",
      badge: "ज्ञानकोश महापुराण",
      imageKey: "card-sukta-agni.jpg",
      children: [
        {
          id: "ap-vidya",
          name: "विद्या व ज्ञान काण्ड — आयुर्वेद, वास्तु व नीति",
          enName: "Vidya Khanda: Sciences & Arts",
          desc: "धन्वंतरि उपदिष्ट आयुर्वेद, वास्तुशास्त्र, राजनीति (नीतिसार) व व्याकरण।",
          badge: "काण्ड",
          children: [
            {
              id: "ap-1-1",
              name: "अध्याय १: अग्निदेव द्वारा वसिष्ठ को उपदेश",
              enName: "Chapter 1: Agni to Vashistha",
              desc: "समस्त विद्याओं के सारभूत ब्रह्मज्ञान का प्रारंभ।",
              badge: "अध्याय"
            }
          ]
        },
        {
          id: "ap-dharma",
          name: "धर्म व उपासना काण्ड — अवतार चरित व पूजा विधान",
          enName: "Dharma Khanda: Avatars & Rituals",
          desc: "दशावतार चरित्र, शिव-विष्णु-दुर्गा पूजा पद्धति एवं प्रतिष्ठा विधान।",
          badge: "काण्ड"
        }
      ]
    },
    {
      id: "bhavishya-purana",
      slug: "bhavishya-purana",
      name: "भविष्य पुराण",
      enName: "Bhavishya Purana",
      desc: "४ पर्व (ब्राह्म, मध्यम, प्रतिसर्ग, उत्तर)। सौर उपासना, काल-गणना एवं ऐतिहासिक पूर्व-संकेत।",
      stats: "४ पर्व • १४,५०० श्लोक",
      badge: "राजस महापुराण",
      imageKey: "card-astrology.jpg",
      children: [
        {
          id: "bhp-brahma",
          name: "ब्राह्म पर्व — सौर उपासना व सदाचार",
          enName: "Brahma Parva: Surya Upasana",
          desc: "भगवान सूर्यदेव की महिमा, साम्ब उपाख्यान एवं चातुर्मास्य व्रत।",
          badge: "पर्व",
          children: [
            {
              id: "bhp-1-1",
              name: "अध्याय १: सुमन्तु-शतानीक संवाद",
              enName: "Chapter 1: Sumantu & Shatanika",
              desc: "धर्म, सदाचार एवं सूर्य उपासना के रहस्य।",
              badge: "अध्याय"
            }
          ]
        },
        {
          id: "bhp-pratisarga",
          name: "प्रतिसर्ग पर्व — युगीन इतिहास व भविष्योक्ति",
          enName: "Pratisarga Parva: Prophecies",
          desc: "द्वापर व कलियुग के राजवंश, ऐतिहासिक कालचक्र एवं भविष्य की घटनाएँ।",
          badge: "पर्व"
        }
      ]
    },
    {
      id: "brahmavaivarta-purana",
      slug: "brahmavaivarta-purana",
      name: "ब्रह्मवैवर्त पुराण",
      enName: "Brahmavaivarta Purana",
      desc: "४ खण्ड (ब्रह्म, प्रकृति, गणपति, श्रीकृष्ण जन्म)। श्रीराधा-कृष्ण गोलोक लीला व आद्याशक्ति महिमा।",
      stats: "४ खण्ड • १८,००० श्लोक",
      badge: "राजस महापुराण",
      imageKey: "card-purana.jpg",
      children: [
        {
          id: "bvp-brahma",
          name: "प्रथम खण्ड — ब्रह्म खण्ड (सृष्टि व गोलोक धाम)",
          enName: "Brahma Khanda: Creation & Goloka",
          desc: "परब्रह्म श्रीकृष्ण के गोलोक धाम का दिव्य स्वरूप एवं सृष्टि प्राकट्य।",
          badge: "खण्ड",
          children: [
            {
              id: "bvp-1-1",
              name: "अध्याय १: मंगलाचरण",
              enName: "Chapter 1: Mangalacharana",
              desc: "गोलोकाधिपति सच्चिदानंद भगवान श्रीकृष्ण की वंदना।",
              badge: "अध्याय"
            }
          ]
        },
        {
          id: "bvp-krishna-janma",
          name: "चतुर्थ खण्ड — श्रीकृष्ण जन्म खण्ड (राधा-कृष्ण लीलामृत)",
          enName: "Krishna Janma Khanda: Radha-Krishna",
          desc: "१३३ अध्याय • श्रीराधा जी का प्राकट्य, रासमंडल, वृंदावन लीला एवं गोलोक गमन।",
          badge: "खण्ड",
          children: [
            {
              id: "bvp-4-1",
              name: "राधा-कृष्ण युगल स्तुति",
              enName: "Radha Krishna Stuti",
              desc: "राधा और कृष्ण एक ही चैतन्य के दो दिव्य रूप हैं।",
              badge: "स्तुति"
            }
          ]
        }
      ]
    },
    {
      id: "linga-purana",
      slug: "linga-purana",
      name: "लिंग पुराण",
      enName: "Linga Purana",
      desc: "भगवान शिव के निराकार लिंग प्रतीक, पाशुपत योग, अघोर-सद्योजात आदि पञ्चब्रह्म व अष्टमूर्ति स्वरूप।",
      stats: "२ भाग • ११,००० श्लोक",
      badge: "शैव महापुराण",
      imageKey: "deity-shiva.jpg",
      children: [
        {
          id: "lp-purva",
          name: "पूर्व भाग — लिंगोद्भव व पञ्चब्रह्म स्वरूप",
          enName: "Purva Bhaga: Lingodbhava",
          desc: "अनादि-अनंत ज्योतिर्लिंग प्राकट्य, ब्रह्मा-विष्णु दर्प भंजन एवं पाशुपत योग।",
          badge: "भाग",
          children: [
            {
              id: "lp-1-17",
              name: "अध्याय १७: ज्योतिर्लिंग प्राकट्य",
              enName: "Chapter 17: Lingodbhava",
              desc: "अग्निस्तम्भ रूप में भगवान शिव का प्राकट्य, जिसका आदि और अंत अगम्य था।",
              badge: "आख्यान"
            }
          ]
        },
        {
          id: "lp-uttara",
          name: "उत्तर भाग — अष्टमूर्ति शिव व तांडव",
          enName: "Uttara Bhaga: Ashtamurti Shiva",
          desc: "पृथ्वी, जल, तेज, वायु, आकाश, सूर्य, चंद्र व यजमान — अष्टतत्व रूप शिव।",
          badge: "भाग"
        }
      ]
    },
    {
      id: "varaha-purana",
      slug: "varaha-purana",
      name: "वराह पुराण",
      enName: "Varaha Purana",
      desc: "भगवान वराह द्वारा पृथ्वी उद्धार, भूदेवी संवाद, तीर्थ महात्म्य व वैष्णव सदाचार।",
      stats: "२१८ अध्याय • १०,००० श्लोक",
      badge: "सात्त्विक महापुराण",
      imageKey: "deity-dashavatara.jpg",
      children: [
        {
          id: "varp-varaha",
          name: "वराह-धरणी संवाद — भू-उद्धार व धर्म तत्व",
          enName: "Varaha & Prithvi Dialogue",
          desc: "हिरण्याक्ष वध, रसातल से पृथ्वी का उद्धार एवं पावन वैष्णव धर्म।",
          badge: "संवाद",
          children: [
            {
              id: "varp-1-1",
              name: "अध्याय १: आदि वराह अवतार प्राकट्य",
              enName: "Chapter 1: Varaha Appearance",
              desc: "यज्ञवराह स्वरूप भगवान विष्णु द्वारा वेदों और पृथ्वी की रक्षा।",
              badge: "अध्याय"
            }
          ]
        },
        {
          id: "varp-tirtha",
          name: "मथुरा मण्डल व तीर्थ महात्म्य",
          enName: "Mathura Mandala & Tirthas",
          desc: "मथुरा मण्डल, गोवर्धन, विश्राम घाट एवं द्वादश आदित्य महात्म्य।",
          badge: "तीर्थ"
        }
      ]
    },
    {
      id: "skanda-purana",
      slug: "skanda-purana",
      name: "स्कन्द पुराण",
      enName: "Skanda Purana",
      desc: "विशालतम महापुराण। माहेश्वर, वैष्णव, काशी, अवन्ती, प्रभास आदि ७ खंड। सत्यनारायण कथा।",
      stats: "७ खण्ड • ८१,१०० श्लोक",
      badge: "विशालतम महापुराण",
      imageKey: "card-grantha-shatapatha.jpg",
      children: [
        {
          id: "skp-maheshwara",
          name: "प्रथम खण्ड — माहेश्वर खण्ड (केदार खण्ड)",
          enName: "Maheshwara Khanda: Kedar Kshetra",
          desc: "शिव-पार्वती विवाह, दक्ष यज्ञ विध्वंस, तारकासुर वध, कार्तिकेय जन्म।",
          badge: "खण्ड",
          children: [
            {
              id: "skp-kedar",
              name: "केदारनाथ महात्म्य",
              enName: "Kedarnath Mahatmya",
              desc: "हिमालय स्थित द्वादश ज्योतिर्लिंग केदारेश्वर की परम पावन महिमा।",
              badge: "ज्योतिर्लिंग"
            }
          ]
        },
        {
          id: "skp-kashi",
          name: "चतुर्थ खण्ड — काशी खण्ड (काशी विश्वनाथ)",
          enName: "Kashi Khanda: Moksha Puri",
          desc: "१०० अध्याय • आनंदकानन काशी, द्वादश ज्योतिर्लिंग काशी विश्वनाथ, गंगा अवतरण।",
          badge: "खण्ड",
          children: [
            {
              id: "skp-kashi-vishwanath",
              name: "काशी विश्वनाथ प्राकट्य",
              enName: "Kashi Vishwanath",
              desc: "काशी में देहत्याग से तारक ब्रह्म मंत्र द्वारा मुक्ति का वरदान।",
              badge: "महात्म्य"
            }
          ]
        },
        {
          id: "skp-vaishnava",
          name: "द्वितीय खण्ड — वैष्णव खण्ड (श्री सत्यनारायण कथा व पुरी)",
          enName: "Vaishnava Khanda: Satyanarayana Katha",
          desc: "श्री सत्यनारायण व्रत कथा, पुरुषोत्तम क्षेत्र (पुरी) एवं बदरिकाश्रम महात्म्य।",
          badge: "खण्ड"
        }
      ]
    },
    {
      id: "vamana-purana",
      slug: "vamana-purana",
      name: "वामन पुराण",
      enName: "Vamana Purana",
      desc: "भगवान वामन का प्राकट्य, राजा बलि की दानशीलता, त्रिविक्रम स्वरूप एवं शिव-पार्वती चरित्र।",
      stats: "९५ अध्याय • १०,००० श्लोक",
      badge: "राजस महापुराण",
      imageKey: "deity-dashavatara.jpg",
      children: [
        {
          id: "vmp-vamana",
          name: "वामन चरित्र — राजा बलि यज्ञ व त्रिविक्रम",
          enName: "Vamana Avatar & King Bali",
          desc: "भगवान वामन का प्राकट्य, तीन पग भूमि का दान एवं बलि की शरणागति।",
          badge: "आख्यान",
          children: [
            {
              id: "vmp-1-1",
              name: "वामन प्राकट्य व त्रिविक्रम स्वरूप",
              enName: "Trivikrama Form",
              desc: "एक पग में पृथ्वी, दूसरे में द्युलोक, तीसरे में बलि का शीश।",
              badge: "चरित्र"
            }
          ]
        },
        {
          id: "vmp-sarovara",
          name: "कुरुक्षेत्र व ब्रह्म सरोवर महात्म्य",
          enName: "Kurukshetra Mahatmya",
          desc: "ब्रह्म सरोवर, सरस्वती नदी एवं पवित्र तीर्थों की महिमा।",
          badge: "तीर्थ"
        }
      ]
    },
    {
      id: "kurma-purana",
      slug: "kurma-purana",
      name: "कूर्म पुराण",
      enName: "Kurma Purana",
      desc: "समुद्र मंथन में कच्छप अवतार। इसमें स्थित 'ईश्वर गीता' व 'व्यास गीता' अद्वैत ज्ञान के सर्वोच्च शिखर हैं।",
      stats: "२ भाग • १७,००० श्लोक",
      badge: "महापुराण",
      imageKey: "deity-dashavatara.jpg",
      children: [
        {
          id: "kp-purva",
          name: "पूर्व भाग — समुद्र मंथन व ईश्वर गीता (११ अध्याय)",
          enName: "Purva Bhaga: Ishvara Gita",
          desc: "कच्छप अवतार, समुद्र मंथन, एवं भगवान शिव द्वारा सनकादिकों को अद्वैत ईश्वर गीता का उपदेश।",
          badge: "भाग",
          children: [
            {
              id: "kp-ishvara-gita",
              name: "ईश्वर गीता (अध्याय ४-१४)",
              enName: "Ishvara Gita",
              desc: "अद्वैत वेदान्त व शैव दर्शन का समन्वित परम ज्ञान, जो भगवद्गीता के समतुल्य है।",
              badge: "गीता",
              children: [
                {
                  id: "kp-ig-1",
                  name: "ईश्वर गीता १.१: सोऽहं स एव चात्मानं...",
                  enName: "Ishvara Gita 1.1",
                  desc: "भगवान सदाशिव द्वारा आत्म-साक्षात्कार का गूढ़ उपदेश।",
                  badge: "श्लोक",
                  mantraId: "kp-ig-1"
                }
              ]
            }
          ]
        },
        {
          id: "kp-uttara",
          name: "उत्तर भाग — व्यास गीता (३४ अध्याय)",
          enName: "Uttara Bhaga: Vyasa Gita",
          desc: "महर्षि वेदव्यास द्वारा ऋषियों को वर्णाश्रम धर्म, यति धर्म, ध्यान व मोक्ष मार्ग का उपदेश।",
          badge: "भाग"
        }
      ]
    },
    {
      id: "matsya-purana",
      slug: "matsya-purana",
      name: "मत्स्य पुराण",
      enName: "Matsya Purana",
      desc: "प्राचीनतम महापुराण। महाप्रलय, मनु की नौका, प्राचीन राजवंश एवं १८ वास्तु प्रवर्तक ऋषियों के नियम।",
      stats: "२९१ अध्याय • १४,००० श्लोक",
      badge: "महापुराण",
      imageKey: "deity-dashavatara.jpg",
      children: [
        {
          id: "mat-pralaya",
          name: "मत्स्य अवतार — महाप्रलय व मनु संवाद",
          enName: "Matsya Avatar & Great Deluge",
          desc: "सत्यव्रत मनु की अंजुली में लघु मत्स्य का प्राकट्य, महाप्रलय में नौका रक्षा।",
          badge: "अवतार",
          children: [
            {
              id: "mat-1-1",
              name: "अध्याय १: राजा सत्यव्रत व मत्स्य प्राकट्य",
              enName: "Chapter 1: King Satyavrata",
              desc: "भगवान मत्स्य द्वारा प्रलय काल में वेदों की रक्षा का संकल्प।",
              badge: "अध्याय"
            }
          ]
        },
        {
          id: "mat-vastu",
          name: "वास्तुशास्त्र व प्रतिमा लक्षण (१८ वास्तु ऋषि)",
          enName: "Vastu Shastra & Iconography",
          desc: "गृह, दुर्ग, प्रासाद निर्माण विधान, १८ वास्तु प्रवर्तक ऋषि एवं प्रतिमा लक्षण।",
          badge: "शिल्पशास्त्र"
        }
      ]
    },
    {
      id: "garuda-purana",
      slug: "garuda-purana",
      name: "गरुड़ पुराण",
      enName: "Garuda Purana",
      desc: "आचार काण्ड (रत्न परीक्षा, नीति, आयुर्वेद) एवं प्रेतकल्प (मृत्यु, यममार्ग, कर्म-विपाक, मुक्ति)।",
      stats: "२ खण्ड • १९,००० श्लोक",
      badge: "सात्त्विक महापुराण",
      imageKey: "card-purana.jpg",
      children: [
        {
          id: "gp-achara",
          name: "पूर्व खण्ड — आचार काण्ड (नीति, आयुर्वेद व रत्न परीक्षा)",
          enName: "Achara Khanda: Life Sciences",
          desc: "२२९ अध्याय • धर्म, नीति, नवरत्न परीक्षा, व्याकरण एवं गरुड़ोक्त आयुर्वेद।",
          badge: "काण्ड",
          children: [
            {
              id: "gp-1-1",
              name: "अध्याय १: सूत-शौनक संवाद",
              enName: "Chapter 1: Suta & Shaunaka",
              desc: "भगवान विष्णु द्वारा पक्षीराज गरुड़ को समस्त विद्याओं का उपदेश।",
              badge: "अध्याय"
            }
          ]
        },
        {
          id: "gp-preta",
          name: "उत्तर खण्ड — प्रेतकल्प / सारोद्धार (धर्मकाण्ड)",
          enName: "Preta Kalpa: Journey of the Soul",
          desc: "३५ अध्याय • मरणोपरांत जीवात्मा की यात्रा, यमलोक मार्ग, कर्म-विपाक एवं मोक्ष विधान।",
          badge: "काण्ड",
          children: [
            {
              id: "gp-preta-1",
              name: "सारोद्धार: जीवात्मा की गति व कर्मफल",
              enName: "Preta Kalpa Chapter 1",
              desc: "पुण्य और पाप कर्मों का परिणाम तथा मुक्तिदायक नारायण नाम।",
              badge: "अध्याय"
            }
          ]
        }
      ]
    },
    {
      id: "brahmanda-purana",
      slug: "brahmanda-purana",
      name: "ब्रह्माण्ड पुराण",
      enName: "Brahmanda Purana",
      desc: "४ पाद (प्रक्रिया, अनुषंग, उपोद्घात, उपसंहार)। ब्रह्माण्ड खगोल, अध्यात्म रामायण व श्री ललिता सहस्रनाम।",
      stats: "४ पाद • १२,००० श्लोक",
      badge: "महापुराण",
      imageKey: "deity-trimurti.jpg",
      children: [
        {
          id: "bda-lalita",
          name: "ललितोपाख्यान — श्री ललिता सहस्रनाम स्तोत्र",
          enName: "Lalitopakhyana & Lalita Sahasranama",
          desc: "हयग्रीव-अगस्त्य संवाद, भांडासुर वध, श्रीचक्र रहस्य एवं ललिता सहस्रनाम।",
          badge: "श्रीविद्या",
          children: [
            {
              id: "bda-ls-1",
              name: "श्री ललिता सहस्रनाम: श्रीमाता श्रीमहाराज्ञी श्रीमत्सिंहासनेश्वरी...",
              enName: "Lalita Sahasranama 1",
              desc: "समस्त ब्रह्माण्ड की जननी भगवती राजराजेश्वरी ललिता त्रिपुरसुंदरी के १००० दिव्य नाम।",
              badge: "सहस्रनाम",
              mantraId: "bda-ls-1"
            }
          ]
        },
        {
          id: "bda-adhyatma",
          name: "अध्यात्म रामायण — वेदान्तपरक रामचरित",
          enName: "Adhyatma Ramayana",
          desc: "भगवान शिव द्वारा माता पार्वती को उपदिष्ट आध्यात्मिक रामकथा (सीता माया रूप, राम परब्रह्म)।",
          badge: "रामायण"
        }
      ]
    }
  ]
};

export const ITIHASA_HIERARCHY_TREE = {
  id: "itihasa-root",
  name: "इतिहास",
  enName: "Itihasa",
  children: [
    {
      id: "valmiki-ramayana",
      slug: "valmiki-ramayana",
      name: "वाल्मीकि रामायण",
      enName: "Valmiki Ramayana",
      desc: "आदिकवि महर्षि वाल्मीकि प्रणीत आदिकाव्य। श्रीराम का मर्यादा पुरुषोत्तम जीवन।",
      stats: "७ काण्ड • ५०० सर्ग • २४,००० श्लोक",
      badge: "आदिकाव्य",
      imageKey: "card-ramayana.jpg",
      children: [
        {
          id: "vr-bala-kanda",
          name: "१. बाल काण्ड (Bala Kanda)",
          enName: "Bala Kanda",
          desc: "७७ सर्ग • श्रीराम जन्म, विश्वामित्र यज्ञ रक्षा, अहल्या उद्धार, धनुषभंग, सीता विवाह।",
          stats: "७७ सर्ग",
          badge: "काण्ड",
          children: [
            {
              id: "vr-1-1-1",
              name: "सर्ग १.१: तपःस्वाध्यायनीरतं तपस्वी वाग्विदां वरम्...",
              enName: "Moola Ramayana (1.1.1)",
              desc: "वाल्मीकि जी द्वारा देवर्षि नारद से संसार के सर्वश्रेष्ठ गुणवान पुरुष के विषय में प्रश्न।",
              badge: "आदिकाव्य श्लोक",
              mantraId: "vr-1-1-1"
            }
          ]
        },
        {
          id: "vr-ayodhya-kanda",
          name: "२. अयोध्या काण्ड (Ayodhya Kanda)",
          enName: "Ayodhya Kanda",
          desc: "११९ सर्ग • राज्याभिषेक उत्सव, कैकेयी वरदान, श्रीराम वनगमन, दशरथ देहत्याग, भरत मिलाप।",
          stats: "११९ सर्ग",
          badge: "काण्ड"
        },
        {
          id: "vr-sundara-kanda",
          name: "५. सुंदर काण्ड (Sundara Kanda)",
          enName: "Sundara Kanda",
          desc: "६८ सर्ग • हनुमान जी का समुद्र लंघन, लंका प्रवेश, माता सीता का दर्शन, लंका दहन।",
          stats: "६८ सर्ग",
          badge: "काण्ड",
          children: [
            {
              id: "vr-5-1-1",
              name: "सर्ग १.१: ततो रावणनीतायाः सीतायाः शत्रुकर्शनः...",
              enName: "Sundara Kanda Opening",
              desc: "हनुमान जी द्वारा महेन्द्र पर्वत से लंका की ओर दिव्य छलांग।",
              badge: "श्लोक",
              mantraId: "vr-5-1-1"
            }
          ]
        },
        {
          id: "vr-yuddha-kanda",
          name: "६. युद्ध काण्ड (Yuddha Kanda)",
          enName: "Yuddha Kanda",
          desc: "१२८ सर्ग • सेतु बंधन, लंका युद्ध, आदित्य हृदय स्तोत्र, रावण वध, विभीषण राज्याभिषेक।",
          stats: "१२८ सर्ग",
          badge: "काण्ड",
          children: [
            {
              id: "vr-6-105-1",
              name: "आदित्य हृदय स्तोत्र (१०५.१): ततो युद्धपरिश्रान्तं समरे चिन्तया स्थितम्...",
              enName: "Aditya Hridaya Stotram 1",
              desc: "अगस्त्य ऋषि द्वारा श्रीराम को विजय प्रदायक आदित्य हृदय का उपदेश।",
              badge: "आदित्य हृदय",
              mantraId: "vr-6-105-1"
            }
          ]
        }
      ]
    },
    {
      id: "mahabharata",
      slug: "mahabharata",
      name: "महाभारत",
      enName: "Mahabharata",
      desc: "महर्षि वेदव्यास प्रणीत शतसाहस्री संहिता (पंचम वेद)। यतो धर्मस्ततो जयः।",
      stats: "१८ पर्व • हरिवंश • १,००,००० श्लोक",
      badge: "पंचम वेद",
      imageKey: "card-mahabharata.jpg",
      children: [
        {
          id: "mb-adi-parva",
          name: "१. आदि पर्व (Adi Parva)",
          enName: "Adi Parva",
          desc: "कुरुवंश उत्पत्ति, शकुन्तला आख्यान, पाण्डव जन्म, लाक्षागृह, द्रौपदी स्वयंवर।",
          stats: "२२५ अध्याय",
          badge: "पर्व",
          children: [
            {
              id: "mb-1-1-1",
              name: "मंगलाचरण: नारायणं नमस्कृत्य नरं चैव नरोत्तमम्...",
              enName: "Mahabharata Mangalacharana",
              desc: "भगवान नारायण, नर (अर्जुन), सरस्वती देवी और व्यास जी को नमन कर 'जय' ग्रंथ का पाठ करें।",
              badge: "महाभारत श्लोक",
              mantraId: "mb-1-1-1"
            }
          ]
        },
        {
          id: "mb-bhishma-parva",
          name: "६. भीष्म पर्व (Bhishma Parva — श्रीमद्भगवद्गीता)",
          enName: "Bhishma Parva (Gita Embedded)",
          desc: "१२२ अध्याय • कुरुक्षेत्र युद्ध प्रारंभ, श्रीमद्भगवद्गीता (अध्याय २५-४२), भीष्म शरशय्या।",
          stats: "१२२ अध्याय",
          badge: "पर्व"
        },
        {
          id: "mb-anushasana-parva",
          name: "१३. अनुशासन पर्व (विष्णु सहस्रनाम)",
          enName: "Anushasana Parva (Vishnu Sahasranama)",
          desc: "दानधर्म, वर्णाश्रम, श्री विष्णु सहस्रनाम स्तोत्र (अध्याय १४९), भीष्म निर्वाण।",
          stats: "१६८ अध्याय",
          badge: "पर्व",
          children: [
            {
              id: "mb-13-149-1",
              name: "विष्णु सहस्रनाम: शुक्लामंबरधरं विष्णुं शशिवर्णं चतुर्भुजम्...",
              enName: "Vishnu Sahasranama Stotram",
              desc: "भीष्म पितामह द्वारा युधिष्ठिर को भगवान विष्णु के १००० दिव्य नामों का उपदेश।",
              badge: "सहस्रनाम",
              mantraId: "mb-13-149-1"
            }
          ]
        }
      ]
    },
    {
      id: "bhagavad-gita",
      slug: "bhagavad-gita",
      name: "श्रीमद्भगवद्गीता",
      enName: "Srimad Bhagavad Gita",
      desc: "महाभारत भीष्मपर्व (२५-४२)। निष्काम कर्मयोग, भक्तियोग, ज्ञानयोग एवं शरणागति।",
      stats: "१८ अध्याय • ७०० श्लोक",
      badge: "प्रस्थानत्रयी (स्मृति)",
      imageKey: "card-gita.jpg",
      children: [
        {
          id: "bg-ch-2",
          name: "अध्याय २: सांख्ययोग (कर्मण्येवाधिकारस्ते)",
          enName: "Chapter 2: Sankhya Yoga",
          desc: "७२ श्लोक • आत्मा की अमरता, निष्काम कर्मयोग, स्थितप्रज्ञ लक्षण।",
          stats: "७२ श्लोक",
          badge: "अध्याय",
          children: [
            {
              id: "gita-2-47",
              name: "श्लोक २.४७: कर्मण्येवाधिकारस्ते मा फलेषु कदाचन...",
              enName: "Gita 2.47 (Karmanyevadhikaraste)",
              desc: "कर्म करने में ही तुम्हारा अधिकार है, फल में कभी नहीं; न कर्मफल के हेतु बनो, न अकर्म में आसक्ति हो।",
              stats: "वक्ता: भगवान श्रीकृष्ण",
              badge: "गीता श्लोक",
              mantraId: "gita-2-47"
            }
          ]
        },
        {
          id: "bg-ch-4",
          name: "अध्याय ४: ज्ञानकर्मसंन्यासयोग (यदा यदा हि धर्मस्य)",
          enName: "Chapter 4: Jnana Yoga",
          desc: "४२ श्लोक • अवतार का दिव्य रहस्य, ज्ञानयज्ञ, निष्काम कर्म।",
          stats: "४२ श्लोक",
          badge: "अध्याय",
          children: [
            {
              id: "gita-4-7",
              name: "श्लोक ४.७: यदा यदा हि धर्मस्य ग्लानिर्भवति भारत...",
              enName: "Gita 4.7 (Yada Yada Hi Dharmasya)",
              desc: "जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं स्वयं को प्रकट करता हूँ।",
              badge: "गीता श्लोक",
              mantraId: "gita-4-7"
            }
          ]
        },
        {
          id: "bg-ch-18",
          name: "अध्याय १८: मोक्षसंन्यासयोग (सर्वधर्मान्परित्यज्य)",
          enName: "Chapter 18: Moksha Sannyasa Yoga",
          desc: "७८ श्लोक • त्याग और संन्यास, त्रिगुण भेद, चरम शरणागति महामंत्र।",
          stats: "७८ श्लोक",
          badge: "अध्याय",
          children: [
            {
              id: "gita-18-66",
              name: "श्लोक १८.६६: सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज...",
              enName: "Gita 18.66 (Charama Shloka)",
              desc: "समस्त धर्मों (उपाधियों) को त्याग कर केवल मेरी शरण में आ जाओ; मैं तुम्हें समस्त पापों से मुक्त कर दूँगा।",
              badge: "चरम श्लोक",
              mantraId: "gita-18-66"
            }
          ]
        }
      ]
    }
  ]
};

export const UPANISHAD_HIERARCHY_TREE = {
  id: "upanishad-root",
  name: "उपनिषद",
  enName: "Upanishads",
  children: [
    {
      id: "isha-upanishad",
      slug: "isha-upanishad",
      name: "ईशावास्योपनिषद्",
      enName: "Isha Upanishad",
      desc: "शुक्ल यजुर्वेद वाजसनेयि संहिता ४०वाँ अध्याय। त्यागपूर्वक भोग का सनातन संदेश।",
      stats: "१८ मंत्र • शुक्ल यजुर्वेद",
      badge: "दशोपनिषद",
      imageKey: "card-grantha-isha.jpg",
      children: [
        {
          id: "up-isha-shanti",
          name: "शांति पाठ: ॐ पूर्णमदः पूर्णमिदम्...",
          enName: "Shanti Mantra (Poornamadah)",
          desc: "वह परब्रह्म पूर्ण है, यह जगत भी पूर्ण है, पूर्ण से पूर्ण निकालने पर भी पूर्ण ही शेष रहता है।",
          badge: "शांति मंत्र",
          mantraId: "up-isha-shanti"
        },
        {
          id: "up-isha-1",
          name: "मंत्र १: ॐ ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्...",
          enName: "Isha Mantra 1",
          desc: "संपूर्ण जगत ईश्वर से व्याप्त है, अतः त्यागपूर्वक भोग करो, किसी के धन की लालसा मत करो।",
          badge: "उपनिषद मंत्र",
          mantraId: "up-isha-1"
        },
        {
          id: "up-isha-15",
          name: "मंत्र १५: हिरण्मयेन पात्रेण सत्यस्यापिहितं मुखम्...",
          enName: "Isha Mantra 15",
          desc: "सत्य का मुख स्वर्णिम पात्र से ढका है; हे पूषन्! सत्य-धर्मवान मुझको दर्शन कराने हेतु उस आवरण को हटा दीजिए।",
          badge: "उपनिषद मंत्र",
          mantraId: "up-isha-15"
        }
      ]
    },
    {
      id: "kena-upanishad",
      slug: "kena-upanishad",
      name: "केनोपनिषद्",
      enName: "Kena Upanishad",
      desc: "सामवेद तलवकार शाखा। 'केनेषितं पतति प्रेषितं मनः', यक्षोपाख्यान व उमा हैमवती संवाद।",
      stats: "४ खण्ड • ३४ मन्त्र",
      badge: "दशोपनिषद",
      imageKey: "card-grantha-chandogya.jpg",
      children: [
        {
          id: "up-kena-kh-1",
          name: "प्रथम खण्ड — प्रेरक परब्रह्म",
          enName: "Khanda 1: The Supreme Impeller",
          desc: "श्रोत्रस्य श्रोत्रं मनसो मनो यद्...",
          badge: "खण्ड",
          children: [
            {
              id: "up-kena-1",
              name: "मन्त्र १.१: केनेषितं पतति प्रेषितं मनः...",
              enName: "Kena 1.1",
              desc: "किसकी इच्छा से मन विषयों में प्रवृत्त होता है? कौन प्राण को प्रथम प्रेरित करता है?",
              badge: "मन्त्र",
              mantraId: "up-kena-1"
            }
          ]
        },
        {
          id: "up-kena-kh-3",
          name: "तृतीय खण्ड — यक्षोपाख्यान",
          enName: "Khanda 3: Yaksha Story",
          desc: "अग्नि-वायु दर्प भंजन व ब्रह्म प्राकट्य",
          badge: "आख्यान"
        }
      ]
    },
    {
      id: "katha-upanishad",
      slug: "katha-upanishad",
      name: "कठोपनिषद्",
      enName: "Katha Upanishad",
      desc: "कृष्ण यजुर्वेद काठक शाखा। यम-नचिकेता संवाद, रथ रूपक, श्रेयस्-प्रेयस् विवेक।",
      stats: "२ अध्याय • ६ वल्ली • ११९ मंत्र",
      badge: "दशोपनिषद",
      imageKey: "card-grantha-katha.jpg",
      children: [
        {
          id: "up-katha-valli-3",
          name: "प्रथमोऽध्यायः तृतीया वल्ली (रथ रूपक)",
          enName: "Chapter 1 Valli 3 (Chariot Metaphor)",
          desc: "आत्मानं रथिनं विद्धि — शरीर रथ है, बुद्धि सारथी है, मन लगाम है, इंद्रियाँ अश्व हैं।",
          badge: "वल्ली",
          children: [
            {
              id: "up-katha-1-3-14",
              name: "मंत्र १.३.१४: उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत...",
              enName: "Katha 1.3.14 (Arise, Awake)",
              desc: "उठो! जागो! और श्रेष्ठ ज्ञानियों के समीप जाकर आत्मतत्व को जानो। छुरे की धार के समान यह मार्ग अत्यंत दुर्गम है।",
              badge: "उपनिषद मंत्र",
              mantraId: "up-katha-1-3-14"
            }
          ]
        }
      ]
    },
    {
      id: "prashna-upanishad",
      slug: "prashna-upanishad",
      name: "प्रश्नोपनिषद्",
      enName: "Prashna Upanishad",
      desc: "अथर्ववेद पिप्पलाद शाखा। ६ ऋषियों के ६ गूढ़ प्रश्न।",
      stats: "६ प्रश्न • ६७ मन्त्र",
      badge: "दशोपनिषद",
      imageKey: "card-grantha-mundaka.jpg",
      children: [
        {
          id: "up-prashna-kh-1",
          name: "प्रथम प्रश्न — कबन्धी कात्य प्रश्न (प्राण-रयि रहस्य)",
          enName: "Question 1: Prana and Rayi",
          desc: "भगवन्! कुतो ह वा इमाः प्रजाः प्रजायन्त इति — प्रजाएँ कहाँ से उत्पन्न होती हैं?",
          badge: "प्रश्न",
          children: [
            {
              id: "up-prashna-1-1",
              name: "मन्त्र १.१: ॐ सुकेशा च भारद्वाजः शैब्यश्च सत्यकामः...",
              enName: "Prashna 1.1",
              desc: "छह मुनि समिधा हाथ में लेकर महर्षि पिप्पलाद के पास ब्रह्म-जिज्ञासा लेकर पहुँचे।",
              badge: "मन्त्र",
              mantraId: "up-prashna-1-1"
            }
          ]
        }
      ]
    },
    {
      id: "mundaka-upanishad",
      slug: "mundaka-upanishad",
      name: "मुण्डकोपनिषद्",
      enName: "Mundaka Upanishad",
      desc: "अथर्ववेद। परा व अपरा विद्या, दो पक्षियों का रूपक, 'सत्यमेव जयते'।",
      stats: "३ मुण्डक • ६ खंड • ६४ मंत्र",
      badge: "दशोपनिषद",
      imageKey: "card-grantha-mundaka.jpg",
      children: [
        {
          id: "up-mundaka-3-1-6",
          name: "मुण्डक ३.१.६: सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः...",
          enName: "Mundaka (Satyameva Jayate)",
          desc: "सत्य की ही जय होती है, असत्य की नहीं; सत्य के द्वारा ही वह देवयान मार्ग प्रशस्त होता है।",
          badge: "राष्ट्रीय आदर्श",
          mantraId: "up-mundaka-3-1-6"
        }
      ]
    },
    {
      id: "mandukya-upanishad",
      slug: "mandukya-upanishad",
      name: "माण्डूक्योपनिषद्",
      enName: "Mandukya Upanishad",
      desc: "अथर्ववेद। ॐकार की ४ मात्राएँ और चेतना की ४ अवस्थाएँ (जाग्रत, स्वप्न, सुषुप्ति, तुरीय)।",
      stats: "१२ मंत्र • 'अयमात्मा ब्रह्म'",
      badge: "दशोपनिषद",
      imageKey: "card-grantha-mandukya.jpg",
      children: [
        {
          id: "up-mandukya-1",
          name: "मंत्र १-२: ॐ इत्येतदक्षरमिदं सर्वम्... सर्वं ह्येतद् ब्रह्म अयमात्मा ब्रह्म",
          enName: "Mandukya 1-2 (Ayam Atma Brahma)",
          desc: "ॐकार ही सब कुछ है; यह संपूर्ण जगत ब्रह्म है और यह अंतःकरणस्थ आत्मा भी ब्रह्म ही है।",
          badge: "महावाक्य मंत्र",
          mantraId: "up-mandukya-1"
        },
        {
          id: "up-mandukya-7",
          name: "मंत्र ७: नान्तःप्रज्ञं न बहिष्प्रज्ञं... प्रपञ्चोपशमं शान्तं शिवमद्वैतं चतुर्थं...",
          enName: "Mandukya 7 (Turiya)",
          desc: "तुरीय (चतुर्थ) पाद: शांत, मंगलमय, अद्वैत, समस्त प्रपंच से परे आत्मस्वरूप।",
          badge: "तुरीय मंत्र",
          mantraId: "up-mandukya-7"
        }
      ]
    },
    {
      id: "taittiriya-upanishad",
      slug: "taittiriya-upanishad",
      name: "तैत्तिरीयोपनिषद्",
      enName: "Taittiriya Upanishad",
      desc: "कृष्ण यजुर्वेद। शिक्षावल्ली, ब्रह्मानन्दवल्ली, भृगुवल्ली। पंचकोश विवेक।",
      stats: "३ वल्लियाँ • ३१ अनुवाक",
      badge: "दशोपनिषद",
      imageKey: "card-upanishad.jpg",
      children: [
        {
          id: "up-tait-shiksha",
          name: "शिक्षावल्ली — सदाचार व दीक्षान्त उपदेश",
          enName: "Shikshavalli",
          desc: "सत्यं वद। धर्मं चर। स्वाध्यायान्मा प्रमदः।",
          badge: "वल्ली",
          children: [
            {
              id: "up-tait-1-11",
              name: "अनुवाक १.११: दीक्षान्त उपदेश",
              enName: "Taittiriya 1.11",
              desc: "मातृदेवो भव। पितृदेवो भव। आचार्यदेवो भव।",
              badge: "महावाक्य",
              mantraId: "up-tait-1-11"
            }
          ]
        }
      ]
    },
    {
      id: "aitareya-upanishad",
      slug: "aitareya-upanishad",
      name: "ऐतरेयोपनिषद्",
      enName: "Aitareya Upanishad",
      desc: "ऋग्वेद। 'प्रज्ञानं ब्रह्म' महावाक्य।",
      stats: "३ अध्याय • ५ खण्ड • ३३ मन्त्र",
      badge: "दशोपनिषद",
      imageKey: "card-grantha-aitareya.jpg",
      children: [
        {
          id: "up-ait-3-1-3",
          name: "अध्याय ३.१.३: प्रज्ञानं ब्रह्म",
          enName: "Aitareya (Prajnanam Brahma)",
          desc: "सर्वं तत्प्रज्ञानेत्रं प्रज्ञाने प्रतिष्ठितं प्रज्ञानेत्रो लोकः प्रज्ञा प्रतिष्ठा प्रज्ञानं ब्रह्म।",
          badge: "महावाक्य",
          mantraId: "up-ait-3-1-3"
        }
      ]
    },
    {
      id: "chandogya-upanishad",
      slug: "chandogya-upanishad",
      name: "छान्दोग्योपनिषद्",
      enName: "Chandogya Upanishad",
      desc: "सामवेद। उद्दालक-श्वेतकेतु संवाद, 'तत्त्वमसि' महावाक्य, शांडिल्य विद्या।",
      stats: "८ प्रपाठक • सामवेद",
      badge: "दशोपनिषद",
      imageKey: "card-grantha-chandogya.jpg",
      children: [
        {
          id: "up-chandogya-6-8-7",
          name: "प्रपाठक ६.८.७: स य एषोऽणिमैतदात्म्यमिदं सर्वं तत्सत्यं स आत्मा तत्त्वमसि श्वेतकेतो",
          enName: "Chandogya (Tat Tvam Asi)",
          desc: "यह संपूर्ण जगत सूक्ष्म आत्मतत्व से ओतप्रोत है; वही सत्य है, वही आत्मा है, और हे श्वेतकेतु! वह तुम ही हो।",
          badge: "महावाक्य",
          mantraId: "up-chandogya-6-8-7"
        }
      ]
    },
    {
      id: "brihadaranyaka-upanishad",
      slug: "brihadaranyaka-upanishad",
      name: "बृहदारण्यकोपनिषद्",
      enName: "Brihadaranyaka Upanishad",
      desc: "शुक्ल यजुर्वेद। याज्ञवल्क्य-मैत्रेयी संवाद, गार्गी संवाद, 'अहं ब्रह्मास्मि', नेति-नेति।",
      stats: "६ अध्याय • ४७ ब्राह्मण",
      badge: "दशोपनिषद",
      imageKey: "card-grantha-brihadaranyaka.jpg",
      children: [
        {
          id: "up-brihad-1-4-10",
          name: "अध्याय १.४.१०: ब्रह्म वा इदमग्र आसीत्... तस्मात् तत्सर्वमभवत्... अहं ब्रह्मास्मि",
          enName: "Brihadaranyaka (Aham Brahmasmi)",
          desc: "प्रारंभ में यह केवल ब्रह्म ही था; उसने स्वयं को जाना कि 'मैं ब्रह्म हूँ', अतः वह सर्वस्वरूप हो गया।",
          badge: "महावाक्य",
          mantraId: "up-brihad-1-4-10"
        }
      ]
    },
    {
      id: "shvetashvatara-upanishad",
      slug: "shvetashvatara-upanishad",
      name: "श्वेताश्वतरोपनिषद्",
      enName: "Shvetashvatara Upanishad",
      desc: "कृष्ण यजुर्वेद। 'वेदाहमेतं पुरुषं महान्तम्'।",
      stats: "६ अध्याय • ११३ मन्त्र",
      badge: "उपनिषद",
      imageKey: "card-upanishad.jpg",
      children: [
        {
          id: "up-shvet-ch-3",
          name: "तृतीयोऽध्यायः — परब्रह्म रुद्र व पुरुषसूक्त भाव",
          enName: "Chapter 3: The Supreme Purusha",
          desc: "सर्वाननशिरोग्रीवः सर्वभूतगुहाशयः... वेदाहमेतं पुरुषं महान्तम्।",
          badge: "अध्याय",
          children: [
            {
              id: "up-shvet-3-8",
              name: "मन्त्र ३.८: वेदाहमेतं पुरुषं महान्तमादित्यवर्णं तमसः परस्तात्...",
              enName: "Shvetashvatara 3.8",
              desc: "मैं अज्ञानांधकार से परे सूर्य के समान प्रकाशमान उस महान पुरुष को जानता हूँ; उसी को जानकर मृत्यु का अतिक्रमण किया जा सकता है।",
              badge: "महामंत्र",
              mantraId: "up-shvet-3-8"
            }
          ]
        }
      ]
    }
  ]
};


export const DARSHANA_HIERARCHY_TREE = {
  id: "darshana-root",
  name: "दर्शन शास्त्र",
  enName: "Shad Darshanas",
  children: [
    {
      id: "yoga",
      slug: "yoga",
      name: "योग दर्शन",
      enName: "Yoga Darshana",
      desc: "महर्षि पतंजलि प्रणीत पातंजल योगसूत्र। 'योगश्चित्तवृत्तिनिरोधः'।",
      stats: "४ पाद • १९६ सूत्र",
      badge: "षड्दर्शन",
      imageKey: "card-aranyaka.jpg",
      children: [
        {
          id: "ys-pada-1",
          name: "१. समाधि पाद (५१ सूत्र)",
          enName: "Samadhi Pada",
          desc: "योग की परिभाषा, ५ चित्तवृत्तियाँ, अभ्यास-वैराग्य, ईश्वरप्रणिधान, संप्रज्ञात-असंप्रज्ञात समाधि।",
          stats: "५१ सूत्र",
          badge: "पाद",
          children: [
            {
              id: "ys-1-1",
              name: "सूत्र १.१: अथ योगानुशासनम्",
              enName: "Yoga Sutra 1.1",
              desc: "अब योग के अनुशासन का प्रारंभ होता है।",
              badge: "योगसूत्र",
              mantraId: "ys-1-1"
            },
            {
              id: "ys-1-2",
              name: "सूत्र १.२: योगश्चित्तवृत्तिनिरोधः",
              enName: "Yoga Sutra 1.2 (Definition)",
              desc: "चित्त की वृत्तियों का पूर्ण निरोध (शांत होना) ही योग है।",
              badge: "योगसूत्र",
              mantraId: "ys-1-2"
            },
            {
              id: "ys-1-3",
              name: "सूत्र १.३: तदा द्रष्टुः स्वरूपेऽवस्थानम्",
              enName: "Yoga Sutra 1.3",
              desc: "तब (वृत्तियों के शांत होने पर) दृष्टा (आत्मा) अपने वास्तविक स्वरूप में प्रतिष्ठित हो जाता है।",
              badge: "योगसूत्र",
              mantraId: "ys-1-3"
            }
          ]
        },
        {
          id: "ys-pada-2",
          name: "२. साधना पाद (५५ सूत्र)",
          enName: "Sadhana Pada (Ashtanga Yoga)",
          desc: "क्रियायोग, ५ क्लेश, कर्मविपाक, अष्टांग योग (यम, नियम, आसन, प्राणायाम, प्रत्याहार)।",
          stats: "५५ सूत्र",
          badge: "पाद",
          children: [
            {
              id: "ys-2-29",
              name: "सूत्र २.२९: यमनियमासनप्राणायामप्रत्याहारधारणाध्यानसमाधयोऽष्टावङ्गानि",
              enName: "Ashtanga Yoga (8 Limbs)",
              desc: "यम, नियम, आसन, प्राणायाम, प्रत्याहार, धारणा, ध्यान और समाधि — ये योग के आठ अंग हैं।",
              badge: "अष्टांग योग",
              mantraId: "ys-2-29"
            }
          ]
        }
      ]
    },
    {
      id: "samkhya",
      slug: "samkhya",
      name: "सांख्य दर्शन",
      enName: "Samkhya Darshana",
      desc: "महर्षि कपिल प्रणीत सांख्यकारिका (ईश्वरकृष्ण)। २५ तत्व, त्रिगुण, सत्कार्यवाद।",
      stats: "२५ तत्व • ७२ कारिकाएँ",
      badge: "षड्दर्शन",
      imageKey: "card-samhita.jpg",
      children: [
        {
          id: "sk-1",
          name: "कारिका १: दुःखत्रयाभिघाताज्जिज्ञासा तदपघातके हेतौ...",
          enName: "Samkhya Karika 1",
          desc: "त्रिविध दुःखों (आध्यात्मिक, आधिभौतिक, आधिदैविक) के आत्यंतिक निवारण हेतु तत्व जिज्ञासा।",
          badge: "सांख्य कारिका",
          mantraId: "sk-1"
        },
        {
          id: "sk-9",
          name: "कारिका ९: असदकरणादुपादानग्रहणात् सर्वसंभवाभावात्...",
          enName: "Satkaryavada (Karika 9)",
          desc: "सत्कार्यवाद सिद्धि — कार्य अपनी उत्पत्ति से पूर्व उपादान कारण में सत् रूप से विद्यमान रहता है।",
          badge: "सत्कार्यवाद",
          mantraId: "sk-9"
        }
      ]
    },
    {
      id: "nyaya",
      slug: "nyaya",
      name: "न्याय दर्शन",
      enName: "Nyaya Darshana",
      desc: "महर्षि अक्षपाद गौतम प्रणीत न्यायसूत्र। १६ पदार्थ, ४ प्रमाण, पञ्चावयव अनुमान।",
      stats: "५ अध्याय • १६ पदार्थ",
      badge: "षड्दर्शन",
      imageKey: "card-vyakarana.jpg",
      children: [
        {
          id: "ns-1-1-1",
          name: "सूत्र १.१.१: प्रमाणप्रमेयसंशयप्रयोजनदृष्टान्तसिद्धान्तावयवतर्कनिर्णय...",
          enName: "Nyaya Sutra 1.1.1 (16 Padarthas)",
          desc: "१६ पदार्थों के सम्यक् तत्वज्ञान से निःश्रेयस (मोक्ष) की प्राप्ति होती है।",
          badge: "न्यायसूत्र",
          mantraId: "ns-1-1-1"
        }
      ]
    },
    {
      id: "vedanta",
      slug: "vedanta",
      name: "वेदांत दर्शन",
      enName: "Vedanta Darshana",
      desc: "महर्षि बादरायण व्यास प्रणीत ब्रह्मसूत्र। प्रस्थानत्रयी (न्याय प्रस्थान), अद्वैत आदि संप्रदाय।",
      stats: "४ अध्याय • ५५५ सूत्र",
      badge: "षड्दर्शन",
      imageKey: "card-upanishad.jpg",
      children: [
        {
          id: "bs-1-1-1",
          name: "सूत्र १.१.१: अथातो ब्रह्मजिज्ञासा",
          enName: "Brahma Sutra 1.1.1",
          desc: "अब धर्म-कर्म के अनित्य फलों को देखने के उपरांत अविनाशी परब्रह्म को जानने की जिज्ञासा प्रारंभ होती है।",
          badge: "ब्रह्मसूत्र",
          mantraId: "bs-1-1-1"
        },
        {
          id: "bs-1-1-2",
          name: "सूत्र १.१.२: जन्माद्यस्य यतः",
          enName: "Brahma Sutra 1.1.2",
          desc: "जिससे इस समस्त जगत की उत्पत्ति, स्थिति और प्रलय होते हैं, वही परब्रह्म है।",
          badge: "ब्रह्मसूत्र",
          mantraId: "bs-1-1-2"
        }
      ]
    }
  ]
};

export const ALL_CATEGORY_HIERARCHY_TREES = {
  purana: PURANA_HIERARCHY_TREE,
  itihasa: ITIHASA_HIERARCHY_TREE,
  upanishad: UPANISHAD_HIERARCHY_TREE,
  darshana: DARSHANA_HIERARCHY_TREE
};
