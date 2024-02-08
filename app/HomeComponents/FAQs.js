"use client";
import { useState } from "react";
import { useTheme } from "../Contexts/ThemeContext";
import Link from "next/link";

//Data
import { faqsData } from "./Data";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function FreequentlyAskedQuestion() {
  const { theme } = useTheme();
  const [selected, setSelected] = useState("");

  return (
    <section
      className={`w-full flex justify-center duration-300 h-max pt-16 ${
        theme === "Light" ? "bg-white" : "bg-black"
      }`}
    >
      <div className="w-[85%] flex flex-col items-center">
        <h3
          className={`md:font-bold w-max md:text-4xl text-xl font-semibold mb-4 md:mb-8 ${
            theme === "Light" ? "text-black" : "text-white"
          }`}
        >
          Freequently asked questions
        </h3>
        <div className="w-full flex flex-col gap-5">
          {faqsData.map((item) => {
            return (
              <div key={item.question} className="w-full flex flex-col gap-5">
                <div
                  onClick={() => {
                    if (selected === item.question) {
                      setSelected("");
                    } else {
                      setSelected(item.question);
                    }
                  }}
                  className={`w-full cursor-pointer h-max flex items-center justify-between py-3 px-3.5 md:px-6 rounded-md ${
                    selected === item.question
                      ? "bg-gold500 border border-transparent"
                      : "bg-transparent border border-[#131126]"
                  }`}
                >
                  <p
                    className={`md:text-lg w-[90%] text-base font-semibold md:font-bold ${
                      selected === item.question && theme !== "Light"
                        ? "text-black"
                        : ""
                    } ${
                      selected !== item.question && theme !== "Light"
                        ? "text-white"
                        : ""
                    } ${
                      selected === item.question && theme === "Light"
                        ? "text-white"
                        : ""
                    } ${
                      selected !== item.question && theme === "Light"
                        ? "text-black"
                        : ""
                    }`}
                  >
                    {item.question}
                  </p>
                  <p
                    className={`md:text-lg text-base font-semibold md:font-bold ${
                      selected === item.question && theme !== "Light"
                        ? "text-black"
                        : ""
                    } ${
                      selected !== item.question && theme !== "Light"
                        ? "text-white"
                        : ""
                    } ${
                      selected === item.question && theme === "Light"
                        ? "text-white"
                        : ""
                    } ${
                      selected !== item.question && theme === "Light"
                        ? "text-black"
                        : ""
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={selected === item.question ? faMinus : faPlus}
                    />
                  </p>
                </div>
                {selected === item.question && (
                  <div className="py-3 px-3.5 md:px-6 w-full">
                    <p
                      className={`md:text-base text-sm font-medium leading-5 md:leading-6 ${
                        theme === "Light" ? "text-black" : "text-white"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
          <div className="flex justify-center gap-3 items-center">
            <Link
              href={""}
              className={` w-[141px] text-black bg-gold500 text-sm font-bold flex justify-center items-center rounded-md h-[50px]`}
            >
              Contact Us
            </Link>
            <Link
              href={""}
              className={` w-[48px] border border-gold500 text-lg flex justify-center items-center rounded-md h-[50px] ${
                theme === "Light" ? "text-black" : "text-white"
              }`}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </Link>
            <Link
              href={""}
              className={` w-max font-bold text-sm flex justify-center items-center rounded-md h-[50px] ${
                theme === "Light" ? "text-black" : "text-white"
              }`}
            >
              Get Started
            </Link>
          </div>
          <section className="w-full translate-y-12 bg-gold500 h-max rounded-lg py-8 md:py-[72px] px-8 flex flex-col items-center gap-7">
            <p className="desktop:w-[800px] text-black  md:w-[90%] w-full text-center font-semibold leading-8 desktop:leading-10 text-sm desktop:text-[27px]">
              Ready to Discuss Your Hosting Needs? Reach out to Our Team of
              Experts Now! Click to Contact Us and Unlock Tailored Solutions for
              Your Website
            </p>
            <Link
              href={""}
              className={` w-[279px] text-white bg-black text-base font-bold flex justify-center items-center rounded-md h-[64px]`}
            >
              Get Started
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}
