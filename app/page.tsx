import Brands from "@/components/Brands/Brands";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testinomials from "@/components/Testinomials";
import Values from "@/components/Values";
import Video from "@/components/Video";
import WhatWeDo from "@/components/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Video />
      <Hero />
      <WhatWeDo />
      <Services />

      <Values />
      <Brands />
      {/* <Testinomials /> */}
    </main>
  );
}
