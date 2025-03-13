import "./Home.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button.jsx";

const Home = () => {
    const { logout } = useAuth(); // Використовуємо логіку виходу
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("access");
                if (!token) {
                    throw new Error("Not authenticated");
                }

                const response = await fetch("http://127.0.0.1:8000/api/me/", {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (!response.ok) throw new Error("Failed to fetch user data");

                const data = await response.json();
                setUser(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchUser();
    }, []);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    if (error) return <p>Error: {error}</p>;
    if (!user) return <p>Loading...</p>;

    return (
        <div className="home-container">
            <div className="user-info">
                <h2>Welcome, {user.username}</h2>
                <p>Email: {user.email}</p>
                <Button className="logout-button" onClick={handleLogout}>Logout</Button>
            </div>
        </div>
    );
};

export default Home;
