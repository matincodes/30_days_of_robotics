type Props = {
  size?: number;
  className?: string;
};
/* use `interface` if exporting so that consumers can extend */

const Link = ({ size, className }: Props) => {
  return (
    <svg
      width={size ?? "32"}
      height={size ?? "32"}
      viewBox="0 0 32 32"
      fill="#0A0A0A"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_62_4737)">
        <path d="M5.19996 16C5.19996 13.72 7.05329 11.8666 9.33329 11.8666H14.6666V9.33331H9.33329C5.65329 9.33331 2.66663 12.32 2.66663 16C2.66663 19.68 5.65329 22.6666 9.33329 22.6666H14.6666V20.1333H9.33329C7.05329 20.1333 5.19996 18.28 5.19996 16ZM10.6666 17.3333H21.3333V14.6666H10.6666V17.3333ZM22.6666 9.33331H17.3333V11.8666H22.6666C24.9466 11.8666 26.8 13.72 26.8 16C26.8 18.28 24.9466 20.1333 22.6666 20.1333H17.3333V22.6666H22.6666C26.3466 22.6666 29.3333 19.68 29.3333 16C29.3333 12.32 26.3466 9.33331 22.6666 9.33331Z" />
      </g>
      <defs>
        <clipPath id="clip0_62_4737">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Link;
