import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";
import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <PageHeader title="About " />
      <section className=" bg-[#F3F4F6] ">
        <div className=" h-[600px] relative mb-20">
          <Image
            src="/about-hero.jpg"
            alt="about us"
            width={1200}
            height={1200}
            className="w-full h-full object-cover object-top"
          />
          <div className="h-full w-full absolute top-0 bg-black opacity-40"></div>

          <div className="  max-w-7xl   m-auto">
            <div className="flex bg-white absolute p-10 max-w-[600px] bottom-0 flex-col gap-5 m-auto">
              <span className="text-secondary font-bold text-2xl">
                Hi there!
              </span>
              <span className="text-primary  text-base md:text-xl">
                At AppExcel, we are driven by passion, innovation and
                entrepreneurial commitment to help you excell in your marketing
                & user acquition journey
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl m-auto text-lg">
          <div className=" flex flex-col justify-center md:items-start items-center mb-32">
            <span className="font-bold text-2xl w-1/4">Vision</span>
            <div className="w-3/4 border-t-2 border-cyanno pt-10">
              <div>
                <p>
                  AppExcel&apos;s vision is to redefine digital advertising
                  through innovation and strategic thinking. Our visionary
                  foundation propels us forward, shaping the future of
                  advertising technology.
                </p>
              </div>
              {/* <div className="grid grid-cols-3 gap-5 items-center justify-center">
                <Image
                  className="col-span-2 w-full"
                  src="/about/1.jpg"
                  alt="about1"
                  width={500}
                  height={500}
                />
                <Image
                  className="w-full"
                  src="/about/2.jpg"
                  alt="about1"
                  width={500}
                  height={500}
                />
                <Image
                  className="w-full"
                  src="/about/3.jpg"
                  alt="about1"
                  width={500}
                  height={500}
                />
                <Image
                  className="col-span-2 w-full"
                  src="/about/4.jpg"
                  alt="about1"
                  width={500}
                  height={500}
                />
              </div> */}
            </div>
          </div>
          <div className=" flex  flex-col  md:items-start items-center  mb-32 mr-32">
            <span className="font-bold text-2xl w-1/4">
              Champions striving for excellence
            </span>
            <div className="w-3/4 border-t-2 border-cyanno pt-10">
              <div>
                <p>
                  We are professionals driven by expertise and a passion for
                  excelling. Our diverse skill set fuels our ability to deliver
                  unparalleled solutions, navigating the dynamic landscape of
                  digital advertising with precision.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex   flex-col md:items-start items-center pb-20">
            <span className="font-bold text-2xl w-1/4">
              Top priority - our parnters
            </span>
            <div className="w-3/4 border-t-2 border-cyanno pt-10">
              <div>
                <p>
                  At AppExcel, we our priority is our you. We forge lasting
                  partnerships, tailor our services to your unique needs, and
                  are committed to providing a seamless experience that exceeds
                  expectations. Your goals are our goals.
                </p>
              </div>
            </div>
          </div>

          <div className=" flex   flex-col md:items-start items-center pb-20">
            <span className="font-bold text-2xl w-1/4">Innovation</span>
            <div className="w-3/4 border-t-2 border-cyanno pt-10">
              <div>
                <p>
                  Commitment to visionary innovation. Our team is driven by a
                  shared passion for redefining digital advertising through
                  forward-thinking strategies and cutting-edge solutions
                </p>
              </div>
            </div>
          </div>
          <div className=" flex   flex-col md:items-start items-center pb-20">
            <span className="font-bold text-2xl w-1/4">
              Data-Driven Precision
            </span>
            <div className="w-3/4 border-t-2 border-cyanno pt-10">
              <div>
                <p>
                  Campaigns succeed from data. Our experts leverage advanced
                  algorithms and data analytics to ensure precision in
                  targeting, providing insights that drive informed
                  decision-making
                </p>
              </div>
            </div>
          </div>
          <Timeline/>
        </div>
      </section>
    </>
  );
}
