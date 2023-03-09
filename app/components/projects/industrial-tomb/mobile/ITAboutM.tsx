import ITVideoM from "./ITVideoM";

const ITAboutM = ({ src }: { src: string }) => {
  return (
    <div className="h-[16.04rem] sm:h-[20.04rem] overflow-hidden">
      <div className="flex px-[1rem] sm:px-[2rem] mt-4 space-x-4 pb-10 overflow-x-auto snap-x snap-mandatory">
        <div
          className="w-[calc(100%-3rem)] sm:w-[calc(100%-6rem)] max-w-[463px] sm:h-[19rem]
		 	    rounded-lg bg-[#181a1c] p-4 shrink-0 snap-center snap-always"
        >
          <p className="flex h-full items-end text-white font-bold text-[1rem] sm:text-[1.1rem]">
            Industrial Tomb is a 2D Puzzle-Platformer game in which players must
            use interactive objects to reach the glowing scarab. Upon
            completion, players will receive a star rating based on their time
            of completion.
          </p>
        </div>
        <div
          className="w-[calc(100%-3rem)] sm:w-[calc(100%-6rem)] max-w-[463px] h-[15rem] sm:h-[19rem]
		 	    rounded-lg overflow-hidden bg-[#181a1c] shrink-0 snap-center snap-always"
        >
          <ITVideoM src={src} />
        </div>
      </div>
    </div>
  );
};

export default ITAboutM;
