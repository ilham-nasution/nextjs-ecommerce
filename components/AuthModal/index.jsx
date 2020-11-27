import Link from "next/link";
import { useState } from "react";
import {
  NavModal,
  NavModalContainer,
  NavModalFooter,
} from "../../styles/NavModalStyle";
import FormInput from "../FormInput";
import Button from "../Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const SignInForm = ({ setSignInForm }) => {
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();

  const onSubmit = (data, e) => {
    axios
      .post("http://localhost:1337/auth/local", {
        identifier: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        setSignInForm(false);
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
    <>
      <NavModal onClick={() => setSignInForm(false)} />
      {showForm ? (
        <NavModalContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          exit={{ opacity: 0 }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              label="Email"
              name="email"
              r={register}
              error={errors.email && "This is required"}
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              r={register}
              error={errors.password && "This is required"}
            />

            <NavModalFooter>
              <Link href="/">
                <a>I forgot my password</a>
              </Link>

              <Button type="submit">Sign in</Button>
            </NavModalFooter>
          </form>
        </NavModalContainer>
      ) : (
        <NavModalContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          exit={{ opacity: 0 }}
        >
          <p
            style={{
              margin: "0 0 72px 0",
              fontSize: "smaller",
              lineHeight: "24px",
              width: "272px",
            }}
          >
            Create an account or log in to view your orders, return or adjust
            your personal information
          </p>
          <NavModalFooter>
            <Link href="/create-account">
              <a onClick={() => setSignInForm(false)}>Create an account</a>
            </Link>

            <Button onClick={() => setShowForm(true)}>Log in</Button>
          </NavModalFooter>
        </NavModalContainer>
      )}
    </>
  );
};

export default SignInForm;
