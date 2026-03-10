import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevFolio \u2014 Sankalp \u00B7 Open Source & Full Stack",
  description: "Portfolio of Sankalp, a full-stack developer building open source tools in React, Node.js, and Go.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
