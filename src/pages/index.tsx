import Hero from "@/components/Sections/Hero";
import EditorSteps from "@/components/Sections/EditorSteps";
import Projects from "@/components/Sections/Projects";
import Showcase from "@/components/Sections/Showcase";
import OpenSource from "@/components/Sections/OpenSource";
import ComingSoon from "@/components/Sections/ComingSoon";

export default function Home() {
  return (
    <>
      <Hero />
      <EditorSteps />
      <Projects />
      <ComingSoon />
      <Showcase />
      <OpenSource />
    </>
  );
}
