import React from "react";
import BannerImg from "../assets/BannerImg.svg";
import { SectionStyled } from "../styles/Main.styled";
import { BannerContainer } from "../styles/Banner.styled";

const Banner = () => {
  return (
    <SectionStyled>
      <BannerContainer>
        <div className="banner-txt">
          <h1>KWEPTO</h1>
          <p>ALL YOUR COINS UNDER ONE ROOF</p>
        </div>
        <div className="banner-img">
          <img src={BannerImg} alt="banner" />
        </div>
      </BannerContainer>
    </SectionStyled>
  );
};

export default Banner;
