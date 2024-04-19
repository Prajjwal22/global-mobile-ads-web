import Hero from "@/components/Hero";
import Video from "@/components/Video";
import WhatWeDo from "@/components/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Video />
      <Hero/>
      <WhatWeDo/>
    </main>
  );
}
