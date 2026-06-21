import React from "react";
import { Ascii } from "../../pages/Ascii";
import ResponsiveCarousel from "../../pages/ResponsiveCarousel/ResponsiveCarousel";
import MusicLibrary from "../../pages/MusicLibrary/MusicLibrary";
import Nominapress from "../../pages/Nominapress/Nominapress";
import RandomShapes from "../../pages/RandomShapes/RandomShapes";
import Gemini from "../../pages/Gemini/Gemini";
import Targetbase from "../../pages/Targetbase/Targetbase";
import colors from "../../styles/_colors.scss";

const projectPreviewData = [
  {
    projectId: 1,
    projectName: "ascii",
    projectImage: "ascii.jpg",
    projectColor: colors.asciiColor,
    projectLink: "ascii",
    projectDetailedComponent: <Ascii />,
  },
  {
    projectId: 2,
    projectName: "responsiveCarousel",
    projectComponent: <ResponsiveCarousel type="preview" />,
    projectColor: colors.responsiveCarouselColor,
    projectLink: "responsive-carousel",
    gitLink: "https://github.com/seandorr/responsive-carousel",
    projectDetailedComponent: <ResponsiveCarousel />,
  },
  {
    projectId: 3,
    projectName: "musicLibrary",
    projectImage: "music-library.svg",
    projectColor: colors.musicLibraryColor1,
    projectLink: "music-library",
    gitLink: "https://github.com/seandorr/music-library",
    projectDetailedComponent: <MusicLibrary />,
  },
  {
    projectId: 4,
    projectName: "nominapress",
    projectImage: "facial-recog-login.jpg",
    projectColor: colors.nominapressColor,
    projectLink: "nominapress",
    projectDetailedComponent: (
      <Nominapress projectColor={colors.nominapressColor} />
    ),
  },
  {
    projectId: 5,
    projectName: "randomShapes",
    projectComponent: <RandomShapes type="preview" />,
    projectColor: colors.randomShapesColor,
    projectLink: "random-shapes",
    projectDetailedComponent: <RandomShapes type="detailed" />,
  },
  {
    projectId: 6,
    projectName: "gemini",
    projectImage: "gemini-hero.jpg",
    projectColor: colors.geminiColor,
    projectLink: "gemini",
    projectDetailedComponent: <Gemini />,
  },
  {
    projectId: 7,
    projectName: "targetbase",
    projectImage: "targetbase-hero.jpg",
    projectColor: colors.targetbaseColor,
    projectLink: "targetbase",
    projectDetailedComponent: <Targetbase />,
  },
];

export { projectPreviewData as projectsData };
