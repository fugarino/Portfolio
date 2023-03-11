"use client";

import { useRef, useState } from "react";

const Phone1 = ({
  src,
  header,
  paragraph,
}: {
  src: string;
  paragraph: string;
  header: string;
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  const [isCarouselLeft, setIsCarouselLeft] = useState(true);
  const carousel = useRef<HTMLDivElement>(null);

  const handleNextClick = () => {
    carousel.current?.scrollBy({ left: 250, behavior: "smooth" });
  };

  const handlePrevClick = () => {
    if (!isCarouselLeft) {
      carousel.current?.scrollBy({ left: -250, behavior: "smooth" });
    } else {
      isVideoPlaying ? vidRef.current?.pause() : vidRef.current?.play();
      setIsVideoPlaying((prevState) => !prevState);
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
    <div className="h-[30.1rem] sm:h-[29.1rem] mt-4 overflow-hidden">
      <section
        onScroll={handleBtns}
        ref={carousel}
        className="relative pb-10 flex space-x-4 h-[32.5rem] px-[1rem] sm:px-[2rem] overflow-x-auto snap-x snap-mandatory"
      >
        <div
          onClick={handlePrevClick}
          className="bg-[#E0D7C5] rounded-lg relative overflow-hidden w-[calc(100%-2rem)]
        flex justify-center cursor-pointer sm:w-[calc(100%-4rem)] max-w-[600px] shrink-0 snap-center snap-always"
        >
          <div className="absolute z-10 top-3 left-3 sm:top-4 sm:left-4 md:top-8 md:left-8">
            {!isVideoPlaying ? (
              <picture>
                <img src="/play.svg" alt="play btn" className="w-10 h-10" />
              </picture>
            ) : (
              <picture>
                <img src="/pause.svg" alt="play btn" className="w-10 h-10" />
              </picture>
            )}
          </div>
          <div className="absolute top-5 sm:top-3 translate-x-[-9%] sm:translate-x-[-9%]">
            <picture>
              <img
                src="/iPhone 14 pro2.png"
                alt="iphone"
                className="h-[31rem] w-[17.6rem]"
              />
            </picture>
          </div>
          <div className="absolute bg-[#EDEBEB] overflow-hidden rounded-[1.8rem] top-[35px] sm:top-[25px] w-[12rem] h-[25.8rem] sm:h-[26rem]">
            <video
              muted
              loop
              playsInline
              ref={vidRef}
              className="w-full h-full object-cover"
            >
              <source src={`/${src}.mp4#t=0.001`} type="video/mp4" />
            </video>
          </div>
        </div>
        <div
          style={{
            cursor: isCarouselLeft ? "pointer" : "",
          }}
          onClick={handleNextClick}
          className="bg-[#D3D3C9] p-8 flex flex-col justify-between rounded-lg w-[20rem] shrink-0 snap-center snap-always"
        >
          <h2 className="font-semibold text-[1.5rem]">{header}</h2>
          <p className="text-[0.95rem] mb-4">{paragraph}</p>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Phone1;
