import GoodRow from "@/components/Goods/GoodRow";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function Profile() {
  const profilePath = ["Orders", "Inquires", "Profile", "Addresses", "Logout"];
  return (
    <div className="flex flex-col items-center bg-bakoW">
      <div className="w-full flex justify-center gap-12 py-12 ">
        {profilePath.map((path) => (
          <a key={path} className="text-base leading-[140%] cursor-pointer">
            {path}
          </a>
        ))}
      </div>
      <div className="w-full border-y border-bakoB/20 py-6 flex justify-center">
        <div className="w-[85%] flex justify-between items-center opacity-70">
          <div className="w-[14%]">Date</div>
          <div className="w-[42%]">Item</div>
          <div className="w-[14%]">Total</div>
          <div className="w-[14%]">Address</div>
          <div className="w-[14%] text-right">Actions</div>
        </div>
      </div>
      <div className="w-full border-b border-bakoB/20 py-6 flex justify-center">
        <div className="w-[85%] flex justify-between items-center opacity-70">
          <div className="w-[14%]">12-10-2023</div>
          <div className="w-[42%]">
            <div className="w-[152px] h-[152px] bg-[#C5C6C7]"></div>
          </div>
          <div className="w-[14%]">Pending</div>
          <div className="w-[14%]">19 W Lancaster Ave, Ardmore, PA 19003</div>
          <div className="w-[14%] text-right">Actions</div>
        </div>
      </div>
    </div>
  );
}
