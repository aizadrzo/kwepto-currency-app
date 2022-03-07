import React from "react";
import { CardStyled } from "../styles/TrendList.styled";

const TrendList = ({ rate, trends }) => {
  return (
    <CardStyled>
      <div className="coin-info">
        <img src={trends.item.small} alt={trends.item.name} />
        <div className="coin-name">
          <strong>{trends.item.name}</strong>
          <p>{trends.item.symbol.toUpperCase()}</p>
        </div>
      </div>
      <div className="coin-price">
        <strong>BTC{trends.item.price_btc.toFixed(10)}</strong>
      </div>
    </CardStyled>
  );
};

export default TrendList;
