import styled from "styled-components";

export const FormInput = styled.div`
  position: relative;
  margin-bottom: 8px;
  label {
    display: block;
    margin-bottom: 4px;
    font-size: smaller;
  }
  input {
    width: 100%;
    padding: ${(props) => (props.icon ? "10px 32px" : "10px")};
    border: 1px solid rgb(221, 221, 221);
  }

  p {
    font-size: smaller;
    color: red;
    margin: 4px 0 0 0;
  }

  img {
    position: absolute;
    width: 16px;
    left: 8px;
    top: 10px;
  }
`;
