import { ArrowUp } from "lucide-react";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { EmblaCarousel } from "./Carousel";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import reviews from "../data/reviews.json";

export default function Testinomials() {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section className="w-full text-primary  px-2 pb-20 mb-10">
      <div className="max-w-7xl m-auto flex flex-col md:flex-col justify-between items-center gap-10 h-auto  bg-[#e8edff45]">
        <div className="w-full flex flex-col justify-between items-center gap-10 p-10">
          <span className="font-bold text-4xl text-center">
            The proof is in the numbers
          </span>
          <div className="flex flex-wrap items-center justify-around w-full gap-y-10">
            <div className="max-w-52 flex flex-col items-center ">
              <div className="w-44 mb-5 h-44 border border-gray-200 p-5   rounded-full flex items-center justify-center text-2xl">
                <span className="relative w-full h-full border border-secondary rounded-full flex items-center justify-center font-bold text-4xl flex-col">
                  37%{" "}
                  <ArrowUp
                    size={35}
                    className="text-cyanno font-bold absolute bottom-2"
                  />
                </span>
              </div>
              <p className="text-sm font-bold text-center">
                Average increase in sales for our clients
              </p>
            </div>
            <div className="max-w-52 flex flex-col items-center">
              <div className="w-44 mb-5 h-44 border border-gray-200 p-5   rounded-full flex items-center justify-center text-2xl">
                <span className="relative w-full h-full border border-secondary rounded-full flex items-center justify-center font-bold text-4xl flex-col">
                  100%{" "}
                  <ArrowUp
                    size={35}
                    className="text-cyanno font-bold absolute bottom-2"
                  />
                </span>
              </div>
              <p className="text-sm font-bold text-center">
                Google and Facebook-certified team
              </p>
            </div>
            <div className="max-w-52 flex flex-col items-center">
              <div className="w-44 mb-5 h-44 border border-gray-200 p-5   rounded-full flex items-center justify-center text-2xl">
                <span className="relative w-full h-full border border-secondary rounded-full flex items-center justify-center font-bold text-4xl flex-col">
                  81%{" "}
                  <ArrowUp
                    size={35}
                    className="text-cyanno font-bold absolute bottom-2"
                  />
                </span>
              </div>
              <p className="text-sm font-bold text-center">
                Results improved compared to previous agencies
              </p>
            </div>

            <div className="bg-cyanno rounded-xl text-white p-10 flex flex-col items-center gap-5  ">
              <span className="text-5xl font-bold">282,000+</span>
              <span className="text-sm font-bold">
                Leads generated so far...
              </span>
              <div className="bg-primary rounded-xl cursor-pointer text-white text-sm transition-colors duration-300 hover:text-primary font-medium uppercase min-h-12 flex items-center justify-center w-50 min-w-40 hover:bg-white border-blue  py-2 px-4">
                Contact us →
              </div>
            </div>
          </div>
        </div>
        <div className="h-92 w-full bg-white   rounded-t-[15%] md:p-10 flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <div className="md:px-20 w-full">
              <EmblaCarousel slides={reviews} options={OPTIONS} />
            </div>
            <Image
              src="/Line-arrow-2.svg"
              width={500}
              height={600}
              alt="lines"
              className="max-w-80 mr-20 hidden md:block"
            />
          </div>
          <div className="md:ml-auto">
            <div className="flex flex-row items-center justify-center md:gap-32  ">
              <div>
                <Image
                  src="/stars.png"
                  className="w-28"
                  width={500}
                  height={500}
                  alt="stars"
                />
                <span>5000+ Client reviews</span>
              </div>
              <div className="flex items-center flex-col md:flex-row gap-10">
                <Image
                  src="/testinomials.png"
                  width={100}
                  height={50}
                  alt="users"
                />
                <span className="border-b border-b-secondary cursor-pointer">
                  Get Quotes →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
