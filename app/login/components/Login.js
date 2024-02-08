"use client";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/app/Contexts/ThemeContext";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useTheme;
  return (
    <section className="mt-8 w-full flex justify-center">
      <form
        className={`w-469 max-w-[82%] h-max rounded-lg bg-white flex flex-col items-center md:py-[47px] md:px-[41px] py-7 px-5`}
      >
        <p className="font-semibold text-lg md:text-2xl text-black mb-7">
          Log in to your account
        </p>
        <div className="flex flex-col w-full mb-7">
          <p className="font-medium text-xs md:text-sm text-black mb-1">
            Email Address
          </p>
          <div className="relative w-full md:h-10 h-8 border border-black rounded flex items-center gap-3">
            <div className="w-12 flex justify-center border-r text-gold500">
              <FontAwesomeIcon icon={faUserCircle} size="lg" />
            </div>
            <input
              required
              type="email"
              placeholder="Email Address"
              className="w-[calc(100%-60px)] h-full border-none outline-none text-black/90 text-sm"
            />
          </div>
        </div>
        <div className="flex flex-col w-full mb-7">
          <p className="font-medium text-xs md:text-sm text-black mb-1">
            Password
          </p>
          <div className="relative w-full md:h-10 h-8 border border-black rounded flex items-center gap-3">
            <div className="w-12 flex justify-center border-r text-gold500">
              <FontAwesomeIcon icon={faLock} size="lg" />
            </div>
            <input
              required
              type="password"
              placeholder="Password"
              className="w-[calc(100%-60px)] h-full border-none outline-none text-black/90 text-sm"
            />
          </div>
        </div>

        <input
          value="Log In"
          type="submit"
          className="h-9 cursor-pointer mb-3.5 md:h-14 rounded-md bg-gold500 w-full text-black text-sm md:text-lg font-bold"
        />

        <div className="flex items-center gap-2">
          <p className="text-center text-sm text-black font-medium">
            New to Hostshift?
          </p>
          <Link
            href="/register"
            className="text-center underline text-sm text-gold500"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </section>
  );
}
