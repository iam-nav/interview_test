import { PRODUCTS_IN_CART,UPDATE_CART } from "../../types/products_type";

const initialState = {
    cartList: [],
};

const cartReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case PRODUCTS_IN_CART:
      return {
        ...state,
        cartList: [...state.cartList,action.cartList[0]],
      };
      case UPDATE_CART:
        return {
          ...state,
          cartList: action.updateCart,
        };

    default:
      return state;
  }
};

export default cartReducer;
