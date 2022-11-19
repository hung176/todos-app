import React from 'react';
import { Todo as TodoType } from './todosSlice';

const Todo = ({ id, value, completed }: TodoType) => {
  return (
    <div>
      Todo item
    </div>
  )
}

export default Todo;
