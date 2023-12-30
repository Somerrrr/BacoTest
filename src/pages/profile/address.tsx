import AddressRow from "@/components/Address/AddressRow";
import AddressRowM from "@/components/Address/AddressRowM";
import InputBlack from "@/components/Input/InputBlack";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import useAddress from "@/hooks/useAddress";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import React, { useEffect, useRef, useState } from "react";
const COLUMN_WIDTHS = ["20%", "20%", "40%"];
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
        `https://bako.soooul.xyz/api/v1/address/by_user/${cookiesData.uvid}`,
      );
      const data = res.data.data.data;
      return { props: { data } };
    } else {
      //TODO: change to 正式
      // const res = await axios.get(
      //   `http://localhost:8098/api/v1/address/by_user/${cookiesData.uvid}`,
      // );
      const res = await axios.get(`http://localhost:8098/api/v1/address`);
      const data = res.data.data.data;
      return { props: { data } };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null, error: "Failed to fetch data" } };
  }
}
interface Props {
  data: any;
}

export default function Address({ data }: Props) {
  //"170396853870112498"
  const [create, setCreate] = useState(false);
  const { createAddress, loading } = useAddress();
  const [addressData, setAddressData] = useState({
    country: "",
    city: "",
    street: "",
  });
  const orderRows = ["Country", "City", "Street"];
  const renderHeader = (headers: any) => (
    <div className="hidden w-full justify-center border-b border-bakoB/20 py-4 lg:flex">
      <div className="flex w-[80%] items-center justify-between opacity-70">
        {headers.map((header: string, idx: number) => (
          <div
            key={idx}
            className={`w-[${COLUMN_WIDTHS[idx]}] ${
              idx === 3 ? "text-right" : ""
            }`}
          >
            {header}
          </div>
        ))}
        <div className="w-[14%] text-right">
          <button
            className={`h-full w-full items-center rounded-full bg-bakoB px-4 py-2 text-base font-semibold uppercase leading-normal tracking-widest text-bakoW`}
            onClick={() => setCreate(!create)}
          >
            {create ? "back" : "Create"}
          </button>
        </div>
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
          <AddressRow rowData={row} />
          <AddressRowM rowData={row} />
        </div>
      ))}
    </>
  );
  return (
    <div className="flex flex-col items-center bg-bakoW">
      <ProfileHeader />
      {renderHeader(orderRows)}
      {create ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 py-6">
          <InputBlack
            placeholder="Country"
            value={addressData.country}
            onChange={(e: any) => {
              setAddressData({ ...addressData, country: e.target.value });
            }}
            // error={}
          />
          <InputBlack
            placeholder="City"
            value={addressData.city}
            onChange={(e: any) => {
              setAddressData({ ...addressData, city: e.target.value });
            }}
            // error={}
          />
          <InputBlack
            placeholder="Street"
            value={addressData.street}
            onChange={(e: any) => {
              setAddressData({ ...addressData, street: e.target.value });
            }}
            // error={}
          />
          <button
            className="mt-6 h-[60px] w-full max-w-[320px] rounded-full bg-bakoB font-bold uppercase leading-[140%] tracking-[6.4px] text-bakoW"
            onClick={() => createAddress(JSON.stringify(addressData))}
          >
            {loading ? <span className="loaderW" /> : "Create"}
          </button>
        </div>
      ) : (
        <>{renderDataRows(data)}</>
      )}
    </div>
  );
}
