import React, { useState } from "react";
import BannerImg from "../assets/BannerImg.svg";
import { BannerContainer, HomeContainer } from "../styles/Banner.styled";
import "animate.css";

const Banner = () => {
  return (
    <HomeContainer>
      <BannerContainer>
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="banner-txt"
        >
          <h1>KWEPTO</h1>
          <p>ALL YOUR COINS UNDER ONE ROOF</p>
        </div>
        <div data-aos="zoom-in" data-aos-duration="500" className="banner-img">
          <img src={BannerImg} alt="banner" />
        </div>
      </BannerContainer>
    </HomeContainer>
  );
};

export default Banner;
