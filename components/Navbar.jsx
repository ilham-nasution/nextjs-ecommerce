import { motion, useViewportScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Navbar,
  NavLink,
  Cart,
  NavRight,
  NavLeft,
  NavBrand,
} from "../styles/NavbarStyle";

const Header = ({
  setSearchForm,
  setSignInForm,
  signInForm,
  setOpenCart,
  openCart,
}) => {
  const { scrollYProgress } = useViewportScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["", "", "white"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.4], [1, 0, 1]);

  return (
    <Navbar fixedTop style={{ backgroundColor, opacity }}>
      <NavLeft>
        <Link href="/">
          <NavBrand>SHOE .</NavBrand>
        </Link>
        <Link href="/store/new">
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
      </NavLeft>
      <NavRight>
        <NavLink
          unactive={signInForm || openCart}
          onClick={() => {
            setSearchForm(true);
            setSignInForm(false);
            setOpenCart(false);
          }}
        >
          Search
        </NavLink>
        <NavLink
          active={signInForm}
          unactive={openCart}
          onClick={() => {
            setSignInForm(true);
            setOpenCart(false);
          }}
        >
          My account
        </NavLink>
        <Cart
          active={openCart}
          onClick={() => {
            setOpenCart(true);
            setSignInForm(false);
          }}
        >
          0
        </Cart>
      </NavRight>
    </Navbar>
  );
};

export default Header;
