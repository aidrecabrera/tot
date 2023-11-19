import { motion } from "framer-motion";
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
        <div>
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
      <div className="h-screen flex flex-col justify-center items-center text-center gap-24">
        <h1 className="text-8xl w-5/6">
          <NoChoice />
        </h1>
        <a href="/horrors">
          <div className="border-2 border-black rounded-full px-7 py-2">
            <h1 className=" tracking-wider font-bold">WHAT'S THE AFTERMATH?</h1>
          </div>
        </a>
      </div>
    </div>
  );
}
