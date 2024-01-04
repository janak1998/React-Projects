import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (toDeleteItemName) => {
    const newTodoItems = todoItems.filter(
      (item) => item.name != toDeleteItemName
    );
    setTodoItems(newTodoItems);
    console.log(toDeleteItemName);
  };

  return (
    <center className="todo-contianer">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length == 0 && (
        <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
      )}

      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
