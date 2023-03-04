"use client";

import { useEffect } from "react";
import ITContent from "../../components/projects/industrial-tomb/ITContent";
import ITFooter from "../../components/projects/industrial-tomb/ITFooter";
import ITHeader from "../../components/projects/industrial-tomb/ITHeader";
import ArrowLink from "../../components/ui/links/ArrowLink";

const IndustrialTombPage = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.backgroundColor = "#151719";
  }, []);

  return (
    <div className="bg-[#151719] min-h-screen overflow-x-hidden">
      <div className="max-w-[1320px] mx-auto px-[1.5rem] sm:px-[2rem] pt-4 idkk">
        <ArrowLink color="white" />
        <ITHeader />
        <ITContent />
        <ITFooter />
      </div>
    </div>
  );
};

export default IndustrialTombPage;
