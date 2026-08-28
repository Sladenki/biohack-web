"use client";

import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { routes } from "@/data/routes";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    route: routes[0].id,
    date: "",
    comment: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = cn(
    "w-full rounded-xl border border-accent/20 bg-white px-4 py-3 text-text",
    "placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20",
  );

  if (submitted) {
    return (
      <Section id="contact">
        <div className="mx-auto max-w-lg text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-accent" />
          <h2 className="mt-6 text-2xl font-bold text-accent-dark">
            Заявка отправлена!
          </h2>
          <p className="mt-3 text-text-muted">
            Спасибо, {formData.name}! Мы свяжемся с вами в ближайшее время для
            подтверждения записи на маршрут.
          </p>
          <Button
            className="mt-6"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                route: routes[0].id,
                date: "",
                comment: "",
              });
            }}
          >
            Отправить ещё одну заявку
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <Section id="contact">
      <SectionHeader
        title="Запись на маршрут"
        subtitle="Оставьте заявку, и мы поможем спланировать ваше путешествие"
      />

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl space-y-5 rounded-2xl border border-accent/10 bg-bg-light p-6 sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text">
              Имя *
            </label>
            <input
              id="name"
              type="text"
              required
              className={inputClass}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ваше имя"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text">
              Email *
            </label>
            <input
              id="email"
              type="email"
              required
              className={inputClass}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="email@example.com"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-text">
              Телефон
            </label>
            <input
              id="phone"
              type="tel"
              className={inputClass}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+7 (999) 000-00-00"
            />
          </div>
          <div>
            <label htmlFor="route" className="mb-1.5 block text-sm font-medium text-text">
              Маршрут *
            </label>
            <select
              id="route"
              required
              className={inputClass}
              value={formData.route}
              onChange={(e) => setFormData({ ...formData, route: e.target.value })}
            >
              {routes.map((route) => (
                <option key={route.id} value={route.id}>
                  {route.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-text">
            Предпочтительная дата
          </label>
          <input
            id="date"
            type="date"
            className={inputClass}
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="comment" className="mb-1.5 block text-sm font-medium text-text">
            Комментарий
          </label>
          <textarea
            id="comment"
            rows={4}
            className={inputClass}
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            placeholder="Расскажите о ваших пожеланиях..."
          />
        </div>

        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Отправить заявку
        </Button>
      </form>
    </Section>
  );
}
