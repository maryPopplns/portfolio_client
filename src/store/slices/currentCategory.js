import { createSlice } from '@reduxjs/toolkit';

export const currentCategorySlice = createSlice({
  name: 'currentCategory',
  initialState: {
    value: 'all',
  },
  reducers: {
    setCurrentCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentCategory } = currentCategorySlice.actions;

export default currentCategorySlice.reducer;
