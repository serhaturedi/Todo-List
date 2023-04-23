import './App.css';
import {useState } from 'react';



function App() {
  const [todolist, setTodolist]=useState([])
  const [todo,setTodo]=useState('')
  const addTodo=()=>{
    setTodolist(prevTodoList=>[...prevTodoList, todo])
    setTodo("");
   
  }
  return (
    <div className="App">
      <div className="todoapp">
        <div className="todoapp-content">
          <h2>Todo List</h2>
          <input type="text" placeholder='Yapılacak İşinizi Girin...' value={todo} onChange={(event)=>setTodo(event.target.value)} />
          <button onClick={()=> addTodo()} className='btn'>Ekle</button>
          <div className="listeler">
           <p>{

              todolist.map(
                todoItem=><div key={todoItem}>{todoItem}</div>
              )

            }</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
