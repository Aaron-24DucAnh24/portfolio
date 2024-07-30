import { THEME } from '@/utils/enums';
import { createSlice } from '@reduxjs/toolkit';

export const themeSlide = createSlice({
  name: 'theme',
  initialState: {
    value: THEME.LIGHT
  },
  reducers: {
    setTheme: (state, action) => void (state.value = action.payload)
  },
});

export const { setTheme } = themeSlide.actions;
export const themeReducer = themeSlide.reducer;