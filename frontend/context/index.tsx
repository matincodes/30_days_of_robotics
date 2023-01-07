import { ReactNode } from "react";
import AuthProvider from "./AuthContext";

type Props = {
  children?: ReactNode;
};
/* use `interface` if exporting so that consumers can extend */

const AppProviders = ({ children }: Props) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProviders;
