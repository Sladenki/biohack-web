"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  src?: string;
  title?: string;
}

export function AudioPlayer({
  src = "/audio/demo.mp3",
  title = "Рассказ о водорослевом промысле",
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      void audio.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * duration;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="rounded-2xl border border-accent/10 bg-white p-6 shadow-lg shadow-accent/5">
      <audio ref={audioRef} src={src} preload="metadata" />

      <p className="mb-4 text-sm font-medium text-text-muted">{title}</p>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={togglePlay}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-md shadow-accent/30 transition-transform hover:scale-105"
          aria-label={isPlaying ? "Пауза" : "Воспроизвести"}
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6 ml-0.5" />
          )}
        </button>

        <div className="flex flex-1 flex-col gap-2">
          <div className="flex h-10 items-end justify-center gap-1">
            {Array.from({ length: 24 }).map((_, i) => {
              const base = 8 + (i % 5) * 3;
              const peak = 16 + (i % 7) * 2;
              return (
              <motion.div
                key={i}
                className="w-1 rounded-full bg-accent"
                animate={
                  isPlaying
                    ? {
                        height: [base, peak, base],
                      }
                    : { height: 8 }
                }
                transition={
                  isPlaying
                    ? {
                        duration: 0.4 + (i % 4) * 0.1,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }
                    : { duration: 0.3 }
                }
              />
              );
            })}
          </div>

          <div
            className="group relative h-2 cursor-pointer rounded-full bg-accent/20"
            onClick={handleProgressClick}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full rounded-full bg-accent transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between text-xs text-text-muted">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
