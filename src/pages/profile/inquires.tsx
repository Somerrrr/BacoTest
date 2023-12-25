import React from "react";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import OrderRowM from "@/components/Orders/OrderRowM";
import OrderRow from "@/components/Orders/OrderRow";
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
    <div className="hidden w-full justify-center border-b border-bakoB/20 py-6 lg:flex">
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
          <OrderRow rowData={row} />
          <OrderRowM rowData={row} />
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
