import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/Icons/LoadingSpinner";
import { useAuth } from "../../context/AuthContext";

const useIsAuth = () => {
  const auth = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth?.user) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router, auth?.user]);

  const FullLoadingSpinner = (
    <main className="flex align-middle justify-center min-h-screen overflow-hidden">
      <LoadingSpinner style={{ width: "10%" }} />
    </main>
  );

  return [loading, FullLoadingSpinner];
};

export default useIsAuth;
