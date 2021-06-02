import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/Home/Home";
import projectPreviewData from "./pages/Home/utils/constants/projectPreviewData";
import About from "./pages/About/About";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import DetailedProject from "./pages/DetailedProjects/components/DetailedProject";
import generateRandomKey from "./utils/functions/generateRandomKey";
import useTranslation from "./utils/customHooks/useTranslation";
import "./styles/main.scss";

const PROJECTS = Object.values(projectPreviewData);

const App = () => {
  const [activeTranslationBtn, setActiveTranslationBtn] = useState("english");
  const [activeProjectColor, setActiveProjectColor] = useState(undefined);

  const { translation, i18n } = useTranslation();

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
      <ScrollToTop />
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
            <About
              setActiveProjectColor={setActiveProjectColor}
              translation={translation}
            />
          </Route>
          {PROJECTS.map((project) => {
            const { projectLink } = project;
            return (
              <Route path={`/${projectLink}`} key={generateRandomKey()}>
                <DetailedProject
                  translation={translation}
                  projects={PROJECTS}
                  project={project}
                  setActiveProjectColor={setActiveProjectColor}
                  key={generateRandomKey()}
                />
              </Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
