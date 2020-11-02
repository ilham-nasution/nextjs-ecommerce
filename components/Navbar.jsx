import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Link href="/">
          <a className={styles.logo}>SHOE .</a>
        </Link>
        <Link href="/">
          <a>New</a>
        </Link>
        <Link href="/">
          <a>Collection</a>
        </Link>
        <Link href="/">
          <a>Archive</a>
        </Link>
        <Link href="/">
          <a>Shoe care</a>
        </Link>
      </div>
      <div className={styles.right}>
        <Link href="/">
          <a>Search</a>
        </Link>
        <Link href="/">
          <a>Help</a>
        </Link>
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
