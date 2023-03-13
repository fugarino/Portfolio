"use client";

import { useRef, useState } from "react";

const Ipad = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div
      className="bg-[#E0D7C5] relative flex col-span-6 h-[20rem]
	    justify-center rounded-lg cursor-pointer"
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
      <div className="absolute top-2 testt">
        {/* <Image
          width={499}
          height={383}
          priority
          src="/iPad Pro 2019.png"
          alt="iphones"
          className="w-full object-cover rounded-lg h-[19rem]"
        /> */}
        <picture>
          <img
            src="/iPad Pro 2019.webp"
            alt="ipad"
            className="h-[19rem] min-w-[20rem]"
          />
        </picture>
      </div>
      <div className="absolute bg-[#EDEBEB] hu overflow-hidden rounded-[.5rem] top-[20px] w-[23.25rem] h-[17.5rem]">
        <video
          muted
          loop
          playsInline
          ref={vidRef}
          className="w-full h-full scale-[135%] object-cover object-top relative top-[3rem] rounded-[.5rem]"
        >
          <source src="/My Movie14.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Ipad;
