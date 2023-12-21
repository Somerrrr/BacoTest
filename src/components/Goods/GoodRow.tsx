import React, { useEffect, useRef, useState } from "react";

export default function GoodRow() {
  return (
    <div className="flex flex-col gap-6 flex-1">
      <div className="bg-[#C5C6C7] h-[320px] w-full min-w-[320px]"></div>
      <div className="space-y-1">
        <div className="text-black text-xs">craftsman Name</div>
        <div className="text-black text-base">Product Name</div>
      </div>
    </div>
  );
}
