import { getImageUrl } from "../../utils/urls";
import { CartItem, DeleteBtn, Product, ProductDetail } from "./CartItemStyle";
import Image from "next/image";

const Index = ({ item, handleDelete }) => {
  return (
    <CartItem>
      <Product>
        <Image
          src={getImageUrl(item.product.image[0].formats.thumbnail.url)}
          alt={item.name}
          width={80}
          height={80}
        />
        <ProductDetail>
          <p>{item.product.name}</p>
          <p>{item.color.name}</p>
          <p>{item.size.name}</p>
          <p>Rp {item.product.price}</p>
        </ProductDetail>
      </Product>
      <p>{item.color.name}</p>
      <p>{item.size.name}</p>
      <p>Rp {item.product.price}</p>
      <DeleteBtn onClick={() => handleDelete(item.id)}>Delete</DeleteBtn>
    </CartItem>
  );
};

export default Index;
