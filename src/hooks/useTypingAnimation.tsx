import { useState } from "react";

import { useScroll } from "framer-motion";

const useTypingAnimation = (text: string, options: any): string => {
  const [code, setCode] = useState("");

  const { scrollYProgress } = useScroll(options);

  scrollYProgress.on("change", (v) => {
    setCode(text.substring(0, Math.ceil(v * text.length)));
  });

  return code;
};

export default useTypingAnimation;
