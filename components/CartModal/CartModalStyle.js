import styled from "styled-components";

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  section {
    display: flex;
    img {
      margin-right: 8px;
    }
  }

  p {
    font-size: small;
    margin: 0;
    margin-bottom: 4px;
  }
`;

export const Subtotal = styled.div`
  border-top: 1px solid rgb(221, 221, 221);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-top: 16px;

  p {
    font-weight: bold;
  }
`;
