import { FormInput } from "./FormInputStyle";

const index = ({ label, r, error, ...restProps }) => {
  return (
    <FormInput>
      <label>{label}</label>
      <input ref={r} {...restProps} />
      <p>{error}</p>
    </FormInput>
  );
};

export default index;
