import Link from "next/link";
import {
  NavModal,
  NavModalContainer,
  NavModalFooter,
} from "../../styles/NavModalStyle";
import Button from "../Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import subtotal from "../../utils/subtotal";
import { CartItem, Subtotal } from "./CartModalStyle";
import { getImageUrl } from "../../utils/urls";

const Cart = ({ setOpenCart }) => {
  const { cartItems } = useContext(CartContext);

  const renderCartList = cartItems.map((item, index) => (
    <CartItem key={index}>
      <section>
        <img
          src={getImageUrl(item.product.image[0].formats.thumbnail.url)}
          alt="product"
          width="56px"
          height="56px"
        />
        <div>
          <p>{item.product.name}</p>
          <p>{item.color.name}</p>
          <p>{item.size.name}</p>
        </div>
      </section>
      <p>Rp {item.product.price}</p>
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
          <>
            {renderCartList}
            <Subtotal>
              <p>Subtotal: </p>
              <p>Rp {subtotal(cartItems)}</p>
            </Subtotal>
          </>
        )}

        <NavModalFooter>
          <Link href="/cart">
            <a onClick={() => setOpenCart(false)}>View bag</a>
          </Link>
          <Button>Checkout</Button>
        </NavModalFooter>
      </NavModalContainer>
    </>
  );
};

export default Cart;
