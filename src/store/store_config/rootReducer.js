import { combineReducers } from "redux"
import product from "../reducers/products/product"

const rootReducer = combineReducers({
  cartProducts:product
})

export default rootReducer
