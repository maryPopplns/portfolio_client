import postsReducer from './slices/posts';
import { configureStore } from '@reduxjs/toolkit';
import currentPageReducer from './slices/currentPage';
import currentCategoryReducer from './slices/currentCategory';

export default configureStore({
  reducer: {
    posts: postsReducer,
    currentPage: currentPageReducer,
    currentCategory: currentCategoryReducer,
  },
});
