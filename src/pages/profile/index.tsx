import ProfileHeader from "@/components/Profile/ProfileHeader";
import React from "react";

export default function Profile() {
  const data = {
    firstName: "Shine",
    lastName: "Chang",
    email: "shine@soooul.xyz",
  };
  return (
    <div className="flex flex-col items-center bg-bakoW">
      <ProfileHeader />
      <div className="w-full border-y border-bakoB/20 py-32 flex flex-col gap-16 items-center">
        <a className="uppercase font-bold text-2xl tracking-[9.6px]">
          My profile
        </a>
        <div className="space-y-8 w-full max-w-sm">
          <div className="flex justify-between">
            <div className="space-x-3">
              <a>First name:</a>
              <a className="font-bold">{data.firstName}</a>
            </div>
            <button className="underline underline-offset-[3px] opacity-40">
              change
            </button>
          </div>
          <div className="flex justify-between">
            <div className="space-x-3">
              <a>Last name:</a>
              <a className="font-bold">{data.lastName}</a>
            </div>
            <button className="underline underline-offset-[3px] opacity-40">
              change
            </button>
          </div>
          <div className="flex justify-between">
            <div className="space-x-3">
              <a>Email:</a>
              <a className="font-bold">{data.email}</a>
            </div>
            <button className="underline underline-offset-[3px] opacity-40">
              change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
