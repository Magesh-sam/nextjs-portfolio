import HeroSection from "@/components/HeroSection";
import React from "react";
import SocialIcons from "@/components/SocialIcons";
import ProjectSection from "@/components/ProjectSection";

function Page() {
  return (
    <main className="  flex min-h-screen max-w-full flex-col items-center ">
      <HeroSection />
      <SocialIcons />
      <ProjectSection />
    </main>
  );
}

export default Page;
