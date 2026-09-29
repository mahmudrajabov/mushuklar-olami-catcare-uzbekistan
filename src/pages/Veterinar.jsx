import React from "react";
import { Syringe, Bug, Scissors, Stethoscope, Ambulance, Car, AlertTriangle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import CaptionedImage from "@/components/CaptionedImage";
import { IMAGES } from "@/data/content";

const WARNINGS = [
  "Ishtahaning keskin yo‘qolishi yoki vazn yo‘qotish",
  "Doimiy qayt qilish yoki diareya",
  "Nafas qisish yoki og‘ir nafas olish",
  "Letargiya, javob bermaslik",
  "Siydik bilan muammo yoki og‘riqli urinish",
  "Ko‘z, quloq yoki og‘izda keskin o‘zgarish"
];

export default function Veterinar() {
  return (
    <div>
      <PageHero
        eyebrow="Sog‘liq va ilm"
        title="Veterinar va sog‘liq"
        description="Emlash, parazitlardan himoya, sterilizatsiya va shoshilinch holatlarda to‘g‘ri harakat."
        image={IMAGES.vet}
        imageAlt="Quyoshli veterinariya klinikasida tinch mushuk"
        imageCaption="Muntazam veterinariya tekshiruvi — profilaktika asosi"
      />

      <div className="mx-auto max-w-7xl px-4">
        <InfoCard icon={AlertTriangle} tone="accent" title="Ta’limiy ogohlantirish">
          Ushbu bo‘lim umumiy ta’limiy ma’lumot beradi va <strong>hech qachon
          diagnoz qo‘ymaydi</strong>. Har qanday sog‘liq muammosi uchun malakali
          veterinarga murojaat qiling — bu ma’lumot veterinariya maslahati
          o‘rnini bosmaydi.
        </InfoCard>
      </div>

      {/* Vaccination */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading id="emlash" eyebrow="Profilaktika" title="Emlash asoslari" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <InfoCard icon={Syringe} title="Asosiy emlashlar">
            Yuqumli kasalliklarga qarshi emlashlar (masalan, panleukopeniya,
            kalitsiviroz, gerpesvirus) mushukchalar uchun muhim. Emlash
            jadvalini veterinar tuzadi.
          </InfoCard>
          <InfoCard icon={Syringe} title="Qayta emlash">
            Yillik qayta emlash himmatni yangilab turadi. Emlashdan oldin
            mushuk sog‘lom bo‘lishi va parazitlardan tozalanishi kerak.
          </InfoCard>
        </div>
      </section>

      {/* Parasites & sterilization */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading eyebrow="Himoya" title="Parazitlar va sterilizatsiya" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <InfoCard icon={Bug} title="Parazitlardan himoya">
            Burga, qon va ichak parazitlariga qarshi muntazam profilaktika.
            Mahsulotni veterinar tavsiya qiladi — dozani o‘zingiz o‘zgartirmang.
          </InfoCard>
          <InfoCard icon={Scissors} title="Sterilizatsiya (urg‘ochi)">
            Ko‘pchilik hollarda sog‘liq uchun foydali — ko‘krak va bachadon
            kasalliklari xavfini kamaytiradi. Vaqtini veterinar belgilaydi.
          </InfoCard>
          <InfoCard icon={Scissors} title="Kastratsiya (erkak)">
            Agressiya va belgilash xulq-atvorini kamaytiradi, ko‘cha
            xavfini oldini oladi. Ijtimoiy giperpopulyatsiyani nazorat qiladi.
          </InfoCard>
        </div>
      </section>

      {/* Warning signs */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading id="shoshilinch" eyebrow="Ogohlantirish" title="Diqqat berish kerak bo‘lgan alomatlar" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border-2 border-destructive/30 bg-destructive/5 p-6">
            <h3 className="flex items-center gap-2 font-bold mb-4"><AlertTriangle className="h-5 w-5 text-destructive" /> Ogohlantiruvchi belgilar</h3>
            <ul className="space-y-2">
              {WARNINGS.map((w) => (
                <li key={w} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />{w}
                </li>
              ))}
            </ul>
          </div>
          <InfoCard icon={Stethoscope} title="Muntazam tekshiruv">
            Yiliga kamida bir marta profilaktik tekshiruv tavsiya etiladi.
            Keksa mushuklar uchun 6 oyda bir marta. Bu muammolarni erta
            aniqlashga yordam beradi.
          </InfoCard>
        </div>
      </section>

      {/* Emergency & transport */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading eyebrow="Shoshilinch" title="Shoshilinch yordam va xavfsiz transport" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <InfoCard icon={Ambulance} tone="danger" title="Shoshilinch holat">
            Og‘ir nafas olish, holsizlik yoki shikast — darhol veterinarga.
            O‘z-o‘zidan davolashga urinmang va vaqt yo‘qotmang. Shoshilinch
            yordam tugmasidan ogohlantirish belgilarini ko‘ring.
          </InfoCard>
          <InfoCard icon={Car} title="Xavfsiz transport">
            Qattiq tashuvchi (carrier) bilan sokin ko‘chiring. Issiqlikdan va
            sovuqdan himoya qiling. Yo‘lda sukunat saqlang va mushukni
            qo‘rqitmang.
          </InfoCard>
        </div>
        <div className="mt-8">
          <CaptionedImage src={IMAGES.vet} alt="Tinch veterinariya klinikasi muhiti" caption="Sokin, qulay klinik muhit mushukning stressini kamaytiradi" />
        </div>
      </section>
    </div>
  );
}