"use client";
import { useEffect, useState } from "react";
import { useTheme } from "../../Contexts/ThemeContext";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [bg, setBg] = useState(theme === "Light" ? "white" : "#130E00");

  useEffect(() => {
    const handleScroll = () => {
      if ((pathname === "/" && window.scrollY > 100) || pathname !== "/") {
        setBg(theme === "Light" ? "white" : "#130E00");
      } else {
        setBg("transparent");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme]);

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
