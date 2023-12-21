import React, { useState } from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";

interface Props {
  goPage: (page: string) => void;
  urlPath: string;
}

export default function Desktop({ goPage, urlPath }: Props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <header className="bg-zinc-100 relative self-stretch h-[104px] flex w-full items-center justify-between px-14 border-b-stone-950 border-b-opacity-20 border-b border-solid">
      <div className="flex items-center justify-between gap-16">
        <button
          onClick={handleClick}
          className={`text-bakoB text-sm tracking-wider ${
            urlPath === "/about" && "underline underline-offset-2"
          }`}
          aria-label="About Us"
        >
          ABOUT US
        </button>

        <button
          onClick={handleClick}
          className={`text-bakoB text-sm tracking-wider ${
            urlPath === "/collection" && "underline underline-offset-2"
          }`}
          aria-label="Our Collection"
        >
          OUR COLLECTION
        </button>
      </div>
      <div className="absolute flex left-1/2 -translate-x-1/2">
        <div className="text-bakoB text-4xl font-bold tracking-[12px] text-center">
          BAKO
        </div>
      </div>
      <FaUser color="black" size="24px" />
    </header>
  );
}
