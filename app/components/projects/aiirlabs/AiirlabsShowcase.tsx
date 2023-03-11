"use client";

import { useRef, useState } from "react";

const AiirlabsShowcase = () => {
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(false);
  const carousel = useRef<HTMLUListElement>(null);

  const handleNextClick = () => {
    carousel.current?.scrollBy({ left: 250, behavior: "smooth" });
  };
  const handlePrevClick = () => {
    carousel.current?.scrollBy({ left: -250, behavior: "smooth" });
  };

  const handleBtns = () => {
    if (carousel?.current?.scrollLeft === 0) {
      setLeft(true);
    } else {
      setLeft(false);
    }
    if (
      Math.round(
        carousel.current!.scrollLeft + carousel.current!.offsetWidth
      ) === carousel.current!.scrollWidth
    ) {
      setRight(true);
    } else {
      setRight(false);
    }
  };

  return (
    <div className="h-full hidden xl:block relative">
      <div className="absolute right-0 -top-4 hidden xl:flex">
        <button
          onClick={handlePrevClick}
          disabled={left}
          className="border-[2px] disabled:border-[#00000067] text-[#00000088] disabled:text-[#00000067] rounded-full w-[22px] h-[22px] mr-2 flex items-center justify-center border-[#00000088]"
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
          onClick={handleNextClick}
          disabled={right}
          className="border-[#00000088] disabled:border-[#00000067] text-[#00000088] disabled:text-[#00000067] border-[2px] rounded-full w-[22px] h-[22px] flex items-center justify-center"
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
        ref={carousel}
        onScroll={handleBtns}
        className="flex h-full overflow-x-auto text-black relative top-[15px] space-x-2 snap-x snap-mandatory"
      >
        <li className="relative flex justify-center bg-[#D9D9D9] overflow-hidden w-[250px] h-full rounded-t-lg shrink-0 snap-start snap-always">
          <h3 className="mt-3 text-[1.2rem] font-semibold">authentication</h3>
          <div className="absolute w-full -left-[1.45rem] top-10">
            <picture>
              <img
                src="/iPhone 14 pro.png"
                alt="iphone"
                className="object-cover w-[20rem]"
              />
            </picture>
          </div>
          <div className="absolute overflow-hidden w-[10.5rem] h-[20rem] bg-white rounded-[1.4rem] top-[3.3rem]">
            <picture>
              <img src="auth-e.png" alt="current events" />
            </picture>
          </div>
          {/* <div className="absolute top-[3.6rem] bg-black w-12 h-4 rounded-full"></div> */}
        </li>
        <li className="relative flex justify-center bg-[#D9D9D9] overflow-hidden w-[250px] h-full rounded-t-lg shrink-0 snap-center snap-always">
          <h3 className="mt-3 text-[1.2rem] font-semibold">current events</h3>
          <div className="absolute w-full -left-[1.45rem] top-10">
            <picture>
              <img
                src="/iPhone 14 pro.png"
                alt="iphone"
                className="object-cover w-[20rem]"
              />
            </picture>
          </div>
          <div className="absolute overflow-hidden w-[10.5rem] h-[20rem] bg-white rounded-[1.4rem] top-[3.3rem]">
            <picture>
              <img src="current-eve.png" alt="current events" />
            </picture>
          </div>
        </li>
        <li className="relative flex justify-center bg-[#D9D9D9] overflow-hidden w-[250px] h-full rounded-t-lg shrink-0 snap-center snap-always">
          <h3 className="mt-3 text-[1.2rem] font-semibold">
            historical charts
          </h3>
          <div className="absolute w-full -left-[1.45rem] top-10">
            <picture>
              <img
                src="/iPhone 14 pro.png"
                alt="iphone"
                className="object-cover w-[20rem]"
              />
            </picture>
          </div>
          <div className="absolute overflow-hidden w-[10.5rem] h-[20rem] bg-white rounded-[1.4rem] top-[3.3rem]">
            <picture>
              <img src="chart-prev.png" alt="current events" />
            </picture>
          </div>
        </li>
        <li className="relative flex justify-center bg-[#D9D9D9] overflow-hidden w-[250px] h-full rounded-t-lg shrink-0 snap-center snap-always">
          <h3 className="mt-3 text-[1.2rem] font-semibold">comments</h3>
          <div className="absolute w-full -left-[1.45rem] top-10">
            <picture>
              <img
                src="/iPhone 14 pro.png"
                alt="iphone"
                className="object-cover w-[20rem]"
              />
            </picture>
          </div>
          <div className="absolute overflow-hidden w-[10.5rem] h-[20rem] bg-white rounded-[1.4rem] top-[3.3rem]">
            <picture>
              <img src="comments-e.png" alt="current events" />
            </picture>
          </div>
        </li>
        <li className="relative flex justify-center bg-[#D9D9D9] overflow-hidden w-[250px] h-full rounded-t-lg shrink-0 snap-center snap-always">
          <h3 className="mt-3 text-[1.2rem] font-semibold">notifications</h3>
          <div className="absolute w-full -left-[1.45rem] top-10">
            <picture>
              <img
                src="/iPhone 14 pro.png"
                alt="iphone"
                className="object-cover w-[20rem]"
              />
            </picture>
          </div>
          <div className="absolute overflow-hidden w-[10.5rem] h-[20rem] bg-white rounded-[1.4rem] top-[3.3rem]">
            <picture>
              <img src="noti-e.png" alt="current events" />
            </picture>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AiirlabsShowcase;
