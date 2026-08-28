"use client";

import { motion } from "framer-motion";
import { AlertCircle, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  src?: string;
  title?: string;
}

export function AudioPlayer({
  src = "/audio/pomor-guide.mp3",
  title = "Рассказ о водорослевом промысле",
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || error) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setError(null);
    } catch {
      setIsPlaying(false);
      setError("Не удалось воспроизвести аудио. Попробуйте обновить страницу.");
    }
  }, [isPlaying, error]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration || error) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * duration;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => {
      setDuration(audio.duration);
      setError(null);
    };
    const onEnded = () => setIsPlaying(false);
    const onError = () => {
      setIsPlaying(false);
      setError("Аудиофайл недоступен. Запустите: python scripts/generate-pomor-audio.py");
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
    };
  }, [src]);

  const formatTime = (time: number) => {
    if (!Number.isFinite(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="rounded-2xl border border-accent/10 bg-white p-6 shadow-lg shadow-accent/5">
      <audio ref={audioRef} src={src} preload="metadata" />

      <p className="mb-4 text-sm font-medium text-text-muted">{title}</p>

      {error && (
        <div className="mb-4 flex items-start gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={togglePlay}
          disabled={!!error}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-md shadow-accent/30 transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
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
