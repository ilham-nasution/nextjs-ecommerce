import Link from "next/link";
import FormInput from "../FormInput";
import { SearchBar, MenuContainer, MenuLink } from "./SideMenuStyle";

const index = () => {
  return (
    <MenuContainer
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 1 }}
      exit={{ opacity: 0, x: 500 }}
    >
      <MenuLink>
        <SearchBar>
          <FormInput />
        </SearchBar>
        <Link href="/store/new">
          <a>New</a>
        </Link>
        <Link href="/store/product">
          <a>Collection</a>
        </Link>
        <Link href="/">
          <a>Archive</a>
        </Link>
        <Link href="/">
          <a>Shoe care</a>
        </Link>
        <Link href="/">
          <a>My account</a>
        </Link>
        <Link href="/cart">
          <a>My Cart</a>
        </Link>
      </MenuLink>
    </MenuContainer>
  );
};

export default index;
