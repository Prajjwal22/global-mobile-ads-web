"use client";
import React, { useEffect } from "react";
import "./Brands.css";
import Image from "next/image";
export default function Brands() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      // Add type assertion to ensure TypeScript recognizes scroller as HTMLElement
      scrollers.forEach((scroller) => {
        const scrollerElement = scroller as HTMLElement; // Type assertion
        scrollerElement.setAttribute("data-animated", "true");
      
        const scrollerInner = scroller.querySelector(".scroller__inner");
      
        // Check if scrollerInner is not null before proceeding
        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);
      
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement;
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }
  }, []);
  return (
    <section id="partners" className="w-full text-primary  px-2 pb-20 mb-10">
      <div className="max-w-7xl m-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="md:w-1/4 flex flex-col items-center md:items-start justify-center gap-5">
          {/* <span className="text-lg md:text-xl">Our Partners</span> */}
          <span className="text-3xl md:text-4xl font-bold text-center md:text-left">
         Trusted Partners
          </span>
        </div>
        <div
          className="scroller md:w-3/4"
          data-direction="right"
          data-speed="slow"
        >
          <div className=" scroller__inner">
            <Image
              src="/brands/airtel.png"
              width="300"
              height="300"
              alt="logo"
            />
            <Image
              src="/brands/amazon.png"
              width="300"
              height="300"
              alt="logo"
            />
            <Image src="/brands/bybit.png" width="300" height="300" alt="logo" />
            <Image
              src="/brands/careem.png"
              width="300"
              height="300"
              alt="logo"
            />
            <Image
              src="/brands/dominos.png"
              width="300"
              height="300"
              alt="logo"
            />
            <Image
              src="/brands/mcd.png"
              width="300"
              height="300"
              alt="logo"
            />
             <Image
              src="/brands/flipkart.png"
              width="300"
              height="300"
              alt="logo"
            />
            <Image
              src="/brands/paysend.png"
              width="300"
              height="300"
              alt="logo"
            />
            <Image
              src="/brands/western-union.png"
              width="300"
              height="300"
              alt="logo"
            />
             <Image
              src="/brands/uber.png"
              width="300"
              height="300"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
