import "../styles/Exchange.css";
import React, { useState, useEffect } from "react";
import Select from "react-select";

const cryptoOptions = [
  { value: "BTC", label: "BTC" },
  { value: "ETH", label: "ETH" },
  { value: "ADA", label: "ADA" },
  { value: "DOGE", label: "DOGE" },
  { value: "XRP", label: "XRP" },
  { value: "LTC", label: "LTC" },
  { value: "BNB", label: "BNB" },
];

const fiatOptions = [
  { value: "USD", label: "USD" },
  { value: "CAD", label: "CAD" },
  { value: "JPY", label: "JPY" },
  { value: "MYR", label: "MYR" },
];

function Exchange() {
  const [amount, setAmount] = useState(1);
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0]);
  const [selectedFiat, setSelectedFiat] = useState(fiatOptions[0]);

  const [selectedCryptoData, setSelectedCryptoData] = useState({});

  const [isInitialCrypto, setIsInitialCrypto] = useState(true);

  useEffect(() => {
    fetch(
      "https://coinlib.io/api/v1/coin?key=327b62b12af4dc20&pref=" +
        selectedFiat.value +
        "&symbol=" +
        selectedCrypto.value
    )
      .then((response) => response.json())
      .then((data) => setSelectedCryptoData(data));
  }, [selectedCrypto, selectedFiat]);

  const calcResult = () => {
    if (isInitialCrypto) {
      let test = amount * selectedCryptoData.price;
      return test.toLocaleString();
    } else {
      let test = amount * (1 / selectedCryptoData.price);
      return test.toLocaleString();
    }
  };

  const onChangeCrypto = (crypto) => {
    setSelectedCrypto(crypto);
  };
  const onChangeFiat = (fiat) => {
    setSelectedFiat(fiat);
  };

  return (
    <div className="root">
      <div className="container">
        <h1 className="title">SWAP </h1>
        <div className="selectContainer">
          <Select
            className="basic-single"
            classNamePrefix="select"
            isSearchable
            defaultValue={isInitialCrypto ? cryptoOptions[0] : fiatOptions[0]}
            onChange={
              isInitialCrypto
                ? (e) => onChangeCrypto(e)
                : (e) => onChangeFiat(e)
            }
            options={isInitialCrypto ? cryptoOptions : fiatOptions}
            value={isInitialCrypto ? selectedCrypto : selectedFiat}
          />
          <img
            className="swap-img"
            src={require("../assets/swap_3.png")}
            alt="swap"
            onClick={() => setIsInitialCrypto(!isInitialCrypto)}
          />
          <Select
            className="basic-single"
            classNamePrefix="select"
            isSearchable
            defaultValue={!isInitialCrypto ? cryptoOptions[0] : fiatOptions[0]}
            onChange={
              !isInitialCrypto
                ? (e) => onChangeCrypto(e)
                : (e) => onChangeFiat(e)
            }
            options={!isInitialCrypto ? cryptoOptions : fiatOptions}
            value={!isInitialCrypto ? selectedCrypto : selectedFiat}
          />
        </div>

        <form className="inputContainer">
          <label>
            Enter your amount:
            <input
              className="input"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </form>

        <div className="result">{calcResult()}</div>
      </div>
    </div>
  );
}

export default Exchange;
