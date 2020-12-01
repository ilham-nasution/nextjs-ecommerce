import { Card } from "./ProductCardStyle";
import Link from "next/link";
import { API_URL } from "../../utils/urls";

const ProductCard = ({ shoe }) => {
  return (
    <Link href={`/store/product/${shoe.slug}`}>
      <Card>
        <img src={`${API_URL}${shoe.image[0].formats.small.url}`} alt="shoe" />
        <p>{shoe.name}</p>
        <p>Rp {shoe.price}</p>
      </Card>
    </Link>
  );
};

export default ProductCard;
