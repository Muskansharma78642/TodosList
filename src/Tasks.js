import React from 'react';
import Task from "./Task"
import AddTask from "./AddTask"
import { useGlobalContext } from "./context"


const Tasks =() => {
    const {tasks, setTasks} = useGlobalContext()

  const removeTask = (id)=> {
      console.log(id)
      let newTasks = tasks.filter((task) => task.id !== id)
      setTasks(newTasks)
  }
   
  return (
      <div className="container">
      <AddTask/>
        {tasks.map((task)=>{
            return <Task key={task.id} {...task} removeTask={removeTask}/>
        })}
      </div>
    
  );
}

export default Tasks