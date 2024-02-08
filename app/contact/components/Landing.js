"use client";
import Image from "next/image";
import Hero from "@/public/images/customer-support.png";
import { useTheme } from "@/app/Contexts/ThemeContext";

export default function Landing() {
  const { theme } = useTheme();
  return (
    <section
      className={`w-full duration-300 h-max py-16 ${
        theme === "Light" ? "bg-Grey" : "bg-darkModeGrey"
      }`}
    >
      <div className="w-[90%] mx-auto flex flex-col desktop:flex-row desktop:justify-between">
        <div className="desktop:w-[calc(50%-50px)] w-full flex flex-col justify-center">
          <span
            className={`text-3xl desktop:text-[42px] desktop:leading-[45px] pb-5 font-extrabold ${
              theme === "Light" ? "text-black" : "text-white"
            }`}
          >
            Have Inquiries?
            <br /> Let's Chat!
          </span>
          <p
            className={`${
              theme === "Light" ? "text-black" : "text-white"
            } font-semibold pb-4`}
          >
            Need immediate assistance or have specific inquiries about our
            hosting services? Look no further. Our Contact page is your gateway
            to swift and personalized support.
          </p>
        </div>
        <div className="desktop:w-6/12 w-full overflow-hidden">
          <Image src={Hero} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}
