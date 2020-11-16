import Head from "next/head";
import { Container, Header, Grid } from "../../styles/ItemListLayout";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

export default function New({ products }) {
  return (
    <div>
      <Head>
        <title>New Product | Shoe Store</title>
        <link rel="icon" href="/shoe.ico" />
      </Head>

      <Container>
        <Header>
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            dolore laudantium molestiae eius. Nemo magni, beatae in neque
            dignissimos.
          </h1>
          <button>Filter</button>
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
