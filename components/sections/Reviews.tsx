import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Анна К.",
    role: "Турист из Москвы",
    text: "Никогда не думала, что водоросли могут быть так интересны! Аудиогид с поморским говором — это что-то невероятное. Слушала на пляже Ягры и чувствовала себя частью истории.",
    rating: 5,
  },
  {
    name: "Дмитрий В.",
    role: "Краевед, Архангельск",
    text: "Наконец-то цифровой продукт, который уважает наш край. География точная, рассказы живые. Рекомендую всем гостям города.",
    rating: 5,
  },
  {
    name: "Елена С.",
    role: "Учитель истории",
    text: "Взяла класс на маршрут «Устье Двины». Дети в восторге — формат с QR и аудиогидом работает лучше любой экскурсии в музее.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <Section id="reviews" className="bg-bg-light">
      <SectionHeader
        title="Отзывы"
        subtitle="Что говорят те, кто уже прошёл маршрут"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.name}>
            <div className="mb-3 flex gap-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-text-muted">&ldquo;{review.text}&rdquo;</p>
            <div className="mt-4 border-t border-accent/10 pt-4">
              <p className="font-semibold text-accent-dark">{review.name}</p>
              <p className="text-sm text-text-muted">{review.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
