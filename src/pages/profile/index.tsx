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
      <div className="flex w-full flex-col items-center gap-16 py-32">
        <a className="text-2xl font-bold uppercase tracking-[9.6px]">
          My profile
        </a>
        <div className="w-full max-w-xs space-y-8 lg:max-w-sm">
          <div className="flex justify-between">
            <div className="space-x-3 text-sm lg:text-base">
              <a>First name:</a>
              <a className="font-bold">{data.firstName}</a>
            </div>
            <button className="text-sm underline underline-offset-[3px] opacity-40 lg:text-base">
              change
            </button>
          </div>
          <div className="flex justify-between">
            <div className="space-x-3 text-sm lg:text-base">
              <a>Last name:</a>
              <a className="font-bold">{data.lastName}</a>
            </div>
            <button className="text-sm underline underline-offset-[3px] opacity-40 lg:text-base">
              change
            </button>
          </div>
          <div className="flex justify-between">
            <div className="space-x-3 text-sm lg:text-base">
              <a>Email:</a>
              <a className="font-bold">{data.email}</a>
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
