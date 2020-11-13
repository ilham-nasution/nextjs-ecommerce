import Link from "next/link";
import {
  NavModal,
  NavModalContainer,
  NavModalFooter,
} from "../styles/NavbarStyle";
import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import styled from "styled-components";

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  section {
    display: flex;
    img {
      margin-right: 8px;
    }
  }

  p {
    font-size: small;
    margin: 0;
    margin-bottom: 4px;
  }
`;

const Subtotal = styled.div`
  border-top: 1px solid rgb(221, 221, 221);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-top: 16px;

  p {
    font-weight: bold;
  }
`;

const Cart = ({ setOpenCart }) => {
  const { cartItems } = useContext(CartContext);

  const renderCartList = cartItems.map((item, index) => (
    <CartItem key={index}>
      <section>
        <img
          src={`http://localhost:1337${item.image[0].formats.thumbnail.url}`}
          alt="product"
          width="56px"
          height="56px"
        />
        <div>
          <p>{item.name}</p>
          <p>{item.color}</p>
          <p>{item.size}</p>
        </div>
      </section>
      <p>Rp {item.price}</p>
    </CartItem>
  ));

  const subtotal = cartItems.reduce((total, item) => {
    return total + parseInt(item.price);
  }, 0);

  return (
    <>
      <NavModal onClick={() => setOpenCart(false)} />
      <NavModalContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        exit={{ opacity: 0 }}
      >
        {cartItems.length === 0 ? (
          <h5>Your bag is currently empty</h5>
        ) : (
          <>
            {renderCartList}
            <Subtotal>
              <p>Subtotal: </p>
              <p>Rp {subtotal}</p>
            </Subtotal>
          </>
        )}

        <NavModalFooter>
          <Link href="/cart">
            <a>View bag</a>
          </Link>
          <Button>Checkout</Button>
        </NavModalFooter>
      </NavModalContainer>
    </>
  );
};

export default Cart;
