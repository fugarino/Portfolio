"use client";

import { Poppins } from "@next/font/google";
import type { NextPage } from "next";
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

const HomePage: NextPage = () => {
  const scrollRef = useRef<any>("");
  const { scrollTo, setScrollTo }: any = useScroll();

  useEffect(() => {
    if (scrollTo !== null) {
      const children = scrollRef.current.children;
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

  return (
    <div
      ref={scrollRef}
      className={`${customFont.className} max-w-[1400px] py-1 mx-auto select-none overflow-x-hidden`}
    >
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
