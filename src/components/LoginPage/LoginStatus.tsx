import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function LoginStatus() {
  const [showPassword, setShowPassword] = useState(false);
  const [accountError, setAccountError] = useState(false);
  const [passWordError, setPassWordError] = useState(false);
  const [inputAccount, setInputAccount] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const goPage = (page: string) => {
    router.push(page);
  };
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
  }, [inputAccount, inputPassword]);

  return (
    <>
      <div className="mt-[128px] mb-16 space-y-6 text-center">
        <a className="text-2xl font-bold uppercase leading-normal tracking-[9.6px] text-bakoW">
          Login
        </a>
        <div className="text-xs font-extralight">
          Please enter your email and password:
        </div>
      </div>
      <div className="space-y-4">
        <div
          className={`relative min-w-[320px] border rounded-full lg:max-w-2xl ${
            accountError ? "border-error" : "border-washi"
          }`}
        >
          <input
            className="w-full h-10 lg:h-14 text-base text-bakoW bg-transparent focus:outline-none px-5 placeholder-bakoW/40"
            type="text"
            placeholder="Email"
            value={inputAccount}
            onChange={(e: any) => {
              setInputAccount(e.target.value);
              setAccountError(false);
            }}
          />
        </div>
        <div
          className={`relative min-w-[320px] border rounded-full lg:max-w-2xl ${
            passWordError ? "border-error" : "border-washi"
          }`}
        >
          <input
            className="w-full h-10 lg:h-14 text-base text-bakoW bg-transparent focus:outline-none px-5 placeholder-bakoW/40"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={inputPassword}
            onChange={(e: any) => {
              setInputPassword(e.target.value);
              setPassWordError(false);
            }}
          />
          {inputPassword && (
            <div
              className="absolute inset-y-[37%] right-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              <a className="cursor-pointer text-xs font-medium leading-normal tracking-[1.2px]">
                {showPassword ? (
                  <FaEye size="16px" />
                ) : (
                  <FaEyeSlash size="16px" />
                )}
              </a>
            </div>
          )}
        </div>
      </div>
      {/* input */}
      <button
        className={`mt-8 mb-6 h-[60px] items-center w-full rounded-full text-base font-bold uppercase leading-normal tracking-[6.4px] text-bakoB bg-bakoW
          ${
            inputAccount === "" || inputPassword === ""
              ? "cursor-not-allowed opacity-30"
              : "cursor-pointer opacity-100"
          }`}
        disabled={inputAccount === "" || inputPassword === ""}
        onClick={() => handleLogin()}
      >
        {loading ? <span className="loader" /> : "Login"}
      </button>
    </>
  );
}
