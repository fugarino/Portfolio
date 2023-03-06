"use client";

import { useEffect } from "react";
import ArrowLink from "../../components/ui/links/ArrowLink";
import AiirlabsDesktop from "./AiirlabsDesktop";
import AiirlabsMobile from "./AiirlabsMobile";

const AiirlabsPage = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.backgroundColor = "#E9E2DB";
  }, []);

  return (
    <div className="bg-[#E9E2DB] min-h-screen overflow-x-hidden">
      <div className="max-w-[1320px] mx-auto">
        <div className="px-[1rem] sm:px-[2rem] mt-4">
          <ArrowLink color="black" />
        </div>
        <AiirlabsDesktop />
        <AiirlabsMobile />
      </div>
    </div>
  );
};

export default AiirlabsPage;
