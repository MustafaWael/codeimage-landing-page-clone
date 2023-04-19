import Image from "next/image";
import { Box } from "../Icons";
import projectsImage from "../../images/projects-showcase.webp";
import FeaturedCard, {
  FeaturedCardContent,
  FeaturedCardImageContent,
} from "../FeaturedCard";

const Projects = () => {
  return (
    <section className="bg-black">
      <div className="w-full max-w-[1360px] mx-auto px-5 pt-16 flex flex-col gap-y-12 text-white relative">
        <FeaturedCard>
          <FeaturedCardContent
            icon={<Box />}
            title="Store your snippets"
            description="You want to keep track of your snippets, and have a safe place to save them."
            buttonText="Getting started"
            bottomText="*You must be authenticated to save your snippets remotely."
          />

          <FeaturedCardImageContent background="lch(68.171%_90_152.173)">
            <Image
              className="translate-x-[95px] translate-y-[95px] scale-[1.2] rounded-[20px]"
              src={projectsImage}
              fill
              alt=""
              style={{ objectFit: "cover", objectPosition: "top left" }}
            />
          </FeaturedCardImageContent>
        </FeaturedCard>
      </div>
    </section>
  );
};

export default Projects;
