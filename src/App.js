import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GridLines from "./components/gridLines/GridLines";
import NavBar from "./components/navigation/NavBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import projectPreviewData from "./pages/home/utils/constants/projectPreviewData";

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

  return (
    <Router>
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
          <Home
            translation={translation}
            projects={PROJECTS}
            setActiveProjectColor={setActiveProjectColor}
            activeProjectColor={activeProjectColor}
          />
        </Route>
        <Route path="/about">
          <About setActiveProjectColor={setActiveProjectColor} />
        </Route>
        <Route path="/contact">
          <Contact setActiveProjectColor={setActiveProjectColor} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
