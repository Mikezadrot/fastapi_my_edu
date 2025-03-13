import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Використовуємо logout з контексту

  const handleLogout = () => {
    logout(); // ✅ Викликаємо logout
    navigate("/");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
