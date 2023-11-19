import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MassacresList from "../components/Landing/Massacres";
import "../main.css";
import Counter from "../utils/Counter";
import Methods from "../utils/Methods";

export default function Hras() {
  const MartialLawStatistics = [
    {
      type: "Killing and Enforced Disappearance",
      count: 232,
    },
    {
      type: "Arbitrary Detention (For More Than Six Months)",
      count: 69,
    },
    {
      type: "Torture (Rape and Forcible Abduction)",
      count: 23,
    },
    {
      type: "Arbitrary Detention (Lasting Between 15 Days to Six Months)",
      count: 141,
    },
    {
      type: "Torture (Involving Children and Minors)",
      count: 21,
    },
    {
      type: "Arbitrary Detention (Lasting Between 36 Hours Up to 15 Days)",
      count: 123,
    },
    {
      type: "Torture (Involving Psychological, Mental, and Emotional Harm Other Than Insanity, Acts of Lasciviousness)",
      count: 146,
    },
    {
      type: "Involuntary Exile (Involving Violence and Illegal Takeover of Business)",
      count: 57,
    },
    {
      type: "Cruel, Inhumane, & Degrading Treatment",
      count: 18,
    },
    {
      type: "Involuntary Exile (Involving Intimidation and Physical Injuries)",
      count: 273,
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-16 ">
        <div className="flex flex-row justify-between ">
          <a
            href="https://11103film.ph/"
            className="hover:underline transition-all duration-700 ease-in-out"
          >
            <h1 className="text-6xl">11,103</h1>
          </a>
          <div className="flex flex-col gap-6">
            <h1 className="text-7xl">Now try to comprehend these numbers.</h1>
            <h1 className="text-7xl">
              One block represents 10 Filipino lives.
            </h1>
          </div>
          <Link to={"/"}>
            <div className="flex justify-center items-center duration-300 ease-in-out hover:text-red-700 hover:bg-black border-2 border-black rounded-full h-56 w-56">
              <h1 className="text-9xl">←</h1>
            </div>
          </Link>
        </div>
        <RevealLine />
        <div className="flex flex-col gap-16">
          {MartialLawStatistics.map((stat, index) => (
            <div className=" pt-16" key={index}>
              <Counter peopleCount={stat.count} description={stat.type} />
              <RevealLine />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-screen gap-10 mt-16">
        <div className="text-7xl overflow-hidden">
          <MassacresList />
        </div>
      </div>
      <div>
        <Methods />
      </div>
    </div>
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
          className="border border-black mt-24"
          variants={animate}
          initial="initial"
          animate={isInView ? "open" : "initial"}
        />
      </div>
    </>
  );
}
