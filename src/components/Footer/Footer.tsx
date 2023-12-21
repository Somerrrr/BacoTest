import React, { useEffect, useRef, useState } from "react";
import Desktop from "./FooterDesktop";
import { useRouter } from "next/router";

interface Props {
  urlPath: string;
}

export default function Footer({ urlPath }: Props) {
  const router = useRouter();
  const goPage = (page: string) => {
    router.push(page);
  };

  return (
    <div
      // px={{ base: "2rem", xl: "4rem", "2xl": "8rem" }}
      className="divider h-full w-full transition-all overflow-hidden"
    >
      <Desktop goPage={goPage} urlPath={urlPath} />
      {/* <Mobile goPage={goPage} locale={locale} /> */}
    </div>
  );
}
