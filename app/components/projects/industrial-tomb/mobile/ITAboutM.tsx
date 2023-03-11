"use client";

import { useRef, useState } from "react";
import ITVideoM from "./ITVideoM";

const ITAboutM = ({ src, alt }: { src: string; alt: boolean }) => {
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
    <div className="h-[16.04rem] sm:h-[20.04rem] overflow-hidden">
      <div
        onScroll={handleBtns}
        ref={carousel}
        className={`flex ${
          alt && "flex-row-reverse"
        } px-[1rem] sm:px-[2rem] mt-4 space-x-4 pb-10 overflow-x-auto snap-x snap-mandatory`}
      >
        <div
          onClick={handlePrevClick}
          style={{
            cursor: !isCarouselLeft ? "pointer" : "",
          }}
          className="w-[calc(100%-3rem)] sm:w-[calc(100%-6rem)] max-w-[463px] sm:h-[19rem]
		 	    rounded-lg bg-[#181a1c] p-4 shrink-0 snap-center snap-always"
        >
          <p className="flex h-full items-end text-white font-bold text-[1rem] sm:text-[1.1rem]">
            Industrial Tomb is a 2D Puzzle-Platformer game in which players must
            use interactive objects to reach the glowing scarab. Upon
            completion, players will receive a star rating based on their time
            of completion.
          </p>
        </div>
        <div
          onClick={handleNextClick}
          className="w-[calc(100%-3rem)] sm:w-[calc(100%-6rem)] max-w-[463px] h-[15rem] sm:h-[19rem]
		 	    rounded-lg overflow-hidden bg-[#181a1c] shrink-0 snap-center snap-always"
        >
          <ITVideoM alt={true} isCarouselLeft={isCarouselLeft} src={src} />
        </div>
      </div>
    </div>
  );
};

export default ITAboutM;
