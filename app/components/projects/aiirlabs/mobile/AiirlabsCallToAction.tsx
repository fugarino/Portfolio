"use client";

import { useRef, useState } from "react";

const AiirlabsCallToAction = () => {
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
      return false;
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
    <div className="mt-4 mb-1 sm:mb-8 h-[16rem] sm:h-[14.5rem] overflow-hidden">
      <section
        onScroll={handleBtns}
        ref={carousel}
        className="h-[17.5rem] pb-10 px-[1rem] sm:px-[2rem] flex space-x-4 overflow-x-auto snap-x snap-mandatory"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href={isCarouselLeft ? "https://aiirlabs.com/" : undefined}
          aria-label="aiirlabs"
          onClick={handlePrevClick}
          className="bg-[#DCCCBE] max-w-[463px] cursor-pointer w-[calc(100%-2rem)] shrink-0 snap-center snap-always rounded-lg"
        >
          <div className="h-full w-full flex justify-between items-end p-6">
            <h3 className="text-[1.5rem] font-bold pl-2">aiirlabs.com</h3>
            <picture>
              <img
                src="/Arrow_alt_lright.svg"
                alt="arrow"
                className="w-14 h-14 relative top-[.9rem]"
              />
            </picture>
          </div>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={
            !isCarouselLeft ? "https://github.com/fugarino/crypto" : undefined
          }
          aria-label="github"
          onClick={handleNextClick}
          className="bg-[#DCCCBE] max-w-[463px] overflow-hidden cursor-pointer w-[calc(100%-2rem)] shrink-0 snap-center snap-always rounded-lg"
        >
          <div className="h-full w-full flex justify-between items-end p-6">
            <h3 className="text-[1.5rem] font-bold pl-2">source code</h3>
            <picture>
              <img
                src="/Arrow_alt_lright.svg"
                alt="arrow"
                className="w-14 h-14 relative top-[.9rem]"
              />
            </picture>
          </div>
        </a>
      </section>
    </div>
  );
};

export default AiirlabsCallToAction;
