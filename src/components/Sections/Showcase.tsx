import { javascript } from "@codemirror/lang-javascript";
import ReactCodeMirror from "@uiw/react-codemirror";
import { motion } from "framer-motion";

const code2 = `// Just a code example 
  export function Preview() {
   const [count, setCount] = 
     createSignal(0);
  }`;

const Showcase = () => {
  return (
    <section className="bg-[#111]">
      <div className="w-full max-w-[1360px] mx-auto px-5 py-64 flex flex-col gap-y-12 text-white relative">
        <div className="text-[#ededed] text-center flex flex-col gap-y-6 mb-6">
          <h2 className="text-6xl font-bold">
            Start now to beautify your snippets
          </h2>
          <p className="text-3xl">with 20+ custom themes and much more...</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 ">
          <ShowcaseCard gradient="showcase-card-gradient-1" backCard="back-1" />
          <ShowcaseCard gradient="showcase-card-gradient-2" backCard="back-2" />
          <ShowcaseCard gradient="showcase-card-gradient-3" backCard="back-3" />
          <ShowcaseCard gradient="showcase-card-gradient-4" backCard="back-4" />
          <ShowcaseCard gradient="showcase-card-gradient-5" backCard="back-5" />
        </div>
      </div>
    </section>
  );
};

export default Showcase;

interface ShowcaseCardProps {
  gradient: string;
  backCard: string;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ gradient, backCard }) => {
  return (
    <motion.div
      className="relative"
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
    >
      <div className={`back-card ${backCard}`}></div>
      <div
        className={`p-4 md:p-8 rounded-xl ${gradient} relative showcase-card`}
      >
        <div className="rounded-md overflow-hidden text-base">
          <ReactCodeMirror
            value={code2}
            height="auto"
            width="auto"
            theme="dark"
            extensions={[javascript()]}
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
    </motion.div>
  );
};
