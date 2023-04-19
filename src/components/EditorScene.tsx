import { javascript } from "@codemirror/lang-javascript";
import ReactCodeMirror from "@uiw/react-codemirror";
import { Twitter } from "./Icons";
import Image from "next/image";
import userImage from "../images/37072694.png";
import { motion, useWillChange, type MotionValue } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

interface EditorSceneProps {
  code: string;
  progressPar: MotionValue<number>;
  currentStep: number;
}

const EditorScene: React.FC<EditorSceneProps> = ({
  code,
  progressPar = 0,
  currentStep,
}) => {
  const isMobile = useIsMobile();
  const willChange = useWillChange()

  const gradients = ["gradient", "gradient-3", "gradient-4"];
  const gradient = gradients[currentStep];

  return (
    <div
      className={`${
        isMobile ? gradient : "gradient"
      } h-[360px] md:h-[480px] w-full rounded-3xl z-[2] grid place-content-center relative overflow-hidden`}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-[10px] bg-white"
        style={{ transformOrigin: "left", scaleX: progressPar }}
      />
      {isMobile || (
        <>
          <motion.div
            className="absolute top-1/2 left-1/2 gradient-3 z-[-3] rounded-3xl origin-center w-full h-full"
            initial={{
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              scale: currentStep === 1 ? 4 : 0,
            }}
            transition={{ duration: 0.6 }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 gradient-4 z-[-1] rounded-3xl origin-center w-full h-full"
            initial={{
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              scale: currentStep === 2 ? 4 : 0,
            }}
            transition={{ duration: 0.6 }}
          />
        </>
      )}

      <div>
        {/* twitter  w-[450px] h-[430px] */}
        <motion.div
          className="px-5 pt-3 pb-6 bg-[#1d1d1d] rounded-xl absolute left-1/2 top-1/2 opacity-0 w-[265px] h-[300px] md:w-[424px] md:h-[368px]"
          animate={{
            scale: currentStep === 2 ? 1 : 0,
            opacity: currentStep === 2 ? 1 : 0,
            x: "-50%",
            y: "calc(-50% + 10px)",
          }}
          transition={{ type: "spring", delay: 0.3, mass: 0.5 }}
          style={{willChange}}
        >
          <div className="px-3 pb-3">
            <div className="flex justify-between">
              <div className="flex gap-x-3 items-center">
                <div>
                  <Image
                    width={26}
                    height={26}
                    src={userImage}
                    alt="github user"
                    className="rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold">
                    codeimageapp
                  </span>
                  <span className="text-[10px] -mt-1 text-[rgba(255_255_255/.8)]">
                    @codeimageapp
                  </span>
                </div>
              </div>
              <div>
                <Twitter width={26} height={26} />
              </div>
            </div>
            <p className="text-[8px] md:text-[10px] py-2">
              Do you know that SolidJS doesn't use Virtual Dom?
            </p>
          </div>
        </motion.div>
        <motion.div
          className="p-6 gradient-3 rounded-xl absolute left-1/2 top-1/2 shadow-lg md:w-[396px] md:h-[280px] w-[240px] h-[210px]"
          animate={{
            scale: currentStep === 2 ? 1 : 0,
            opacity: currentStep === 2 ? 1 : 0,
            x: "-50%",
            y: "calc(-50% + 40px)",
          }}
          transition={{ type: "spring", mass: 0.6 }}
        />
        {/* code */}
        <div className="box-shadow rounded-xl overflow-hidden relative translate-y-[40px]">
          <div className="absolute w-full h-full top-0 left-0 glass-effect translate-x-[-55%] skew-x-[-18deg] z-10"></div>

          <motion.div
            className="bg-[rgba(38_31_62/.9)] h-[50px] flex gap-x-1 px-3 py-4"
            initial={{ marginBottom: "-50px" }}
            animate={{ marginBottom: currentStep > 0 ? -16 : -50 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.5 }}
            style={{willChange}}
          >
            <span className="w-[10px] h-[10px] bg-[#ff5f57] rounded-full flex -translate-y-1"></span>
            <span className="w-[10px] h-[10px] bg-[#febc2e] rounded-full flex -translate-y-1"></span>
            <span className="w-[10px] h-[10px] bg-[#28c840] rounded-full flex -translate-y-1"></span>
          </motion.div>

          <ReactCodeMirror
            value={code}
            height="auto"
            theme="dark"
            extensions={[javascript({ jsx: true })]}
            editable={false}
            basicSetup={{
              lineNumbers: false,
              highlightActiveLine: false,
              lintKeymap: false,
              highlightActiveLineGutter: false,
              foldGutter: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorScene;
