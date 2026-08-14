import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Priorities from "@/components/Priorities";
import Record from "@/components/Record";
import Photos from "@/components/Photos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Priorities />
        <Record />
        <Photos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
