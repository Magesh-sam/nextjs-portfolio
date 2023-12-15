import Image from "next/image";
import Link from "next/link";
import React from "react";
import { roboto_mono } from "@/lib/fonts";

function Navbar() {
  return (
    <nav
      className={`${roboto_mono.className} sticky top-0 z-10 flex w-full items-center justify-between  bg-[#fafafa10] p-3 shadow-md backdrop-blur-md`}
    >
      <Image
        src="/m.png"
        alt="logo letter M"
        width={50}
        height={50}
        title="Magesh - The Front-end Developer"
      />
      <ul className="mr-8 flex gap-5 text-lg">
        <li className="navlink-hover   relative ">
          <Link href="/">Home</Link>
        </li>
        <li className="navlink-hover   relative">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="navlink-hover   relative">
          <Link href="/">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
