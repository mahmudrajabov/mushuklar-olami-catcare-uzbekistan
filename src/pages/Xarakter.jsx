import React from "react";
import { Users, Heart, AlertTriangle, Baby, PawPrint, ThumbsUp, XCircle, Cat } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import CaptionedImage from "@/components/CaptionedImage";
import { IMAGES } from "@/data/content";

const SIGNALS = [
  { emoji: "😸", title: "Ishtahali ochiq, tik quloq", tone: "good", text: "Qoniqish va ishonch — mushuk o‘zini xavfsiz his qilyapti." },
  { emoji: "😿", title: "Yashirin va pastga yotgan quloq", tone: "bad", text: "Qo‘rquv yoki stress — mushukga joy va vaqt bering." },
  { emoji: "😼", title: "Kattalashgan qorachi va tik tana", tone: "warn", text: "Tahdid yoki ehtiyot — ogohlantirish belgisi." },
  { emoji: "😻", title: "Sekin ko‘z pirpirashi", tone: "good", text: "Mehr va ishonch — do‘stona munosabat." },
  { emoji: "🙀", title: "Yumalanib tikanlangan jun", tone: "bad", text: "Kuchli qo‘rquv — stress, tajovuz oldi." },
  { emoji: "🐾", title: "Tebratuvchi tik dum", tone: "warn", text: "Qiziqish, lekin ortiqcha qo‘zg‘alish — e’tibor bering." }
];

export default function Xarakter() {
  return (
    <div>
      <PageHero
        eyebrow="Sog‘liq va ilm"
        title="Xarakter va xulq-atvor"
        description="Mushuk shaxsiyati, ijtimoiylashuv, stress belgilari va to‘g‘ri tanishuv usullari."
        image={IMAGES.rescue}
        imageAlt="Tinch, ishonchli mushuk"
        imageCaption="Har bir mushukning o‘ziga xos shaxsiyati bor"
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading eyebrow="Shaxsiyat" title="Mushuk xarakteri farqlari" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <InfoCard icon={Cat} title="Mustaqil">Ko‘pchilik mushuklar mustaqil, lekin baribir ijtimoiy aloqa va mehrga muhtoj.</InfoCard>
          <InfoCard icon={Users} title="Ijtimoiy">Ba’zilari doimiy e’tibor xohlaydi, boshqalari tinchlikni afzal ko‘radi.</InfoCard>
          <InfoCard icon={PawPrint} title="O‘zgaruvchan">Xarakter irsiyat, ijtimoiylashuv va muhitga bog‘liq — har biri noyob.</InfoCard>
        </div>
      </section>

      {/* Body language cards */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading eyebrow="Tana tili" title="Tana tili vizual kartalari" description="Mushukning his-tuyg‘ularini tushunish uchun asosiy belgilar." />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SIGNALS.map((s) => (
            <div key={s.title} className={`rounded-3xl border-2 p-6 text-center ${
              s.tone === "good" ? "border-green-500/30 bg-green-500/5" :
              s.tone === "warn" ? "border-amber-500/30 bg-amber-500/5" :
              "border-destructive/30 bg-destructive/5"
            }`}>
              <div className="text-5xl mb-3">{s.emoji}</div>
              <h3 className="font-bold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Socialization & intro */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading id="ijtimoiy" eyebrow="Tanishuv" title="Yangi mushukni tanishtirish" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <InfoCard icon={Users} title="Bosqichma-bosqich">
            Yangi mushukni alohida xonada bir necha kun ushlang, keyin hid orqali
            tanishtiring. To‘g‘ridan-to‘g‘ri uchrashuvga shoshilmang.
          </InfoCard>
          <InfoCard icon={Baby} title="Bolalar va boshqa hayvonlar">
            Bolarga mushukni ehtiyotkor va sokin tutishni o‘rgating. Boshqa
            hayvonlar bilan asta-sekin, nazorat ostida tanishtiring.
          </InfoCard>
          <InfoCard icon={Heart} title="Ijobi mustahkamlash">
            Sokin ovoz, mukofot va o‘yin orqali ijobi xulq-atvorni rag‘batlantiring.
            Sabr — muvaffaqiyat kaliti.
          </InfoCard>
          <InfoCard icon={ThumbsUp} title="Ishonch qurish">
            Stress belgilarida mushukni tinch qo‘ying. O‘z sur’atida moslashishga
            imkon bering.
          </InfoCard>
        </div>
      </section>

      {/* What not to do */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading eyebrow="Nima qilmaslik kerak" title="Mushukni qo‘rqitish mumkin emas" />
        <div className="mt-8 rounded-3xl border-2 border-destructive/30 bg-destructive/5 p-6">
          <ul className="grid gap-3 md:grid-cols-3">
            {[
              "Baqirish va qichqirish",
              "Urish yoki jismonan jazolash",
              "Qo‘rqitish va kutilmagan harakatlar",
              "Majburan ushlash",
              "Jarima sifatida ovqatdan mahrum qilish",
              "Uzoq vaqt yolg‘iz qoldirish"
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm">
                <XCircle className="h-5 w-5 text-destructive shrink-0" />{t}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <CaptionedImage src={IMAGES.rescue} alt="Mehribon qo‘lda mushuk" caption="Ishonch va sabr — sog‘lom xulq-atvorning asosi" />
        </div>
      </section>
    </div>
  );
}