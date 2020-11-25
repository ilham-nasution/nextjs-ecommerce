import { FormInput } from "./FormInputStyle";

const index = ({ label, r, error, icon, ...restProps }) => {
  return (
    <FormInput icon={icon}>
      {icon && <img src={icon} alt="icon" />}
      <label>{label}</label>
      <input ref={r} {...restProps} />
      <p>{error}</p>
    </FormInput>
  );
};

export default index;
