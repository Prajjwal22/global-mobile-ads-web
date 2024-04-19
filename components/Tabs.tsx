"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Tabs() {
  const [state, setState] = useState(0);
  return (
    <div className="w-[600px]">
      <div>
        <div className="flex flex-row items-center cursor-pointer  font-bold">
          <span onClick={() => setState(0)} className={`px-5 py-5 w-52 uppercase flex items-center justify-center ${state ===0 && "bg-secondary text-white"}`}>
            Transparency
          </span>
          <span onClick={() => setState(1)} className={`px-5 py-5 w-52 uppercase flex items-center justify-center ${state ===1 && "bg-secondary text-white"}`}>
             Team of Experts
          </span>
          <span onClick={() => setState(2)} className={`px-5 py-5 w-52 uppercase flex items-center justify-center ${state ===2 && "bg-secondary text-white"}`}>
            Results
          </span>
        </div>
        <div className="bg-secondary p-10 text-white">
          {state === 0 ? (
            <div className="flex flex-col items-start gap-5 ">
              <span className="text-2xl font-bold">100% Campaign transparency</span>
              <span>
                We cultivate an environment of transparency and communication in
                all we do. You don&apos;t have to wonder what is going on with
                your campaign - we will keep you in the loop and in control.
              </span>
              <Image className="w-full" src="stats.svg" width={300} height={100} alt="image" />
            </div>
          ) : state === 1 ? (
            <div className="flex flex-col items-start gap-5">
              <span className="text-2xl font-bold">222 100% Campaign transparency</span>
              <span>
                We cultivate an environment of transparency and communication in
                all we do. You don&apos;t have to wonder what is going on with
                your campaign - we will keep you in the loop and in control.
              </span>
              <Image className="w-full" src="/second.webp" width={300} height={100} alt="image" />
            </div>
          ) : (
            <div className="flex flex-col items-start gap-5">
            <span className="text-2xl font-bold"> 333 100% Campaign transparency</span>
            <span>
              We cultivate an environment of transparency and communication in
              all we do. You don&apos;t have to wonder what is going on with
              your campaign - we will keep you in the loop and in control.
            </span>
            <Image className="w-full" src="stats.svg" width={300} height={100} alt="image" />
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
