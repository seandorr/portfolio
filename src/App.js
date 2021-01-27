import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GridLines from "./components/GridLines/GridLines";
import NavBar from "./components/navigation/NavBar";
import Home from "./pages/Home/Home";
import projectPreviewData from "./pages/Home/utils/constants/projectPreviewData";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const PROJECTS = Object.values(projectPreviewData);

const App = () => {
  const [translation, i18n] = useTranslation("home");
  const [activeTranslationBtn, setActiveTranslationBtn] = useState("english");
  const [activeProjectColor, setActiveProjectColor] = useState(undefined);

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
      <div className="page-content">
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
      </div>
    </Router>
  );
};

export default App;
