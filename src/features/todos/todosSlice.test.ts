import todosReducer, {
  addTodo,
  updateTodoValue,
  deleteTodo,
  toggleCompleteTodo,
  toggleCompleteAll,
  TodosState,
} from "./todosSlice";

describe("todos reducer", () => {
  const initialState: TodosState = {
    todos: [],
    status: "idle",
  };
  it("should handle initial state", () => {
    expect(todosReducer(undefined, { type: "unknown" })).toEqual({
      todos: [],
      status: "idle",
    });
  });

  it("should handle addTodo", () => {
    const actual = todosReducer(
      initialState,
      addTodo({ id: "1", value: "breakfast", completed: false })
    );
    expect(actual.todos).toEqual([
      { id: "1", value: "breakfast", completed: false },
    ]);
  });
});
