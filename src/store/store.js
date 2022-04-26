import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/posts';
import currentPageReducer from './slices/currentPage';

export default configureStore({
  reducer: {
    posts: postsReducer,
    currentPage: currentPageReducer,
  },
});
