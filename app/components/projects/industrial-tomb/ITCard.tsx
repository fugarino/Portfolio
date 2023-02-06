import { Press_Start_2P } from "@next/font/google";
import Link from "next/link";
import ITombBtns from "../../ui/buttons/IndustrialTombBtn/ITombBtns";

const customFont = Press_Start_2P({ display: "swap", weight: "400" });

const ITCard = () => {
  return (
    <>
      <div className="lg:w-[45%] xl:w-1/2 flex items-center">
        <div className="max-w-[510px]">
          <video autoPlay muted loop className="w-full rounded-xl">
            <source src="/IndustrialTombVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        className={`${customFont.className} w-[55%] lg:w-1/2 xl:w-[55%] flex flex-col items-center`}
      >
        <div className="pl-6 flex flex-col items-center">
          <h3 className="h-6 w-[20rem]" title="Industrial Tomb">
            <picture>
              <img src="/Heading3.svg" alt="heading" />
            </picture>
          </h3>
          <h4 className="text-[#EBEB17] text-[0.8rem] mt-[3px] mb-3">
            JavaScript Game
          </h4>
          <div className="max-w-[600px]">
            <h5 className="text-[.7rem]">How to play:</h5>
            <ul className="text-[#DBDBDB] list-disc ml-2 text-[.7rem] my-2">
              <li>
                Push the movable boxes onto their corresponding pressure plates
              </li>
              <li>Press E to interact with the levers</li>
            </ul>
            <h5 className="text-[.7rem]">Objective:</h5>
            <ul className="text-[#DBDBDB] list-disc ml-2 text-[.7rem] mt-2 mb-1">
              <li>
                Figure out the correct combination to solve the level and
                advance.
              </li>
            </ul>
            <Link
              href="/industrialtomb"
              className="text-[#dbdbdb] hover:text-white transition-colors duration-150 ease-out text-[.7rem]"
            >
              Learn more...
            </Link>
          </div>
          <ITombBtns className="w-[100%] mt-4" />
        </div>
      </div>
    </>
  );
};

export default ITCard;
