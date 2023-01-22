"use client";

type Props = {
  size?: number;
  className?: string;
};
/* use `interface` if exporting so that consumers can extend */

const HomeIcon = ({ size, className, ...props }: Props) => {
  return (
    <svg
      width={size ?? "40"}
      height={size ?? "40"}
      viewBox="0 0 40 40"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#clip0_35_2862)">
        <path d="M16.6666 33.3333V23.3333H23.3333V33.3333H31.6666V20H36.6666L19.9999 5L3.33325 20H8.33325V33.3333H16.6666Z" />
      </g>
      <defs>
        <clipPath id="clip0_35_2862">
          <rect width={size ?? "40"} height={size ?? "40"} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HomeIcon;
