import React from "react";
import { Nav, NavMenu } from "./NavbarElements";
import {  Link } from "react-router-dom";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <Link to = '/Login'>Login</Link>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;