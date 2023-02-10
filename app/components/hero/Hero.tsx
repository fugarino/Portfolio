import SectionLayout from "../layouts/SectionLayout";
import Socials from "../ui/buttons/Socials";
import HeroAnimation from "../ui/effects/HeroAnimation";
import TypewriterEffect from "../ui/effects/TypewriterEffect";

const Hero = () => {
  return (
    <SectionLayout sectionName="About Me" id="about">
      <div className="flex flex-col-reverse md:flex-row my-3">
        <Socials />
        <div className="w-full flex flex-col-reverse md:flex-row">
          <div className="sm:w-1/2 flex flex-col justify-center sm:min-w-[420px] max-w-[635px] mx-auto my-8">
            <h1
              title="Christian Fugarino"
              className="relative top-4 sm:top-0 text-[clamp(1.5rem,8vw,2rem)] sm:text-[clamp(2.64rem,4.5vw,4rem)] min-h-[clamp(4rem,6.8vw,6rem)] font-[700] text-blue-dark dark:text-white"
            >
              <TypewriterEffect />
            </h1>
            <h2 className="text-[clamp(1rem,5vw,1.5rem)] sm:text-[clamp(1.7rem,2.7vw,2.4rem)] font-[500] text-gray-dark dark:text-gray-light">
              FRONT END WEB DEVELOPER
            </h2>
            <p className="text-[0.9rem] sm:text-[clamp(1rem,1.4vw,1.25rem)] font-[300] text-gray dark:text-gray-alt my-1">
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
      </div>
    </SectionLayout>
  );
};

export default Hero;
