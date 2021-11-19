import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/Home/Home";
import { projectsData } from "./utils/constants/projectPreviewData";
import About from "./pages/About/About";
import DetailedProject from "./pages/DetailedProjects/DetailedProject";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import generateRandomKey from "./utils/functions/generateRandomKey";
import useTranslation from "./utils/customHooks/useTranslation";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import useLocalStorage from "./utils/customHooks/useLocalStorage";
import "./styles/main.scss";

const App = () => {
  const [activeLanguage, setActiveLanguage] = useLocalStorage(
    "activeLanguage",
    "spanish"
  );
  const [activeProjectColor, setActiveProjectColor] = useState(undefined);

  const { i18n } = useTranslation();

  const handleOnClickSpanishBtn = () => {
    i18n.changeLanguage("es");
    setActiveLanguage("spanish");
  };

  const handleOnClickEnglishBtn = () => {
    i18n.changeLanguage("en");
    setActiveLanguage("english");
  };

  return (
    <Router>
      <ScrollToTop />
      <NavBar
        activeProjectColor={activeProjectColor}
        activeLanguage={activeLanguage}
        handleOnClickSpanishBtn={handleOnClickSpanishBtn}
        handleOnClickEnglishBtn={handleOnClickEnglishBtn}
      />
      <div className="page-content">
        <Switch>
          <Route path="/" exact>
            <Home
              setActiveProjectColor={setActiveProjectColor}
              activeProjectColor={activeProjectColor}
            />
          </Route>
          <Route path="/about">
            <About setActiveProjectColor={setActiveProjectColor} />
          </Route>
          {projectsData.map((project) => {
            const { projectLink } = project;
            return (
              <Route path={`/${projectLink}`} key={generateRandomKey()}>
                <DetailedProject
                  project={project}
                  setActiveProjectColor={setActiveProjectColor}
                  key={generateRandomKey()}
                />
              </Route>
            );
          })}
          <Route>
            <PageNotFound setActiveProjectColor={setActiveProjectColor} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
