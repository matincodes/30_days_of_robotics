"use client";

type Props = {
  size?: number;
  className?: string;
};
/* use `interface` if exporting so that consumers can extend */

const MessageIcon = ({ size, className, ...props }: Props) => {
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
      <g clipPath="url(#clip0_35_2879)">
        <path d="M33.3333 3.33333H6.66659C4.83325 3.33333 3.34992 4.83333 3.34992 6.66667L3.33325 36.6667L9.99992 30H33.3333C35.1666 30 36.6666 28.5 36.6666 26.6667V6.66667C36.6666 4.83333 35.1666 3.33333 33.3333 3.33333ZM29.9999 23.3333H9.99992V20H29.9999V23.3333ZM29.9999 18.3333H9.99992V15H29.9999V18.3333ZM29.9999 13.3333H9.99992V10H29.9999V13.3333Z" />
      </g>
      <defs>
        <clipPath id="clip0_35_2879">
          <rect width={size ?? "40"} height={size ?? "40"} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MessageIcon;
