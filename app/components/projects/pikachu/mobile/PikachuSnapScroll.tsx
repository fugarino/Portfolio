"use client";

import { useRef, useState } from "react";

const PikachuSnapScroll = ({
  src,
  step,
  paragraph,
}: {
  src: string;
  step: number;
  paragraph: string;
}) => {
  const [isCarouselLeft, setIsCarouselLeft] = useState(true);
  const carousel = useRef<HTMLDivElement>(null);

  const handleNextClick = () => {
    carousel.current?.scrollBy({ left: 250, behavior: "smooth" });
  };
  const handlePrevClick = () => {
    carousel.current?.scrollBy({ left: -250, behavior: "smooth" });
  };

  const handleBtns = () => {
    if (carousel?.current?.scrollLeft === 0) {
      setIsCarouselLeft(true);
    } else {
      setIsCarouselLeft(false);
    }
  };

  return (
    <div className="mt-4 h-[20.1rem] overflow-hidden">
      <div
        ref={carousel}
        onScroll={handleBtns}
        className="px-[1rem] sm:px-[2rem] pb-10 flex space-x-4 overflow-x-auto snap-x snap-mandatory"
      >
        <div
          onClick={handlePrevClick}
          style={{
            cursor: !isCarouselLeft ? "pointer" : "",
          }}
          className="h-[20rem] overflow-hidden bg-[#FAC823] rounded-lg w-[20rem] shrink-0 snap-center snap-always"
        >
          <picture>
            <img
              src={`/${src}.png`}
              alt="pikachu img"
              className="h-full w-full object-cover"
            />
          </picture>
        </div>
        <div
          onClick={handleNextClick}
          style={{
            cursor: isCarouselLeft ? "pointer" : "",
          }}
          className="h-[20rem] flex flex-col justify-between overflow-hidden py-6 px-6 sm:py-8 sm:px-10 bg-[#ecc53a] rounded-lg w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-[604px] shrink-0 snap-center snap-always"
        >
          <h2 className="font-semibold text-[1.2rem] text-[#00000095]">
            Step {step}
          </h2>
          <p className="font-medium text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-black pb-4">
            {paragraph}
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PikachuSnapScroll;
