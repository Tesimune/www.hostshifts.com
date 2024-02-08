import Link from "next/link";
import { footerLinksData } from "./FooterLinksData";

//Contexts
import { useTheme } from "../../Contexts/ThemeContext";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const { theme, updateTheme } = useTheme();
  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  const toggleTheme = (value) => {
    updateTheme(value);
  };

  return (
    <footer className="w-full bg-darkGray200 desktop:pt-24 pt-20 flex justify-center">
      <section className="flex flex-col w-[90%]">
        <div className="w-full border-b gap-8 desktop:gap-0 pb-8 flex desktop:flex-wrap flex-col desktop:flex-row items-center desktop:items-start desktop:justify-between">
          <div className="w-max flex flex-col gap-1 items-center desktop:items-start">
            <p className="text-sm text-white pb-1.5">PRODUCTS</p>
            {footerLinksData.products.map((item) => (
              <Link
                href={item.path}
                key={crypto.randomUUID()}
                className="text-sm text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="w-max flex flex-col gap-1 items-center desktop:items-start">
            <p className="text-sm text-white pb-1.5">RESOURCES</p>
            {footerLinksData.resources.map((item) => (
              <Link
                href={item.path}
                key={crypto.randomUUID()}
                className="text-sm text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="w-max flex flex-col gap-1 items-center desktop:items-start">
            <p className="text-sm text-white pb-1.5">ABOUT</p>
            {footerLinksData.about.map((item) => (
              <Link
                href={item.path}
                key={crypto.randomUUID()}
                className="text-sm text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="w-max flex flex-col gap-1 items-center desktop:items-start">
            <p className="text-sm text-white pb-1.5">SUPPORT</p>
            {footerLinksData.support.map((item) => (
              <Link
                href={item.path}
                key={crypto.randomUUID()}
                className="text-sm text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="w-[230px] flex flex-col gap-1 items-center desktop:items-start">
            <p className="text-base text-white pb-1.5 font-semibold">
              Sign up for our newsletter
            </p>
            <form
              onSubmit={handleSubscribe}
              className="w-full flex rounded border border-white/50 p-1"
            >
              <input
                placeholder="Enter email"
                className="w-[60%] px-2.5 py-2 border-none outline-none text-sm text-white bg-transparent"
              />
              <button
                type="submit"
                className="text-sm text-black text-center w-[40%] rounded bg-darkGold"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="w-max desktop:flex hidden flex-col gap-1">
            <p className="text-sm text-white pb-1.5 font-semibold">
              Preferences
            </p>
            <div className="w-full flex justify-center gap-0.5">
              <button
                onClick={() => toggleTheme("Dark")}
                className={`w-6 h-6 duration-300 rounded-full flex justify-center items-center p-1.5 text-white ${
                  theme === "Dark" ? "bg-white/30" : "bg-transparent"
                }`}
              >
                <FontAwesomeIcon icon={faMoon} />
              </button>
              <button
                onClick={() => toggleTheme("Light")}
                className={`w-6 h-6 duration-300 rounded-full flex justify-center items-center p-1.5 text-white ${
                  theme === "Light" ? "bg-white/30" : "bg-transparent"
                }`}
              >
                <FontAwesomeIcon icon={faSun} />
              </button>
            </div>
          </div>
        </div>
        <div className="py-5 flex flex-col desktop:flex-row gap-5 desktop:gap-0 destop:justify-around items-center">
          <div className="flex gap-2.5">
            <Link href="" className="text-white">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link href="" className="text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href="" className="text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="" className="text-white">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href="" className="text-white">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
          <p className="text-sm text-gray-200">
            © 2024 Hostshifts. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
