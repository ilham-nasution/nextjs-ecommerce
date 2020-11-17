import { useForm } from "react-hook-form";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import FormRadio from "../components/FormRadio";
import {
  Container,
  Row,
  Left,
  Right,
  FormContainer,
  GroupRadioButtons,
} from "../styles/SignUpPageLayout";

const createAccount = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Row>
        <Left>
          <h3>My account</h3>
          <a>I already have an account</a>
        </Left>
        <Right>
          <h3>Create account</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormContainer>
              <FormInput label="First Name" name="firstName" r={register} />
              <FormInput label="Last Name" name="lastName" r={register} />
              <FormInput label="Email" name="email" r={register} />
              <GroupRadioButtons>
                <p>Gender</p>
                <div>
                  <FormRadio label="Male" name="gender" r={register} />
                  <FormRadio label="Female" name="gender" r={register} />
                </div>
              </GroupRadioButtons>
              <FormInput
                label="Password"
                type="password"
                name="password"
                r={register}
              />
              <FormInput
                label="Repeat Password"
                type="password"
                name="repeatPassword"
                r={register}
              />
            </FormContainer>
            <Button fullWidth type="submit">
              Create account
            </Button>
          </form>
        </Right>
      </Row>
    </Container>
  );
};

export default createAccount;
