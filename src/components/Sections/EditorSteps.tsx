import Steps from "../Steps";
import EditorScene from "../EditorScene";
import { useRef } from "react";
import useTypingAnimation from "@/hooks/useTypingAnimation";
import useStepsProgress from "@/hooks/useStepsProgress";

const text = `function Counter() {
  const [count, setCount] = createSignal(0);

  // Increment the count state every second
  setInterval(
    () => setCount(count() + 1),
    1000
  );

  return <div>The count is {count()}</div>
}`;

const STEPS_OFFSETS = [30, 50, 70];

const EditorSteps = () => {
  const wrapper = useRef<HTMLDivElement>(null);

  const { progress, currentStep } = useStepsProgress(STEPS_OFFSETS, {
    target: wrapper,
    offset: ["start", "93% end"],
  });

  const code = useTypingAnimation(text, {
    target: wrapper,
    offset: ["-10%", "50% end"],
  });

  return (
    <div className="h-[2000px]" ref={wrapper}>
      <section className="bg-black pt-14 sticky top-0 left-0">
        <div className="w-full max-w-[1360px] mx-auto px-5 py-6 flex flex-col gap-y-12 text-white relative">
          <Steps active={currentStep} />
          <EditorScene
            code={code}
            progressPar={progress}
            currentStep={currentStep}
          />
        </div>
      </section>
    </div>
  );
};

export default EditorSteps;
