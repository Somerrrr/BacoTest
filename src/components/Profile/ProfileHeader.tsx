import { profilePath, profilePathMobile } from "@/constants/pathList";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { BacoContext } from "../BacoProvider";

export default function ProfileHeader() {
  const { clearAllCookies } = useContext(BacoContext);
  const router = useRouter();
  const goPage = (page: any) => {
    router.push(page);
  };
  const [page, setPage] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const checkPage = () => {
    switch (router.pathname) {
      case profilePathMobile.Profile:
        setPage("Profile");
        break;
      case profilePathMobile.Orders:
        setPage("Orders");
        break;
      case profilePathMobile.Inquires:
        setPage("Inquires");
        break;
      case profilePathMobile.Addresses:
        setPage("Addresses");
        break;
      default:
        setPage("Profile");
        break;
    }
  };
  useEffect(() => {
    checkPage();
  }, [router.pathname]);

  return (
    <>
      {/* Desktop */}
      <div className="hidden w-full justify-center gap-12 border-b border-bakoB/20 py-12 lg:flex">
        {Object.entries(profilePath).map(([path, url]) => (
          <a
            key={path}
            className={`cursor-pointer text-base leading-[140%] ${
              router.pathname === url ? "underline underline-offset-2" : ""
            } hover:underline hover:underline-offset-2`}
            onClick={
              url === "/"
                ? () => {
                    clearAllCookies();
                    goPage(url);
                  }
                : () => goPage(url)
            }
          >
            {path}
          </a>
        ))}
      </div>
      {/* Mobile */}
      <div
        className="flex w-full items-center justify-center gap-2 border-b border-bakoB/20 py-6 lg:hidden"
        onClick={() => setShowMenu(true)}
      >
        <a className="cursor-pointer text-sm leading-[140%]">{page}</a>
        <MdOutlineKeyboardArrowDown size="16px" />
      </div>
      {/* Menu */}
      <div className="menu">
        <div
          className={`${
            showMenu ? "z-10" : "-z-20 opacity-0"
          } fixed left-0 top-0 h-screen w-screen cursor-pointer bg-bakoB/80 transition-all`}
          onClick={() => setShowMenu(false)}
        />
        <div
          className={`fixed bottom-0 left-0 z-50 h-[420px] w-full rounded-t-[32px] bg-bakoW p-4 pb-16 text-bakoB transition-all duration-300 ease-linear ${
            showMenu ? "" : "translate-y-full"
          }`}
        >
          <div onClick={() => setShowMenu(false)}>
            <RxCross2 size="24px" />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-8 pt-6">
            {Object.entries(profilePathMobile).map(([path, url]) => (
              <a
                key={path}
                className={`cursor-pointer text-base leading-[140%] ${
                  router.pathname === url ? "underline underline-offset-2" : ""
                } hover:underline hover:underline-offset-2`}
                onClick={() => goPage(url)}
              >
                {path}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
