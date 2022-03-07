import styled from "styled-components/macro";

export const FooterContainerStyled = styled.footer`
  width: 100%;
  height: 100%;
  background-color: #484848;
  display: flex;
  flex-direction: column;
  align-items: center;

  .footer-img {
    height: 90%;
    img {
      height: 100%;
      width: 100%;
    }
  }

  .footer-txt {
    padding: 2em;
    p {
      font-size: clamp(15px, 1.5vw, 20px);
      font-weight: 400;
      color: #fff;
    }
  }
`;
