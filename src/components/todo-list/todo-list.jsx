import * as React from "react";
import { Checkbox } from "../checkbox";
import { TodosContext } from "../../todo-context";
import "./todo-list.scss";

export const TodoList = ({ onEdit, onEditTodo }) => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [isEdit, setIsEdit] = React.useState(false);

  const handleDelete = (id) => {
    // Fix an ability to delete task
  };

  const toggleCheck = (id) => {
    // Fix an ability to toggle task
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  const handleEdit = (todoItem) => {
    setIsEdit(true);
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => {
            return isEdit ? (
              <input />
            ) : (
              <>
                <Checkbox
                  key={todoItem.id}
                  label={todoItem.label}
                  checked={todoItem.checked}
                  onClick={() => toggleCheck(todoItem.id)}
                  onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
                  onDelete={() => handleDelete(todoItem.id)}
                />
                <button onClick={() => handleEdit(todoItem)}>Edit</button>
              </>
            );
          })}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
