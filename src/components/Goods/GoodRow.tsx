import { Good } from "@/constants/Mock";
import Image from "next/image";
import React, { useContext } from "react";
import { BacoContext } from "../BacoProvider";

interface GoodsProps {
  data: Good;
}
export default function GoodRow({ data }: GoodsProps) {
  const { goPage } = useContext(BacoContext);
  const imgsArray = JSON.parse(data.imgs);
  const titleArray = JSON.parse(data.title);
  return (
    <div
      className="flex flex-1 cursor-pointer flex-col gap-2 rounded-md p-1 transition-all hover:opacity-80 lg:gap-5"
      onClick={() => goPage(`/collection/${data.view_id}`)}
    >
      <div className="h-[174px] w-full min-w-[174px] lg:h-[320px] lg:min-w-[320px]">
        <Image
          src={imgsArray[0]}
          alt="pic"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-1">
        <div className="text-xs text-black">{titleArray[1]}</div>
        <div className="text-base text-black">{titleArray[0]}</div>
      </div>
    </div>
  );
}
