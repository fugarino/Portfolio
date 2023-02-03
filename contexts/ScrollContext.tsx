import { createContext, useContext, useState } from "react";

const ScrollContext = createContext({});

export const useScroll = () => {
  return useContext(ScrollContext);
};

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [scrollTo, setScrollTo] = useState(null);

  const value = {
    scrollTo,
    setScrollTo,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};
