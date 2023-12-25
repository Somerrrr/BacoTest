import React, { useContext, useEffect, useRef, useState } from "react";
import Desktop from "./HeaderDesktop";
import { useRouter } from "next/router";
import Mobile from "./HeaderMobile";
import { BacoContext } from "../BacoProvider";

interface Props {
  urlPath: string;
}

export default function Header({ urlPath }: Props) {
  const { goPage } = useContext(BacoContext);

  return (
    <header className="z-10 h-full w-full overflow-hidden transition-all">
      <Desktop goPage={goPage} urlPath={urlPath} />
      <Mobile goPage={goPage} urlPath={urlPath} />
    </header>
  );
}
