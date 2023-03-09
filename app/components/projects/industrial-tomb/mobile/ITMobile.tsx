import ITAboutM from "./ITAboutM";
import ITHeaderM from "./ITHeaderM";
import ITVideoSection from "./ITVideoSection";

const ITMobile = () => {
  return (
    <div className="xl:hidden">
      <ITHeaderM />
      <ITAboutM src="IndustrialTombVideo" />
      <ITVideoSection
        src="MY Movie"
        paragraph="The objective is to push the moveable boxes onto corresponding
          pressure plates, and interact with levers to enable trap doors. After
          enabling the final lever, the scarab will become visible, and the
          player must reach it and interact with it. If the player makes a
          mistake, they can easily restart by jumping off the map. Upon solving
          the level, players will receive a star rating based on their
          completion time: 3 stars for under 5 minutes, 2 stars for under 10
          minutes, and 1 star for simply finishing."
      />
      <ITVideoSection
        src="MY Movie1"
        paragraph="For the majority of the game's visuals, including the character,
          a 16x16 tileset was used. The individual collections of tiles were
          positioned separately on an HTML canvas, with the game loop updating
          their positions on each iteration - except for the character -
          creating the illusion of movement and keeping the player centered at
          all times. As a result, the game offers a beautiful UI that adapts
          well to all screen sizes."
      />
      <div className="relative h-[15rem] sm:h-[20rem] rounded-lg bg-[#181a1c] overflow-hidden mx-[1rem] sm:mx-[2rem] mt-4">
        <div className="relative w-full">
          <div className="absolute h-full w-[40rem] sm:w-[60rem] -bottom-[2.2rem] left-[1.2rem]">
            <picture>
              <img src="/Group15.svg" alt="ITimg" />
            </picture>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-4 sm:mb-8 h-[15rem] overflow-hidden">
        <div className="px-[1rem] sm:px-[2rem] pb-10 flex space-x-4 overflow-x-auto snap-x snap-mandatory">
          <div className="h-[15rem] text-white w-[calc(100%-3rem)] sm:w-[calc(100%-5rem)] max-w-[463px] rounded-lg bg-[#181a1c] shrink-0 snap-center snap-always">
            <div className="flex items-end p-4 justify-between h-full relative top-1">
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
          <div className="h-[15rem] text-white w-[calc(100%-3rem)] sm:w-[calc(100%-5rem)] max-w-[463px] rounded-lg bg-[#181a1c] shrink-0 snap-center snap-always">
            <div className="flex items-end p-4 justify-between h-full relative top-1">
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
    </div>
  );
};

export default ITMobile;
