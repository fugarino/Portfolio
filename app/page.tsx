import { Poppins } from "@next/font/google";
import type { NextPage } from "next";
import Link from "next/link";
import FramerMotion from "../components/FramerMotion";
import Navbar from "../components/navigation/Navbar";
import "../styles/globals.css";
import Hero from "./Hero";

const customFont = Poppins({
  display: "swap",
  weight: ["300", "500", "600", "700"],
});

const HomePage: NextPage = () => {
  return (
    <div
      className={`${customFont.className} max-w-[1620px] px-[1.7rem] py-1 mx-auto select-none`}
    >
      <Navbar />
      <Hero />
      <Link href="/about">about</Link>
      <FramerMotion />
    </div>
  );
};

export default HomePage;
