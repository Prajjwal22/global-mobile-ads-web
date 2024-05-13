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
    <header className=" border-b h-28 border-gray-200 p-2">
      <div className="flex flex-row items-center h-full gap-20 text-primary justify-between m-auto max-w-6xl">
        <div className="flex items-center ">
          <Image
            src="/logo.jpg"
            className="max-w-[100px]"
            alt="logo"
            width={200}
            height={200}
          />
          <span className="text-4xl font-bold ml-5 uppercase">AppExcel Media</span>
        </div>
        <nav className="md:flex hidden items-center gap-10">
          <span>
            <Link href="/">Home</Link>
          </span>
          <span>
            <Link href="/about">About</Link>
          </span>
          <span>
            <Link href="/partnerships">Partnerships</Link>
          </span>
          <span>
            <Link href="/services">Services</Link>
          </span>
          <span>
            <Link href="/contact">Contact Us</Link>
          </span>
        </nav>
        {/* <Link href="/contact">
          {" "}
          <span className="ml-auto md:block hidden">
            <Button title="Get in touch" />
          </span>
        </Link> */}
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
              <Link href="/">Home</Link>
            </span>
            <span>
              <Link href="/about">About</Link>
            </span>
            <span>
              <Link href="/partnerships">Partnerships</Link>
            </span>
            <span>
              <Link href="/services">Services</Link>
            </span>
            <span>
              <Link href="/contact">Contact Us</Link>
            </span>
          </nav>
        )}
      </div>
    </header>
  );
}
