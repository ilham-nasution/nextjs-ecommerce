import Head from "next/head";
import {
  Container,
  Header,
  Grid,
  NoProductAlert,
} from "../../styles/ItemListLayout";
import Footer from "../../components/Footer";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import { API_URL } from "../../utils/urls";

export default function Product({ products }) {
  return (
    <div>
      <Head>
        <title>All Product | Shoe Store</title>
        <link rel="icon" href="/shoe.ico" />
      </Head>

      <Container>
        <Header>
          {products.length > 0 ? (
            ""
          ) : (
            <NoProductAlert>
              <h1>
                Sorry the product you're searching for isn't available, browse
                our collection{" "}
                <Link href="/store/product">
                  <a>here</a>
                </Link>
                !
              </h1>
            </NoProductAlert>
          )}
        </Header>
        <Grid>
          {products.map((shoe) => (
            <ProductCard key={shoe.id} shoe={shoe} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  if (query.search) {
    const res = await fetch(
      `${API_URL}/products?name_contains=${query.search}`
    );
    const products = await res.json();
    return {
      props: {
        products,
      },
    };
  } else {
    const res = await fetch(`${API_URL}/products`);
    const products = await res.json();
    return {
      props: {
        products,
      },
    };
  }
}
