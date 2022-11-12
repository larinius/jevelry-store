import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
import { CheckLg } from "react-bootstrap-icons";

const initialState = { cart: [], showCart: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);

      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.quantity += +action.payload.quantity;
      } else {
        state.cart.push({ ...action.payload, quantity: +action.payload.quantity });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      console.log("Remove", action.payload);
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeItem;
    },
    setShowCart: (state, action) => {
      // console.log("SHOW CART", action.payload);
      // const showCart = action.payload;

      state.showCart = action.payload;
      // return(newstate);
      // state.cart={...state.cart, showCart}
      console.log(current(state));
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  setShowCart,
} = cartSlice.actions;
