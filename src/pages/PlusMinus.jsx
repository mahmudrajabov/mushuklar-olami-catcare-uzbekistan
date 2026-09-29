import React from "react";
import { ThumbsUp, ThumbsDown, Heart, Brain, Cat, Bug, Scissors, Wind, Plane, CalendarClock } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { IMAGES } from "@/data/content";

const ADVANTAGES = [
  { icon: Heart, title: "Hamrohlik", text: "Mushuklar yolg‘izlikni kamaytiradi va ishonchli do‘st bo‘ladi." },
  { icon: Brain, title: "Stress kamayishi", text: "Mushuk bilan muloqot qon bosimi va stressni pasaytirishga yordam beradi." },
  { icon: Cat, title: "Mustaqil parvarish", text: "Boshqa ba’zi hayvonlarga qaraganda mushuklar nisbatan mustaqil." },
  { icon: Bug, title: "Zararkunanda nazorati", text: "Tabiiy ovchi — uyda sichqon va hasharotlarni kamaytiradi." },
  { icon: Heart, title: "Hissiy qo‘llab-quvvatlash", text: "Mushuk egalari ko‘pincha yaxshiroq hissiy holatda bo‘ladi." }
];

const CHALLENGES = [
  { icon: CalendarClock, title: "Ovqat va tosh xarajati", text: "Sifatli ovqat va tosh — doimiy oylik xarajat." },
  { icon: Cat, title: "Veterinariya xarajati", text: "Emlash, kasallik va shoshilinch holatlar — kutilmagan xarajatlar." },
  { icon: Scissors, title: "Tirnoq va tushish", text: "Mebel zarari va jun — muntazam parvarish talab qiladi." },
  { icon: Wind, title: "Allergiya", text: "Mushuk proteini ba’zi odamlarda allergiya chaqiradi." },
  { icon: Plane, title: "Sayohat va bayramlar", text: "Mushukni qoldirib ketish uchun ishonchli g‘amxo‘r kerak." },
  { icon: CalendarClock, title: "Uzoq muddat mas’uliyat", text: "Mushuk 15–20 yil yashashi mumkin — butun umrlik mas’uliyat." }
];

export default function PlusMinus() {
  return (
    <div>
      <PageHero
        eyebrow="Etika va xarajatlar"
        title="Plus va minus tomonlari"
        description="Mushuk boqishning afzalliklari va qiyinchiliklari — realistik ko‘rinish."
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Advantages */}
          <div id="afzalliklar">
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-green-600 text-white">
                <ThumbsUp className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-bold">Afzalliklari</h2>
            </div>
            <div className="space-y-4">
              {ADVANTAGES.map((a) => (
                <div key={a.title} className="rounded-3xl border-2 border-green-500/30 bg-green-500/5 p-5">
                  <div className="flex items-center gap-3 mb-1.5">
                    <a.icon className="h-5 w-5 text-green-600" />
                    <h3 className="font-bold">{a.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{a.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-600 text-white">
                <ThumbsDown className="h-5 w-5" />
              </span>
              <h2 className="text-2xl font-bold">Qiyinchiliklari</h2>
            </div>
            <div className="space-y-4">
              {CHALLENGES.map((c) => (
                <div key={c.title} className="rounded-3xl border-2 border-amber-500/30 bg-amber-500/5 p-5">
                  <div className="flex items-center gap-3 mb-1.5">
                    <c.icon className="h-5 w-5 text-amber-600" />
                    <h3 className="font-bold">{c.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <SectionHeading eyebrow="Xulosa" title="Mas’uliyat bilan qaror qiling" align="center" />
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Mushuk boqish — katta quvonch, lekin uzoq muddatli mas’uliyat.
          O‘zingizning imkoniyatlaringizni realistik baholang va mushuk uchun
          barqaror, mehribon uy bering.
        </p>
      </section>
    </div>
  );
}