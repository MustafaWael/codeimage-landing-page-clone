import { UseScrollOptions, useScroll } from "framer-motion";
import { useState } from "react";

function getStepIndex(progress: number, steps: number[]) {
  progress = Math.floor(progress * 100);
  const index = steps.findIndex((offset) => offset >= progress);
  return index === -1 ? steps.length - 1 : index;
}

const useStepsProgress = (offsets: number[], options: UseScrollOptions) => {
  const [currentStep, setCurrentStep] = useState(0);

  const { scrollYProgress: progress } = useScroll(options);

  progress.on("change", (v) => {
    setCurrentStep(getStepIndex(v, offsets));
  });

  return { progress, currentStep };
};

export default useStepsProgress;
