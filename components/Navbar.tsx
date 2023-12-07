import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex w-full items-center justify-between  bg-[#fafafa10] p-3 shadow-md backdrop-blur-md">
      <Image
        data-aos="slide-right"
        src="/m.png"
        alt="logo letter M"
        width={50}
        height={50}
        title="Magesh - The Front-end Developer"
      />
      <ul className="mr-8 flex gap-5">
        <li
          data-aos="fade-down"
          className="navlink-hover relative  hover:text-[#e465a1]"
        >
          <Link href="#home">Home</Link>
        </li>
        <li
          data-aos="fade-down"
          data-aos-delay="100"
          className="navlink-hover relative hover:text-[#e465a1]"
        >
          <Link href="#projects">Projects</Link>
        </li>
        <li
          data-aos="fade-down"
          data-aos-delay="200"
          className="navlink-hover relative hover:text-[#e465a1]"
        >
          <Link href="/">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
