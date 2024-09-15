import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Components/layout/footer";
import Navbar from "./Components/layout/nav-bar";

export const metadata: Metadata = {
  title: "Store",
  description: "Best site to buy clothes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font[RH-Zak]  container  ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
