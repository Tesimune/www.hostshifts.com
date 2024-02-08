"use client";

//Context
import { useTheme } from "../Contexts/ThemeContext";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export default function ThemeSwitch() {
  const { theme, updateTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "Light") {
      updateTheme("Dark");
    } else {
      updateTheme("Light");
    }
  };

  return (
    <div
      onClick={toggleTheme}
      className={`cursor-pointer duration-300 w-58 h-33 rounded-full p-1 flex items-center shadow ${
        theme === "Light" ? "bg-white justify-end" : "justify-start bg-darkGray"
      }`}
    >
      <div className="w-6/12 h-full rounded-full bg-darkGold flex justify-center items-center p-1 text-white">
        <FontAwesomeIcon icon={theme === "Light" ? faSun : faMoon} />
      </div>
    </div>
  );
}
