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
  const [loading, setLoading] = useState(false);

  const handleLogin = useCallback(async () => {
    setLoading(true);
    goPage("/collection");
    // if (inputAccount !== "" && inputPassword !== "") {
    //   try {
    //     const res = await loginAccount(inputAccount, inputPassword);
    //     if (res.code === 200) {
    //       if (res.data.data[0].role_vid === "123") {
    //         goPage("/profile");
    //       }
    //       if (res.data.data[0].role_vid === "456") {
    //         goPage("/owner");
    //       }
    //       if (res.data.data[0].role_vid === "789") {
    //         goPage("/concierge");
    //       } else goPage("/");
    //       setLoading(false);
    //       return;
    //     } else if (res.code === 405) {
    //       setPassWordError(true);
    //       setLoading(false);
    //       return;
    //     } else {
    //       setAccountError(true);
    //       setPassWordError(true);
    //       setLoading(false);
    //     }
    //   } catch (err) {
    //     setAccountError(true);
    //     setPassWordError(true);
    //     setLoading(false);
    //   }
    // } else {
    //   setAccountError(true);
    //   setPassWordError(true);
    //   setLoading(false);
    // }
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
