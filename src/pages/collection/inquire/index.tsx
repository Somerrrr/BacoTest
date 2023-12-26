import GoodRow from "@/components/Goods/GoodRow";
import InputBase from "@/components/Input/InputBase";
import InputBlack from "@/components/Input/InputBlack";
import { goods } from "@/constants/Mock";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};
export default function Inquire() {
  const router = useRouter();
  //   const navigateToPurchase = () => {
  //     const encodedData = encodeURIComponent(JSON.stringify(orderInput));
  //     router.push({
  //       pathname: "/purchase",
  //       query: { data: encodedData }, // 使用 encodeURIComponent 进行编码
  //     });
  //   };
  const [data, setData] = useState({
    country: "",
    city: "",
    street: "",
  });

  return (
    <div className="flex h-full w-full flex-col items-center bg-bakoW p-32 leading-[140%]">
      <div className="flex w-[37.5%] flex-col items-center gap-16">
        <div className="flex flex-col gap-4 text-center">
          <a className="text-2xl">Thank you for your interest</a>
          <a className="text-base">
            Please fill in your details to get a quote.
          </a>
        </div>
        <div className="w-full space-y-4">
          <InputBlack
            placeholder="Country"
            value={data.country}
            onChange={(e: any) => {
              setData({ ...data, country: e.target.value });
            }}
            // error={}
          />
          <InputBlack
            placeholder="City"
            value={data.city}
            onChange={(e: any) => {
              setData({ ...data, city: e.target.value });
            }}
            // error={}
          />
          <InputBlack
            placeholder="Street"
            value={data.street}
            onChange={(e: any) => {
              setData({ ...data, street: e.target.value });
            }}
            // error={}
          />
        </div>
        <button
          className="h-[60px] w-full rounded-full bg-bakoB font-bold uppercase leading-[140%] tracking-[6.4px] text-bakoW"
          //   onClick={() => goPage("/collection/inquire")}
        >
          get a quote
        </button>
      </div>
    </div>
  );
}
