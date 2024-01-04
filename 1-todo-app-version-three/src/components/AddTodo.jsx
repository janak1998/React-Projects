import { useState } from "react";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="row todo-row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter Todo Here"
          className={styles.todoWidthFull}
          value={todoName}
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          className={styles.todoWidthFull}
          value={dueDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success todo-button"
          onClick={handleAddButtonClicked}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
