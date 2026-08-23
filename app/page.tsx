import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Priorities from "@/components/Priorities";
import Record from "@/components/Record";
import Photos from "@/components/Photos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// In dev, re-scan the /public/photos/ folder on every request so newly dropped
// photos (About's "welcome" hero and the Photos gallery) show up without a
// server restart. In production this page is statically rendered at build time
// on Vercel, which is what you want for performance.
export const dynamic =
  process.env.NODE_ENV === "production" ? "force-static" : "force-dynamic";

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
