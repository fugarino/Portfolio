import ITombBtns from "../../components/ui/buttons/IndustrialTombBtn/ITombBtns";

const ITHeader = () => {
  return (
    <header className="mt-4">
      <h1 title="Industiral Tomb" className="mt-4">
        <picture>
          <img src="/Heading3.svg" alt="heading" />
        </picture>
      </h1>
      <div className="flex justify-between mt-1">
        <div></div>
        <h2 className="text-[#eedf54] font-[600] text-[clamp(0.9rem,2vw,1.2rem)]">
          A JavaScript Game
        </h2>
      </div>
      <section className="relative -left-[6.5rem] flex items-center justify-between w-[calc(100%+6.5rem)]">
        <div className="w-[60%]">
          <picture>
            <img src="/Group14.svg" alt="game preview image 1" />
          </picture>
        </div>
        <ITombBtns className="w-[35%]" />
      </section>
    </header>
  );
};

export default ITHeader;
