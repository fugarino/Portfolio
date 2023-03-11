"use client";

import { useEffect } from "react";
import ITDesktop from "../../components/projects/industrial-tomb/desktop/ITDesktop";
import ITMobile from "../../components/projects/industrial-tomb/mobile/ITMobile";
import ArrowLink from "../../components/ui/links/ArrowLink";

const IndustrialTombPage = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.backgroundColor = "#292c2f";
  }, []);

  return (
    <div className="bg-[#292c2f] min-h-screen overflow-x-hidden">
      <div className="max-w-[1320px] mx-auto">
        <ArrowLink color="white" />
        <ITDesktop />
        <ITMobile />
      </div>
    </div>
  );
};

export default IndustrialTombPage;
