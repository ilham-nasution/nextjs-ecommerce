import styled from "styled-components";

export const Card = styled.a`
  height: 240px;

  p {
    font-size: smaller;
  }

  @media (min-width: 1024px) {
    height: 560px;

    p {
      font-size: 16px;
    }
  }
`;

export const CardImage = styled.div`
  position: relative;
  height: 70%;
  box-shadow: 1px 1px 8px -4px black;

  img {
    object-fit: cover;
    border-radius: 4px;
  }
`;
