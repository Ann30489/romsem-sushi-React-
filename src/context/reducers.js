export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_AMOUNT = "ADD_AMOUNT";
export const REMOVE_ALL = "REMOVE_ALL";

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

const removeAllFromCart = (state) => {
  const updatedCart = [...state.cart];
  updatedCart.splice(0, updatedCart.length);
  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === productId
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

const addProductAmount = (productId, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === productId
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity++;
  updatedCart[updatedItemIndex] = updatedItem;

  return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    case ADD_AMOUNT:
      return addProductAmount(action.productId, state);
    case REMOVE_ALL:
      return removeAllFromCart(state);
    default:
      return state;
  }
};
