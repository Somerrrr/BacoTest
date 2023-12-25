import React, { useContext, useEffect, useRef, useState } from "react";
import { BacoContext } from "../BacoProvider";

interface GoodsProps {
  data: any;
}
export default function GoodRow({ data }: GoodsProps) {
  const { goPage } = useContext(BacoContext);
  return (
    <div
      className="flex flex-1 cursor-pointer flex-col gap-2 rounded-md p-1 transition-all hover:opacity-80 lg:gap-5"
      onClick={() => goPage(`/collection/${data.id}`)}
    >
      <div className="h-[174px] w-full min-w-[174px] bg-[#C5C6C7] lg:h-[320px] lg:min-w-[320px]" />
      <div className="space-y-1">
        <div className="text-xs text-black">{data.craftsman}</div>
        <div className="text-base text-black">{data.name}</div>
      </div>
    </div>
  );
}
