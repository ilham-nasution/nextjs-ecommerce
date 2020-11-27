const useSubtotal = (cartItems) => {
  const subtotal = cartItems.reduce((total, item) => {
    return total + parseInt(item.product.price);
  }, 0);
  return subtotal;
};

export default useSubtotal;
