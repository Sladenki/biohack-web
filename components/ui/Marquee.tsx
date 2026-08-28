interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-white/5 py-3">
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 text-sm font-medium text-white/80"
          >
            {item}
            <span className="text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
