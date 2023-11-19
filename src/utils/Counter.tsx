import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Counter.css";
import MagneticInteraction from "./magneticInteraction";

interface KillingsCounterProps {
  peopleCount: number;
  description: string;
}

export default function Counter({
  peopleCount,
  description,
}: KillingsCounterProps) {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="flex gap-5">
      <div className="w-1/2">
        <h1 className="text-9xl">{description}</h1>
      </div>
      <div
        className="grid grid-cols-12 grid-rows-6 flex-wrap gap-4 w-1/2"
        ref={ref}
      >
        {Array.from({ length: peopleCount }, (_, index) => (
          <MagneticInteraction>
            <motion.img
              key={index}
              className={`person w-12 duration-300 fill-red-700`}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ duration: 0.1, delay: index * 0.01 }}
              src="person.svg"
            ></motion.img>
          </MagneticInteraction>
        ))}
      </div>
    </div>
  );
}
