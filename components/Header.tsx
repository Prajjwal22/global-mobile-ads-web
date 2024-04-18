import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className=" border-b h-20 border-gray-200">
      <div className="flex flex-row items-center h-full gap-20 text-primary justify-between m-auto max-w-6xl">
        <Image
          src="/site-logo.svg"
          className="max-w-16"
          alt="logo"
          width={200}
          height={200}
        />
        <nav className="flex items-center gap-10">
          <span>About</span>
          <span>Work</span>
          <span>Services</span>
          <span>Case Studies</span>
        </nav>
        <span className="ml-auto">Contact</span>
      </div>
    </header>
  );
}
