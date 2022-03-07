import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CenterEverythingStyled,
  HeaderStyled,
  SectionStyled,
  WhiteBgStyled,
} from "../styles/Main.styled";
import TrendList from "./TrendList";
import { CardContainerStyled } from "../styles/TrendList.styled";
import Marquee from "react-fast-marquee";

const NowTrending = () => {
  const [trend, setTrend] = useState([]);

  // Get trending coins
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/search/trending`)
      .then((res) => {
        setTrend(res.data.coins);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <WhiteBgStyled>
      <HeaderStyled>
        <h1>TRENDING COINS</h1>
        <p>Trending coins that people are searching for</p>
      </HeaderStyled>
      <CenterEverythingStyled>
        <Marquee duration={50000} height="20vh" width="55vw" reverse={true}>
          <CardContainerStyled>
            {trend.map((trends) => (
              <TrendList key={trends.coin_id} trends={trends} />
            ))}
          </CardContainerStyled>
        </Marquee>
      </CenterEverythingStyled>
    </WhiteBgStyled>
  );
};

export default NowTrending;
