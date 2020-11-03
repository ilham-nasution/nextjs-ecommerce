import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/Cart.module.css";

const Cart = ({ setOpenCart }) => {
  return (
    <>
      <div onClick={() => setOpenCart(false)} className={styles.modal} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        exit={{ opacity: 0 }}
        className={styles.container}
      >
        <h5>Your bag is currently empty</h5>
        <div className={styles.footer}>
          <Link href="/">
            <a>View bag</a>
          </Link>
          <button>Checkout</button>
        </div>
      </motion.div>
    </>
  );
};

export default Cart;
