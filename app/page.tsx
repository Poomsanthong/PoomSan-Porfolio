import About from "@/components/About";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <main className="bg-neutral-950 text-white min-h-screen selection:bg-orange-500 selection:text-black font-sans scroll-smooth w-full overflow-x-hidden">
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Contact />
    </main>
  );
}
//todo make the web anitmation faster in all devices
