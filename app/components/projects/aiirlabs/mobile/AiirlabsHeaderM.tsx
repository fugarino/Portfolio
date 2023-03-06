"use client";

import { useEffect, useRef, useState } from "react";

const AiirlabsHeaderM = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(400);

  const handleResize = () => {
    const newHeight = cardRef.current!.offsetHeight;
    setHeight(newHeight);
  };

  useEffect(() => {
    setHeight(cardRef.current!.offsetHeight);
  }, [isExpanded]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        height: `${height}px`,
      }}
      className="overflow-hidden mt-4"
    >
      <header className="flex pb-[20rem] overflow-x-auto space-x-4 pr-[1rem] sm:pr-[2rem] snap-x snap-mandatory">
        <div
          ref={cardRef}
          className="bg-[#DDD4CE] p-6 sm:p-10 rounded-lg w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)]
		      max-w-[615px] shrink-0 ml-[1rem] sm:ml-[2rem] snap-center snap-always"
        >
          <h1>
            <picture>
              <img src="/aiirlabs ©.svg" alt="aiirlabs logo" />
            </picture>
          </h1>
          <p
            style={{
              maxHeight: !isExpanded ? "calc(9*1em*1.5)" : "none",
            }}
            className="font-regular text-[1rem] xl:text-[1.3rem] pr-0 md:pr-20 mt-4 md:mt-8 overflow-hidden leading-[1.5rem]"
          >
            is a versitile application that provides users with a{" "}
            <span className="underline">
              multitude of crypto-related features
            </span>
            . The app enables users to{" "}
            <span className="underline">stay updated on the latest news</span>{" "}
            through a multitude of news providers. Users can also{" "}
            <span className="underline">easily access historical charts</span>{" "}
            and <span className="underline">obtain up-to-date data</span> on
            various cryptocurrencies.
            <br />
            Additionally, the app enables users to engage with the community by{" "}
            <span className="underline">posting comments and replies</span> on
            their favorite coins while{" "}
            <span className="underline">receiving immediate notifications</span>
            . On top of that, users can{" "}
            <span className="underline">
              express their opinions through the up/downvote feature
            </span>
            .
          </p>
          <input
            type="checkbox"
            checked={isExpanded}
            onChange={() => {
              setIsExpanded((prevState) => !prevState);
            }}
            className="appearance-none sm1:hidden before:content-['see_more'] checked:before:content-['see_less'] before:font-bold w-full cursor-pointer"
          />
        </div>
        <aside className="bg-[#D3D3C9] rounded-lg w-[20rem] flex flex-col justify-end p-6 shrink-0 snap-center snap-always">
          <h2 className="font-bold text-[2.5rem] leading-[2.7rem]">Next</h2>
          <h2 className="font-bold text-[2.5rem] leading-[2.7rem]">Tailwind</h2>
          <h2 className="font-bold text-[2.5rem] leading-[2.7rem]">Firebase</h2>
          <h2 className="font-bold text-[2.5rem] leading-[2.7rem]">
            React query
          </h2>
        </aside>
      </header>
    </div>
  );
};

export default AiirlabsHeaderM;
