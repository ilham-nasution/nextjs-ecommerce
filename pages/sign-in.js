import Link from "next/link";
import Head from "next/head";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import {
  Container,
  Row,
  Left,
  Right,
  FormContainer,
} from "../styles/SignUpPageLayout";

const createAccount = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Head>
        <title>Log In | Shoe Store</title>
        <link rel="icon" href="/shoe.ico" />
      </Head>
      <Row>
        <Left>
          <h3>My account</h3>
          <Link href="/create-account">
            <a>Create an Account</a>
          </Link>
        </Left>
        <Right>
          <h3>Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormContainer>
              <FormInput label="Email Address" name="email" r={register} />
              <FormInput
                label="Password"
                type="password"
                name="password"
                r={register}
              />
            </FormContainer>
            <Button fullWidth type="submit">
              Sign in
            </Button>
          </form>
        </Right>
      </Row>
    </Container>
  );
};

export default createAccount;
