import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
import { CheckLg } from "react-bootstrap-icons";

const initialState = {
  cart: [],
  wishlist: [],
  showCart: false,
  showWishlist: false,
};

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
        state.cart.push({
          ...action.payload,
          quantity: +action.payload.quantity,
        });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    updateQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (action.payload.quantity >= 1) {
        item.quantity = action.payload.quantity;
      }
    },
    removeItem: (state, action) => {
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
    },
    addToWishlist: (state, action) => {
      console.log("WL", action.payload);

      const itemInWishlist = state.wishlist.find(
        (item) => item.id === action.payload.id
      );

      if (!itemInWishlist) {
        state.wishlist.push({
          ...action.payload,
        });
      }
    },
    removeFromWishlist: (state, action) => {
      const removeItem = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
      state.wishlist = removeItem;
    },
    setShowWishlist: (state, action) => {
      // console.log("SHOW CART", action.payload);
      // const showCart = action.payload;

      state.showWishlist = action.payload;
      // return(newstate);
      // state.cart={...state.cart, showCart}
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  updateQuantity,
  removeItem,
  setShowCart,
  addToWishlist,
  removeFromWishlist,
  setShowWishlist,
} = cartSlice.actions;
