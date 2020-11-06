import {
  NavModal,
  NavSearch,
  NavSearchHeader,
  NavSearchInput,
} from "../styles/NavbarStyle";

const SearchForm = ({ setSearchForm }) => {
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
        <NavSearchInput
          autoFocus
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          type="text"
          placeholder="Start typing what you're looking for"
        />
      </NavSearch>
    </>
  );
};

export default SearchForm;
