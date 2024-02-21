"use client";
import { useState } from "react";
import Card from "./Card";
import { useTheme } from "../Contexts/ThemeContext";

//Data
import { faqsData } from "./Data";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

//Images
import LightModePencil from "@/public/images/LightMode/Home/pencil.png";
import DarkModePencil from "@/public/images/DarkMode/Home/pencil.png";
import Image from "next/image";

export default function FreequentlyAskedQuestion() {
  const { theme } = useTheme();
  const [selected, setSelected] = useState("");

  return (
    <section
      data-aos="fade-in"
      className={`w-full flex justify-center duration-300 h-max py-16 lg:pt-32 ${
        theme === "Light" ? "bg-white" : "bg-darkModeBg"
      }`}
    >
      <div className="w-[85%] flex flex-col items-center">
        <div className="w-136 h-28 rounded-full flex mb-4 md:mb-8 justify-center items-center bg-gold500/10">
          <p className="text-xs font-medium text-gold500">FAQ</p>
        </div>
        <h3
          className={`md:font-bold text-center md:text-[32px] leading-10 text-xl font-semibold mb-16 ${
            theme === "Light" ? "text-gray300" : "text-white"
          }`}
        >
          Frequently Asked Questions
        </h3>
        <div className="w-full flex flex-col gap-5">
          {faqsData.map((item) => {
            return (
              <div
                key={item.question}
                className={`w-full flex flex-col overflow-hidden bg-transparent rounded-3xl duration-300 border ${
                  theme === "Light" ? "border-[#F6ECD3]" : "border-[#5E4507]"
                } ${
                  selected === item.question
                    ? "h-[330px] desktop:h-[250px]"
                    : "h-[105px]"
                }`}
              >
                <div
                  onClick={() => {
                    if (selected === item.question) {
                      setSelected("");
                    } else {
                      setSelected(item.question);
                    }
                  }}
                  className={`w-full cursor-pointer min-h-[105px] flex items-center justify-between px-3.5 md:px-6 `}
                >
                  <div className="flex items-center w-[90%] md:w-[95%] gap-4">
                    <Image
                      src={theme === "Light" ? LightModePencil : DarkModePencil}
                    />
                    <p
                      className={`md:text-xl md:leading-9 w-[90%] text-sm leading-6 font-normal ${
                        theme === "Light" ? "text-gray300" : "text-white"
                      } `}
                    >
                      {item.question}
                    </p>
                  </div>
                  <p
                    className={`md:text-lg text-base font-semibold md:font-bold duration-300 ${
                      theme === "Light" ? "text-gray300" : "text-white"
                    } ${
                      item.question === selected ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <FontAwesomeIcon icon={faAngleDown} />
                  </p>
                </div>

                <div
                  className={` ${
                    selected === item.question
                      ? "h-[225px] desktop:h-[145px]"
                      : "h-0 "
                  } px-3 mb-3   md:px-6 w-full`}
                >
                  <p
                    className={`md:text-base leading-[25px] overflow-hidden border-t flex  items-center px-3 md:px-6 text-xs font-normal desktop:leading-7 ${
                      selected === item.question
                        ? "h-[210px] md:h-[130px]"
                        : "h-0"
                    } ${
                      theme === "Light"
                        ? "text-[#696969] border-[#F6ECD3]"
                        : "text-white border-[#5E4507]"
                    } `}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}

          <Card
            text={
              " Don't Settle for Average Hosting. Elevate Your Website and Embrace top level Security, Speed, and Support for Your Online Journey."
            }
          />
        </div>
      </div>
    </section>
  );
}
