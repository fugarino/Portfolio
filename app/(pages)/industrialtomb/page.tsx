import ITDesktop from "../../components/projects/industrial-tomb/desktop/ITDesktop";
import ITMobile from "../../components/projects/industrial-tomb/mobile/ITMobile";
import ArrowLink from "../../components/ui/links/ArrowLink";

const IndustrialTombPage = () => {
  return (
    <div className="bg-[#292c2f] min-h-screen overflow-x-hidden">
      <style>{`
        html, body {
          background-color: #292c2f;
        }
      `}</style>
      <div className="max-w-[1320px] mx-auto">
        <ArrowLink color="white" />
        <ITDesktop />
        <ITMobile />
      </div>
    </div>
  );
};

export default IndustrialTombPage;
