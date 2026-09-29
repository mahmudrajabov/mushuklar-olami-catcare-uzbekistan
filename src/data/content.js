// Central content data for Mushuklar Olami — CatCare Uzbekistan.
// All text is in Uzbek Latin script.

export const IMAGES = {
  hero: "https://media.base44.com/images/public/6abbfbfca3e081e5b1e960e0/dccd5fd41_generated_d04a3af8.jpg",
  nutrition: "https://media.base44.com/images/public/6abbfbfca3e081e5b1e960e0/2d60ed754_generated_fdd1be5f.jpg",
  grooming: "https://media.base44.com/images/public/6abbfbfca3e081e5b1e960e0/c82c1ca6c_generated_9e5b7d33.jpg",
  vet: "https://media.base44.com/images/public/6abbfbfca3e081e5b1e960e0/99d2e7e16_generated_074750df.jpg",
  indoor: "https://media.base44.com/images/public/6abbfbfca3e081e5b1e960e0/dec05a66d_generated_941dd533.jpg",
  outdoor: "https://media.base44.com/images/public/6abbfbfca3e081e5b1e960e0/fa1959ef9_generated_a02d7c89.jpg",
  rescue: "https://media.base44.com/images/public/6abbfbfca3e081e5b1e960e0/048df1029_generated_324766c1.jpg",
  sleeping: "https://media.base44.com/images/public/6abbfbfca3e081e5b1e960e0/9be9dd0d5_generated_1f83de2b.jpg",
  sleepingCartoon: "https://media.base44.com/images/public/6abbfbfca3e081e5b1e960e0/37c69d442_generated_image.png",
  authorCartoon: "https://media.base44.com/images/public/6abbfbfca3e081e5b1e960e0/8cafa4ad1_generated_image.png"
};

export const CATEGORIES = [
  { id: "bosh", label: "Bosh sahifa", path: "/", group: "Bosh", icon: "Home", blurb: "Mushuklar olamiga xush kelibsiz" },
  { id: "faktlar", label: "Mushuklar haqida faktlar", path: "/faktlar", group: "Sog‘liq va ilm", icon: "Sparkles", blurb: "Sezgi, uyqu, muloqot va qiziqarli ilmiy faktlar" },
  { id: "ovqat", label: "To‘g‘ri ovqatlantirish", path: "/ovqatlantirish", group: "Kundalik parvarish", icon: "UtensilsCrossed", blurb: "Ovqat turlari, xavfsiz va xavfli mahsulotlar" },
  { id: "parvarish", label: "Parvarish va gigiyena", path: "/parvarish", group: "Kundalik parvarish", icon: "Bath", blurb: "Tosh quti, tarash, tirnoq va hammom" },
  { id: "veterinar", label: "Veterinar va sog‘liq", path: "/veterinar", group: "Sog‘liq va ilm", icon: "Stethoscope", blurb: "Emlash, parazitlar va shoshilinch yordam" },
  { id: "xarajat", label: "Xarajatlar", path: "/xarajatlar", group: "Etika va xarajatlar", icon: "Calculator", blurb: "Oylik xarajatlar kalkulyatori" },
  { id: "uy-kocha", label: "Uy mushugi va ko‘cha mushugi", path: "/uy-mushugi", group: "Etika va xarajatlar", icon: "Cat", blurb: "Indoor va outdoor hayot taqqosi" },
  { id: "xarakter", label: "Xarakter va xulq-atvor", path: "/xarakter", group: "Sog‘liq va ilm", icon: "Heart", blurb: "Shaxsiyat, ijtimoiylashuv va muloqot" },
  { id: "plus-minus", label: "Mushuk boqishning plus va minus tomonlari", path: "/plus-minus", group: "Etika va xarajatlar", icon: "Scale", blurb: "Afzalliklar va qiyinchiliklar" },
  { id: "huquqlar", label: "Mushuklar huquqlari va himoyasi", path: "/huquqlar", group: "Etika va xarajatlar", icon: "ShieldCheck", blurb: "Mas’uliyat, himoya va Turkiya tajribasi" },
  { id: "maslahat", label: "Foydali maslahatlar", path: "/maslahatlar", group: "Kundalik parvarish", icon: "Lightbulb", blurb: "Mavsumiy parvarish va tayyorgarlik ro‘yxatlari" }
];

export const CATEGORY_GROUPS = ["Bosh", "Kundalik parvarish", "Sog‘liq va ilm", "Etika va xarajatlar"];

