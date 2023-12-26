import { Good } from "@/constants/Mock";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BacoContext } from "../BacoProvider";

interface GoodsProps {
  data: Good;
}
export default function GoodRow({ data }: GoodsProps) {
  const { goPage } = useContext(BacoContext);
  return (
    <div
      className="flex flex-1 cursor-pointer flex-col gap-2 rounded-md p-1 transition-all hover:opacity-80 lg:gap-5"
      onClick={() => goPage(`/collection/${data.id}`)}
    >
      <div className="h-[174px] w-full min-w-[174px] bg-[#C5C6C7] lg:h-[320px] lg:min-w-[320px]">
        <Image
          src={data.imgs[0]}
          alt="pic"
          width={100}
          height={100}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="space-y-1">
        <div className="text-xs text-black">{data.craftsman_name}</div>
        <div className="text-base text-black">{data.product_name}</div>
      </div>
    </div>
  );
}
