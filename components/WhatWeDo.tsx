import React from "react";
import Card from "./Card";
import { Rocket, RocketIcon, User } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section id="work" className="w-full text-primary bg-[url('/border-b.svg')] bg-no-repeat bg-bottom px-2 pb-20 mb-10">
      <div className="max-w-7xl m-auto flex flex-col gap-10 ">
        <div className="flex md:flex-row flex-col justify-between items-center md:items-end gap-5">
          <div className=" flex flex-col items-center md:items-start justify-center gap-5">
            <span className="text-xl">What we do</span>
            <span className="text-4xl font-bold md:w-2/3 text-center md:text-left">
              We solve digital challenges
            </span>
          </div>
          <div className="md:w-2/5 flex flex-col items-start justify-center gap-5 ">
            <span className="text-center md:text-left">
              Together, we help our clients achieve tangible, measurable
              results. Focused on business outcomes — we bring a unique set of
              expertise and skills to the party.
            </span>
            <span className=" m-auto md:m-0 border-b-2  cursor-pointer border-secondary">
              MORE ABOUT US
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between">
          <Card icon={<Rocket />} title="Marketing Tactic"/>
          <Card icon={<User/>} title="User Audiences"/>
          <Card icon={<RocketIcon /> } title="Performance Analysis"/>
        </div>
      </div>
    </section>
  );
}
