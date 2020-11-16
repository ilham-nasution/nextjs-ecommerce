import styled from "styled-components";

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
  border-bottom: 1px solid rgb(221, 221, 221);
  padding-bottom: 8px;

  img {
    margin-right: 4px;
  }

  p {
    font-size: smaller;
    width: 250px;
  }
`;

export const DeleteBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  padding: 0;
`;
