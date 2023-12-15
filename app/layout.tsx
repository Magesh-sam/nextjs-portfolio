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
