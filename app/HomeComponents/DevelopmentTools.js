"use client";
import Image from "next/image";
import { useTheme } from "../Contexts/ThemeContext";

//Data
import { developmentToolsData } from "./Data";

export default function DevelopmentTools() {
  const { theme } = useTheme();

  return (
    <section
      data-aos="fade-up"
      className={`w-full duration-300 h-max py-16 lg:pt-32 ${
        theme === "Light" ? "bg-white" : "bg-darkModeBg"
      }`}
    >
      <div className="w-[90%] desktop:w-[85%] mx-auto flex flex-col items-center">
        <div className="w-136 h-28 rounded-full flex mb-4 md:mb-8 justify-center items-center bg-gold500/10">
          <p className="text-xs font-medium text-gold500">Tools</p>
        </div>
        <h3
          className={`md:font-bold w-max md:text-[32px] leading-10 text-xl font-semibold mb-4 md:mb-8 ${
            theme === "Light" ? "text-gray300" : "text-white"
          }`}
        >
          Supported Development Tools
        </h3>
        <p
          className={`md:font-medium text-center md:leading-8 w-[870px] max-w-[90%] md:text-base text-sm font-medium mb-20 ${
            theme === "Light" ? "text-gray300" : "text-white"
          }`}
        >
          Build your website using these open-source applications and tools,
          designed to seamlessly work with a diverse array of programming
          languages.
        </p>
        <div className="md:w-[90%] w-full flex justify-center flex-wrap md:gap-x-10 md:gap-y-10 gap-x-5 gap-y-5 tool-box">
          {developmentToolsData.map((item) => {
            return (
              <div
                key={crypto.randomUUID()}
                className={` h-244 w-[calc(50%-10px)] md:w-[calc(33.2%-26.6px)] desktop:w-[calc(25%-30px)] box-border rounded-2xl border duration-300 p-3 md:p-5 flex flex-col justify-center items-center gap-2 ${
                  theme === "Light"
                    ? "border-[#EFDAA4] bg-white"
                    : "border-[#5E4507] bg-transparent"
                }`}
              >
                <div className="w-auto h-[58%]">
                  <Image src={item.img} alt="Logo" />
                </div>
                <p
                  className={`font-medium text-xl ${
                    theme === "Light" ? "text-black" : "text-white"
                  }`}
                >
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
