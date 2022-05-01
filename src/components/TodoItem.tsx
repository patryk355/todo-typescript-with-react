import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
  text: string;
  onDeleteTodo: () => void;
}> = ({ text, onDeleteTodo }) => {
  return (
    <li className={classes.item} onClick={onDeleteTodo}>
      {text}
    </li>
  );
};

export default TodoItem;
