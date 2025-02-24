"use client";

import React, { ChangeEvent, useState } from "react";
import { MailIcon, MapIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInput = (
    e: ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
    });
  };
  return (
    <div className="flex flex-wrap">
      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              onChange={(e) => handleInput(e)}
              name="name"
              type="text"
              className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
              id="exampleInput90"
            />
            <label
              className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
            htmlFor="exampleInput90 ${
              values.name !== ""
                ? "-translate-y-[0.9rem] scale-[0.8] text-primary"
                : ""
            }`}
            >
              Name
            </label>
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              onChange={(e) => handleInput(e)}
              name="email"
              type="email"
              className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
              id="exampleInput91"
            />
            <label
              className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
            htmlFor="exampleInput90 ${
              values.email !== ""
                ? "-translate-y-[0.9rem] scale-[0.8] text-primary"
                : ""
            }`}
            >
              Email address
            </label>
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              onChange={(e) => handleInput(e)}
              name="subject"
              type="subject"
              className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
              id="exampleInput91"
            />
            <label
              className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
            htmlFor="exampleInput90 ${
              values.email !== ""
                ? "-translate-y-[0.9rem] scale-[0.8] text-primary"
                : ""
            }`}
            >
              Subject
            </label>
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              onChange={(e) => handleInput(e)}
              name="phone"
              type="tel"
              maxLength={12}
              className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
              id="exampleInput91"
            />
            <label
              className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
            htmlFor="exampleInput90 ${
              values.phone !== ""
                ? "-translate-y-[0.9rem] scale-[0.8] text-primary"
                : ""
            }`}
            >
              Contact Number
            </label>
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init>
            <textarea
              onChange={(e) => handleInput(e)}
              name="message"
              className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
              id="exampleFormControlTextarea1"
              rows={3}
            ></textarea>
            <label
              htmlFor="exampleFormControlTextarea1"
              className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
            htmlFor="exampleInput90 ${
              values.message !== ""
                ? "-translate-y-[0.9rem] scale-[0.8] text-primary"
                : ""
            }`}
            >
              Message
            </label>
          </div>
          {/* <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
          <input
            className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] transition-all duration-200 ease-in-out rounded-md bg-[hsla(0,0%,100%,0.08)] checked:bg-[#2e51a2] peer-focus:ring-[#2e51a2] checked:ring-[#2e51a2] border-2 border-transparent focus:outline-none focus:border-transparent "
            type="checkbox"
            id="exampleCheck1"
          />
          <label
            htmlFor="exampleCheck1"
            className="text-neutral-500 select-none"
          >
            I have read and agree to the
            <a
              href="#"
              className="text-primary underline hover:no-underline"
            >
              Privacy Policy
            </a>
          </label>
        </div> */}
          <div className="flex items-center justify-center">
            <button className="inline-block px-8 py-3 leading-[1.6] text-lg font-semibold text-center text-white transition-all duration-200 ease-linear bg-primary border border-primary hover:bg-transparent hover:text-primary hover:border-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="text-[18px] font-semibold text-primary mb-6">
          Contact Information
        </div>

        <div className="flex items-start gap-3 mb-3 ">
          <MapIcon />
          <span className="text-neutral-500">
            8 The Green STE B,
            <br />
            Dover, DE 199001, Kent County,
            <br />
            United States of America.
          </span>
        </div>
        <div className="flex items-start gap-3 mb-3">
          <MailIcon />
          <span className="text-neutral-500">
            <Link href="mailto:info@appexcelmedia.com">
              info@appexcelmedia.com
            </Link>
          </span>
        </div>
        <div className="flex items-start gap-3">
          <PhoneCallIcon />
          <span className="text-neutral-500">
            <Link href="tel:+1 302 257 6122"> USA +1 302 257 6122</Link>
            <br />
            <Link href="tel:+971 5010 37952"> MENA +971 5010 37952</Link>
            <br />
            <Link href="tel:+91 99587 84044"> IN +91 99587 84044</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
