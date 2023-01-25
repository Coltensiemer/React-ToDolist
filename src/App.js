
import React, { useState, useRef}from 'react'; 
import ToDoList from './ToDoList';



function App() {
  const [todos, setToDos] = useState([]) 
  const todoNameRef = useRef(); 


  function addTooDo(e) { 
    const name = todoNameRef.current.value
    // if (name === " ") return 
    
  }



  return (
    <>
  <ToDoList todos = {todos} /> 
  <input ref={todoNameRef} type="text" />
  <button> Add To Do</button>
  <button> Clear Completed </button>
  <div>0</div>

  </>
  ) 
}; 

export default App;
