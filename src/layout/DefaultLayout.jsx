import React from "react";
import Footer from "../components/Footer";
// import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
