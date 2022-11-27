"use client";

import { Press_Start_2P } from "@next/font/google";
import Link from "next/link";
import { useState } from "react";
import ITombBtns from "../buttons/IndustrialTombBtn/ITombBtns";
import styles from "../sliders/ProjectsSlider.module.css";

const customFont = Press_Start_2P({ display: "swap", weight: "400" });

const ProjectsSlider = () => {
  const [project, setProject] = useState("slider1");

  return (
    <div className={`${styles.container} w-full mt-8`}>
      <input
        type="radio"
        value="slider1"
        id={styles["s1"]}
        checked={project === "slider1"}
        onChange={() => setProject("slider1")}
      />
      <input
        type="radio"
        value="slider2"
        id={styles["s2"]}
        checked={project === "slider2"}
        onChange={() => setProject("slider2")}
      />
      <input
        type="radio"
        value="slider3"
        id={styles["s3"]}
        checked={project === "slider3"}
        onChange={() => setProject("slider3")}
      />

      <div className={`${styles.cards} w-[90%] max-w-[580px]`}>
        <label htmlFor="s1" id={styles["slide1"]}>
          <div
            className={`
            p-6
            ${styles.card} ${styles.card1}
            ${project !== "slider1" && "cursor-pointer"}
            `}
            onClick={() => setProject("slider1")}
          >
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
                    Push the movable boxes onto their corresponding pressure
                    plates
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
                  href="/about"
                  className="text-[#dbdbdb] hover:text-white transition-colors duration-150 ease-out text-[.7rem]"
                >
                  Learn more...
                </Link>
              </div>
              <div>
                <ITombBtns className="w-[100%] md:w-[90%] mt-4" />
              </div>
            </div>
            {/* <video autoPlay muted loop className="w-full rounded-xl">
              <source src="/IndustrialTombVideo.mp4" type="video/mp4" />
            </video>
            <div
              className={`${customFont.className} flex flex-col items-center justify-between mt-5`}
            >
              <div>
                <div className="flex flex-col w-full items-center">
                  <h3 className="w-[90%]">
                    <picture>
                      <img src="/Heading3.svg" alt="heading" />
                    </picture>
                  </h3>
                  <h4 className="text-[#EBEB17] text-[0.8rem] mt-[3px] mb-3">
                    JavaScript Game
                  </h4>
                </div>
                <h5 className="text-[.7rem]">How to play:</h5>
                <ul className="text-[#DBDBDB] list-disc ml-2 text-[.7rem] my-2">
                  <li>
                    Push the movable boxes onto their corresponding pressure
                    plates
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
                  href="/about"
                  className="text-[#dbdbdb] hover:text-white transition-colors duration-150 ease-out text-[.7rem]"
                >
                  Learn more...
                </Link>
              </div>
              <ITombBtns className="w-[100%] md:w-[90%] mt-4" />
            </div> */}
          </div>
        </label>

        <label htmlFor="s2" id={styles["slide2"]}>
          <div
            className={`p-6 ${styles.card} ${styles.card2} ${
              project !== "slider2" && "cursor-pointer"
            }`}
            onClick={() => setProject("slider2")}
          >
            <div className="h-full w-full bg-red-300"></div>
          </div>
        </label>

        <label htmlFor="s3" id={styles["slide3"]}>
          <div
            className={`${styles.card} ${styles.card3} ${
              project !== "slider3" && "cursor-pointer"
            }`}
            onClick={() => setProject("slider3")}
          >
            slide3
          </div>
        </label>
      </div>
    </div>
  );
};

export default ProjectsSlider;
