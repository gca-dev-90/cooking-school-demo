import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Chefs from "@/components/Chefs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Classes />
        <Chefs />
        <Gallery />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
