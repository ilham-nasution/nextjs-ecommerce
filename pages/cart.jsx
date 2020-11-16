import Navbar from "../components/Navbar";
import styled from "styled-components";
import { CartContext } from "../components/CartContext";
import { useContext } from "react";
import Link from "next/link";
import Button from "../components/Button";

const Container = styled.div`
  padding: 88px 56px 56px 56px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    height: 40px;
  }
`;

const CartTable = styled.div`
  width: 80%;
`;

const TableHead = styled.div`
  display: flex;
  border-bottom: 2px solid black;
  p {
    width: 250px;
  }
`;

const TableItem = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
  border-bottom: 1px solid rgb(221, 221, 221);
  padding-bottom: 8px;

  img {
    margin-right: 4px;
  }

  p {
    font-size: smaller;
    width: 250px;
  }
`;

const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p {
    width: 320px;
    text-align: right;
    border-bottom: 1px solid rgb(221, 221, 221);
    padding-bottom: 16px;
    font-size: smaller;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 320px;

    h4 {
      margin-top: 0;
    }
  }
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  padding: 0;
`;

const cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce((total, item) => {
    return total + parseInt(item.price);
  }, 0);

  const handleDelete = (id) => {
    const updatedItems = cartItems.filter((item) => {
      return item.id !== id;
    });
    setCartItems(updatedItems);
  };

  return (
    <div>
      <Navbar />
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
                  <TableItem key={item.id}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "250px",
                        fontSize: "smaller",
                      }}
                    >
                      <img
                        src={`http://localhost:1337${item.image[0].formats.thumbnail.url}`}
                        alt={item.name}
                        width="80px"
                        height="80px"
                      />
                      <p>{item.name}</p>
                    </div>
                    <p>{item.color}</p>
                    <p>{item.size}</p>
                    <p>Rp {item.price}</p>
                    <DeleteBtn onClick={() => handleDelete(item.id)}>
                      Delete
                    </DeleteBtn>
                  </TableItem>
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
