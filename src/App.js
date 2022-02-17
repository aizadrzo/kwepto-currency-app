import axios from "axios";
import React, { useState, useEffect } from "react";
import MainSection from "./components/MainSection";
import SideBar from "./components/SideBar";
import { AppContainerStyled } from "./styles/Main.styled";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C24h`
      )
      .then((res) => {
        console.log(res.data);
        setCoins(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currency]);

  return (
    <AppContainerStyled>
      <SideBar />
      <MainSection coins={coins} setCurrency={setCurrency} />
    </AppContainerStyled>
  );
};

export default App;
