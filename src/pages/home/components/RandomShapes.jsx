/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const RandomShapes = () => {
  const numberOfShapeItems = 100;

  let shapeArray = [];
  let randomSizeArray = [];
  let randomXPositionArray = [];
  let randomYPositionArray = [];
  const getRandomNumber = () => {
    return Math.floor(Math.random() * numberOfShapeItems);
  };

  const getRandomRGBColor = () => {
    return Math.floor(Math.random() * 255);
  };

  for (let counter = 1; counter <= numberOfShapeItems; counter++) {
    randomSizeArray.push(getRandomNumber());
    randomXPositionArray.push(getRandomNumber());
    randomYPositionArray.push(getRandomNumber());

    const randomWidth = randomSizeArray[getRandomNumber()];
    const randomHeight = randomSizeArray[getRandomNumber()];
    const randomXPosition = randomXPositionArray[getRandomNumber()];
    const randomYPosition = randomXPositionArray[getRandomNumber()];

    shapeArray[counter] = (
      <div
        css={css`
          width: ${`${
            randomWidth !== undefined ? randomWidth : getRandomNumber()
          }px`};
          height: ${`${
            randomHeight !== undefined ? randomHeight : getRandomNumber()
          }px`};
          background-color: ${`rgba(${getRandomRGBColor()}, ${getRandomRGBColor()}, ${getRandomRGBColor()}, 0.3)`};
          position: absolute;
          left: ${`${
            randomXPosition !== undefined ? randomXPosition : getRandomNumber()
          }%`};
          top: ${`${
            randomYPosition !== undefined ? randomYPosition : getRandomNumber()
          }%`};
          transition: 40s ease-in-out;
          transform: ${`translate(${getRandomNumber()}%, ${getRandomNumber()}%)`};
        `}
      />
    );
  }
  return shapeArray;
};
