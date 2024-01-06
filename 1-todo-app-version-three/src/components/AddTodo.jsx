import { useContext, useRef } from "react";
import styles from "./AddTodo.module.css";
import { GrAdd } from "react-icons/gr";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const { addNewItem } = useContext(TodoItemsContext);

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };
  return (
    <div className="container text-center">
      <form className="row todo-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            className={styles.todoWidthFull}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            className={styles.todoWidthFull}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success todo-button">
            <GrAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
