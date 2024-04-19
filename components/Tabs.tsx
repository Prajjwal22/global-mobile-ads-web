"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Tabs() {
  const [state, setState] = useState(0);
  console.log(state);
  return (
    <div className="md:w-[600px] w-full">
      <div className="w-full">
        <div className="flex md:flex-row flex-col items-center cursor-pointer  font-bold">
          <span
            onClick={() => setState(0)}
            className={`px-5 py-5 md:w-52 bg-secondary text-white  w-full uppercase flex items-center justify-center ${
              state === 0
                ? "bg-secondary text-white"
                : "md:bg-white md:text-primary"
            }`}
          >
            Transparency
          </span>
          {state === 0 && (
            <div className="bg-secondary text-white p-4 font-normal md:hidden flex flex-col items-start gap-5 ">
              <span className="md:text-2xl text-lg font-bold">
                100% Campaign transparency
              </span>
              <span>
                We cultivate an environment of transparency and communication in
                all we do. You don&apos;t have to wonder what is going on with
                your campaign - we will keep you in the loop and in control.
              </span>
              <Image
                className="w-full"
                src="stats.svg"
                width={300}
                height={100}
                alt="image"
              />
            </div>
          )}
          <span
            onClick={() => setState(1)}
            className={`px-5 py-5 md:w-52  bg-secondary text-white  w-full uppercase flex items-center justify-center ${
              state === 1
                ? "bg-secondary text-white"
                : "md:bg-white md:text-primary"
            }`}
          >
            Team of Experts
          </span>
          {state === 1 && (
            <div className="bg-secondary text-white p-4 font-normal md:hidden flex flex-col items-start gap-5 ">
              <span className="md:text-2xl text-lg font-bold">
                222 100% Campaign transparency
              </span>
              <span>
                We cultivate an environment of transparency and communication in
                all we do. You don&apos;t have to wonder what is going on with
                your campaign - we will keep you in the loop and in control.
              </span>
              <Image
                className="w-full"
                src="/second.webp"
                width={300}
                height={100}
                alt="image"
              />
            </div>
          )}
          <span
            onClick={() => setState(2)}
            className={`px-5 py-5 md:w-52  bg-secondary text-white  w-full uppercase flex items-center justify-center ${
              state === 2
                ? "bg-secondary text-white"
                : "md:bg-white md:text-primary"
            }`}
          >
            Results
          </span>
          {state === 2 && (
            <div className="bg-secondary text-white p-4 font-normal md:hidden flex flex-col items-start gap-5 ">
              <span className="md:text-2xl text-lg font-bold">
                333 100% Campaign transparency
              </span>
              <span>
                We cultivate an environment of transparency and communication in
                all we do. You don&apos;t have to wonder what is going on with
                your campaign - we will keep you in the loop and in control.
              </span>
              <Image
                className="w-full"
                src="stats.svg"
                width={300}
                height={100}
                alt="image"
              />
            </div>
          )}
        </div>
        <div className="bg-secondary p-10 hidden md:block text-white">
          {state === 0 ? (
            <div className="flex flex-col items-start gap-5 ">
              <span className="text-2xl font-bold">
                100% Campaign transparency
              </span>
              <span>
                We cultivate an environment of transparency and communication in
                all we do. You don&apos;t have to wonder what is going on with
                your campaign - we will keep you in the loop and in control.
              </span>
              <Image
                className="w-full"
                src="stats.svg"
                width={300}
                height={100}
                alt="image"
              />
            </div>
          ) : state === 1 ? (
            <div className="flex flex-col items-start gap-5">
              <span className="text-2xl font-bold">
                222 100% Campaign transparency
              </span>
              <span>
                We cultivate an environment of transparency and communication in
                all we do. You don&apos;t have to wonder what is going on with
                your campaign - we will keep you in the loop and in control.
              </span>
              <Image
                className="w-full"
                src="/second.webp"
                width={300}
                height={100}
                alt="image"
              />
            </div>
          ) : (
            <div className="flex flex-col items-start gap-5">
              <span className="text-2xl font-bold">
                333 100% Campaign transparency
              </span>
              <span>
                We cultivate an environment of transparency and communication in
                all we do. You don&apos;t have to wonder what is going on with
                your campaign - we will keep you in the loop and in control.
              </span>
              <Image
                className="w-full"
                src="stats.svg"
                width={300}
                height={100}
                alt="image"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
