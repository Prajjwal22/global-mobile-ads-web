"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import { HamIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();
  const handleMenuOpen = () => {
    setShowMenu(!showMenu);
    !showMenu
      ? document.body.classList.add("fix-scroll-bar")
      : document.body.classList.remove("fix-scroll-bar");
  };

  const handleNav = (page: string) => {
    router.push(page);
    setShowMenu(false);
    document.body.classList.remove("fix-scroll-bar");
  };

  return (
    <header className=" border-b h-28 border-gray-200 p-2">
      <div className="flex flex-row items-center h-full text-primary justify-between m-auto max-w-6xl">
        <div className="flex items-center ">
          <Image
          src="/logo.jpg"
            className="md:max-w-[100px] max-w-24"
            alt="logo"
            width={200}
            height={200}
          />
          <span className="md:text-4xl  text-2xl font-bold ml-5 ">
            AppExceL
          </span>
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
          className="flex md:hidden items-center gap-1"
          onClick={handleMenuOpen}
        >
          Menu{!showMenu ? <Menu /> : <X />}
        </div>
        {showMenu && (
          <nav
            className={`md:hidden text-4xl font-bold flex flex-col bottom-0 ${
              showMenu ? "left-0" : "-left-full"
            }  transition-all duration-500 items-center gap-10 absolute w-screen h-[calc(100dvh-7rem)] z-50 justify-around bg-primary text-white`}
          >
            <span onClick={() => handleNav("/")}>Home</span>
            <span onClick={() => handleNav("/about")}>About</span>
            <span onClick={() => handleNav("/partnerships")}>Partnerships</span>
            <span onClick={() => handleNav("/services")}>Services</span>
            <span onClick={() => handleNav("/contact")}>Contact Us</span>
          </nav>
        )}
      </div>
    </header>
  );
}
