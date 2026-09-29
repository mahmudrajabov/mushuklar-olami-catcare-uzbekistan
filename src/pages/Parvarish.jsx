import React from "react";
import { Trash2, Scissors, Bath, Home, Gamepad2, BedDouble, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import CaptionedImage from "@/components/CaptionedImage";
import { IMAGES } from "@/data/content";

export default function Parvarish() {
  return (
    <div>
      <PageHero
        eyebrow="Kundalik parvarish"
        title="Parvarish va gigiyena"
        description="Tosh quti, tarash, tirnoq, tish, quloq va hammom — mushukning gigiyenasi va qulayligi uchun."
        image={IMAGES.grooming}
        imageAlt="Mushukni ehtiyotkorlik bilan tarash"
        imageCaption="Muntazam grooming — sog‘liq va ishonchli munosabatning asosi"
      />

      {/* Litter box */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading id="tosh" eyebrow="Tosh quti" title="Tosh quti: joylashtirish va tozalash" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <InfoCard icon={Home} title="Joylashtirish">
            Tinch, oson yetadigan, ovqatdan uzoq joyda. Mushuklar sonidan bittadan
            ko‘p tosh quti qoidasi: <strong>N+1</strong>. Kattaroq mushuklar uchun
            kengroq quti tanlang.
          </InfoCard>
          <InfoCard icon={Trash2} title="Tozalash">
            Har kuni najasni oling, haftada 1–2 marta to‘liq almashtiring. Qutini
            yumshoq deterjan bilan yuving — kuchli hidli kimyo mushukni qaytaradi.
          </InfoCard>
        </div>
        <div className="mt-8">
          <CaptionedImage src={IMAGES.grooming} alt="Mushukni tarash payti" caption="Tosh quti va grooming joyi tinch bo‘lishi mushukni xotirjam qiladi" />
        </div>
      </section>

      {/* Grooming */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading id="grooming" eyebrow="Grooming" title="Tarash, tirnoq, tish va quloq" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard icon={Scissors} title="Tarash">
            Qisqa junli mushuklar haftada 1 marta, uzun junli har kuni taraladi.
            Bu jun yutish va so‘lak to‘plamasini oldini oladi.
          </InfoCard>
          <InfoCard icon={Scissors} title="Tirnoq parvarishi">
            2 haftada bir marta maxsus qaychi bilan uchini kesing. Hech qachon
            tirnoq tubidagi qon tomirni kesmang. Scratch post berish shart.
          </InfoCard>
          <InfoCard icon={Sparkles} title="Tish va quloq">
            Tishlarni maxsus cho‘tka va pasta bilan tozalang. Quloqlarni
            yumshoq salfetka bilan tashqi qismdan tozalang — paxta tayoqni
            ichkariga tiqmang.
          </InfoCard>
        </div>
      </section>

      {/* Bathing */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading eyebrow="Hammom" title="Hammom qachon va qanday" />
        <div className="mt-8">
          <InfoCard icon={Bath} tone="primary" title="Hammom qoidasi">
            Mushuklar ko‘pincha hammomga muhtoj emas — ular o‘zini tozalaydi.
            Faqat ifloslangan yoki veterinar tavsiyasi bo‘yicha yuving.
            <strong> Iliq suv, maxsus mushuk shampuni</strong>, quloqqa suv
            tushmasligi va sokin muhit muhim. Quruq, iliq xonada quriting.
          </InfoCard>
        </div>
      </section>

      {/* Safe home & enrichment */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading eyebrow="Xavfsiz uy" title="Uy tayyorlash va boyitish" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard icon={Home} title="Xavfsiz uy">
            Derazalarda panjara, zaharli o‘simliklarni olib tashlash, elektr
            simlarni yashirish, kichik narsalarni yutib qo‘ymaslik.
          </InfoCard>
          <InfoCard icon={Gamepad2} title="O‘yinchoqlar">
            Interaktiv o‘yinchoqlar, sichqoncha va tayoq o‘yinlari ovchilik
            instinktini qondiradi va stressni kamaytiradi.
          </InfoCard>
          <InfoCard icon={Scissors} title="Scratch post">
            Barqaror, baland scratch post mebelni himoya qiladi va mushukning
            tirnoq gigiyenasini ta’minlaydi.
          </InfoCard>
          <InfoCard icon={BedDouble} title="Tinch dam olish joyi">
            Mushuk baland va yashirin joylarda dam olishni yaxshi ko‘radi.
            Iliq, yumshoq uyqu joyi ajrating.
          </InfoCard>
          <InfoCard icon={Sparkles} title="Vertikal makon">
            Tokchalar va baland platformalar mushukga xavfsizlik va nazorat
            hissini beradi.
          </InfoCard>
          <InfoCard icon={Home} title="Toza muhit">
            Muntazam tozalash, zaharli kimyo va xushbo‘y hidlardan saqlaning —
            mushuklar hidlarga juda sezgir.
          </InfoCard>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <CaptionedImage src={IMAGES.sleeping} alt="Mushuk yumshoq joyda uxlayotgan" caption="Tinch uyqu joyi mushukning stresssiz dam olishini ta’minlaydi" />
          <CaptionedImage src={IMAGES.nutrition} alt="Toza ovqat idishi" caption="Ovqat va suv idishini alohida, toza joyda saqlang" />
        </div>
      </section>
    </div>
  );
}