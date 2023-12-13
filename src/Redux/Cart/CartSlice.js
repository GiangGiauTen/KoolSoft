import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const course = action.payload;
      const isInCart = state.cartItems.some(
        item => item.courseName === course.courseName,
      );

      if (!isInCart) {
        state.cartItems.push(course);
      }
    },
    removeFromCart: (state, action) => {
      const course = action.payload;
      state.cartItems = state.cartItems.filter(
        item => item.courseName !== course.courseName,
      );
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export const selectCartItems = state => state.cart.cartItems;

export default CartSlice.reducer;
