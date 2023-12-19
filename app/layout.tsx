import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { poppins } from "@/lib/fonts";
import Rainforest from "@/components/Rainforest";
import { Suspense } from "react";
import { Skeleton } from "@/components/Skeleton";

export const metadata: Metadata = {
  title: "Mageshkannan Portfolio",
  description:
    "I'm Mageshkannan and I'm a front-end developer from India. other than coding I love swimming, exploring nature, food, culture and doing wildlife photography 🐳🐯 ",
  openGraph: {
    title: "Mageshkannan Portfolio",
    description:
      "I'm Mageshkannan and I'm a front-end developer from India. other than coding I love swimming, exploring nature, food, culture and doing wildlife photography 🐳🐯 ",
    url: "https://mageshkannan.vercel.app/",
    siteName: "Mageshkannan Portfolio",
    images: {
      url: "https://mageshkannan.vercel.app/ogimg.jpg",
      width: 1200,
      height: 700,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Mageshkannan Portfolio",
    description:
      "I'm Mageshkannan and I'm a front-end developer from India. other than coding I love swimming, exploring nature, food, culture and doing wildlife photography 🐳🐯 ",
    creator: "@mageshkannan",
    images: ["https://mageshkannan.vercel.app/ogimg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}   relative antialiased`}>
        <Navbar />
        {children}
        <Suspense fallback={<Skeleton className="h-8 w-8" />}>
          <Rainforest />
        </Suspense>
      </body>
    </html>
  );
}
