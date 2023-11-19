import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function TrickOrTruth() {
  const trickOrTruth: any = ["trick", "truth"];
  const description: any = [
    "Greed has caused innocent blood to flow.",
    "Human rights, lost in the overthrow.",
    "They came to seize and take whatever they please.",
  ];
  const [isMappingComplete, setIsMappingComplete] = useState(false);

  useEffect(() => {
    setIsMappingComplete(true);
  }, []);

  return (
    <div className="flex flex-col justify-between h-[90vh]">
      <div className="flex flex-col justify-center items-center h-screen font-bold leading-none text-[25vh] uppercase">
        {trickOrTruth.map((word: string, index: number) => (
          <div className="flex -m-3">
            <motion.h1
              className={`font-cinzel ${index === 1 ? "" : ""}`}
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)", color: "red" }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                color: index === 1 ? "red" : "white",
              }}
              transition={{ duration: 5, delay: index * 2.5 }}
              onAnimationComplete={() => {
                if (index === trickOrTruth.length - 1) {
                  setIsMappingComplete(true);
                }
              }}
            >
              {word}
            </motion.h1>
          </div>
        ))}
      </div>
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
      transition: { duration: 1, delay: 3 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const body = useRef(null);
  const isInView = useInView(body, { once: false });

  return (
    <>
      <div>
        {phrases.map((word, index) => {
          return (
            <div key={index} className="linemask overflow-hidden">
              <motion.p
                custom={index}
                variants={animate}
                initial="initial"
                animate="open"
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
