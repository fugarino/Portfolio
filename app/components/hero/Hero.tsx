import SectionLayout from "../layouts/SectionLayout";
import Socials from "../ui/buttons/Socials";
import TypewriterEffect from "../ui/effects/TypewriterEffect";

const Hero = () => {
  return (
    <SectionLayout sectionName="About" id="about" p="0rem" psm="1.7rem">
      <div className="relative flex items-center space-x-4">
        <main className="w-[calc(100%-2.7rem)] sm:w-full h-[14rem] flex flex-col text-black justify-between my-8 mx-auto sm:my-10 py-6 px-6 sm:px-10 bg-[#CBE2E2] rounded-lg">
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
            <h3 className="font-light leading-4 sm:leading-5">
              Frontend
              <br />
              web developer
            </h3>
            <div className="leading-[15px]">
              <span>&copy;</span> 2023
            </div>
          </div>
        </main>
        <aside className="relative hidden lg:block bg-[#f1f1f1] rounded-lg overflow-hidden min-w-[14rem]">
          <picture>
            <img
              src="/Untitled design (12).webp"
              alt="me"
              className="h-[14rem]"
            />
          </picture>
        </aside>
        <aside className="absolute right-10 sm:right-[25px] bottom-0 sm:bottom-1">
          <Socials layout="row" />
        </aside>
      </div>
    </SectionLayout>
  );
};

export default Hero;
