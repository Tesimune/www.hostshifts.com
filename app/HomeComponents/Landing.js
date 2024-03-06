"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "../Contexts/ThemeContext";

//Images
import Hero from "@/public/images/LightMode/Home/hero.png";
import Link from "next/link";
import LineSection from "../Components/LayoutComponents/LineSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
          <div className="flex w-full justify-center z-40 items-center mt-5">
            <form
              action="https://clients.hostshifts.com/cart.php?a=add&domain=register"
              method="post"
              className="w-673 max-w-full border border-[#EDDDB7] rounded-full h-52 bg-transparent flex items-center overflow-hidden"
            >
              <input
                type="text"
                name="query"
                size={20}
                placeholder="Begin the search for your perfect domain name..."
                className={`border-none font-semibold text-base placeholder:text-[#B0B0B0]  w-[calc(100%-64px)] h-full rounded-full bg-transparent outline-none pl-5 desktop:pl-10  ${
                  theme === "Light" ? "text-gray300" : "text-[#B0B0B0]"
                }`}
              />
              <button
                type="submit"
                className={`bg-transparent flex justify-center items-center h-full w-16 outline-none border-none ${
                  theme === "Light" ? "text-gray300" : "text-[#B0B0B0]"
                }`}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
            {/* <Link
              href=""
              className="h-48 w-298 duration-300 hover:scale-105 text-white rounded-full flex justify-center bg-gold500 items-center  text-base font-semibold"
            >
              Get Started
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
