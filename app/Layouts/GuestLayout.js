"use client";
import Footer from "../Components/LayoutComponents/Footer";
import NavBar from "../Components/LayoutComponents/Navbar";
import { useTheme } from "../Contexts/ThemeContext";

export default function GuestLayout({ children }) {
  const { theme, updateTheme } = useTheme();
  return (
    <main className="w-full">
      {/* TOP BAR */}
      <div
        className={`w-full duration-300 flex justify-center items-center ${
          theme === "Light" ? "bg-black" : "bg-darkGold"
        } h-50`}
      >
        <p
          className={`${
            theme === "Light" ? "text-white" : "text-black"
          } font-semibold lg:font-bold text-xs lg:text-sm`}
        >
          This is an announcement tagline for you to insert
        </p>
      </div>

      {/* NAVIGATION BAR */}
      <NavBar />

      {children}

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
