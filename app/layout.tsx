import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Голос Поморья — культурный маршрут по Белому морю",
  description:
    "Интерактивный туристический маршрут по побережью Белого моря с AI-аудиогидом в говоре поморов. Водорослевый промысел, живая история, карта маршрутов.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${onest.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
