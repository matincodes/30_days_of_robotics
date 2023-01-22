"use client";

type Props = {
  size?: number;
  className?: string;
};
/* use `interface` if exporting so that consumers can extend */

const Info = ({ size, className }: Props) => {
  return (
    <svg
      width={size ?? "40"}
      height={size ?? "40"}
      viewBox="0 0 40 40"
      fill="#969696"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_64_4959)">
        <path d="M20 3.33337C10.8 3.33337 3.33331 10.8 3.33331 20C3.33331 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6666 29.2 36.6666 20C36.6666 10.8 29.2 3.33337 20 3.33337ZM21.6666 28.3334H18.3333V25H21.6666V28.3334ZM21.6666 21.6667H18.3333V11.6667H21.6666V21.6667Z" />
      </g>
      <defs>
        <clipPath id="clip0_64_4959">
          <rect width={size ?? "40"} height={size ?? "40"} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Info;
