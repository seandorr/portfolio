import { useState, useEffect } from "react";
import GetBrowserSize from "./GetBrowserSize";
import colors from "../../styles/_colors.scss";

const GetProjectColor = (projectName) => {
  const [, setScrollPosition] = useState(undefined);
  const [projectColor, setProjectColor] = useState(colors.randomShapesColor);

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
          return setProjectColor(colors.randomShapesColor);

        case window.pageYOffset < positions[1]:
          return setProjectColor(colors.geminiColor);

        case window.pageYOffset > positions[2]:
          return setProjectColor(colors.targetbaseColor);

        default:
          break;
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [calculatedWindowHeight, projectColor]);

  return projectColor;
};

export default GetProjectColor;
