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

export default function Todos() {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  console.log(todos);

  return (
    <div>
      This is Todos app.
    </div>
  );
}