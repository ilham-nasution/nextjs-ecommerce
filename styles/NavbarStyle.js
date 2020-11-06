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

export const NavLink = styled.a`
  color: ${(props) => (props.unactive ? "rgb(201, 201, 201)" : "black")};
  border-bottom: ${(props) =>
    props.active ? "1px solid rgb(201, 201, 201)" : "none"};
`;

export const Cart = styled.a`
  background-color: ${(props) => (props.active ? "black" : "whitesmoke")};
  color: ${(props) => (props.active ? "whitesmoke" : "black")};
  border-radius: 100%;
  padding: 4px 8px;
`;

export const NavModal = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.404);
  width: 100%;
  height: 100vh;
`;

export const NavModalContainer = styled(motion.div)`
  position: fixed;
  top: 24px;
  right: 32px;
  background-color: white;
  width: 30%;
  padding: 88px 32px 24px 32px;
  border-radius: 4px;
  z-index: 3;
`;

export const NavModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgb(221, 221, 221);

  a {
    font-size: small;
  }

  button {
    background-color: black;
    padding: 16px 40px;
    border-radius: 4px;
    color: whitesmoke;
    border: none;
    outline: none;
    font-size: small;
  }
`;

export const NavSearch = styled(motion.div)`
  position: fixed;
  top: 0;
  background-color: white;
  width: 99%;
  height: 30%;
  margin: 8px;
  padding: 16px 24px;
  border-radius: 4px;
  z-index: 4;
`;

export const NavSearchHeader = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 3px;
    margin: 0;
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 24px;
    padding: 0;
    outline: none;
    cursor: pointer;
  }
`;

export const NavSearchInput = styled(motion.input)`
  width: 100%;
  margin: 50px auto;
  border: none;
  background-color: transparent;
  font-size: 24px;
  outline: none;
`;
