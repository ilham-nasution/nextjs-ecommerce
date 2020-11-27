import Head from "next/head";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import {
  Container,
  StyledSwiper,
  ProductDetail,
  Select,
  Button,
} from "../../../styles/ProductDetailLayout";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

SwiperCore.use(Navigation);

export default function Product({ product }) {
  const [values, setValues] = useState({
    color: product.colors[0].name,
    size: product.sizes[0].name,
  });
  const { setCartItems } = useContext(CartContext);
  const router = useRouter();

  const handleChange = (e) => {
    setValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const userItems = {
      product: product.id,
      users_permissions_user: JSON.parse(Cookies.get("user")).id,
      color: product.colors.find((color) => color.name == values.color).id,
      size: product.sizes.find((size) => size.name == values.size).id,
    };
    axios
      .post("http://localhost:1337/user-bags", userItems, {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setCartItems((prevItem) => {
          return [...prevItem, res.data];
        });
      })
      .catch((err) => {
        console.error(err);
        router.push("/sign-in");
      });
  };

  return (
    <div>
      <Head>
        <title>{product.name} | Shoe Store</title>
        <link rel="icon" href="/shoe.ico" />
      </Head>
      <Container>
        <StyledSwiper slidesPerView={1} navigation>
          {product.image.map((img) => (
            <SwiperSlide key={img.id}>
              <img
                src={`http://localhost:1337${img.formats.large.url}`}
                alt={product.name}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </SwiperSlide>
          ))}
        </StyledSwiper>
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
