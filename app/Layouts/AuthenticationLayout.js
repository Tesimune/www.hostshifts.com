"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "../Contexts/ThemeContext";

//Images
import LightThemeLogo from "@/public/images/LightMode/logo.png";
import DarkThemeLogo from "@/public/images/DarkMode/authentication-logo.png";

export default function AuthenticationLayout({ children }) {
  const { theme } = useTheme();
  return (
    <main
      className={`w-full pb-8 duration-300 h-auto min-h-[100dvh] ${
        theme === "Light" ? "bg-white" : "bg-gold500"
      }`}
    >
      <div className="w-[90%] mx-auto flex h-[60px] items-center">
        <Link href="/">
          <Image
            src={theme === "Light" ? LightThemeLogo : DarkThemeLogo}
            alt="Logo"
          />
        </Link>
      </div>
      {children}
    </main>
  );
}
