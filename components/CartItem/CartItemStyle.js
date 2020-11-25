import styled from "styled-components";

export const CartItem = styled.div`
  display: flex;
  flex-wrap: wrap;
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

  @media (max-width: 1023px) {
    width: 100%;

    p {
      display: none;
    }
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  font-size: smaller;

  @media (max-width: 1023px) {
    p {
      display: block;
    }
  }
`;

export const ProductDetail = styled.div`
  p {
    margin: 2px 0;
    display: none;
  }

  p:first-child {
    display: block;
  }

  @media (max-width: 1023px) {
    p {
      display: block;
    }
  }
`;

export const DeleteBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  padding: 0;
`;
