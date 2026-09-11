import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Technologies } from "@/components/sections/Technologies";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Projects />
        <ProductShowcase />
        <Technologies />
        <Process />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
