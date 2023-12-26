import GoodRow from "@/components/Goods/GoodRow";
import { Good, goods } from "@/constants/Mock";
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
      <div className="flex w-full flex-col items-center gap-4 py-16">
        <a className="text-xl leading-[140%] lg:text-2xl">Behind Craft</a>
        <a className="text-sm leading-[140%] lg:text-base">
          Handpicked craftsmanship with a story to tell.
        </a>
      </div>
      <div className="flex h-16 w-full items-center justify-between border-y border-bakoB/20 px-4 opacity-70 lg:justify-end lg:px-14">
        <div className="flex text-sm lg:hidden">3 products</div>
        <div className="flex h-full items-center gap-2 border-bakoB/20 text-sm lg:border-l lg:pl-14 lg:text-base">
          Sort
          <MdOutlineKeyboardArrowDown className="h-3 w-3 lg:h-4 lg:w-4" />
        </div>
      </div>
      {/* <div className="flex w-full flex-wrap gap-x-[10px] gap-y-4 p-4 lg:gap-x-4 lg:gap-y-10 lg:px-14 lg:py-16">
        {goodsArray.map((good, i) => (
          <GoodRow key={i} data={good} />
        ))}
      </div> */}
      <div className="grid grid-cols-2 gap-x-[10px] gap-y-4 p-4 transition-all sm:grid-cols-3 md:grid-cols-3 lg:gap-x-4 lg:gap-y-10 lg:px-14 lg:py-16 2xl:grid-cols-4">
        {goods.map((good: Good, i) => (
          <GoodRow key={i} data={good} />
        ))}
      </div>
    </div>
  );
}
