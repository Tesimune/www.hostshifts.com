"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "@/app/Contexts/ThemeContext";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faLock, faSignature } from "@fortawesome/free-solid-svg-icons";

export default function RegisterComponent() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    router.push("https://clients.hostshifts.com/register.php");
  }, []);

  return (
    <section className="mt-8 w-full flex justify-center">
      {/* <form
        className={`w-469 max-w-[82%] h-max rounded-lg bg-white flex flex-col items-center md:py-[47px] md:px-[41px] py-7 px-5`}
      >
        <p className="font-semibold text-lg md:text-2xl text-black mb-7">
          Join Us Today
        </p>
        <div className="flex flex-col w-full mb-7">
          <p className="font-medium text-xs md:text-sm text-black mb-1">
            Full Name
          </p>
          <div className="relative w-full md:h-10 h-8 border border-black rounded flex items-center gap-3">
            <div className="w-12 flex justify-center border-r text-gold500">
              <FontAwesomeIcon icon={faSignature} size="lg" />
            </div>
            <input
              required
              type="text"
              placeholder="Full Name"
              className="w-[calc(100%-60px)] h-full border-none outline-none text-black/90 text-sm"
            />
          </div>
        </div>
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
        <div className="flex flex-col w-full mb-7">
          <p className="font-medium text-xs md:text-sm text-black mb-1">
            Confirm Password
          </p>
          <div className="relative w-full md:h-10 h-8 border border-black rounded flex items-center gap-3">
            <div className="w-12 flex justify-center border-r text-gold500">
              <FontAwesomeIcon icon={faLock} size="lg" />
            </div>
            <input
              required
              type="password"
              placeholder="Confirm Password"
              className="w-[calc(100%-60px)] h-full border-none outline-none text-black/90 text-sm"
            />
          </div>
        </div>
        <input
          value="Submit"
          type="submit"
          className="h-9 cursor-pointer mb-3.5 md:h-14 rounded-md bg-gold500 w-full text-black text-sm md:text-lg font-bold"
        />
        <Link
          href="/forgot-password"
          className="text-center mb-3.5 text-sm text-gold500"
        >
          Forgot Password?
        </Link>
        <div className="flex items-center gap-2">
          <p className="text-center text-sm text-black font-medium">
            Have an account?
          </p>
          <Link
            href="https://clients.hostshifts.com/login"
            className="text-center underline text-sm text-gold500"
          >
            Log In
          </Link>
        </div>
      </form> */}
    </section>
  );
}
