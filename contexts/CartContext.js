import axios from "axios";
import { createContext, useState } from "react";
import Cookies from "js-cookie";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const user = Cookies.get("user");

  if (user) {
    const userId = JSON.parse(user).id;
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
  }

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
