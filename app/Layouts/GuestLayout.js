"use client";
import { useEffect } from "react";
import Footer from "../Components/LayoutComponents/Footer";
import NavBar from "../Components/LayoutComponents/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../Contexts/ThemeContext";

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
