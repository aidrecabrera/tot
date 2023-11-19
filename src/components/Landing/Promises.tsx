import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Promises() {
  const message: any = [
    "Marcos promised that he",
    "would use the special",
    "powers he was given in",
    "Martial Law to lead reforms",
    "that would lead the",
    "Philippines to prosperity",
    "and peace.",
  ];

  return (
    <div className="flex flex-row">
      <h1 className="text-8xl font-nacelle leading-tight">
        <RevealText phrases={message} />
      </h1>
    </div>
  );
}

function RevealText({ phrases }: { phrases: string[] }) {
  const animate = {
    initial: {
      y: "200%",
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    },
    open: (i: number) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.15 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const body = useRef(null);
  const isInView = useInView(body, { once: false, margin: "-10%" });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <>
      <div ref={body} className="text-7xl">
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
    </>
  );
}
