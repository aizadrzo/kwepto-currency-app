import styled from "styled-components/macro";

export const TrendingCointainerStyled = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 1.5em 0em;

  .flex {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .trending-img {
    width: 30%;
    min-width: 250px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .trending-content {
    width: 70%;
  }

  @media (max-width: 800px) {
    .flex {
      flex-direction: column;
    }
    .trending-content {
      width: 100%;
      height: 90%;
    }
    .trending-img {
      height: auto;
    }
  }
`;

export const CardContainerStyled = styled.div`
  display: flex;
  padding: 1em 0;
  flex-flow: nowrap;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 100%;
`;

export const CardStyled = styled.div`
  width: clamp(150px, 12vw, 300px);
  height: 5rem;
  min-height: 3.75rem;
  padding: 1.5em 2.5em;
  gap: 0.5em;
  background: #ffffff;
  border: 2.5px solid #484848;
  border-radius: 25px;
  margin-left: 2em;
  display: flex;
  align-items: center;
  flex-flow: wrap;
  justify-content: flex-start;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

  .coin-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8em;
    img {
      width: 35px;
      height: auto;
      border-radius: 25px;
    }
  }

  .coin-name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.5;

    strong {
      font-size: clamp(12px, 1.5vw, 18px);
    }

    p {
      font-size: clamp(10px, 1.5vw, 12px);
      font-weight: 100;
    }
  }

  .coin-price {
    margin-top: 0.15em;
    font-size: clamp(18px, 1.5vw, 20px);
  }
`;
