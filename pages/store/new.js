import Head from "next/head";
import { Container, Header, Grid } from "../../styles/ItemListLayout";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { useState } from "react";
import FilterModal from "../../components/FilterModal";
import { AnimatePresence } from "framer-motion";

export default function New({ products, colors, sizes }) {
  const [openFilter, setOpenFilter] = useState(false);
  const [shoes, setShoes] = useState(products);

  const handleFilter = (param) => {
    setOpenFilter(false);
    setShoes(param.products);
  };

  return (
    <div>
      <Head>
        <title>New Product | Shoe Store</title>
        <link rel="icon" href="/shoe.ico" />
      </Head>
      <AnimatePresence>
        {openFilter && (
          <FilterModal
            colors={colors}
            sizes={sizes}
            setOpenFilter={setOpenFilter}
            handleFilter={handleFilter}
          />
        )}
      </AnimatePresence>
      <Container>
        <Header>
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            dolore laudantium molestiae eius. Nemo magni, beatae in neque
            dignissimos.
          </h1>
          <button onClick={() => setOpenFilter(true)}>Filter</button>
        </Header>
        <Grid>
          {shoes.map((shoe) => (
            <ProductCard key={shoe.id} shoe={shoe} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const productRes = await fetch("http://localhost:1337/products");
  const colorRes = await fetch("http://localhost:1337/colors");
  const sizesRes = await fetch("http://localhost:1337/sizes");
  const sizes = await sizesRes.json();
  const colors = await colorRes.json();
  const products = await productRes.json();

  return {
    props: {
      products,
      colors,
      sizes,
    },
    revalidate: 300,
  };
}
