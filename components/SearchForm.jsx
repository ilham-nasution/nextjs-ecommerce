import { useState } from "react";
import { useRouter } from "next/router";
import {
  NavModal,
  NavSearch,
  NavSearchHeader,
  NavSearchInput,
} from "../styles/NavbarStyle";

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
      <NavSearch
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        exit={{ opacity: 0 }}
      >
        <NavSearchHeader>
          <p>Shoe .</p>
          <button onClick={() => setSearchForm(false)}>x</button>
        </NavSearchHeader>
        <form onSubmit={handleSearch}>
          <NavSearchInput
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
      </NavSearch>
    </>
  );
};

export default SearchForm;
