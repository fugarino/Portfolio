import SectionLayout from "../layouts/SectionLayout";
import Socials from "../ui/buttons/Socials";
import TypewriterEffect from "../ui/effects/TypewriterEffect";

const Hero = () => {
  return (
    <SectionLayout sectionName="About" id="about" p="0rem" psm="1.7rem">
      {/* <div className="flex flex-col-reverse md:flex-row my-3">
        <Socials />
        <div className="w-full flex flex-col-reverse md:flex-row">
          <div className="sm:w-1/2 flex flex-col justify-center sm:min-w-[420px] max-w-[635px] mx-auto pr-1 sm:pr-0 my-8">
            <h1
              title="Christian Fugarino"
              className="relative top-4 sm:top-0 text-[clamp(1.5rem,8.3vw,2rem)] sm:text-[clamp(2.64rem,4.5vw,4rem)] min-h-[clamp(4rem,6.8vw,6rem)] font-[700] text-blue-dark dark:text-white"
            >
              <TypewriterEffect />
            </h1>
            <h2 className="text-[clamp(1rem,5.8vw,1.5rem)] sm:text-[clamp(1.7rem,2.7vw,2.4rem)] font-[500] text-gray-dark dark:text-gray-light">
              FRONT END WEB DEVELOPER
            </h2>
            <p className="text-[0.95rem] sm:text-[clamp(1rem,1.4vw,1.25rem)] font-[300] text-gray dark:text-gray-alt my-1">
              Hi, I{"'"}m Christian. I know how to center a div.
              <br />
              Also, cats are better than dogs.
            </p>
            <button className="max-w-[clamp(7.6rem,10vw,10rem)] px-2 text-[clamp(.9rem,1.2vw,1.1rem)] mt-3 py-2 rounded-lg border-[1.5px] text-white bg-blue-dark dark:bg-dark border-blue-dark hover:bg-white hover:text-blue-dark dark:text-white dark:border-white dark:hover:text-blue-dark hover:dark:bg-white transition-colors duration-150 ease-out">
              Contact me!
            </button>
          </div>
          <div className="hidden lg:w-1/2 lg:flex lg:items-center lg:justify-center">
            <HeroAnimation />
          </div>
        </div>
      </div> */}
      <div className="relative flex items-center space-x-4">
        <div className="w-[calc(100%-2.7rem)] sm:w-full h-[14rem] flex flex-col text-black justify-between my-8 mx-auto sm:my-10 py-6 px-6 sm:px-10 bg-[#CBE2E2] rounded-lg">
          <div className="flex justify-between">
            <div>
              <h2 className="text-[1rem] sm:text-[1.2rem] min-h-[1.8rem] font-semibold font-mono">
                <TypewriterEffect />
              </h2>
              <h1 className="text-[3.5rem] sm:text-[4.2rem] md:text-[5rem] font-black leading-[2.8rem] sm:leading-[3.3rem] md:leading-[3.7rem] relative -left-1">
                portfolio.
              </h1>
            </div>
            <div className="hidden md:flex text-[1.1rem] font-black">
              <h3>
                selected
                <br />
                works
              </h3>
            </div>
          </div>
          <div className="flex items-end justify-between text-[1rem] sm:text-[1.2rem] font-bold">
            <div className="font-light leading-4 sm:leading-5">
              Frontend
              <br />
              web developer
            </div>
            <div className="leading-[15px]">
              <span>&copy;</span> 2023
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block bg-[#f1f1f1] rounded-lg overflow-hidden min-w-[14rem]">
          <picture>
            <img
              src="/Untitled design (12).png"
              alt="me"
              className="h-[14rem]"
            />
          </picture>
        </div>
        <aside className="absolute right-10 sm:right-[25px] bottom-0 sm:bottom-1">
          <Socials layout="row" />
        </aside>
      </div>
    </SectionLayout>
  );
};

export default Hero;
