import React from "react";
import MusicLibrary from "../../MusicLibrary/MusicLibrary";
import Nominapress from "../../../Nominapress/Nominapress";
import RandomShapes from "../../RandomShapes/RandomShapes";
import Gemini from "../../../Gemini/Gemini";
import Targetbase from "../../../Targetbase/Targetbase";
import colors from "../../../../styles/_colors.scss";

const projectPreviewData = [
  {
    projectId: 1,
    projectName: "musicLibrary",
    projectImage: "music-library.svg",
    projectColor: colors.musicLibraryColor1,
    projectLink: "music-library",
    gitLink: "https://github.com/seandorr",
    projectDetailedComponent: <MusicLibrary />,
  },
  {
    projectId: 2,
    projectName: "nominapress",
    projectImage: "facial-recog-login.jpg",
    projectColor: colors.nominapressColor,
    projectLink: "nominapress",
    projectDetailedComponent: (
      <Nominapress projectColor={colors.nominapressColor} />
    ),
  },
  {
    projectId: 3,
    projectName: "randomShapes",
    projectComponent: <RandomShapes type="preview" />,
    projectColor: colors.randomShapesColor,
    projectLink: "random-shapes",
    projectDetailedComponent: <RandomShapes type="detailed" />,
  },
  {
    projectId: 4,
    projectName: "gemini",
    projectImage: "gemini-hero.jpg",
    projectColor: colors.geminiColor,
    projectLink: "gemini",
    projectDetailedComponent: <Gemini />,
  },
  {
    projectId: 5,
    projectName: "targetbase",
    projectImage: "targetbase-hero.jpg",
    projectColor: colors.targetbaseColor,
    projectLink: "targetbase",
    projectDetailedComponent: <Targetbase />,
  },
];

export { projectPreviewData as projectsData };
