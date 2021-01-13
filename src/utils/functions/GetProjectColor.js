import { useState, useEffect } from "react";
import GetBrowserSize from "./GetBrowserSize";

const GetProjectColor = () => {
  const [, setScrollPosition] = useState(undefined);
  const [projectColor, setProjectColor] = useState("#0FA5A1");

  const windowHeight = GetBrowserSize().height;
  const calculatedWindowHeight = windowHeight / 2;

  useEffect(() => {
    const projects = document.getElementsByClassName("project-preview");

    const positions = [];
    for (let i = 0; i < projects.length; i++) {
      const position = (i + 1) * calculatedWindowHeight;
      positions.push(position);
    }

    setScrollPosition(positions);

    const handleScroll = () => {
      switch (true) {
        case window.pageYOffset < positions[0]:
          return setProjectColor("#0FA5A1");

        case window.pageYOffset < positions[1]:
          return setProjectColor("#FFB902");

        default:
          break;
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [calculatedWindowHeight, projectColor]);

  return projectColor;
};

export default GetProjectColor;
