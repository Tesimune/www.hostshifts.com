"use client";
import Image from "next/image";
import { useTheme } from "../Contexts/ThemeContext";

//Data
import { customerReviewData } from "./Data";

// Splide JS
import "@splidejs/react-splide/css";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";

export default function CustomerReview() {
  const [isArrow, setIsArrow] = useState(false);
  const { theme } = useTheme();

  const handleResize = () => {
    if (window.innerWidth <= 940) {
      setIsArrow(false);
    } else {
      setIsArrow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <section
      className={`w-full flex justify-center duration-300 h-max py-16 ${
        theme === "Light" ? "bg-Grey" : "bg-darkModeGrey"
      }`}
    >
      <div className="w-[90%] flex flex-col items-center">
        <h3
          className={`md:font-bold w-max md:text-4xl text-xl font-semibold mb-4 md:mb-8 ${
            theme === "Light" ? "text-black" : "text-white"
          }`}
        >
          What Businesses Say About Us
        </h3>
        <div className="w-full">
          <Splide
            aria-label="Customer Reviews"
            className="w-full"
            options={{
              perPage: 1,
              arrows: isArrow,
            }}
          >
            {customerReviewData.map((item) => {
              return (
                <SplideSlide
                  key={crypto.randomUUID}
                  className="w-full  flex justify-center pb-14"
                >
                  <div
                    className={`w-[85%] p-8 rounded-xl shadow-xl ${
                      theme === "Light" ? "bg-white" : "bg-black"
                    }`}
                  >
                    <p
                      className={`desktop:text-[27px] mb-8 text-lg leading-8 font-medium desktop:leading-[38px] ${
                        theme === "Light" ? "text-black" : "text-white"
                      }`}
                    >
                      {item.message}
                    </p>
                    <div className="w-full flex gap-3 items-center">
                      <Image src={item.userImage} alt="User Image" />
                      <div className="flex flex-col gap-0.5">
                        <p
                          className={`font-semibold desktop:text-2xl leading-8 text-lg ${
                            theme === "Light" ? "text-black" : "text-white"
                          }`}
                        >
                          {item.userName}
                        </p>
                        <p
                          className={`font-medium desktop:text-base leading-8 text-xs ${
                            theme === "Light"
                              ? "text-[#6A6A6A]"
                              : "text-[#F6F6F6]"
                          }`}
                        >
                          {item.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </section>
  );
}
