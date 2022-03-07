import styled from "styled-components/macro";
import ReactPaginate from "react-paginate";

export const CoinTableStyled = styled.table`
  font-size: clamp(10px, 1.5vw);
  width: 100%;
  min-width: 375px;
  th,
  td {
    padding: 0.5em;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  th {
    border-bottom: solid 2px #dfe6e9;
    padding: 1em;
  }

  tr {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5em;
  }

  tfoot {
    padding: 1.5em;
  }
  tfoot > tr {
    justify-content: center;
  }

  tbody > tr {
    &:hover {
      background-color: #ecf0f1;
    }
  }

  .rank {
    width: 10%;
    display: grid;
    place-items: center;
  }

  .coin-info {
    min-width: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5em;

    img {
      width: 25px;
      height: auto;
      border-radius: 25px;
    }

    .coin-name {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.25em;
    }

    @media (max-width: 768px) {
      .coin-name {
        flex-direction: column;
        align-items: flex-start;
        gap: 0em;
      }
    }
  }

  .percentage {
    width: 45%;
  }

  .bold {
    font-weight: bolder;
  }

  .coin-percent {
    color: #6ab04c;
  }

  .red {
    color: #eb4d4b;
  }

  .hide-fs {
    display: none;
  }

  strong {
    font-size: clamp(12px, 1vw, 15px);
  }

  p {
    font-size: clamp(10px, 1vw, 12px);
  }

  @media (max-width: 600px) {
    th {
      justify-content: flex-start;
    }
    .visible {
      display: none;
    }

    .hide-mobile {
      display: none;
    }

    .hide-fs {
      display: block;
    }
  }
`;

export const ListHeaderStyled = styled.div`
  border-bottom: solid 2px #dfe6e9;
  display: grid;
  grid-template-columns: 0.25fr 1fr repeat(3, 0.5fr) 1fr;
  align-items: center;
  text-align: right;
  width: 100%;
  min-width: 768px;
  padding: 1em;

  .center {
    place-self: center;
  }

  .visibility {
    visibility: visible;
  }

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 5%repeat (4, 20%);
    .visibility {
      visibility: hidden;
    }
  }
`;

export const PageNumberStyled = styled(ReactPaginate)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  a {
    margin: 0 0.5em;
    &:active {
      color: #f7a528;
    }
  }
`;
