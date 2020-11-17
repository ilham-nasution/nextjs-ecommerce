import Link from "next/link";
import { useState } from "react";
import {
  NavModal,
  NavModalContainer,
  NavModalFooter,
} from "../../styles/NavModalStyle";
import { FormInput } from "./FormStyle";
import Button from "../Button";

const SignInForm = ({ setSignInForm }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <NavModal onClick={() => setSignInForm(false)} />
      <NavModalContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        exit={{ opacity: 0 }}
      >
        {showForm ? (
          <>
            <FormInput>
              <label htmlFor="email">Email address</label>
              <input type="text" />
            </FormInput>
            <FormInput>
              <label htmlFor="password">Password</label>
              <input type="text" />
            </FormInput>
          </>
        ) : (
          <p
            style={{
              marginBottom: "72px",
              fontSize: "smaller",
              lineHeight: "24px",
              width: "272px",
            }}
          >
            Create an account or log in to view your orders, return or adjust
            your personal information
          </p>
        )}

        <NavModalFooter>
          {showForm ? (
            <Link href="/">
              <a>I forgot my password</a>
            </Link>
          ) : (
            <Link href="/create-account">
              <a>Create an account</a>
            </Link>
          )}
          <Button onClick={() => setShowForm(true)}>Log in</Button>
        </NavModalFooter>
      </NavModalContainer>
    </>
  );
};

export default SignInForm;
