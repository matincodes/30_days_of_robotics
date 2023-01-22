"use client";
import { Josefin_Sans } from "@next/font/google";
import "../../styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler, useState } from "react";
import Hamburger from "../../components/Icons/Hamburger";
import Logo from "../../components/Icons/Logo";
import Sidebar from "../../components/Sidebar";
import { useAuth } from "../../context/AuthContext";

export const dynamic = "auto";

const josefinSans = Josefin_Sans({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const closeSidebar: MouseEventHandler<HTMLDivElement | HTMLLIElement> = (
    e
  ) => {
    setOpen(false);
  };
  const openSidebar: MouseEventHandler<HTMLDivElement> = (e) => {
    setOpen(true);
  };

  return (
    <html lang="en" className={josefinSans.className}>
      <body>
        <div className="flex flex-col h-screen overflow-hidden">
          <Header openSidebar={openSidebar} />
          <div className="flex h-full flex-grow overflow-hidden">
            <Sidebar open={open} closeSidebar={closeSidebar} />
            <main className="flex-grow overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

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
