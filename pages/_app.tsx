import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="bg-red-200">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
