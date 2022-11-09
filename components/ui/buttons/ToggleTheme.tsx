import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const changeTheme = () => {
    currentTheme === "dark" ? setTheme("light") : setTheme("dark");
  };

  if (!mounted) return null;

  return (
    <button onClick={changeTheme}>
      {currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ToggleTheme;
