import { useEffect } from "react";

const useSkewOnScroll = (domElement) => {
  useEffect(() => {
    const projectsContainer = document.querySelector(`.${domElement}`);

    let currentPixel = window.pageYOffset;

    const looper = () => {
      const newPixel = window.pageYOffset;
      const diff = newPixel - currentPixel;
      let speed = diff * 0.35;

      if (projectsContainer) {
        console.log("speed", speed);
        if (speed < 10 && speed > -10) {
          projectsContainer.style.transform = "skewY(" + speed + "deg)";
        }
      }

      currentPixel = newPixel;

      requestAnimationFrame(looper);
    };

    looper();
  }, []);
};

export default useSkewOnScroll;
