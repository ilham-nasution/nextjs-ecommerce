import styled from "styled-components";
import { motion } from "framer-motion";

export const NavModal = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.404);
  width: 100%;
  height: 100vh;
  z-index: 3;
`;

export const NavModalContainer = styled(motion.div)`
  position: fixed;
  top: 24px;
  right: 16px;
  background-color: white;
  width: 30%;
  padding: 72px 32px 24px 32px;
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
