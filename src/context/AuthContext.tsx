// context/AuthContext.tsx
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setTokenState] = useState<string | null>(null);

  useEffect(() => {
    // Load token from localStorage on app load if available
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setTokenState(storedToken);
    }
  }, []);

  const setToken = (token: string | null) => {
    setTokenState(token);
    localStorage.setItem("authToken", token ?? "");
  };

  const logout = () => {
    setTokenState(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ token, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
