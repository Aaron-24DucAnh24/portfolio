import { MODE } from '@/utils/constants';
import { createSlice } from '@reduxjs/toolkit';

export const modeSlide = createSlice({
  name: 'mode',
  initialState: {
    value: MODE.LIGHT
  },
  reducers: {
    setMode: (state, action) => void (state.value = action.payload),
  },
});

export const { setMode } = modeSlide.actions;
export const modeReducer = modeSlide.reducer;