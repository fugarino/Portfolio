"use client";

import { useRef, useState } from "react";
import ITVideoM from "./ITVideoM";

const ITVideoSection = ({
  src,
  paragraph,
}: {
  src: string;
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
    <div className="h-[21.04rem] sm:h-[20.04rem] overflow-hidden">
      <div
        onScroll={handleBtns}
        ref={carousel}
        className="flex px-[1rem] sm:px-[2rem] mt-4 space-x-4 pb-10 overflow-x-auto snap-x snap-mandatory"
      >
        <div
          onClick={handlePrevClick}
          className="w-[calc(100%-3rem)] sm:w-[calc(100%-6rem)] max-w-[463px] h-[20rem] sm:h-[19rem]
		 	    rounded-lg overflow-hidden shrink-0 snap-center snap-always"
        >
          <ITVideoM src={src} isCarouselLeft={isCarouselLeft} />
        </div>
        <div
          onClick={handleNextClick}
          style={{
            cursor: isCarouselLeft ? "pointer" : "",
          }}
          className="w-[calc(100%-1rem)] sm:w-[calc(100%-3rem)] max-w-[463px] h-[20rem] sm:h-[19rem]
		 	    rounded-lg bg-[#181a1c] overflow-hidden p-4 shrink-0 snap-center snap-always"
        >
          <p className="flex h-full items-end text-white text-[0.95rem] sm:text-[1rem]">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ITVideoSection;
