import React, { useState } from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import logo from "@/assets/LOGO_B.svg";

interface Props {
  goPage: (page: string) => void;
  urlPath: string;
}

export default function Desktop({ goPage, urlPath }: Props) {
  return (
    <header className="bg-bakoW relative self-stretch h-[104px] flex w-full items-center justify-between px-14 border-bakoB/20 border-b">
      <div className="flex items-center justify-between gap-16">
        <button
          onClick={() => goPage("/about")}
          className={`text-bakoB text-sm tracking-wider ${
            urlPath === "/about" && "underline underline-offset-2"
          }`}
          aria-label="About Us"
        >
          ABOUT US
        </button>

        <button
          onClick={() => goPage("/collection")}
          className={`text-bakoB text-sm tracking-wider ${
            urlPath === "/collection" && "underline underline-offset-2"
          }`}
          aria-label="Our Collection"
        >
          OUR COLLECTION
        </button>
      </div>
      <div className="absolute flex left-1/2 -translate-x-1/2">
        <Image src={logo} alt="Bako" className="w-full" />
      </div>
      <FaUser color="black" size="24px" />
    </header>
  );
}
