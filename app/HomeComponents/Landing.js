"use client";
import Image from "next/image";
import { useTheme } from "../Contexts/ThemeContext";

//Images
import Hero from "@/public/images/LightMode/Home/hero.png";
import Link from "next/link";

export default function Landing() {
  const { theme, updateTheme } = useTheme();
  return (
    <section
      className={`w-full duration-300 h-max py-16 ${
        theme === "Light" ? "bg-white" : "bg-black"
      }`}
    >
      <div className="w-[90%] mx-auto flex flex-col desktop:flex-row desktop:justify-between">
        <div className="desktop:w-[calc(50%-50px)] w-full flex flex-col justify-center">
          <span
            className={`text-3xl desktop:text-[42px] desktop:leading-[45px] pb-5 font-extrabold ${
              theme === "Light" ? "text-black" : "text-white"
            }`}
          >
            Secure & Scalable Hosting for Your Digital Success
          </span>
          <p
            className={`${
              theme === "Light" ? "text-black" : "text-white"
            } font-semibold pb-4`}
          >
            Engineered for speed, ensuring lightning-fast loading times and
            optimal website performance. Experience the difference with our
            cutting-edge infrastructure designed to meet the demands of today's
            digital landscape.
          </p>
          <div className="flex items-center gap-4 pb-5 desktop:pb-0">
            <Link
              href=""
              className="h-41 w-24 flex justify-center bg-darkGold items-center text-black rounded-md border border-darkGold text-sm font-medium"
            >
              Get Started
            </Link>
            <Link
              href=""
              className={`h-41 w-24 flex bg-transparent justify-center items-center rounded-md border border-darkGold text-sm font-medium ${
                theme === "Light" ? " text-black" : " text-white"
              }`}
            >
              View Plans
            </Link>
          </div>
        </div>
        <div className="desktop:w-6/12 w-full overflow-hidden">
          <Image src={Hero} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}
