import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-screen w-full bg-hero bg-right-bottom bg-no-repeat bg-mobheroSize md:bg-heroSize mb-20">
      <div className=" text-primary max-w-7xl flex flex-col items-start justify-center m-auto gap-10  h-full p-5">
        <h2 className=" text-xl md:text-2xl  font-extrabold ">
          At AppExcel, we envision a digital landscape where innovation meets
          opportunity. Guided by this vision, our services are designed to
          redefine the possibilities of digital advertising, offering
          transformative solutions that empower businesses to thrive in a
          dynamic and ever-evolving marketplace.
        </h2>
        {/* <span className=" text-lg  text-mute">
          Congue consectetur sapien pellentesque ultrices tempus nunc.
        </span> */}
        <div className="">
          <Link href="/contact">
            <Button title="Get In Touch" />
          </Link>
        </div>
      </div>
    </section>
  );
}
