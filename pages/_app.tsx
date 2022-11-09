import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <PrimaryLayout>
        <Component {...pageProps} />
      </PrimaryLayout>
    </ThemeProvider>
  );
}

export default MyApp;
