import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import RevealText from "../components/RevealText";
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
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className={`parent flex gap-5 `}>
        <div
          className={`w-1/2 ease-in-out duration-1000 ${
            isHovered ? "text-red-700 " : ""
          } `}
        >
          <RevealText phrases={[description]} />
        </div>
        <div
          className="grid grid-cols-12 grid-rows-6 flex-wrap gap-4 w-1/2"
          ref={ref}
        >
          {Array.from({ length: peopleCount }, (_, index) => (
            <MagneticInteraction>
              <motion.img
                key={index}
                className={`child person w-12 duration-300 fill-red-700`}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={itemVariants}
                transition={{ duration: 0.1, delay: index * 0.01 }}
                src="person.svg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              ></motion.img>
            </MagneticInteraction>
          ))}
        </div>
      </div>
      <div
        className={`follow duration-1000 ease-in-out fixed  h-screen w-screen top-0 left-0 ${
          isHovered ? "bg-black opacity-100" : ""
        } -z-50`}
      ></div>
    </>
  );
}
