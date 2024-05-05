import React from "react";
import Card from "./Card";
import { AreaChart, Rocket, RocketIcon, User } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section id="work" className="w-full text-primary bg-[url('/border-b.svg')] bg-no-repeat bg-bottom px-2 pb-20 mb-10">
      <div className="max-w-7xl m-auto flex flex-col gap-10 ">
        <div className="flex md:flex-row flex-col justify-between items-center md:items-end gap-5">
          <div className=" flex flex-col items-center md:items-start justify-center gap-5">
            {/* <span className="text-xl">What we do</span> */}
            <span className="text-4xl font-bold md:w-2/3 text-center md:text-left">
            Our value add:
            </span>
          </div>
          <div className="md:w-2/5 flex flex-col items-start justify-center gap-5 ">
            <span className="text-center md:text-left">
            Proven Marketing strategies to help brands identify, target, acquire and engage with relevant consumers
            </span>
            {/* <span className=" m-auto md:m-0 border-b-2  cursor-pointer border-secondary">
              MORE ABOUT US
            </span> */}
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between">
          <Card icon={<Rocket />} title="User Acquisition Strategies" description="With robust tracking and post-install events in-depth analysis, we have successfully developed a pool the top-notch App traffic providers, global media desks, DSPs and self-served channels. With well-defined strategies aligned with our partner's Marketing goals, we drive these fine users to the app platform aiming at last-mile conversion, high engagement, retention and a higher LTV cohort"/>
          <Card icon={<User/>} title="In house 25MN+ Mobile Userbase" description="Accumulated 25MN+ active mobile users on our survey panel. We leverage this user base to run our campaigns accordiong to the app category"/>
          <Card icon={<AreaChart /> } title="App Analytics & Reporting" description="We provide you with detailed analytics and reporting, so you can track your app's performance and make informed decisions about your marketing spends"/>
        </div>
      </div>
    </section>
  );
}
