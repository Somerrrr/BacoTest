import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "../Header/Header";
// import LoadingPage from "../LoadingPage/LoadingPage";
//   import Loading from "../../pages/Loading";
import bg from "@/assets/login/background.png";
import Footer from "../Footer/Footer";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isMobile = useBreakpointValue({ base: true, lg: false });
  const urlPath = useRouter().pathname;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1500);
  //   const handleStart = (url: string) =>
  //     url !== router.asPath && setIsLoading(true);
  //   const handleComplete = (url: string) =>
  //     url === router.asPath && setIsLoading(false);

  //   router.events.on("beforeHistoryChange", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);

  //   return () => {
  //     router.events.off("beforeHistoryChange", handleStart);
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleComplete);
  //     router.events.off("routeChangeError", handleComplete);
  //   };
  // });

  return (
    <>
      {/* {isLoading && <LoadingPage />} */}
      {urlPath !== "/" && <Header urlPath={urlPath} />}
      <main className="max-w-[100vw] min-h-[100vh]">{children}</main>
      {urlPath !== "/" && <Footer urlPath={urlPath} />}
    </>
  );
}
