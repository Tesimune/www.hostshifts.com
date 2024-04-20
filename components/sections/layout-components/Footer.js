import Link from "next/link";
import { storeSubMenuLinks } from "../NavlinksData";

//Contexts
import { useTheme } from "@/app/contexts/ThemeContext";

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
    <footer className="w-full bg-[#0B0801] desktop:pt-24 pt-20 flex justify-center">
      <section className="flex flex-col w-[90%]">
        <div className="w-full border-b border-[#3D3D3D] gap-8 desktop:gap-0 pb-14 flex desktop:flex-wrap flex-col desktop:flex-row items-center desktop:items-start desktop:justify-between">
          <div className="w-max flex flex-col gap-1 items-center desktop:items-start">
            {/* <p className="text-lg font-medium text-white pb-2">Products</p> */}
            {storeSubMenuLinks.slice(0, 5).map((item) => (
              <Link
                href={item.path}
                key={crypto.randomUUID()}
                className="text-sm font-normal text-[#9E9E9E] pb-1"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="w-max flex flex-col gap-1 items-center desktop:items-start">
            {/* <p className="text-lg font-medium text-white pb-2">Resources</p> */}
            {storeSubMenuLinks.slice(5, 10).map((item) => (
              <Link
                href={item.path}
                key={crypto.randomUUID()}
                className="text-sm font-normal text-[#9E9E9E] pb-1"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="w-max flex flex-col gap-1 items-center desktop:items-start">
            {/* <p className="text-lg font-medium text-white pb-2">About</p> */}
            {storeSubMenuLinks.slice(10, 15).map((item) => (
              <Link
                href={item.path}
                key={crypto.randomUUID()}
                className="text-sm font-normal text-[#9E9E9E] pb-1"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="w-max flex flex-col gap-1 items-center desktop:items-start">
            {/* <p className="text-lg font-medium text-white pb-2">Support</p> */}

            <Link
              href="https://clients.hostshifts.com/index.php?rp=/announcements"
              className="text-sm font-normal text-[#9E9E9E] pb-1"
            >
              Announcements
            </Link>
            <Link
              href="https://clients.hostshifts.com/index.php?rp=/knowledgebase"
              className="text-sm font-normal text-[#9E9E9E] pb-1"
            >
              Knowledgebase
            </Link>
            <Link
              href="https://clients.hostshifts.com/contact.php"
              className="text-sm font-normal text-[#9E9E9E] pb-1"
            >
              Contact Us
            </Link>
          </div>
          <div className="w-298 flex flex-col gap-1 items-center desktop:items-start">
            <p className="text-lg font-medium text-white pb-2">
              Sign up for our newsletter
            </p>
            <form
              onSubmit={handleSubscribe}
              className="w-full flex h-48 rounded-full border border-r-none border-[#696969] mb-5"
            >
              <input
                placeholder="Enter email"
                className="w-[55%] px-5 h-full border-none outline-none text-sm text-[#393939] bg-transparent "
              />
              <button
                type="submit"
                className="text-xs text-gold500 rounded-full text-center w-[45%] bg-white"
              >
                Subscribe
              </button>
            </form>

            <div className="w-max desktop:flex hidden flex-col gap-1 mb-5">
              <p className="text-lg text-white pb-2 font-semibold">
                Change Mode
              </p>
              <div className="w-full flex gap-0.5">
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
            <div className="w-max flex flex-col gap-1">
              <p className="text-lg text-white pb-2 font-semibold">Follow Us</p>
              <div className="flex gap-2.5">
                <Link
                  href="https://www.linkedin.com/company/hostshifts/"
                  className="text-white"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link
                  href="https://x.com/hostshifts1?s=21"
                  className="text-white"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link
                  href="https://www.instagram.com/hostshifts?igsh=cG14cGs3ZWJoajdi"
                  className="text-white"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                {/* <Link href="" className="text-white">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link href="" className="text-white">
                  <FontAwesomeIcon icon={faYoutube} />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 flex desktop:flex-row desktop:gap-0 justify-center">
          <p className="text-sm text-[#9E9E9E]">
            © 2024 Hostshifts. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
