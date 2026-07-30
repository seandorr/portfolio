import React from "react";
import { AIChina } from "../../pages/AIChina";
import { Ascii } from "../../pages/Ascii";
import { ResponsiveCarousel } from "../../pages/ResponsiveCarousel";
import { MusicLibrary } from "../../pages/MusicLibrary";
import { Nominapress } from "../../pages/Nominapress";
import { RandomShapes } from "../../pages/RandomShapes";
import { Gemini } from "../../pages/Gemini";
import { Targetbase } from "../../pages/Targetbase";
import colors from "../../styles/_colors.scss";
import { Recipes } from "../../pages/Recipes/pages";

const projectPreviewData = [
  {
    projectId: 1,
    projectName: "aiInChina",
    projectImage: "ai-in-china.jpg",
    projectColor: colors.aiInChinaColor,
    projectLink: "ai-in-china",
    projectDetailedComponent: <AIChina />,
  },
  {
    projectId: 2,
    projectName: "recipeApp",
    projectImage: "recipe-app.png",
    projectColor: colors.recipesColor,
    projectLink: "recipe-app",
    projectDetailedComponent: <Recipes />,
  },
  {
    projectId: 3,
    projectName: "ascii",
    projectImage: "ascii.jpg",
    projectColor: colors.asciiColor,
    projectLink: "ascii",
    projectDetailedComponent: <Ascii />,
  },
  {
    projectId: 4,
    projectName: "responsiveCarousel",
    projectComponent: <ResponsiveCarousel type="preview" />,
    projectColor: colors.responsiveCarouselColor,
    projectLink: "responsive-carousel",
    gitLink: "https://github.com/seandorr/responsive-carousel",
    projectDetailedComponent: <ResponsiveCarousel />,
  },
  {
    projectId: 5,
    projectName: "musicLibrary",
    projectImage: "music-library.svg",
    projectColor: colors.musicLibraryColor1,
    projectLink: "music-library",
    gitLink: "https://github.com/seandorr/music-library",
    projectDetailedComponent: <MusicLibrary />,
  },
  {
    projectId: 6,
    projectName: "nominapress",
    projectImage: "facial-recog-login.jpg",
    projectColor: colors.nominapressColor,
    projectLink: "nominapress",
    projectDetailedComponent: (
      <Nominapress projectColor={colors.nominapressColor} />
    ),
  },
  {
    projectId: 7,
    projectName: "randomShapes",
    projectComponent: <RandomShapes type="preview" />,
    projectColor: colors.randomShapesColor,
    projectLink: "random-shapes",
    projectDetailedComponent: <RandomShapes type="detailed" />,
  },
  {
    projectId: 8,
    projectName: "gemini",
    projectImage: "gemini-hero.jpg",
    projectColor: colors.geminiColor,
    projectLink: "gemini",
    projectDetailedComponent: <Gemini />,
  },
  {
    projectId: 9,
    projectName: "targetbase",
    projectImage: "targetbase-hero.jpg",
    projectColor: colors.targetbaseColor,
    projectLink: "targetbase",
    projectDetailedComponent: <Targetbase />,
  },
];

export { projectPreviewData as projectsData };
