import Head from "next/head";
import styles from "../../styles/New.module.css";
import Footer from "../../components/Footer";
import Link from "next/link";
import styled from "styled-components";

const Alert = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  h1 {
    text-align: center;
  }
  a {
    color: blue;
  }
`;

export default function Product({ products }) {
  return (
    <div>
      <Head>
        <title>All Product | Shoe Store</title>
        <link rel="icon" href="/shoe.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>
          {products.length > 0 ? (
            ""
          ) : (
            <Alert>
              <h1>
                Sorry the product you're searching for isn't available, browse
                our collection{" "}
                <Link href="/store/product">
                  <a>here</a>
                </Link>
                !
              </h1>
            </Alert>
          )}
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
