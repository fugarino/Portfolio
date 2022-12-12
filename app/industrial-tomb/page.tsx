"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import ArrowLink from "../../components/ui/links/ArrowLink";
import "../../styles/globals.css";
import ITContent from "./ITContent";
import ITFooter from "./ITFooter";
import ITHeader from "./ITHeader";

const IndustrialTombPage = () => {
  const { theme, setTheme }: any = useTheme();

  useEffect(() => {
    const prevTheme = theme;
    setTheme("dark");
    return () => {
      setTheme(prevTheme);
    };
  }, []);

  return (
    <>
      <div className="bg-[#151719] min-h-screen overflow-x-hidden">
        <div className="max-w-[1320px] mx-auto px-10 pt-4">
          <ArrowLink linkURL="/" />
          <ITHeader />
          <ITContent />
          <ITFooter />
        </div>
      </div>
    </>
  );
};

export default IndustrialTombPage;
