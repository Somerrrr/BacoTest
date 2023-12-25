import { createContext, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

export const BacoContext = createContext<{
  goPage: (page: any) => void;
}>({
  goPage: () => {},
});

export const BacoProvider = ({ children }: { children: any }) => {
  const router = useRouter();
  const goPage = (page: any) => {
    router.push(page);
  };
  return (
    <BacoContext.Provider
      value={{
        goPage,
      }}
    >
      {children}
    </BacoContext.Provider>
  );
};
