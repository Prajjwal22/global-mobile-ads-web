import React from "react";

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
        muted
        preload="none"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 text-white m-auto flex-col flex items-center justify-center h-full w-2/3  text-center leading-tight	 z-20">
        <h1 className=" font-bold text-6xl mb-10  ">
          Amplify Your Business with Real-Time Measurable Performance
        </h1>
        <span className="text-xl">
          Congue consectetur sapien pellentesque ultrices tempus nunc.
        </span>
      </div>
    </section>
  );
}
