
interface CardProps {
    title: string
    description: string
    active?: boolean
}

const Card: React.FC<CardProps> = ({title = "", description = "", active}) => {
  return (
    <div className={`${active ? 'active' : ''} duration-[.8s] ease-out border-shadow p-6 md:flex flex-col gap-y-6 text-white md:w-1/3 transition-all bg-[#27272a40] rounded-3xl ${active ? "opacity-100" : "opacity-60"} ${active ? "flex" : "hidden"}`}>
      <h2 className="font-bold text-xl md:text-3xl">{title}</h2>
      <p className="text-base md:text-lg">
        {description}
      </p>
    </div>
  );
};

export default Card;
