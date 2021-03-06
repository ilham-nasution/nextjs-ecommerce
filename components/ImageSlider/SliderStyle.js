import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Card = styled.div`
  height: 300px;

  p {
    margin: 0;
    font-size: small;
  }

  p:first-of-type {
    font-weight: bold;
    margin: 8px 0px;
  }

  @media (max-width: 1023px) {
    height: 100px;

    p {
      font-size: 10px;
    }
  }
`;

export const Container = styled(Swiper)`
  padding: 80px 40px;
`;

export const CardImage = styled.div`
  position: relative;
  height: 80%;
  box-shadow: 1px 1px 8px -4px black;

  img {
    object-fit: cover;
    border-radius: 4px;
  }
`;
