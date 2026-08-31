"use client";

import { RouteTabs } from "@/components/ui/RouteTabs";
import { Section, SectionHeader } from "@/components/ui/Section";
import { routes } from "@/data/routes";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

const RouteMap = dynamic(() => import("@/components/map/RouteMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] items-center justify-center rounded-2xl bg-accent/10 lg:h-[500px]">
      <p className="text-text-muted">Загрузка карты...</p>
    </div>
  ),
});

export function RoutesMap() {
  const [activeId, setActiveId] = useState(routes[0].id);
  const activeRoute = routes.find((r) => r.id === activeId) ?? routes[0];

  const pointCount = activeRoute.points.length;

  return (
    <Section id="routes">
      <SectionHeader
        title="Маршруты"
        subtitle="Выберите маршрут и исследуйте ключевые точки на интерактивной карте"
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <RouteTabs
          routes={routes}
          activeId={activeId}
          onSelect={setActiveId}
        />

        <div className="overflow-hidden rounded-2xl border border-accent/10 shadow-lg">
          <RouteMap points={activeRoute.points} />
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-4 text-text-muted">{activeRoute.description}</p>
        <div
          className={cn(
            "grid gap-4",
            pointCount === 1 && "max-w-3xl grid-cols-1",
            pointCount === 2 && "grid-cols-1 md:grid-cols-2",
            pointCount >= 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {activeRoute.points.map((point, index) => (
            <div
              key={point.id}
              className="flex gap-4 rounded-xl border border-accent/10 bg-bg-light p-5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {index + 1}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <h4 className="font-semibold leading-snug text-accent-dark">
                    {point.name}
                  </h4>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
