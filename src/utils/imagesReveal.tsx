import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function ImagesReveal() {
  let steps = 0;
  let currentIndex = 0;
  let nbOfImages = 0;
  let maxNumberOfImages = 8;
  let refs: any = [];

  const manageMouseMove = (e: any) => {
    const { clientX, clientY, movementX, movementY } = e;

    steps += Math.abs(movementX) + Math.abs(movementY);

    if (steps >= currentIndex * 150) {
      moveImage(clientX, clientY);

      if (nbOfImages === maxNumberOfImages) {
        removeImage();
      }
    }

    if (currentIndex === refs.length) {
      currentIndex = 0;
      steps = -150;
    }
  };

  const moveImage = (x: number, y: number) => {
    const currentImage = refs[currentIndex].current;
    currentImage.style.left = x + "px";
    currentImage.style.top = y + "px";
    currentImage.style.display = "block";
    currentIndex++;
    nbOfImages++;
    setZIndex();
  };

  const setZIndex = () => {
    const images = getCurrentImages();
    for (let i = 0; i < images.length; i++) {
      images[i].style.zIndex = i;
    }
  };

  const removeImage = () => {
    const images = getCurrentImages();
    images[0].style.display = "none";
    nbOfImages--;
  };

  const getCurrentImages = () => {
    let images = [];
    let indexOfFirst = currentIndex - nbOfImages;
    for (let i = indexOfFirst; i < currentIndex; i++) {
      let targetIndex = i;
      if (targetIndex < 0) targetIndex += refs.length;
      images.push(refs[targetIndex].current);
    }
    return images;
  };

  useEffect(() => {
    const handleScroll = () => {
      const images = getCurrentImages();
      for (let i = 0; i < images.length; i++) {
        images[i].style.left =
          parseInt(images[i].style.left) + window.pageXOffset + "px";
        images[i].style.top =
          parseInt(images[i].style.top) + window.pageYOffset + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        className={styles.main}
      >
        {[...Array(19).keys()].map((_, index) => {
          const ref = useRef(null);
          refs.push(ref);
          return (
            <img
              onClick={() => {
                console.log(refs);
              }}
              ref={ref}
              src={`/images/${index}.jpg`}
              key={index}
            ></img>
          );
        })}
      </div>
    </>
  );
}
