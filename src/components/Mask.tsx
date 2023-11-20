import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RoughNotation } from "react-rough-notation";
import styles from "./page.module.css";
export default function Mask() {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 1.1;
  const targetMaskSize = 100;
  const easing = 0.15;
  let easedScrollProgress = 0;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageUrls = [
    "fuckers.png",
    "weirdo.jpg",
    "bootlickers.jpg",
    "1986.jpeg",
    "benigno.jpg",
  ];

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 100 + "%";
    updateCurrentImageIndex();
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  const updateCurrentImageIndex = () => {
    const progressFactor = Math.floor(easedScrollProgress * 20);
    const newIndex = Math.min(progressFactor, imageUrls.length - 1);
    setCurrentImageIndex(newIndex);
  };

  const fadeOutVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 0 },
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <main className={styles.main}>
      <h1
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute uppercase top-[350px] left-1/2 transform -translate-x-1/2 tracking-wider font-nacelle z-50"
      >
        <RoughNotation
          animationDuration={500}
          iterations={3}
          type="underline"
          strokeWidth={1}
          color="black"
          show={isHovered}
        >
          ARE YOU READY FOR SOME REAL HORROR?
        </RoughNotation>
      </h1>

      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <motion.img
            className="static object-cover w-screen h-screen"
            src={imageUrls[currentImageIndex]}
            alt=""
            initial="hidden"
            animate={easedScrollProgress >= 1 ? "visible" : "hidden"}
            variants={fadeOutVariants}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </main>
  );
}
