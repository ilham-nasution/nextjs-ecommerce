import { Card } from "./ProductCardStyle";
import Link from "next/link";
import { getImageUrl } from "../../utils/urls";
import Image from "next/image";

const ProductCard = ({ shoe }) => {
  return (
    <Link href={`/store/product/${shoe.slug}`}>
      <Card>
        <Image src={getImageUrl(shoe.image[0].url)} alt={shoe.name} unsized />
        <p>{shoe.name}</p>
        <p>Rp {shoe.price}</p>
      </Card>
    </Link>
  );
};

export default ProductCard;
