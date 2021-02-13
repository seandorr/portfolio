import React from "react";
import RandomShapesPreview from "../../RandomShapes/RandomShapesPreview";
import colors from "../../../../styles/_colors.scss";

const projectPreviewData = {
  musicLibrary: {
    projectId: 1,
    projectName: "musicLibrary",
    projectImage: "music-library.svg",
    projectColor: colors.musicLibraryColor1,
    projectLink: "music-library",
    gitLink: "https://github.com/seandorr",
  },
  nominapress: {
    projectId: 2,
    projectName: "nominapress",
    projectImage: "nominapress.svg",
    projectColor: colors.nominapressColor,
    projectLink: "nominapress",
  },
  randomShapes: {
    projectId: 3,
    projectName: "randomShapes",
    projectComponent: <RandomShapesPreview />,
    projectColor: colors.randomShapesColor,
    projectLink: "random-shapes",
  },
  gemini: {
    projectId: 4,
    projectName: "gemini",
    projectImage: "gemini-hero.jpg",
    projectColor: colors.geminiColor,
    projectLink: "gemini",
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
