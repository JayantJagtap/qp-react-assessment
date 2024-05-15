import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { LightTheme } from "../styles/theme";

export interface ColorModeState {
  mode: string;
  theme: {};
}

const initialState: ColorModeState = {
  mode: "light",
  theme: LightTheme,
};

export const colorModeSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<ColorModeState>) => {
      const { mode, theme } = action.payload;
      state.mode = mode;
      state.theme = theme;
    },
  },
});

export const { setMode } = colorModeSlice.actions;

export const selectColorMode = (state: RootState) => ({
  mode: state.colorMode.mode,
  theme: state.colorMode.theme,
});

export default colorModeSlice.reducer;
