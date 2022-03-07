import React from "react";
import FooterImg from "../assets/FooterImg.svg";
import { FooterContainerStyled } from "../styles/Footer.styled";
const Footer = () => {
  return (
    <FooterContainerStyled>
      <div className="footer-img">
        <img src={FooterImg} alt="Footer" />
      </div>
      <div className="footer-txt">
        <p>© 2022 Kwepto. All rights reserved</p>
      </div>
    </FooterContainerStyled>
  );
};

export default Footer;
