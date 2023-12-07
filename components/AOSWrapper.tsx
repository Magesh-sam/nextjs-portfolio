"use client";
import { useEffect } from "react";
import AOS from "aos";

function AOSWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return <main> {children}</main>;
}

export default AOSWrapper;
