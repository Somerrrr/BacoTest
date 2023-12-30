import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface OrdersProps {
  rowData: any;
}
export default function OrderRow({ rowData }: OrdersProps) {
  const format = (date: any) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formattedDate;
  };
  return (
    <div className="hidden w-[85%] items-center justify-between gap-5 opacity-70 lg:flex">
      <div className="w-[14%]">{format(rowData.date)}</div>
      <div className="flex w-[42%] items-center justify-start gap-6">
        <div className="bg-bako h-[152px] w-[152px]">
          <Image
            src={rowData.img}
            alt="pic1"
            width={1000}
            height={1000}
            className={`h-full w-full object-cover`}
          />
        </div>
        <div className="flex flex-col">
          <a>{rowData.product_name}</a>
          <a className="text-xs">{rowData.craftsman_name}</a>
        </div>
      </div>
      <div className="w-[14%]">$ {rowData.price}</div>
      <div className="w-[14%]">{rowData.address}</div>
      <div className="w-[14%] text-right">{rowData.action}</div>
    </div>
  );
}
