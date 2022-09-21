import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "src/lib/firebase/firebase";

const AuthContext = createContext<any>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [firebaseAuthUser, setFirebaseAuthUser] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseAuthUser) => {
      if (firebaseAuthUser) {
        setFirebaseAuthUser({
          uid: firebaseAuthUser.uid,
          email: firebaseAuthUser.email,
          displayName: firebaseAuthUser.displayName,
        });
        const res = await fetch(
          `/api/user/firebaseAuth/${firebaseAuthUser.uid}`
        );
        const resUser = await res.json();
        setCurrentUser(resUser);
      } else {
        setFirebaseAuthUser(null);
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setFirebaseAuthUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, firebaseAuthUser, login, signup, logout }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
