// css
import "../styles/Layout.css"

// components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Outlet
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />

      <main className="main-body-layout">
        <Outlet />
      </main>

      <Footer/>
    </>
  );
}
