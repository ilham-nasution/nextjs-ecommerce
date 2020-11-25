import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {
  Navbar,
  NavLink,
  NavCart,
  NavRight,
  NavLeft,
  NavBrand,
  NavChild,
} from "./NavbarStyle";
import { CartContext } from "../../contexts/CartContext";
import BurgerMenu from "../BurgerMenu";
import SideMenu from "../SideMenu";

const Header = ({
  setSearchForm,
  setSignInForm,
  signInForm,
  setOpenCart,
  openCart,
}) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [sideMenu, setSideMenu] = useState(false);

  useEffect(() => {
    const items = localStorage.getItem("cart");
    setCartItems(JSON.parse(items));
  }, []);

  const { scrollYProgress } = useViewportScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["", "", "white"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 0, 1]);

  return (
    <>
      <Navbar fixedTop style={{ backgroundColor, opacity }}>
        <NavLeft>
          <NavBrand>
            <Link href="/">
              <a>SHOE .</a>
            </Link>
          </NavBrand>
          <NavChild>
            <Link href="/store/new">
              <motion.a whileHover={{ scale: 1.3, cursor: "pointer" }}>
                New
              </motion.a>
            </Link>
            <Link href="/store/product">
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
          </NavChild>
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
          <NavCart
            cartItems={cartItems}
            setCartItems={setCartItems}
            active={openCart}
            onClick={() => {
              setOpenCart(true);
              setSignInForm(false);
            }}
          >
            {cartItems.length}
          </NavCart>
        </NavRight>
        <BurgerMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />
      </Navbar>
      <AnimatePresence>{sideMenu && <SideMenu />}</AnimatePresence>
    </>
  );
};

export default Header;
