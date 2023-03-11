// "use client";

import ArrowLink from "../../components/ui/links/ArrowLink";
import AiirlabsDesktop from "./AiirlabsDesktop";
import AiirlabsMobile from "./AiirlabsMobile";

const AiirlabsPage = () => {
  // useEffect(() => {
  //   const body = document.querySelector("body");
  //   if (!body) return;
  //   body.style.backgroundColor = "#E9E2DB";
  // }, []);

  return (
    <div className="bg-[#E9E2DB] max-w-[1320px] mx-auto text-black min-h-screen overflow-x-hidden">
      <ArrowLink color="black" />
      <AiirlabsDesktop />
      <AiirlabsMobile />
    </div>
  );
};

export default AiirlabsPage;
