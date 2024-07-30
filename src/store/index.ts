import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './themeSlide';
import { modeReducer } from './modeSlide';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    mode: modeReducer,
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;