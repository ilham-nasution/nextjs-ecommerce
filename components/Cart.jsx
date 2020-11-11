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
  justify-content: space-evenly;
`;

const Cart = ({ setOpenCart }) => {
  const [cartItems] = useContext(CartContext);

  const renderCartList = cartItems.map((item) => (
    <CartItem key={item.id}>
      <img
        src={`http://localhost:1337${item.image[0].formats.thumbnail.url}`}
        alt="product"
        width="40px"
        height="40px"
      />
      <p>{item.name}</p>
      <p>{item.color}</p>
      <p>{item.size}</p>
    </CartItem>
  ));

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
          renderCartList
        )}

        <NavModalFooter>
          <Link href="/">
            <a>View bag</a>
          </Link>
          <Button>Checkout</Button>
        </NavModalFooter>
      </NavModalContainer>
    </>
  );
};

export default Cart;
