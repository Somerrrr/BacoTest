import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import InputBase from "../Input/InputBase";

export default function RegisterStatus() {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [accountError, setAccountError] = useState(false);
  const [passWordError, setPassWordError] = useState(false);
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
  }, [data]);

  return (
    <>
      <div className="mt-[128px] mb-16 space-y-6 text-center">
        <a className="text-2xl font-bold uppercase leading-normal tracking-[9.6px] text-bakoW">
          REGISTER
        </a>
        <div className="text-xs font-extralight">
          Please fill in the information below:
        </div>
      </div>
      <div className="space-y-4">
        <InputBase
          placeholder="First Name"
          value={data.first_name}
          onChange={(e: any) => {
            setData({ ...data, first_name: e.target.value });
          }}
          //   error={}
        />
        <InputBase
          placeholder="Last Name"
          value={data.last_name}
          onChange={(e: any) => {
            setData({ ...data, last_name: e.target.value });
          }}
          //   error={}
        />
        <InputBase
          placeholder="Email"
          value={data.email}
          onChange={(e: any) => {
            setData({ ...data, email: e.target.value });
          }}
          //   error={}
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
        className={`mt-8 mb-6 h-[60px] items-center w-full rounded-full text-base font-bold uppercase leading-normal tracking-[6.4px] text-bakoB bg-bakoW
          ${
            data.email === "" || data.first_name === ""
              ? "cursor-not-allowed opacity-30"
              : "cursor-pointer opacity-100"
          }`}
        disabled={data.email === "" || data.first_name === ""}
        onClick={() => handleLogin()}
      >
        {loading ? <span className="loader" /> : "Login"}
      </button>
    </>
  );
}
