import Link from "next/link";
import {
  NavModal,
  NavModalContainer,
  NavModalFooter,
} from "../styles/NavbarStyle";
import Button from "./Button";

const Cart = ({ setOpenCart }) => {
  return (
    <>
      <NavModal onClick={() => setOpenCart(false)} />
      <NavModalContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        exit={{ opacity: 0 }}
      >
        <h5>Your bag is currently empty</h5>
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
