import React, { useContext } from "react";
import { useRouter } from "next/router";
import yt from "@/assets/ICONS/footer_yt.svg";
import x from "@/assets/ICONS/footer_x.svg";
import ig from "@/assets/ICONS/footer_ig.svg";
import Image from "next/image";
import { footerPath } from "@/constants/pathList";
import { BacoContext } from "../BacoProvider";

interface Props {
  urlPath: string;
}

export default function Footer({ urlPath }: Props) {
  const { goPage } = useContext(BacoContext);

  return (
    <footer className="flex w-full flex-col gap-16 border-t border-bakoB/20 bg-bakoW px-14 py-12 transition-all lg:py-16">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-6 text-sm">
          {footerPath.map((path) => (
            <a key={path} aria-label={path}>
              {path}
            </a>
          ))}
        </div>
        <div className="flex items-start gap-6">
          <Image src={ig} alt="Instagram" className="h-6 w-6 lg:w-full" />
          <Image src={yt} alt="Instagram" className="h-6 w-6 lg:w-full" />
          <Image src={x} alt="Instagram" className="h-6 w-6 lg:w-full" />
        </div>
      </div>
      <div className="flex text-[10px] leading-[120%] opacity-70">
        © SOOOUL 2023
      </div>
    </footer>
  );
}
