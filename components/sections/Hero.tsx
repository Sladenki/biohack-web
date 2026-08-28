"use client";

import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { motion } from "framer-motion";

const tags = [
  "Белое море",
  "Поморы",
  "Водорослевый промысел",
  "Архангельск",
  "Живая история",
  "AI-гид",
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-linear-to-br from-bg-dark to-bg-dark-2 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <motion.svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full opacity-20"
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            fill="#1FA98C"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </motion.svg>
        <motion.svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full opacity-10"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            fill="#1FA98C"
            d="M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,224C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </motion.svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            Культурно-исторический маршрут
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Погрузитесь в историю поморского водорослевого промысла
          </h1>
          <p className="mt-6 text-lg text-white/70 sm:text-xl">
            Интерактивный маршрут по побережью Белого моря с AI-аудиогидом,
            говорящим на языке поморов. Услышьте живую историю ушедшей эпохи.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#routes" size="lg">
              Выбрать маршрут
            </Button>
            <Button
              href="#audioguide"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-bg-dark"
            >
              Послушать аудиогида
            </Button>
          </div>
        </motion.div>
      </div>

      <Marquee items={tags} />
    </section>
  );
}
