'use client'

import Image from "next/image";
import React, { useLayoutEffect } from "react";

export default function Footer() {

    useLayoutEffect(() => {
        console.log("video mounted")
      }, []);
  return (
    <footer className="w-full bg-primary text-white flex flex-col items-center justify-between p-2 md:p-0">
      <div className="max-w-7xl  m-auto my-10">
        <div className="grid md:grid-cols-4 md:grid-rows-1 grid-rows-4 gap-5 justify-items-center">
          <Image src="/site-logo.svg" width={100} height={100} alt="logo" />
          <div className="flex flex-col items-start gap-1">
            <span className="font-bold text-2xl mb-2">Services</span>
            <span>Creative</span>
            <span>Development</span>
            <span>Merketing</span>
            <span>Social Media</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="font-bold text-2xl mb-2">Agency</span>
            <span>About Us</span>
            <span>Our Team</span>
            <span>Awards</span>
            <span>Contact Us</span>
            <span>News & Blogs</span>
          </div>
          <div className="flex flex-col md:items-start gap-1 items-center">
            <span className="font-bold text-2xl mb-2">Keep in touch</span>
            <span>123 Demo St, San Fransisco, CA 45678, United States.</span>
            <span>+1 123-456-7890</span>
            <span>mail@example.com</span>
          </div>
        </div>
      </div>
      <div className="border-t border-mute w-full">
        <div className="max-w-7xl flex justify-between text-sm m-auto py-10">
          <span>© 2024 GlobalMobileAds.com</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
