import { motion } from "framer-motion";
import styled from "styled-components";

export const MenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  padding: 96px 32px 16px 32px;
  border-radius: 4px;
  z-index: 2;
`;

export const MenuLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    margin: 16px 0;
  }
`;

export const SearchBar = styled.div`
  width: 100%;
`;
