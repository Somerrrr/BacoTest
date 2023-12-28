import React, { useState } from "react";
import LoginStatus from "@/components/LoginPage/Login";
import RegisterStatus from "@/components/LoginPage/Register";
import { BsDot } from "react-icons/bs";
import Image from "next/image";
import logo from "@/assets/LOGO_W.svg";
import logoM from "@/assets/MLOGO_W.svg";
import Verify from "@/components/LoginPage/Verify";
import { MdOutlineArrowBack } from "react-icons/md";

export const StatusType = {
  LOGIN: "login",
  REGISTER: "register",
  VERIFY: "verify",
  RECOVER: "recover",
} as const;

export type PageStatus = (typeof StatusType)[keyof typeof StatusType];

export default function Login() {
  const [status, setStatus] = useState<PageStatus>(StatusType.LOGIN);

  const statusPage = () => {
    switch (status) {
      case StatusType.LOGIN:
        return <LoginStatus />;
      case StatusType.REGISTER:
        return <RegisterStatus setStatus={setStatus} />;
      case StatusType.VERIFY:
        return <Verify />;
      case StatusType.RECOVER:
        return <div>Recover</div>;
      default:
        return <LoginStatus />;
    }
  };
  const statusText = () => {
    switch (status) {
      case StatusType.LOGIN:
        return (
          <div className="flex items-center justify-center text-xs font-extralight leading-normal">
            <a
              className="hover:text-washi/70 cursor-pointer underline-offset-2 hover:underline"
              onClick={() => setStatus(StatusType.REGISTER)}
            >
              Create account
            </a>
            <BsDot />
            <a
              className="hover:text-washi/70 cursor-pointer underline-offset-2 hover:underline"
              onClick={() => setStatus(StatusType.RECOVER)}
            >
              Forgot password
            </a>
          </div>
        );
      case StatusType.REGISTER:
        return (
          <div className="flex items-center justify-center text-xs font-extralight leading-normal">
            <a>Have an account?</a>
            <a
              className="hover:text-washi/70 cursor-pointer whitespace-pre-wrap underline-offset-2 hover:underline"
              onClick={() => setStatus(StatusType.LOGIN)}
            >
              {" "}
              Login
            </a>
          </div>
        );
      case StatusType.RECOVER:
        return (
          <div className="flex items-center justify-center text-xs font-extralight leading-normal">
            <a>Remember your password?</a>
            <a
              className="hover:text-washi/70 cursor-pointer whitespace-pre-wrap underline-offset-2 hover:underline"
              onClick={() => setStatus(StatusType.LOGIN)}
            >
              {" "}
              Back to login
            </a>
          </div>
        );
      default:
        return <></>;
    }
  };
  const statusArrow = () => {
    switch (status) {
      case StatusType.LOGIN:
        return <></>;
      case StatusType.REGISTER:
        return (
          <div className="absolute left-4 top-4">
            <MdOutlineArrowBack
              size="24px"
              color="#EFEFEF"
              onClick={() => setStatus(StatusType.LOGIN)}
            />
          </div>
        );
      case StatusType.RECOVER:
        return (
          <div className="absolute left-4 top-4">
            <MdOutlineArrowBack
              size="24px"
              color="#EFEFEF"
              onClick={() => setStatus(StatusType.LOGIN)}
            />
          </div>
        );
      default:
        return <></>;
    }
  };

  return (
    <main className="relative flex min-h-screen bg-bakoB text-bakoW">
      {statusArrow()}
      <div className="relative m-auto">
        <Image
          src={logoM}
          alt="Bako"
          className="fadeOut absolute top-1/3 w-full opacity-0 lg:hidden"
        />
        <div className="fadeIn flex w-full flex-col justify-center px-5">
          <Image src={logo} alt="Bako" className="hidden w-full lg:flex" />
          {statusPage()}
          {statusText()}
        </div>
      </div>
    </main>
  );
}
