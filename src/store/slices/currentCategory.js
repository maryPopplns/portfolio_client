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

// Action creators are generated for each case reducer function
export const { setCurrentCategory } = currentCategorySlice.actions;

export default currentCategorySlice.reducer;
