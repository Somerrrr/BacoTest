import OrderRow from "@/components/Orders/OrderRow";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import React from "react";
const COLUMN_WIDTHS = ["14%", "42%", "14%", "14%", "14%"];

export default function Inquires() {
  const orderRows = ["Date", "Item", "Total", "Address", "Actions"];
  const data = [
    {
      date: "2021-10-10",
      item: "1",
      product_name: "Product Name",
      craftsman_name: "Craftsman Name",
      total: "$10,000",
      address: "19 W Lancaster Ave, Ardmore, PA 19003",
      action: "action",
    },
    {
      date: "2021-10-10",
      item: "1",
      product_name: "Product Name",
      craftsman_name: "Craftsman Name",
      total: "$10,000",
      address: "19 W Lancaster Ave, Ardmore, PA 19003",
      action: "action",
    },
  ];
  const renderHeader = (headers: any) => (
    <div className="hidden w-full justify-center border-y border-bakoB/20 py-6 lg:flex">
      <div className="flex w-[85%] items-center justify-between opacity-70">
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
    </div>
  );
  const renderDataRows = (rows: any) => (
    <>
      {rows.map((row: any, rowIndex: number) => (
        <div
          key={rowIndex}
          className="flex w-full justify-center border-b border-bakoB/20 py-4 text-black lg:py-6"
        >
          <div className="hidden w-[85%] items-center justify-between opacity-70 lg:flex">
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
          <div className="flex w-full flex-col items-center justify-between gap-4 px-4 opacity-70 lg:hidden">
            <OrderRow rowData={row} />
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="flex flex-col items-center bg-bakoW">
      <ProfileHeader />
      {renderHeader(orderRows)}
      {renderDataRows(data)}
    </div>
  );
}
