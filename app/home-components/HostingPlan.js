"use client";
import { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

// Splide JS
import "@splidejs/react-splide/css";
import { SplideSlide, Splide } from "@splidejs/react-splide";

//Data
import hostingPlanData from "./data/hostingPlans";
import Link from "next/link";

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";

export default function HostingPlan() {
  const { theme } = useTheme();
  const [perView, setPerView] = useState(1);

  const handleResize = () => {
    if (window.innerWidth <= 700) {
      setPerView(1);
    } else if (window.innerWidth > 700 && window.innerWidth <= 1000) {
      setPerView(2);
    } else {
      setPerView(3);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <section
      data-aos="fade-up"
      className={`w-full duration-300 h-max py-16 lg:pt-32 ${
        theme === "Light" ? "bg-white" : "bg-darkModeBg"
      }`}
    >
      <div className="w-[90%] mx-auto flex flex-col items-center">
        <div className="w-136 h-28 rounded-full flex mb-4 md:mb-8 justify-center items-center bg-gold500/10">
          <p className="text-xs font-medium text-gold500">Pricing</p>
        </div>
        <h3
          className={`md:font-bold text-center md:text-[32px] leading-10 text-xl font-semibold mb-16 ${
            theme === "Light" ? "text-gray300" : "text-white"
          }`}
        >
          Discover the Perfect Hosting Plan for You
        </h3>
      </div>
      <Splide
        aria-label="Hosting Plans"
        className="w-full md:px-[5%]"
        options={{
          perPage: perView,
          gap: 20,
        }}
      >
        {hostingPlanData.map((item, index) => (
          <SplideSlide
            className="pb-10 flex justify-center"
            key={item.name}
            virtualIndex={index}
          >
            <div
              className={`h-max mb-5 w-[85%] pt-6 pb-12 px-8 rounded-tl-lg rounded-tr-[100px] rounded-br-lg rounded-bl-[100px] mr-2 flex flex-col items-center border md:w-[calc(100%-10px)] bg-transparent ${
                theme === "Light" ? "border-[#EFDAA4]" : "border-[#5E4507]"
              }`}
            >
              <h4
                className={`text-center font-semibold text-2xl ${
                  theme === "Light" ? "text-gray300" : "text-white"
                } mb-3`}
              >
                {item.name}
              </h4>
              <p
                className={`text-sm font-medium text-black mb-1 text-center ${
                  theme === "Light" ? "text-gray300" : "text-white"
                }`}
              >
                Basically all you need to create your website
              </p>
              <div
                className={`w-full justify-center items-center font-medium mb-3 text-center flex ${
                  theme === "Light" ? "text-gray300" : "text-white"
                }`}
              >
                $<h1 className="text-[40px] font-bold">{item.price}/</h1>
                year
              </div>
              <Link
                href={item.url}
                className={`mx-auto w-[90%] text-base font-semibold flex justify-center items-center mb-5 rounded-full duration-300 hover:scale-105 h-48 bg-gold500 text-white`}
              >
                Get Started
              </Link>
              <div className="w-full border-b border-[#e5e5e5] mb-6"></div>
              <p
                className={`${
                  theme === "Light" ? "text-gray300" : "text-white"
                } w-full mb-5 font-bold text-lg`}
              >
                Top Features
              </p>
              <div className="w-full flex flex-col gap-4">
                {item.topFeatures.map((topFeature) => {
                  return (
                    <div
                      className="w-full flex items-center gap-2"
                      key={crypto.randomUUID()}
                    >
                      <FontAwesomeIcon
                        icon={
                          topFeature.available ? faCheckCircle : faXmarkCircle
                        }
                        size="sm"
                        color={`${theme === "Light" ? "#393939" : "white"}`}
                      />
                      <p
                        className={`${
                          theme === "Light" ? "text-gray300" : "text-white"
                        } text-sm font-medium`}
                      >
                        {topFeature.feature} - {topFeature.value}
                      </p>
                    </div>
                  );
                })}
              </div>
              <p
                className={`w-full my-5 font-bold text-lg ${
                  theme === "Light" ? "text-gray300" : "text-white"
                }`}
              >
                Security
              </p>
              <div className="w-full flex flex-col gap-4">
                {item.security.map((security) => {
                  return (
                    <div
                      className="w-full flex items-center gap-2"
                      key={crypto.randomUUID()}
                    >
                      <FontAwesomeIcon
                        icon={
                          security.available ? faCheckCircle : faXmarkCircle
                        }
                        size="sm"
                        color={`${theme === "Light" ? "#393939" : "white"}`}
                      />
                      <p
                        className={`text-sm font-medium ${
                          theme === "Light" ? "text-gray300" : "text-white"
                        }`}
                      >
                        {security.feature} - {security.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <Link
        href="mailto:hello@hostshifts.com"
        className="h-48 w-170 md:w-298 duration-300 hover:scale-105 mt-8 text-white rounded-full flex justify-center bg-gold500 items-center  text-base font-semibold mx-auto"
      >
        Custom
      </Link>
    </section>
  );
}
