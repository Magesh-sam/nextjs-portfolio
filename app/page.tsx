import HeroSection from "@/components/HeroSection";
import React from "react";
import { Open_Sans } from "next/font/google";
import SocialIcons from "@/components/SocialIcons";

const Sans = Open_Sans({
  subsets: ["latin"],
});

function page() {
  return (
    <main
      className={`${Sans.className} flex min-h-screen max-w-full flex-col items-center `}
    >
      <HeroSection />
      <SocialIcons />
    </main>
  );
}

export default page;
