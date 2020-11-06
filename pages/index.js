import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import Blog from "../components/Blog";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import SignInForm from "../components/SignInForm";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [searchForm, setSearchForm] = useState(false);
  const [signInForm, setSignInForm] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <div>
      <Head>
        <title>Home | Shoe Store</title>
        <link rel="icon" href="/shoe.ico" />
      </Head>
      <img className={styles.bg} src="/background.jpg" />
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
      <Slider />
      <Blog />
      <Footer />
    </div>
  );
}
