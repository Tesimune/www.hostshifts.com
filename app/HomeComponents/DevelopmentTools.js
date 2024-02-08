"use client";
import Image from "next/image";
import { useTheme } from "../Contexts/ThemeContext";

//Data
import { developmentToolsData } from "./Data";

export default function DevelopmentTools() {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full duration-300 h-max py-16 ${
        theme === "Light" ? "bg-Grey" : "bg-darkModeGrey"
      }`}
    >
      <div className="w-[90%] desktop:w-[80%] mx-auto flex flex-col items-center">
        <h3
          className={`md:font-bold w-max md:text-4xl text-xl font-semibold mb-4 md:mb-8 ${
            theme === "Light" ? "text-black" : "text-white"
          }`}
        >
          Supported Development Tools
        </h3>
        <p
          className={`md:font-medium text-center md:w-full w-[90%] md:text-base text-sm font-normal mb-7 ${
            theme === "Light" ? "text-black" : "text-white"
          }`}
        >
          Build your website using these open-source applications and tools,
          designed to seamlessly work with a diverse array of programming
          languages.
        </p>
        <div className="md:w-[90%] w-full grid md:grid-cols-3 desktop:grid-cols-5 grid-cols-2 md:gap-x-6 md:gap-y-6 gap-x-3 gap-y-3">
          {developmentToolsData.map((item) => {
            return (
              <div
                key={crypto.randomUUID()}
                className={`w-full h-202 rounded-md border duration-300 p-3 md:p-5 flex flex-col justify-center items-center gap-2 ${
                  theme === "Light"
                    ? "border-black bg-white"
                    : "border-white bg-transparent"
                }`}
              >
                <div className="w-auto h-[60%]">
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
