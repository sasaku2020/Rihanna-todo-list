import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form';
import ToDoList from './Components/Todolist';


function App() {
  const [inputText, setInputText] = useState ("");
  const [Todos, setTodos] = useState ([]);
  const [status, setStatus] = useState ("all");



  return (
    <div className="App">
      <div className="container">
        {/* <!------ header ------> */}
        <header>
            <h1 className="hero">Rihanna ToDo List</h1>
        </header>
    </div>
  <Form inputText = {inputText}
        Todos={Todos}
        setTodos={setTodos}
        setInputText={setInputText}
        status={status}
        setStatus={setStatus}/>
  <ToDoList setTodos={setTodos} Todos={Todos} inputText = {inputText}/>
    </div>
  );
}

export default App;
