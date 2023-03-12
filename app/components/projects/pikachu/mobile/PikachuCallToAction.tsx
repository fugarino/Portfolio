"use client";

import { useRef, useState } from "react";

const PikachuCallToAction = () => {
  const [isCarouselLeft, setIsCarouselLeft] = useState(true);
  const carousel = useRef<HTMLDivElement>(null);

  const handleNextClick = () => {
    if (!isCarouselLeft) {
      console.log("link to github");
    } else {
      carousel.current?.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  const handlePrevClick = () => {
    if (isCarouselLeft) {
      console.log("link to drawing");
    } else {
      carousel.current?.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const handleBtns = () => {
    if (carousel?.current?.scrollLeft === 0) {
      setIsCarouselLeft(true);
    } else {
      setIsCarouselLeft(false);
    }
  };

  return (
    <div className="mt-4 mb-4 sm:mb-8 h-[15rem] overflow-hidden">
      <div
        onScroll={handleBtns}
        ref={carousel}
        className="px-[1rem] sm:px-[2rem] pb-10 flex space-x-4 overflow-x-auto snap-x snap-mandatory"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href={isCarouselLeft ? "https://pikachu-ten.vercel.app/" : undefined}
          aria-label="live-site"
          onClick={handlePrevClick}
          className="h-[15rem] cursor-pointer text-black w-[calc(100%-3rem)] sm:w-[calc(100%-5rem)] max-w-[463px] rounded-lg bg-[#ecc53a] shrink-0 snap-center snap-always"
        >
          <div className="flex items-end p-4 justify-between h-full relative top-1">
            <h3 className="text-[1.5rem] font-bold">view drawing</h3>
            <picture>
              <img
                src="/Arrow_alt_lright.svg"
                alt="arrow"
                className="w-14 h-14"
              />
            </picture>
          </div>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={
            !isCarouselLeft ? "https://github.com/fugarino/pikachu" : undefined
          }
          aria-label="Github"
          onClick={handleNextClick}
          className="cursor-pointer h-[15rem] text-black w-[calc(100%-3rem)] sm:w-[calc(100%-5rem)] max-w-[463px] rounded-lg bg-[#ecc53a] shrink-0 snap-center snap-always"
        >
          <div className="flex items-end p-4 justify-between h-full relative top-1">
            <h3 className="text-[1.5rem] font-bold">source code</h3>
            <picture>
              <img
                src="/Arrow_alt_lright.svg"
                alt="arrow"
                className="w-14 h-14"
              />
            </picture>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PikachuCallToAction;
