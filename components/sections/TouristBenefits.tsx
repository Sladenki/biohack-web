import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  Download,
  Headphones,
  Heart,
  Map,
  Smartphone,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Живое погружение",
    description: "История оживает через голос, карту и атмосферу каждой точки маршрута",
  },
  {
    icon: Headphones,
    title: "Уникальный аудиоформат",
    description: "AI-аудиогид в говоре поморов — формат, которого нет ни в одном путеводителе",
  },
  {
    icon: Download,
    title: "Офлайн-доступность",
    description: "Скачайте маршрут и аудио заранее — интернет на берегу не всегда есть",
  },
  {
    icon: Map,
    title: "Карта с геолокацией",
    description: "Интерактивная карта покажет, где вы и куда идти дальше",
  },
  {
    icon: Heart,
    title: "Поддержка локального туризма",
    description: "Маршрут ведёт к местным музеям, стоянкам и сообществам края",
  },
  {
    icon: Smartphone,
    title: "Удобство на телефоне",
    description: "Всё работает в браузере смартфона — не нужно ставить приложение",
  },
];

export function TouristBenefits() {
  return (
    <Section id="benefits">
      <SectionHeader
        title="Что получает турист"
        subtitle="Всё необходимое для самостоятельного культурного путешествия"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((item) => (
          <Card key={item.title}>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <item.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-accent-dark">{item.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
