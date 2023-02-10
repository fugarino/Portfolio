import PikachuContentWrapper from "../../components/projects/pikachu/PikachuContentWrapper";
import styles from "../../components/ui/buttons/IndustrialTombBtn/ITombBtn.module.css";
import ArrowLink from "../../components/ui/links/ArrowLink";

const PikachuPage = () => {
  return (
    <div className="bg-project-3 min-h-screen overflow-x-hidden">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 pt-4">
        <ArrowLink linkURL="/" color="black" />
        <header className="flex justify-between items-center mt-4 lg:mt-0 h-[clamp(12rem,40vw,30rem)] lg:h-[clamp(12.7rem,30vw,26rem)]">
          <div className="w-[55%] h-full lg:w-[35%] flex flex-col justify-between">
            <div></div>
            <p className="text-black lg:mb-4 font-medium text-[clamp(.9rem,3.1vw,1.2rem)] lg:text-[clamp(.9rem,2vw,1.5rem)] leading-[clamp(19px,2.5vw,25px)]">
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
          <div className="relative w-[45%] lg:w-[65%]">
            <div className="absolute -left-[3.5rem] lg:-left-[4rem] -top-[2.5rem] lg:-top-[3rem] -rotate-[40deg] lg:-rotate-45">
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
                  className="absolute top-0 left-0 right-0 bottom-0 lg:relative object-cover h-full rounded-full lg:rounded-[4rem] border-[3px] border-[#F2C444] p-1"
                />
              </picture>
            </div>
          </div>
        </header>
        <div className="w-full relative top-4 lg:w-[35%] flex justify-between space-x-4 mt-14 px-2">
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
          <section className="mt-20">
            {/* 1 */}
            <article className="flex flex-col lg:flex-row w-full lg:space-x-4">
              <div className="h-[16rem] lg:h-[20rem] w-full lg:w-1/2">
                <div className="pr-14 lg:mt-5">
                  <h2 className="font-bold text-[#535353] text-[clamp(2.5rem,6vw,5rem)]">
                    Step 1
                  </h2>
                  <p className="text-[#515151] font-[400] text-[clamp(.95rem,2vw,1.2rem)]">
                    Create a{" "}
                    <span className="font-[600] text-black">Clip-path</span> for
                    the tail and set the{" "}
                    <span className="font-[600] text-black">
                      overflow to hidden
                    </span>
                    . Next, fill in the tail with the corresponding colored
                    elements.
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
                  <div className="absolute -top-[8.2rem] lg:-top-[10.7rem] right-[3rem] w-[10rem] lg:w-[13rem]">
                    <picture>
                      <img src="/Ash.svg" alt="ash and friends" />
                    </picture>
                  </div>
                </div>
              </div>
            </article>
            {/* 2 */}
            <article className="flex flex-col-reverse lg:flex-row w-full mt-10 lg:space-x-4">
              <div className="relative w-full lg:w-1/2">
                <picture>
                  <img
                    src="/PokemonBall.svg"
                    alt="pokemon ball"
                    className="flex w-[10rem] absolute z-10 -left-[6rem] lg:-left-[2.5rem] top-4 lg:-top-[6rem]"
                  />
                </picture>
                <div className="relative z-10 h-[18rem] bg-[#F2C444] rounded-lg"></div>
              </div>
              <div className="h-[15rem] w-full lg:w-1/2">
                <div className="pr-14 lg:pl-10">
                  <h2 className="font-bold text-[#535353] text-[clamp(2.5rem,6vw,5rem)]">
                    Step 2
                  </h2>
                  <p className="text-[#515151] font-[400] text-[clamp(.95rem,2vw,1.2rem)]">
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
                  </p>
                </div>
              </div>
            </article>
            {/* 3 */}
            <article className="flex flex-col lg:flex-row w-full mt-14 lg:space-x-4">
              <div className="h-[14rem] w-full lg:w-1/2">
                <div className="pr-14 lg:mt-3">
                  <h2 className="font-bold text-[#535353] text-[clamp(2.5rem,6vw,5rem)]">
                    Step 3
                  </h2>
                  <p className="text-[#515151] font-[400] text-[clamp(.95rem,1.7vw,1.2rem)]">
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
                <picture>
                  <img
                    src="/PokemonBall.svg"
                    alt="pokemon ball"
                    className="flex w-[10rem] rotate-[15deg] absolute z-10 -right-[6rem] -bottom-0"
                  />
                </picture>
              </div>
            </article>
          </section>
        </PikachuContentWrapper>
        <footer className="mt-14 flex justify-between space-x-4">
          <div className="w-1/2 flex justify-center items-center">
            <picture>
              <img src="/pikachu_ashketchum 2.svg" alt="ash" />
            </picture>
          </div>
          <div className="w-1/2 flex items-center">
            <div className="w-full">
              <div className="text-[1.1rem] lg:text-[1.5rem] text-black font-semibold">
                Technologies:
              </div>
              <div className="flex justify-center mt-4 space-x-2 w-full">
                <svg viewBox="0 0 128 128" className="w-14 lg:w-20">
                  <path
                    fill="#E44D26"
                    d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                  ></path>
                  <path
                    fill="#F16529"
                    d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                  ></path>
                  <path
                    fill="#EBEBEB"
                    d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                  ></path>
                </svg>
                <svg viewBox="0 0 128 128" className="w-14 lg:w-20">
                  <path
                    fill="#1572B6"
                    d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                  ></path>
                  <path
                    fill="#33A9DC"
                    d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                  ></path>
                  <path
                    fill="#EBEBEB"
                    d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                  ></path>
                  <path
                    fill="#EBEBEB"
                    d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PikachuPage;
