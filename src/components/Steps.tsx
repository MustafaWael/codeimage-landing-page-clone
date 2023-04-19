import Card from "./Card";
import EditorSceneBackCard from "./EditorSceneBackCard";

const steps = [
  {
    title: "Add your code",
    description:
      "Once you've got all of your code into CodeImage, you can customize your snippet.",
  },
  {
    title: "Beautify it",
    description:
      "Customize your snippet by changing syntax theme, colors, window theme and more...",
  },
  {
    title: "Share to everyone",
    description: "Once ready, you can share and embed your snippet everywhere.",
  },
] as const;

const Steps = ({ active }: { active: number }) => {
  return (
    <>
      <EditorSceneBackCard active={active} />
      <div className="flex justify-between gap-x-8 z-[2]">
        {steps.map(({ title, description }, i) => (
          <Card key={i} title={title} description={description} active={active === i} />
        ))}
      </div>
    </>
  );
};

export default Steps;
