"use client";

import { useTheme } from "@/app/Contexts/ThemeContext";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { theme } = useTheme();
  return (
    <section
      className={`w-full duration-300 h-max py-16 ${
        theme === "Light" ? "bg-white" : "bg-darkModeBg"
      }`}
    >
      <div className="w-[90%] mx-auto flex flex-col items-center">
        <h3
          className={`md:font-bold text-center w-full md:w-[519px] md:text-4xl text-xl font-semibold mb-4 md:mb-7 ${
            theme === "Light" ? "text-gray300" : "text-white"
          }`}
        >
          How can we assist you?
        </h3>
        <p
          className={`md:font-medium text-center w-full md:w-[80%] md:text-base text-sm font-normal mb-7 ${
            theme === "Light" ? "text-gray300" : "text-white"
          }`}
        >
          We are here for you 24/7. Our Customer Support Team is called that way
          for a reason shoot us a mail, let’s see how we can be of assistance
          today.
        </p>
        <form className="w-full flex flex-wrap gap-x-5 gap-y-6">
          <div className="w-full desktop:w-[calc(50%-10px)] flex flex-col gap-y-2">
            <p
              className={`${
                theme === "Light" ? "text-gray300" : "text-white"
              } md:text-xl text-base font-semibold`}
            >
              Name
            </p>
            <input
              type="text"
              className={`w-full px-3 bg-transparent md:h-61 outline-none text-sm md:text-base font-medium h-50 border ${
                theme === "Light"
                  ? "border-gold500 text-gray300"
                  : "border-white text-white"
              }`}
            />
          </div>
          <div className="w-full desktop:w-[calc(50%-10px)] flex flex-col gap-y-2">
            <p
              className={`${
                theme === "Light" ? "text-gray300" : "text-white"
              } md:text-xl text-base font-semibold`}
            >
              Email
            </p>
            <input
              type="email"
              className={`w-full px-3 bg-transparent md:h-61 outline-none text-sm md:text-base font-medium h-50 border ${
                theme === "Light"
                  ? "border-gold500 text-gray300"
                  : "border-white text-white"
              }`}
            />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <p
              className={`${
                theme === "Light" ? "text-gray300" : "text-white"
              } md:text-xl text-base font-semibold`}
            >
              Message
            </p>
            <textarea
              rows={30}
              cols={30}
              type="email"
              className={`w-full px-3 bg-transparent outline-none text-sm md:text-base font-medium h-108 border ${
                theme === "Light"
                  ? "border-gold500 text-gray300"
                  : "border-white text-white"
              }`}
            ></textarea>
          </div>
          <input
            type="submit"
            value="Submit"
            className="h-41 cursor-pointer w-84 flex justify-center bg-gold500 items-center text-white border-none rounded-md  text-sm font-medium"
          />
        </form>
      </div>
    </section>
  );
}
