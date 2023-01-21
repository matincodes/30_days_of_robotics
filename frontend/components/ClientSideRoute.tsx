"use client"
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  route: string;
};
/* use `interface` if exporting so that consumers can extend */

const ClientSideRoute = ({ children, route }: Props) => {
  return <Link href={route}>{children}</Link>;
};

export default ClientSideRoute;
