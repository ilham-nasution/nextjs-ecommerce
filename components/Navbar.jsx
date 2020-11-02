import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ setSearchForm, setSignInForm, signInForm }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Link href="/">
          <a className={styles.logo}>SHOE .</a>
        </Link>
        <Link href="/">
          <motion.a whileHover={{ scale: 1.3, cursor: "pointer" }}>
            New
          </motion.a>
        </Link>
        <Link href="/">
          <motion.a whileHover={{ scale: 1.3, cursor: "pointer" }}>
            Collection
          </motion.a>
        </Link>
        <Link href="/">
          <motion.a whileHover={{ scale: 1.3, cursor: "pointer" }}>
            Archive
          </motion.a>
        </Link>
        <Link href="/">
          <motion.a whileHover={{ scale: 1.3, cursor: "pointer" }}>
            Shoe care
          </motion.a>
        </Link>
      </div>
      <div className={styles.right}>
        <a
          className={signInForm ? styles.unactive : ""}
          onClick={() => {
            setSearchForm(true);
            setSignInForm(false);
          }}
        >
          Search
        </a>
        <a
          className={signInForm ? styles.active : ""}
          onClick={() => setSignInForm(true)}
        >
          My account
        </a>
        <a className={styles.cart}>0</a>
      </div>
    </div>
  );
};

export default Navbar;
