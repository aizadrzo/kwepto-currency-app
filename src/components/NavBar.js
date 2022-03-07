import React, { useState } from "react";
import {
  NavContainerStyled,
  NavLinksStyled,
  CrytoMarketStyled,
} from "../styles/NavBar.styled";
import Logo from "../assets/LogoImg.svg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import FilterCoinList from "./FilterCoinList";

const NavBar = ({ data, currency, setCurrency }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <NavContainerStyled>
      <NavLinksStyled>
        <div className="logo">
          <img src={Logo} alt="kwepto" />
        </div>
        <ul className="links">
          <Link to="/">
            <li>Currencies</li>
          </Link>
          <Link to="/exchange">
            <li>Exchanges</li>
          </Link>
          <Link to="/news">
            <li>News</li>
          </Link>
          <Link to="/live">
            <li>Live Graph</li>
          </Link>
          <li>Watch List</li>
          <div className="end">
            <FilterCoinList currency={currency} setCurrency={setCurrency} />
          </div>
        </ul>
        <div className="responsive">
          <button className="responsie burger">
            <GiHamburgerMenu onClick={toggleNav} />
          </button>
          {toggleMenu && (
            <ul>
              <Link to="/">
                <li>Currencies</li>
              </Link>
              <Link to="/exchange">
                <li>Exchanges</li>
              </Link>
              <li>News</li>
              <li>Watch List</li>
            </ul>
          )}
        </div>
      </NavLinksStyled>
      <CrytoMarketStyled>
        <li>
          <p>
            Cryptos : <span>{data.active_cryptocurrencies}</span>
          </p>
        </li>
        <li>
          <p>
            Markets : <span>{data.markets}</span>
          </p>
        </li>
        <li>
          <p>
            Market Cap: <span>$1,707,443,014,522</span>
            {/* Market Cap: <span>{data.total_market_cap.usd}</span> */}
          </p>
        </li>
        <li>
          <p>
            24h Vol: <span>$83,173,623,418</span>
          </p>
        </li>
      </CrytoMarketStyled>
    </NavContainerStyled>
  );
};

export default NavBar;
