import { Brush, Laptop, Share, Target } from "lucide-react";
import React from "react";

export default function Services() {
  return (
    <section className="w-full h-[1055px] bg-primary text-white bg-[url('/blue-triangle.svg')] bg-no-repeat bg-left-bottom bg-clipPath bg-leftTriangle  mb-10">
      <div className="bg-[url('/cyan-triangle.svg')] bg-no-repeat bg-right-top bg-rightTriangle w-full h-full md:px-10 p-2 md:py-20">
        <div className="max-w-7xl m-auto flex md:flex-row flex-col items-center md:items-start">
          <span className="font-bold md:text-2xl text-xl w-1/4">Services</span>
          <div className="md:w-3/4 flex flex-col w-webkit md:pr-28">
            <span className="md:text-5xl text-3xl font-bold md:text-left text-center mb-5">
              Advertising Solutions
            </span>
            <span className="">
              Whether you are a start-up looking to launch your app or an
              established app business seeking to drive user growth and
              engagement, our firm has the skills, expertise, and experience to
              help you achieve your last-mile goals.
            </span>
            <div className="flex flex-wrap items-start justify-center md:justify-between gap-x-10">
              <div className="flex flex-col items-start gap-5 w-96 py-10 ">
                <Brush className="text-cyanno " size={40} />
                <span className="font-bold md:text-4xl text-2xl">Advertising</span>
                <span>
                  Ultrices leo dictum integer quam nulla morbi adipiscing ac
                  suspendisse neque vel non egestas commodo sit felis
                  consectetur.
                </span>
              </div>
              <div className="flex flex-col items-start gap-5 w-96 py-10 ">
                <Laptop className="text-cyanno " size={40} />
                <span className="font-bold md:text-4xl text-2xl">Digital Advertising</span>
                <span>
                  Ultrices leo dictum integer quam nulla morbi adipiscing ac
                  suspendisse neque vel non egestas commodo sit felis
                  consectetur.
                </span>
              </div>
              <div className="flex flex-col items-start gap-5 w-96 py-10 ">
                <Share className="text-cyanno " size={40} />
                <span className="font-bold md:text-4xl text-2xl">Social Media</span>
                <span>
                  Ultrices leo dictum integer quam nulla morbi adipiscing ac
                  suspendisse neque vel non egestas commodo sit felis
                  consectetur.
                </span>
              </div>
              <div className="flex flex-col items-start gap-5 w-96 py-10 ">
                <Target className="text-cyanno " size={40} />
                <span className="font-bold md:text-4xl text-2xl">Traditional</span>
                <span>
                  Ultrices leo dictum integer quam nulla morbi adipiscing ac
                  suspendisse neque vel non egestas commodo sit felis
                  consectetur.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
