import { createContext, useContext, useState } from "react";

interface IScrollContext {
  scrollTo: string | null;
  setScrollTo: React.Dispatch<React.SetStateAction<null>>;
}

const ScrollContext = createContext({} as IScrollContext);

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
