import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import useSubtotal from "../hooks/useSubtotal";
import {
  Container,
  Row,
  CartTable,
  TableHead,
  Total,
} from "../styles/CartPageLayout";

const cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const subtotal = useSubtotal(cartItems);

  const handleDelete = (id) => {
    const updatedItems = cartItems.filter((item) => {
      return item.id !== id;
    });
    setCartItems(updatedItems);
  };

  return (
    <div>
      <Head>
        <title>Cart | Shoe Store</title>
        <link rel="icon" href="/shoe.ico" />
      </Head>
      <Container>
        <h3>Your bag</h3>
        {cartItems.length > 0 ? (
          <>
            <Row>
              <Link href="/store/new">
                <a>⬅ Keep shopping</a>
              </Link>
              <CartTable>
                <TableHead>
                  <p>Product</p>
                  <p>Color</p>
                  <p>Size</p>
                  <p>Price</p>
                </TableHead>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                  />
                ))}
              </CartTable>
            </Row>
            <Total>
              <p>
                Shipping costs will be calculated once you have provided your
                address.
              </p>
              <div>
                <h4>Total</h4>
                <h4>Rp {subtotal}</h4>
              </div>
              <Button>Checkout</Button>
            </Total>
          </>
        ) : (
          <>
            <Link href="/store/new">
              <a>⬅ Keep shopping</a>
            </Link>
            <h1>Your bag is currently empty</h1>
          </>
        )}
      </Container>
    </div>
  );
};

export default cart;
