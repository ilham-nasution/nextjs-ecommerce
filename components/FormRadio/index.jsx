import styled from "styled-components";

const FormRadio = styled.div`
  margin-right: 24px;
  input {
    display: inline;
    margin-right: 10px;
  }
  label {
    font-size: smaller;
  }
`;

const index = ({ label, name, r }) => {
  return (
    <FormRadio>
      <input
        type="radio"
        name={name}
        value={label.toLowerCase()}
        id={label.toLowerCase()}
        ref={r}
      />
      <label htmlFor={label.toLowerCase()}>{label}</label>
    </FormRadio>
  );
};

export default index;
