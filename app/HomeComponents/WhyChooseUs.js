"use client";
import Image from "next/image";
import Card from "./Card";
import { useTheme } from "../Contexts/ThemeContext";

// Images
import CustomerSupport from "/images/customer-support.png";
import AffordablePricing from "/images/affordable-pricing.png";
import RobustSecurity from "/images/robust-security.png";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

export default function WhyChooseUs() {
  const { theme } = useTheme();
  return (
    <div
      data-aos="fade"
      className={`${
        theme === "Light" ? "bg-white" : "bg-darkModeBg"
      } py-16 lg:pt-20  w-full  `}
    >
      <div className="w-[90%] mx-auto flex flex-col items-center">
        <div className="w-136 h-28 rounded-full flex mb-4 md:mb-8 justify-center items-center bg-gold500/10">
          <p className="text-xs font-medium text-gold500">Why</p>
        </div>
        <div className="w-full flex flex-col gap-20 items-center">
          <p
            className={`text-2xl desktop:text-4xl text-center font-medium mb-4 desktop:font-bold ${
              theme === "Light" ? "text-gray300" : "text-white"
            }`}
          >
            Why you should choose us
          </p>
          <div className="w-full flex gap-y-7 flex-col desktop:flex-row desktop:justify-between">
            <div className="desktop:w-6/12 w-full flex flex-col justify-center">
              <span
                className={`text-xl desktop:text-2xl mb-3 font-medium ${
                  theme === "Light" ? "text-gray300" : "text-white"
                }`}
              >
                24/7 Customer Support and Maintenance
              </span>
              <div className="w-full flex flex-col gap-2">
                {[
                  "Instant Issue Resolution",
                  "Proactive Maintenance",
                  "Unmatched Reliability",
                  "Personalized Guidance",
                  "Customer-Centric Approach",
                ].map((item) => (
                  <div
                    className="w-full flex items-center gap-2"
                    key={crypto.randomUUID()}
                  >
                    <FontAwesomeIcon
                      color={`${theme === "Light" ? "#393939" : "white"}`}
                      icon={faCheckCircle}
                    />
                    <p
                      className={`text-base desktop:text-lg font-medium ${
                        theme === "Light" ? "text-gray300" : "text-white"
                      }`}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="desktop:w-5/12 w-full overflow-hidden">
              <Image src={CustomerSupport} alt="Hero Image" />
            </div>
          </div>
          <div className="w-full flex gap-y-7 flex-col-reverse desktop:flex-row desktop:justify-between">
            <div className="desktop:w-5/12 w-full overflow-hidden">
              <Image src={RobustSecurity} alt="Hero Image" />
            </div>
            <div className="desktop:w-6/12 w-full flex flex-col justify-center">
              <span
                className={`text-xl desktop:text-2xl mb-3 font-medium ${
                  theme === "Light" ? "text-gray300" : "text-white"
                }`}
              >
                Robust Security for Your Website
              </span>

              <div className="w-full flex flex-col gap-2">
                {[
                  "Advanced Threat Detection",
                  "SSL Encryption for Data Protection",

                  "Firewall Protection",
                  "DDoS Mitigation",
                  "Constant Security Updates",
                ].map((item) => (
                  <div
                    className="w-full flex items-center gap-2"
                    key={crypto.randomUUID()}
                  >
                    <FontAwesomeIcon
                      color={`${theme === "Light" ? "#393939" : "white"}`}
                      icon={faCheckCircle}
                    />
                    <p
                      className={`text-base desktop:text-lg font-medium ${
                        theme === "Light" ? "text-gray300" : "text-white"
                      }`}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-7 desktop:flex-row desktop:justify-between">
            <div className="desktop:w-6/12 w-full flex flex-col justify-center">
              <span
                className={`text-xl desktop:text-2xl mb-3 font-medium ${
                  theme === "Light" ? "text-gray300" : "text-white"
                }`}
              >
                Affordable Pricing for Your Web Hosting Needs
              </span>
              <div className="w-full flex flex-col gap-2">
                {[
                  "Cost-Effective Hosting Solutions",
                  "Scalability Without Extra Costs",
                  "Flexible Billing Cycles",
                  "No Hidden Fees",
                  "Money-Back Guarantee",
                ].map((item) => (
                  <div
                    className="w-full flex items-center gap-2"
                    key={crypto.randomUUID()}
                  >
                    <FontAwesomeIcon
                      color={`${theme === "Light" ? "#393939" : "white"}`}
                      icon={faCheckCircle}
                    />
                    <p
                      className={`text-base desktop:text-lg font-medium ${
                        theme === "Light" ? "text-gray300" : "text-white"
                      }`}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="desktop:w-5/12 w-full overflow-hidden">
              <Image src={AffordablePricing} alt="Hero Image" />
            </div>
          </div>

          {/* Card */}
          <Card
            text={
              "Don't Settle for Average Hosting. Elevate Your Website and Embrace top level Security, Speed, and Support for Your Online Journey."
            }
          />
        </div>
      </div>
    </div>
  );
}
