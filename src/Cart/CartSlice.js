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
  },
});

export const { addToCart } = CartSlice.actions;
export const selectCartItems = state => state.cart.cartItems;

export default CartSlice.reducer;
