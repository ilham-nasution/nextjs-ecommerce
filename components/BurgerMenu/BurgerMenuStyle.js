import styled from "styled-components";

export const BurgerMenu = styled.button`
  @media (min-width: 1023px) {
    display: none;
  }
  background-color: transparent;
  border: none;

  div {
    width: 32px;
    height: 4px;
    background-color: black;
    margin: 4px 0;
  }
`;
