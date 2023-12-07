import { ProjectData } from "@/lib/projectsdata";
import React from "react";
import SingleProject from "./SingleProject";
import Link from "next/link";

function ProjectSection() {
  return (
    <section id="projects" className="flex min-h-screen  flex-col gap-3">
      <h2 className="mb-8 text-center text-xl underline underline-offset-8 sm:text-2xl md:text-3xl lg:text-4xl">
        Featured Projects
      </h2>
      <section className="flex flex-col space-y-5">
        {ProjectData.map((project) => (
          <SingleProject
            key={project.title}
            src={project.src}
            title={project.title}
            link={project.link}
            description={project.description}
            source={project.source}
            skills={project.skills}
          />
        ))}
      </section>
      <Link
        href="/archive"
        className="archive-hover relative my-5 ml-8 flex max-w-fit items-center gap-1 pb-2 transition-all hover:gap-3"
      >
        <span>View Full Projects Archive</span>
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M6 12H18M18 12L13 7M18 12L13 17"
              stroke="#FAFAFA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </Link>
    </section>
  );
}

export default ProjectSection;
