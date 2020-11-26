import styled from "styled-components";
import { motion } from "framer-motion";

export const Navbar = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
  z-index: 3;
  position: ${(props) => (props.fixedTop ? "fixed" : "")};
  top: 0;
`;

export const NavLink = styled.a`
  color: ${(props) => (props.unactive ? "rgb(201, 201, 201)" : "black")};
  border-bottom: ${(props) =>
    props.active ? "1px solid rgb(201, 201, 201)" : "none"};
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-right: 16px;
  }
`;

export const NavChild = styled.div`
  @media (max-width: 1023px) {
    display: none;
  }
  display: flex;
  align-items: center;
`;

export const NavRight = styled.div`
  @media (max-width: 1023px) {
    display: none;
  }
  display: flex;
  align-items: center;
  a {
    margin-left: 16px;
  }
`;

export const NavBrand = styled.div`
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 3px;
`;

export const NavCart = styled.a`
  background-color: ${(props) => (props.active ? "black" : "whitesmoke")};
  color: ${(props) => (props.active ? "whitesmoke" : "black")};
  border-radius: 100%;
  padding: 4px 8px;
`;
