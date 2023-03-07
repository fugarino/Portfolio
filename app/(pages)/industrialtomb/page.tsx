"use client";

import { useEffect } from "react";
import ITDesktop from "../../components/projects/industrial-tomb/desktop/ITDesktop";
import ArrowLink from "../../components/ui/links/ArrowLink";

const IndustrialTombPage = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.backgroundColor = "#34383B";
  }, []);

  return (
    <div className="bg-[#34383B] min-h-screen overflow-x-hidden">
      <div className="max-w-[1320px] mx-auto">
        <div className="px-[1rem] sm:px-[2rem] mt-4">
          <ArrowLink color="white" />
        </div>
        <ITDesktop />
      </div>
    </div>
  );
};

export default IndustrialTombPage;
