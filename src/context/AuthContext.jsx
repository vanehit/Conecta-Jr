import { createContext, useContext, useMemo, useState } from "react";
import {
  clearAuthSession,
  getAuthSession,
  saveAuthSession,
} from "../hooks/authSession";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(getAuthSession);

  const login = ({ token, userId, userName = null }) => {
    saveAuthSession({ token, userId, userName });
    setSession({ token, userId, userName });
  };

  const logout = () => {
    clearAuthSession();
    setSession({ token: null, userId: null, userName: null });
  };

  const value = useMemo(
    () => ({
      token: session.token,
      userId: session.userId,
      userName: session.userName,
      isAuthenticated: Boolean(session.token),
      login,
      logout,
    }),
    [session],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
