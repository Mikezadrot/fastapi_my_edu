import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Logout from "./pages/Logout/Logout.jsx";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";

function AppContent() {
  const { isAuthenticated } = useAuth(); // Використовуємо контекст

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Login />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
