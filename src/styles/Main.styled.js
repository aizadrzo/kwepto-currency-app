import styled from "styled-components/macro";

// Base Style for App
export const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

// Base Style for NavBar
export const NavStyled = styled.nav`
  grid-row-start: 1;
`;

// Base style for MainSection
export const BodyStyled = styled.div`
  grid-row-start: 2;
  margin-inline: auto;
  width: 100%;
`;

// Base style for Footer
export const FooterStyled = styled.footer`
  grid-row-start: 3;
  margin-top: 2em;
`;

// For headers and big text
export const HeaderStyled = styled.div`
  text-align: center;
  margin-bottom: 1.5em;
  line-height: 1.2;
  h1 {
    font-size: clamp(35px, 5.5vw, 50px);
    font-weight: 800;
  }
  p {
    font-size: clamp(18px, 2.5vw, 25px);
    font-weight: 400;
  }
`;

// Loading Screen Style
export const LoadingScreenStyled = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

  h1 {
    font-size: 3rem;
  }
`;

// Apply card-style background with shadow
export const CardStyled = styled.div`
  padding: 1em;
  border-radius: 25px;
  border: 2.5px solid #484848;
  width: auto;
  background-color: #fff;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

// To give center text and items within a component
export const SectionStyled = styled.section`
  margin-inline: auto;
  max-width: 1028px;
  margin-top: 2em;
`;

// Center Everyhthing
export const CenterEverythingStyled = styled.div`
  display: grid;
  place-items: center;
`;
