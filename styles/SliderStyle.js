import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Card = styled.div`
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    margin: 0;
    font-size: small;
  }

  p:first-of-type {
    font-weight: bold;
    margin: 8px 0px;
  }
`;

export const Container = styled(Swiper)`
  padding: 80px 40px;
`;
