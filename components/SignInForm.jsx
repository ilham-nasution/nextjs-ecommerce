import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/SignInForm.module.css";

const SignInForm = ({ setSignInForm }) => {
  return (
    <>
      <div onClick={() => setSignInForm(false)} className={styles.modal} />
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        exit={{ opacity: 0 }}
        className={styles.form}
      >
        <div className={styles.input}>
          <label htmlFor="email">Email address</label>
          <input type="text" />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Password</label>
          <input type="text" />
        </div>
        <div className={styles.footer}>
          <Link href="/">
            <a>I forgot my password</a>
          </Link>
          <button>Sign in</button>
        </div>
      </motion.form>
    </>
  );
};

export default SignInForm;
