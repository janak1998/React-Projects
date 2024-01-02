import styles from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div className="row todo-row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter Todo Here"
          className={styles.todoWidthFull}
        />
      </div>
      <div className="col-4">
        <input type="date" className={styles.todoWidthFull} />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success todo-button">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
