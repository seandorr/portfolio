import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import GridLines from "./components/gridLines/GridLines";
import NavBar from "./components/navigation/NavBar";
import Home from "./pages/home/Home";
import GetProjectColor from "./utils/functions/GetProjectColor";

const App = () => {
  const [translation, i18n] = useTranslation("home");
  const [activeTranslationBtn, setActiveTranslationBtn] = useState("english");

  const handleOnClickSpanishBtn = () => {
    i18n.changeLanguage("es");
    setActiveTranslationBtn("spanish");
  };

  const handleOnClickEnglishBtn = () => {
    i18n.changeLanguage("en");
    setActiveTranslationBtn("english");
  };

  const projectColor = GetProjectColor();

  return (
    <>
      <GridLines projectColor={projectColor} />
      <NavBar
        projectColor={projectColor}
        activeTranslationBtn={activeTranslationBtn}
        handleOnClickSpanishBtn={handleOnClickSpanishBtn}
        handleOnClickEnglishBtn={handleOnClickEnglishBtn}
        translation={translation}
      />
      <Home translation={translation} />
    </>
  );
};

export default App;
