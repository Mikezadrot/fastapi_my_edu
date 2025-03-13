import { createContext, useContext, useState, useEffect } from "react";

// Створюємо контекст
const AuthContext = createContext();

// Провайдер, який буде "огортати" наш додаток
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access");
    setIsAuthenticated(!!token);
  }, []);

  // Функція логіну
  const login = (accessToken, refreshToken) => {
    localStorage.setItem("access", accessToken);
    localStorage.setItem("refresh", refreshToken);
    setIsAuthenticated(true);
  };

  // Функція виходу
  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Хук для використання контексту
export const useAuth = () => useContext(AuthContext);
