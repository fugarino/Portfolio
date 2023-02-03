"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkBtnText, setDarkBtnText] = useState("");
  const { theme, setTheme }: any = useTheme();

  useEffect(() => {
    if (document.documentElement.classList.contains("light")) {
      setDarkBtnText("Dark Mode");
      setTheme("light");
    } else {
      setDarkBtnText("Light Mode");
      setTheme("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleEscPress = ({ key }: any) => {
      if (key === "Escape" && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscPress);
    return () => {
      window.removeEventListener("keydown", handleEscPress);
    };
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDarkModeClick = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    darkBtnText === "Dark Mode"
      ? setDarkBtnText("Light Mode")
      : setDarkBtnText("Dark Mode");
    setIsMenuOpen(false);
  };

  return {
    isMenuOpen,
    darkBtnText,
    handleMenuClick,
    handleDarkModeClick,
  };
};

export default useMenu;
