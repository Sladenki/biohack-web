import { Section, SectionHeader } from "@/components/ui/Section";

const partners = [
  "Музей М.В. Ломоносова",
  "Архангельский туристический кластер",
  "Фонд культурного наследия Поморья",
  "Беломорский биосферный заповедник",
  "Соловецкий музей-заповедник",
  "Региональный центр туризма",
];

export function Partners() {
  return (
    <Section id="partners">
      <SectionHeader
        title="Партнёры и поддержка"
        subtitle="Проект реализуется при поддержке культурных и туристических организаций региона"
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {partners.map((name) => (
          <div
            key={name}
            className="flex h-24 items-center justify-center rounded-xl border border-accent/10 bg-bg-light p-4 text-center"
          >
            <span className="text-xs font-medium text-text-muted sm:text-sm">
              {name}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
