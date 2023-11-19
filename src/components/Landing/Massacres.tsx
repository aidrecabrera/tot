import { motion } from "framer-motion";

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

  return (
    <div className="flex gap-10">
      <h1 className="text-9xl w-1/2">Massacres happened during the Regime</h1>
      <div className="grid grid-cols-1 gap-5 justify-between w-1/2">
        {massacres.map((massacre, index) => (
          <motion.h1
            key={index}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="hover:underline duration-150 ease-in-out"
          >
            {massacre}
          </motion.h1>
        ))}
      </div>
    </div>
  );
}
