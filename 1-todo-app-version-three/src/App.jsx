import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProviderrovider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProviderrovider>
      <center className="todo-contianer">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProviderrovider>
  );
}

export default App;
