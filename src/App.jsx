import React, { useState } from "react";
import ReactDOM from "react-dom";
import "tailwindcss/tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "marketadmin/Admin";
import "./index.scss";
import Products from "./views/products";
import Navbar from "./components/navbar";
import MarketCart from "marketcart/MarketCart";



const App = () => {
  const [cart, setCart] = useState([]); // Move useState outside of the JSX element

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products setCart={setCart} />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/cart' element={<MarketCart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
