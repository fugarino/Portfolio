"use client";

import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("c. fugraino")
          .pauseFor(1000)
          .deleteChars(5)
          .typeString("arino")
          .start();
      }}
    />
  );
};

export default TypewriterEffect;
