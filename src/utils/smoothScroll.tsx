import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
export default function smoothScroll({ children }): any {
  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return children;
}
