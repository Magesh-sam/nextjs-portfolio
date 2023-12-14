import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex w-full items-center justify-between  bg-[#fafafa10] p-3 shadow-md backdrop-blur-md">
      <Image
        src="/m.png"
        alt="logo letter M"
        width={50}
        height={50}
        title="Magesh - The Front-end Developer"
        className=" slide-down duration transition duration-300 ease-in "
      />
      <ul className="mr-8 flex gap-5">
        <li className="navlink-hover  navlinkOne relative ">
          <Link href="#home">Home</Link>
        </li>
        <li className="navlink-hover  navlinkTwo relative">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="navlink-hover  navlinkThree relative">
          <Link href="/">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
