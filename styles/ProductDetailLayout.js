import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledSwiper = styled(Swiper)`
  height: 100vh;
  width: 60%;
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const ProductDetail = styled.div`
  padding: 88px;
  width: 40%;

  p {
    line-height: 24px;
  }
  form {
    margin-top: 56px;
    label {
      font-size: small;
    }
  }

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  padding: 10px 8px;
  margin: 8px 0;
  outline: none;
  border: 1px solid rgb(221, 221, 221);
`;

export const Button = styled.button`
  background-color: black;
  padding: 16px 40px;
  border-radius: 4px;
  color: whitesmoke;
  border: none;
  outline: none;
  font-size: small;
  width: 100%;
`;
