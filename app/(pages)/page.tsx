"use client";

import { Poppins } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useScroll } from "../../contexts/ScrollContext";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navigation/Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";

const customFont = Poppins({
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const HomePage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollTo, setScrollTo } = useScroll();
  const pathname = usePathname();

  useEffect(() => {
    if (scrollTo !== null) {
      const children = scrollRef.current!.children;
      for (let i = 0; i < children.length; i++) {
        if (children[i].id === scrollTo?.toLowerCase()) {
          children[i].scrollIntoView({
            behavior: "smooth",
          });
          setScrollTo(null);
        }
      }
    }
  }, [scrollTo, setScrollTo]);

  useEffect(() => {
    const body = document.querySelector("body");
    body?.removeAttribute("style");
  }, [pathname]);

  return (
    <ThemeProvider attribute="class">
      <div
        ref={scrollRef}
        className={`${customFont.className} max-w-[1400px] mx-auto py-1 sm:py-2 select-none overflow-x-hidden`}
      >
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
