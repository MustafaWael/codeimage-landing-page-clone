import useIsMobile from "@/hooks/useIsMobile";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

interface FeaturedCardProps {
  children: React.ReactNode | React.ReactNode[];
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ children }) => {
  const isMobile = useIsMobile();

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end", "start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1, 1, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1, 1, 1], [0.7, 1, 1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: isMobile ? "1" : opacity,
        scale: isMobile ? 1 : scale,
        willChange: "transform, opacity",
      }}
      className="flex flex-wrap md:flex-nowrap justify-between items-center gap-x-[96px] border-[1px_solid_rgb(24_24_27)] bg-[#27272a40] rounded-[80px] p-10"
    >
      {children}
    </motion.div>
  );
};

export default FeaturedCard;

interface FeaturedCardImageContentProps {
  children: React.ReactNode | React.ReactNode[];
  background: string;
}

export const FeaturedCardImageContent: React.FC<
  FeaturedCardImageContentProps
> = ({ children, background }) => {
  return (
    <div className="w-[850px] hidden md:block h-[484px] overflow-hidden rounded-[50px]">
      <div className={`bg-[${background}] h-full w-full relative`}>
        {children}
      </div>
    </div>
  );
};

interface FeaturedCardContentProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  buttonText?: string;
  bottomText?: string;
}

export const FeaturedCardContent: React.FC<FeaturedCardContentProps> = ({
  icon,
  title,
  description,
  buttonText,
  bottomText,
}) => {
  return (
    <div className="text-white flex flex-col justify-center items-center text-center">
      <div className="bg-[lch(68.171%_90_152.173)] w-[64px] h-[64px] rounded-[24px] text-white grid place-content-center mb-10">
        {icon}
      </div>
      <h2 className="text-5xl font-bold mb-10">{title}</h2>
      <p className="text-2xl mb-10">{description}</p>
      <button className="bg-[hsla(204,100%,40%,.15)] text-[#0099ff] p-3 rounded-xl font-semibold text-lg mb-10">
        {buttonText}
      </button>
      {bottomText ? (
        <p className="text-[#999999] text-lg">{bottomText}</p>
      ) : null}
    </div>
  );
};
