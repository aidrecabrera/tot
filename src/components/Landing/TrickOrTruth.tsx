import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
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
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
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
      <div className="h-screen flex flex-col justify-center items-center pt-96 mt-96 mb-96">
        <motion.div
          variants={animate}
          initial="initial"
          animate={"open"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-[6rem] uppercase font-black "
        >
          <RoughNotationGroup show={isHovered}>
            What do you{" "}
            <RoughNotation
              animationDuration={200}
              iterations={3}
              type="circle"
              strokeWidth={1}
              color="yellow"
            >
              fear
            </RoughNotation>{" "}
            the most?
            <RoughNotation
              animationDuration={200}
              iterations={3}
              type="crossed-off"
              strokeWidth={1}
              color="black"
            >
              GHOSTS
            </RoughNotation>{" "}
            OR{" "}
            <RoughNotation
              animationDuration={200}
              iterations={3}
              type="box"
              strokeWidth={1}
              color="black"
            >
              HUMANS?
            </RoughNotation>
            <div className="h-screen">
              <h1>
                Regardless, you're about to find out,{" "}
                <RoughNotation
                  animationDuration={200}
                  iterations={3}
                  type="underline"
                  strokeWidth={1}
                  color="black"
                >
                  which is the scariest.
                </RoughNotation>
              </h1>
            </div>
          </RoughNotationGroup>
        </motion.div>
      </div>
      <div className="flex flex-col justify-center gap-10">
        <RevealTextHead phrases={["TRICK OR TRUTH?"]} />
        <div className="pb-4"></div>
      </div>
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
    </>
  );
}

function RevealText({ phrases }: { phrases: string[] }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
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
            <RoughNotation
              animationDuration={1000}
              animationDelay={100}
              iterations={3}
              type="circle"
              strokeWidth={1}
              color="black"
              show={isHovered}
              multiline={true}
            >
              <div key={index} className="linemask overflow-hidden">
                <motion.h1
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className=""
                  custom={index}
                  variants={animate}
                  initial="initial"
                  animate={isInView ? "open" : "initial"}
                >
                  {word}
                </motion.h1>
              </div>
            </RoughNotation>
          );
        })}
      </div>
    </>
  );
}

function RevealTextHead({ phrases }: { phrases: string[] }) {
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
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div ref={body} className="text-9xl font-black flex flex-col gap-10">
        {phrases.map((word, index) => {
          return (
            <div key={index} className="linemask overflow-hidden">
              <motion.div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                custom={index}
                variants={animate}
                initial="initial"
                animate={isInView ? "open" : "initial"}
              >
                <RoughNotation
                  animationDuration={700}
                  iterations={3}
                  type="circle"
                  strokeWidth={1}
                  color="black"
                  show={isHovered}
                >
                  {word}
                </RoughNotation>
              </motion.div>
            </div>
          );
        })}
      </div>
    </>
  );
}
