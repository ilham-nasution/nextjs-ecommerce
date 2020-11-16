const useSubtotal = (cartItems) => {
  const subtotal = cartItems.reduce((total, item) => {
    return total + parseInt(item.price);
  }, 0);
  return subtotal;
};

export default useSubtotal;
