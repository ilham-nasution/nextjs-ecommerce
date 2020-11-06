import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  img {
    width: 65%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductDetail = styled.div`
  padding: 56px 88px;

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

export default function Product() {
  return (
    <div>
      <Head>
        <title>New Product | Shoe Store</title>
        <link rel="icon" href="/shoe.ico" />
      </Head>
      <Container>
        <img src="/product1.jpg" alt="product" />
        <ProductDetail>
          <h1>LT 01 Premium White</h1>
          <p>$ 222.31</p>
          <p>
            Every season, we offer a premium rendition of the LT 01. This year
            it turned out to be the leanest LT 01 we’ve made so far. The upper
            is made from a single piece of leather.
          </p>
          <a>More information</a>
          <form>
            <Select>
              <option value="" disabled selected>
                Color
              </option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="red">Red</option>
            </Select>
            <Select>
              <option value="" disabled selected>
                Size
              </option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Select>
            <Button>Add to bag</Button>
          </form>
        </ProductDetail>
      </Container>
    </div>
  );
}
