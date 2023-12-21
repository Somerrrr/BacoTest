import React, { useState } from "react";
import yt from "@/assets/ICONS/footer_yt.svg";
import x from "@/assets/ICONS/footer_x.svg";
import ig from "@/assets/ICONS/footer_ig.svg";
import Image from "next/image";

interface Props {
  goPage: (page: string) => void;
  urlPath: string;
}

export default function Desktop({ goPage, urlPath }: Props) {
  const footerPath = [
    "About Us",
    "Contact Us",
    "FAQs",
    "Privacy Policy",
    "Shipping Information",
    "Refund Policy",
    "Terms of Service",
  ];
  return (
    <footer className="bg-bakoW text-bakoB flex flex-col gap-16 w-full px-14 py-16 border-bakoB/20 border-t">
      <div className="flex justify-between">
        <div className="flex-col flex gap-6 text-sm">
          {footerPath.map((path) => (
            <a key={path} aria-label={path}>
              {path}
            </a>
          ))}
        </div>
        <div className="flex gap-6 items-start">
          <Image src={ig} alt="Instagram" className="w-full" />
          <Image src={yt} alt="Instagram" className="w-full" />
          <Image src={x} alt="Instagram" className="w-full" />
        </div>
      </div>
      <div className="flex text-[10px] leading-[120%] opacity-70">
        © SOOOUL 2023
      </div>
    </footer>
  );
}
