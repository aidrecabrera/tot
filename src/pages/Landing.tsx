import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Introduction from "../components/Landing/Introduction";
import Lies from "../components/Landing/Lies";
import NoChoice from "../components/Landing/NoChoice";
import Proclamation from "../components/Landing/Proclamation";
import Promises from "../components/Landing/Promises";
import Suffer from "../components/Landing/Suffer";
import TrickOrTruth from "../components/Landing/TrickOrTruth";
import Mask from "../components/Mask";
import "../main.css";
import ImagesReveal from "../utils/imagesReveal";

export default function Landing() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 5 }}
        className="-mx-10"
      >
        <Mask />
      </motion.div>
      <div className="mb-[25vh]">
        <TrickOrTruth />
      </div>
      <div className="flex flex-col items-center">
        <div className="py-24">
          <Introduction />
          <div className="h-[150vh] ">
            <ImagesReveal />
          </div>
          <img
            className="relative -top-[1600px] left-20 -z-10"
            src="intro-effects.png"
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 -mt-[1600px]">
        <div className="">
          <Proclamation />
        </div>
        <div>
          <img src="ferdinand.png" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2 pt-24 gap-10">
        <div>
          <img className="w-full h-5/6" src="fuck-you.gif" alt="" />
        </div>
        <div>
          <h1 className="text-7xl">
            <Lies />
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-10">
          <h1 className="text-7xl">
            <Promises />
          </h1>
        </div>
        <div>
          <img className="w-full h-5/6" src="n03311.png" alt="" />
        </div>
      </div>
      <div className="flex flex-row justify-center w-screen">
        <h1 className="text-7xl">
          <Suffer />
        </h1>
      </div>
      <RevealLine />
      <div className="h-screen flex flex-col justify-center items-center text-center gap-24">
        <h1 className="text-8xl w-5/6">
          <NoChoice />
        </h1>
        <Link to={"/horrors"} preventScrollReset={false}>
          <div className="flex justify-center items-center duration-300 ease-in-out hover:text-red-700 hover:bg-black border-2 border-black rounded-full h-56 w-56">
            <h1 className="text-9xl">→</h1>
          </div>
        </Link>
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
          className="border border-white my-16"
          variants={animate}
          initial="initial"
          animate={isInView ? "open" : "initial"}
        />
      </div>
    </>
  );
}
