/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import baseStyles from "../../../../styles/_baseStyles.scss";
import generateRandomKey from "../../../../utils/functions/generateRandomKey";
import useWindowSize from "../../../../utils/customHooks/useWindowSize";

export const GenerateRandomShapes = ({ type }) => {
  const getWindowWidth = useWindowSize().width;

  let numberOfShapeItems;
  if (type === "preview" || getWindowWidth < 768) {
    numberOfShapeItems = 30;
  } else {
    numberOfShapeItems = 100;
  }

  let shapeArray = [];
  let randomSizeArray = [];
  let randomXPositionArray = [];
  let randomYPositionArray = [];

  const getRandomSizeAndPosition = () => {
    return Math.floor(Math.random() * 100);
  };

  const getRandomRGBColor = () => {
    return Math.floor(Math.random() * 255);
  };

  for (let counter = 1; counter <= numberOfShapeItems; counter++) {
    randomSizeArray.push(getRandomSizeAndPosition());
    randomXPositionArray.push(getRandomSizeAndPosition());
    randomYPositionArray.push(getRandomSizeAndPosition());

    const randomWidth = randomSizeArray[getRandomSizeAndPosition()];
    const randomHeight = randomSizeArray[getRandomSizeAndPosition()];
    const randomXPosition = randomXPositionArray[getRandomSizeAndPosition()];
    const randomYPosition = randomXPositionArray[getRandomSizeAndPosition()];

    shapeArray[counter] = (
      <div
        css={css`
          width: ${`${
            randomWidth !== undefined ? randomWidth : getRandomSizeAndPosition()
          }px`};
          height: ${`${
            randomHeight !== undefined
              ? randomHeight
              : getRandomSizeAndPosition()
          }px`};
          background-color: ${`rgba(${getRandomRGBColor()}, ${getRandomRGBColor()}, ${getRandomRGBColor()}, 0.3)`};
          border-radius: ${baseStyles.borderRadius};
          position: absolute;
          left: ${`${
            randomXPosition !== undefined
              ? randomXPosition
              : getRandomSizeAndPosition()
          }%`};
          top: ${`${
            randomYPosition !== undefined
              ? randomYPosition
              : getRandomSizeAndPosition()
          }%`};
          transition: 40s ease-in-out;
          transform: ${`translate(${getRandomSizeAndPosition()}%, ${getRandomSizeAndPosition()}%)`};
        `}
        // key={generateRandomKey()}
      />
    );
  }
  return shapeArray;
};
