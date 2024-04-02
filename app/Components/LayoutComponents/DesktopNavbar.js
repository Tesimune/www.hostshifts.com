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
import { storeSubMenuLinks } from "../NavlinksData";

export default function DesktopNavbar() {
  const { theme } = useTheme();
  return (
    <section className="xl:w-[90%] relative  mx-auto hidden xl:flex h-41 justify-between items-center">
      <Link href="/" className="z-50">
        <Image
          src={theme === "Light" ? LightThemeLogo : DarkThemeLogo}
          alt="Logo"
          className="w-[135px]"
        />
      </Link>
      <div className="flex gap-12 z-50">
        <div className="relative cursor-pointer hover-dropDown">
          <p
            className={`${
              theme === "Light" ? "text-gray200" : "text-gray100"
            } text-base font-medium flex items-center gap-2`}
          >
            Store <FontAwesomeIcon icon={faAngleDown} size="base" />
          </p>
          <div
            style={{ boxShadow: "0px 20px 417px 0px #00000012" }}
            className={`${
              theme === "Light" ? "bg-white" : "bg-darkModeBg"
            } absolute mt-3 w-[500px] rounded-3xl p-5 -left-40 duration-300 opacity-0 invisible top-[100%] flex justify-between`}
          >
            <div className="w-[46%] flex flex-col">
              {storeSubMenuLinks.slice(0, 8).map((item) => {
                return (
                  <Link
                    key={crypto.randomUUID()}
                    href={item.path}
                    className={`${
                      theme === "Light" ? "text-gray200" : "text-gray100"
                    } text-sm font-medium h-[40px] flex px-3 duration-300 items-center bg-transparent border border-transparent text-[#b0b0b0] hover:text-[#262626] hover:bg-[#ffbb0a0f] hover:border-[#ffbb0a0d]`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <div className="w-[46%] flex flex-col">
              {storeSubMenuLinks
                .slice(8, storeSubMenuLinks.length)
                .map((item) => {
                  return (
                    <Link
                      key={crypto.randomUUID()}
                      href={item.path}
                      className={`${
                        theme === "Light" ? "text-gray200" : "text-gray100"
                      } text-sm font-medium h-[40px] flex px-3 duration-300 items-center bg-transparent border border-transparent text-[#b0b0b0] hover:text-[#262626] hover:bg-[#ffbb0a0f] hover:border-[#ffbb0a0d]`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
        <Link
          href="https://clients.hostshifts.com/index.php?rp=/announcements"
          className={`${
            theme === "Light" ? "text-gray200" : "text-gray100"
          } text-base font-medium`}
        >
          Announcements
        </Link>

        <Link
          href="https://clients.hostshifts.com/index.php?rp=/knowledgebase"
          className={`${
            theme === "Light" ? "text-gray200" : "text-gray100"
          } text-base font-medium`}
        >
          Knowledgebase
        </Link>
        <Link
          href="https://clients.hostshifts.com/contact.php"
          className={`${
            theme === "Light" ? "text-gray200" : "text-gray100"
          } text-base font-medium`}
        >
          Contact Us
        </Link>
      </div>
      <div className="flex items-center gap-4 z-50">
        <Link
          href="https://clients.hostshifts.com/register.php"
          className="h-48 w-148 duration-300 hover:scale-105 rounded-full flex justify-center bg-gold500 items-center text-white text-base font-semibold"
        >
          Sign Up
        </Link>
        <Link
          href="https://clients.hostshifts.com/login"
          className={`h-48 w-148 flex duration-300 hover:scale-105 justify-center items-center rounded-full border border-gold500 text-base font-semibold bg-transparent text-gold500`}
        >
          Log In
        </Link>
      </div>
    </section>
  );
}
