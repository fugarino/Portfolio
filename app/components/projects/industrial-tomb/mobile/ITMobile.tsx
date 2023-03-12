import ITAboutM from "./ITAboutM";
import ITCallToAction from "./ITCallToAction";
import ITHeaderM from "./ITHeaderM";
import ITSection from "./ITSection";

const ITMobile = () => {
  return (
    <div className="xl:hidden">
      <ITHeaderM />
      <ITAboutM src="IndustrialTombVideo" />
      <div>
        <ITSection
          src="IndustrialTombVideo"
          paragraph="The objective is to push the moveable boxes onto corresponding pressure plates, and interact with levers to enable trap doors. After enabling the final lever, the scarab will become visible, and the player must reach it and interact with it. If the player makes a mistake, they can easily restart by jumping off the map. Upon solving the level, players will receive a star rating based on their completion time: 3 stars for under 5 minutes, 2 stars for under 10 minutes, and 1 star for simply finishing."
        />
        <ITSection
          src="MY Movie1"
          paragraph="For the majority of the game's visuals, including the character, a 16x16 tileset was used. The individual collections of tiles were positioned separately on an HTML canvas, with the game loop updating their positions on each iteration - except for the character - creating the illusion of movement and keeping the player centered at all times. As a result, the game offers a beautiful UI that adapts well to all screen sizes."
        />
      </div>
      <div className="relative h-[15rem] sm:h-[20rem] rounded-lg bg-[#181a1c] overflow-hidden mx-[1rem] sm:mx-[2rem] mt-4">
        <div className="relative w-full">
          <div className="absolute h-full w-[40rem] sm:w-[60rem] -bottom-[2.2rem] left-[1.2rem]">
            <picture>
              <img src="/Group15.svg" alt="ITimg" />
            </picture>
          </div>
        </div>
      </div>
      <ITCallToAction />
    </div>
  );
};

export default ITMobile;
