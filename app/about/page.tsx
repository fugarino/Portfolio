import type { NextPage } from "next";
import ArrowLink from "../../components/ui/links/ArrowLink";
import "../../styles/globals.css";
import ITContent from "./ITContent";
import ITFooter from "./ITFooter";
import ITHeader from "./ITHeader";

const About: NextPage = () => {
  return (
    <div className="bg-[#252525]">
      <div className="max-w-[1320px] mx-auto px-10 pt-4">
        <ArrowLink linkURL="/" />
        <ITHeader />
        <ITContent />
        <ITFooter />
      </div>
    </div>
  );
};

export default About;
