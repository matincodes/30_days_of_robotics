type Props = {
  size?: number;
  className?: string;
};
/* use `interface` if exporting so that consumers can extend */

const Lock = ({ size, className }: Props) => {
  return (
    <svg
      width={size ?? "40"}
      height={size ?? "40"}
      viewBox="0 0 40 40"
      fill="#FFFEFE"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M31.6667 16.6667H33.3333C33.7754 16.6667 34.1993 16.8423 34.5118 17.1548C34.8244 17.4674 35 17.8913 35 18.3333V35C35 35.442 34.8244 35.866 34.5118 36.1785C34.1993 36.4911 33.7754 36.6667 33.3333 36.6667H6.66667C6.22464 36.6667 5.80072 36.4911 5.48816 36.1785C5.17559 35.866 5 35.442 5 35V18.3333C5 17.8913 5.17559 17.4674 5.48816 17.1548C5.80072 16.8423 6.22464 16.6667 6.66667 16.6667H8.33333V15C8.33333 13.4679 8.6351 11.9508 9.22141 10.5354C9.80771 9.1199 10.6671 7.83378 11.7504 6.75043C12.8338 5.66708 14.1199 4.80772 15.5354 4.22142C16.9508 3.63511 18.4679 3.33334 20 3.33334C21.5321 3.33334 23.0492 3.63511 24.4646 4.22142C25.8801 4.80772 27.1662 5.66708 28.2496 6.75043C29.3329 7.83378 30.1923 9.1199 30.7786 10.5354C31.3649 11.9508 31.6667 13.4679 31.6667 15V16.6667ZM28.3333 16.6667V15C28.3333 12.7899 27.4554 10.6703 25.8926 9.10745C24.3298 7.54465 22.2101 6.66668 20 6.66668C17.7899 6.66668 15.6702 7.54465 14.1074 9.10745C12.5446 10.6703 11.6667 12.7899 11.6667 15V16.6667H28.3333ZM18.3333 23.3333V30H21.6667V23.3333H18.3333Z" />
    </svg>
  );
};

export default Lock;
