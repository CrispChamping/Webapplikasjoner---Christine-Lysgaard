import React from 'react';
import Title from '../Title';

const TodoItem = ({ todo, completeTodo, removeTodo }) => (
  <article className="card">
    <header>
      <Title title={todo.title} />
      <p>{todo.description}</p>
    </header>
    <section>
      <button type="button" id="complete" onClick={() => completeTodo(todo.id)}>
        Complete
      </button>
      <button type="button" id="remove" onClick={() => removeTodo(todo.id)}>
        Remove
      </button>
    </section>
  </article>
);

export default TodoItem;
