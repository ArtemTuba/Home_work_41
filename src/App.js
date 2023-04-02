import { useState } from "react";
import todo from "./Data";
import TodoItem from "./components/TodoItem";
import AddTodoItem from "./components/AddTodoItem";

function App() {

  const [todos, setTodos] = useState(todo);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  
  const handlClickTodo = (taskId) => {
    const updatedTasks = todos.map((task) => {
      if(task.id === taskId){
        return{...task, completed: !task.completed}
      } else {
       return task
      }
    })
    setTodos(updatedTasks);
  }

  const addTodo = () => {
    if (!newTodoTitle) return;
    const newTodo = {id: todos.length + 1, title: newTodoTitle, completed: false };
    setTodos([...todos, newTodo]);
    setNewTodoTitle('');
  }

  return (
    <div >
      <TodoItem todos={todos} handlClickTodo ={handlClickTodo}/>
      <AddTodoItem newTodoTitle={newTodoTitle} addTodo={addTodo} setNewTodoTitle={setNewTodoTitle}/>
    </div>
  );
}

export default App;
