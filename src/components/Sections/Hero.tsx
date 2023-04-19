import Image from "next/image";
import { Star } from "../Icons";
import codeImage from "../../images/codeimage_preview_mobile_ultra.webp";

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen relative">
      <div className="w-full max-w-[1360px] mx-auto px-5 py-6 md:mt-20 flex flex-col xl:flex-row text-white relative">
        <div>
          <div className="w-[90%]">
            <h1 className="text-5xl md:text-7xl font-bold max-w-[860px]">
              A tool to <br />{" "}
              <span className="text-[lch(45%_70_270)]">beautify</span> your{" "}
              <span className="text-[lch(45%_70_270)]">code</span> screenshots
            </h1>
            <p className="leading-[1.25] text-2xl font-semibold mt-6 md:max-w-lg">
              Instantly manage your code snippets, make them beautiful to read
              and share them to everyone.
            </p>
          </div>

          <div className="flex flex-col gap-3 mt-14 w-fit sm:flex-row md:w-auto">
            <button className="bg-[lch(45%_70_270)] text-white px-6 py-3 rounded-lg text-xl">
              Getting started
            </button>
            <button className="flex text-white rounded-lg text-xl overflow-hidden h-[56px]">
              <div className="bg-[#373e47] px-6 py-3 flex items-center gap-x-3">
                <span className="flex items-center -mb-1">
                  <Star />
                </span>
                <span className="text-2xl">Star</span>
              </div>
              <span className="bg-[#22272e] px-6 py-3 flex items-center h-full">
                786
              </span>
            </button>
          </div>
        </div>

        <div className="mt-10 dots-background xl:max-w-[700px] z-0 xl:absolute xl:right-0 xl:top-72 xl:translate-x-0 xl:-translate-y-20 rounded-3xl">
          <div className="bg-[lch(45%_70_270)] rounded-3xl md:rounded-[40px] flex justify-center xl:translate-x-10 xl:-translate-y-10">
            <Image src={codeImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
