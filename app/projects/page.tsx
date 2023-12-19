import FeaturedProjects from "@/components/FeaturedProjects";
import SkillsSection from "@/components/SkillsSection";
import { roboto_mono } from "@/lib/fonts";

function page() {
  return (
    <main className="  mx-auto  flex max-w-5xl flex-col  gap-y-6  px-3  pt-10">
      <div className="flex h-20 w-full  items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 ">
        <h1
          className="  text-3xl font-semibold
 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-4xl lg:text-5xl "
        >
          Projects
        </h1>
      </div>
      <h2
        className={` ${roboto_mono.className} w-max bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl lg:text-4xl`}
      >
        Featured Projects
      </h2>
      <FeaturedProjects />
      <SkillsSection />
    </main>
  );
}

export default page;
