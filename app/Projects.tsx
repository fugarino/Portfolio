import Link from "next/link";
import ProjectLayout from "../components/layouts/ProjectLayout";
import SectionLayout from "../components/layouts/SectionLayout";
import ITombBtns from "../components/ui/buttons/IndustrialTombBtn/ITombBtns";
import ProjectsSlider from "../components/ui/sliders/ProjectsSlider";

const Projects = () => {
  return (
    <SectionLayout sectionName="Projects">
      <div className="hidden home:flex home:flex-col">
        <ProjectLayout alt={true} backgroundColor="bg-[#252525]">
          <div className="flex items-center justify-center home:max-w-[430px] home:w-[50%]">
            <video autoPlay muted loop className="w-full rounded-xl">
              <source src="/IndustrialTombVideo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="mt-6 home:mt-0 home:w-[50%] text-white px-4 flex flex-col items-center justify-between">
            <div className="w-full flex flex-col justify-center items-center">
              <h3 className="h-6 w-[20rem]" title="Industrial Tomb">
                <picture>
                  <img src="/Heading3.svg" alt="heading" />
                </picture>
              </h3>
              <h4 className="text-[#EBEB17] text-[0.8rem] mt-[3px] mb-3">
                JavaScript Game
              </h4>
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
            </div>
            <ITombBtns className="w-[100%] md:w-[90%] mt-4" />
          </div>
        </ProjectLayout>
        <ProjectLayout backgroundColor="bg-[#ffe62d]">
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
        </ProjectLayout>
        <ProjectLayout alt={true} backgroundColor="bg-[#cbcbcb]">
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
        </ProjectLayout>
      </div>
      <div className="home:hidden flex items-center justify-center w-full my-2">
        <ProjectsSlider />
      </div>
    </SectionLayout>
  );
};

export default Projects;
