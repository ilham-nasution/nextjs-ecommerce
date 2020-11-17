import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: black;
  padding: 16px 40px;
  border-radius: 4px;
  color: whitesmoke;
  border: none;
  outline: none;
  font-size: small;
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;
