import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
import FormInput from "../FormInput";

const MenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  padding: 100px 32px;
  border-radius: 4px;
  z-index: 2;
`;

const MenuLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    margin: 16px 0;
  }
`;

const SearchBar = styled.div`
  width: 100%;
`;

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
        <Link href="/">
          <a>My Cart</a>
        </Link>
      </MenuLink>
    </MenuContainer>
  );
};

export default index;
