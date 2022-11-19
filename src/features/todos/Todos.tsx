import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  addTodo,
  updateTodoValue,
  deleteTodo,
  toggleCompleteTodo,
  completeAll,
  selectTodos
} from './todosSlice';
import Todo from './Todo';

export default function Todos() {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  console.log(todos);

  return (
    <div>
      <Todo id="1" value="breakfast" completed={false}  />
    </div>
  );
}