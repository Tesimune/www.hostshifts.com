"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../Contexts/ThemeContext";

//Images
import LightThemeLogo from "/images/LightMode/logo.png";
import DarkThemeLogo from "/images/DarkMode/logo.png";

export default function AuthenticationLayout({ children }) {
  const { theme } = useTheme();
  return (
    <main
      className={`w-full pb-8 duration-300 h-auto min-h-[100dvh] ${
        theme === "Light" ? "bg-white" : "bg-darkModeBg"
      }`}
    >
      <div className="w-[90%] mx-auto flex h-[100px] items-center">
        <Link href="/">
          <Image
            src={theme === "Light" ? LightThemeLogo : DarkThemeLogo}
            alt="Logo"
            className="w-[135px]"
          />
        </Link>
      </div>
      {children}
    </main>
  );
}
