import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
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
};
/* use `interface` if exporting so that consumers can extend */

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="flex h-full flex-grow">
        <Sidebar />
        {children}
      </main>
    </>
  );
};

export default Layout;

const Header = () => {
  const auth = useAuth();

  return (
    <header className="flex justify-between items-center px-2 py-4 lg:px-16 lg:border-b border-b-[#90EADA]">
      <div>
        <Link href="/" className="hidden lg:block">
          <Image alt="logo" src="/full-logo.png" width={132} height={60} />
        </Link>
        <div className="lg:hidden cursor-pointer">
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
        <Link href="/notifications" className="hidden lg:block">
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

const Sidebar = () => {
  const auth = useAuth();
  return (
    <aside className="max-w-sm lg:border-r border-r-[#2CE2C2] shadow-sidebar lg:pl-16 flex flex-col justify-between pb-24">
      <ul>
        <li className="border-b border-b-[#D9D9D9]">
          <Link
            href="/"
            className="p-[10px] pr-5 gap-4 flex items-center text-2xl font-normal hover:text-teal"
          >
            <HomeIcon className="fill-current" />
            <span>Home</span>
          </Link>
        </li>
        <li className="border-b border-b-[#D9D9D9]">
          <Link
            href="/leaderboard"
            className="p-[10px] pr-5 gap-4 flex items-center text-2xl font-normal hover:text-teal"
          >
            <LeaderBoardIcon className="fill-current" />
            <span>Leaderboard</span>
          </Link>
        </li>
        <li className="border-b border-b-[#D9D9D9]">
          <Link
            href="/submissions"
            className="p-[10px] pr-5 gap-4 flex items-center text-2xl font-normal hover:text-teal"
          >
            <SubmissionsIcon className="fill-current" />
            <span>Submissions</span>
          </Link>
        </li>
        <li className="border-b border-b-[#D9D9D9]">
          <Link
            href="/tasks"
            className="p-[10px] pr-5 gap-4 flex items-center text-2xl font-normal hover:text-teal"
          >
            <TasksIcon className="fill-current" />
            <span>Tasks</span>
          </Link>
        </li>
        <li className="border-b border-b-[#D9D9D9]">
          <Link
            href="/message"
            className="p-[10px] pr-5 gap-4 flex items-center text-2xl font-normal hover:text-teal"
          >
            <MessageIcon className="fill-current" />
            <span>Message</span>
          </Link>
        </li>
      </ul>

      <div
        className="p-[10px] pr-5 gap-4 flex items-center text-2xl font-normal hover:text-red-600 cursor-pointer"
        onClick={() => auth?.logout()}
      >
        <LogoutIcon className="fill-current" />
        <span>Log out</span>
      </div>
    </aside>
  );
};
