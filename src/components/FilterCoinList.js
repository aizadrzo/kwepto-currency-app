import React from "react";
import Select from "react-select";

const FilterCoinList = ({ currency, setCurrency }) => {
  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "orange",
        primary: "#484848",
      },
    };
  };

  const currencyOptions = [
    { value: "myr", label: "MYR" },
    // { symbol: "btcusdt", label: "BTC", interval: "1m" },
    { value: "usd", label: "USD" },
    { value: "eur", label: "EUR" },
    { value: "gbp", label: "GBP" },
    { value: "jpy", label: "JPY" },
  ];

  const pickCurrency = (currencyOptions) => {
    setCurrency(currencyOptions.value);
  };
  return (
    <Select
      theme={customTheme}
      options={currencyOptions}
      onChange={pickCurrency}
      placeholder={currency.toUpperCase()}
    />
  );
};

export default FilterCoinList;
