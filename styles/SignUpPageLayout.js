import styled from "styled-components";

export const Container = styled.div`
  padding: 120px 56px 56px 56px;

  h3 {
    margin-bottom: 40px;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const Left = styled.div`
  flex-basis: 25%;
`;

export const Right = styled.div`
  flex-basis: 75%;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;
`;

export const GroupRadioButtons = styled.div`
  p {
    margin: 0 0 16px 0;
    font-size: smaller;
  }

  div {
    display: flex;
  }
`;
