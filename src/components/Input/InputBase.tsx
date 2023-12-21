import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";

interface InputBaseProps {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: any) => void;
  error?: boolean;
  toggle?: boolean;
}

export default function InputBase({
  placeholder,
  value,
  onChange,
  error,
  toggle = false,
}: InputBaseProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`relative min-w-[320px] border rounded-full lg:max-w-2xl ${
        error ? "border-error" : "border-washi"
      }`}
    >
      <input
        className="w-full h-10 lg:h-14 text-base text-bakoW bg-transparent focus:outline-none px-5 placeholder-bakoW/40"
        placeholder={placeholder}
        type={toggle ? (showPassword ? "text" : "password") : "text"}
        value={value}
        onChange={onChange}
      />
      {value && toggle && (
        <div
          className="absolute inset-y-[37%] right-4"
          onClick={() => setShowPassword(!showPassword)}
        >
          <a className="cursor-pointer text-xs font-medium leading-normal tracking-[1.2px]">
            {showPassword ? <FaEye size="16px" /> : <FaEyeSlash size="16px" />}
          </a>
        </div>
      )}
    </div>
  );
}
