import { useState } from "react";
import { useRouter } from "next/router";
import { NavModal } from "../../styles/NavModalStyle";
import { Container, Header, Input } from "./SearchModalStyled";

const SearchForm = ({ setSearchForm }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchForm(false);
    router.push(`/store/product?search=${query}`);
  };

  return (
    <>
      <NavModal onClick={() => setSearchForm(false)} />
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        exit={{ opacity: 0 }}
      >
        <Header>
          <p>Shoe .</p>
          <button onClick={() => setSearchForm(false)}>x</button>
        </Header>
        <form onSubmit={handleSearch}>
          <Input
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
            value={query}
            type="text"
            placeholder="Start typing what you're looking for"
          />
        </form>
      </Container>
    </>
  );
};

export default SearchForm;
