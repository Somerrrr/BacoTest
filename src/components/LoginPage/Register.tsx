import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import InputBase from "../Input/InputBase";
import { StatusType } from "@/pages";
import { BacoContext } from "../BacoProvider";
import useRegister from "@/hooks/useRegister";

export default function RegisterStatus({ setStatus }: any) {
  const { goPage } = useContext(BacoContext);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [passWordError, setPassWordError] = useState(false);
  const { register, loading, error } = useRegister();

  const handleRegister = useCallback(async () => {
    if (data.email !== "" && data.password !== "") {
      try {
        const res = await register(
          data.email,
          data.password,
          data.first_name,
          data.last_name,
          data.email,
        );
        console.log(res);
        if (res.code === 200) {
          setStatus(StatusType.LOGIN);
          return;
        }
        // else {
        //   setEmailError(true);
        //   setPassWordError(true);
        // }
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
          //error={}
        />
        <InputBase
          placeholder="Last Name"
          value={data.last_name}
          onChange={(e: any) => {
            setData({ ...data, last_name: e.target.value });
          }}
          //error={}
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
        className={`mb-6 mt-8 h-[60px] w-full items-center rounded-full bg-bakoW text-base font-bold uppercase leading-normal tracking-[6.4px] text-bakoB
          ${
            data.email === "" ||
            data.first_name === "" ||
            data.last_name === "" ||
            data.password === ""
              ? "cursor-not-allowed opacity-30"
              : "cursor-pointer opacity-100"
          }`}
        disabled={
          data.email === "" ||
          data.first_name === "" ||
          data.last_name === "" ||
          data.password === ""
        }
        // onClick={() => setStatus(StatusType.VERIFY)}
        onClick={() => handleRegister()}
      >
        {loading ? <span className="loader" /> : "continue"}
      </button>
    </>
  );
}
