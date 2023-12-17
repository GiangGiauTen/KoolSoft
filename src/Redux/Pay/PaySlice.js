import { createSlice } from '@reduxjs/toolkit';

const paySlice = createSlice({
  name: 'pay',
  initialState: {
    selectedItems: [],
  },
  reducers: {
    toggleSelectedItems: (state, action) => {
      const { item } = action.payload;

      const selectedItemIndex = state.selectedItems.findIndex(
        selected => selected.courseName === item.courseName,
      );

      if (selectedItemIndex === -1) {
        // If the item is not in the selectedItems array, add it
        state.selectedItems.push(item);
      } else {
        // If the item is already in the selectedItems array, remove it
        state.selectedItems.splice(selectedItemIndex, 1);
      }
    },
  },
});
export const { toggleSelectedItems } = paySlice.actions;
export const selectPayItems = state => state.pay.selectedItems;
export default paySlice.reducer;
