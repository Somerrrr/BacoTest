import React from "react";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import OrderRowM from "@/components/Orders/OrderRowM";
import OrderRow from "@/components/Orders/OrderRow";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import useOrders from "@/hooks/useOrders";
const COLUMN_WIDTHS = ["14%", "42%", "14%", "14%", "14%"];
interface Cookies {
  [key: string]: string;
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const cookies = context.req.headers.cookie;
    if (!cookies) return { props: { data: null } };
    const cookiesArray = cookies.split("; ");
    const cookiesData: Cookies = {};
    cookiesArray.forEach((cookie) => {
      const [key, value] = cookie.split("=");
      cookiesData[key] = value;
    });
    if (!cookiesData.uvid) return { props: { data: null } };
    if (process.env.NODE_ENV === "production") {
      const res = await axios.get(
        `https://bako.soooul.xyz/api/v1/orders/by_user/${cookiesData.uvid}`,
        {
          params: {
            status: 11,
          },
        },
      );
      const data = res.data.data.data;
      return { props: { data } };
    } else {
      const res = await axios.get(
        `http://localhost:8098/api/v1/orders/by_user/${cookiesData.uvid}`,
      );
      const data = res.data.data.data;
      return { props: { data } };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null, error: "Failed to fetch data" } };
  }
}

export default function Inquires({ data }: any) {
  const { getUserOrders } = useOrders();
  const orderRows = ["Date", "Item", "Total", "Address", "Actions"];
  // const data = [
  //   {
  //     date: "2021-10-10",
  //     item: "1",
  //     product_name: "Product Name",
  //     craftsman_name: "Craftsman Name",
  //     total: "$10,000",
  //     address: "19 W Lancaster Ave, Ardmore, PA 19003",
  //     action: "action",
  //   },
  //   {
  //     date: "2021-10-10",
  //     item: "1",
  //     product_name: "Product Name",
  //     craftsman_name: "Craftsman Name",
  //     total: "$10,000",
  //     address: "19 W Lancaster Ave, Ardmore, PA 19003",
  //     action: "action",
  //   },
  // ];
  // const renderHeader = (headers: any) => (
  //   <div className="hidden w-full justify-center border-b border-bakoB/20 py-6 lg:flex">
  //     <div className="flex w-[85%] items-center justify-between opacity-70">
  //       {headers.map((header: string, idx: number) => (
  //         <div
  //           key={idx}
  //           className={`w-[${COLUMN_WIDTHS[idx]}] ${
  //             idx === 4 ? "text-right" : ""
  //           }`}
  //         >
  //           {header}
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
  // const renderDataRows = (rows: any) => (
  //   <>
  //     {rows.map((row: any, rowIndex: number) => (
  //       <div
  //         key={rowIndex}
  //         className="flex w-full justify-center border-b border-bakoB/20 py-4 text-black lg:py-6"
  //       >
  //         <OrderRow rowData={row} />
  //         <OrderRowM rowData={row} />
  //       </div>
  //     ))}
  //   </>
  // );

  return (
    <div className="flex flex-col items-center bg-bakoW">
      <ProfileHeader />
      <div
        className="text-2xl"
        onClick={() => getUserOrders("170383680441659741", 11)}
      >
        sss1
      </div>
      {/* {renderHeader(orderRows)}
      {renderDataRows(data)} */}
    </div>
  );
}
