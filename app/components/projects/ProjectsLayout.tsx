"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import Aiirlabs from "./aiirlabs/Aiirlabs";
import IndustrialTomb from "./industrial-tomb/IndustrialTomb";
import Pikachu from "./pikachu/Pikachu";

const scrollToSlide = (
  slider: HTMLUListElement | null,
  slideIndex: number,
  num: number
) => {
  if (!slider) return;
  slider.scrollTo({
    left: slideIndex * num,
    behavior: "smooth",
  });
};

const ProjectsLayout = () => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const sliderRef = useRef<HTMLUListElement | null>(null);

  const currentSlide = useMemo(() => {
    return Math.ceil(sliderPosition / 528);
  }, [sliderPosition]);

  const handlePrevClick = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide - 1, 300);
  }, [currentSlide]);

  const handleNextClick = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide + 1, 400);
  }, [currentSlide]);

  return (
    <main className="relative h-[24.3rem] sm:h-[30rem] xl:h-[70.5rem] overflow-hidden py-4">
      <aside className="absolute right-[3.2rem] top-0 hidden sm:flex xl:hidden">
        <button
          className="disabled:text-gray border-[2px] rounded-full w-[22px] h-[22px] mr-2 flex items-center justify-center"
          disabled={currentSlide === 0}
          onClick={() => handlePrevClick()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-3 h-3 relative right-[0.5px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="disabled:text-gray border-[2px] rounded-full w-[22px] h-[22px] flex items-center justify-center"
          disabled={currentSlide === 2}
          onClick={() => handleNextClick()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-3 h-3 relative left-[0.5px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </aside>
      {/* Projects */}
      <ul
        ref={sliderRef}
        onScroll={(e) => {
          setSliderPosition(e.currentTarget.scrollLeft);
        }}
        className="flex xl:flex-col mt-5 pb-12 overflow-x-auto xl:overflow-hidden snap-x snap-mandatory xl:px-[1.7rem] xl:space-y-4"
      >
        <Aiirlabs />
        <IndustrialTomb />
        <Pikachu />
        <li className="bg-opacity-0 snap-none h-[20rem] xl:h-[21rem] w-[1rem] rounded-lg shrink-0"></li>
      </ul>
    </main>
  );
};

export default ProjectsLayout;
