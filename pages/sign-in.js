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
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { API_URL } from "../utils/urls";

const createAccount = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data, e) => {
    axios
      .post(`${API_URL}/auth/local`, {
        identifier: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        Cookies.set("jwt", res.data.jwt);
        Cookies.set("user", res.data.user);
      })
      .then(() => {
        router.push(`/`);
      })
      .catch((err) => {
        e.target.reset();
        alert(err.response.data.message[0].messages[0].message);
      });
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
