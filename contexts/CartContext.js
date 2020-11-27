import axios from "axios";
import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const userId = JSON.parse(Cookies.get("user")).id;
    axios
      .get(
        `http://localhost:1337/user-bags?_where[users_permissions_user]=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setCartItems(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(cartItems);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
