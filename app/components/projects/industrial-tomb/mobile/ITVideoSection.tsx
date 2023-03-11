"use client";

import { useRef, useState } from "react";

const ITVideoSection = ({
  src,
  paragraph,
}: {
  src: string;
  paragraph: string;
}) => {
  const [isCarouselLeft, setIsCarouselLeft] = useState(true);
  const carousel = useRef<HTMLDivElement>(null);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const vidRef = useRef<HTMLVideoElement | null>(null);

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
          {/* <ITVideoM src={src} isCarouselLeft={isCarouselLeft} /> */}
          <div
            onClick={() => {
              if (isCarouselLeft) {
                isVideoPlaying
                  ? vidRef.current?.pause()
                  : vidRef.current?.play();
                setIsVideoPlaying((prevState) => !prevState);
              }
            }}
            className="relative bg-[#121314] cursor-pointer h-full sm:h-[20rem] rounded-lg"
          >
            <div className="absolute text-white z-10 top-6 left-6 sm:top-8 sm:left-8">
              {!isVideoPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <video
              muted
              loop
              playsInline
              ref={vidRef}
              className="w-full h-full object-cover rounded-lg"
            >
              <source src={`/${src}.mp4#t=0.001`} type="video/mp4" />
            </video>
          </div>
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
