import styled from "styled-components";

export const Container = styled.div`
  padding: 120px 56px 56px 56px;

  h3 {
    margin-bottom: 40px;
  }
`;

export const Row = styled.div`
  display: flex;

  @media (max-width: 425px) {
    display: block;
  }
`;

export const Left = styled.div`
  flex-grow: 1;
  margin-bottom: 16px;
`;

export const Right = styled.div`
  flex-grow: 3;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

export const GroupRadioButtons = styled.div`
  p {
    margin: 0 0 16px 0;
    font-size: smaller;
  }

  p:last-child {
    margin: 8px 0 0 0;
    color: red;
  }

  div {
    display: flex;
  }
`;
