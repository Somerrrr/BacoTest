import React from "react";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import OrderRowM from "@/components/Orders/OrderRowM";
import OrderRow from "@/components/Orders/OrderRow";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import useOrders from "@/hooks/useOrders";
import { Order } from "@/constants/Mock";
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
      );
      const orders = res.data.data.data as Order[];
      if (orders.length !== 0) {
        const apiRequests = orders.map(async (item) => {
          const productApi = axios.get(
            `https://bako.soooul.xyz/api/v1/products/${item.product_vid}`,
          );
          const addressApi = axios.get(
            `https://bako.soooul.xyz/api/v1/address/${item.address_vid}`,
          );
          const [productResponse, addressResponse] = await Promise.all([
            productApi,
            addressApi,
          ]);
          const productData = productResponse.data.data.data;
          const imgsArray = JSON.parse(productData?.imgs);
          const detail = productData?.detail;
          const price = productData?.price;
          const titleArray = JSON.parse(productData?.title);
          const addressData = addressResponse.data.data.data;
          const address = JSON.parse(addressData?.address);
          const combineData = `${address.country}, ${address.city}, ${address.street}`;

          return {
            productData: productResponse.data.data.data,
            addressData: addressResponse.data.data.data,
            date: item.update_time,
            img: imgsArray[0],
            product_name: titleArray[0],
            craftsman_name: titleArray[1],
            detail: detail,
            price: price,
            address: combineData,
          };
        });
        // 使用 Promise.all 等待所有請求完成
        const apiResponses = await Promise.all(apiRequests);

        return { props: { data: apiResponses } };
      } else {
        return { props: { data: null } };
      }
    } else {
      const res = await axios.get(
        `http://localhost:8098/api/v1/orders/by_user/${cookiesData.uvid}`,
      );
      const orders = res.data.data.data as Order[];
      if (orders.length !== 0) {
        const apiRequests = orders.map(async (item) => {
          const productApi = axios.get(
            `http://localhost:8098/api/v1/products/${item.product_vid}`,
          );
          const addressApi = axios.get(
            `http://localhost:8098/api/v1/address/${item.address_vid}`,
          );
          const [productResponse, addressResponse] = await Promise.all([
            productApi,
            addressApi,
          ]);
          const productData = productResponse.data.data.data;
          const imgsArray = JSON.parse(productData?.imgs);
          const detail = productData?.detail;
          const price = productData?.price;
          const titleArray = JSON.parse(productData?.title);
          const addressData = addressResponse.data.data.data;
          const address = JSON.parse(addressData?.address);
          const combineData = `${address.country}, ${address.city}, ${address.street}`;

          return {
            productData: productResponse.data.data.data,
            addressData: addressResponse.data.data.data,
            date: item.update_time,
            img: imgsArray[0],
            product_name: titleArray[0],
            craftsman_name: titleArray[1],
            detail: detail,
            price: price,
            address: combineData,
          };
        });
        // 使用 Promise.all 等待所有請求完成
        const apiResponses = await Promise.all(apiRequests);

        return { props: { data: apiResponses } };
      } else {
        return { props: { data: null } };
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null, error: "Failed to fetch data" } };
  }
}
interface Props {
  data: Order[];
}

export default function Orders({ data }: Props) {
  const orderRows = ["Date", "Item", "Total", "Address", "Actions"];
  const mock = [
    {
      date: "2021-10-10", //data.update_time
      item: "1", //data.imgs
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
      <div className="flex w-[85%] items-center justify-between gap-5 opacity-70">
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
          className={`flex w-full justify-center  ${
            rowIndex === rows.length - 1 ? "" : "border-b border-bakoB/20"
          } py-4 text-black lg:py-6`}
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
