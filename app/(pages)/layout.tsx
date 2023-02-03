"use client";

import { ThemeProvider } from "next-themes";
import { ScrollProvider } from "../../contexts/ScrollContext";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider attribute="class">
          <ScrollProvider>{children}</ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
