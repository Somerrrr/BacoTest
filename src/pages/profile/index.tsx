import ProfileHeader from "@/components/Profile/ProfileHeader";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import React from "react";
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
        `https://bako.soooul.xyz/api/v1/users/${cookiesData.uvid}`,
      );
      const data = res.data;
      return { props: { data } };
    } else {
      const res = await axios.get(
        `http://localhost:8098/api/v1/users/${cookiesData.uvid}`,
      );
      const data = res.data.data.data;
      return { props: { data } };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null, error: "Failed to fetch data" } };
  }
}
export default function Profile({ data }: any) {
  console.log(data);
  return (
    <div className="flex flex-col items-center bg-bakoW">
      <ProfileHeader />
      <div className="flex w-full flex-col items-center gap-16 py-32">
        <a className="text-2xl font-bold uppercase tracking-[9.6px]">
          My profile
        </a>
        <div className="w-full max-w-xs space-y-8 lg:max-w-sm">
          <div className="flex justify-between">
            <div className="space-x-3 text-sm lg:text-base">
              <a>First name:</a>
              <a className="font-bold">{data?.first_name}</a>
            </div>
            <button className="text-sm underline underline-offset-[3px] opacity-40 lg:text-base">
              change
            </button>
          </div>
          <div className="flex justify-between">
            <div className="space-x-3 text-sm lg:text-base">
              <a>Last name:</a>
              <a className="font-bold">{data?.end_name}</a>
            </div>
            <button className="text-sm underline underline-offset-[3px] opacity-40 lg:text-base">
              change
            </button>
          </div>
          <div className="flex justify-between">
            <div className="space-x-3 text-sm lg:text-base">
              <a>Email:</a>
              <a className="font-bold">{data?.email}</a>
            </div>
            <button className="text-sm underline underline-offset-[3px] opacity-40 lg:text-base">
              change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
