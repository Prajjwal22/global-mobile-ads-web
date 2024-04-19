import React from "react";
import Tabs from "./Tabs";
import Button from "./Button";

export default function Values() {
  return (
    <section className="w-full text-primary bg-[url('/border-b.svg')] bg-no-repeat bg-bottom px-2 pb-20 mb-10">
      <div className="max-w-7xl m-auto flex flex-col-reverse md:flex-row justify-between items-center md:gap-20 gap-10 ">
        <div className="md:w-3/4">
          {" "}
          <Tabs />
        </div>

        <div className="flex flex-col items-start gap-10 md:w-2/3">
          <span className="md:text-5xl text-3xl font-bold text-primary">
            Why Numerique is your top-choice
          </span>
          <span>
            We are a five-star rated holistic full-service digital marketing
            agencies, serving thousands of clients. Our digital agency covers
            all aspects of internet marketing: SEO, social media, and PPC
            management, all the way to email marketing, website design, and web
            development.
          </span>
          <Button title="Get Proposal " />
        </div>
      </div>
    </section>
  );
}
