import "../styles/globals.css";
import "swiper/swiper.scss";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import SignInForm from "../components/SignInForm";
import Cart from "../components/Cart";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [searchForm, setSearchForm] = useState(false);
  const [signInForm, setSignInForm] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {searchForm && <SearchForm setSearchForm={setSearchForm} />}
        {signInForm && <SignInForm setSignInForm={setSignInForm} />}
        {openCart && <Cart setOpenCart={setOpenCart} />}
      </AnimatePresence>
      <Navbar
        setSearchForm={setSearchForm}
        signInForm={signInForm}
        setSignInForm={setSignInForm}
        openCart={openCart}
        setOpenCart={setOpenCart}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
