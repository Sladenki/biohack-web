import { Section, SectionHeader } from "@/components/ui/Section";
import { Stepper } from "@/components/ui/Stepper";
import { Headphones, MapPin, QrCode, Route } from "lucide-react";

const steps = [
  {
    icon: Route,
    title: "Выбираете маршрут",
    description: "Три маршрута по побережью Белого моря — от дельты Двины до Соловков",
  },
  {
    icon: MapPin,
    title: "Приходите на точку",
    description: "Следуйте по карте к ключевым местам поморского промысла",
  },
  {
    icon: QrCode,
    title: "Сканируете QR",
    description: "На каждой точке — QR-код или отметка на интерактивной карте",
  },
  {
    icon: Headphones,
    title: "Слушаете рассказ",
    description: "AI-аудиогид рассказывает историю голосом старого помора",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeader
        title="Как это работает"
        subtitle="Четыре простых шага от выбора маршрута до погружения в историю"
      />
      <Stepper steps={steps} />
    </Section>
  );
}
