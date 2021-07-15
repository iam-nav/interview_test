import { PRODUCTS_IN_CART,UPDATE_CART } from "../../types/products_type";

export const setCartList = (cartList) => ({
  type: PRODUCTS_IN_CART,
  cartList,
});

export const updateCart = (updateCart) => ({
  type: UPDATE_CART,
  updateCart,
});

