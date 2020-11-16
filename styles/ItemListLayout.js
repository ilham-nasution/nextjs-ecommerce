import styled from "styled-components";

export const Container = styled.div`
  padding: 120px 72px 24px 72px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 24px;

  h1 {
    max-width: 880px;
    font-weight: normal;
  }

  button {
    background-color: transparent;
    outline: none;
    border: 1px solid gray;
    border-radius: 8rem;
    padding: 8px 24px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  column-gap: 24px;
  row-gap: 24px;
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
