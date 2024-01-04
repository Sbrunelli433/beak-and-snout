// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
  padding: 5% 2.5%;
  background: black;
  // position: absolute;
  bottom: 0;
  width: 95%;

  @media (max-width: 1000px) {
    // padding: 70px 30px;
  }
`;

export const FooterContainer = styled.div`
  background-color: black;
  padding: 65px 0 10px 0;
  width: 100%;
  margin: auto;
  color: white;

`;

export const FooterWrapper = styled.div`
  display: block;
`;
export const FooterLogo = styled.div`
  width: 15%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  position: static;
`;

export const FooterContent = styled.p`
  clear: none;
  color: var(--white-smoke);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  font-weight: 700;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
