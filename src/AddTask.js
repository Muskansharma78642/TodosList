import React, {useState} from 'react';
import { useGlobalContext } from "./context"

const AddTask = () => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")

    const {addTask} = useGlobalContext()
    
    const onSubmit = (e) => {
        e.preventDefault()
        console.log("onAdd")
        if(!text){
            alert("Please Add Task")
        }
        addTask({ text, day })

        setText("")
        setDay("")
    }

  return (
    <form onSubmit={onSubmit}>
      <div>
          <label className="form-control label">Task</label>
          <input className="form-control input" type="text" placeholder='Add Task' value={text} onChange={(e)=> setText(e.target.value)}/>
      </div>
      <div>
          <label className="form-control label">Day and Time</label>
          <input className="form-control input" type="text" placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)}/>
      </div>
      <input className="form-control btn" type="submit" value="Save Task" />
    </form>
  );
}



export default AddTask;
