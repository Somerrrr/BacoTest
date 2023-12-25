import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import InputBase from "../Input/InputBase";
import { StatusType } from "@/pages";
import { BacoContext } from "../BacoProvider";

export default function Verify({ setStatus }: any) {
  const { goPage } = useContext(BacoContext);
  const [data, setData] = useState({
    number: "",
  });
  const [accountError, setAccountError] = useState(false);
  const [passWordError, setPassWordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = useCallback(async () => {
    setLoading(true);
    goPage("/collection");
  }, [data]);

  return (
    <>
      <div className="mb-16 mt-[128px] space-y-6 text-center">
        <a className="text-2xl font-bold uppercase leading-normal tracking-[9.6px] text-bakoW">
          verify
        </a>
        <div className="text-xs font-extralight">
          Please check your email for the verification number:
        </div>
      </div>

      <div className="space-y-4">
        <InputBase
          placeholder="Verification number"
          value={data.number}
          onChange={(e: any) => {
            setData({ ...data, number: e.target.value });
          }}
          //   error={}
        />
      </div>
      <button
        className={`mb-6 mt-8 h-[60px] w-full items-center rounded-full bg-bakoW text-base font-bold uppercase leading-normal tracking-[6.4px] text-bakoB
          ${
            data.number === ""
              ? "cursor-not-allowed opacity-30"
              : "cursor-pointer opacity-100"
          }`}
        disabled={data.number === ""}
        onClick={() => handleLogin()}
      >
        {loading ? <span className="loader" /> : "create account"}
      </button>
    </>
  );
}
