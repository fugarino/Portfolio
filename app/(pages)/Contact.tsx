"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import SectionLayout from "../components/layouts/SectionLayout";
import PaperAirplane from "../components/ui/effects/PaperAirplane";

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

const Contact = () => {
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
    <SectionLayout sectionName="Contact" id="contact" p="0rem" psm="0rem">
      <div className="relative">
        <PaperAirplane />
        <div className="h-[16rem] sm:h-[17rem] overflow-hidden">
          <div className="absolute right-[3.2rem] top-0 hidden sm:flex md:hidden">
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
              disabled={currentSlide === 1}
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
          </div>
          <ul
            ref={sliderRef}
            onScroll={(e) => {
              setSliderPosition(e.currentTarget.scrollLeft);
            }}
            className="flex mt-10 pb-12 md:space-x-4 md:mx-[1.7rem] overflow-x-auto snap-x snap-mandatory"
          >
            <a
              href="mailto:christiantfugarino@gmail.com"
              className="bg-[#BED4BE] hover:bg-[#b6cbb6] transition-colors duration-150 ease-out border-[2px] cursor-pointer border-[#BED4BE] hover:border-[#aabeaa] text-black flex flex-col justify-between p-6 snap-center snap-always h-[11rem] sm:h-[12rem] w-[calc(100%-4rem)] sm:w-[calc(100%-4rem)] sm:max-w-[500px] md:max-w-none md:w-full rounded-lg shrink-0 md:shrink ml-[1.4rem] sm:ml-[1.7rem] md:ml-0 mr-[0.9rem] md:mr-0"
            >
              <h3 className="font-bold text-[1.8rem] sm:text-[2.5rem]">
                Get in touch
              </h3>
              <div className="flex w-full items-end justify-between">
                <p className="font-[300] text-left text-[0.95rem] sm:text-[1rem] leading-5">
                  Have any questions?
                  <br />
                  Feel free to send me an email.
                </p>
                <aside>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </aside>
              </div>
            </a>
            <a
              href="/Christian Fugarino Resume 2023.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-[#efe0c8] cursor-pointer transition-colors duration-150 ease-out hover:bg-[#ebdcc4] dark:hover:bg-[#e6d7bf] border-[2px] border-[#efe0c8] hover:border-[#e2d4be] dark:hover:border-[#d6c9b3] text-black p-6 snap-center snap-always h-[11rem] sm:h-[12rem] w-[calc(100%-4rem)] sm:w-[calc(100%-4rem)] sm:max-w-[500px] md:max-w-none md:w-[40%] lg:w-[35%] rounded-lg shrink-0 md:shrink mr-[0.45rem] sm:mr-[1.7rem] md:mr-0"
            >
              <div className="w-full h-full text-left flex flex-col justify-between">
                <div className="flex justify-between">
                  <div></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                </div>
                <div className="text-black space-x-2">
                  <span className="font-[300] text-[0.95rem] sm:text-[1rem]">
                    Download
                  </span>
                  <span className="font-bold text-[2.5rem] leading-5">CV</span>
                </div>
              </div>
            </a>
            <li className="md:hidden bg-opacity-0 snap-none h-[20rem] sm:h-[12rem] w-[1rem] rounded-lg shrink-0"></li>
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
