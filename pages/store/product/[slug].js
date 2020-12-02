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
import { API_URL } from "../../../utils/urls";

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

  const user = Cookies.get("user");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (user) {
      const userItems = {
        product: product.id,
        user: JSON.parse(user).id,
        color: product.colors.find((color) => color.name == values.color).id,
        size: product.sizes.find((size) => size.name == values.size).id,
      };
      axios
        .post(`${API_URL}/orders`, userItems, {
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
        });
    } else {
      router.push("/sign-in");
    }
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
                src={img.formats.large.url}
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
  const res = await fetch(`${API_URL}/products`);
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { slug: String(product.slug) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/products/?slug=${slug}`);
  const product = await res.json();

  return { props: { product: product[0] } };
}
