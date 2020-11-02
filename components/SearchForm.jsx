import { motion } from "framer-motion";
import styles from "../styles/SearchForm.module.css";

const SearchForm = ({ setSearchForm }) => {
  return (
    <>
      <div onClick={() => setSearchForm(false)} className={styles.modal} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        exit={{ opacity: 0 }}
        className={styles.search}
      >
        <div className="row">
          <p className={styles.logo}>Shoe .</p>
          <button className={styles.btn} onClick={() => setSearchForm(false)}>
            x
          </button>
        </div>
        <motion.input
          autoFocus
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className={styles.form}
          type="text"
          placeholder="Start typing what you're looking for"
        />
      </motion.div>
    </>
  );
};

export default SearchForm;
