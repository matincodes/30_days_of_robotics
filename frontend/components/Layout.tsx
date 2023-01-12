import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { useAuth } from "../context/AuthContext";
import Close from "./Icons/Close";
import Hamburger from "./Icons/Hamburger";
import HomeIcon from "./Icons/HomeIcon";
import LeaderBoardIcon from "./Icons/LeaderBoardIcon";
import Logo from "./Icons/Logo";
import LogoutIcon from "./Icons/LogoutIcon";
import MessageIcon from "./Icons/MessageIcon";
import SubmissionsIcon from "./Icons/SubmissionsIcon";
import TasksIcon from "./Icons/TasksIcon";

type Props = {
  children: ReactNode;
  className?: string;
};
/* use `interface` if exporting so that consumers can extend */

const Layout = ({ children, className }: Props) => {
  const [open, setOpen] = useState(false);

  const closeSidebar: MouseEventHandler<HTMLDivElement> = (e) => {
    setOpen(false);
  };
  const openSidebar: MouseEventHandler<HTMLDivElement> = (e) => {
    setOpen(true);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header openSidebar={openSidebar} />
      <div className="flex h-full flex-grow overflow-hidden">
        <Sidebar open={open} closeSidebar={closeSidebar} />
        <main
          className={`flex-grow overflow-y-auto ${className ? className : ""}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

const Header = ({
  openSidebar,
}: {
  openSidebar: MouseEventHandler<HTMLDivElement>;
}) => {
  const auth = useAuth();

  return (
    <header className="flex justify-between items-center px-2 py-4 lg:px-16 lg:border-b border-b-[#90EADA]">
      <div>
        <Link href="/" className="hidden lg:block">
          <Image alt="logo" src="/full-logo.png" width={132} height={60} />
        </Link>
        <div className="lg:hidden cursor-pointer" onClick={openSidebar}>
          <Hamburger />
        </div>
      </div>

      <Link href="/" className="lg:hidden">
        <Logo width={40} />
      </Link>

      <div className="flex items-center">
        <Link href="/account">
          <Image
            alt="avatar"
            src={auth?.user?.avatar ?? ""}
            width={40}
            height={40}
            className="rounded-full overflow-hidden mr-2"
          />
        </Link>
        <span className="hidden lg:block mr-6 text-base font-medium">
          {auth?.user?.firstName}
        </span>
        <Link href="/message" className="hidden lg:block">
          <Image
            alt="notifications"
            src="/notification.png"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </header>
  );
};

const Sidebar = ({
  open,
  closeSidebar,
}: {
  open: boolean;
  closeSidebar: MouseEventHandler<HTMLDivElement>;
}) => {
  const auth = useAuth();
  const { pathname } = useRouter();

  const activeLink = (pathname.match(/^\/[a-z]+/i) ?? ["/home"])[0]
    .slice(1)
    .toLocaleLowerCase();

  console.log("activeLink", activeLink);

  return (
    <>
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-black bg-opacity-60 lg:hidden transition-all ease-in-out duration-500 ${
          open ? "" : "hidden bg-opacity-0"
        }`}
        onClick={closeSidebar}
      ></div>
      <aside
        className={`transition-all ease-in-out duration-500 w-[90vw] pl-6 pr-11 max-w-sm absolute top-0 left-0 h-screen lg:h-auto bg-white z-50 lg:static lg:border-r border-r-[#2CE2C2] shadow-sidebar pt-14 lg:pt-2 lg:pl-16 lg:pr-0 flex flex-col justify-between pb-24 ${
          open ? "" : "-left-full"
        }`}
      >
        <div>
          <div
            className="w-fit ml-auto cursor-pointer lg:hidden"
            onClick={closeSidebar}
          >
            <Close />
          </div>
          <ul>
            <li className="border-b border-b-[#D9D9D9]">
              <Link
                href="/"
                className={`p-[10px] pr-5 gap-4 flex items-center text-2xl font-normal hover:text-teal ${
                  activeLink === "home" ? "text-teal" : ""
                }`}
              >
                <HomeIcon className="fill-current" />
                <span>Home</span>
              </Link>
            </li>
            <li className="border-b border-b-[#D9D9D9]">
              <Link
                href="/leaderboard"
                className={`p-[10px] pr-5 gap-4 flex items-center text-2xl font-normal hover:text-teal ${
                  activeLink === "leaderboard" ? "text-teal" : ""
                }`}
              >
                <LeaderBoardIcon className="fill-current" />
                <span>Leaderboard</span>
              </Link>
            </li>
            <li className="border-b border-b-[#D9D9D9]">
              <Link
                href="/submissions"
                className={`p-[10px] pr-5 gap-4 flex items-center text-2xl font-normal hover:text-teal ${
                  activeLink === "submissions" ? "text-teal" : ""
                }`}
              >
                <SubmissionsIcon className="fill-current" />
                <span>Submissions</span>
              </Link>
            </li>
            <li className="border-b border-b-[#D9D9D9]">
              <Link
                href="/tasks"
                className={`p-[10px] pr-5 gap-4 flex items-center text-2xl font-normal hover:text-teal ${
                  activeLink === "tasks" ? "text-teal" : ""
                }`}
              >
                <TasksIcon className="fill-current" />
                <span>Tasks</span>
              </Link>
            </li>
            <li className="border-b border-b-[#D9D9D9]">
              <Link
                href="/message"
                className={`p-[10px] pr-5 gap-4 flex items-center text-2xl font-normal hover:text-teal ${
                  activeLink === "message" ? "text-teal" : ""
                }`}
              >
                <MessageIcon className="fill-current" />
                <span>Message</span>
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="p-[10px] pr-5 gap-4 flex items-center text-2xl font-normal hover:text-red-600 cursor-pointer"
          onClick={() => auth?.logout()}
        >
          <LogoutIcon className="fill-current" />
          <span>Log out</span>
        </div>
      </aside>
    </>
  );
};
