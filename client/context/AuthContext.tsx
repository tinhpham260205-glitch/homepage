import { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface User {
  name: string;
  avatarUrl?: string;
}

interface AuthContextValue {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("evride:user");
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch {}
    }
  }, []);

  const value = useMemo(
    () => ({
      user,
      login: (u: User) => {
        setUser(u);
        localStorage.setItem("evride:user", JSON.stringify(u));
      },
      logout: () => {
        setUser(null);
        localStorage.removeItem("evride:user");
      },
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
