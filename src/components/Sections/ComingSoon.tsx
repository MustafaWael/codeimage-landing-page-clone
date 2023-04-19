import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import FeaturedCard, {
  FeaturedCardContent,
  FeaturedCardImageContent,
} from "../FeaturedCard";
import { Chart, Paper, Pen } from "../Icons";
import SmallCard from "../SmallCard";
import useIsMobile from "@/hooks/useIsMobile";

const ComingSoon = () => {
  const isMobile = useIsMobile();

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end", "start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1, 1, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1, 1, 1], [0.7, 1, 1, 1]);

  return (
    <section className="bg-black">
      <div className="w-full max-w-[1360px] mx-auto px-5 pb-24 pt-16 flex flex-col gap-y-12 text-white relative">
        <motion.div
          className="flex flex-wrap md:flex-nowrap gap-x-12 gap-y-8"
          style={{
            scale: isMobile ? 1 : scale,
            opacity: isMobile ? 1 : opacity,
          }}
          ref={ref}
        >
          <div className="flex justify-between items-center gap-x-[96px] min-h-[564px] md:w-1/2 w-full border-[1px_solid_rgb(24_24_27)] bg-[#27272a40] rounded-[80px] p-10">
            <div className="text-white flex flex-col justify-center items-center text-center">
              <div className="bg-[lch(60%_90_27.937)] w-[64px] h-[64px] rounded-[24px] text-white grid place-content-center mb-10">
                <Paper />
              </div>
              <h2 className="text-5xl font-bold mb-10">Theme builder</h2>
              <p className="text-2xl">
                Create your own custom theme for CodeImage and CodeMirror, then
                share it to everyone.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center gap-x-[96px] min-h-[564px] md:w-1/2 w-full border-[1px_solid_rgb(24_24_27)] bg-[#27272a40] rounded-[80px] p-10">
            <div className="text-white flex flex-col justify-center items-center text-center">
              <div className="bg-[lch(65%_70_191.538)] w-[64px] h-[64px] rounded-[24px] text-white grid place-content-center mb-10">
                <Pen />
              </div>
              <h2 className="text-5xl font-bold mb-10">Embeds</h2>
              <p className="text-2xl">
                Embeds your snippets everywhere in a SEO-friendly way.
              </p>
            </div>
          </div>
        </motion.div>

        <FeaturedCard>
          <FeaturedCardImageContent background="lch(58.652%_85_302.105)">
            <div className="p-14">
              <div className="flex gap-x-8">
                <div className="flex flex-col gap-y-8">
                  <SmallCard
                    title="Angular Change Detection"
                    date="Last week"
                    views={"1400"}
                  />
                  <SmallCard
                    title="Solid Reactivity Example"
                    date="This month"
                    views={"10k"}
                  />
                </div>

                <div className="flex flex-col gap-y-8 translate-y-[60px]">
                  <SmallCard
                    title="Rxjs operators"
                    date="Last week"
                    views={"700"}
                  />
                  <SmallCard title="Jest vs Jasmine" date="Today" views={"0"} />
                </div>
              </div>
            </div>
          </FeaturedCardImageContent>

          <FeaturedCardContent
            icon={<Chart />}
            title="Store your snippets"
            description="You want to keep track of your snippets, and have a safe place to save them."
            buttonText="Getting started"
          />
        </FeaturedCard>
      </div>
    </section>
  );
};

export default ComingSoon;
