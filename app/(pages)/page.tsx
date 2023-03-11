// "use client";

import Link from "next/link";

// const customFont = Poppins({
//   display: "swap",
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
// });

const HomePage = () => {
  // const scrollRef = useRef<HTMLDivElement>(null);
  // const { scrollTo, setScrollTo } = useScroll();
  // const pathname = usePathname();

  // useEffect(() => {
  //   if (scrollTo !== null) {
  //     const children = scrollRef.current!.children;
  //     for (let i = 0; i < children.length; i++) {
  //       if (children[i].id === scrollTo?.toLowerCase()) {
  //         children[i].scrollIntoView({
  //           behavior: "smooth",
  //         });
  //         setScrollTo(null);
  //       }
  //     }
  //   }
  // }, [scrollTo, setScrollTo]);

  // useEffect(() => {
  //   const body = document.querySelector("body");
  //   body?.removeAttribute("style");
  // }, [pathname]);

  return (
    // <ThemeProvider attribute="class">
    <div
      // ref={scrollRef}
      // className={`${customFont.className} max-w-[1400px] mx-auto py-1 sm:py-2 select-none overflow-x-hidden`}
      className={`max-w-[1400px] mx-auto py-1 sm:py-2 select-none overflow-x-hidden`}
    >
      <Link href="/aiirlabs">aiirlabs</Link>
      <Link href="/industrialtomb">industrialtomb</Link>
      <Link href="/pikachu">pikachu</Link>
      {/* <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer /> */}
    </div>
    // </ThemeProvider>
  );
};

export default HomePage;
