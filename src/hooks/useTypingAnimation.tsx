import { useState } from "react";

import { type UseScrollOptions, useScroll } from "framer-motion";

const useTypingAnimation = (
  text: string,
  options: UseScrollOptions
): string => {
  const [code, setCode] = useState("");

  const { scrollYProgress } = useScroll(options);

  scrollYProgress.on("change", (v) => {
    setCode(text.substring(0, Math.ceil(v * text.length)));
  });

  return code;
};

export default useTypingAnimation;
