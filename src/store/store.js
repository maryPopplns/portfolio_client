import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/posts';
import currentCategoryReducer from './slices/currentCategory';

export default configureStore({
  reducer: {
    posts: postsReducer,
    currentCategory: currentCategoryReducer,
  },
});
