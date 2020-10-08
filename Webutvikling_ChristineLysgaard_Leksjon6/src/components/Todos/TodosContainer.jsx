import React, { useState } from 'react';
import TodoList from './TodoList.jsx';
import Title from '../Title.jsx';
import Modal from '../Modal.jsx';
import Button from './TodoButton.jsx';
import CompletedList from './CompletedList';

const TodosContainer = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addTodo = () => {
    setTodos((prev) => [
      { id: todos.length, created: new Date(), ...formData },
      ...prev,
    ]);
    setModal(false);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    const completedTodos = todos.find((todo) => todo.id === id);
    setCompleted((prev) => [{ ...completedTodos }, ...prev]);
    removeTodo(id);
  };

  return (
    <div className="todosWrapper">
      {modal && (
        <Modal
          addTodo={addTodo}
          setFormData={setFormData}
          formData={formData}
          setModal={setModal}
        />
      )}
      <Button name="New todo" clickHandler={() => setModal(!modal)} />
      {todos && todos.length < 1 ? (
        <p>Jippi! Ingen todos i dag</p>
      ) : (
        <>
          <Title title="Mine todos" />
          <TodoList
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            todos={todos}
          />
        </>
      )}
      <div className="completed-wrapper">
        {completed && completed.length < 1 ? (
          <p>Ingen completed</p>
        ) : (
          <>
            <CompletedList completed={completed} />
          </>
        )}
      </div>
    </div>
  );
};

export default TodosContainer;