import * as React from "react";
import { TodosContext } from "../../todo-context";
import "./todo-form.scss";

export const TodoForm = ({ isEdit, editTodo }) => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    // Fin an ability to add new task
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
    const newTask = { id: id, label: task, checked: false };
    const newTodo = [...todos, newTask];
    console.log(newTask);
    setTodos(newTodo);
    setTask("");
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      {isEdit ? (
        <input value={editTodo?.label} placeholder="edit" />
      ) : (
        <>
          <input
            placeholder="Enter new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyUp={handleKeyUp}
          />
          <button type="button" onClick={handleAddTodo}>
            Add task
          </button>
        </>
      )}
    </div>
  );
};
