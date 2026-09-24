import cardPujaImg from "../assets/images/library/cards/card-puja.jpg";
import cardRigvedaImg from "../assets/images/library/cards/card-rigveda.jpg";
import cardGitaImg from "../assets/images/library/cards/card-gita.jpg";
import cardAstrologyImg from "../assets/images/library/cards/card-astrology.jpg";
import cardVastuImg from "../assets/images/library/cards/card-vastu.jpg";
import cardAtharvavedaImg from "../assets/images/library/cards/card-atharvaveda.jpg";
import bannerFireRitualImg from "../assets/images/library/banners/banner-fire-ritual.png";
import bannerTemleHeroImg from "../assets/images/library/banners/banner-temple-hero.jpg";

export const FALLBACK_BLOG_CATEGORIES = [
  { category: "All", count: 6 },
  { category: "Puja & Rituals", count: 2 },
  { category: "Vedic Astrology", count: 1 },
  { category: "Mantras & Stotrams", count: 1 },
  { category: "Vastu Shastra", count: 1 },
  { category: "Ayurveda & Health", count: 1 },
  { category: "Spirituality & Meditation", count: 1 },
];

export const FALLBACK_BLOGS = [
  {
    id: "blog-1",
    slug: "shri-rudram-significance-sacred-benefits",
    title: "The Esoteric Significance and Spiritual Benefits of Shri Rudram",
    titleHi: "श्रीरुद्रम्: आध्यात्मिक रहस्य, उत्पत्ति एवं पावन फल",
    subtitle: "A deep dive into the Krishna Yajurveda's timeless hymn to Rudra-Shiva",
    subtitleHi: "कृष्ण यजुर्वेद के अमर रुद्राध्याय का शास्त्रीय एवं प्रायोगिक विश्लेषण",
    excerpt: "Explore the supreme Vedic chant found in the Taittiriya Samhita of Yajurveda, invoking the cosmic and all-pervading energy of Lord Shiva through Namakam and Chamakam.",
    excerptHi: "यजुर्वेद की तैत्तिरीय संहिता में वर्णित श्रीरुद्रम् की महिमा, नमकम्-चमकम् के गूढ़ मंत्रों का अर्थ तथा इसके पाठ से प्राप्त होने वाली आधिदैविक व आत्मिक शांति का विस्तृत विवरण।",
    category: "Puja & Rituals",
    author: "Dr. Acharya Vidyadhar",
    authorAvatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80",
    featuredImage: bannerFireRitualImg,
    tags: ["Lord Shiva", "Rudrabhishek", "Krishna Yajurveda", "Mantra Sadhana", "Puja & Rituals"],
    readTime: "7 min read",
    viewsCount: 1420,
    isFeatured: true,
    publishedAt: "2026-03-15T00:00:00.000Z",
    createdAt: "2026-03-15T00:00:00.000Z",
    content: `## The Majesty of Shri Rudram

Shri Rudram (also known as *Rudradhyaya* or *Shatarudriya*) is one of the most venerable and sacred portions of the **Krishna Yajurveda** (Taittiriya Samhita, 4th Kanda, 5th Prapathaka). It holds a central position in Vedic ritualism, especially in the performance of *Maha Rudrabhishekam* and *Atirudra Mahayajna*.

### Structure of the Text
Shri Rudram is traditionally composed of two vital sections:
1. **Namakam (नमकम्):** Comprising 11 *Anuvakas* (sections), this hymn glorifies the supreme reality in every conceivable aspect of existence—from the tranquil hermit to the roaring thunder, affirming that divinity permeates both the sublime and the fierce forces of the cosmos.
2. **Chamakam (चमकम्):** Following the Namakam, the 11 Anuvakas of Chamakam invoke divine grace for both spiritual liberation (*Moksha*) and material well-being (*Bhoga*), with the recurring Sanskrit phrase *"Cha me"* ("and to me may this be granted").

---

### Sacred Mantra from Anuvaka 1
> **नमस्ते रुद्र मन्यव उतो त इषवे नमः।**  
> **नमस्ते अस्तु धन्वने बाहुभ्यामुत ते नमः॥**  
> *(यजुर्वेद तैत्तिरीय संहिता ४.५.१)*  
> 
> *Salutations to your wrath, O Lord Rudra, and obeisance to your arrow. Salutations to your sacred bow, and to both your divine arms!*

---

### Key Spiritual & Karmic Benefits
- **Purification of Karmic Imprints:** According to the *Shiva Purana*, continuous recitation of the Rudradhyaya burns away accumulated sins of lifetimes.
- **Mental Peace & Harmony:** The vibrational frequency of the Vedic *Swaras* (Udatta, Anudatta, Svarita) calms the neurological system and balances the Vata-Pitta-Kapha doshas.
- **Planetary Affliction Relief:** Special pacification for malefic Rahu, Ketu, and Saturn (Shani Sade Sati) transits.`,
    contentHi: `## श्रीरुद्रम् की दिव्यता एवं महत्त्व

श्रीरुद्रम् (जिसे **रुद्राध्याय** या **शतरुद्रीय** भी कहा जाता है) कृष्ण यजुर्वेद की तैत्तिरीय संहिता के चतुर्थ काण्ड का एक परम पावन भाग है। सनातन परंपरा में भगवान शिव के रुद्र स्वरूप की आराधना तथा रुद्राभिषेक में इसका सर्वोपरि स्थान है।

### ग्रंथ की संरचना
श्रीरुद्रम् दो मुख्य भागों में विभक्त है:
1. **नमकम् (Namakam):** इसमें ११ अनुवाक हैं, जिनमें 'नमो नमः' के उद्घोष के साथ चराचर जगत में व्याप्त ईश्वर के अनन्त रूपों को नमन किया गया है।
2. **चमकम् (Chamakam):** इसमें भी ११ अनुवाक हैं, जिनमें 'च मे' (और मुझे प्राप्त हो) की प्रार्थना के साथ लौकिक समृद्धि एवं पारलौकिक मोक्ष की याचना की गई है।

---

### मूल वैदिक मंत्र
> **नमस्ते रुद्र मन्यव उतो त इषवे नमः।**  
> **नमस्ते अस्तु धन्वने बाहुभ्यामुत ते नमः॥**  
> *(यजुर्वेद तैत्तिरीय संहिता ४.५.१)*  
>
> *भावार्थ: हे रुद्र! आपके क्रोध को नमस्कार है, आपके बाण को प्रणाम है। आपके दिव्य धनुष और आपकी दोनों भुजाओं को बारंबार नमन है।*

---

### पाठ के प्रमुख लाभ
- **संस्कार शुद्धि एवं पाप निवारण:** रुद्र पाठ से समस्त आधिभौतिक, आधिदैविक एवं आध्यात्मिक तापों का शमन होता है।
- **मनोबल एवं एकाग्रता:** वैदिक स्वरों की ध्वनि तरंगे मन को असीम शांति एवं ध्यान की उच्च अवस्था प्रदान करती हैं।
- **ग्रहदोष शांति:** राहु-केतु एवं शनि की महादशा में रुद्राभिषेक अत्यंत कल्याणकारी माना गया है।`
  },
  {
    id: "blog-2",
    slug: "navagraha-shanti-vedic-astrology-remedies",
    title: "Navagraha Shanti: Vedic Astrological Remedies & Cosmic Alignment",
    titleHi: "नवग्रह शांति: वैदिक ज्योतिष के उपाय एवं ब्रह्मांडीय ऊर्जा संतुलन",
    subtitle: "Understanding how planetary energies influence human destiny and methods of pacification",
    subtitleHi: "कुंडली में नवग्रहों का प्रभाव, बीज मंत्र एवं शास्त्रीय उपाय",
    excerpt: "Learn how ancient sages developed systematic homas, stotras, and gemstones to harmonize the subtle planetary radiations affecting body and mind.",
    excerptHi: "वैदिक ज्योतिष के अनुसार नवग्रहों की अनुकूलता जीवन में सुख, शांति एवं समृद्धि का आधार है। जानिए सूर्य से लेकर केतु तक के विशेष अनुष्ठान और मंत्र।",
    category: "Vedic Astrology",
    author: "Pt. Radheshyam Shastri",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    featuredImage: cardAstrologyImg,
    tags: ["Vedic Astrology", "Navgrah", "Kundali Dosha", "Grah Shanti", "Sanatan Dharma"],
    readTime: "6 min read",
    viewsCount: 980,
    isFeatured: false,
    publishedAt: "2026-03-12T00:00:00.000Z",
    createdAt: "2026-03-12T00:00:00.000Z",
    content: `## The Cosmic Influence of Navagrahas

In Vedic Jyotisha, the nine celestial bodies—Surya, Chandra, Mangala, Budha, Guru, Shukra, Shani, Rahu, and Ketu—are not mere physical masses in space, but conscious cosmic agents (*Grahas* meaning 'those that grasp or hold') delivering the fruits of past karmas (*Prarabdha*).

### The Navagraha Vedic Invocation
> **ब्रह्मामुरारिस्त्रिपुरान्तकारी भानुः शशी भूमिसुतो बुधश्च।**  
> **गुरुश्च शुक्रः शनिराहुकेतवः कुर्वन्तु सर्वे मम सुप्रभातम्॥**  
> 
> *May Brahma, Vishnu, Shiva, the Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu grant auspiciousness to my morning.*

### The Three Pillars of Graha Shanti
1. **Mantra Japa:** Chanting the authentic Vedic or Tantric Beej mantras for specific planetary deities during their respective hora/day.
2. **Dana (Charity):** Donating items corresponding to the planet (e.g., wheat and copper for Surya, sesame seeds and iron for Shani).
3. **Yajna & Homa:** Conducting Navagraha Homa with prescribed sacred woods (*Samidha* like Arka for Sun, Palasha for Moon, Khadira for Mars).`,
    contentHi: `## नवग्रहों का ब्रह्मांडीय प्रभाव

वैदिक ज्योतिष में नवग्रह केवल खगोलीय पिंड नहीं हैं, अपितु वे कर्मफल के अधिष्ठाता देव हैं जो हमारे संचित कर्मों के अनुसार सुख-दुःख का विधान करते हैं।

### नवग्रह प्रातः स्मरण श्लोक
> **ब्रह्मामुरारिस्त्रिपुरान्तकारी भानुः शशी भूमिसुतो बुधश्च।**  
> **गुरुश्च शुक्रः शनिराहुकेतवः कुर्वन्तु सर्वे मम सुप्रभातम्॥**  

### नवग्रह शांति के तीन मुख्य स्तंभ
1. **मंत्र जप:** संबंधित ग्रह के वैदिक या बीज मंत्र का निश्चित संख्या में जप।
2. **दान:** संबंधित वस्तुओं (जैसे सूर्य के लिए गेहूं-तांबा, शनि के लिए तिल-लोहा) का सुपात्र को दान।
3. **हवन:** विशिष्ट समिधाओं (अर्क, पलाश, खदिर, अपामार्ग आदि) द्वारा नवग्रह आहुति।`
  },
  {
    id: "blog-3",
    slug: "gayatri-mantra-science-of-sound-vibration",
    title: "Gayatri Mantra: The Supreme Science of Sound, Light, and Consciousness",
    titleHi: "गायत्री महामंत्र: ध्वनि, प्रकाश एवं चेतना का दिव्य विज्ञान",
    subtitle: "Decoding the 24 syllables of the Rigvedic mother of all mantras",
    subtitleHi: "ऋग्वेद के अमर मंत्र के २४ अक्षरों का वैज्ञानिक एवं यौगिक रहस्य",
    excerpt: "Discovered by Maharshi Vishwamitra in Rigveda Mandala 3, the Gayatri Mantra is an unmatched sonic formula that awakens the higher intellect (Dhi).",
    excerptHi: "ऋग्वेद के तृतीय मण्डल में प्रकट गायत्री महामंत्र के २४ अक्षरों में सम्पूर्ण वेदों का सार समाहित है। जानिए इसकी साधना विधि और आध्यात्मिक प्रभाव।",
    category: "Mantras & Stotrams",
    author: "Dr. Acharya Vidyadhar",
    authorAvatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&auto=format&fit=crop&q=80",
    featuredImage: cardRigvedaImg,
    tags: ["Mantras", "Rigveda", "Daily Sadhana", "Meditation", "Spiritual Rituals"],
    readTime: "8 min read",
    viewsCount: 2150,
    isFeatured: true,
    publishedAt: "2026-03-10T00:00:00.000Z",
    createdAt: "2026-03-10T00:00:00.000Z",
    content: `## The Crown Jewel of Vedic Revelation

The Gayatri Mantra appears in the **Rigveda (3.62.10)** and is dedicated to **Savitr**, the solar deity symbolizing the source of supreme illumination, life, and cosmic consciousness.

### The Sacred Text
> **ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥**  
> *(ऋग्वेद ३.६२.१०)*  
>
> *"We meditate upon the supreme adorable effulgence of the divine Sun (Creator); may that Divine Light inspire, guide, and illuminate our intellect."*

### The 24 Syllables and the 24 Energy Centers
Ancient masters identified that the 24 syllables of the Gayatri correspond precisely to 24 glandular plexuses (*Chakras and Granthis*) in the subtle human body. When articulated with proper *Uchcharana* (phonetic precision), it activates pineal and pituitary secretions, enhancing memory, mental clarity, and spiritual intuition.`,
    contentHi: `## वेदों का मुकुटमणि: गायत्री महामंत्र

ऋग्वेद के तृतीय मण्डल (३.६२.१०) में महर्षि विश्वामित्र द्वारा दृष्ट यह मंत्र सविता देवता (सृष्टि के प्रेरक एवं प्रकाशक) को समर्पित है।

### मूल मंत्र
> **ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥**  

### २४ अक्षरों का यौगिक विज्ञान
गायत्री मंत्र के २४ अक्षर मानव शरीर की २४ प्रमुख ग्रंथियों एवं शक्ति केन्द्रों से जुड़े हैं। इसका नियमित जप बुद्धि को तेजस्वी एवं अंतःकरण को शुद्ध करता है।`
  },
  {
    id: "blog-4",
    slug: "vastu-purusha-mandala-sacred-geometry-in-architecture",
    title: "Vastu Purusha Mandala: The Cosmic Geometry of Sacred Architecture",
    titleHi: "वास्तु पुरुष मण्डल: प्राचीन भारतीय स्थापत्य की पवित्र ज्यामिति",
    subtitle: "Harmonizing living spaces with the fundamental forces of nature",
    subtitleHi: "भवन निर्माण में पंचमहाभूत एवं अष्टदिक्पालों का ऊर्जा संतुलन",
    excerpt: "Discover the mathematical grid system that bridges the macrocosmic universe and the microcosmic home, fostering peace and prosperity.",
    excerptHi: "वास्तुशास्त्र के अनुसार घर अथवा भवन केवल ईंट-पत्थर का ढांचा नहीं, बल्कि एक जीवंत ऊर्जा क्षेत्र है। जानिए ईशान कोण, ब्रह्मस्थान और नैऋत्य कोण का महत्त्व।",
    category: "Vastu Shastra",
    author: "Er. Vastu Visharad Suresh",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    featuredImage: cardVastuImg,
    tags: ["Vastu Tips", "Vastu Shastra", "Peace & Prosperity", "Sanatan Dharma"],
    readTime: "5 min read",
    viewsCount: 810,
    isFeatured: false,
    publishedAt: "2026-03-08T00:00:00.000Z",
    createdAt: "2026-03-08T00:00:00.000Z",
    content: `## The Philosophy of Living in Harmony with Nature

Vastu Shastra is the traditional Indian science of architecture and spatial design rooted in the *Atharvaveda* and *Sthapatya Veda*. At the core of this discipline lies the **Vastu Purusha Mandala**—a metaphysical square grid representing cosmic man embedded in the earth.

### The Key Orientations
- **Brahmasthan (Center):** Must remain open and free of heavy loads to permit etheric energy flow.
- **Ishanya (North-East / Water):** Dedicated to prayer, meditation, and pure water sources.
- **Agneya (South-East / Fire):** The ideal placement for kitchens, fire altars, and electrical hubs.
- **Nairritya (South-West / Earth):** Heavy master bedrooms ensuring stability and strength.
- **Vayavya (North-West / Air):** Guest rooms, movement, and airflow management.`,
    contentHi: `## प्रकृति के साथ सामंजस्य का विज्ञान

वास्तुशास्त्र अथर्ववेद के उपवेद स्थापत्य वेद से उद्भूत स्थापत्य विज्ञान है। इसका आधार **वास्तु पुरुष मण्डल** है जो दिशाओं और पंचतत्वों (भूमि, जल, अग्नि, वायु, आकाश) के संतुलन को दर्शाता है।

### प्रमुख दिशाओं का महत्व
- **ब्रह्मस्थान (केन्द्र):** सदैव खुला एवं भारमुक्त होना चाहिए।
- **ईशान कोण (उत्तर-पूर्व):** पूजा कक्ष एवं ध्यान के लिए सर्वश्रेष्ठ।
- **आग्नेय कोण (दक्षिण-पूर्व):** रसोई एवं अग्नि तत्वों का स्थान।
- **नैऋत्य कोण (दक्षिण-पश्चिम):** गृहस्वामी का शयनकक्ष एवं स्थिरता का क्षेत्र।`
  },
  {
    id: "blog-5",
    slug: "ayurvedic-dinacharya-daily-rituals-vitality-ojas",
    title: "Ayurvedic Dinacharya: Daily Sacred Rituals for Vitality and Ojas",
    titleHi: "आयुर्वेदिक दिनचर्या: दीर्घायु, ओजस एवं आरोग्य के नित्य नियम",
    subtitle: "Aligning daily biological clocks with circardian Vedic rhythms",
    subtitleHi: "ब्रह्ममुहूर्त जागरण से लेकर रात्रि शयन तक का शास्त्रीय स्वास्थ्य विधान",
    excerpt: "Charaka and Sushruta Samhitas outline a timeless lifestyle blueprint that synchronizes bodily doshas with the natural cycle of the sun.",
    excerptHi: "चरक एवं सुश्रुत संहिता के अनुसार दैनिक जीवनचर्या का पालन करने से रोग प्रतिरोधक क्षमता (ओजस) बढ़ती है और शरीर सदा ऊर्जावान रहता है।",
    category: "Ayurveda & Health",
    author: "Vaidya Ananya Sharma",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    featuredImage: bannerTemleHeroImg,
    tags: ["Ayurveda", "Daily Sadhana", "Peace & Prosperity", "Spirituality & Meditation"],
    readTime: "6 min read",
    viewsCount: 1120,
    isFeatured: false,
    publishedAt: "2026-03-05T00:00:00.000Z",
    createdAt: "2026-03-05T00:00:00.000Z",
    content: `## The Ancient Science of Longevity (Ayurveda)

In classical Ayurvedic texts like the *Ashtanga Hridaya*, health is defined not merely as the absence of illness, but as a state of vibrant sensory, mental, and spiritual bliss (*Prasannatmendriyamana*).

### The Sequence of Dinacharya
1. **Brahma Muhurta Jagaran:** Waking up roughly 96 minutes before sunrise when the atmosphere is rich in sattvic prana.
2. **Ushapan:** Drinking warm water stored in a copper vessel to stimulate peristalsis.
3. **Danta Dhavana & Jihva Nirlekhana:** Cleansing teeth with bitter/astringent twigs and scraping the tongue to remove toxins (*Ama*).
4. **Abhyanga:** Self-massage with warm sesame or mustard oil to nourish the tissues (*Dhatus*) and calm Vata.
5. **Pranayama & Dhyana:** Breath control and meditation to center the mind.`,
    contentHi: `## आयुर्वेदीय दिनचर्या का स्वर्णिम नियम

अष्टांग हृदय एवं चरक संहिता के अनुसार दिनचर्या का पालन करने से त्रिदोष (वात, पित्त, कफ) संतुलित रहते हैं और दीर्घायु की प्राप्ति होती है।

### दिनचर्या के प्रमुख चरण
1. **ब्रह्ममुहूर्त में जागरण:** सूर्योदय से पूर्व उठना सात्विक ऊर्जा के लिए आवश्यक है।
2. **उषापान:** तांबे के पात्र में रखे जल का सेवन।
3. **दंतधावन एवं जिह्वा निर्लेखन:** मुख शुद्धि एवं आमा (विषाक्त तत्वों) का निष्कासन।
4. **अभ्यंग:** तिल अथवा सरसों के तेल से शरीर की मालिश।
5. **प्राणायाम एवं ध्यान:** मानसिक शांति एवं ऊर्जा संवर्धन।`
  },
  {
    id: "blog-6",
    slug: "mahamrityunjaya-mantra-healing-liberation",
    title: "Mahamrityunjaya Mantra: The Great Death-Conquering Healing Chant",
    titleHi: "महामृत्युंजय मंत्र: मृत्युंजय शिव का जीवन-रक्षक एवं मोक्ष-प्रदायक महामंत्र",
    subtitle: "The profound medicine for fear of death, illnesses, and spiritual bondage",
    subtitleHi: "ऋग्वेद एवं यजुर्वेद का अमर मंत्र: अर्थ, अनुष्ठान विधि एवं कल्याणकारी प्रभाव",
    excerpt: "Revealed to Sage Markandeya, this potent mantra from the Rigveda rejuvenates cellular vitality and awakens the immortal consciousness within.",
    excerptHi: "भगवान शिव के त्र्यंबक स्वरूप की वंदना करने वाला यह महामंत्र अकाल मृत्यु के भय को मिटाकर मोक्ष का मार्ग प्रशस्त करता है।",
    category: "Mantras & Stotrams",
    author: "Pt. Radheshyam Shastri",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    featuredImage: cardGitaImg,
    tags: ["Lord Shiva", "Mantras", "Maha Shivratri", "Daily Sadhana"],
    readTime: "7 min read",
    viewsCount: 1890,
    isFeatured: false,
    publishedAt: "2026-03-01T00:00:00.000Z",
    createdAt: "2026-03-01T00:00:00.000Z",
    content: `## The Sovereign Healing Chant of Sanatana Dharma

The **Mahamrityunjaya Mantra** occurs in the **Rigveda (7.59.12)** as well as the **Yajurveda (3.60)**. Addressed to Tryambaka (the Three-Eyed Lord), it is regarded as the ultimate panacea for physical and mental afflictions.

### The Sacred Verse
> **ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।**  
> **उर्वारुकमिव बन्धनान्मृ त्योर्मुक्षीय मामृतात्॥**  
> *(ऋग्वेद ७.५९.१२)*  
>
> *"We worship the Three-Eyed One (Lord Shiva), who is fragrant and nourishes all beings. As the ripe cucumber is liberated from its stalk, may He liberate us from death and bondage for the sake of immortality."*

### Key Spiritual Significances
- **Sugandhim (सुगन्धिम्):** Signifies the sweet fragrance of divine virtue and cosmic consciousness.
- **Pushti-vardhanam (पुष्टिवर्धनम्):** The supreme provider of inner strength, health, wealth, and spiritual growth.
- **Urvarukamiva Bandhanan:** Just as a cucumber effortlessly detaches from its vine when fully ripe, the spiritual aspirant is freed from worldly attachment and fear of mortality without trauma.`,
    contentHi: `## सनातन धर्म का परम कल्याणकारी मंत्र

ऋग्वेद (७.५९.१२) में वर्णित महामृत्युंजय मंत्र महर्षि मार्कण्डेय द्वारा सिद्ध महामंत्र है। यह त्रिनेत्रधारी भगवान शिव का अनुग्रह प्राप्त करने का सबसे अचूक साधन है।

### मूल मंत्र
> **ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।**  
> **उर्वारुकमिव बन्धनान्मृ त्योर्मुक्षीय मामृतात्॥**  

### मंत्र का भावार्थ
हम त्रिनेत्रधारी (भूत, वर्तमान, भविष्य के ज्ञाता) भगवान शिव की आराधना करते हैं, जो समस्त जीवों का पोषण करने वाले हैं। जिस प्रकार पका हुआ खरबूजा बिना किसी कष्ट के अपनी बेल से मुक्त हो जाता है, उसी प्रकार भगवान शिव हमें मृत्यु एवं संसार के बंधनों से मुक्त कर अमरता प्रदान करें।`
  }
];
