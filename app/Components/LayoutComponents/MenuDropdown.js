"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

//Context
import { useTheme } from "../../Contexts/ThemeContext";

//Icons
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Images
import LightThemeLogo from "@/public/images/LightMode/logo.png";
import DarkThemeLogo from "@/public/images/DarkMode/logo.png";

//Data
import { productSubMenuLinks, resourcesSubMenuLinks } from "../NavlinksData";
import Image from "next/image";
import ThemeSwitch from "../ThemeSwitch";

export default function MenuDropDown({ close, removeClass }) {
  const [opacity, setOpacity] = useState(0);
  const [pos, setPos] = useState("translateY(-150%)");
  const { theme } = useTheme();
  const [selectedMenu, setSelectedMenu] = useState("");

  useEffect(() => {
    setOpacity(1);
    setPos("translateY(0px)");
  }, []);

  const toggleSelectedMenu = (value) => {
    if (selectedMenu === value) {
      setSelectedMenu("");
    } else {
      setSelectedMenu(value);
    }
  };

  return (
    <div
      style={{ opacity: opacity, transform: pos }}
      className={`duration-500 fixed top-0 left-0 z-40 ${
        theme === "Light" ? "bg-white" : "bg-darkModeBg"
      } w-screen h-[100dvh] pb-8 pt-8 flex flex-col`}
    >
      {/* Logo */}
      <div className=" fixed top-0 left-[5%] h-[90px] w-[90%]  flex items-center justify-between">
        <div className="flex gap-3.5 items-center">
          <Link href="/">
            <Image
              src={theme === "Light" ? LightThemeLogo : DarkThemeLogo}
              alt="Logo"
              className="w-[130px]"
            />
          </Link>
          <ThemeSwitch />
        </div>
        <button
          className={`open block hamburger lg:hidden outline-none`}
          type="button"
          onClick={close}
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
      </div>

      {/* Links */}
      <div className="w-[90%] mt-10 overflow-x-hidden scroll-hidden overflow-y-auto h-[calc(100dvh-90px)] mx-auto items-center flex flex-col gap-7 py-8">
        <Link
          onClick={removeClass}
          href="/login"
          className={`w-full text-gold500 flex text-base font-semibold justify-center items-center min-h-[48px] rounded border border-gold500 `}
        >
          Log In
        </Link>
        <Link
          onClick={removeClass}
          href="/login"
          className={`w-full  flex text-base font-semibold text-white bg-gold500 justify-center items-center min-h-[48px] rounded  `}
        >
          Sign Up
        </Link>
        <div className="flex flex-col w-full">
          <div
            onClick={() => toggleSelectedMenu("Product")}
            className={`${
              theme === "Light" ? "text-gray200" : "text-gray100"
            } text-base cursor-pointer font-bold flex justify-between items-center`}
          >
            Product
            <span
              className={`duration-300 ${
                selectedMenu === "Product" ? "rotate-90" : "rotate-0"
              }`}
            >
              <FontAwesomeIcon icon={faAngleRight} fontSize={16} />
            </span>
          </div>

          <div
            className={`w-full pl-3 translate-y-3 overflow-y-hidden flex flex-col gap-4 duration-300 ${
              selectedMenu === "Product" ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            {productSubMenuLinks.map((item) => {
              return (
                <Link
                  key={crypto.randomUUID()}
                  href={item.path}
                  className={`${
                    theme === "Light" ? "text-gray200" : "text-gray100"
                  } text-xs font-medium`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div
            onClick={() => toggleSelectedMenu("Resources")}
            className={`${
              theme === "Light" ? "text-gray200" : "text-gray100"
            } text-base cursor-pointer font-bold flex justify-between items-center`}
          >
            Resources
            <span
              className={`duration-300 ${
                selectedMenu === "Resources" ? "rotate-90" : "rotate-0"
              }`}
            >
              <FontAwesomeIcon icon={faAngleRight} fontSize={16} />
            </span>
          </div>

          <div
            className={`w-full pl-3 translate-y-3 overflow-y-hidden flex flex-col gap-4 duration-300 ${
              selectedMenu === "Resources" ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            {" "}
            <p
              className={`${
                theme === "Light" ? "text-gray200" : "text-gray100"
              } text-sm font-semibold`}
            >
              Resources
            </p>
            {resourcesSubMenuLinks.resources.map((item) => {
              return (
                <Link
                  key={crypto.randomUUID()}
                  href={item.path}
                  className={`${
                    theme === "Light" ? "text-gray200" : "text-gray100"
                  } text-xs font-medium pl-2`}
                >
                  {item.name}
                </Link>
              );
            })}
            <p
              className={`${
                theme === "Light" ? "text-gray200" : "text-gray100"
              } text-sm font-semibold pt-4`}
            >
              About Us
            </p>
            {resourcesSubMenuLinks.about.map((item) => {
              return (
                <Link
                  key={crypto.randomUUID()}
                  href={item.path}
                  className={`${
                    theme === "Light" ? "text-gray200" : "text-gray100"
                  } text-xs font-medium pl-2`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <Link
          href=""
          className={`${
            theme === "Light" ? "text-gray200" : "text-gray100"
          } text-base font-bold w-full`}
        >
          Doc
        </Link>

        <Link
          href=""
          className={`${
            theme === "Light" ? "text-gray200" : "text-gray100"
          } text-base font-bold w-full`}
        >
          Pricing
        </Link>
      </div>
    </div>
  );
}
