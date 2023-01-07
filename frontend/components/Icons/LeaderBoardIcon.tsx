type Props = {
  size?: number;
  className?: string;
};
/* use `interface` if exporting so that consumers can extend */

const LeaderBoardIcon = ({ size, className, ...props }: Props) => {
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
      <path d="M3.33325 35V15H12.4999V35H3.33325ZM15.4166 35V5H24.5833V35H15.4166ZM27.4999 35V18.3333H36.6666V35H27.4999Z" />
    </svg>
  );
};

export default LeaderBoardIcon;
