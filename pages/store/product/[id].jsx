import Head from "next/head";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const ProductDetail = styled.div`
  padding: 88px;

  p {
    line-height: 24px;
  }
  form {
    margin-top: 80px;
  }
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 10px 8px;
  margin: 8px 0;
  outline: none;
  border: 1px solid rgb(221, 221, 221);
`;

const Button = styled.button`
  background-color: black;
  padding: 16px 40px;
  border-radius: 4px;
  color: whitesmoke;
  border: none;
  outline: none;
  font-size: small;
  width: 100%;
`;

SwiperCore.use(Navigation);

export default function Product({ product }) {
  return (
    <div>
      <Head>
        <title>{product.name} | Shoe Store</title>
        <link rel="icon" href="/shoe.ico" />
      </Head>
      <Container>
        <Swiper slidesPerView={1} navigation>
          {product.image.map((img) => (
            <SwiperSlide key={img.id}>
              <img
                src={`http://localhost:1337${img.formats.large.url}`}
                alt={product.name}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <ProductDetail>
          <h1>{product.name}</h1>
          <p>Rp {product.price}</p>
          <p>{product.description}</p>
          <form>
            <Select>
              <option value="" disabled selected>
                Color
              </option>
              {product.colors.map((color) => (
                <option key={color.id} value={color.name}>
                  {color.name}
                </option>
              ))}
            </Select>
            <Select>
              <option value="" disabled selected>
                Size
              </option>
              {product.sizes.map((size) => (
                <option key={size.id} value={size.name}>
                  {size.name}
                </option>
              ))}
            </Select>
            <Button>Add to bag</Button>
          </form>
        </ProductDetail>
      </Container>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/products");
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:1337/products/${params.id}`);
  const product = await res.json();

  return { props: { product } };
}
