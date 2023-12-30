import { createContext, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

export const BacoContext = createContext<{
  goPage: (page: any) => void;
  getCookies: () => void;
  clearAllCookies: () => void;
}>({
  goPage: () => {},
  getCookies: () => {},
  clearAllCookies: () => {},
});
interface Cookies {
  [key: string]: string;
}
export const BacoProvider = ({ children }: { children: any }) => {
  const [userVid, setUserVid] = useState("");
  const router = useRouter();
  const goPage = (page: any) => {
    router.push(page);
  };
  function getCookies() {
    const cookiesString = document.cookie;
    const cookiesArray = cookiesString.split("; ");
    const cookies: Cookies = {};
    cookiesArray.forEach((cookie) => {
      const [key, value] = cookie.split("=");
      cookies[key] = value;
    });
    console.log(cookies);
    if (cookies.uvid) {
      setUserVid(cookies.uvid);
    }
  }
  function clearCookie(cookieName: string) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
  function clearAllCookies() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      const cookieName = cookie.split("=")[0];
      clearCookie(cookieName);
      setUserVid("");
    }
    if (router.pathname !== "/") router.push("/");
    else router.reload();
  }

  return (
    <BacoContext.Provider
      value={{
        goPage,
        getCookies,
        clearAllCookies,
      }}
    >
      {children}
    </BacoContext.Provider>
  );
};
