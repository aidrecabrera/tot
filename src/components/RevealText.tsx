import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealTextProps {
  phrases: string[];
}

const RevealText: React.FC<RevealTextProps> = ({ phrases }) => {
  const animate = {
    initial: {
      y: "200%",
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    },
    open: (i: number) => ({
      y: "0%",
      transition: { duration: 0.75, delay: 0.15 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-10%" });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <div ref={body} className="text-9xl">
      {phrases.map((word, index) => {
        return (
          <div key={index} className="linemask overflow-hidden">
            <motion.p
              custom={index}
              variants={animate}
              initial="initial"
              animate={isInView ? "open" : "initial"}
            >
              {word}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
};

export default RevealText;
