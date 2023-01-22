"use client";

type Props = {
  size?: number;
  className?: string;
};
/* use `interface` if exporting so that consumers can extend */

const DoubleCheck = ({ size, className }: Props) => {
  return (
    <svg
      width={size ?? "40"}
      height={size ?? "40"}
      viewBox="0 0 40 40"
      fill="#BFD059"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_64_4945)">
        <path d="M30 11.6667L27.65 9.31665L17.0833 19.8833L19.4333 22.2333L30 11.6667ZM37.0667 9.31665L19.4333 26.95L12.4667 20L10.1167 22.35L19.4333 31.6667L39.4333 11.6667L37.0667 9.31665ZM0.68335 22.35L10 31.6667L12.35 29.3167L3.05002 20L0.68335 22.35Z" />
      </g>
      <defs>
        <clipPath id="clip0_64_4945">
          <rect width={size ?? "40"} height={size ?? "40"} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DoubleCheck;
