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
<<<<<<< HEAD
      <NavStyled>
        <SectionStyled>
          <NavLinksStyled>
            <ul>
              <li className="logo">
                <IconLogo />
              </li>
              <li>
                <Link to="/">
                  <p>Currencies</p>
                </Link>
              </li>
              <li>
                <Link to="/exchange">
                  <p>Exchanges</p>
                </Link>
              </li>
              <li>
                <p>News</p>
              </li>
              <li>
                <Link to="/live">
                  <p>Live Tracker</p>
                </Link>
              </li>
            </ul>
          </NavLinksStyled>
        </SectionStyled>
      </NavStyled>
      <NavStyled orange>
        <NavLinksStyled center>
          <SectionStyled>
=======
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
          <li>News</li>
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
>>>>>>> a33e19eacc40d52f1cf969c803b2c030e7803edc
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
