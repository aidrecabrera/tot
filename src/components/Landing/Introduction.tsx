import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RoughNotation } from "react-rough-notation";
export default function Introduction() {
  const message: any = [
    "On the night of September 23, 1972, ",
    "Satan laughed, spreads his wings and",
    "spoke to the nation to make it known that",
    "the Philippines is in his hands.",
  ];

  return (
    <div className="flex flex-row">
      <h1 className="text-8xl font-nacelle leading-tight message">
        <RevealText phrases={message} />
      </h1>
    </div>
  );
}

function RevealText({ phrases }: { phrases: string[] }) {
  const animate = {
    initial: {
      y: "100%",
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    },
    open: (i: number) => ({
      y: "0%",
      transition: { duration: 1, delay: 0.15 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const body = useRef(null);
  const isInView = useInView(body, { once: false, margin: "-10%" });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div ref={body}>
        {phrases.map((word, index) => {
          return (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              key={index}
              className="linemask overflow-hidden"
            >
              <motion.p
                custom={index}
                variants={animate}
                initial="initial"
                animate={isInView ? "open" : "initial"}
              >
                <RoughNotation
                  animationDuration={500}
                  iterations={2}
                  type="underline"
                  strokeWidth={2}
                  color="black"
                  show={isHovered}
                >
                  {word}
                </RoughNotation>
              </motion.p>
            </div>
          );
        })}
      </div>
    </>
  );
}
