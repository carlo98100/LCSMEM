const CART = "Cart";

const getCart = () => {
  return JSON.parse(sessionStorage.getItem(CART));
};

const addItemToCart = (item) => {
  let cart = null;
  if (sessionStorage.getItem(CART)) {
    cart = getCart();
    if (cart.find((cartItem) => cartItem.description === item.description)) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].description === item.description) {
          cart[i].quantity =
            parseInt(cart[i].quantity) + parseInt(item.quantity);
        }
      }
    } else {
      cart.push(item);
    }
  } else {
    cart = [];
    cart.push(item);
  }
  sessionStorage.setItem(CART, JSON.stringify(cart));
};

const removeItemFromCart = (item, field) => {
  if (sessionStorage.getItem(CART)) {
    let cart = getCart().filter((cartItem) => cartItem[field] !== item[field]);
    sessionStorage.setItem(CART, JSON.stringify(cart));
  }
};

const clearCart = () => {
  sessionStorage.removeItem(CART);
};

export { getCart, addItemToCart, removeItemFromCart, clearCart };