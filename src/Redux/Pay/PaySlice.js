import { createSlice } from '@reduxjs/toolkit';

const paySlice = createSlice({
  name: 'pay',
  initialState: {
    selectedItems: [],
  },
  reducers: {
    toggleSelectedItems: (state, action) => {
      const index = action.payload;
      const selectedIndex = state.selectedItems.indexOf(index);

      if (selectedIndex === -1) {
        state.selectedItems.push(index);
      } else {
        state.selectedItems.splice(selectedIndex, 1);
      }
    },
  },
});
export const { toggleSelectedItems } = paySlice.actions;
export const selectPayItems = state => state.pay.selectedItems;
export default paySlice.reducer;
