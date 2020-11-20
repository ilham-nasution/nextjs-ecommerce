import Link from "next/link";
import styled from "styled-components";

const MenuContainer = styled.div`
  display: absolute;
  top: 0;
  right: 0;
  background-color: white;
  max-width: 100px;
  height: 100px;
  z-index: 99;
`;

const index = () => {
  return (
    <MenuContainer>
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
    </MenuContainer>
  );
};

export default index;
