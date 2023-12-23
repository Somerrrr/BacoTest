import React, { useEffect, useRef, useState } from "react";
import Desktop from "./HeaderDesktop";
import { useRouter } from "next/router";
import Mobile from "./HeaderMobile";

interface Props {
  urlPath: string;
}

export default function Header({ urlPath }: Props) {
  const router = useRouter();
  const goPage = (page: string) => {
    router.push(page);
  };

  return (
    <header className="z-10 h-full w-full overflow-hidden transition-all">
      <Desktop goPage={goPage} urlPath={urlPath} />
      <Mobile goPage={goPage} urlPath={urlPath} />
    </header>
  );
}
