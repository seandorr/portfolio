import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GridLines from "./components/gridLines/GridLines";
import NavBar from "./components/navigation/NavBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import projectPreviewData from "./pages/home/utils/constants/projectPreviewData";
import useScrollDirection from "./utils/customHooks/useScrollDirection";
import useWindowSize from "./utils/customHooks/useWindowSize";

const PROJECTS = Object.values(projectPreviewData);

const App = () => {
  const [translation, i18n] = useTranslation("home");
  const [activeTranslationBtn, setActiveTranslationBtn] = useState("english");
  const [activeProjectColor, setActiveProjectColor] = useState(
    PROJECTS[0].projectColor
  );

  const handleOnClickSpanishBtn = () => {
    i18n.changeLanguage("es");
    setActiveTranslationBtn("spanish");
  };

  const handleOnClickEnglishBtn = () => {
    i18n.changeLanguage("en");
    setActiveTranslationBtn("english");
  };

  const getScrollDirection = useScrollDirection();
  const getWindowHeight = useWindowSize().height;
  const getWindowWidth = useWindowSize().width;

  let calculatedWindowHeight;

  if (getScrollDirection === "down" && getWindowWidth >= 768) {
    calculatedWindowHeight = getWindowHeight - 100;
  } else if (getScrollDirection === "up" && getWindowWidth >= 768) {
    calculatedWindowHeight = getWindowHeight - 200;
  } else {
    calculatedWindowHeight = 800;
  }

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <GridLines activeProjectColor={activeProjectColor} />
      <NavBar
        activeProjectColor={activeProjectColor}
        activeTranslationBtn={activeTranslationBtn}
        handleOnClickSpanishBtn={handleOnClickSpanishBtn}
        handleOnClickEnglishBtn={handleOnClickEnglishBtn}
        translation={translation}
      />
      <Switch>
        <Route path="/" exact>
          <Home translation={translation} projects={PROJECTS} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
};

export default App;
