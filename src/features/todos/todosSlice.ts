import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface Todo {
  id: string;
  value: string;
  completed: boolean;
}

export interface TodosState {
  todos: Todo[];
  status: "idle" | "loading" | "failed";
}

const initialState: TodosState = {
  todos: [],
  status: "idle",
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload];
    },
    updateTodoValue: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index] = action.payload;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id === action.payload);
    },
    toggleCompleteTodo: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      const completed = state.todos[index].completed;
      state.todos[index].completed = !completed;
    },
    completeAll: (state) => {
      state.todos = state.todos.map((todo) => ({ ...todo, completed: true }));
    },
  },
});

export const {
  addTodo,
  updateTodoValue,
  deleteTodo,
  toggleCompleteTodo,
  completeAll,
} = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todosState.todos;

export default todosSlice.reducer;
