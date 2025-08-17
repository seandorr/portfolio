import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import i18next from "i18next";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/Navbar/NavBar";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import useTranslation from "./utils/customHooks/useTranslation";
import useLocalStorage from "./utils/customHooks/useLocalStorage";
import "./styles/main.scss";

const App = () => {
  const [activeLanguage, setActiveLanguage] = useLocalStorage(
    "activeLanguage",
    i18next.language
  );

  const [activeProjectColor, setActiveProjectColor] = useState("#14402e");

  const { i18n } = useTranslation();

  const handleOnClickSpanishBtn = () => {
    i18n.changeLanguage("es");
    setActiveLanguage("es");
  };

  const handleOnClickEnglishBtn = () => {
    i18n.changeLanguage("en");
    setActiveLanguage("en");
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: activeProjectColor,
      },
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar
          activeProjectColor={activeProjectColor}
          activeLanguage={activeLanguage}
          handleOnClickSpanishBtn={handleOnClickSpanishBtn}
          handleOnClickEnglishBtn={handleOnClickEnglishBtn}
        />
        <div className="page-content">
          <AnimatedRoutes
            setActiveProjectColor={setActiveProjectColor}
            activeProjectColor={activeProjectColor}
          />
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
