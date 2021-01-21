import React from "react";
import RandomShapesPreview from "../../randomShapes/RandomShapesPreview";
import colors from "../../../../styles/_colors.scss";

const projectPreviewData = {
  nominapress: {
    projectId: 1,
    projectName: "nominapress",
    projectImage: "nominapress.svg",
    projectColor: colors.nominapressColor,
    projectLink: "#",
  },
  randomShapes: {
    projectId: 2,
    projectName: "randomShapes",
    projectComponent: <RandomShapesPreview />,
    projectColor: colors.randomShapesColor,
    projectLink: "#",
  },
  gemini: {
    projectId: 3,
    projectName: "gemini",
    projectImage: "gemini-hero.jpg",
    projectColor: colors.geminiColor,
    projectLink: "#",
  },
  targetbase: {
    projectId: 4,
    projectName: "targetbase",
    projectImage: "targetbase-hero.jpg",
    projectColor: colors.targetbaseColor,
    projectLink: "#",
  },
  losDosCreative: {
    projectId: 5,
    projectName: "losDosCreative",
    projectImage: "losdos.jpg",
    projectColor: colors.losDosCreativeColor,
    projectLink: "#",
  },
};

export default projectPreviewData;
