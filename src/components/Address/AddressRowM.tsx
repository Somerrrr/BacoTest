import ProfileHeader from "@/components/Profile/ProfileHeader";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface OrdersProps {
  rowData: any;
}
export default function AddressRowM({ rowData }: OrdersProps) {
  const formatData = rowData
    ? JSON.parse(rowData.address)
    : {
        country: "country",
        city: "city",
        street: "street",
      };
  return (
    <div className="flex w-full items-center justify-between gap-4 px-4 opacity-70 lg:hidden">
      <div className="w-[20%]">{formatData.country}</div>
      <div className="w-[20%]">{formatData.city}</div>
      <div className="w-[40%]">{formatData.street}</div>
      <div className="w-[14%] text-center">
        <button className="text-sm underline underline-offset-[3px] opacity-40 lg:text-base">
          change
        </button>
      </div>
    </div>
  );
}
