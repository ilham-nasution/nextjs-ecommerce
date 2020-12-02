import { Card } from "./ProductCardStyle";
import Link from "next/link";

const ProductCard = ({ shoe }) => {
  return (
    <Link href={`/store/product/${shoe.slug}`}>
      <Card>
        <img src={shoe.image[0].formats.small.url} alt="shoe" />
        <p>{shoe.name}</p>
        <p>Rp {shoe.price}</p>
      </Card>
    </Link>
  );
};

export default ProductCard;
