import { Mouse } from "lucide-react";
import React from "react";
import TypeWriter from "./TypeWriter";

export default function Video() {
  return (
    <section className="h-[calc(100dvh-5rem)] relative flex items-center justify-center">
      <span className="absolute z-10 h-full w-full bg-black opacity-75"></span>
      <video
        className="w-full h-full object-cover "
        width="320"
        height="240"
        controls={false}
        autoPlay
        loop
        playsInline
        muted
        preload="none"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 text-white m-auto flex-col flex items-center justify-center h-full w-2/3  text-center leading-normal	 z-20">
        <h1 className=" font-extrabold text-4xl md:text-6xl mb-10  ">
          Amplify Your Business with Real-Time Measurable Performance
        </h1>
        <span className="text-4xl font-bold">
          <TypeWriter
            strings={[
              "Mobile Marketing",
              "Mobile Focused",
              "Data Driven",
              "ROI Concentrated",
              "Performance Marketing",
              "App User Acquisition",
            ]}
            typeSpeed={110}
            loop={true}
            backSpeed={70}
            cursorChar="_"
            showCursor={true}
          />
        </span>
        <span className="bottom-0 absolute pb-5 animate-bounce-slow">
          <Mouse size={40} />
        </span>
      </div>
    </section>
  );
}
