import React from "react";
import Tabs from "./Tabs";
import Button from "./Button";
import Link from "next/link";

export default function Values() {
  return (
    <section className="w-full text-primary bg-[url('/border-b.svg')] bg-no-repeat bg-bottom px-2 pb-20 my-10">
      <div className="max-w-7xl m-auto flex flex-col-reverse md:flex-row justify-between items-center md:gap-20 gap-10 ">
        <div className="md:w-3/4">
          {" "}
          <Tabs />
        </div>

        <div className="flex flex-col items-start gap-10 md:w-2/3">
          <span className="md:text-5xl text-3xl font-bold text-primary">
            Why AppExceL should be your top choice{" "}
          </span>
          <span>
            With 25MN+ and an ever-growing active mobile user base on our survey
            panel, we have been very prominent in delivering effective user
            acquisition and marketing campaigns for top global mobile unicorns,
            leveraging these users based on their app/category affinity.
          </span>
          <Link href="/contact">
            <Button title="Get Proposal " />
          </Link>
        </div>
      </div>
    </section>
  );
}
