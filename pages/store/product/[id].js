import Head from "next/head";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";

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
    margin-top: 56px;
    label {
      font-size: small;
    }
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
  const [values, setValues] = useState({
    color: product.colors[0].name,
    size: product.sizes[0].name,
  });
  const { setCartItems } = useContext(CartContext);

  const handleChange = (e) => {
    setValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const item = { ...product, color: values.color, size: values.size };
    setCartItems((prevItem) => {
      return [...prevItem, item];
    });
  };

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
          <form onSubmit={handleAddItem}>
            <label>
              Color:
              <Select value={values.color} name="color" onChange={handleChange}>
                {product.colors.map((color) => (
                  <option key={color.id} value={color.name}>
                    {color.name}
                  </option>
                ))}
              </Select>
            </label>
            <label>
              Size:
              <Select value={values.size} name="size" onChange={handleChange}>
                {product.sizes.map((size) => (
                  <option key={size.id} value={size.name}>
                    {size.name}
                  </option>
                ))}
              </Select>
            </label>
            <Button type="submit">Add to bag</Button>
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
