"use client";
import Link from "next/link";
import Image from "next/image";

//Context
import { useTheme } from "@/app/contexts/ThemeContext";

//Images
import LightThemeLogo from "@/public/images/LightMode/logo.png";
import DarkThemeLogo from "@/public/images/DarkMode/logo.png";

//Data
import { storeSubMenuLinks } from "../NavlinksData";

// Dropdown Menu Components
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`${
                  theme === "Light" ? "text-gray200" : "text-gray100"
                } text-base font-medium flex items-start gap-2 leading-3 bg-transparent hover:bg-transparent`}
              >
                Store
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className={`bg-white shadow-[0px20px417px0px#00000012] `}
              >
                <ul className=" grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {storeSubMenuLinks.map((component) => (
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className={cn(
                            ` text-sm font-medium select-none h-[40px] flex px-3 duration-300 items-center bg-transparent border border-transparent text-[#b0b0b0] hover:text-[#262626] hover:bg-[#ffbb0a0f] hover:border-[#ffbb0a0d]`
                          )}
                          href={component.path}
                        >
                          <div className="text-sm font-medium leading-none">
                            {component.name}
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

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
