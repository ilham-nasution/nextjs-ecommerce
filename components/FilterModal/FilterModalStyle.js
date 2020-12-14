import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: white;
  z-index: 5;
  display: flex;
  padding: 32px;
  border-radius: 4px;

  @media (max-width: 425px) {
    display: block;
  }
`;

export const Col = styled.div`
  margin: 0 56px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const ColorBtn = styled.button`
  background-color: ${(props) => props.color};
  border: 1px solid rgb(221, 221, 221);
  height: 32px;
  width: 32px;
  border-radius: 50%;
  box-shadow: 1px 1px 8px -6px black;
  outline: none;
`;

export const SizeBtn = styled.button`
  background-color: transparent;
  border: 1px solid rgb(221, 221, 221);
  height: 32px;
  width: 32px;
  border-radius: 50%;
  box-shadow: 1px 1px 8px -6px black;
  outline: none;
`;
