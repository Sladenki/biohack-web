"use client";

import { PomorGuideCharacter } from "@/components/PomorGuideCharacter";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";

const quotes = [
  {
    text: "Водоросли — то наше хлебное поле на море. Соберёшь вовремя — и зиму проживёшь с душой.",
    context: "О сборе ламинарии",
  },
  {
    text: "На отмели стояли сушилки, дым шёл столбом. Поморский дух там и живёт — в этом дыме да в соли.",
    context: "О промысловых стоянках",
  },
  {
    text: "Море кормит, но и учит уважению. Каждый камень на берегу — память предков наших.",
    context: "О берегах Белого моря",
  },
];

export function AudioGuide() {
  return (
    <Section id="audioguide" className="bg-bg-light">
      <SectionHeader
        title="AI-аудиогид «Голос Поморья»"
        subtitle="Услышьте рассказ старого помора — озвученный на основе этнографических записей и говора поморов"
      />

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <PomorGuideCharacter />
          <p className="mt-6 text-center text-sm text-text-muted">
            Старик-помор — ваш проводник по маршруту
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-text-muted">
            Аудиогид воссоздаёт речь и интонации поморов на основе
            этнографических материалов. Вдохновением для языковой модели
            послужили записи и исследования, в том числе книга Ксении Гемп
            «Сказ о Беломорье». Каждая точка маршрута оживает голосом
            человека, знавшего этот край изнутри.
          </p>

          <AudioPlayer />
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quotes.map((quote) => (
          <Card key={quote.context} hover={false}>
            <p className="italic text-text">&ldquo;{quote.text}&rdquo;</p>
            <p className="mt-3 text-sm text-accent">{quote.context}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
