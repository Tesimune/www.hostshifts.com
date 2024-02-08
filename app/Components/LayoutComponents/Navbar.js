"use client";
import { useTheme } from "../../Contexts/ThemeContext";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function NavBar() {
  const { theme, updateTheme } = useTheme();
  return (
    <nav
      className={`w-full z-50 sticky top-0 left-0 py-5 ${
        theme === "Light" ? "bg-white" : "bg-black"
      }`}
    >
      <DesktopNavbar />
      <MobileNavbar />
    </nav>
  );
}
