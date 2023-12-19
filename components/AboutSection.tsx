import React from "react";

import { roboto_mono } from "@/lib/fonts";
import SocialIcons from "./SocialIcons";
import Link from "next/link";

function AboutSection() {
  return (
    <article className="mb-5 flex flex-col gap-y-3 px-3">
      <div className="flex items-center gap-x-2">
        <h2
          className={` ${roboto_mono.className} w-max bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-4xl font-extrabold text-transparent`}
        >
          About
        </h2>
        <SocialIcons />
      </div>
      {/* //* I&apos;m is equal to I'm */}
      <section className="mb-3 mt-3 flex flex-col gap-y-5">
        <p className="  text-wrap-balanced text-tee  items-center break-words text-left  text-lg font-normal">
          Hello, I&apos;m Mageshkannan and I&apos;m a front-end developer from
          India{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="iconify iconify--twemoji inline-block"
              viewBox="0 0 36 36"
              width={20}
              height={20}
            >
              <path
                fill="#138808"
                d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4H0v4z"
              />
              <path fill="#EEE" d="M0 13h36v10H0z" />
              <path
                fill="#F93"
                d="M36 13V9a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v4h36z"
              />
              <circle cx={18} cy={18} r={4} fill="navy" />
              <circle cx={18} cy={18} r={3} fill="#EEE" />
              <path
                fill="#6666B3"
                d="m18 15 .146 2.264 1.001-2.035-.73 2.147 1.704-1.498-1.497 1.705 2.147-.731-2.035 1.002L21 18l-2.264.146 2.035 1.001-2.147-.73 1.497 1.704-1.704-1.497.73 2.147-1.001-2.035L18 21l-.146-2.264-1.002 2.035.731-2.147-1.705 1.497 1.498-1.704-2.147.73 2.035-1.001L15 18l2.264-.146-2.035-1.002 2.147.731-1.498-1.705 1.705 1.498-.731-2.147 1.002 2.035z"
              />
              <circle cx={18} cy={18} r={1} fill="navy" />
            </svg>{" "}
            .
          </span>{" "}
          I love to build creative and engaging front end web applications. I
          breath 0s and 1s.
        </p>
        <p className=" text-wrap-balanced  items-center break-words  text-lg font-normal">
          Besides coding, you&apos;ll catch me traveling around ✈️, soaking in
          the vibes of different places 🗺️, and diving into the world of food
          and culture. Speaking of which, Chicken Biryani🍗 is my ultimate love
          😋.
        </p>
        <p className=" text-wrap-balanced  items-center break-words  text-lg font-normal">
          Nature is my happy place 🌳, and I&apos;m all about that swim life 🏊.
          Oh, and wildlife photography?📸 Absolutely love it! Elephants🐘,
          Tigers🐯, Rhinos🦏, Crocs🐊, Whales🐳, Sea Turtles🐢, Hornbills,
          Owls🦉, Penguins🐧... you name it, I&apos;m smitten&nbsp;❤️
        </p>
      </section>
      <Link
        className={`max-w-fit border-2 border-pink-500 px-3 py-2 shadow-neo transition duration-300 ease-in  hover:shadow-none ${roboto_mono.className}`}
        href="https://www.canva.com/design/DAFpdYxWYME/8S-lldLZZmTrWfPzOTGpZg/view?utm_content=DAFpdYxWYME&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
        target="_blank"
      >
        View Resume
      </Link>
    </article>
  );
}

export default AboutSection;
