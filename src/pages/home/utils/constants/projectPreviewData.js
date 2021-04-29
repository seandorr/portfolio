import React from "react";
import RandomShapes from "../../RandomShapes/RandomShapes";
import colors from "../../../../styles/_colors.scss";
import MusicLibrary from "../../MusicLibrary/MusicLibrary";
import Gemini from "../../Gemini/Gemini";
import Nominapress from "../../../Nominapress/Nominapress";

const projectPreviewData = {
  musicLibrary: {
    projectId: 1,
    projectName: "musicLibrary",
    projectImage: "music-library.svg",
    projectColor: colors.musicLibraryColor1,
    projectLink: "music-library",
    gitLink: "https://github.com/seandorr",
    projectDetailedComponent: <MusicLibrary />,
  },
  nominapress: {
    projectId: 2,
    projectName: "nominapress",
    projectImage: "nominapress.svg",
    projectColor: colors.nominapressColor,
    projectLink: "nominapress",
    projectDetailedComponent: <Nominapress />,
  },
  randomShapes: {
    projectId: 3,
    projectName: "randomShapes",
    projectComponent: <RandomShapes type="preview" />,
    projectColor: colors.randomShapesColor,
    projectLink: "random-shapes",
    projectDetailedComponent: <RandomShapes type="detailed" />,
  },
  gemini: {
    projectId: 4,
    projectName: "gemini",
    projectImage: "gemini-hero.jpg",
    projectColor: colors.geminiColor,
    projectLink: "gemini",
    projectDetailedComponent: <Gemini />,
  },
  targetbase: {
    projectId: 5,
    projectName: "targetbase",
    projectImage: "targetbase-hero.jpg",
    projectColor: colors.targetbaseColor,
    projectLink: "targetbase",
  },
};

export default projectPreviewData;
