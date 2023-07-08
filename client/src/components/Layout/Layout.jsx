import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div style={{background: "var(--black)", overflow: "hidden"}}>
        <Header />
        <Outlet/>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
