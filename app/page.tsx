import { Poppins } from "@next/font/google";
import type { NextPage } from "next";
import Navbar from "../components/navigation/Navbar";
import "../styles/globals.css";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

const customFont = Poppins({
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const HomePage: NextPage = () => {
  return (
    <div
      className={`${customFont.className} max-w-[1620px] py-1 mx-auto select-none`}
    >
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      {/* <FramerMotion /> */}
    </div>
  );
};

export default HomePage;
