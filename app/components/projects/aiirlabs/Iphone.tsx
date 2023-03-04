"use client";

import { useRef, useState } from "react";

const Iphone = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div
      className="relative flex h-[40.5rem] overflow-hidden justify-center bg-[#E0D7C5]
	   rounded-lg col-span-6 row-span-2 cursor-pointer"
      onClick={() => {
        isVideoPlaying ? vidRef.current?.pause() : vidRef.current?.play();
        setIsVideoPlaying((prevState) => !prevState);
      }}
    >
      <div className="absolute z-10 xl:top-2 xl:left-2 xxl:top-8 xxl:left-8">
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
      <div className="absolute top-4 test">
        <picture>
          <img
            src="/iPhone 12 Pro (Wooden Hands).png"
            alt="iphone"
            className="min-w-[40rem]"
          />
        </picture>
      </div>
      <div className="absolute top-[29px] w-[17rem] rounded-[2rem] h-[36.6rem] bg-orange">
        <video
          muted
          loop
          playsInline
          ref={vidRef}
          className="w-full h-full object-cover object-top top-0 rounded-[2rem]"
        >
          <source src="/aiir.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Iphone;
