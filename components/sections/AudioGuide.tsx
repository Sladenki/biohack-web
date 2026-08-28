"use client";

import { PomorGuideCharacter } from "@/components/PomorGuideCharacter";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const quotes = [
  {
    text: "Водоросли — то наше хлебное полё на море. Вовремя соберёшь — зиму с душой проживёшь.",
    context: "О сборе ламинарии",
    audio: "/audio/quote-seaweed.mp3",
  },
  {
    text: "На отмели стояли сушилки, дым шёл столбом. Поморский дух тама и живёт — в этом дыме да в соли.",
    context: "О промысловых стоянках",
    audio: "/audio/quote-drying.mp3",
  },
  {
    text: "Море кормит, да и учит уваженью. Каждый камень на берегу — память предков наших.",
    context: "О берегах Белого моря",
    audio: "/audio/quote-shore.mp3",
  },
];

function QuoteCard({
  id,
  text,
  context,
  audio,
  activeId,
  onActiveChange,
}: {
  id: string;
  text: string;
  context: string;
  audio: string;
  activeId: string | null;
  onActiveChange: (id: string | null) => void;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const isPlaying = activeId === id;

  useEffect(() => {
    const el = audioRef.current;
    if (!el || activeId === id) return;
    el.pause();
  }, [activeId, id]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onEnded = () => onActiveChange(null);
    el.addEventListener("ended", onEnded);
    return () => el.removeEventListener("ended", onEnded);
  }, [onActiveChange]);

  const togglePlay = useCallback(async () => {
    const el = audioRef.current;
    if (!el) return;

    if (isPlaying) {
      el.pause();
      onActiveChange(null);
      return;
    }

    onActiveChange(id);
    el.currentTime = 0;
    try {
      await el.play();
    } catch {
      onActiveChange(null);
    }
  }, [id, isPlaying, onActiveChange]);

  return (
    <Card hover={false}>
      <audio ref={audioRef} src={audio} preload="metadata" />
      <p className="italic text-text">&ldquo;{text}&rdquo;</p>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-accent">{context}</p>
        <button
          type="button"
          onClick={togglePlay}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors hover:bg-accent hover:text-white"
          aria-label={isPlaying ? `Пауза: ${context}` : `Послушать: ${context}`}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4 ml-0.5" />
          )}
        </button>
      </div>
    </Card>
  );
}

export function AudioGuide() {
  const [activeQuoteId, setActiveQuoteId] = useState<string | null>(null);

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

          <AudioPlayer
            src="/audio/pomor-guide.mp3"
            title="Рассказ старого помора о водорослевом промысле"
          />
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quotes.map((quote) => (
          <QuoteCard
            key={quote.context}
            id={quote.context}
            activeId={activeQuoteId}
            onActiveChange={setActiveQuoteId}
            {...quote}
          />
        ))}
      </div>
    </Section>
  );
}
