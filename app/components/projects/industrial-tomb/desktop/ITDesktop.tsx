"use client";

import { useState } from "react";
import ITHeader from "./ITHeader";
import ITVideo1 from "./ITVideo1";
import ITVideo2 from "./ITVideo2";
import ITVideo3 from "./ITVideo3";

const ITDesktop = () => {
  const [showAssets, setShowAssets] = useState<boolean>();

  return (
    <div className="grid-cols-12 gap-2 hidden xl:grid mt-4 px-[2rem] mb-10">
      <ITHeader />
      <div className="relative overflow-hidden flex justify-center h-[20rem] col-span-5 rounded-lg bg-[#181a1c]">
        <div className="absolute top-8 translate-x-[15%]">
          <picture>
            <img
              src="/wasd 2.svg"
              alt="controls"
              className="w-[19rem] h-[15rem]"
            />
          </picture>
        </div>
      </div>
      <div className="h-[20rem] col-span-5 rounded-lg bg-[#181a1c]">
        <p className="p-6 flex h-full items-end text-white font-bold text-[1.2rem]">
          Industrial Tumb is a 2D Puzzle-Platformer game in which players must
          use interactive objects to reach the glowing scarab. Upon completion,
          players will receive a star rating based on their time of completion.
        </p>
      </div>
      <ITVideo1 />
      <ITVideo2 />
      <div className="relative h-[20rem] col-span-6 rounded-lg bg-[#181a1c]">
        <p className="p-8 flex h-full items-center text-white text-[1.1rem]">
          The objective is to push the moveable boxes onto corresponding
          pressure plates, and interact with levers to enable trap doors. After
          enabling the final lever, the scarab will become visible, and the
          player must reach it and interact with it. If the player makes a
          mistake, they can easily restart by jumping off the map. Upon solving
          the level, players will receive a star rating based on their
          completion time: 3 stars for under 5 minutes, 2 stars for under 10
          minutes, and 1 star for simply finishing.
        </p>
      </div>
      <ITVideo3 />
      <div className="relative h-[20rem] col-span-7 rounded-lg bg-[#181a1c]">
        <p className="p-8 flex h-full items-center text-white text-[1.1rem]">
          For the majority of the game&apos;s visuals, including the character,
          a 16x16 tileset was used. The individual collections of tiles were
          positioned separately on an HTML canvas, with the game loop updating
          their positions on each iteration - except for the character -
          creating the illusion of movement and keeping the player centered at
          all times. As a result, the game offers a beautiful UI that adapts
          well to all screen sizes.
        </p>
        <button
          onClick={() => setShowAssets((prevState) => !prevState)}
          className="absolute text-yellow cursor-pointer bottom-4 right-4"
        >
          {showAssets ? "collapse assets" : "view assets"}
        </button>
      </div>
      {showAssets && (
        <div className="h-[20rem] p-6 col-span-12 rounded-lg overflow-hidden bg-[#121212]">
          <picture>
            <img
              src="/map3.png"
              alt="tileset"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
      )}
      <div className="bg-[#181a1c] text-white col-span-3 h-[20rem] rounded-lg p-6 flex flex-col justify-end">
        <div className="flex items-center justify-between relative top-1">
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
      <div className="bg-[#181a1c] text-white col-span-3 h-[20rem] rounded-lg p-6 flex flex-col justify-end">
        <div className="flex items-center justify-between relative top-1">
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
      <div className="relative h-[20rem] col-span-6 rounded-lg bg-[#181a1c] overflow-hidden">
        <div className="relative w-full">
          <div className="absolute h-full w-[60rem] -bottom-[2.2rem] -right-[30rem]">
            <picture>
              <img src="/Group15.svg" alt="ITimg" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITDesktop;
