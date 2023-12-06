import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <section className="flex min-h-screen max-w-xl flex-col items-center  justify-evenly gap-y-3 px-5 lg:flex-row ">
      <div className="flex flex-col gap-3  ">
        <Image
          src="/undraw_code.svg"
          alt="profile"
          width={30}
          height={30}
          className="-top-10"
        />
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl ">
          Hi👋, I&apos;m
        </h1>
        <h2 className="w-max bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text py-2  text-3xl  font-bold text-transparent sm:text-4xl  md:text-5xl ">
          Mageshkannan
        </h2>

        <div className="flex gap-3">
          <h3
            className="text-2xl  sm:text-3xl md:text-4xl   "
            style={{ lineHeight: 1.2 }}
          >
            Creative{" "}
            <span className="w-max bg-gradient-to-r  from-purple-600 to-pink-500 bg-clip-text  font-semibold text-transparent">
              Frond-end{" "}
            </span>
            Web Developer !
          </h3>
        </div>
        <p
          className="max-w-3xl text-lg text-[#FAFAFA90] lg:text-xl "
          style={{ lineHeight: 1.5 }}
        >
          I&apos;m From India 🇮🇳, I love building interactive , Engaging and
          Entertaining Websites and Web Applications
        </p>
        <Image
          src="/undraw_code.svg"
          alt="profile"
          width={30}
          height={30}
          className="bottom-10"
        />
        <Link
          className="sliding-background relative  mt-2 max-w-min whitespace-nowrap rounded-md border-2 border-violet-500 px-2 py-2"
          href="https://www.canva.com/design/DAFpdYxWYME/8S-lldLZZmTrWfPzOTGpZg/view?utm_content=DAFpdYxWYME&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          target="_blank"
        >
          View Resume{" "}
        </Link>
      </div>
      <Image
        src="/hero-image.svg"
        alt="developer working illustration"
        width={500}
        height={300}
        priority
      />
    </section>
  );
}

export default HeroSection;