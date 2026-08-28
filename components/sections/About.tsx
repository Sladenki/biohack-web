import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { BookOpen, MapPin, Users } from "lucide-react";

const cards = [
  {
    icon: BookOpen,
    title: "Идея",
    description:
      "Возродить историю поморского водорослевого промысла в цифровом формате — чтобы каждый мог прикоснуться к живой культуре Беломорья, не открывая учебник.",
  },
  {
    icon: MapPin,
    title: "Проблема",
    description:
      "Сухие экскурсии не передают быт, язык и атмосферу ушедшей эпохи. Туристы видят места, но не слышат голос тех, кто здесь жил и трудился.",
  },
  {
    icon: Users,
    title: "Для кого",
    description:
      "Туристы, школьники, краеведы и экотуристы — все, кто хочет узнать поморский край не по сухим фактам, а через живой рассказ и интерактивную карту.",
  },
];

export function About() {
  return (
    <Section id="about" className="bg-bg-light">
      <SectionHeader
        title="О проекте"
        subtitle="Цифровой мост между прошлым и настоящим поморского края"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.title}>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <card.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-accent-dark">{card.title}</h3>
            <p className="mt-3 text-text-muted">{card.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
