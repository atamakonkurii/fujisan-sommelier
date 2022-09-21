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
  const [firebaseAuthUser, setFirebaseAuthUser] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseAuthUser) => {
      if (firebaseAuthUser) {
        setFirebaseAuthUser({
          uid: firebaseAuthUser.uid,
          email: firebaseAuthUser.email,
          displayName: firebaseAuthUser.displayName,
        });
      } else {
        setFirebaseAuthUser(null);
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
    <AuthContext.Provider value={{ firebaseAuthUser, login, signup, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
