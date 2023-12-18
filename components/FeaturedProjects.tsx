import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "@/lib/projectsdata";
import Link from "next/link";

function FeaturedProjects() {
  return (
    <div className="mb-5">
      <section className="mb-3 flex flex-col gap-y-5">
        {ProjectData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
      <Link
        href="#"
        className="navlink-hover group relative mx-3 flex max-w-fit  items-center gap-2 transition-all hover:gap-4 "
      >
        View All Projects <span>&rarr;</span>
      </Link>
    </div>
  );
}

export default FeaturedProjects;
