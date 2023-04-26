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

      if(state.cart === undefined ){
        state.cart = [];
      }

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
      state.showCart = action.payload;
    },
    addToWishlist: (state, action) => {

      if(state.wishlist === undefined ){
        state.wishlist = [];
      }
       
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
      state.showWishlist = action.payload;
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
