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
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
`;

export const NavRight = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 20%;
`;

export const NavBrand = styled.a`
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
