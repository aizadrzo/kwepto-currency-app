import React from "react";
import { NavStyled, NavLinksStyled } from "../styles/NavBar.styled";
import { Link } from "react-router-dom";
import { NavContainerStyled, SectionStyled } from "../styles/Main.styled";
import IconLogo from "../iconComponents/IconLogo";

const NavBar = () => {
  return (
    <NavContainerStyled>
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
            <ul>
              <li>
                <p>
                  Cryptos: <span>17,200</span>
                </p>
              </li>
              <li>
                <p>
                  Exchanges: <span>482</span>
                </p>
              </li>
              <li>
                <p>
                  Market Cap: <span>$1,707,443,014,522</span>
                </p>
              </li>
              <li>
                <p>
                  24h Vol: <span>$83,173,623,418</span>
                </p>
              </li>
            </ul>
          </SectionStyled>
        </NavLinksStyled>
      </NavStyled>
    </NavContainerStyled>
  );
};

export default NavBar;
