import React from "react";
import { CoinTableStyled } from "../styles/CoinList.styled";

const CoinList = ({ coin, currency }) => {
  const formatCurrency = (price) => {
    let newPrice = 0;
    if (price < 0.99 && price > -1) {
      newPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency.toUpperCase(),
        maximumFractionDigits: 8,
      }).format(price);
    } else {
      newPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency.toUpperCase(),
      }).format(price);
    }
    return newPrice;
  };
  return (
    <CoinTableStyled>
      <tbody>
        <tr>
          <td className="rank">
            <p>{coin.market_cap_rank}</p>
          </td>
          <td className="coin-info">
            <img src={coin.image} alt={coin.name} />
            <div className="coin-name">
              <strong>{coin.name}</strong>
              <p>{coin.symbol.toUpperCase()}</p>
            </div>
          </td>
          <td>
            <p>{formatCurrency(coin.current_price)}</p>
          </td>
          <td className="percentage visible">
            {coin.price_change_percentage_1h_in_currency < 0 ? (
              <p className="coin-percent bold red ">
                {coin.price_change_percentage_1h_in_currency.toFixed(2)}%
              </p>
            ) : (
              <p className="coin-percent bold ">
                {coin.price_change_percentage_1h_in_currency.toFixed(2)}%
              </p>
            )}
          </td>
          <td className="percentage">
            {coin.price_change_percentage_24h_in_currency < 0 ? (
              <p className="coin-percent bold red ">
                {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
              </p>
            ) : (
              <p className="coin-percent bold ">
                {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
              </p>
            )}
          </td>
          <td className="percentage visible">
            {coin.price_change_percentage_7d_in_currency < 0 ? (
              <p className="coin-percent bold red visibility">
                {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
              </p>
            ) : (
              <p className="coin-percent bold visibility">
                {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
              </p>
            )}
          </td>
          <td>
            <p>{formatCurrency(coin.market_cap)}</p>
          </td>
        </tr>
      </tbody>
    </CoinTableStyled>
  );
};

export default CoinList;
