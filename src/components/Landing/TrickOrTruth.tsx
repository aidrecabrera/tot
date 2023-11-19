import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function TrickOrTruth() {
  const message: any = [
    "Fear not the fictitious ghost stories,",
    "But the tyranny that has happened.",
  ];
  const message1: any = [
    "Whispers in the night, not of spirits unseen,",
    "But echoes of anguish, a nation in between.",
  ];
  const message2: any = [
    "Ghosts of democracy, now haunting the land,",
    "In the Philippines, where fear takes a stand.",
  ];
  const welcome: any = [
    "Balikan ang kuwento ng panahong walang palag, ",
    "marami ang bulag at matunaw ang habag sa taong lumabag.",
    "Sa panahong madali maging abo sa garapon ang katawan.",
  ];
  const welcome1: any = ["Sa panahong maraming nagdugo."];

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex justify-start font-nacelle leading-tight">
          <RevealText phrases={message} />
        </div>
        <div className="flex justify-center font-nacelle leading-tight">
          <RevealText phrases={message1} />
        </div>
        <div className="flex justify-end font-nacelle leading-tight">
          <RevealText phrases={message2} />
        </div>
      </div>
      <RevealLine />
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center font-nacelle leading-tight">
            <RevealText phrases={welcome} />
          </div>
          <div className="flex justify-center font-nacelle leading-tight">
            <RevealText phrases={welcome1} />
          </div>
          <div className="flex justify-center font-nacelle leading-tight">
            <RevealFigure />
          </div>
        </div>
      </div>
    </>
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
      <div ref={body} className="text-5xl flex flex-col gap-10">
        {phrases.map((word, index) => {
          return (
            <div key={index} className="linemask overflow-hidden">
              <motion.div
                custom={index}
                variants={animate}
                initial="initial"
                animate={isInView ? "open" : "initial"}
              >
                {word}
              </motion.div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function RevealFigure() {
  const animate = {
    initial: {
      y: "200%",
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    },
    open: (i: number) => ({
      y: "0%",
      transition: { duration: 1.1, delay: 0.15 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const body = useRef(null);
  const isInView = useInView(body, { once: false, margin: "-10%" });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <>
      <div ref={body} className="flex flex-row justify-center text-5xl gap-10">
        <div className="linemask overflow-hidden">
          <motion.div
            variants={animate}
            initial="initial"
            animate={isInView ? "open" : "initial"}
          >
            <img src="gago.png" className="w-56" alt="" />
          </motion.div>
        </div>
      </div>
    </>
  );
}

function RevealLine() {
  const animate = {
    initial: {
      width: "0%",
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    },
    open: {
      width: "100%",
      transition: { duration: 1.1, ease: [0.33, 1, 0.68, 1] },
    },
  };
  const body = useRef(null);
  const isInView = useInView(body, { once: false, margin: "-10%" });

  useEffect(() => {
    console.log(isInView + "!!!!!!!!!!!!!");
  }, [isInView]);

  return (
    <>
      <div ref={body}>
        <motion.hr
          className="border border-black my-16"
          variants={animate}
          initial="initial"
          animate={isInView ? "open" : "initial"}
        />
      </div>
    </>
  );
}
