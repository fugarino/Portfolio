import { NextPage } from "next";
import ITContent from "../../components/projects/industrial-tomb/ITContent";
import ITFooter from "../../components/projects/industrial-tomb/ITFooter";
import ITHeader from "../../components/projects/industrial-tomb/ITHeader";
import ArrowLink from "../../components/ui/links/ArrowLink";

const IndustrialTombPage: NextPage = () => {
  return (
    <div className="bg-project-2 min-h-screen overflow-x-hidden">
      <div className="max-w-[1320px] mx-auto px-10 pt-4">
        <ArrowLink linkURL="/" />
        <ITHeader />
        <ITContent />
        <ITFooter />
      </div>
    </div>
  );
};

export default IndustrialTombPage;
