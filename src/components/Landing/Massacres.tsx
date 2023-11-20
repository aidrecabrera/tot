import { motion } from "framer-motion";
import { useState } from "react";
export default function Massacres() {
  const massacres = [
    "Bacong Bridge massacre",
    "Daet massacre",
    "Escalante massacre",
    "Jabidah massacre",
    "Manili massacre",
    "Palimbang massacre",
    "Pata Island massacre",
    "Sag-od massacre",
    "Tacub massacre",
    "Tictapul massacre",
  ];

  const itemVariants = {
    hidden: { opacity: 1, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex gap-10">
      <h1
        className={`text-9xl w-1/2 ease-in-out duration-1000 ${
          isHovered ? "text-red-700 " : ""
        }`}
      >
        Massacres happened during the Regime
      </h1>
      <div className="grid grid-cols-1 gap-5 justify-between w-1/2">
        {massacres.map((massacre, index) => (
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`hover:underline duration-1000 ease-in-out hover:text-red-700
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {massacre}
          </motion.h1>
        ))}
      </div>
      <div
        className={`follow duration-500 ease-in-out fixed  h-screen w-screen top-0 left-0 ${
          isHovered ? "bg-black opacity-100" : ""
        } -z-50`}
      ></div>
    </div>
  );
}
