"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

//Context
import { useTheme } from "@/app/contexts/ThemeContext";

//Images
import LightThemeLogo from "@/public/images/LightMode/logo.png";
import DarkThemeLogo from "@/public/images/DarkMode/logo.png";

import { useEffect, useState } from "react";
import MenuDropDown from "./MenuDropdown";

let navAnimationClass = "";

export default function MobileNavbar() {
  const pathname = usePathname();
  const { theme, updateTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    if (isOpen) {
      navAnimationClass = "";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    } else {
      navAnimationClass = "open";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      toggleDrawer();
    }
  }, [pathname]);

  return (
    <section className="w-[90%] relative mx-auto xl:hidden flex h-41 justify-between items-center">
      <Link href="/" className="">
        <Image
          src={theme === "Light" ? LightThemeLogo : DarkThemeLogo}
          alt="Logo"
          className="w-[130px]"
        />
      </Link>
      <button
        className={`${navAnimationClass} block hamburger xl:hidden outline-none ${
          isOpen ? "invisible" : "visible"
        }`}
        type="button"
        onClick={toggleDrawer}
      >
        <span
          className={`hamburger-top ${
            theme === "Light" ? "bg-black" : "bg-white"
          }`}
        ></span>
        <span
          className={`hamburger-middle ${
            theme === "Light" ? "bg-black" : "bg-white"
          }`}
        ></span>
        <span
          className={`hamburger-bottom ${
            theme === "Light" ? "bg-black" : "bg-white"
          }`}
        ></span>
      </button>
      {isOpen && (
        <MenuDropDown
          removeClass={() => {
            navAnimationClass = "";
          }}
          close={() => toggleDrawer()}
        />
      )}
    </section>
  );
}
