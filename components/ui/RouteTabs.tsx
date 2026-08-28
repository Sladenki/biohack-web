"use client";

import { cn } from "@/lib/utils";
import type { Route } from "@/data/routes";

interface RouteTabsProps {
  routes: Route[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function RouteTabs({ routes, activeId, onSelect }: RouteTabsProps) {
  return (
    <div className="flex flex-col gap-3">
      {routes.map((route) => (
        <button
          key={route.id}
          type="button"
          onClick={() => onSelect(route.id)}
          className={cn(
            "rounded-xl border-2 p-4 text-left transition-all duration-200",
            activeId === route.id
              ? "border-accent bg-accent/10 shadow-md shadow-accent/10"
              : "border-accent/10 bg-white hover:border-accent/30",
          )}
        >
          <h3
            className={cn(
              "font-semibold",
              activeId === route.id ? "text-accent-dark" : "text-text",
            )}
          >
            {route.title}
          </h3>
          <p className="mt-1 text-sm text-text-muted">{route.subtitle}</p>
        </button>
      ))}
    </div>
  );
}
