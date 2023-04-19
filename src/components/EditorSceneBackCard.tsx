const EditorSceneBackCard = ({ active }: { active: number }) => {
  const gradients = ["gradient", "gradient-3", "gradient-4"];
  return (
    // Todo remove opacity
    <div
      className={`w-[80%] h-[400px] rounded-3xl absolute top-[100px] left-[50%] -translate-x-1/2 z-[1] ${gradients[active]} blur-[400px] saturate-[200%]`}
      style={{willChange: 'backgroundColor, background'}}
    ></div>
  );
};

export default EditorSceneBackCard;
