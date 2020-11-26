import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import FormInput from "../FormInput";
import { SearchBar, MenuContainer, MenuLink } from "./SideMenuStyle";

const index = ({ setSideMenu }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/store/product?search=${query}`);
  };

  return (
    <MenuContainer
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 1 }}
      exit={{ opacity: 0, x: 500 }}
    >
      <MenuLink>
        <SearchBar>
          <form onSubmit={handleSearch}>
            <FormInput
              icon="/search-icon.png"
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </SearchBar>
        <Link href="/store/new">
          <a onClick={() => setSideMenu(false)}>New</a>
        </Link>
        <Link href="/store/product">
          <a onClick={() => setSideMenu(false)}>Collection</a>
        </Link>
        <Link href="/">
          <a onClick={() => setSideMenu(false)}>Archive</a>
        </Link>
        <Link href="/">
          <a onClick={() => setSideMenu(false)}>Shoe care</a>
        </Link>
        <Link href="/sign-in">
          <a onClick={() => setSideMenu(false)}>My account</a>
        </Link>
        <Link href="/cart">
          <a onClick={() => setSideMenu(false)}>My Cart</a>
        </Link>
      </MenuLink>
    </MenuContainer>
  );
};

export default index;
