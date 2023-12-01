import React from "react";
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const LayoutPage = () => {
  return (
    <>
      <LeftAside />
      <Outlet />
      <RightAside />
      <Footer />
    </>
  );
};

export default LayoutPage;
