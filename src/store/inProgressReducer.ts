import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TodoState } from "@/interfaces/TodoState";

export const InProgressSlice = createSlice({
  name: "InProgress",
  initialState: [] as (Partial<TodoState> | null)[],
  reducers: {
    setInProgress: (state, action: PayloadAction<Partial<TodoState>>) => {
      state.push(action.payload);
    },
    removeInProgress: (state, action: PayloadAction<number>) => {
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
export const { removeInProgress, resetInProgress, setInProgress } =
  InProgressSlice.actions;

export const todo = (state: RootState) => state.todo;

const InProgressReducer = InProgressSlice.reducer;
export default InProgressReducer;
