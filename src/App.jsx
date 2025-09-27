import "./App.css";

// React Router
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import LoginPage from "./pages/Login/Login";
import DigitalClock from "./components/DigtalWatch/DigtalWatch";
import ProductDetail from "./pages/Home/ProductDetail"


// Layout
import Layout from "./Layouts/Layout";

// Auth Routes
import Private from "./Roots/Private";
import Redirect from "./Roots/Redirected";
import { watchPrvider } from "./components/WatchContext/watchContext";

export default function App() {
  return (
    <>
    <watchPrvider>

    <Routes>
      {/* 🔒 Protected Routes (User must be logged in) */}
      <Route element={<Private />}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clock" element={<DigitalClock />} />
        </Route>
      </Route>

      {/* 🚪 Redirect Routes (If already logged in → redirect to home) */}
      <Route element={<Redirect />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* ❌ Catch All Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </watchPrvider>
    
    </>
  );
}
