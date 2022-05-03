import { createSlice } from '@reduxjs/toolkit';

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState: {
    value: 'home',
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentPage } = currentPageSlice.actions;

export default currentPageSlice.reducer;
