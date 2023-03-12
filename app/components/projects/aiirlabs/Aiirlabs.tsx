import Link from "next/link";
import ProjectsBtns from "../ProjectsBtns";
import AiirlabsCardHeader from "./AiirlabsCardHeader";
import AiirlabsShowcase from "./AiirlabsShowcase";

const Aiirlabs = () => {
  return (
    <li
      className="bg-[#cdc6c0] snap-center snap-always h-[20rem] sm:h-[25rem] xl:h-[21rem]
	  w-[calc(100%-4rem)] sm:w-[calc(100%-4rem)] sm:max-w-[500px] xl:w-full xl:max-w-none
	  rounded-lg shrink-0 ml-[1.4rem] sm:ml-[1.7rem] mr-[0.9rem] xl:mx-0 overflow-hidden"
    >
      <article className="h-full flex flex-col xl:flex-row">
        <Link
          href="/aiirlabs"
          className="w-full h-[65%] sm:h-[68%] xl:h-auto xl:w-1/2 p-1 sm:p-[6px] xl:p-2"
        >
          <div className="h-full overflow-hidden rounded-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-top top-0 rounded-lg"
            >
              <source src="/aiir.mp4" type="video/mp4" />
            </video>
          </div>
        </Link>
        <main className="relative w-full h-[35%] sm:h-[32%] xl:h-auto xl:w-1/2 p-4 sm:p-4 xl:p-8 xl:pb-0 flex flex-col justify-between">
          <AiirlabsCardHeader />
          <AiirlabsShowcase />
          <div className="block xl:hidden">
            <ProjectsBtns
              siteLink="https://aiirlabs.com/"
              githubLink="https://github.com/fugarino/crypto"
              href="/aiirlabs"
              color="#00000088"
              hoverColor="black"
            />
          </div>
        </main>
      </article>
    </li>
  );
};

export default Aiirlabs;
