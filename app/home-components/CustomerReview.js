"use client";
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";

//Data
import customerReviewData from "./data/customerReview";

// Splide JS
import "@splidejs/react-splide/css";
import { SplideSlide, Splide } from "@splidejs/react-splide";

export default function CustomerReview() {
  const { theme } = useTheme();

  return (
    <section
      data-aos="fade-up"
      className={`w-full flex justify-center duration-300 h-max py-16 lg:pt-20 ${
        theme === "Light" ? "bg-white" : "bg-darkModeBg"
      }`}
    >
      <div className="w-[90%] flex flex-col items-center">
        <div className="w-136 h-28 rounded-full flex mb-4 md:mb-8 justify-center items-center bg-gold500/10">
          <p className="text-xs font-medium text-gold500">Testimonials</p>
        </div>
        <h3
          className={`text-2xl desktop:text-4xl text-center font-medium md:mb-8 mb-4 desktop:font-bold ${
            theme === "Light" ? "text-gray300" : "text-white"
          }`}
        >
          What Businesses Say About Us
        </h3>
        <p
          className={`md:font-medium text-center md:leading-8 w-[870px] max-w-[90%] md:text-base text-sm font-medium mb-20 ${
            theme === "Light" ? "text-gray300" : "text-white"
          }`}
        >
          We have various customers and are happy to use our products, which
          certainly helps them.
        </p>
        <div className="w-full">
          <Splide
            aria-label="Customer Reviews"
            className="w-full"
            options={{
              perPage: 1,
            }}
          >
            {customerReviewData.map((item) => {
              return (
                <SplideSlide
                  key={crypto.randomUUID}
                  className="w-full flex justify-center pb-14"
                >
                  <div
                    className={`w-[85%] py-14 px-5 flex flex-col items-center bg-transparent border border-[#EDDDB7] rounded-[32px]`}
                  >
                    <p
                      className={`desktop:text-base max-w-[90%] w-[597px] text-center mb-10 text-sm leading-8 font-normal ${
                        theme === "Light" ? "text-black" : "text-white"
                      }`}
                    >
                      {item.message}
                    </p>
                    <div className="w-max flex gap-3 items-center">
                      <Image
                        src={item.userImage}
                        width={40}
                        height={40}
                        alt="User Image"
                      />
                      <div className="flex flex-col gap-0.5">
                        <p
                          className={`font-semibold desktop:text-base text-sm ${
                            theme === "Light" ? "text-black" : "text-white"
                          }`}
                        >
                          {item.userName}
                        </p>
                        <p
                          className={`font-medium text-[8px] ${
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
