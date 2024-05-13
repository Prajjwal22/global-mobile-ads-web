"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect } from "react";

export default function Footer() {
  useLayoutEffect(() => {
    console.log("video mounted");
  }, []);
  return (
    <footer className="w-full bg-primary text-white flex flex-col items-center justify-between p-2 md:p-0">
      <div className="max-w-7xl  m-auto my-10">
        <div className="grid md:grid-cols-4 md:grid-rows-1 grid-rows-4 gap-5 justify-items-center">
          <Image src="/logo.jpg" width={200} height={200} alt="logo" />
          {/* <div className="flex flex-col items-start gap-1">
            <span className="font-bold text-2xl mb-2">Services</span>
            <span>Creative</span>
            <span>Development</span>
            <span>Merketing</span>
            <span>Social Media</span>
          </div> */}
          <div className="flex flex-col items-start gap-1">
            <span className="font-bold text-2xl mb-2">Agency</span>
            <Link href="/about">
              <span>About Us</span>
            </Link>
            <Link href="/services">
              {" "}
              <span>Services</span>
            </Link>
            <Link href="/partnerships">
              {" "}
              <span>Partnerships</span>
            </Link>
            <Link href="/contact">
              {" "}
              <span>Contact Us</span>
            </Link>
          </div>
          <div className="flex flex-col md:items-start gap-1 items-center">
            <span className="font-bold text-2xl mb-2">Keep in touch</span>
            <span>
              8 The Green STE R, Dover, DE 199001, Kent County, United States.
            </span>
            <span>
              {" "}
              <Link href="tel:+1 302 257 6122"> USA +1 302 257 6122</Link>
              <br />
              <Link href="tel:+971 5010 37952"> MENA +971 5010 37952</Link>
              <br />
              <Link href="tel:+91 99587 84044"> IN +91 99587 84044</Link>
            </span>
            <span>info@appexcelmedia.com</span>
          </div>
        </div>
      </div>
      <div className="border-t border-mute w-full">
        <div className="max-w-7xl flex justify-between text-sm m-auto py-10">
          <span>© AppExcelMedia.com</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
