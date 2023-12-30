import React, { useEffect, useRef, useState } from "react";
const COLUMN_WIDTHS = ["20%", "20%", "40%", "14%"];

interface AddressRowProps {
  rowData: any;
}
export default function AddressRow({ rowData }: AddressRowProps) {
  const formatData = rowData
    ? JSON.parse(rowData.address)
    : {
        country: "country",
        city: "city",
        street: "street",
      };
  return (
    <div className="hidden w-[80%] items-center justify-between opacity-70 lg:flex">
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
