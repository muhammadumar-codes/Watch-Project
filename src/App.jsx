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
import ProductCardDetail from "./pages/Home/ProductDetail"
import CartPage from  "./pages/CartPage/CartPage"


// Watch DataProvider
import DataContextProvider from "./context/Datacontext"
import  CartContextProvider from "./context/cartContext"

// Layout
import Layout  from "./layout/Layout"

// Auth Routes
import Private from "./routes/Private";
import Redirect from "./routes/Redirected";



export default function App() {
  return (
    <>
      {/* it is providing the context data  to app */}
    <CartContextProvider>
    <DataContextProvider>

    <Routes>
      {/*  Protected Routes (User must be logged in) */}
      <Route element={<Private />}>
      {/* it provide the layout to al user */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/productDetail/:id" element={<ProductCardDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clock" element={<DigitalClock />} />
          <Route path="/Cart" element={<CartPage />} />
        </Route>
      </Route>

      {/*  Redirect Routes (If already logged in → redirect to home) */}
      <Route element={<Redirect />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/*  Catch All Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </DataContextProvider>
    </CartContextProvider>
    
    </>
  );
}
