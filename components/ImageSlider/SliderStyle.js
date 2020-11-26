import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Card = styled.div`
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 1px 1px 8px -4px black;
  }

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
