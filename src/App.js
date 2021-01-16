import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import GridLines from "./components/gridLines/GridLines";
import NavBar from "./components/navigation/NavBar";
import Home from "./pages/home/Home";
import projectData from "./pages/home/utils/constants/projectData";

const PROJECTS = Object.values(projectData);

const App = () => {
  const [translation, i18n] = useTranslation("home");
  const [activeTranslationBtn, setActiveTranslationBtn] = useState("english");
  const [activeProjectColor, setActiveProjectColor] = useState(
    PROJECTS[0].projectColor
  );
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOnClickSpanishBtn = () => {
    i18n.changeLanguage("es");
    setActiveTranslationBtn("spanish");
  };

  const handleOnClickEnglishBtn = () => {
    i18n.changeLanguage("en");
    setActiveTranslationBtn("english");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const calculatedWindowHeight = windowSize.height / 1.5;

  const handleScroll = () => {
    const indexOfProjectCurrentlyInView = Math.floor(
      window.scrollY / calculatedWindowHeight
    );

    if (indexOfProjectCurrentlyInView < PROJECTS.length) {
      setActiveProjectColor(
        PROJECTS[indexOfProjectCurrentlyInView].projectColor
      );
    } else {
      const lastProject = PROJECTS.length - 1;
      setActiveProjectColor(PROJECTS[lastProject].projectColor);
    }
  };

  return (
    <>
      <GridLines projectColor={activeProjectColor} />
      <NavBar
        projectColor={activeProjectColor}
        activeTranslationBtn={activeTranslationBtn}
        handleOnClickSpanishBtn={handleOnClickSpanishBtn}
        handleOnClickEnglishBtn={handleOnClickEnglishBtn}
        translation={translation}
      />
      <Home translation={translation} projects={PROJECTS} />
    </>
  );
};

export default App;
