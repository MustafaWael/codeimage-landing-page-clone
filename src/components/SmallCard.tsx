import { motion } from "framer-motion";

interface SmallCardProps {
  title: string;
  date: string;
  views: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ title, date, views }) => {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      className="bg-[#e9d8fd] text-[#2d3748] p-6 rounded-[32px] w-[272px] h-[188px] flex flex-col gap-y-4"
    >
      <h3 className="font-bold text-xl leading-6">{title}</h3>
      <span className="text-lg">{date}</span>
      <span className="flex gap-x-2 items-center">
        <span className="font-bold text-3xl">{views}</span>
        <span className="text-lg self-end">views</span>
      </span>
    </motion.div>
  );
};

export default SmallCard;
