import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Lies() {
  const message: any = [
    "Marcos cited a sizeable",
    "Communist force that had",
    "obtained weapons from",
    "China that sought to",
    "overthrow the government",
    "and violate the peaceful",
    "lives of ordinary Filipinos.",
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
      x: "200%",
      opacity: 0,
      transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
    },
    open: (i: number) => ({
      x: "0%",
      opacity: 1,
      transition: { duration: 0.75, delay: 0.15 * i, ease: [0.25, 1, 0.5, 1] },
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
