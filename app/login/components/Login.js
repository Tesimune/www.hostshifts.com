"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function LoginComponent() {
  const router = useRouter();
  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordType = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  useEffect(() => {
    router.push("https://clients.hostshifts.com/login");
  }, []);

  return (
    <section className="mt-8 w-full flex justify-center">
      {/* <form
        method="post"
        action="https://clients.hostshifts.com/dologin.php"
        className={`w-469 max-w-[82%] h-max rounded-lg bg-white flex flex-col items-center md:py-[47px] md:px-[41px] py-7 px-5`}
      >
        <p className="font-semibold text-base md:text-xl text-black mb-7">
          Login to your Account
        </p>
        <div className="flex flex-col w-full mb-7">
          <p className="font-medium text-xs md:text-sm text-black mb-1">
            Email Address
          </p>
          <div className="relative w-full  h-12 border border-black rounded flex items-center gap-3">
            <div className="w-12 flex justify-center border-r text-gold500">
              <FontAwesomeIcon icon={faUserCircle} size="lg" />
            </div>
            <input
              required
              type="text"
              name="username"
              size={50}
              placeholder="Email Address"
              className="w-[calc(100%-60px)] h-full border-none outline-none text-black/90 text-sm"
            />
          </div>
        </div>
        <div className="flex flex-col w-full mb-7">
          <p className="font-medium text-xs md:text-sm text-black mb-1">
            Password
          </p>
          <div className="relative w-full h-12 border border-black rounded flex items-center gap-3">
            <div className="w-12 flex justify-center border-r text-gold500">
              <FontAwesomeIcon icon={faLock} size="lg" />
            </div>
            <input
              required
              autoComplete="off"
              name="password"
              size={20}
              type={passwordType}
              placeholder="Password"
              className="w-[calc(100%-100px)] h-full border-none outline-none text-black/90 text-sm"
            />
            <button
              onClick={togglePasswordType}
              type="button"
              className="w-[40px] flex justify-center text-gold500"
            >
              <FontAwesomeIcon
                icon={passwordType === 'password' ? faEyeSlash : faEye}
                size="sm"
              />
            </button>
          </div>
        </div>

        <input
          value="Login"
          type="submit"
          className="h-48 cursor-pointer mb-3.5  rounded-md bg-gold500 w-full text-white text-sm md:text-base font-bold"
        />

        <div className="flex items-center gap-2">
          <p className="text-center text-sm text-black font-medium">
            New to Hostshift?
          </p>
          <Link
            href="https://clients.hostshifts.com/register.php"
            className="text-center underline text-sm text-gold500"
          >
            Sign Up
          </Link>
        </div>
      </form> */}
    </section>
  );
}
