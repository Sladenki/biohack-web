"use client";

import { RouteTabs } from "@/components/ui/RouteTabs";
import { Section, SectionHeader } from "@/components/ui/Section";
import { routes } from "@/data/routes";
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activeRoute.points.map((point, index) => (
            <div
              key={point.id}
              className="flex gap-3 rounded-xl border border-accent/10 bg-bg-light p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {index + 1}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  <h4 className="font-semibold text-accent-dark">{point.name}</h4>
                </div>
                <p className="mt-1 text-sm text-text-muted">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
