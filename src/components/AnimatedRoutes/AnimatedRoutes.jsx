import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import generateRandomKey from "../../utils/functions/generateRandomKey";
import DetailedProject from "../../pages/DetailedProjects/DetailedProject";
import { projectsData } from "../../utils/constants/projectPreviewData";

const AnimatedRoutes = ({ setActiveProjectColor, activeProjectColor }) => {
  const location = useLocation();

  return (
    <AnimatePresence initial={true} exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home
            setActiveProjectColor={setActiveProjectColor}
            activeProjectColor={activeProjectColor}
          />
        </Route>
        <Route path="/about">
          <About
            activeProjectColor={activeProjectColor}
            setActiveProjectColor={setActiveProjectColor}
          />
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
    </AnimatePresence>
  );
};

AnimatedRoutes.propTypes = {
  setActiveProjectColor: PropTypes.func,
  activeProjectColor: PropTypes.string,
};

AnimatedRoutes.defaultProps = {
  setActiveProjectColor: undefined,
  activeProjectColor: undefined,
};

export default AnimatedRoutes;
