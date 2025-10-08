import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  
  const handleReload = () => window.location.reload();


  useEffect(() => {
    async function fetchUsers() {
      try {
        const userApiUrl = import.meta.env.VITE_USERS_API_URL;
        const response = await axios.get(`${userApiUrl}/users`);
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const ID = e.target.ID.value.trim();
    const username = e.target.username.value.trim();

    const user = users.find(
      (item) =>
        item.id === Number(ID) && item.name.toLowerCase() === username.toLowerCase()
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");
    } else {
      alert("❌ Invalid credentials! Please check your ID or Username.");
    }

    e.target.reset();
  };

  // 🌀 Loader & Error UI
  if (isLoading) return <h1 className="loading">⏳ Loading...</h1>;

  if (isError)
    return (
      <div className="error-container">
        <h1>⚠ Something went wrong! Please check your internet.</h1>
        <button onClick={handleReload}>🔄 Refresh</button>
      </div>
    );

  return (
    <div className="form-container">
      <div className="login-container">
        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Login to continue to your dashboard</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ID</label>
            <input type="number" placeholder="Enter your ID" required id="ID" />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your Username"
              required
              id="username"
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="register-link">
          Don’t have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}