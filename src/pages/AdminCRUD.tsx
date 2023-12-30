import React from "react";
import { Good, goods } from "@/constants/Mock";
import GoodRow from "@/components/Goods/GoodRow";

export default function AdminCRUD() {
  return (
    <div className="relative flex min-h-[50vh] flex-col bg-bakoW text-bakoB">
      <div className="w-full p-12 text-center text-2xl">Admin Edit</div>
      <div className="grid grid-cols-2 gap-x-[10px] gap-y-4 p-4 transition-all sm:grid-cols-3 md:grid-cols-3 lg:gap-x-4 lg:gap-y-10 lg:px-14 lg:py-16 2xl:grid-cols-4">
        {goods.map((good: Good, i) => (
          <GoodRow key={i} data={good} />
        ))}
      </div>
    </div>
  );
}
