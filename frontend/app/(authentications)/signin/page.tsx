"use client";

import Link from "next/link";
import { useState } from "react";
import Input from "../../../components/Input";

type userDetails = {
  email?: string;
};

export default function Login() {
  const [details, setDetails] = useState<userDetails>();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <>
      <h1 className="text-teal text-2xl font-semibold mb-8">Welcome Back!</h1>
      <form onSubmit={submitForm}>
        <div className="flex flex-col mb-3">
          <Input
            placeholder="Enter your email address"
            className="w-full"
            // hint="your firstname and lastname"
            // error={true}
            // errorMessage="too short"
            value={details?.email}
            onChange={(e) => {
              setDetails({ email: e.target.value });
            }}
          />
        </div>
        <button
          type="submit"
          className="w-full text-base text-[#F5F5F5] bg-teal rounded p-4 mt-6"
        >
          Sign in
        </button>
      </form>
      <div className="mt-6 text-base font-normal">
        <span>Don’t have an account?</span>
        <Link href="/signup" className="text-teal px-2">
          Sign up
        </Link>
      </div>
    </>
  );
}
