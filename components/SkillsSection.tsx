import React from "react";
import {
  HTMLIcon,
  CSSIcon,
  JSIcon,
  TSIcon,
  ReactIcon,
  NextJSIcon,
  TailwindIcon,
  ReduxIcon,
  GitIcon,
  GitHubIcon,
  FirebaseIcon,
  LinuxIcon,
} from "./SkillIcons";
import { roboto_mono } from "@/lib/fonts";

function SkillsSection() {
  return (
    <section className="my-5">
      <h2
        className={` ${roboto_mono.className} w-max bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl lg:text-4xl`}
      >
        Skills/Tech Stack
      </h2>
      <div className="mx-auto mt-5 flex max-w-md flex-wrap  justify-center gap-5 lg:max-w-xl">
        <HTMLIcon />
        <CSSIcon />
        <TailwindIcon />
        <JSIcon />
        <TSIcon />
        <ReactIcon />
        <NextJSIcon />
        <ReduxIcon />
        <GitIcon />
        <GitHubIcon />
        <FirebaseIcon />
        <LinuxIcon />
      </div>
    </section>
  );
}

export default SkillsSection;
