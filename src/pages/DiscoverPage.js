import React, { useEffect } from "react";
import { SectionStyled, WrapperStyled } from "../styles/Main.styled";
import axios from "axios";
import { Link } from "react-router-dom";
import { CurrencyContainerStyled } from "../styles/CoinCard.styled";
import DiscoverCard from "../components/DiscoverCard";
import CoinCard from "../components/CoinCard";
import {
  DiscoverHeaderStyled,
  DiscoverTitleStyled,
  RealTimeContainerStyled,
} from "../styles/Discover.styled";
import TrendingImg from "../assets/Trending.svg";
import BTCIcon from "../assets/BTC.svg";
import ETHIcon from "../assets/ETH.svg";
import XRPIcon from "../assets/XRP.svg";
import useState from "react-usestateref";

const DiscoverPage = ({ setLoading, currency, formatCurrency }) => {
  const [trendCoins, setTrendCoins] = useState([]);
  const [gainCoins, setGainCoins] = useState([]);

  const getTrendCoins = async () => {
    await axios
      .get(`https://api.coingecko.com/api/v3/search/trending`)
      .then((res) => {
        setTrendCoins(res.data.coins);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get Trending Coins
  useEffect(async () => {
    setLoading(true);
    getTrendCoins();
    setLoading(false);
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=8&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d
  `
      )
      .then((res) => {
        setGainCoins(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [btcPrice, setBtcPrice, refBtcPrice] = useState(0);
  const [ethPrice, setEthPrice, refEthPrice] = useState(0);
  const [xrpPrice, setXrpPrice, refXrpPrice] = useState(0);

  // Get Current Price For Currencies
  useEffect(() => {
    console.log("open connection");
    var ws = new WebSocket(
      "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,xrp"
    );

    ws.onopen = () => {
      console.log("connection is on");
    };

    ws.onmessage = (msg) => {
      var data = JSON.parse(msg.data);
      console.log(data);
      var btcCoinPrice = data.bitcoin;
      var ethCoinPrice = data.ethereum;
      var xrpCoinPrice = data.xrp;

      if (data.bitcoin) {
        setBtcPrice(btcCoinPrice);
      }

      if (data.ethereum) {
        setEthPrice(ethCoinPrice);
      }

      if (data.xrp) {
        setXrpPrice(xrpCoinPrice);
      }
    };

    return () => {
      console.log("close connection");
      ws.close();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <SectionStyled>
        <WrapperStyled>
          <DiscoverHeaderStyled>
            <img src={TrendingImg} alt="trending" />
            <div className="title-container">
              <h1>DISCOVER</h1>
              <p>Real time prices and Trending currencies</p>
            </div>
          </DiscoverHeaderStyled>
          <WrapperStyled>
            <RealTimeContainerStyled>
              <Link to="/livegraph">
                <div className="realtime-card hover">
                  <img src={BTCIcon} alt="bitcoin" />
                  <div className="price-column">
                    <strong>BTC</strong>

                    <p>$ {refBtcPrice.current}</p>
                  </div>
                </div>
              </Link>
              <div className="realtime-card">
                <img src={ETHIcon} alt="ethereum" />
                <div className="price-column">
                  <strong>ETH</strong>

                  <p>$ {refEthPrice.current}</p>
                </div>
              </div>
              <div className="realtime-card">
                <img src={XRPIcon} alt="xrp" />
                <div className="price-column">
                  <strong>XRP</strong>

                  <p>$ {refXrpPrice.current}</p>
                </div>
              </div>
            </RealTimeContainerStyled>
          </WrapperStyled>
          <DiscoverTitleStyled>
            <h1>Trending Coin</h1>
          </DiscoverTitleStyled>
          <CurrencyContainerStyled>
            {trendCoins.map((coin, i) => (
              <Link to={`/currencies/${coin.item.id}`}>
                <DiscoverCard
                  key={i}
                  coin={coin}
                  currency={currency}
                  formatCurrency={formatCurrency}
                />
              </Link>
            ))}
          </CurrencyContainerStyled>
          <DiscoverTitleStyled>
            <h1>Top Coins Based Volume</h1>
          </DiscoverTitleStyled>
          <CurrencyContainerStyled>
            {gainCoins.map((coin, i) => (
              <Link to={`/currencies/${coin.id}`}>
                <CoinCard coin={coin} key={i} formatCurrency={formatCurrency} />
              </Link>
            ))}
          </CurrencyContainerStyled>
        </WrapperStyled>
      </SectionStyled>
    </div>
  );
};

export default DiscoverPage;
