import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  BookHeart,
  Globe,
  GraduationCap,
  MapPinned,
  Mic,
  Scale,
} from "lucide-react";

const values = [
  {
    icon: Mic,
    title: "Аутентичность",
    description: "Речь и интонации основаны на этнографических записях поморского говора",
  },
  {
    icon: BookHeart,
    title: "Живой язык",
    description: "Не сухие факты, а рассказ от первого лица — как будто беседа у костра",
  },
  {
    icon: MapPinned,
    title: "Географическая точность",
    description: "Каждая точка привязана к реальным местам Архангельской области",
  },
  {
    icon: Scale,
    title: "Культурное наследие",
    description: "Сохранение и популяризация традиций водорослевого промысла",
  },
  {
    icon: GraduationCap,
    title: "Вовлечение молодёжи",
    description: "Современный формат делает историю доступной для школьников и студентов",
  },
  {
    icon: Globe,
    title: "Масштабирование",
    description: "Модель можно адаптировать для других регионов и культурных маршрутов",
  },
];

export function WhyValuable() {
  return (
    <Section id="why-valuable" className="bg-bg-light">
      <SectionHeader
        title="Почему это ценно"
        subtitle="Проект соединяет технологии с живой культурой Севера"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((item) => (
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
