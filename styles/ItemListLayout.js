import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 80px 24px 80px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 24px;

  h1 {
    max-width: 60vw;
    font-weight: normal;
  }

  button {
    background-color: transparent;
    outline: none;
    border: 1px solid gray;
    border-radius: 8rem;
    padding: 8px 24px;
  }

  @media (max-width: 1023px) {
    h1 {
      font-size: 20px;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  row-gap: 24px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`;

export const NoProductAlert = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  h1 {
    text-align: center;
  }
  a {
    color: blue;
  }
`;
