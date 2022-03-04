import axios from "axios";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PriceTracker from "./pages/PriceTracker";
import CoinPage from "./pages/CoinPage";
import Exchange from "./pages/Exchange";
import { AppContainerStyled, MainContainerStyled } from "./styles/Main.styled";
import Footer from "./components/Footer";
import LiveGraphPage from "./pages/LiveGraphPage";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("myr");
  const [loading, setLoading] = useState(false);

  // Get all coins
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      )
      .then((res) => {
        setCoins(res.data.slice(0, 100));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currency]);

  return (
    <AppContainerStyled>
      <NavBar />
      <MainContainerStyled>
        <Routes>
          <Route
            path="/"
            element={
              <PriceTracker
                loading={loading}
                coins={coins}
                currency={currency}
                setCurrency={setCurrency}
              />
            }
          />
          <Route path=":coinid" element={<CoinPage />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/live" element={<LiveGraphPage />} />
        </Routes>
      </MainContainerStyled>
      <Footer />
    </AppContainerStyled>
  );
};

export default App;
