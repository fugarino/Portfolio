import { Poppins } from "@next/font/google";
import type { NextPage } from "next";
import Navbar from "../components/navigation/Navbar";
import "../styles/globals.css";

const customFont = Poppins({ display: "swap", weight: ["300", "600", "700"] });

const HomePage: NextPage = () => {
  return (
    <div
      className={`${customFont.className} max-w-[1620px] px-[1.7rem] py-1 mx-auto select-none`}
    >
      <Navbar />
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
      <h1 className="text-[2rem] font-[700]">Hello World</h1>
    </div>
  );
};

export default HomePage;
