import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-accent/10 bg-bg-light p-6",
        hover && "transition-shadow duration-200 hover:shadow-lg hover:shadow-accent/10",
        className,
      )}
    >
      {children}
    </div>
  );
}
