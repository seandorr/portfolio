import React from "react";
import RandomShapesPreview from "../../randomShapes/RandomShapesPreview";
import colors from "../../../../styles/_colors.scss";

const projectData = {
  randomShapes: {
    projectId: 1,
    projectName: "randomShapes",
    projectComponent: <RandomShapesPreview />,
    projectColor: colors.randomShapesColor,
    projectLink: "#",
  },
  gemini: {
    projectId: 2,
    projectName: "gemini",
    projectImage: "gemini-hero.jpg",
    projectColor: colors.geminiColor,
    projectLink: "#",
  },
  targetbase: {
    projectId: 3,
    projectName: "targetbase",
    projectImage: "targetbase-hero.jpg",
    projectColor: colors.targetbaseColor,
    projectLink: "#",
  },
};

export default projectData;
