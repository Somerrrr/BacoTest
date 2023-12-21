import GoodRow from "@/components/Goods/GoodRow";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};
export default function Collection() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-bakoW">
      <div className="w-full flex flex-col items-center gap-4 py-16 text-bakoB">
        <a className="text-2xl leading-[140%]">Behind Craft</a>
        <a className="text-base leading-[140%]">
          Handpicked craftsmanship with a story to tell.
        </a>
      </div>
      <div className="flex w-full border-y border-bakoB/20 h-16 justify-end px-14">
        <div className="flex gap-2 text-bakoB items-center border-l border-bakoB/20 pl-14">
          Sort
          <MdOutlineKeyboardArrowDown size="16px" />
        </div>
      </div>
      <div className="flex w-full px-14 py-16 text-bakoB flex-wrap gap-y-10 gap-x-4">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <GoodRow key={i} />
          ))}
      </div>
    </div>
  );
}
