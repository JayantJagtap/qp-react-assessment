import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TodoState } from "@/interfaces/TodoState";

export const InDoneSlice = createSlice({
  name: "Done",
  initialState: [] as (Partial<TodoState> | null)[],
  reducers: {
    setInDone: (state, action: PayloadAction<Partial<TodoState>>) => {
      state.push(action.payload);
    },
    removeInDone: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((todo) => todo?.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    resetInProgress: () => {
      return [];
    },
  },
});
export const { removeInDone, resetInProgress, setInDone } = InDoneSlice.actions;

export const done = (state: RootState) => state.done;

const InDoneReducer = InDoneSlice.reducer;
export default InDoneReducer;
