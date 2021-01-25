import React, { useEffect } from "react";

const About = ({ setActiveProjectColor }) => {
  useEffect(() => {
    setActiveProjectColor("green");
  }, [setActiveProjectColor]);

  return <div style={{ height: "300vh" }}>about</div>;
};

export default About;
