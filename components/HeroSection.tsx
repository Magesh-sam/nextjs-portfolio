import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen  flex-col items-center  justify-evenly gap-y-3 px-5 lg:flex-row "
    >
      <div className="flex flex-col gap-3  ">
        <Image
          src="/undraw_code.svg"
          alt="profile"
          width={30}
          height={30}
          className="-top-10"
        />
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-base sm:text-lg md:text-xl lg:text-2xl "
        >
          Hi👋, I&apos;m
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="350"
          className="w-max bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text py-2  text-3xl  font-bold text-transparent sm:text-4xl  md:text-5xl "
        >
          Mageshkannan
        </h2>

        <div className="flex gap-3">
          <h3
            className="text-2xl  sm:text-3xl md:text-4xl   "
            style={{ lineHeight: 1.2 }}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Creative{" "}
            <span className="w-max bg-gradient-to-r  from-purple-600 to-pink-500 bg-clip-text  font-semibold text-transparent">
              Frond-end{" "}
            </span>
            Web Developer !
          </h3>
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay="450"
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
        <div className="flex gap-3" data-aos="fade-up" data-aos-delay="500">
          <Link
            className=" mt-2 max-w-min whitespace-nowrap rounded-md border-2 border-violet-500 bg-violet-500 px-2 py-2 transition-all  hover:bg-transparent"
            href="mailto:mageshkannanam@gmail.com"
            target="_blank"
          >
            Contact me
          </Link>
          <Link
            className="sliding-background relative  mt-2 max-w-min whitespace-nowrap rounded-md border-2 border-violet-500 px-2 py-2"
            href="https://www.canva.com/design/DAFpdYxWYME/8S-lldLZZmTrWfPzOTGpZg/view?utm_content=DAFpdYxWYME&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            target="_blank"
          >
            View Resume{" "}
          </Link>
        </div>
      </div>
      <Image
        data-aos="fade-left"
        data-aos-delay="300"
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
