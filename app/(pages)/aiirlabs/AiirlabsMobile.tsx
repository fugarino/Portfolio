import AiirlabsHeaderM from "../../components/projects/aiirlabs/mobile/AiirlabsHeaderM";
import Phone1 from "../../components/projects/aiirlabs/mobile/Phone1";

const AiirlabsMobile = () => {
  return (
    <div className="xl:hidden">
      <AiirlabsHeaderM />
      <div className="h-[15rem] sm:h-[20rem] w-full px-[1rem] sm:px-[2rem] mt-4">
        <picture>
          <img
            src="/Frame 3.png"
            alt="iphones"
            className="w-full h-full object-cover rounded-lg"
          />
        </picture>
      </div>
      <Phone1 />
      <Phone1 />
      <Phone1 />
      <div className="h-[15rem] sm:h-[20rem] w-full px-[1rem] sm:px-[2rem] mt-4">
        <picture>
          <img
            src="/Frame 33.png"
            alt="iphones"
            className="w-full h-full object-cover rounded-lg"
          />
        </picture>
      </div>
      <div className="mt-4 mb-4 sm:mb-8 h-[16rem] sm:h-[14.5rem] overflow-hidden">
        <section className="h-[17.5rem] pb-10 px-[1rem] sm:px-[2rem] flex space-x-4 overflow-x-auto snap-x snap-mandatory">
          <div className="bg-[#DCCCBE] w-[calc(100%-2rem)] shrink-0 snap-center snap-always rounded-lg"></div>
          <div className="bg-[#DCCCBE] w-[calc(100%-2rem)] shrink-0 snap-center snap-always rounded-lg"></div>
        </section>
      </div>
    </div>
  );
};

export default AiirlabsMobile;
