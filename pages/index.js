import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [searchForm, setSearchForm] = useState(false);
  return (
    <div>
      <Head>
        <title>Home | Shoe Store</title>
        <link rel="icon" href="/shoe.ico" />
      </Head>
      <img className={styles.bg} src="/background.jpg" />
      <AnimatePresence exitBeforeEnter>
        {searchForm && <SearchForm setSearchForm={setSearchForm} />}
      </AnimatePresence>
      <Navbar setSearchForm={setSearchForm} />
    </div>
  );
}
