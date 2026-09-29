import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Siren, Lightbulb, PawPrint, Sparkles, Heart, Send } from "lucide-react";
import { Image } from "@/components/ui/image";
import { CATEGORIES, ARTICLES, IMAGES } from "@/data/content";
import CategoryCard from "@/components/CategoryCard";
import ArticleCard from "@/components/ArticleCard";
import SectionHeading from "@/components/SectionHeading";

const TIPS = [
  "Har doim yangi suv saqlang — mushuklar ko‘p suv ichmaydi, shuning uchun nam ovqat muhim.",
  "Tosh qutini tinch, oson yetadigan joyga qo‘ying va har kuni tozalang.",
  "Mushukingizni yiliga kamida bir marta veterinarga ko‘rsating, hatto sog‘ bo‘lsa ham.",
  "Sterilizatsiya/kastratsiya sog‘liq va giperpopulyatsiyani nazorat qilish uchun foydali.",
  "O‘yin va scratch post mushukning xavfsiz stress chiqarishiga yordam beradi."
];

export default function Home() {
  const [tipIndex, setTipIndex] = useState(0);
  const featured = useMemo(() => CATEGORIES.slice(1, 5), []);
  const latest = useMemo(() => ARTICLES.slice(0, 6), []);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <span className="pill bg-primary text-primary-foreground mb-4">
                <PawPrint className="h-3.5 w-3.5" /> CatCare Uzbekistan
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-foreground">
                Mushukingiz uchun <span className="text-primary">bilimli</span> va mehribon parvarish
              </h1>
              <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Mushuklar olamiga xush kelibsiz. Bu yerda siz mushukni to‘g‘ri
                ovqatlantirish, parvarish qilish, sog‘ligini saqlash va unga
                mas’ul tarzda g‘amxo‘rlik qilish bo‘yicha ishonchli, ta’limiy
                ma’lumotlarni topasiz.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/faktlar" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
                  Boshlash <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/xarajatlar" className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-6 py-3 font-semibold text-foreground hover:bg-secondary transition-colors">
                  Xarajatlar kalkulyatori
                </Link>
              </div>
            </div>
            <figure className="w-full max-w-xl lg:justify-self-end">
              <div className="overflow-hidden rounded-[2rem] border-2 border-border shadow-xl">
                <div className="aspect-[4/3]">
                  <Image src={IMAGES.authorCartoon} alt="Sayt muallifi mushukni quchoqlab turgan illyustrasiya" className="h-full w-full object-cover" />
                </div>
              </div>
              <a
                href="https://t.me/mahmudre"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4 rounded-3xl border-2 border-primary/20 bg-primary/5 p-6 hover:bg-primary/10 transition-colors"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#229ED9] shrink-0">
                  <Send className="h-5 w-5 text-white" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground leading-relaxed">
                    “Mushuklarning yaxshi va baxtli yashashi uchun o‘z maslahatlaringizni biz bilan almashing.”
                  </span>
                  <span className="mt-1.5 block font-semibold text-primary">Telegram: @mahmudre</span>
                </span>
              </a>
            </figure>
          </div>
        </div>
        {/* organic curve divider */}
        <svg className="block w-full -mb-1" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,80 C360,20 1080,20 1440,80 L1440,80 L0,80 Z" fill="hsl(var(--background))" />
        </svg>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: Heart, title: "Mas’ul egalik", text: "Mushuk — butun umrlik do‘st. Ovqat, suv, boshpana, sog‘liq va mehr — barchasi sizning qo‘lingizda." },
            { icon: Sparkles, title: "Bilimli parvarish", text: "To‘g‘ri ovqat, gigiyena va veterinariya nazorati mushukning baxtli va sog‘lom hayotini ta’minlaydi." },
            { icon: PawPrint, title: "Mehribon munosabat", text: "Mushukning xulq-atvori va his-tuyg‘ularini tushungan egada u o‘zini xavfsiz his qiladi." }
          ].map((c, i) => (
            <div key={i} className="rounded-3xl border-2 border-border bg-card p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="font-bold mb-1.5">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <SectionHeading eyebrow="Asosiy bo‘limlar" title="Mushuk parvarishining asoslari" description="Eng muhim mavzular bilan tanishing va to‘liq maqolalarga o‘ting." />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/huquqlar" className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
            Barcha 11 bo‘limni ko‘rish <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading eyebrow="So‘nggi maqolalar" title="Bilim olish uchun yangi materiallar" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      </section>

      {/* EMERGENCY REMINDER */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="rounded-[2rem] bg-destructive/8 border-2 border-destructive/25 p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive text-destructive-foreground shrink-0">
              <Siren className="h-7 w-7" />
            </span>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground">Shoshilinch holatlarda tayyor bo‘ling</h3>
              <p className="mt-1.5 text-muted-foreground">
                Agar mushukingizda og‘ir nafas olish, holsizlik yoki shikast
                kabi alomatlar bo‘lsa — darhol veterinarga murojaat qiling.
                Shoshilinch yordam tugmasi sahifaning o‘ng pastida joylashgan.
              </p>
            </div>
            <Link to="/veterinar" className="inline-flex items-center gap-2 rounded-full bg-destructive px-5 py-3 font-semibold text-destructive-foreground hover:opacity-90 transition-opacity">
              Veterinar bo‘limi <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ADVICE / TIP SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <figure className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <div className="relative aspect-[4/3]">
              <Image src={IMAGES.sleepingCartoon} alt="Uxlayotgan mushuk — iliqlikdagi illyustrasiya" className="h-full w-full object-cover" />
            </div>
            <figcaption className="px-4 py-3 text-center text-sm font-medium text-muted-foreground bg-card">
              Tinch muhit — mushukning baxti uchun asos
            </figcaption>
          </figure>
          <div>
            <SectionHeading eyebrow="Mushuklar hayoti" title="Kunlik g‘amxo‘rlik bo‘yicha maslahat" />
            <div className="mt-6 rounded-3xl border-2 border-primary/20 bg-primary/5 p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <p className="text-lg font-medium text-foreground leading-relaxed">{TIPS[tipIndex]}</p>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="flex gap-1.5">
                {TIPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTipIndex(i)}
                    aria-label={`${i + 1}-maslahat`}
                    className={`h-2 rounded-full transition-all ${i === tipIndex ? "w-6 bg-primary" : "w-2 bg-border"}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setTipIndex((i) => (i + 1) % TIPS.length)}
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold hover:bg-primary/10 transition-colors"
              >
                Keyingi maslahat <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <Link to="/maslahatlar" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
              Barcha foydali maslahatlar <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MUALLIF HAQIDA */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading
          eyebrow="Muallif haqida"
          title="Sayt ortidagi do‘stingiz"
          description="Mushuklar Olami — mushuklarni sevadigan va ular haqidagi bilimlarni o‘zbek tilida bo‘lishishni maqsad qilgan insonning ta’limiy loyihasi."
        />
        <div className="mt-8 grid gap-8 md:grid-cols-[320px,1fr] items-center">
          <figure className="overflow-hidden rounded-3xl border border-border shadow-lg">
            <div className="aspect-square">
              <Image src={IMAGES.authorCartoon} alt="Sayt muallifi mushukni quchoqlagan holda — illyustrasiya" className="h-full w-full object-cover" />
            </div>
            <figcaption className="px-4 py-3 text-center text-sm font-medium text-muted-foreground bg-card">
              Mushuklar Olami muallifi
            </figcaption>
          </figure>
          <div className="rounded-3xl border-2 border-primary/20 bg-primary/5 p-8">
            <p className="text-lg leading-relaxed text-foreground">
              Salom! Men «Mushuklar Olami» — CatCare Uzbekistan loyihasining muallifiman.
              Yillar davomida mushuklar bilan yashab, ularning parvarishi, ovqatlantirilishi
              va sog‘ligi haqidagi tajribalarimni to‘plaganman. Bu sayt orqali o‘zbek tilida
              ishonchli va oddiy tilda yozilgan ma’lumotlarni barcha mushuk egalari bilan
              bo‘lishishni maqsad qilganman. Saytdagi barcha materiallar ta’limiy maqsadda
              yozilgan — mushukingiz sog‘lig‘iga oid savollar bo‘lsa, albatta veterinarga
              murojaat qiling.
            </p>
          </div>
        </div>
      </section>

      {/* ALL CATEGORIES GRID */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHeading eyebrow="To‘liq bo‘limlar" title="Barcha mavzular bir joyda" align="center" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.slice(1).map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </section>
    </div>
  );
}