import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Embedded Software",
          "Computer Vision",
          "Custom Electronics",
          "IoT Applications",
          "Robotics",
          "Web Applications",
          "3D Modeling",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 25,
        delay: 70,
      }}
    />
  );
}

export default Type;
