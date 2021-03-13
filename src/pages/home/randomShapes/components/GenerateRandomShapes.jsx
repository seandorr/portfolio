/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { jsx, css } from "@emotion/react";
import baseStyles from "../../../../styles/_baseStyles.scss";
import useWindowSize from "../../../../utils/customHooks/useWindowSize";
import generateRandomKey from "../../../../utils/functions/generateRandomKey";

export const GenerateRandomShapes = ({ type, reloadComponent }) => {
  const [numberOfShapeItems, setNumberOfShapeItems] = useState(null);

  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (type === "preview" || windowWidth < 768) {
      setNumberOfShapeItems(30);
    } else {
      setNumberOfShapeItems(100);
    }
  }, []);

  let shapeArray = [];

  const getRandomSizeAndPosition = () => {
    return Math.floor(Math.random() * 100);
  };

  const getRandomRGBColor = () => {
    return Math.floor(Math.random() * 255);
  };

  // Iterating over each instance in the number of shapes
  for (let counter = 1; counter <= numberOfShapeItems; counter++) {
    const randomWidth = getRandomSizeAndPosition();
    const randomHeight = getRandomSizeAndPosition();
    const randomXPosition = getRandomSizeAndPosition();
    const randomYPosition = getRandomSizeAndPosition();

    // Generate random key for this obj
    const key = generateRandomKey();

    const shapeDiv = document.createElement("div");
    shapeDiv.style.width = `${getRandomSizeAndPosition()}px`;
    shapeDiv.style.height = `${getRandomSizeAndPosition()}px`;
    shapeDiv.style.position = "absolute";
    shapeDiv.style.backgroundColor = `${`rgba(${getRandomRGBColor()}, ${getRandomRGBColor()}, ${getRandomRGBColor()}, 0.3)`}`;

    shapeDiv.style.left = `${getRandomSizeAndPosition()}px`;
    shapeDiv.style.right = `${getRandomSizeAndPosition()}px`;

    shapeArray.push(shapeDiv);
    // <div
    //   id={key}
    //   key={key}
    //   css={css`
    //     width: ${`${
    //       randomWidth !== undefined ? randomWidth : getRandomSizeAndPosition()
    //     }px`};
    //     height: ${`${
    //       randomHeight !== undefined
    //         ? randomHeight
    //         : getRandomSizeAndPosition()
    //     }px`};
    //     background-color: ${`rgba(${getRandomRGBColor()}, ${getRandomRGBColor()}, ${getRandomRGBColor()}, 0.3)`};
    //     border-radius: ${baseStyles.borderRadius};
    //     position: absolute;
    //     left: ${`${
    //       randomXPosition !== undefined
    //         ? randomXPosition
    //         : getRandomSizeAndPosition()
    //     }%`};
    //     top: ${`${
    //       randomYPosition !== undefined
    //         ? randomYPosition
    //         : getRandomSizeAndPosition()
    //     }%`};
    //     /* transition: 40s ease-in-out;
    //     transform: ${`translate(${getRandomSizeAndPosition()}%, ${getRandomSizeAndPosition()}%)`}; */
    //   `}
    // />

    // console.log(
    //   "🚀 ~ file: GenerateRandomShapes.jsx ~ line 75 ~ GenerateRandomShapes ~ shape",
    //   shape
    // );
  }

  // shapeArray.map((shape) => {
  //   console.log("shape", shape);
  //   // const theShape = document.querySelector(`#${shape.id}`);
  //   // theShape.classList.add("activeTransition");
  // });
  console.log(shapeArray);

  return <>{shapeArray.map((shape) => shape.h)}</>;
};
