import styled from "styled-components";

export const Container = styled.div`
  padding: 180px 40px 40px 40px;
`;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  max-width: 380px;
  margin-right: 80px;

  h5 {
    font-weight: bold;
  }

  p {
    font-size: small;
    margin: 0;
    line-height: 20px;
  }

  a {
    display: block;
    font-size: small;
    margin-bottom: 4px;
  }
`;

export const Colsm = styled.div`
  max-width: 150px;
  margin-right: 80px;

  p {
    font-size: small;
    margin: 0;
    line-height: 20px;
  }
`;
