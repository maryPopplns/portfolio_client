import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/posts';
import currentCategoryReducer from './slices/currentCategory';
import currentPageReducer from './slices/currentPage';

export default configureStore({
  reducer: {
    posts: postsReducer,
    currentCategory: currentCategoryReducer,
    currentPage: currentPageReducer,
  },
});
