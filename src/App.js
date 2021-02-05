import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/Home/Home";
import projectPreviewData from "./pages/Home/utils/constants/projectPreviewData";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import DetailedProject from "./pages/DetailedProjects/components/DetailedProject";

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
            <About setActiveProjectColor={setActiveProjectColor} />
          </Route>
          <Route path="/contact">
            <Contact setActiveProjectColor={setActiveProjectColor} />
          </Route>
          {PROJECTS.map((project) => {
            const { projectLink } = project;
            return (
              <Route path={`/${projectLink}`}>
                <DetailedProject translation={translation} project={project} setActiveProjectColor={setActiveProjectColor}/>
              </Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
