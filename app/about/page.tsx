import PageHeader from "@/components/PageHeader";
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
              <span className="text-primary font-extrabold text-4xl md:text-6xl">
                We are best of Advertisers
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl m-auto text-lg">
          <div className=" flex md:flex-row flex-col justify-center md:items-start items-center mb-32">
            <span className="font-bold text-lg w-1/4">Our story</span>
            <div className="w-3/4">
              <div>
                <p>
                  With its inception in 2022, GMA is a powerful team of super
                  energized folks with more than a decade&apos;s industry experience,
                  driven to generate substantial business for our partners.
                </p>
                <p>
                  With passion, foresight, and a customer centric focus, we aim
                  to navigate our journey to transform the way consumers engage
                  with their phones & apps, with the sole objective being the
                  last mile conversions.
                </p>
                <p>
                  Ever since inception, GMA has been helping mobile businesses
                  to evolve by achieving their marketing goals & fabricating
                  their expectations.
                </p>
                <p>
                  We&apos;d be glad to help you scale your business & become a part
                  of your growth journey.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-5 items-center justify-center">
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
              </div>
            </div>
          </div>
          <div className=" flex md:flex-row flex-col  md:items-start items-center  mb-32">
            <span className="font-bold text-lg w-1/4">Our Vision</span>
            <div className="w-3/4 border-t-2 border-cyanno pt-10">
              <div>
                <p>
                  With its inception in 2022, GMA is a powerful team of super
                  energized folks with more than a decade&apos;s industry experience,
                  driven to generate substantial business for our partners.
                </p>
                <p>
                  With passion, foresight, and a customer centric focus, we aim
                  to navigate our journey to transform the way consumers engage
                  with their phones & apps, with the sole objective being the
                  last mile conversions.
                </p>
                <p>
                  Ever since inception, GMA has been helping mobile businesses
                  to evolve by achieving their marketing goals & fabricating
                  their expectations.
                </p>
                <p>
                  We&apos;d be glad to help you scale your business & become a part
                  of your growth journey.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex  md:flex-row flex-col md:items-start items-center pb-20">
            <span className="font-bold text-lg w-1/4">Our Mission</span>
            <div className="w-3/4 border-t-2 border-cyanno pt-10">
              <div>
                <p>
                  With its inception in 2022, GMA is a powerful team of super
                  energized folks with more than a decade&apos;s industry experience,
                  driven to generate substantial business for our partners.
                </p>
                <p>
                  With passion, foresight, and a customer centric focus, we aim
                  to navigate our journey to transform the way consumers engage
                  with their phones & apps, with the sole objective being the
                  last mile conversions.
                </p>
                <p>
                  Ever since inception, GMA has been helping mobile businesses
                  to evolve by achieving their marketing goals & fabricating
                  their expectations.
                </p>
                <p>
                  We&apos;d be glad to help you scale your business & become a part
                  of your growth journey.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}
