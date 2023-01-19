"use client";

import Link from "next/link";
import Image from "../../../components/Image";
import numberToPlace from "../../../utils/numberToPostion";

type user = {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  track: string;
  avatar?: string;
  points: number;
  position: number;
};
const getMe = (): user => {
  return {
    firstName: "Faruq",
    lastName: "Bakare",
    displayName: "BlessTheBoy",
    email: "bakarefaruq.a@gmail.com",
    track: "robotics",
    avatar: "/avatar.png",
    points: 1000,
    position: 3,
  };
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({
  //       firstName: "Faruq",
  //       lastName: "Bakare",
  //       displayName: "BlessTheBoy",
  //       email: "bakarefaruq.a@gmail.com",
  //       track: "robotics",
  //       avatar: "/avatar.png",
  //       points: 1000,
  //       position: 3,
  //     });
  //   }, 200);
  // });
};

export default function Account() {
  const me = getMe();

  const logout = () => {};

  return (
    <div className="py-4 lg:py-8 px-3 lg:px-5">
      <div className="flex flex-col items-center">
        <Image
          src={me.avatar ?? ""}
          alt="my avatar"
          className="w-24 h-24 lg:w-60 lg:h-60 rounded-full border-2 border-teal"
        />
        <h1 className="mt-4 lg:mt-8 mb-1 lg:mb-2 font-bold text-base lg:text-4xl leading-4 lg:leading-9 text-[#0A0A0A]">
          {me.displayName}
        </h1>
        <h2 className="font-normal text-sm leading-3 lg:text-2xl lg:leading-6">
          {me.firstName} {me.lastName}
        </h2>
      </div>

      <div className="mt-7 flex items-center justify-center gap-6">
        <div className="grow max-w-[215px] bg-gradient-to-r from-[#2CE2C2] to-[#1F7B6B] text-[#FBFBFB] text-center rounded-lg px-2 py-6">
          <p className="font-semibold text-sm leading-3 lg:text-base lg:leading-4 mb-4 lg:mb-10">
            Your Current Score
          </p>
          <p className="font-bold text-2xl lg:text-5xl leading-none">
            {me.points.toLocaleString()}
          </p>
        </div>
        <div className="grow max-w-[215px] bg-gradient-to-r from-[#2CE2C2] to-[#1F7B6B] text-[#FBFBFB] text-center rounded-lg px-2 py-6">
          <p className="font-semibold text-sm leading-3 lg:text-base lg:leading-4 mb-4 lg:mb-10">
            Your Current Position
          </p>
          <p className="font-bold text-2xl lg:text-5xl leading-none">
            {numberToPlace(me.position)}
          </p>
        </div>
      </div>

      <div className="lg:hidden mt-40 mb-10">
        <Link
          href="/"
          className="block w-full mb-4 bg-teal py-4 text-base leading-none font-semibold rounded text-[#F5F5F5] text-center"
        >
          Home
        </Link>
        <div
          className="block w-full text-red-600 py-4 text-base leading-none font-semibold rounded text-center border border-red-600"
          onClick={() => logout()}
        >
          Logout
        </div>
      </div>
    </div>
  );
}
