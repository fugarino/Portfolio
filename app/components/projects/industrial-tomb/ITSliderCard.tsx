import { Press_Start_2P } from "@next/font/google";
import Link from "next/link";
import ITombBtns from "../../ui/buttons/IndustrialTombBtn/ITombBtns";

const customFont = Press_Start_2P({ display: "swap", weight: "400" });

const ITSliderCard = () => {
  return (
    <div
      className={`${customFont.className} h-full w-full flex flex-col justify-between`}
    >
      <div>
        <video autoPlay muted loop className="w-full rounded-xl">
          <source src="/IndustrialTombVideo.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col w-full items-center mt-4">
          <h3 className="w-[90%]">
            <picture>
              <img src="/Heading3.svg" alt="heading" />
            </picture>
          </h3>
          <h4 className="text-[#EBEB17] text-[0.8rem] mt-[3px] mb-3">
            JavaScript Game
          </h4>
        </div>
      </div>
      <div>
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
            Figure out the correct combination to solve the level and advance.
          </li>
        </ul>
        <Link
          href="/industrialtomb"
          className="text-[#dbdbdb] hover:text-white transition-colors duration-150 ease-out text-[.7rem]"
        >
          Learn more...
        </Link>
      </div>
      <div>
        <ITombBtns className="w-[100%] mt-4" />
      </div>
    </div>
  );
};

export default ITSliderCard;
