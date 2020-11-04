import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.col}>
          <h5>About</h5>
          <p>
            Founded in 2010 in Amsterdam, ETQ derived under the mindset of
            eliminating over-accessorized branding and focusing primarily on
            letting the quality of the product speak for itself. Read more
          </p>
        </div>
        <div className={styles.colsm}>
          <h5>Address</h5>
          <p>Singel 465 1012 WP Amsterdam The Netherlands</p>
        </div>
        <div className={styles.col}>
          <h5>Contact</h5>
          <a>Email us</a>
          <a>Message us on WhatsApp</a>
        </div>
        <div className={styles.col}>
          <h5>Info</h5>
          <a>Shipping info</a>
          <a>Careers</a>
          <a>Wholesale</a>
        </div>
        <div className={styles.col}>
          <h5>Follow us</h5>
          <a>Instagram</a>
          <a>Facebook</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
