"use client";

import { useEffect } from "react";
import PikachuDesktop from "../../components/projects/pikachu/desktop/PikachuDesktop";
import PikachuMobile from "../../components/projects/pikachu/mobile/PikachuMobile";
import ArrowLink from "../../components/ui/links/ArrowLink";

const PikachuPage = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.backgroundColor = "#ffe62d";
  }, []);

  return (
    <div className="bg-[#ffe62d] min-h-screen overflow-x-hidden">
      <div className="max-w-[1320px] mx-auto">
        <div className="px-[1rem] sm:px-[2rem] mt-4">
          <ArrowLink color="black" />
        </div>
        <PikachuDesktop />
        <PikachuMobile />
      </div>
    </div>
  );
};

export default PikachuPage;
