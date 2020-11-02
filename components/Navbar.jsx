import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ setSearchForm }) => {
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
        <a onClick={() => setSearchForm(true)}>Search</a>
        <Link href="/">
          <a>My account</a>
        </Link>
        <Link href="/">
          <a className={styles.cart}>0</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
