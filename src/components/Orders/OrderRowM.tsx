import ProfileHeader from "@/components/Profile/ProfileHeader";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface OrdersProps {
  rowData: any;
}
export default function OrderRowM({ rowData }: OrdersProps) {
  const [showDetail, setShowDetail] = useState(false);
  const format = (date: any) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formattedDate;
  };
  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 px-4 opacity-70 lg:hidden">
      <div className="flex w-full items-center">
        <div className="flex w-full gap-[10px]">
          <div className="flex h-[82px] w-[82px] bg-bakoW">
            <Image
              src={rowData.img}
              alt="pic1"
              width={1000}
              height={1000}
              className={`h-full w-full object-cover`}
            />
          </div>
          <div className="flex max-w-[75%] flex-col justify-center gap-[2px] leading-[140%]">
            <a>{rowData.product_name}</a>
            <a className="text-xs">{rowData.craftsman_name}</a>
            <a className="pt-[3px] text-xs">{format(rowData.date)}</a>
          </div>
        </div>
        <MdOutlineKeyboardArrowDown
          size="32px"
          className={`${
            showDetail ? "-rotate-180" : ""
          } cursor-pointer transition-all`}
          onClick={() => setShowDetail(!showDetail)}
        />
      </div>
      <div
        className={`${
          showDetail ? "block" : "hidden"
        } flex w-full overflow-hidden`}
      >
        <div className="flex w-full gap-[10px]">
          <div className="flex h-[82px] w-[82px] bg-transparent"></div>
          <div className="flex max-w-[75%] flex-col gap-3 text-xs leading-[140%]">
            <a>{rowData.address}</a>
            <a>$ {rowData.price}</a>
            <a className="pt-[2px] underline">{rowData.action}</a>
          </div>
        </div>
        <div className="flex h-auto w-8 bg-transparent"></div>
      </div>
    </div>
  );
}
