import { Waves } from "lucide-react";

const socialLinks = [
  { label: "Telegram", href: "#" },
  { label: "VK", href: "#" },
  { label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-linear-to-br from-bg-dark to-bg-dark-2 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Waves className="h-7 w-7 text-accent" />
              <span className="text-lg font-bold">Голос Поморья</span>
            </div>
            <p className="mt-4 text-sm text-white/60">
              Культурно-исторический туристический маршрут по побережью
              Белого моря с AI-аудиогидом в говоре поморов.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-accent">Навигация</h3>
            <nav className="mt-4 flex flex-col gap-2">
              {[
                { href: "#about", label: "О проекте" },
                { href: "#routes", label: "Маршруты" },
                { href: "#audioguide", label: "Аудиогид" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-accent">Соцсети</h3>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm text-white/60 transition-colors hover:border-accent hover:text-accent"
                  aria-label={link.label}
                >
                  {link.label[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          &copy; 2026 «Голос Поморья». Все права защищены.
        </div>
      </div>
    </footer>
  );
}
