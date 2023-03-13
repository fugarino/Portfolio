import PikachuDesktop from "../../components/projects/pikachu/desktop/PikachuDesktop";
import PikachuMobile from "../../components/projects/pikachu/mobile/PikachuMobile";
import ArrowLink from "../../components/ui/links/ArrowLink";

const PikachuPage = () => {
  return (
    <div className="bg-[#ffe62d] text-black min-h-screen overflow-x-hidden">
      <style>{`
        html, body {
          background-color: #ffe62d;
        }
      `}</style>
      <div className="max-w-[1320px] mx-auto">
        <ArrowLink color="black" />
        <PikachuDesktop />
        <PikachuMobile />
      </div>
    </div>
  );
};

export default PikachuPage;
