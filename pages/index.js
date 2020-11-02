import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import SignInForm from "../components/SignInForm";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [searchForm, setSearchForm] = useState(false);
  const [signInForm, setSignInForm] = useState(false);

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
      </AnimatePresence>
      <Navbar
        setSearchForm={setSearchForm}
        signInForm={signInForm}
        setSignInForm={setSignInForm}
      />
    </div>
  );
}
