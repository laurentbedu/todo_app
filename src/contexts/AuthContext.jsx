import { createContext, useState, useMemo } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState(null);
  const authMemo = useMemo(() => ({ auth, setAuth }), [auth]);

  return (
    <AuthContext.Provider value={authMemo}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };