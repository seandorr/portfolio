import React from "react";
import RandomShapesPreview from "../../randomShapes/RandomShapesPreview";
import colors from "../../../../styles/_colors.scss";

const projectPreviewData = {
  musicLibrary: {
    projectId: 1,
    projectName: "musicLibrary",
    projectImage: "music-library.svg",
    projectColor: colors.musicLibraryColor2,
    projectLink: "#",
  },
  nominapress: {
    projectId: 2,
    projectName: "nominapress",
    projectImage: "nominapress.svg",
    projectColor: colors.nominapressColor,
    projectLink: "#",
  },
  randomShapes: {
    projectId: 3,
    projectName: "randomShapes",
    projectComponent: <RandomShapesPreview />,
    projectColor: colors.randomShapesColor,
    projectLink: "#",
  },
  gemini: {
    projectId: 4,
    projectName: "gemini",
    projectImage: "gemini-hero.jpg",
    projectColor: colors.geminiColor,
    projectLink: "#",
  },
  targetbase: {
    projectId: 5,
    projectName: "targetbase",
    projectImage: "targetbase-hero.jpg",
    projectColor: colors.targetbaseColor,
    projectLink: "#",
  },
};

export default projectPreviewData;
