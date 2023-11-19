import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MagneticInteraction from "../../utils/magneticInteraction";
import "./Killings.css";

export default function Rape() {
  const peopleCount = 23;

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div className="flex gap-5">
        <div className="w-1/2">
          <h1 className="text-9xl">
            A total estimate of 34,000 Filipinos who were tortured (documented)
          </h1>
        </div>
        <div className="flex flex-row flex-wrap gap-4 w-1/2" ref={ref}>
          {Array.from({ length: peopleCount }, (_, index) => (
            <MagneticInteraction>
              <motion.div
                key={index}
                className={`bg-black w-16 h-16 hover:bg-red-800 duration-300`}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={itemVariants}
                transition={{ duration: 0.1, delay: index * 0.01 }}
              ></motion.div>
            </MagneticInteraction>
          ))}
        </div>
      </div>
    </>
  );
}
