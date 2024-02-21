import Link from "next/link";

export default function Card({ text }) {
  return (
    <div
      style={{ backgroundImage: "url(/images/rectangle.png)" }}
      className="w-full rounded-[32px] bg-gold500 flex justify-center items-center mt-10 py-14"
    >
      <div className="w-[85%] md:w-[80%] desktop:w-[820px] flex flex-col items-center">
        <p
          className={`text-base md:text-2xl font-medium md:leading-9 text-center mb-10 text-white`}
        >
          {text}
        </p>
        <Link
          href={""}
          className={` w-[200px] duration-300 hover:scale-105 md:w-[298px] h-48 text-gold500 bg-white text-base font-semibold flex justify-center items-center rounded-full`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
