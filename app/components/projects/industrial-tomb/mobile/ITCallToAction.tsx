"use client";

import { useRef, useState } from "react";

const ITCallToAction = () => {
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
        ref={carousel}
        onScroll={handleBtns}
        className="px-[1rem] sm:px-[2rem] pb-10 flex space-x-4 overflow-x-auto snap-x snap-mandatory"
      >
        <div
          onClick={handlePrevClick}
          className="cursor-pointer h-[15rem] text-white w-[calc(100%-3rem)] sm:w-[calc(100%-5rem)] max-w-[463px] rounded-lg bg-[#181a1c] shrink-0 snap-center snap-always"
        >
          <div className="flex items-end p-6 justify-between h-full relative top-1">
            <h3 className="text-[1.5rem] font-bold">play game</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
        <div
          onClick={handleNextClick}
          className="cursor-pointer h-[15rem] text-white w-[calc(100%-3rem)] sm:w-[calc(100%-5rem)] max-w-[463px] rounded-lg bg-[#181a1c] shrink-0 snap-center snap-always"
        >
          <div className="flex items-end p-6 justify-between h-full relative top-1">
            <h3 className="text-[1.5rem] font-bold">source code</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITCallToAction;
