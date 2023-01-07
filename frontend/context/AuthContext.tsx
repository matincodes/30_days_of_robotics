import { createContext, ReactNode, useContext, useState } from "react";

type user = {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  track: string;
  avatar: string;
};
interface AuthContextInterface {
  user: user | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextInterface | null>(null);
AuthContext.displayName = "AuthContext";

// Provider in your app

const sampleUser: user = {
  firstName: "Faruq",
  lastName: "Bakare",
  displayName: "BlessTheBoy",
  email: "bakarefaruq.a@gmail.com",
  track: "robotics",
  avatar: "/avatar.png",
};

type Props = {
  children?: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<user | null>(sampleUser);

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}
