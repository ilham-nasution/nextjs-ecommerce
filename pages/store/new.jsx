import Head from "next/head";
import styles from "../../styles/New.module.css";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function New({ products }) {
  return (
    <div>
      <Head>
        <title>New Product | Shoe Store</title>
        <link rel="icon" href="/shoe.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            dolore laudantium molestiae eius. Nemo magni, beatae in neque
            dignissimos.
          </h1>
          <button>Filter</button>
        </div>
        <div className={styles.grid}>
          {products.map((shoe) => (
            <Link key={shoe.id} href={`/store/product/${shoe.id}`}>
              <a className={styles.card}>
                <img
                  src={`http://localhost:1337${shoe.image[0].formats.small.url}`}
                  alt="shoe"
                />
                <p>{shoe.name}</p>
                <p>Rp {shoe.price}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
    revalidate: 300,
  };
}
