import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TodoState } from "@/interfaces/TodoState";

export const ToDoSlice = createSlice({
  name: "TODO",
  initialState: [] as (Partial<TodoState> | null)[],
  reducers: {
    setTodo: (state, action: PayloadAction<Partial<TodoState>>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((todo) => todo?.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    resetTodo: (state) => {
      return [];
    },
  },
});
export const { setTodo, removeTodo, resetTodo } = ToDoSlice.actions;

export const todo = (state: RootState) => state.todo;

const todoReducer = ToDoSlice.reducer;
export default todoReducer;
