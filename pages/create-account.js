import Link from "next/link";
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
  const { register, handleSubmit, errors, watch } = useForm();
  const passwordValue = watch("password", "");
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Row>
        <Left>
          <h3>My account</h3>
          <Link href="/sign-in">
            <a>I already have an account</a>
          </Link>
        </Left>
        <Right>
          <h3>Create account</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormContainer>
              <FormInput
                label="First Name"
                name="firstName"
                r={register({ required: true })}
                error={errors.firstName && "This is required"}
              />
              <FormInput
                label="Last Name"
                name="lastName"
                r={register({ required: true })}
                error={errors.lastName && "This is required"}
              />
              <FormInput
                label="Email"
                name="email"
                r={register({ required: true })}
                error={errors.email && "This is required"}
              />
              <GroupRadioButtons>
                <p>Gender</p>
                <div>
                  <FormRadio
                    label="Male"
                    name="gender"
                    r={register({ required: true })}
                  />
                  <FormRadio
                    label="Female"
                    name="gender"
                    r={register({ required: true })}
                  />
                </div>
                {errors.gender && <p>Choose one</p>}
              </GroupRadioButtons>
              <FormInput
                label="Password"
                type="password"
                name="password"
                r={register({ minLength: 6, required: true })}
                error={
                  errors.password &&
                  "This is required and need to be more than 6 characters"
                }
              />
              <FormInput
                label="Repeat Password"
                type="password"
                name="repeatPassword"
                r={register({
                  validate: (value) =>
                    value === passwordValue || "The passwords didn't match",
                })}
                error={errors.repeatPassword && errors.repeatPassword.message}
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
