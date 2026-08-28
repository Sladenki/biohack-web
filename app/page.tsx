import { About } from "@/components/sections/About";
import { AudioGuide } from "@/components/sections/AudioGuide";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Partners } from "@/components/sections/Partners";
import { Reviews } from "@/components/sections/Reviews";
import { RoutesMap } from "@/components/sections/RoutesMap";
import { TouristBenefits } from "@/components/sections/TouristBenefits";
import { WhyValuable } from "@/components/sections/WhyValuable";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <RoutesMap />
        <AudioGuide />
        <HowItWorks />
        <WhyValuable />
        <TouristBenefits />
        <Reviews />
        <ContactForm />
        <FAQ />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
