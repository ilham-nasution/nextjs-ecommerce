import axios from "axios";
import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { API_URL } from "../utils/urls";
import jwtDecode from "jwt-decode";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const jwt = Cookies.get("jwt");

  useEffect(() => {
    if (jwt) {
      const userId = jwtDecode(jwt).id;
      axios
        .get(`${API_URL}/orders?_where[user]=${userId}`, {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
        })
        .then((res) => {
          console.log(res);
          setCartItems(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [jwt]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
