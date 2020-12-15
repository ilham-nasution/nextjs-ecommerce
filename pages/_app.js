import "../styles/globals.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import SearchModal from "../components/SearchModal";
import AuthModal from "../components/AuthModal";
import CartModal from "../components/CartModal";
import { useState } from "react";
import { CartProvider } from "../contexts/CartContext";
import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [searchForm, setSearchForm] = useState(false);
  const [signInForm, setSignInForm] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <CartProvider>
      <AnimatePresence exitBeforeEnter>
        {searchForm && <SearchModal setSearchForm={setSearchForm} />}
        {signInForm && <AuthModal setSignInForm={setSignInForm} />}
        {openCart && <CartModal setOpenCart={setOpenCart} />}
      </AnimatePresence>
      <Navbar
        setSearchForm={setSearchForm}
        signInForm={signInForm}
        setSignInForm={setSignInForm}
        openCart={openCart}
        setOpenCart={setOpenCart}
      />
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
