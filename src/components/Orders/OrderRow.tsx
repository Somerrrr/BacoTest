import React, { useEffect, useRef, useState } from "react";

interface OrdersProps {
  rowData: any;
}
export default function OrderRow({ rowData }: OrdersProps) {
  return (
    <div className="hidden w-[85%] items-center justify-between opacity-70 lg:flex">
      <div className="w-[14%]">{rowData.date}</div>
      <div className="flex w-[42%] items-center gap-6">
        <div className="h-[152px] w-[152px] bg-black/80"></div>
        <div className="flex flex-col">
          <a>{rowData.product_name}</a>
          <a className="text-xs">{rowData.craftsman_name}</a>
        </div>
      </div>
      <div className="w-[14%]">{rowData.total}</div>
      <div className="w-[14%]">{rowData.address}</div>
      <div className="w-[14%] text-right">{rowData.action}</div>
    </div>
  );
}
