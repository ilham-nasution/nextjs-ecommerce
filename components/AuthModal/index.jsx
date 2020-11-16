import Link from "next/link";
import {
  NavModal,
  NavModalContainer,
  NavModalFooter,
} from "../../styles/NavModalStyle";
import { FormInput } from "./FormStyle";

const SignInForm = ({ setSignInForm }) => {
  return (
    <>
      <NavModal onClick={() => setSignInForm(false)} />
      <NavModalContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        exit={{ opacity: 0 }}
      >
        <FormInput>
          <label htmlFor="email">Email address</label>
          <input type="text" />
        </FormInput>
        <FormInput>
          <label htmlFor="password">Password</label>
          <input type="text" />
        </FormInput>
        <NavModalFooter>
          <Link href="/">
            <a>I forgot my password</a>
          </Link>
          <button>Sign in</button>
        </NavModalFooter>
      </NavModalContainer>
    </>
  );
};

export default SignInForm;
