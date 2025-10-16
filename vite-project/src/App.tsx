import { useState } from "react";
import "./App.css";
import Todoitem from "./components/Todoitem";
import { dummyData } from "./data/todos";
import AddTodoForm from "./components/AddTodoForm";
import DeleteAll from "./components/DeleteAll";

function App() {
  const [todos, setTodos] = useState(dummyData);

  function setTodoCompleted(id: number, completed: boolean): void {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function addToDo(title: string): void {
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  }

  function deleteTodo(id: number): void {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function deleteAllToDos(): void {
    if (todos.length === 0) alert("List already empty");
    setTodos([]);
  }

  return (
    <main className="py-10 h-screen bg-gray-100 space-y-5">
      <h1 className="font-bold text-3xl text-center">My Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <div className="space-y-2">
          <AddTodoForm onSubmit={addToDo} />
          {todos.map((todo) => (
            <Todoitem
              key={todo.id}
              todo={todo}
              onCompleted={setTodoCompleted}
              onDelete={deleteTodo}
            />
          ))}
        </div>
        <DeleteAll onDelete={deleteAllToDos} />
      </div>
    </main>
  );
}

export default App;
