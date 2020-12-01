import axios from "axios";
import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { API_URL } from "../utils/urls";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const user = Cookies.get("user");

  useEffect(() => {
    if (user) {
      const userId = JSON.parse(user).id;
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
  }, [user]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
