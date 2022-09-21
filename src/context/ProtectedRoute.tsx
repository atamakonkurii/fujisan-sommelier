import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { firebaseAuthUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!firebaseAuthUser) {
      router.push("/");
    }
  }, [router, firebaseAuthUser]);

  return <>{firebaseAuthUser ? children : null}</>;
};
