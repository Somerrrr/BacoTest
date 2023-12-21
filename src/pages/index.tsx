import React, { useState } from "react";
import LoginStatus from "@/components/LoginPage/Login";
import RegisterStatus from "@/components/LoginPage/Register";
import { BsDot } from "react-icons/bs";
import Image from "next/image";
import logo from "@/assets/LOGO_W.svg";
import Verify from "@/components/LoginPage/Verify";

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
          <div className="text-xs font-extralight leading-normal flex items-center justify-center">
            <a
              className="cursor-pointer hover:text-washi/70 hover:underline underline-offset-2"
              onClick={() => setStatus(StatusType.REGISTER)}
            >
              Create accont
            </a>
            <BsDot />
            <a
              className="cursor-pointer hover:text-washi/70 hover:underline underline-offset-2"
              onClick={() => setStatus(StatusType.RECOVER)}
            >
              Forgot password
            </a>
          </div>
        );
      case StatusType.REGISTER:
        return (
          <div className="text-xs font-extralight leading-normal flex items-center justify-center">
            <a>Have an account?</a>
            <a
              className="cursor-pointer hover:text-washi/70 hover:underline underline-offset-2 whitespace-pre-wrap"
              onClick={() => setStatus(StatusType.LOGIN)}
            >
              {" "}
              Login
            </a>
          </div>
        );
      case StatusType.RECOVER:
        return (
          <div className="text-xs font-extralight leading-normal flex items-center justify-center">
            <a>Remember your password? </a>
            <a
              className="cursor-pointer hover:text-washi/70 hover:underline underline-offset-2 whitespace-pre-wrap"
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

  return (
    <main className="flex min-h-screen bg-bakoB text-bakoW">
      <div className="m-auto">
        <div className="w-full flex justify-center px-5">
          <Image src={logo} alt="Bako" className="w-full" />
        </div>
        {statusPage()}
        {statusText()}
      </div>
    </main>
  );
}
