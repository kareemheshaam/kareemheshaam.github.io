import { Navigation } from "@/components/navigation";
import {
  About,
  Articles,
  Certifications,
  Contact,
  Experience,
  Footer,
  Hero,
  Projects,
  References,
  Research,
  Skills,
} from "@/components/portfolio-sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Articles />
        <References />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
