import ArrowLink from "../../components/ui/links/ArrowLink";
import AiirlabsDesktop from "./AiirlabsDesktop";
import AiirlabsMobile from "./AiirlabsMobile";

const AiirlabsPage = () => {
  return (
    <div className="bg-[#E9E2DB] max-w-[1320px] mx-auto text-black min-h-screen overflow-x-hidden">
      <style>{`
        html, body {
          background-color: #E9E2DB;
        }
      `}</style>
      <ArrowLink color="black" />
      <AiirlabsDesktop />
      <AiirlabsMobile />
    </div>
  );
};

export default AiirlabsPage;
