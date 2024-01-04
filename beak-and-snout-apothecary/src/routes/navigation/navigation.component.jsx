import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Image from "../../assets/logo.png";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation.styles.jsx";

const Navigation = () => {
  // console.log(currentUser);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={Image} alt="img" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/about">ABOUT US</NavLink>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/contact">CONTACT US</NavLink>
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
