"use client";
import Link from "next/link";
import Image from "next/image";

//Context
import { useTheme } from "../../Contexts/ThemeContext";

//Icons
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Images
import LightThemeLogo from "@/public/images/LightMode/logo.png";
import DarkThemeLogo from "@/public/images/DarkMode/logo.png";

//Data
import { productSubMenuLinks, resourcesSubMenuLinks } from "../NavlinksData";

export default function DesktopNavbar() {
  const { theme } = useTheme();
  return (
    <section className="desktop:w-[90%] relative  mx-auto hidden desktop:flex h-41 justify-between items-center">
      <Link href="/" className="z-50">
        <Image
          src={theme === "Light" ? LightThemeLogo : DarkThemeLogo}
          alt="Logo"
        />
      </Link>
      <div className="flex gap-12 z-50">
        <div className="relative cursor-pointer hover-dropDown">
          <p
            className={`${
              theme === "Light" ? "text-gray200" : "text-gray100"
            }  text-base  font-medium flex items-center gap-2`}
          >
            Product <FontAwesomeIcon icon={faAngleDown} size="base" />
          </p>
          <div
            className={`${
              theme === "Light" ? "bg-white" : "bg-darkModeBg"
            } absolute w-40 rounded-lg shadow-xl mt-3 p-5 -left-16 duration-300 opacity-0 invisible top-[100%] flex flex-col gap-3`}
          >
            {productSubMenuLinks.map((item) => {
              return (
                <Link
                  key={crypto.randomUUID()}
                  href={item.path}
                  className={`${
                    theme === "Light" ? "text-gray200" : "text-gray100"
                  } text-sm font-medium`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="relative cursor-pointer hover-dropDown">
          <p
            className={`${
              theme === "Light" ? "text-gray200" : "text-gray100"
            } text-base font-medium flex items-center gap-2`}
          >
            Resources <FontAwesomeIcon icon={faAngleDown} size="base" />
          </p>
          <div
            className={`${
              theme === "Light" ? "bg-white" : "bg-darkModeBg"
            } absolute mt-3 w-96 rounded-lg shadow-xl p-5 -left-40 duration-300 opacity-0 invisible top-[100%] flex justify-between`}
          >
            <div className="w-[46%] flex flex-col gap-3">
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
                    } text-sm font-medium`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <div className="w-[46%] flex flex-col gap-3">
              <p
                className={`${
                  theme === "Light" ? "text-gray200" : "text-gray100"
                } text-sm font-semibold`}
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
                    } text-sm font-medium`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <Link
          href=""
          className={`${
            theme === "Light" ? "text-gray200" : "text-gray100"
          } text-base font-medium`}
        >
          Doc
        </Link>

        <Link
          href=""
          className={`${
            theme === "Light" ? "text-gray200" : "text-gray100"
          } text-base font-medium`}
        >
          Pricing
        </Link>
      </div>
      <div className="flex items-center gap-4 z-50">
        <Link
          href="/register"
          className="h-48 w-148 duration-300 hover:scale-105 rounded-full flex justify-center bg-gold500 items-center text-white text-base font-semibold"
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className={`h-48 w-148 flex duration-300 hover:scale-105 justify-center items-center rounded-full border border-gold500 text-base font-semibold bg-transparent text-gold500`}
        >
          Log In
        </Link>
      </div>
    </section>
  );
}
