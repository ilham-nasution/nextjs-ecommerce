import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 40px 24px;
`;

export const Card = styled.div`
  height: 500px;
  padding: 16px;

  img {
    height: 100%;
    width: 100%;
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
