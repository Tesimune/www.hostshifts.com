"use client";
import { useEffect, useState } from "react";
import { useTheme } from "../../Contexts/ThemeContext";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function NavBar() {
  const { theme } = useTheme();
  const [bg, setBg] = useState("transparent");

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setBg(theme === "Light" ? "white" : "black");
    } else {
      setBg("transparent");
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{ backgroundColor: bg }}
      className={`w-full z-50 fixed top-0 left-0 py-5 `}
    >
      <DesktopNavbar />
      <MobileNavbar />
    </nav>
  );
}
