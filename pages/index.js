import Head from "next/head";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Shoe Store</title>
        <link rel="icon" href="/shoe.ico" />
      </Head>
      <img className={styles.bg} src="/background.jpg" />
      <Slider />
      <Blog />
      <Footer />
    </div>
  );
}
