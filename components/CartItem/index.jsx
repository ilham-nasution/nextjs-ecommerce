import { CartItem, DeleteBtn, Product, ProductDetail } from "./CartItemStyle";

const Index = ({ item, handleDelete }) => {
  return (
    <CartItem>
      <Product>
        <img
          src={`http://localhost:1337${item.image[0].formats.thumbnail.url}`}
          alt={item.name}
          width="80px"
          height="80px"
        />
        <ProductDetail>
          <p>{item.name}</p>
          <p>{item.color}</p>
          <p>{item.size}</p>
          <p>Rp {item.price}</p>
        </ProductDetail>
      </Product>
      <p>{item.color}</p>
      <p>{item.size}</p>
      <p>Rp {item.price}</p>
      <DeleteBtn onClick={() => handleDelete(item.id)}>Delete</DeleteBtn>
    </CartItem>
  );
};

export default Index;
