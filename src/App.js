import "./App.css";
import BreadCrumbs from "./components/BreadCrumbs";
import CartPage from "./components/CartPage";
import CheckOut from "./components/CheckOut";
import Confirmation from "./components/Confirmation";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import PaymentGateway from "./components/PaymentGateway";
import ProductInfo from "./components/ProductInfo";
import Products from "./components/Products";
import {  Routes, Route, useLocation } from "react-router-dom";
import React,{useState} from "react";
import ForgetPassword from "./components/ForgetPassword";

// const Nav = styled.nav`
//   height: 100px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0px 10px;
//   width: 100%;
//   z-index: 100;
//   /* background-color: red; */
// `;

// const Menu = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   align-items: center;
//   justify-content: center;
// `;

function App() {
  const storedJwt = sessionStorage.getItem("authToken");

  // const isloggedin = () => {
  //   if (storedJwt == undefined) {
  //     return false;
  //   } else return true;
  // };
const [display_breadcrumbs
, setDisplay_breadcrumbs] = useState("none")
const [path, setPath] = useState("/")
  const location = useLocation();
  React.useEffect(() => {
    if (window.location.pathname === "/") {
      setDisplay_breadcrumbs("none");
    } 
    else if (window.location.pathname === "/contact") {
      setDisplay_breadcrumbs("flex");
      setPath("Home/Contact")
      

    }
    else if (window.location.pathname === "/shop") {
      setDisplay_breadcrumbs("flex");
      setPath("Home / shop")
      

    }
    else if (window.location.pathname === "/single-product") {
      setDisplay_breadcrumbs("flex");
      setPath("Home / shop / Product ")
      

    }
    else if (window.location.pathname === "/checkout") {
      setDisplay_breadcrumbs("flex");
      setPath("Home / Cart / Checkout ")
      

    }
    else if (window.location.pathname === "/payment-gateway") {
      setDisplay_breadcrumbs("flex");
      setPath("Home / Cart / Checkout / Payment Gateway ")
      

    }
    else if (window.location.pathname === "/after-payment") {
      setDisplay_breadcrumbs("flex");
      setPath("Home / Cart / Checkout / Payment Gateway / successful")
      

    }
    else if (window.location.pathname === "/my-account") {
      setDisplay_breadcrumbs("flex");
      setPath("Home / Profile")
      

    }
    else if (window.location.pathname === "/cart") {
      setDisplay_breadcrumbs("flex");
      setPath("Home / Cart")
      

    }
    else if (window.location.pathname === "/forgetpassword") {
      setDisplay_breadcrumbs("flex");
      setPath("Home / forgot password")
      

    }
    else {
      setDisplay_breadcrumbs("flex");
    }
  }, [location]);

  return (
    <div className="">
      <Navbar />
      <BreadCrumbs display={display_breadcrumbs} path={path} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {<Route exact path="/shop" element={<Products />} />}
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/single-product" element={<ProductInfo />} />
        <Route exact path="/checkout" element={<CheckOut />} />
        <Route exact path="/payment-gateway" element={<PaymentGateway />} />
        <Route exact path="/my-account" element={<Order />} />
        <Route exact path="/after-payment" element={<Confirmation />} />
        <Route exact path="/forgetpassword" element={<ForgetPassword />} />

      </Routes>

 
      <Footer />
    </div>
  );
}

export default App;
