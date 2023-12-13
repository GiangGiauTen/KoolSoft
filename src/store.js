import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Redux/Cart/CartSlice';
import paySlice from './Redux/Pay/PaySlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    pay: paySlice,
  },
});

export default store;
