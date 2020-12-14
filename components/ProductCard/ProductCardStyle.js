import styled from "styled-components";

export const Card = styled.a`
  height: 480px;
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
