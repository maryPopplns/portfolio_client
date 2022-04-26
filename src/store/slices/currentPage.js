import { createSlice } from '@reduxjs/toolkit';

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState: {
    value: 'homepage',
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentPage } = currentPageSlice.actions;

export default currentPageSlice.reducer;
