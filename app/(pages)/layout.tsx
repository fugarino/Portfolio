"use client";

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
        {/* <ScrollProvider>{children}</ScrollProvider> */}
        {children}
      </body>
    </html>
  );
}
