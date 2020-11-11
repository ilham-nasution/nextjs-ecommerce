import Head from "next/head";
import styles from "../../styles/New.module.css";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Product({ products }) {
  return (
    <div>
      <Head>
        <title>All Product | Shoe Store</title>
        <link rel="icon" href="/shoe.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1>All Product</h1>
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

export async function getServerSideProps({ query }) {
  if (query.search) {
    const res = await fetch(
      `http://localhost:1337/products?name_contains=${query.search}`
    );
    const products = await res.json();
    return {
      props: {
        products,
      },
    };
  } else {
    const res = await fetch(`http://localhost:1337/products`);
    const products = await res.json();
    return {
      props: {
        products,
      },
    };
  }
}
