import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

// handle Reload
const handleReload =()=>{
  window.location.reload();

}



  const [Users, SetUsers] = useState([]);
  const [isLoading, SetLoading] = useState(true);
  const [isError, SetError] = useState(false);

  // ✅ Fetch all registered users when component loads
  useEffect(() => {
    async function fetchUsers() {
      try {
     const response = await axios.get(import.meta.env.VITE_USERS_ENDPOINT);
        

        SetUsers(response.data);
        console.log(response.data)
        SetLoading(false);
      } catch (error) {
        console.log(error);
        SetError(true);
        SetLoading(false);
      }
    }
    
    fetchUsers();

    
  }, []);

  // ✅ Handle form submit
  const HandleSubmit = (e) => {
    e.preventDefault();

    const ID = e.target.ID.value;
    const username = e.target.username.value;

    const user = Users.find(
      (item) => item.id === Number(ID) && item.name === username
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      console.log("✅ Logged In:", user);
      navigate("/");
    } else {
      alert("❌ You must be registered first!");
    }

    e.target.reset();
  };

  // ✅ Loader and Error UI
  if (isLoading) return <h1>⏳ Loading...</h1>;
  if (isError) return <>
 <div className="error-container">
   <h1>⚠️ Something went wrong!Check Internet Connection</h1>
  <button onClick={handleReload}>Refresh</button>
 </div>
  </>

  return (
    <div className="form-container">
      <div className="login-container">
        <form className="login-form" onSubmit={HandleSubmit}>
          <h2>Login</h2>

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
      </div>
    </div>
  );
}
