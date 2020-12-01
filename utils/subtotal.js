const subtotal = (cartItems) => {
  const result = cartItems.reduce((total, item) => {
    return total + parseInt(item.product.price);
  }, 0);
  return result;
};

export default subtotal;
