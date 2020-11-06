import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Cart from "../../components/Cart";
import SearchForm from "../../components/SearchForm";
import SignInForm from "../../components/SignInForm";
import styles from "../../styles/New.module.css";
import Footer from "../../components/Footer";
import Link from "next/link";

const shoeList = [
  { image: "/product1.jpg", title: "LT 01 Premium", price: 222.31 },
  { image: "/product2.jpg", title: "LT 02 Premium", price: 205.79 },
  { image: "/product3.jpg", title: "LT 03 Premium", price: 214.05 },
  { image: "/product4.jpg", title: "LT 04 Premium", price: 189.26 },
  { image: "/product5.jpg", title: "LT 05 Premium", price: 197.52 },
  { image: "/product6.jpg", title: "LT 06 Premium", price: 222.31 },
];

export default function New() {
  const [searchForm, setSearchForm] = useState(false);
  const [signInForm, setSignInForm] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <div>
      <Head>
        <title>New Product | Shoe Store</title>
        <link rel="icon" href="/shoe.ico" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        {searchForm && <SearchForm setSearchForm={setSearchForm} />}
        {signInForm && <SignInForm setSignInForm={setSignInForm} />}
        {openCart && <Cart setOpenCart={setOpenCart} />}
      </AnimatePresence>
      <Navbar
        fixedTop
        setSearchForm={setSearchForm}
        signInForm={signInForm}
        setSignInForm={setSignInForm}
        openCart={openCart}
        setOpenCart={setOpenCart}
      />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            Explore our new collection, featuring styles from ocean waste, wood
            fibres, VEGEA® vegan leather, chrome-free leather, and more.
          </h1>
          <button>Filter</button>
        </div>
        <div className={styles.grid}>
          {shoeList.map((shoe) => (
            <Link href={`/store/product/${shoe.title.replaceAll(" ", "-")}`}>
              <a key={shoe.image} className={styles.card}>
                <img src={shoe.image} alt="shoe" />
                <p>{shoe.title}</p>
                <p>$ {shoe.price}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
