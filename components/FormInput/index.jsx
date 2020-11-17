import { FormInput } from "./FormInputStyle";

const index = ({ label, r, ...restProps }) => {
  return (
    <FormInput>
      <label>{label}</label>
      <input ref={r} {...restProps} />
    </FormInput>
  );
};

export default index;
