import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorOverlay() {
  const cursorSize = 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2 + window.pageXOffset);
    mouse.y.set(clientY - cursorSize / 2 + window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        translateX: smoothMouse.x,
        translateY: smoothMouse.y,
      }}
      className="bg-black backdrop:invert w-8 h-8 rounded-full pointer-events-none"
    ></motion.div>
  );
}
