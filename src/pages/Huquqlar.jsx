import React from "react";
import { ShieldCheck, Droplets, Scissors, Home, Heart, Phone, Scale, Flag, Info } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import CaptionedImage from "@/components/CaptionedImage";
import { IMAGES } from "@/data/content";

const RIGHTS = [
  { icon: Droplets, title: "Ovqat va suv", text: "Toza, muvozanatli ovqat va doimiy yangi suv." },
  { icon: Home, title: "Boshpana", text: "Xavfsiz, qulay va ob-havodan himoyalangan uy." },
  { icon: ShieldCheck, title: "Veterinariya yordami", text: "Muntazam tekshiruv va shoshilinch yordam." },
  { icon: Heart, title: "Mehr va e’tibor", text: "Zo‘ravonlikdan himoya va g‘amxo‘r munosabat." }
];

const TURKEY = [
  "Jamoa bo‘lib ko‘cha mushuklarini boqish (suv va ovqat nuqtalari)",
  "Maxsus boshpanalar va veterinariya qo‘llab-quvvatlash",
  "Aholi orasida hayvonlarga mehribonlik madaniyati",
  "Davlat va nodavlat tashkilotlari hamkorligi"
];

const UZBEK_SUGGESTIONS = [
  { icon: Droplets, title: "Suv va ovqat nuqtalari", text: "Shahar bo‘ylab ko‘cha mushuklari uchun doimiy suv va ovqat joylari." },
  { icon: Scissors, title: "Sterilizatsiya dasturlari", text: "Giperpopulyatsiyani insoniy tarzda nazorat qilish uchun arzon yoki bepul sterilizatsiya." },
  { icon: Home, title: "Boshpanalar", text: "Mahalliy boshpanalar va vaqtinchalik parvarish (foster) tizimi." },
  { icon: ShieldCheck, title: "Veterinariya kirishi", text: "Arzon va mavjud veterinariya xizmatlarini kengaytirish." },
  { icon: Heart, title: "Insoniy munosabat", text: "Zo‘ravonlikning oldini olish va hayvonlarga yaxshilik bilan munosabat." },
  { icon: Phone, title: "Aholini xabardor qilish", text: "Ta’lim, maktab dasturlari va ommaviy axborot orqali mas’uliyat tarqatish." }
];

export default function Huquqlar() {
  return (
    <div>
      <PageHero
        eyebrow="Etika va xarajatlar"
        title="Mushuklar huquqlari va himoyasi"
        description="Mas’ul egalik, zo‘ravonlikdan himoya, sterilizatsiya, adapsiya va Turkiya tajribasi."
        image={IMAGES.rescue}
        imageAlt="Qutqarilgan, tinch mushuk"
        imageCaption="Har bir hayvon mehrga va himoyaga loyiqdir"
      />

      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl border-2 border-accent/30 bg-accent/5 p-5">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm font-medium">
              Huquqiy ma’lumotlar hudud va qonunchilikka qarab o‘zgarishi mumkin.
              Rasmiy manbalarni tekshiring.
            </p>
          </div>
        </div>
      </div>

      {/* Responsible ownership */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading id="masuliyat" eyebrow="Mas’uliyat" title="Mas’ul egasi bo‘lish nima degani" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {RIGHTS.map((r) => (
            <InfoCard key={r.title} icon={r.icon} title={r.title}>{r.text}</InfoCard>
          ))}
        </div>
        <div className="mt-6">
          <InfoCard icon={ShieldCheck} tone="primary" title="Zo‘ravonlikdan himoya">
            Hayvonlarga nisbatan shafqatsizlik qabul qilinmaydi. Agar shafqatsizlik
            guvohi bo‘lsangiz, tegishli mahalliy organlar yoki hayvonlar huquqlarini
            himoya qiluvchi tashkilotlarga xabar bering. <strong>Umumiy
            hayvonlarga mehribonlik tamoyillari</strong> va rasmiy huquqiy
            normalar farqlanadi — aniq huquqiy masalalarda rasmiy manbalarni
            tekshiring.
          </InfoCard>
        </div>
      </section>

      {/* Sterilization & adoption */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading eyebrow="Populyatsiya nazorati" title="Sterilizatsiya va adapsiya" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <InfoCard icon={Scissors} title="Insoniy populyatsiya nazorati">
            Sterilizatsiya/kastratsiya giperpopulyatsiyani insoniy tarzda
            kamaytiradi va mushuk sog‘ligini yaxshilaydi. Bu — javobgarlik belgisi.
          </InfoCard>
          <InfoCard icon={Heart} title="Adapsiya va qutqarish">
            Mushukchani sotib olishdan ko‘ra, boshpanadan adapsiya qilish ko‘plab
            hayvonlarga ikkinchi imkoniyat beradi. Mas’ul adapsiya — bu butun
            umrlik qaror.
          </InfoCard>
        </div>
      </section>

      {/* Turkey comparison */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading id="turkiya" eyebrow="Xalqaro tajriba" title="Turkiyada ko‘cha mushuklari madaniyati" />
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border-2 border-primary/20 bg-primary/5 p-6">
            <h3 className="flex items-center gap-2 font-bold mb-4"><Flag className="h-5 w-5 text-primary" /> Turkiya misoli</h3>
            <ul className="space-y-2.5">
              {TURKEY.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{t}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Eslatma: Turkiyaning barcha shaharlari bir xil ishlamaydi — bu
              umumiy tendentsiya va mahalliy amaliyotlar farqlanadi.
            </p>
          </div>
          <div className="rounded-3xl border-2 border-border bg-card p-6">
            <h3 className="flex items-center gap-2 font-bold mb-4"><Scale className="h-5 w-5 text-foreground" /> O‘zbekiston sharoiti</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O‘zbekistonda mahalliy sharoitlar, infratuzilma va madaniyat
              farqli bo‘lishi mumkin. Turkiya tajribasidan moslashuvchan
              elementlarni o‘rganish foydali, lekin har bir yondashuv
              mahalliy ehtiyojlarga moslanishi kerak.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <CaptionedImage src={IMAGES.outdoor} alt="Nazorat ostida bog‘dagi mushuk" caption="Jamoa g‘amxo‘rligi — ko‘cha mushuklari hayotini yaxshilaydi" />
        </div>
      </section>

      {/* Uzbekistan suggestions */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading eyebrow="Amaliy takliflar" title="O‘zbekiston uchun takliflar" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {UZBEK_SUGGESTIONS.map((s) => (
            <InfoCard key={s.title} icon={s.icon} title={s.title}>{s.text}</InfoCard>
          ))}
        </div>
      </section>
    </div>
  );
}