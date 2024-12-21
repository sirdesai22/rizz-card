"use client";
import React, { useState } from "react";
import { Star } from "lucide-react";
import { Colors, Liquid } from "./ui/liquid-gradient";

type ColorKey =
  | "color1"
  | "color2"
  | "color3"
  | "color4"
  | "color5"
  | "color6"
  | "color7"
  | "color8"
  | "color9"
  | "color10"
  | "color11"
  | "color12"
  | "color13"
  | "color14"
  | "color15"
  | "color16"
  | "color17";

//Blues
const COLORS: Colors = {
  color1: "#FFFFFF",
  color2: "#1E10C5",
  color3: "#9089E2",
  color4: "#FCFCFE",
  color5: "#F9F9FD",
  color6: "#B2B8E7",
  color7: "#0E2DCB",
  color8: "#0017E9",
  color9: "#4743EF",
  color10: "#7D7BF4",
  color11: "#0B06FC",
  color12: "#C5C1EA",
  color13: "#1403DE",
  color14: "#B6BAF6",
  color15: "#C1BEEB",
  color16: "#290ECB",
  color17: "#3F4CC0",
};

//Greens
// const COLORS: Colors = {
//   color1: "#FFFFFF", // White remains the same
//   color2: "#1EB54A", // A deep green
//   color3: "#90E289", // A soft light green
//   color4: "#FCFEFC", // Off-white with a greenish hue
//   color5: "#F9FDF9", // Very pale green
//   color6: "#B2E7C0", // Muted pastel green
//   color7: "#0ECB5A", // A vibrant emerald green
//   color8: "#00E978", // Bright neon green
//   color9: "#47EF72", // Lush leaf green
//   color10: "#7DF47D", // Soft lime green
//   color11: "#0BFC41", // Bright electric green
//   color12: "#C5EAD2", // Pale mint green
//   color13: "#14DE3A", // Forest green
//   color14: "#B6F6CF", // Light aqua green
//   color15: "#C1EBC9", // Soft pastel green
//   color16: "#29CB54", // Rich grass green
//   color17: "#3FC06D", // Medium emerald green
// };

const LiquidButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center w-full">
      <a
        href="#"
        className="relative inline-block  sm:w-36 w-full h-[2.7em] mx-auto group dark:bg-black bg-white dark:border-white border-black border-2 rounded-lg"
      >
        <div className="absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70">
          <span className="absolute inset-0 rounded-lg bg-[#d9d9d9] filter blur-[6.5px]"></span>
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <Liquid isHovered={isHovered} colors={COLORS} />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92.23%] h-[112.85%] rounded-lg bg-[#010128] filter blur-[7.3px]"></div>
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <span className="absolute inset-0 rounded-lg bg-[#d9d9d9]"></span>
          <span className="absolute inset-0 rounded-lg bg-black"></span>
          <Liquid isHovered={isHovered} colors={COLORS} />
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`absolute inset-0 rounded-lg border-solid border-[3px] border-gradient-to-b from-transparent to-white mix-blend-overlay filter ${
                i <= 2 ? "blur-[3px]" : i === 3 ? "blur-[5px]" : "blur-[4px]"
              }`}
            ></span>
          ))}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[70.8%] h-[42.85%] rounded-lg filter blur-[15px] bg-[#006]"></span>
        </div>
        <button
          className="absolute inset-0 rounded-lg bg-transparent cursor-pointer"
          aria-label="Get Started"
          type="button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className=" flex items-center justify-center px-4 gap-2 rounded-lg group-hover:text-yellow-400 text-white text-xl font-semibold tracking-wide whitespace-nowrap">
            {/* <Star className="group-hover:fill-yellow-400 fill-white w-6 h-6 flex-shrink-0 sm:inline-block" /> */}
            <span className="sm:inline-block">Generate Card</span>
          </span>
        </button>
      </a>
    </div>
  );
};

export default LiquidButton;
