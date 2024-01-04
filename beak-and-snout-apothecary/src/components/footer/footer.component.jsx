import React from "react";
import {
  Box,
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  FooterContent,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footer.styles.js";
import Image from "../../assets/logo-small.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogo>
          <img src={Image} alt="footer-img" />
        </FooterLogo>
        <FooterContent>
          <p>Beak & Snout Apothecary</p>
          <p>545 Hooksett Rd Unit #15</p>
          <p>Manchester, NH 03104</p>
        </FooterContent>
      </FooterWrapper>
    </FooterContainer>
  );
};
export default Footer;
