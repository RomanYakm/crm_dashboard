import React from "react";
import "./App.scss";
import SideMenu from "./SideMenu";
import Product from "./Product";

export const App = () => {
  return (
    <React.Fragment>
      <SideMenu />
      <Product />
    </React.Fragment>
  );
};

export default App;
