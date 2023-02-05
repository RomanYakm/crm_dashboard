import React, { useState } from "react";
import "./App.scss";
import SideMenu from "./components/SideMenu";
import Product from "./components/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers";
import Income from "./components/Income";
import Promote from "./components/Promote";
import Help from "./components/Help";

export const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <BrowserRouter>
      <React.Fragment>
        <SideMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <Routes>
          <Route exact path="/customers" element={<Product setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />} />
          <Route exact path="/product" element={<Customers />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/income" element={<Income />} />
          <Route exact path="/promote" element={<Promote />} />
          <Route exact path="/help" element={<Help />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
