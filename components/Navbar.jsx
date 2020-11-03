import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = ({
  setSearchForm,
  setSignInForm,
  signInForm,
  setOpenCart,
  openCart,
}) => {
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
          className={signInForm || openCart ? styles.unactive : ""}
          onClick={() => {
            setSearchForm(true);
            setSignInForm(false);
            setOpenCart(false);
          }}
        >
          Search
        </a>
        <a
          className={
            openCart ? styles.unactive : signInForm ? styles.active : ""
          }
          onClick={() => {
            setSignInForm(true);
            setOpenCart(false);
          }}
        >
          My account
        </a>
        <a
          className={openCart ? styles.cartActive : styles.cart}
          onClick={() => {
            setOpenCart(true);
            setSignInForm(false);
          }}
        >
          0
        </a>
      </div>
    </div>
  );
};

export default Navbar;
