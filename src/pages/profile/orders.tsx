import ProfileHeader from "@/components/Profile/ProfileHeader";
import { profilePath } from "@/constants/pathList";
import React, { useEffect, useRef, useState } from "react";
const COLUMN_WIDTHS = ["14%", "42%", "14%", "14%", "14%"];

export default function Orders() {
  const orderRows = ["Date", "Item", "Total", "Address", "Actions"];
  const data = [
    {
      date: "2021-10-10",
      item: "Product Name",
      total: "Pending",
      address: "19 W Lancaster Ave, Ardmore, PA 19003",
      action: "123",
    },
    {
      date: "2021-10-10",
      item: "1",
      total: "100",
      address: "123",
      action: "123",
    },
    // {
    //   date: "2021-10-10",
    //   item: "1",
    //   total: "100",
    //   address: "123",
    //   action: "123",
    // },
  ];
  const renderHeader = (headers: any) => (
    <div className="w-[85%] flex justify-between items-center opacity-70">
      {headers.map((header: string, idx: number) => (
        <div
          key={idx}
          className={`w-[${COLUMN_WIDTHS[idx]}] ${
            idx === 4 ? "text-right" : ""
          }`}
        >
          {header}
        </div>
      ))}
    </div>
  );

  const renderDataRows = (rows: any) => (
    <>
      {rows.map((row: any, rowIndex: number) => (
        <div
          key={rowIndex}
          className="w-full border-b border-bakoB/20 py-6 flex justify-center text-black"
        >
          <div className="w-[85%] flex justify-between items-center opacity-70">
            {Object.values(row).map((col: any, colIndex: number) => (
              <div
                key={colIndex}
                className={`w-[${COLUMN_WIDTHS[colIndex]}] ${
                  colIndex === 4 ? "text-right" : ""
                }`}
              >
                {col}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
  return (
    <div className="flex flex-col items-center bg-bakoW">
      <ProfileHeader />

      <div className="w-full border-y border-bakoB/20 py-6 flex justify-center">
        {renderHeader(orderRows)}
      </div>
      {renderDataRows(data)}
    </div>
  );
}
