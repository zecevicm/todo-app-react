import React, { useState } from 'react'
import "./TodoApp.css"

function TodoApp() {


const [tasks,setTask] = useState(["eat lunch", "get tushed", "walk"]);
const [newTask, setNewTask] = useState("");

function handleChange(e) {
    setNewTask(e.target.value);
}

function addTask() {

    if(newTask.trim() !==("") ) {
    setTask( t=> [...t, newTask]);
    setNewTask("");
}
}

function deleteTask(index) {
const updatedTasks= tasks.filter((element, i) => i!==index );
setTask(updatedTasks);

}



  return (
    <div className='todo-app'>
<h1>To Do App</h1>
        <input className='input' type="text"
                placeholder="enter task"
                onChange={handleChange}
                value={newTask}/>
              
    <button className="add-btn"
     onClick={addTask}>Add</button>


<ol>

{tasks.map((value,index) => <li key={index}><span>{value}</span>

<button className="delete-btn" onClick={()=>deleteTask(index)}>Delete</button>

</li>)}

</ol>

           

    </div>
  )
}

export default TodoApp