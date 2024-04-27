"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import { HamIcon, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuOpen = () => {
    setShowMenu(!showMenu);
    !showMenu
      ? document.body.classList.add("fix-scroll-bar")
      : document.body.classList.remove("fix-scroll-bar");
  };

  return (
    <header className=" border-b h-20 border-gray-200 p-2">
      <div className="flex flex-row items-center h-full gap-20 text-primary justify-between m-auto max-w-6xl">
        <Image
          src="/site-logo.svg"
          className="max-w-16"
          alt="logo"
          width={200}
          height={200}
        />
        <nav className="md:flex hidden items-center gap-10">
          <span>
            <Link href="/about">About</Link>
          </span>
          <span><Link href="/#work">Work</Link></span>
          <span>
            <Link href="/#services">Services</Link>
          </span>
          <span> <Link href="/#partners">Partners</Link></span>
        </nav>
        <Link href="/contact">
          {" "}
          <span className="ml-auto md:block hidden">
            <Button title="Get in touch" />
          </span>
        </Link>
        <div
          className="flex md:hidden items-center gap-3"
          onClick={handleMenuOpen}
        >
          Menu{!showMenu ? <Menu /> : <X />}
        </div>
        {showMenu && (
          <nav
            className={`md:hidden text-4xl font-bold flex flex-col bottom-0 ${
              showMenu ? "left-0" : "-left-full"
            }  transition-all duration-500 items-center gap-10 absolute w-screen h-[calc(100dvh-5rem)] z-50 justify-around bg-primary text-white`}
          >
            <span>
              <Link href="/about">About</Link>
            </span>
            <span>Work</span>
            <span>Services</span>
            <span>Case Studies</span>
          </nav>
        )}
      </div>
    </header>
  );
}
