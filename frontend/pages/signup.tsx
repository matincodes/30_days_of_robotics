import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import Input from "../components/Input";

type userDetails = {
  fullName?: string;
  email?: string;
  displayName?: string;
  track?: string;
};

export default function Singup() {
  const [details, setDetails] = useState<userDetails>();
  const id = useId();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <>
      <Head>
        <title>30 Days of Robotics | Sign up</title>
      </Head>
      <main className="lg:h-screen lg:px-40">
        <div className="container mx-auto p-2 pt-6 pb-32 lg:py-8 lg:flex lg:gap-40 lg:h-full items-center">
          <Image
            alt="logo"
            src="/full-logo.png"
            width={436}
            height={200}
            className="w-[192px] mx-auto mb-8 grow lg:w-1/5 lg:mw-[436px] object-contain"
          />
          <div className="grow">
            <h1 className="text-teal text-2xl font-semibold mb-2">
              Create an Account
            </h1>
            <form onSubmit={submitForm}>
              <div className="flex flex-col mb-3">
                <Input
                  label="Full name"
                  placeholder="Enter your full name"
                  className="w-full"
                  // hint="your firstname and lastname"
                  // error={true}
                  // errorMessage="too short"
                  value={details?.fullName}
                  onChange={(e) => {
                    setDetails((d) => ({ ...d, fullName: e.target.value }));
                  }}
                />
              </div>
              <div className="flex flex-col mb-3">
                <Input
                  label="Email address"
                  placeholder="Enter your email address"
                  className="w-full"
                  value={details?.email}
                  onChange={(e) => {
                    setDetails((d) => ({ ...d, email: e.target.value }));
                  }}
                />
              </div>
              <div className="flex flex-col mb-3">
                <Input
                  label="Display Name"
                  placeholder="Enter your display name"
                  className="w-full"
                  value={details?.displayName}
                  onChange={(e) => {
                    setDetails((d) => ({ ...d, displayName: e.target.value }));
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor={id}
                  className="p-2 font-normal text-base mb-[2px] inline-block"
                >
                  Track
                </label>
                <select
                  id={id}
                  className="bg-[#F3FBF9] border border-teal p-3 text-gray-900 text-sm rounded block w-full"
                  value={details?.track ?? ""}
                  onChange={(e) => {
                    setDetails((d) => ({ ...d, track: e.target.value }));
                  }}
                >
                  <option value="" disabled hidden>
                    Choose learning track
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full text-base text-[#F5F5F5] bg-teal rounded p-4 mt-6"
              >
                Sign up
              </button>
            </form>
            <div className="mt-6 text-base font-normal">
              <span>Already have an account?</span>
              <Link href="/signin" className="text-teal px-2">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
