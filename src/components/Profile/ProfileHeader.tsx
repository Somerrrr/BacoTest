import { profilePath } from "@/constants/pathList";
import { useRouter } from "next/router";
import React from "react";

export default function ProfileHeader() {
  const router = useRouter();
  const goPage = (page: any) => {
    router.push(page);
  };

  return (
    <div className="w-full flex justify-center gap-12 py-12">
      {Object.entries(profilePath).map(([path, url]) => (
        <a
          key={path}
          className={`text-base leading-[140%] cursor-pointer ${
            router.pathname === url ? "underline underline-offset-2" : ""
          } hover:underline hover:underline-offset-2`}
          onClick={() => goPage(url)}
        >
          {path}
        </a>
      ))}
    </div>
  );
}
