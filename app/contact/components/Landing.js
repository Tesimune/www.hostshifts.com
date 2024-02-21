"use client";
import { useTheme } from "@/app/Contexts/ThemeContext";

export default function Landing() {
  const { theme } = useTheme();
  return (
    <section
      data-aos="fade-up"
      className={`w-full duration-300 h-max pb-16 pt-36 ${
        theme === "Light" ? "bg-white" : "bg-darkModeBg"
      }`}
    >
      <div className="desktop:w-[85%] w-[90%] mx-auto flex flex-col items-center">
        <div className="w-136 h-28 rounded-full flex mb-4 md:mb-8 justify-center items-center bg-gold500/10">
          <p className="text-xs font-medium text-gold500">Contact Us</p>
        </div>
        <h1
          className={`text-center w-[806px] mb-5 max-w-full font-bold md:text-6xl md:leading-[72px] text-4xl leading-[48px] ${
            theme === "Light" ? "text-gray300" : "text-white"
          }`}
        >
          Have Inquiries? <span className="text-gold500">Let's Chat!</span>
        </h1>
      </div>
    </section>
  );
}
