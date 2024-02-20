"use client";
import Footer from "../Components/LayoutComponents/Footer";
import NavBar from "../Components/LayoutComponents/Navbar";
import { useTheme } from "../Contexts/ThemeContext";

export default function GuestLayout({ children }) {
  const { theme, updateTheme } = useTheme();
  return (
    <main className="w-full">
      {/* NAVIGATION BAR */}
      <NavBar />

      {children}

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
