import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

const RM = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "Mageshkannan Portfolio",
  title: "Mageshkannan Portfolio",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Portfolio",
    "Front-end",
    "Developer",
    "Web Developer",
    "Mageshkannan",
  ],

  description:
    "A Creative Frontend focused Web Developer building Creative, Engaging and Entertaining Frontend of Websites and Web Applications!",
  authors: [
    {
      name: "Mageshkannan",
    },
  ],
  creator: "Mageshkannan",
  publisher: "Mageshkannan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  
 

  return (
    <html lang="en">
      <body className={RM.className}>
        <Navbar />
       
        {children}
        <Analytics />
      </body>
    </html>
  );
}
