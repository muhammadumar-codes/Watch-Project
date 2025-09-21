import "./NotFound.css"

export default function NotFound(){
    return (
        <>
           <div className="nav-con">
        <h1 className="not-found">404 - Page Not Found 🚫</h1>
        <p>
          Sorry, the page you are looking for doesn’t exist or may have been
          moved.
        </p>

        <button  className="back-home-btn">
          Go Home
        </button>
      </div>
      
        </>
    )
}