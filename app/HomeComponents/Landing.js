"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "../Contexts/ThemeContext";

//Images
import Hero from "@/public/images/LightMode/Home/hero.png";
import Link from "next/link";
import LineSection from "../Components/LayoutComponents/LineSection";

export default function Landing() {
  const { theme } = useTheme();
  const [onMobile, setOnMobile] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 600) {
      setOnMobile(false);
    } else {
      setOnMobile(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <section
      data-aos="fade-up"
      className={`w-full duration-300 z-30 h-700 lg:h-808 py-16 ${
        theme === "Light" ? "bg-white" : "bg-darkModeBg"
      }`}
    >
      <div className="w-[90%] z-0 h-700 lg:h-808  left-[5%] absolute top-0">
        <LineSection mobile={onMobile} />
      </div>
      <div className="max-w-[90%] z-30 w-987 lg:-translate-y-8 -translate-y-2  mx-auto flex flex-col justify-center h-full">
        <div className=" w-full flex flex-col items-center">
          <span
            className={`text-3xl desktop:text-[56px] text-center desktop:leading-[84px] pb-5 font-semibold ${
              theme === "Light" ? "text-gray300" : "text-white"
            }`}
          >
            Secure & Scalable Hosting for Your Digital Success
          </span>
          <p
            className={`${
              theme === "Light" ? "text-gray300" : "text-white"
            } font-medium desktop:text-base desktop:leading-9 w-[88%] pb-6 text-center`}
          >
            Engineered for speed, ensuring lightning-fast loading times and
            optimal website performance. Experience the difference with our
            cutting-edge infrastructure designed to meet the demands of today's
            digital landscape.
          </p>
          <div className="flex z-40 items-center gap-4">
            <Link
              href=""
              className="h-48 w-298 duration-300 hover:scale-105 text-white rounded-full flex justify-center bg-gold500 items-center  text-base font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
