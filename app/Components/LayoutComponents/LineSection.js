"use client";
import { useTheme } from "@/app/Contexts/ThemeContext";
import Image from "next/image";
import LightModeLine from "@/public/images/LightMode/Home/line.svg";
import DarkModeLine from "@/public/images/DarkMode/Home/line.svg";

export default function LineSection({ mobile }) {
  const { theme } = useTheme();
  return (
    <div className={`w-full flex justify-between absolute px-5 h-full`}>
      {mobile
        ? [1, 2, 3].map((item) => {
            return (
              <Image
                key={crypto.randomUUID}
                alt="Line"
                src={theme === "Light" ? LightModeLine : DarkModeLine}
              />
            );
          })
        : [1, 2, 3, 4, 5, 6, 7].map((item) => {
            return (
              <Image
                key={crypto.randomUUID}
                alt="Line"
                src={theme === "Light" ? LightModeLine : DarkModeLine}
              />
            );
          })}
    </div>
  );
}