// Articles used for "Latest articles", search and bookmarks.
export const ARTICLES = [
  { id: "art-faktlar-sezgi", categoryId: "faktlar", title: "Mushukning sezgilari: eshitish, ko‘rish va hidlash", excerpt: "Mushuklar insondan ko‘ra ancha kuchli eshitadi va toraygan qorong‘ulikda yaxshi ko‘radi.", anchor: "#sezgilar", path: "/faktlar" },
  { id: "art-faktlar-muloqot", categoryId: "faktlar", title: "Miyovlash, purr va tana tili", excerpt: "Mushuklar dumi, qulog‘i va ovozi orqali his-tuyg‘ularini ifodalaydi.", anchor: "#muloqot", path: "/faktlar" },
  { id: "art-faktlar-yosh", categoryId: "faktlar", title: "Mushukning umr davomiyligi va rivojlanish bosqichlari", excerpt: "Yaxshi parvarish bilan mushuklar 15–20 yil yashashi mumkin.", anchor: "#umr", path: "/faktlar" },
  { id: "art-ovqat-turlari", categoryId: "ovqat", title: "Ho‘l ovqat, quruq ovqat va tabiiy ovqat", excerpt: "Har bir ovqat turi o‘z afzalliklari va ehtiyot choralariga ega.", anchor: "#turlari", path: "/ovqatlantirish" },
  { id: "art-ovqat-xavfli", categoryId: "ovqat", title: "Xavfli mahsulotlar: shokolad, piyoz, sarimsoq, uzum", excerpt: "Ba’zi inson ovqatlari mushuk uchun zaharli bo‘lishi mumkin.", anchor: "#xavfli", path: "/ovqatlantirish" },
  { id: "art-ovqat-jadval", categoryId: "ovqat", title: "Yoshga qarab ovqatlantirish jadvali", excerpt: "Mushukcha, katta va keksa mushuklar uchun ovqatlash tartibi.", anchor: "#jadval", path: "/ovqatlantirish" },
  { id: "art-parvarish-tosh", categoryId: "parvarish", title: "Tosh quti: joylashtirish va tozalash", excerpt: "Tinch, qulay joydagi tosh quti mushukning gigiyenasining asosi.", anchor: "#tosh", path: "/parvarish" },
  { id: "art-parvarish-grooming", categoryId: "parvarish", title: "Tarash, tirnoq, tish va quloq parvarishi", excerpt: "Muntazam grooming sog‘liq va qulaylik uchun muhim.", anchor: "#grooming", path: "/parvarish" },
  { id: "art-veterinar-emlash", categoryId: "veterinar", title: "Asosiy emlashlar va nima uchun muhim", excerpt: "Emlash yuqumli kasalliklarning oldini oladi.", anchor: "#emlash", path: "/veterinar" },
  { id: "art-veterinar-shoshilinch", categoryId: "veterinar", title: "Shoshilinch veterinar yordam qachon kerak", excerpt: "Og‘ir nafas olish, holsizlik yoki shikast — darhol veterinarga.", anchor: "#shoshilinch", path: "/veterinar" },
  { id: "art-xarajat-kalkulyator", categoryId: "xarajat", title: "Oylik xarajatlar kalkulyatori", excerpt: "Ovqat, tosh, emlash va boshqa xarajatlarni hisoblang.", anchor: "#kalkulyator", path: "/xarajatlar" },
  { id: "art-uy-kocha-taqqos", categoryId: "uy-kocha", title: "Uy va ko‘cha mushugi: taqqoslash", excerpt: "Xavfsizlik, kasallik xavfi va hayot davomiyligi farqlari.", anchor: "#taqqos", path: "/uy-mushugi" },
  { id: "art-xarakter-ijtimoiy", categoryId: "xarakter", title: "Yangi mushukni tanishish va ijtimoiylashtirish", excerpt: "Sokin, bosqichma-bosqich tanishuv stressni kamaytiradi.", anchor: "#ijtimoiy", path: "/xarakter" },
  { id: "art-plus-afzallik", categoryId: "plus-minus", title: "Mushuk boqishning afzalliklari", excerpt: "Hamrohlik, stress kamayishi va hissiy qo‘llab-quvvatlash.", anchor: "#afzalliklar", path: "/plus-minus" },
  { id: "art-huquqlar-masuliyat", categoryId: "huquqlar", title: "Mas’ul egasi bo‘lish nima degani", excerpt: "Ovqat, suv, boshpana va veterinar yordam — asosiy huquqlar.", anchor: "#masuliyat", path: "/huquqlar" },
  { id: "art-huquqlar-turkiya", categoryId: "huquqlar", title: "Turkiyada ko‘cha mushuklari madaniyati", excerpt: "Jamoa bo‘lib boqish, boshpana va veterinar qo‘llab-quvvatlash.", anchor: "#turkiya", path: "/huquqlar" },
  { id: "art-maslahat-mavsum", categoryId: "maslahat", title: "Yoz va qishda mavsumiy parvarish", excerpt: "Issiqlik, sovuq va namlik — har mavsumda ehtiyot chorlari.", anchor: "#mavsum", path: "/maslahatlar" },
  { id: "art-maslahat-checklist", categoryId: "maslahat", title: "Yangi mushuk uchun tayyorgarlik ro‘yxati", excerpt: "Boshpana, ovqat, tosh quti va veterinarga tashrif rejalashtirish.", anchor: "#checklist", path: "/maslahatlar" }
];

export function getCategoryById(id) {
  return CATEGORIES.find((c) => c.id === id);
}

export function getArticlesByCategory(id) {
  return ARTICLES.filter((a) => a.categoryId === id);
}

export function searchArticles(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return ARTICLES.filter(
    (a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
  );
}