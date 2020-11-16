import { Container, Row, Col, Colsm } from "./FooterStyle";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h5>About</h5>
          <p>
            Founded in 2010 in Amsterdam, ETQ derived under the mindset of
            eliminating over-accessorized branding and focusing primarily on
            letting the quality of the product speak for itself. Read more
          </p>
        </Col>
        <Colsm>
          <h5>Address</h5>
          <p>Singel 465 1012 WP Amsterdam The Netherlands</p>
        </Colsm>
        <Col>
          <h5>Contact</h5>
          <a>Email us</a>
          <a>Message us on WhatsApp</a>
        </Col>
        <Col>
          <h5>Info</h5>
          <a>Shipping info</a>
          <a>Careers</a>
          <a>Wholesale</a>
        </Col>
        <Col>
          <h5>Follow us</h5>
          <a>Instagram</a>
          <a>Facebook</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
