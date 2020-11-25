import styled from "styled-components";

export const Container = styled.div`
  padding: 88px 56px 56px 56px;
`;

export const Row = styled.div`
  display: flex;
  flex-basis: 15%;
  flex-wrap: wrap;
  justify-content: space-between;

  a {
    height: 40px;
  }
`;

export const CartTable = styled.div`
  flex-basis: 85%;

  @media (max-width: 1023px) {
    flex-basis: 100%;
  }
`;

export const TableHead = styled.div`
  display: flex;
  border-bottom: 2px solid black;
  p {
    width: 250px;
  }

  @media (max-width: 1023px) {
    p {
      display: none;
    }

    p:first-of-type {
      display: block;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p {
    width: 320px;
    text-align: right;
    border-bottom: 1px solid rgb(221, 221, 221);
    padding-bottom: 16px;
    font-size: smaller;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 320px;

    h4 {
      margin-top: 0;
    }
  }
`;
