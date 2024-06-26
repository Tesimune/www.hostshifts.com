"use client";

import { useTheme } from "@/lib/contexts/theme";

//Images
import Image from "next/image";
import Hero from "@/public/images/LightMode/about/hero.png";
import HeroDark from "@/public/images/DarkMode/about/hero.png";
import QuoteLeft from "@/public/images/quote-left.png";
import QuoteRight from "@/public/images/quote-right.png";
import ComingSoon from "@/public/images/coming-soon.png";

export default function Landing() {
  const { theme } = useTheme();
  return (
    <section
      data-aos="fade-up"
      className={`w-full duration-300 h-max pt-36 ${
        theme === "Light" ? "bg-white" : "bg-darkModeBg"
      }`}
    >
      <div className="desktop:w-[85%] w-[90%] mx-auto flex flex-col items-center">
        <div className="w-136 h-28 rounded-full flex mb-4 md:mb-8 justify-center items-center bg-gold500/10">
          <p className="text-xs font-medium text-gold500">Our Mission</p>
        </div>
        <h1
          className={`text-center w-[806px] mb-5 max-w-full font-bold md:text-6xl md:leading-[72px] text-4xl leading-[48px] ${
            theme === "Light" ? "text-gray300" : "text-white"
          }`}
        >
          Crafting Tomorrow&apos;s Digital{" "}
          <span className="text-gold500">Ecosystem</span> Today
        </h1>
        <p
          className={`text-center mb-8 w-[411px] max-w-full font-medium text-[15px] leading-6 ${
            theme === "Light" ? "text-gray300" : "text-white"
          }`}
        >
          Unrivaled Hosting Solutions for Your Evolving Software for all kinds
          of programming languages.{" "}
        </p>
        <Image
          src={theme === "Light" ? Hero : HeroDark}
          alt="Hero Image"
          className="mb-20"
        />
        <p
          className={`md:text-4xl font-semibold text-xl mb-5 ${
            theme === "Light" ? "text-gray300" : "text-white"
          }`}
        >
          About Us
        </p>
        <p
          className={`text-center w-[968px] max-w-full font-medium mb-16  text-[15px] leading-9 ${
            theme === "Light" ? "text-gray300" : "text-white"
          }`}
        >
          Welcome to HostShifts, where innovation meets reliability. We pride
          ourselves on offering a versatile hosting solution for websites built
          with diverse programming languages, including PHP, Python, Ruby, and
          more. Our mission is to empower developers, businesses, and
          individuals by seamlessly integrating hosting with unique language
          requirements. With a commitment to performance, security, and
          scalability, we ensure a solid foundation for your online endeavors.
          Experience a customer-centric approach that simplifies web hosting
          complexities, supported by our expert team. Focus on building
          exceptional software while we take care of your hosting needs.
        </p>
      </div>
      <div
        style={{
          background:
            "radial-gradient(132.83% 988.97% at 50% 50%, #D3A121 0%, #FFD700 100%) ",
        }}
        className="py-6 md:py-12 w-full h-max"
      >
        <div className="w-[90%] mx-auto">
          <Image
            src={QuoteLeft}
            className="block md:hidden w-10 mb-1.5"
            alt="Quote Left"
          />
          <div className="w-full flex items-start justify-between gap-5">
            <Image
              src={QuoteLeft}
              className="md:block hidden w-14"
              alt="Quote Left"
            />
            <p className="text-black font-medium text-lg md:text-xl leading-9">
              Empowering digital dreams, we are not just hosting websites; we
              are fostering online ambitions. In the world of bits and bytes,
              our commitment is unwavering – to provide not just servers but a
              foundation for success. At the helm of this digital journey, we
              steer towards innovation, security, and the seamless fusion of
              technology and dreams.
            </p>
            <Image
              src={QuoteRight}
              className="md:block hidden w-14 self-end"
              alt="Quote Right"
            />
          </div>
          <div className="w-full md:hidden flex justify-end mb-1.5">
            <Image src={QuoteRight} className=" w-10 " alt="Quote Right" />
          </div>
          <p className="md:ml-[50px] ml-0 mt-8 font-semibold md:text-lg text-base">
            Malaka Kenneth
          </p>
          <p className="md:ml-[50px] ml-0 font-medium md:text-base text-sm">
            Chief Executive Director (CEO)
          </p>
        </div>
      </div>
      {/* <div className="py-12 w-full h-max bg-black">
        <div className="desktop:w-[85%] w-[90%] mx-auto flex flex-col items-center">
          <p className={`md:text-4xl font-semibold text-xl mb-5 text-white`}>
            Join us behind the scene
          </p>
          <p
            className={`text-center w-[968px] max-w-full font-medium mb-10  text-[15px] leading-7 text-white`}
          >
            Embark on a fulfilling career journey with us, where innovation,
            collaboration, and personal growth converge. At Hostshifts, we
            believe in cultivating a workplace where every team member's unique
            talents contribute to our collective success. As you join our
            dynamic team. Your role here isn't just a job; it's an opportunity
            to be part of something transformative
          </p>
          <Image src={ComingSoon} alt="Coming Soon" />
        </div>
      </div> */}
    </section>
  );
}
