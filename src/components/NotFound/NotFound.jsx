import "../../styles/NotFound.css"
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  // Back to home.
  function HandleNotFound() {
    navigate("/");
  }
  
  return (
    <>
      <div className="nav-con">
        <h1 className="not-found">404 - Page Not Found 🚫</h1>
        <p>
          Sorry, the page you are looking for doesn’t exist or may have been
          moved.
        </p>

        <button className="back-home-btn" onClick={HandleNotFound}>
          Go Home
        </button>
      </div>
    </>
  );
}
