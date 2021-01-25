import React, { useEffect } from "react";

const Contact = ({ setActiveProjectColor }) => {
  useEffect(() => {
    setActiveProjectColor("red");
  }, [setActiveProjectColor]);

  return <div style={{ height: "300vh" }}>contact</div>;
};

export default Contact;
