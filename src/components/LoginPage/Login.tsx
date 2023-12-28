import useLogin from "@/hooks/useLogin";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useState } from "react";
import { BacoContext } from "../BacoProvider";
import InputBase from "../Input/InputBase";

export default function LoginStatus() {
  const { goPage } = useContext(BacoContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [passWordError, setPassWordError] = useState(false);
  const { login, loading, error } = useLogin();

  //TODO: add error message
  const handleLogin = useCallback(async () => {
    // goPage("/collection");
    if (data.email !== "" && data.password !== "") {
      try {
        const res = await login(data.email, data.password);
        console.log(res);
        if (res.code === 200) {
          goPage("/collection");
          return;
        }
        // else if (res.code === 413) {
        // toast.closeAll();
        // toast({
        //   title: "No wallet connect",
        //   description: "Please connect your wallet",
        //   status: "info",
        //   duration: 9000,
        //   isClosable: true,
        // });
        //   return;
        // }
        else {
          setEmailError(true);
          setPassWordError(true);
        }
      } catch (err) {
        setEmailError(true);
        setPassWordError(true);
      }
    } else {
      setEmailError(true);
      setPassWordError(true);
    }
  }, [data]);

  return (
    <>
      <div className="mb-16 space-y-6 text-center lg:mt-[128px]">
        <a className="text-2xl font-bold uppercase leading-normal tracking-[9.6px] text-bakoW">
          Login
        </a>
        <div className="text-xs font-extralight">
          Please enter your email and password:
        </div>
      </div>
      <div className="space-y-4">
        <InputBase
          placeholder="Email"
          value={data.email}
          onChange={(e: any) => {
            setData({ ...data, email: e.target.value });
          }}
          error={emailError}
        />
        <InputBase
          placeholder="Password"
          value={data.password}
          onChange={(e: any) => {
            setData({ ...data, password: e.target.value });
          }}
          error={passWordError}
          toggle={true}
        />
      </div>

      <button
        className={`mb-6 mt-8 h-[60px] w-full items-center rounded-full bg-bakoW text-base font-bold uppercase leading-normal tracking-[6.4px] text-bakoB
          ${
            data.email === "" || data.password === ""
              ? "cursor-not-allowed opacity-30"
              : "cursor-pointer opacity-100"
          }`}
        disabled={data.email === "" || data.password === ""}
        onClick={() => handleLogin()}
      >
        {loading ? <span className="loader" /> : "Login"}
      </button>
    </>
  );
}
