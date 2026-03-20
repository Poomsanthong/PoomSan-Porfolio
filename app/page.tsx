import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";

export default function Page() {
  return (
    <main className="bg-neutral-950 text-white min-h-screen selection:bg-orange-500 selection:text-black font-sans scroll-smooth w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* <About /> */}
    </main>
  );
}
