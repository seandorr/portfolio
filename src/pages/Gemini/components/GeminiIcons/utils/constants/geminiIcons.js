import React from "react";
import generateRandomKey from "../../../../../../utils/functions/generateRandomKey";
import Portal from "../../icons/Portal/Portal";
import Safe from "../../icons/Safe/Safe";
import Service from "../../icons/Service/Service";
import Tech from "../../icons/Tech/Tech";

export const geminiIcons = {
  tech: {
    key: generateRandomKey(),
    icon: <Tech />,
  },
  safe: {
    key: generateRandomKey(),
    icon: <Safe />,
  },
  portal: {
    key: generateRandomKey(),
    icon: <Portal />,
  },
  service: {
    key: generateRandomKey(),
    icon: <Service />,
  },
};
