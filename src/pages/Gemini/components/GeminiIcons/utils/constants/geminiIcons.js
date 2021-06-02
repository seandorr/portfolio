import React from "react";
import generateRandomKey from "../../../../../../utils/functions/generateRandomKey";
import Portal from "../../icons/Portal/Portal";
import Safe from "../../icons/Safe/Safe";
import Service from "../../icons/Service/Service";
import Tech from "../../icons/Tech/Tech";

const geminiIcons = [
  {
    key: generateRandomKey(),
    icon: <Tech />,
  },
  {
    key: generateRandomKey(),
    icon: <Safe />,
  },
  {
    key: generateRandomKey(),
    icon: <Portal />,
  },
  {
    key: generateRandomKey(),
    icon: <Service />,
  },
];

export default geminiIcons;
