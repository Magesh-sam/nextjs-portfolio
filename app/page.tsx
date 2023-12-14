import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";

function Page() {
  return (
    <main className="   mx-auto  flex max-w-5xl flex-col  gap-y-6    pt-10 ">
      <HeroSection />
      <AboutSection />
      <Timeline />
    </main>
  );
}

export default Page;
