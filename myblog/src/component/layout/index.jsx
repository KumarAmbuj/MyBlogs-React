import React from "react";
import NavBar from "../Navbar";
import SearchBar from "../SearchBar";
import FooterNavbar from "../FooterNavbar";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  const { user, updateUser } = props;
  return (
    <>
      <NavBar user={user} updateUser={updateUser} />
      <SearchBar user={user} />
      <Outlet />
      <FooterNavbar user={user} />
    </>
  );
};

export default Layout;
