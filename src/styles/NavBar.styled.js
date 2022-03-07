import styled from "styled-components/macro";

export const NavContainerStyled = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;

  li {
    font-size: clamp(12px, 5vw, 18px);
  }
`;

export const NavLinksStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  padding: 1em;

  .logo {
    max-width: 5.5vw;
    min-width: 100px;
    margin-right: 1em;
  }

  img {
    height: 100%;
    width: 100%;
  }

  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  .end {
    position: absolute;
    right: 0px;
    margin: 0 1em;
  }

  .responsive {
    display: none;
  }

  ul {
    gap: 1.5em;
  }

  li {
    font-size: 1.2em;
  }

  @media (max-width: 800px) {
    padding: 0;
    justify-content: space-between;
    align-items: center;
    .logo {
      margin: 2rem;
    }
    .links {
      display: none;
    }
    .responsive {
      display: block;
      margin: 2rem;
      z-index: 1;

      .burger {
        font-size: 45px;
        color: #484848;
      }

      ul {
        margin: 0;
        position: absolute;
        top: 120px;
        right: 0;
        width: 100%;
        height: 90vh;
        background-color: #484848;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
      li {
        color: #fff;
        font-size: 1.25rem;
        font-weight: 800;
        padding: 0 2em;

        &:hover {
          color: #f7a528;
        }
      }
    }
  }
`;

export const CrytoMarketStyled = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  background-color: #f7a528;
  padding: 1em;

  span {
    color: #fff;
    font-weight: bolder;
  }

  p {
    font-size: clamp(12px, 2vw, 15px);
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
