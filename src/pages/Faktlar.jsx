import React from "react";
import { Eye, Ear, Moon, MessageCircle, Clock, Brain, Waves, Cat } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import CaptionedImage from "@/components/CaptionedImage";
import { IMAGES } from "@/data/content";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const SENSES = [
  { icon: Ear, title: "Eshitish", text: "Mushuklar insondan ancha yuqori chastotali ovozlarni eshita oladi — ular kichik kemiruvchilarning tovushini tutadi." },
  { icon: Eye, title: "Ko‘rish", text: "Toraygan qorong‘ulikda mushuklar insondan taxminan 6 baravar yaxshi ko‘radi, lekin uzoqdagi detallarni xira ko‘radi." },
  { icon: Waves, title: "Hid va tat", text: "Hidlash hissi insonnikidan kuchli, ammo itnikiga qaraganda zaifroq. Vibration orqali atrofni sezadi." }
];

const STAGES = [
  { stage: "Mushukcha (0–6 oy)", desc: "Tez rivojlanish, ijtimoiylashuvga eng mos davr, tez-tez ovqatlanish." },
  { stage: "O‘smir (6 oy–2 yil)", desc: "Faol, o‘yin va tadqiqotga moyil, jismoniy yetuklikka erishadi." },
  { stage: "Katta (3–10 yil)", desc: "Barqaror hayot tarzi, muntazam veterinariya nazorati kerak." },
  { stage: "Keksa (10+ yil)", desc: "Kamroq faol, maxsus parvarish va yumshoq ovqat muhim." }
];

export default function Faktlar() {
  return (
    <div>
      <PageHero
        eyebrow="Sog‘liq va ilm"
        title="Mushuklar haqida faktlar"
        description="Mushuklarning sezgilari, muloqoti, umr bosqichlari va qiziqarli ilmiy faktlari bilan tanishing."
        image={IMAGES.hero}
        imageAlt="Diqqat bilan qarayotgan mushuk"
        imageCaption="Mushuklar — tabiatning eng noyob va nafis ovchilaridan biri"
      />

      {/* Senses */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading id="sezgilar" eyebrow="Sezgi tizimi" title="Sezgi, uyqu va eshitish" description="Mushukning his-tuyg‘ulari dunyoni insonnikidan boshqacha tushunadi." />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {SENSES.map((s) => (
            <InfoCard key={s.title} icon={s.icon} title={s.title}>{s.text}</InfoCard>
          ))}
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <InfoCard icon={Moon} title="Uyqu">
            Mushuklar kuniga <strong>12–16 soat</strong> uxlaydi. Keksa va mushukchalar
            undan ham ko‘p. Uyqu energiyani tiklash va ovchilik instinktlari bilan
            bog‘liq.
          </InfoCard>
          <InfoCard icon={Brain} title="Miya va qiziqish">
            Mushuklar muhitni kuzatishni va muammo hal qilishni yaxshi ko‘radi.
            O‘yin va yangi taassurotlar ularning aqlini charxlaydi.
          </InfoCard>
        </div>
      </section>

      {/* Communication */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading id="muloqot" eyebrow="Muloqot" title="Miyovlash, purr va tana tili" description="Mushuklar ovoz, dum va tana orqali his-tuyg‘ularini ifodalaydi." />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <InfoCard icon={MessageCircle} title="Miyovlash (meowing)">
            Kattalar odamlar bilan muloqot uchun ko‘p miyovlaydi. Har bir mushukning
            o‘ziga xos ovoz toni bor. Doimiy miyovlash e’tibor yoki muammo belgisi
            bo‘lishi mumkin.
          </InfoCard>
          <InfoCard icon={Cat} title="Purr (xurrillash)">
            Purr ko‘pincha qoniqishni bildiradi, lekin og‘riq yoki stressda ham
            tinchlantirish vositasi sifatida ishlatiladi. chastotasi suyak
            zichligini qo‘llab-quvvatlashga yordam berishi haqida tadqiqotlar bor.
          </InfoCard>
          <InfoCard icon={Waves} title="Dum holati">
            Tik ko‘tarilgan dum — do‘stona ishonch; tebratuvchi dum — qiziqish;
            qattiq qoqilgan dum — tahdid yoki bezovtalik belgisi.
          </InfoCard>
          <InfoCard icon={Eye} title="Quloq va ko‘z">
            Oldinga qadalgan quloqlar — qiziqish; yonboshlangan quloqlar — qo‘rquv
            yoki tahdid. Sekin ko‘z pirpirashi — ishonch va mehr belgisi.
          </InfoCard>
        </div>
      </section>

      {/* Lifespan */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading id="umr" eyebrow="Hayot bosqichlari" title="Umr davomiyligi va rivojlanish" description="Yaxshi parvarish bilan mushuklar 15–20 yil yashashi mumkin." />
        <div className="mt-8 rounded-3xl border-2 border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary">
                <TableHead className="font-bold">Bosqich</TableHead>
                <TableHead className="font-bold">Tavsif</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {STAGES.map((s) => (
                <TableRow key={s.stage}>
                  <TableCell className="font-semibold whitespace-nowrap align-top">{s.stage}</TableCell>
                  <TableCell className="text-muted-foreground">{s.desc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Scientific facts */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading id="ilmiy" eyebrow="Ilmiy faktlar" title="Qiziqarli ilmiy ma’lumotlar" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard icon={Clock} title="Tezlik">Mushuk qisqa masofada soatiga 48 km gacha yugura oladi.</InfoCard>
          <InfoCard icon={Eye} title="Ko‘z rangi">Mushuklar ko‘k va sariq ranglarni ajrata oladi, lekin qizil-yashilni xira ko‘radi.</InfoCard>
          <InfoCard icon={Cat} title="Burun izi">Har bir mushukning burun izi noyob — xuddi inson barmoq izi kabi.</InfoCard>
          <InfoCard icon={Waves} title="Sakrash">Mushuk o‘z bo‘yidan 5–6 baravar balandlikka sakray oladi.</InfoCard>
          <InfoCard icon={Brain} title="Eshitish chastotasi">Ular 64 000 Gg gacha chastotalarni eshita oladi.</InfoCard>
          <InfoCard icon={Moon} title="Tungi ovchi">Ko‘zning tapetum qatlami tunda yorug‘likni qaytaradi — shu sabab ko‘zlari yonadi.</InfoCard>
        </div>
        <div className="mt-8">
          <CaptionedImage
            src={IMAGES.sleeping}
            alt="Quyosh nuri ostida uxlayotgan mushuk"
            caption="Mushuklar kun bo‘yi qisqa-qisqa uxlaydi — bu ularning tabiiy ritmi"
          />
        </div>
      </section>
    </div>
  );
}