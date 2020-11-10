import styled from "styled-components";

const StyledButton = styled.button`
  background-color: black;
  padding: 16px 40px;
  border-radius: 4px;
  color: whitesmoke;
  border: none;
  outline: none;
  font-size: small;
`;

const Button = ({ children, handleClick }) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export default Button;
