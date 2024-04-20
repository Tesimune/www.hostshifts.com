"use client";
import { useEffect } from "react";
import Footer from "@/components/sections/layout-components/Footer";
import NavBar from "@/components/sections/layout-components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../contexts/ThemeContext";

export default function GuestLayout({ children }) {
  const { theme } = useTheme();
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, [theme]);

  return (
    <main
      className={`w-full ${theme === "Light" ? "bg-white" : "bg-darkModeBg"}`}
    >
      {/* NAVIGATION BAR */}
      <NavBar />

      {children}

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
