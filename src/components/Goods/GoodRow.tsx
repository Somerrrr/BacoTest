import React, { useEffect, useRef, useState } from "react";

export default function GoodRow() {
  return (
    <div className="flex flex-1 flex-col gap-3 lg:gap-6">
      <div className="h-[174px] w-full min-w-[174px] bg-[#C5C6C7] lg:h-[320px] lg:min-w-[320px]"></div>
      <div className="space-y-1">
        <div className="text-xs text-black">craftsman Name</div>
        <div className="text-base text-black">Product Name</div>
      </div>
    </div>
  );
}
