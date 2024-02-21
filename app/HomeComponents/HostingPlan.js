"use client";
import { useState, useEffect } from "react";
import { useTheme } from "../Contexts/ThemeContext";

// Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Virtual } from "swiper/modules";

//Data
import { hostingPlanData } from "./Data";
import Link from "next/link";

// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

export default function HostingPlan() {
  const { theme } = useTheme();
  const [perView, setPerView] = useState(1);
  const [current, setCurrent] = useState(0);

  const handleResize = () => {
    if (window.innerWidth <= 700) {
      setPerView(1);
    } else if (window.innerWidth > 700 && window.innerWidth < 1000) {
      setPerView(2);
    } else {
      setPerView(3);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const handleSlide = (num) => {};

  return (
    <section
      data-aos="fade-right"
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
        {perView === 1 && (
          <div className="w-full mb-4 md:mb-8 flex justify-center gap-4">
            {[0, 1, 2].map((item) => (
              <button
                onClick={() => handleSlide(item)}
                key={crypto.randomUUID()}
                className={`w-4 h-4 rounded-full ${
                  theme === "Light" ? "border border-black" : "border-none"
                } ${item === current ? "bg-gold500" : "bg-white"}`}
              ></button>
            ))}
          </div>
        )}
        <Swiper
          className="w-full z-10"
          modules={[A11y, Virtual]}
          spaceBetween={5}
          slidesPerView={perView}
          virtual

          //   onSwiper={(swiper) => console.log(swiper)}
          //   onSlideChange={() => console.log("slide change")}
        >
          {hostingPlanData.map((item, index) => (
            <SwiperSlide key={item.name} virtualIndex={index}>
              {({ isActive }) => {
                isActive && setCurrent(index);
                return (
                  <div
                    className={`h-max mb-5 pt-6 pb-12 px-8 rounded-tl-lg rounded-tr-[100px] rounded-br-lg rounded-bl-[100px] flex flex-col items-center border w-full md:w-[calc(100%-10px)] bg-transparent ${
                      theme === "Light"
                        ? "border-[#EFDAA4]"
                        : "border-[#5E4507]"
                    }`}
                  >
                    <h4
                      className={`text-center font-semibold text-3xl ${
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
                    <p
                      className={`w-full justify-center items-center font-medium mb-3 text-center flex ${
                        theme === "Light" ? "text-gray300" : "text-white"
                      }`}
                    >
                      $<h1 className="text-[50px] font-bold">{item.price}/</h1>
                      mo
                    </p>
                    <Link
                      href={""}
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
                            className="w-full flex items-start gap-2"
                            key={crypto.randomUUID()}
                          >
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              color={`${
                                theme === "Light" ? "#393939" : "white"
                              }`}
                            />
                            <p
                              className={`${
                                theme === "Light"
                                  ? "text-gray300"
                                  : "text-white"
                              } text-lg font-medium`}
                            >
                              {topFeature}
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
                            className="w-full flex items-start gap-2"
                            key={crypto.randomUUID()}
                          >
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              color={`${
                                theme === "Light" ? "#393939" : "white"
                              }`}
                            />
                            <p
                              className={`text-lg font-medium ${
                                theme === "Light"
                                  ? "text-gray300"
                                  : "text-white"
                              }`}
                            >
                              {security}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
