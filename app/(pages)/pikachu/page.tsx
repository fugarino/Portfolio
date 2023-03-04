"use client";

import { useEffect } from "react";
import PikachuContentWrapper from "../../components/projects/pikachu/PikachuContentWrapper";
import styles from "../../components/ui/buttons/IndustrialTombBtn/ITombBtn.module.css";
import ArrowLink from "../../components/ui/links/ArrowLink";

const PikachuPage = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.backgroundColor = "#ffe62d";
  }, []);

  return (
    <div className="bg-[#ffe62d] min-h-screen overflow-x-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 pt-4">
        <ArrowLink color="black" />
        <header className="flex flex-col-reverse sm:flex-row justify-between items-center mt-4 lg:mt-0 sm:h-[clamp(12rem,40vw,30rem)] lg:h-[clamp(12.7rem,30vw,26rem)]">
          <div className="w-full sm:w-[55%] h-full lg:w-[35%] flex flex-col justify-between">
            <div></div>
            <p className="text-black mt-6 sm:mt-0 lg:mb-4 font-semibold sm:font-medium text-[1.1rem] sm:text-[clamp(.9rem,3.1vw,1.2rem)] lg:text-[clamp(.9rem,2vw,1.5rem)] leading-[clamp(19px,2.5vw,25px)]">
              This &quot;drawing&quot;
              <br />
              was made entirely
              <br />
              in html and css. Some
              <br />
              might argue that these tools
              <br />
              aren&apos;t great for making art.
              <br />
              I disagree!
              <br />
              This is a 3 step guide on how
              <br />
              to make pikachu in html and css.
            </p>
          </div>
          <div className="relative w-[70%] sm:w-[45%] lg:w-[65%]">
            <div className="absolute min-w-[4rem] -right-5 sm:right-auto -top-[4rem] sm:-left-[3.5rem] lg:-left-[4rem] sm:-top-[2.5rem] lg:-top-[3rem] rotate-[35deg] sm:-rotate-[40deg] lg:-rotate-45">
              <picture>
                <img
                  src="/pokemon logo.svg"
                  alt="pokemon logo"
                  className="w-[7rem] h-[7rem]"
                />
              </picture>
            </div>
            <div className="w-full pt-[100%] lg:pt-0 relative">
              <picture>
                <img
                  src="/PikachuOrange.png"
                  alt="pikachu"
                  className="absolute top-0 lg:relative h-full lg:h-auto object-cover rounded-full lg:rounded-[4rem] border-[3px] border-[#F2C444] p-1"
                />
              </picture>
            </div>
          </div>
        </header>
        <div className="w-full relative top-4 lg:w-[35%] flex justify-between space-x-4 mt-4 sm:mt-14 px-2">
          <button
            className={`${styles.pikachuBtn} bg-[#F2C444] w-1/2 py-3 border-[3px] border-[#435691] text-[#3a4b7f] hover:text-[#2c3a65] font-semibold active:-translate-x-[4px] active:translate-y-[4px]`}
          >
            View
          </button>
          <button
            className={`${styles.pikachuBtn} bg-[#F2C444] w-1/2 py-3 border-[3px] border-[#435691] text-[#3a4b7f] hover:text-[#2c3a65] font-semibold active:-translate-x-[4px] active:translate-y-[4px]`}
          >
            Code
          </button>
        </div>

        <PikachuContentWrapper>
          <section className="mt-14 sm:mt-20">
            {/* 1 */}
            <article className="flex flex-col lg:flex-row w-full lg:space-x-4">
              <div className="h-[16rem] lg:h-[20rem] w-full lg:w-1/2">
                <div className="sm:pr-14 lg:mt-5">
                  <h2 className="font-bold text-[#2c2c2c] leading-[3rem] sm:leading-[5.5rem] text-[clamp(2.5rem,6vw,5rem)]">
                    Step 1
                  </h2>
                  {/* <p className="text-[#515151] font-[400] text-[clamp(1rem,2vw,1.2rem)]">
                    Create a{" "}
                    <span className="font-[600] text-black">Clip-path</span> for
                    the tail and set the{" "}
                    <span className="font-[600] text-black">
                      overflow to hidden
                    </span>
                    . Next, fill in the tail with the corresponding colored
                    elements.
                  </p> */}
                  <p className="text-[#3c3c3c] font-[400] text-[clamp(1rem,2vw,1.1rem)]">
                    In order to{" "}
                    <span className="font-[600] text-black">
                      create the tail
                    </span>
                    , apply a{" "}
                    <span className="font-[600] text-black">clip-path</span> and
                    set the{" "}
                    <span className="font-[600] text-black">
                      overflow to hidden
                    </span>
                    . Then, add multiple nested child elements to{" "}
                    <span className="font-[600] text-black">
                      fill in the colors
                    </span>
                    .
                  </p>
                </div>
              </div>
              <div className="relative w-full lg:w-1/2">
                <picture>
                  <img
                    src="/PokemonBall.svg"
                    alt="pokemon ball"
                    className="flex w-[10rem] rotate-[15deg] absolute z-10 -right-[4rem] -bottom-[3.3rem]"
                  />
                </picture>
                <div className="relative z-20 w-full h-[18rem] bg-[#F2C444] rounded-lg">
                  <picture>
                    <img
                      src="/PT.png"
                      alt="pikachu"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </picture>
                  <div className="absolute -top-[6.5rem] sm:-top-[8.2rem] lg:-top-[10.7rem] right-[3rem] w-[8rem] sm:w-[10rem] lg:w-[13rem]">
                    <picture>
                      <img src="/Ash.svg" alt="ash and friends" />
                    </picture>
                  </div>
                </div>
              </div>
            </article>
            {/* 2 */}
            <article className="flex flex-col-reverse lg:flex-row w-full mt-12 lg:space-x-4">
              <div className="relative w-full lg:w-1/2">
                <picture>
                  <img
                    src="/PokemonBall.svg"
                    alt="pokemon ball"
                    className="flex w-[10rem] absolute z-10 -left-[6rem] lg:-left-[2.5rem] top-4 lg:-top-[6rem]"
                  />
                </picture>
                <div className="relative z-10 h-[18rem] bg-[#F2C444] rounded-lg">
                  <picture>
                    <img
                      src="/P2.png"
                      alt="pikachu"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </picture>
                </div>
              </div>
              <div className="h-[15rem] w-full lg:w-1/2 mb-10 sm:mb-6">
                <div className="sm:pr-14 lg:pl-6 xl:pl-8 w-full flex flex-col justify-center h-full">
                  <h2 className="font-bold text-[#2c2c2c] leading-[3rem] sm:leading-[5.5rem] text-[clamp(2.5rem,6vw,5rem)]">
                    Step 2
                  </h2>
                  {/* <p className="text-[#3c3c3c] w-full font-[400] text-[clamp(1rem,2vw,1.2rem)]">
                    In order to{" "}
                    <span className="text-black font-[600]">
                      recreate the outline
                    </span>
                    , specifically the curved lines -&gt; add two elements that
                    have a parent-child relationship.{" "}
                    <span className="font-[600] text-black">
                      Use a combination of
                    </span>{" "}
                    border radius, overflow hidden, relative and absolute
                    positioning{" "}
                    <span className="font-[600] text-black">
                      to shape and position the elements
                    </span>
                    . Add a border to the child and voila.
                  </p> */}
                  <p className="text-[#3c3c3c] w-full font-[400] text-[clamp(1rem,2vw,1.1rem)]">
                    To recreate a curved line, create a parent-child
                    relationship between two elements. Use border radius,
                    overflow hidden, and relative/absolute positioning to shape
                    and position the elements. Finally, add a border to the
                    child element and voilà. Once the outline is complete, block
                    in the main colors and shadows.
                  </p>
                </div>
              </div>
            </article>
            {/* 3 */}
            <article className="flex flex-col lg:flex-row w-full mt-14 lg:mt-20 lg:space-x-4">
              <div className="h-[14rem] w-full lg:w-1/2">
                <div className="sm:pr-14 lg:mt-3">
                  <h2 className="font-bold text-[#2c2c2c] leading-[3rem] text-[clamp(2.5rem,6vw,5rem)]">
                    Step 3
                  </h2>
                  <p className="text-[#3c3c3c] font-[400] text-[clamp(1rem,1.7vw,1.1rem)]">
                    <span className="font-[600] text-black">
                      Block in the main colors
                    </span>{" "}
                    by adding elements using relative and absolute positioning
                    once again.{" "}
                    <span className="font-[600] text-black">
                      Finally add the finishing touches
                    </span>
                    , like shadows, eyes and mouth. The entire process{" "}
                    <span className="font-[600] text-black">
                      should take about 15 minutes
                    </span>
                    .
                  </p>
                </div>
              </div>
              <div className="relative h-[18rem] bg-[#F2C444] rounded-lg w-full lg:w-1/2">
                {/* <picture>
                  <img
                    src="/PokemonBall.svg"
                    alt="pokemon ball"
                    className="flex w-[10rem] rotate-[15deg] absolute z-10 -right-[8rem] -bottom-0"
                  />
                </picture> */}
                <picture>
                  <img
                    src="/PF.png"
                    alt="pikachu"
                    className="h-full w-full object-cover rounded-lg"
                  />
                </picture>
              </div>
            </article>
          </section>
        </PikachuContentWrapper>
        <footer className="mt-[4.5rem] flex justify-between space-x-4">
          <div className="w-full flex justify-center items-center">
            <picture>
              <img
                src="/pikachu_ashketchum 2.svg"
                alt="ash"
                className="w-full"
              />
            </picture>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PikachuPage;
