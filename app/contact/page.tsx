"use client";

import PageHeader from "@/components/PageHeader";
import { MailIcon, MapIcon, PhoneCallIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";


export const metadata: Metadata = {
  title: "Contact AppExcel Media: Advertising Experts",
  description:
    "Get in touch with AppExcel Media for expert digital advertising solutions. We're here to help your business thrive in a dynamic market. Contact us today to learn more",
  icons: {
    icon: "/logo1.png", // /public path
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/logo.jpg",
  },
};

export default function ContactPage() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject:"",
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
    <>
      <PageHeader title="Contact Us " />
      <section className=" bg-[#F3F4F6]">
        <div className="max-w-7xl m-auto  py-20">
          <div className="flex  items-center p-2">
            <div className="flex flex-col gap-10">
              <span className="md:text-6xl text-4xl font-extrabold">
                Find the Perfect Partner for Your Business
              </span>
              <span>
                If you have questions or interest in partnership opportunities,
                or need support, our team is ready to assist you. We look
                forward to connecting with you and exploring how AppExcel can
                contribute to your digital success.
              </span>
              {/* <span>
                Reach out anytime to chat, share thoughts, or collaborate. Let&apos;s
                keep the conversation going!
              </span> */}
            </div>
            <div>
              <form action=""></form>
            </div>
          </div>
        </div>
        {/* <div
          id="map"
          className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
            width="100%"
            height="480"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div> */}
        <div className="container px-6 md:px-12 m-auto    mt-10 ">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
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
                    8 The Green STE R,
                    <br />
                    Dover, DE 199001, Kent County, USA
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
                    <Link href="tel:+971 5010 37952">
                      {" "}
                      MENA +971 5010 37952
                    </Link>
                    <br />
                    <Link href="tel:+91 99587 84044"> IN +91 99587 84044</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
