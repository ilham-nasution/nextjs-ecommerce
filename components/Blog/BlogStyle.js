import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 40px 24px;
`;

export const Card = styled.div`
  padding: 16px;

  img {
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 1px 1px 8px -4px black;
  }

  p {
    font-size: small;
  }

  p:first-of-type {
    font-weight: bold;
    margin: 8px 0px;
  }
`;

export const CardImage = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
`;
