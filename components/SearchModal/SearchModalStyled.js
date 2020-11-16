import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
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

export const Header = styled.div`
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
  }
`;

export const Input = styled(motion.input)`
  width: 100%;
  margin: 50px auto;
  border: none;
  background-color: transparent;
  font-size: 24px;
  outline: none;
`;
