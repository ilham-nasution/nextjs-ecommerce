import { CartItem, DeleteBtn } from "./CartItemStyle";

const Index = ({ item, handleDelete }) => {
  return (
    <CartItem>
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
      <DeleteBtn onClick={() => handleDelete(item.id)}>Delete</DeleteBtn>
    </CartItem>
  );
};

export default Index;
