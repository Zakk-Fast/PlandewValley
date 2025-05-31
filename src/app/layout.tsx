import type { Metadata } from "next";
import Header from "./components/header/Header";
import DndWrapper from "./components/DndWrapper/DndWrapper";

import "./globals.css";

export const metadata: Metadata = {
  title: "Plandew Valley",
  description:
    "An interactive crop planner and profit calculator for Stardew Valley players.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <DndWrapper>
          <div className="wrapper">{children}</div>
        </DndWrapper>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
