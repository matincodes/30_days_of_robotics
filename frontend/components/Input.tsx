"use client"
import React, { ChangeEventHandler, forwardRef, useId, useState } from "react";
// import PasswordViewEyeIcon from "./Icons/PasswordViewEyeIcon";

interface Props {
  className?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  hint?: string;
  error?: boolean;
  errorMessage?: string;
  value?: number | string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
export type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Props>(function Input(
  {
    className,
    label,
    type,
    placeholder,
    hint,
    error,
    errorMessage,
    value,
    onChange,
    ...props
  },
  ref
) {
  const id = useId();
  // const isPassword = type === "password";
  const [inputType, setInputType] = useState(type ?? "text");
  // const toggleInputShow = () => {
  //   inputType === "text"
  //     ? setInputType("password")
  //     : setInputType(type ?? "text");
  // };

  return (
    <>
      {label && (
        <label
          className="p-2 font-normal text-base mb-[2px] inline-block"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        className={`text-sm bg-[#F3FBF9] border border-teal p-3 placeholder:text-[#C3EAE3] rounded ${className} ${
          error ? "outline-none border-red-600" : ""
        }`}
        type={inputType}
        id={id}
        placeholder={placeholder ?? ""}
        {...(value ? { value } : {})}
        {...(onChange ? { onChange } : {})}
        {...props}
        ref={ref}
      />
      {hint && !error && (
        <span className="text-xs text-gray-500 p-1 pl-2">{hint}</span>
      )}
      {error && (
        <span className="text-xs text-red-600 p-1 pl-2">
          {errorMessage ?? ""}
        </span>
      )}
      {/* <div className="relative">
        {isPassword && (
          <PasswordViewEyeIcon
            show={inputType === "text"}
            onClick={toggleInputShow}
          />
        )}
      </div> */}
    </>
  );
});

export default Input;
